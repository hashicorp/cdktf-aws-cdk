// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontFieldLevelEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#comment CloudfrontFieldLevelEncryptionConfig#comment}
  */
  readonly comment?: string;
  /**
  * content_type_profile_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}
  */
  readonly contentTypeProfileConfig: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
  /**
  * query_arg_profile_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}
  */
  readonly queryArgProfileConfig: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type CloudfrontFieldLevelEncryptionConfig#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#format CloudfrontFieldLevelEncryptionConfig#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId?: string;
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    format: cdktf.stringToTerraform(struct!.format),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}

export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#items CloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[];
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform)(struct!.items),
  }
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: false, required: true
  private _items?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[]; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[]) {
    this._items = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
  */
  readonly forwardWhenContentTypeIsUnknown: boolean | cdktf.IResolvable;
  /**
  * content_type_profiles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}
  */
  readonly contentTypeProfiles: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_when_content_type_is_unknown: cdktf.booleanToTerraform(struct!.forwardWhenContentTypeIsUnknown),
    content_type_profiles: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct!.contentTypeProfiles),
  }
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // forward_when_content_type_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenContentTypeIsUnknown?: boolean | cdktf.IResolvable; 
  public get forwardWhenContentTypeIsUnknown() {
    return this.getBooleanAttribute('forward_when_content_type_is_unknown') as any;
  }
  public set forwardWhenContentTypeIsUnknown(value: boolean | cdktf.IResolvable) {
    this._forwardWhenContentTypeIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenContentTypeIsUnknownInput() {
    return this._forwardWhenContentTypeIsUnknown
  }

  // content_type_profiles - computed: false, optional: false, required: true
  private _contentTypeProfiles?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles; 
  private __contentTypeProfilesOutput = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(this as any, "content_type_profiles", true);
  public get contentTypeProfiles() {
    return this.__contentTypeProfilesOutput;
  }
  public putContentTypeProfiles(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles) {
    this._contentTypeProfiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfilesInput() {
    return this._contentTypeProfiles
  }
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}
  */
  readonly queryArg: string;
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    query_arg: cdktf.stringToTerraform(struct!.queryArg),
  }
}

export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#items CloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[];
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform)(struct!.items),
  }
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
  */
  readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktf.IResolvable;
  /**
  * query_arg_profiles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}
  */
  readonly queryArgProfiles?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_when_query_arg_profile_is_unknown: cdktf.booleanToTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
    query_arg_profiles: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct!.queryArgProfiles),
  }
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // forward_when_query_arg_profile_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenQueryArgProfileIsUnknown?: boolean | cdktf.IResolvable; 
  public get forwardWhenQueryArgProfileIsUnknown() {
    return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown') as any;
  }
  public set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktf.IResolvable) {
    this._forwardWhenQueryArgProfileIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenQueryArgProfileIsUnknownInput() {
    return this._forwardWhenQueryArgProfileIsUnknown
  }

  // query_arg_profiles - computed: false, optional: true, required: false
  private _queryArgProfiles?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined; 
  private __queryArgProfilesOutput = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(this as any, "query_arg_profiles", true);
  public get queryArgProfiles() {
    return this.__queryArgProfilesOutput;
  }
  public putQueryArgProfiles(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined) {
    this._queryArgProfiles = value;
  }
  public resetQueryArgProfiles() {
    this._queryArgProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfilesInput() {
    return this._queryArgProfiles
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config}
*/
export class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_field_level_encryption_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_field_level_encryption_config.html aws_cloudfront_field_level_encryption_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontFieldLevelEncryptionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._contentTypeProfileConfig = config.contentTypeProfileConfig;
    this._queryArgProfileConfig = config.queryArgProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string | undefined; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // content_type_profile_config - computed: false, optional: false, required: true
  private _contentTypeProfileConfig?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig; 
  private __contentTypeProfileConfigOutput = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(this as any, "content_type_profile_config", true);
  public get contentTypeProfileConfig() {
    return this.__contentTypeProfileConfigOutput;
  }
  public putContentTypeProfileConfig(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig) {
    this._contentTypeProfileConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfileConfigInput() {
    return this._contentTypeProfileConfig
  }

  // query_arg_profile_config - computed: false, optional: false, required: true
  private _queryArgProfileConfig?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig; 
  private __queryArgProfileConfigOutput = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(this as any, "query_arg_profile_config", true);
  public get queryArgProfileConfig() {
    return this.__queryArgProfileConfigOutput;
  }
  public putQueryArgProfileConfig(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig) {
    this._queryArgProfileConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfileConfigInput() {
    return this._queryArgProfileConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      content_type_profile_config: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(this._contentTypeProfileConfig),
      query_arg_profile_config: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(this._queryArgProfileConfig),
    };
  }
}