// originally from https://github.com/skorfmann/cfn2tf/blob/6ff9f366462b270229b7415f68c13a7bea28c144/mapping.ts
import { TerraformResource } from "cdktf";
import { Construct } from "constructs";
import { CloudcontrolapiResource } from "..";

export type ResourceMapper<T extends TerraformResource> = (
  scope: Construct,
  id: string,
  props: any
) => T;
type AttributeMapper<T extends TerraformResource> = (resource: T) => string;

export type Mapping<T extends TerraformResource> = {
  resource: ResourceMapper<T>;
  attributes: {
    [name: string]: AttributeMapper<T>;
  };
};

const mapping: { [type: string]: any } = {};

function createGenericCCApiMapping(
  resourceType: string
): Mapping<TerraformResource> {
  return {
    resource: (scope, id, props) => {
      return new CloudcontrolapiResource(scope, id, {
        desiredState: JSON.stringify(props),
        typeName: resourceType,

      });
    },
    attributes: { // TODO: attributes should automatically resolve to the resource.properties.X attribute to work for all cases
      Ref: () => {
        throw new Error("todo: implement");
      },
      Arn: () => {
        throw new Error("todo: implement");
      },
    },
  };
}

export function findMapping(resourceType: string): Mapping<TerraformResource> {
  if (mapping[resourceType]) {
    return mapping[resourceType];
  }

  // no mapping found, trying to use generic aws_cloudcontrolapi_resource
  return createGenericCCApiMapping(resourceType);
}

export function registerMapping<T extends TerraformResource>(
  resourceType: string,
  map: Mapping<T>
) {
  mapping[resourceType] = map;
}

// load manual mappings for resources not yet supported by the awscc api
require("./aws");
