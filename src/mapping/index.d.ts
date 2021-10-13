import { IResolvable, TerraformResource } from "cdktf";
import { Construct } from "constructs";
export declare type ResourceMapper<T extends TerraformResource> = (scope: Construct, id: string, props: any) => T | null;
declare type AttributeMapper<T extends TerraformResource> = (resource: T) => string | IResolvable;
declare type AnyAttributeMapper<T extends TerraformResource> = (attribute: string, resource: T) => string | IResolvable;
export declare type Mapping<T extends TerraformResource> = {
    resource: ResourceMapper<T>;
    attributes: {
        [name: string]: AttributeMapper<T>;
    } | AnyAttributeMapper<T>;
};
export declare function findMapping(resourceType: string): Mapping<TerraformResource>;
export declare function registerMapping<T extends TerraformResource>(resourceType: string, map: Mapping<T>): void;
export {};
