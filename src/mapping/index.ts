// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/mapping.ts
import { Fn, IResolvable, propertyAccess, TerraformResource } from "cdktf";
import { Construct } from "constructs";
import { CloudcontrolapiResource } from "..";
import supportedAwsccResourceTypes from "../awscc/supportedTypes";

export type ResourceMapper<T extends TerraformResource> = (
  scope: Construct,
  id: string,
  props: any
) => T | null;
type AttributeMapper<T extends TerraformResource> = (resource: T) => string | IResolvable;
type AnyAttributeMapper<T extends TerraformResource> = (attribute: string, resource: T) => string | IResolvable;

export type Mapping<T extends TerraformResource> = {
  resource: ResourceMapper<T>;
  attributes: {
    [name: string]: AttributeMapper<T>;
  } | AnyAttributeMapper<T>;
};

const mapping: { [type: string]: any } = {};

function createGenericCCApiMapping(
  resourceType: string
): Mapping<CloudcontrolapiResource> {
  if (!supportedAwsccResourceTypes.has(resourceType)) {
    throw new Error(
      `Unsupported resource Type ${resourceType}. There is no custom mapping registered for ${resourceType} and the AWS CloudControl API does not seem to support it yet. If you think this is an error or you need support for this resource, file an issue at: ${encodeURI(
        `https://github.com/hashicorp/cdktf-aws-cdk/issues/new?title=Unsupported Resource Type \`${resourceType}\``
      )} and mention the AWS CDK constructs you want to use`
    );
  }

  return {
    resource: (scope, id, props) => {
      // clone object as we have to delete props from the original one
      const desiredState = Fn.jsonencode({ ...props });
      Object.keys(props).forEach((key) => delete props[key]);

      return new CloudcontrolapiResource(scope, id, {
        desiredState,
        typeName: resourceType,
      });
    },
    attributes: (attribute, resource) => {
      return propertyAccess(Fn.jsondecode(resource.properties), [attribute]);
    }
  };
}

export function findMapping(resourceType: string): Mapping<TerraformResource> {
  if (mapping[resourceType]) {
    return mapping[resourceType];
  }

  // no mapping found, trying to use generic aws_cloudcontrolapi_resource
  return createGenericCCApiMapping(resourceType) as any; // TODO: fix type to allow this
}

export function registerMapping<T extends TerraformResource>(
  resourceType: string,
  map: Mapping<T>
) {
  mapping[resourceType] = map;
}

// load manual mappings for resources not yet supported by the awscc api
require("./aws");
