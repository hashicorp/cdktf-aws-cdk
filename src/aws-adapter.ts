/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/aws-adapter.ts

import { Stack, CfnElement, IResolvable } from "aws-cdk-lib";
import {
  TerraformResource,
  Lazy,
  Aspects,
  Fn,
  Op,
  TerraformLocal,
  TerraformOutput,
  Token,
  Tokenization,
} from "cdktf";
import { conditional, propertyAccess } from "cdktf/lib/tfExpression";
import { toSnakeCase } from "codemaker";
import { Construct } from "constructs";

import { DataAwsAvailabilityZones } from "./aws/data-aws-availability-zones";
import { DataAwsCallerIdentity } from "./aws/data-aws-caller-identity";
import { DataAwsPartition } from "./aws/data-aws-partition";
import { DataAwsRegion } from "./aws/data-aws-region";
import { AwsProvider } from "./aws/provider";
import { CloudFormationResource, CloudFormationTemplate } from "./cfn";
import { findMapping, Mapping } from "./mapping";

function toTerraformIdentifier(identifier: string) {
  return toSnakeCase(identifier).replace(/-/g, "_");
}

function getConditionConstructId(conditionId: string) {
  return `condition_${conditionId}`;
}

export class AwsTerraformAdapter extends Stack {
  constructor(scope: Construct, id: string) {
    super(undefined, id);

    const host = new TerraformHost(scope, id, this);

    Aspects.of(scope).add({
      visit: (node) => {
        if (node === scope) {
          // TODO: invokeAWSAspects(this); -> find usages of AWSAspects in AWS constructs
          host.convert();
        }
      },
    });
  }
}

class TerraformHost extends Construct {
  private awsPartition?: DataAwsPartition;
  private awsRegion?: DataAwsRegion;
  private awsCallerIdentity?: DataAwsCallerIdentity;
  private awsAvailabilityZones: {
    [region: string]: DataAwsAvailabilityZones;
  } = {};
  private regionalAwsProviders: { [region: string]: AwsProvider } = {};

  // TODO: expose this via some method?
  private readonly mappingForLogicalId: {
    [logicalId: string]: {
      resourceType: string;
      mapping: Mapping<TerraformResource>;
    };
  } = {};

  constructor(
    scope: Construct,
    id: string,
    private readonly host: AwsTerraformAdapter
  ) {
    super(scope, id);
  }

  convert() {
    for (const r of this.host.node.findAll()) {
      if (r instanceof CfnElement) {
        const cfn = this.host.resolve(
          (r as any)._toCloudFormation()
        ) as CloudFormationTemplate;
        for (const [logical, value] of Object.entries(cfn.Resources || {})) {
          this.newTerraformResource(this, logical, value);
        }
        for (const [conditionId, condition] of Object.entries(
          cfn.Conditions || {}
        )) {
          this.newTerraformLocalFromCondition(this, conditionId, condition);
        }
        for (const [outputId, args] of Object.entries(cfn.Outputs || {})) {
          this.newTerraformOutput(this, outputId, args);
        }
      }
    }
  }

  private getRegionalAwsProvider(region: string): AwsProvider {
    if (!this.regionalAwsProviders[region]) {
      this.regionalAwsProviders[region] = new AwsProvider(
        this,
        `aws_${toTerraformIdentifier(region)}`,
        {
          region,
          alias: toTerraformIdentifier(region),
        }
      );
    }
    return this.regionalAwsProviders[region];
  }

  private getAvailabilityZones(region?: string): DataAwsAvailabilityZones {
    const DEFAULT_REGION_KEY = "default_region";
    if (!region) {
      region = DEFAULT_REGION_KEY;
    }

    if (!this.awsAvailabilityZones[region]) {
      this.awsAvailabilityZones[region] = new DataAwsAvailabilityZones(
        this,
        `aws_azs_${toTerraformIdentifier(region)}`,
        {
          provider:
            region === DEFAULT_REGION_KEY
              ? undefined
              : this.getRegionalAwsProvider(region),
        }
      );
    }
    return this.awsAvailabilityZones[region];
  }

  private newTerraformResource(
    scope: Construct,
    logicalId: string,
    resource: CloudFormationResource
  ): TerraformResource | null {
    // TODO: add debug log console.log(JSON.stringify(resource, null, 2));
    const m = findMapping(resource.Type);
    if (!m) {
      throw new Error(`no mapping for ${resource.Type}`);
    }

    const props = this.processIntrinsics(resource.Properties ?? {});
    const conditionId = resource.Condition;

    this.mappingForLogicalId[logicalId] = {
      resourceType: resource.Type,
      mapping: m,
    };

    const res = m.resource(scope, logicalId, props);

    if (conditionId) {
      if (!res) {
        throw new Error(
          `Condition has been found on resource that has no representation in Terraform: ${resource.Type}. Mapper function returned null`
        );
      }

      res.count = Token.asNumber(
        conditional(this.getConditionTerraformLocal(conditionId), 1, 0)
      );
    }

    const keys = Object.keys(props).filter((k) => props[k] !== undefined);
    if (keys.length > 0) {
      throw new Error(
        `cannot map some properties of ${resource.Type}: ${JSON.stringify(
          props,
          undefined,
          2
        )}`
      );
    }

    return res;
  }

  private newTerraformOutput(scope: Construct, outputId: string, args: any) {
    return new TerraformOutput(scope, outputId, {
      value: this.processIntrinsics(args.Value),
      description: args.Description || undefined,
    });
  }

  private newTerraformLocalFromCondition(
    scope: Construct,
    conditionId: string,
    condition: any
  ) {
    const local = new TerraformLocal(
      scope,
      getConditionConstructId(conditionId),
      this.processIntrinsics(condition)
    );

    return local;
  }

  private getConditionTerraformLocal(conditionId: string): IResolvable {
    return Lazy.anyValue({
      produce: () => {
        const local = this.node.tryFindChild(
          getConditionConstructId(conditionId)
        ) as TerraformLocal;
        if (!local) {
          throw new Error(
            `Could not find TerraformLocal for condition with id=${conditionId}`
          );
        }
        return local.expression;
      },
    });
  }

  /**
   * will replace { Condition: 'MyCondition' } with Terraform Local for "MyCondition"
   */
  private processConditions(obj: any): any {
    if (typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((x) => this.processConditions(x));
    }

    if (Object.keys(obj).length === 1 && typeof obj.Condition === "string") {
      return this.getConditionTerraformLocal(obj.Condition);
    }

    return obj;
  }

  private processIntrinsics(obj: any): any {
    if (typeof obj === "string") {
      const escapeString = (str: string) => {
        // we wrap strings if they contain stringified json (e.g. for step functions)
        // (which contains quotes (") which need to be escaped)
        // or if they contain `${` which needs to be escaped for Terraform strings as well
        if (
          !Token.isUnresolved(str) && // only if there is no token in them
          (str.includes('"') || str.includes("${"))
        ) {
          return Fn.rawString(str);
        } else {
          return str; // e.g. a single Token in a string will be returned as is
        }
      };

      // find tokens in string
      const tokenizedFragments = Tokenization.reverseString(obj);

      // zero or one fragments won't enter the join() function below
      // so we directly escape the whole string
      if (tokenizedFragments.length < 2) {
        return escapeString(obj);
      }

      // if there are more parts, join them into an array
      const parts = tokenizedFragments.join({
        join: (left, right): string[] => {
          const acc: string[] = Array.isArray(left) ? [...left] : [];

          // on the initial invocation left is still a single string and not an array
          if (!Array.isArray(left)) {
            acc.push(escapeString(left));
          }
          acc.push(escapeString(right));

          return acc;
        },
      });

      return Fn.join("", parts); // we return a TF function to be able to combine rawStrings and unescaped tokens
    }

    if (typeof obj !== "object") {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((x) => this.processIntrinsics(x));
    }

    const ref = obj.Ref;
    if (ref) {
      return this.resolveRef(ref);
    }

    const intrinsic = Object.keys(obj)[0];
    if (intrinsic?.startsWith("Fn::") && Object.keys(obj).length === 1) {
      return this.resolveIntrinsic(intrinsic, obj[intrinsic]);
    } else if (intrinsic?.startsWith("Fn:") && !intrinsic?.startsWith("Fn::")) {
      console.warn(
        'Found possible intrinsic function starting with "Fn:" instead of "Fn::". Typo?'
      );
    }

    const result: any = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = this.processIntrinsics(v);
    }

    return result;
  }

  private resolveAtt(logicalId: string, attribute: string) {
    const child = this.node.tryFindChild(logicalId) as TerraformResource;
    if (!child) {
      throw new Error(
        `unable to resolve a "Ref" to a resource with the logical ID ${logicalId}`
      );
    }

    const mapping = this.mappingForLogicalId[logicalId];
    const att =
      typeof mapping.mapping.attributes === "function"
        ? mapping.mapping.attributes.bind(null, attribute)
        : mapping.mapping.attributes[attribute];
    if (!att) {
      throw new Error(
        `no "${attribute}" attribute mapping for resource of type ${mapping.resourceType}`
      );
    }

    return att(child) as string;
  }

  private resolvePseudo(ref: string) {
    switch (ref) {
      case "AWS::Partition": {
        this.awsPartition =
          this.awsPartition ?? new DataAwsPartition(this, "aws-partition");
        return this.awsPartition.partition;
      }

      case "AWS::Region": {
        this.awsRegion =
          this.awsRegion ?? new DataAwsRegion(this, "aws-region");
        return this.awsRegion.name;
      }

      case "AWS::AccountId": {
        this.awsCallerIdentity =
          this.awsCallerIdentity ??
          new DataAwsCallerIdentity(this, "aws-caller-identity");
        return this.awsCallerIdentity.accountId;
      }

      case "AWS::NoValue": {
        return undefined;
      }

      case "AWS::URLSuffix": {
        this.awsPartition =
          this.awsPartition ?? new DataAwsPartition(this, "aws-partition");
        return this.awsPartition.dnsSuffix;
      }

      default:
        throw new Error(`unable to resolve pseudo reference ${ref}`);
    }
  }

  private resolveRef(ref: string) {
    if (ref?.startsWith("AWS::")) {
      return this.resolvePseudo(ref);
    }

    return Lazy.stringValue({ produce: () => this.resolveAtt(ref, "Ref") });
  }

  private resolveIntrinsic(fn: string, params: any) {
    switch (fn) {
      case "Fn::GetAtt": {
        return Lazy.stringValue({
          produce: () => this.resolveAtt(params[0], params[1]),
        });
      }

      case "Fn::Join": {
        const [delim, strings] = params;
        return Fn.join(
          this.processIntrinsics(delim),
          this.processIntrinsics(strings)
        );
      }

      case "Fn::Select": {
        const [index, list] = params;
        const i = this.processIntrinsics(index);
        const ll = this.processIntrinsics(list);
        return Fn.element(ll, i);
      }

      case "Fn::GetAZs": {
        let [region]: [string | undefined | "AWS::Region"] = params;

        // AWS::Region or undefined fall back to default region for the stack
        if (region === "AWS::Region") {
          region = undefined;
        }
        return this.getAvailabilityZones(region).names;
      }

      case "Fn::Base64": {
        const [input] = params;
        return Fn.base64encode(this.processIntrinsics(input));
      }

      case "Fn::Cidr": {
        // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-cidr.html
        // https://www.terraform.io/docs/language/functions/cidrsubnets.html
        const [ipBlock, count, cidrBits]: [any, number | string, any] =
          this.processIntrinsics(params);
        const prefix = ipBlock;
        // given count=4 bits=8 this will be [8, 8, 8, 8] to match the Fn.cidrsubnets interface
        const newBits = Array(Number(count)).fill(cidrBits, 0);
        return Fn.cidrsubnets(prefix, newBits);
      }

      case "Fn::FindInMap": {
        const [rawMap, ...rawParams] = params;
        const map = this.processIntrinsics(rawMap);
        const processedParams = this.processIntrinsics(rawParams);
        return propertyAccess(map, processedParams);
      }

      case "Fn::Split": {
        const [separator, string] = params;
        return Fn.split(
          this.processIntrinsics(separator),
          this.processIntrinsics(string)
        );
      }

      case "Fn::Sub": {
        const [rawString, replacementMap]: [string, object] = params;

        let resultString: string | IResolvable = rawString;

        // replacementMap is an object
        Object.entries(replacementMap).map(([rawVarName, rawVarValue]) => {
          if (typeof rawVarName !== "string") {
            throw new Error(
              `Only strings are supported as VarName in Sub function. Encountered ${JSON.stringify(
                rawVarName
              )} instead.`
            );
          }
          const varName = rawVarName; // we use this as object key
          const varValue = this.processIntrinsics(rawVarValue);

          resultString = Fn.replace(
            Token.asString(resultString),
            Fn.rawString("${" + varName + "}"),
            varValue
          );
        });

        // replace ${!Literal} with ${Literal}
        // see: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html
        resultString = Fn.replace(
          resultString,
          Fn.rawString("/\\\\$\\\\{!(\\\\w+)\\\\}/"),
          Fn.rawString("${$1}")
        );
        // in HCL: replace(local.template, "/\\$\\{!(\\w+)\\}/", "$${$1}")

        return resultString;
      }

      case "Fn::Equals": {
        const [left, right] = this.processIntrinsics(params);
        return Op.eq(left, right);
      }

      case "Fn::And": {
        const [first, ...additional]: [any, any[]] = this.processConditions(
          this.processIntrinsics(params)
        );
        // Fn:And supports 2-10 parameters to chain
        return additional.reduce(
          (current, expression) => Op.and(current, expression),
          first
        );
      }

      case "Fn::Or": {
        const [first, ...additional]: [any, any[]] = this.processConditions(
          this.processIntrinsics(params)
        );
        // Fn:Or supports 2-10 parameters to chain
        return additional.reduce(
          (current, expression) => Op.or(current, expression),
          first
        );
      }

      case "Fn::If": {
        const [conditionId, trueExpression, falseExpression] =
          this.processIntrinsics(params);
        return conditional(
          this.getConditionTerraformLocal(conditionId),
          trueExpression,
          falseExpression
        );
      }

      case "Fn::Not": {
        let [condition] = this.processIntrinsics(params);
        if (typeof condition === "string") {
          condition = this.getConditionTerraformLocal(condition);
        }

        return Op.not(condition);
      }

      case "Fn::Transform": {
        // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html
        throw new Error(
          "Fn::Transform is not supported – Cfn Template Macros are not supported yet"
        );
      }

      case "Fn::ImportValue": {
        // TODO: support cross cfn stack references?
        // This is related to the Export Name from outputs https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html
        // We might revisit this once the CDKTF supports cross stack references
        throw new Error(`Fn::ImportValue is not yet supported.`);
      }

      default:
        throw new Error(
          `unsupported intrinsic function ${fn} (params: ${JSON.stringify(
            params
          )})`
        );
    }
  }
}
