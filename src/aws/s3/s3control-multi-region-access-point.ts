// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3ControlMultiRegionAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#account_id S3ControlMultiRegionAccessPoint#account_id}
  */
  readonly accountId?: string;
  /**
  * details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#details S3ControlMultiRegionAccessPoint#details}
  */
  readonly details: S3ControlMultiRegionAccessPointDetails;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#timeouts S3ControlMultiRegionAccessPoint#timeouts}
  */
  readonly timeouts?: S3ControlMultiRegionAccessPointTimeouts;
}
export interface S3ControlMultiRegionAccessPointDetailsPublicAccessBlock {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#block_public_acls S3ControlMultiRegionAccessPoint#block_public_acls}
  */
  readonly blockPublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#block_public_policy S3ControlMultiRegionAccessPoint#block_public_policy}
  */
  readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#ignore_public_acls S3ControlMultiRegionAccessPoint#ignore_public_acls}
  */
  readonly ignorePublicAcls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#restrict_public_buckets S3ControlMultiRegionAccessPoint#restrict_public_buckets}
  */
  readonly restrictPublicBuckets?: boolean | cdktf.IResolvable;
}

export function s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference | S3ControlMultiRegionAccessPointDetailsPublicAccessBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_public_acls: cdktf.booleanToTerraform(struct!.blockPublicAcls),
    block_public_policy: cdktf.booleanToTerraform(struct!.blockPublicPolicy),
    ignore_public_acls: cdktf.booleanToTerraform(struct!.ignorePublicAcls),
    restrict_public_buckets: cdktf.booleanToTerraform(struct!.restrictPublicBuckets),
  }
}

export class S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // block_public_acls - computed: false, optional: true, required: false
  private _blockPublicAcls?: boolean | cdktf.IResolvable | undefined; 
  public get blockPublicAcls() {
    return this.getBooleanAttribute('block_public_acls') as any;
  }
  public set blockPublicAcls(value: boolean | cdktf.IResolvable | undefined) {
    this._blockPublicAcls = value;
  }
  public resetBlockPublicAcls() {
    this._blockPublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicAclsInput() {
    return this._blockPublicAcls
  }

  // block_public_policy - computed: false, optional: true, required: false
  private _blockPublicPolicy?: boolean | cdktf.IResolvable | undefined; 
  public get blockPublicPolicy() {
    return this.getBooleanAttribute('block_public_policy') as any;
  }
  public set blockPublicPolicy(value: boolean | cdktf.IResolvable | undefined) {
    this._blockPublicPolicy = value;
  }
  public resetBlockPublicPolicy() {
    this._blockPublicPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPublicPolicyInput() {
    return this._blockPublicPolicy
  }

  // ignore_public_acls - computed: false, optional: true, required: false
  private _ignorePublicAcls?: boolean | cdktf.IResolvable | undefined; 
  public get ignorePublicAcls() {
    return this.getBooleanAttribute('ignore_public_acls') as any;
  }
  public set ignorePublicAcls(value: boolean | cdktf.IResolvable | undefined) {
    this._ignorePublicAcls = value;
  }
  public resetIgnorePublicAcls() {
    this._ignorePublicAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePublicAclsInput() {
    return this._ignorePublicAcls
  }

  // restrict_public_buckets - computed: false, optional: true, required: false
  private _restrictPublicBuckets?: boolean | cdktf.IResolvable | undefined; 
  public get restrictPublicBuckets() {
    return this.getBooleanAttribute('restrict_public_buckets') as any;
  }
  public set restrictPublicBuckets(value: boolean | cdktf.IResolvable | undefined) {
    this._restrictPublicBuckets = value;
  }
  public resetRestrictPublicBuckets() {
    this._restrictPublicBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictPublicBucketsInput() {
    return this._restrictPublicBuckets
  }
}
export interface S3ControlMultiRegionAccessPointDetailsRegion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#bucket S3ControlMultiRegionAccessPoint#bucket}
  */
  readonly bucket: string;
}

export function s3ControlMultiRegionAccessPointDetailsRegionToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsRegion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
  }
}

export interface S3ControlMultiRegionAccessPointDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#name S3ControlMultiRegionAccessPoint#name}
  */
  readonly name: string;
  /**
  * public_access_block block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#public_access_block S3ControlMultiRegionAccessPoint#public_access_block}
  */
  readonly publicAccessBlock?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock;
  /**
  * region block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#region S3ControlMultiRegionAccessPoint#region}
  */
  readonly region: S3ControlMultiRegionAccessPointDetailsRegion[];
}

export function s3ControlMultiRegionAccessPointDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointDetailsOutputReference | S3ControlMultiRegionAccessPointDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    public_access_block: s3ControlMultiRegionAccessPointDetailsPublicAccessBlockToTerraform(struct!.publicAccessBlock),
    region: cdktf.listMapper(s3ControlMultiRegionAccessPointDetailsRegionToTerraform)(struct!.region),
  }
}

export class S3ControlMultiRegionAccessPointDetailsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // public_access_block - computed: false, optional: true, required: false
  private _publicAccessBlock?: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined; 
  private __publicAccessBlockOutput = new S3ControlMultiRegionAccessPointDetailsPublicAccessBlockOutputReference(this as any, "public_access_block", true);
  public get publicAccessBlock() {
    return this.__publicAccessBlockOutput;
  }
  public putPublicAccessBlock(value: S3ControlMultiRegionAccessPointDetailsPublicAccessBlock | undefined) {
    this._publicAccessBlock = value;
  }
  public resetPublicAccessBlock() {
    this._publicAccessBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessBlockInput() {
    return this._publicAccessBlock
  }

  // region - computed: false, optional: false, required: true
  private _region?: S3ControlMultiRegionAccessPointDetailsRegion[]; 
  public get region() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('region') as any;
  }
  public set region(value: S3ControlMultiRegionAccessPointDetailsRegion[]) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }
}
export interface S3ControlMultiRegionAccessPointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#create S3ControlMultiRegionAccessPoint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html#delete S3ControlMultiRegionAccessPoint#delete}
  */
  readonly delete?: string;
}

export function s3ControlMultiRegionAccessPointTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointTimeoutsOutputReference | S3ControlMultiRegionAccessPointTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class S3ControlMultiRegionAccessPointTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html aws_s3control_multi_region_access_point}
*/
export class S3ControlMultiRegionAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3control_multi_region_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point.html aws_s3control_multi_region_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlMultiRegionAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_multi_region_access_point',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._details = config.details;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string | undefined; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // details - computed: false, optional: false, required: true
  private _details?: S3ControlMultiRegionAccessPointDetails; 
  private __detailsOutput = new S3ControlMultiRegionAccessPointDetailsOutputReference(this as any, "details", true);
  public get details() {
    return this.__detailsOutput;
  }
  public putDetails(value: S3ControlMultiRegionAccessPointDetails) {
    this._details = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: S3ControlMultiRegionAccessPointTimeouts | undefined; 
  private __timeoutsOutput = new S3ControlMultiRegionAccessPointTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: S3ControlMultiRegionAccessPointTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      details: s3ControlMultiRegionAccessPointDetailsToTerraform(this._details),
      timeouts: s3ControlMultiRegionAccessPointTimeoutsToTerraform(this._timeouts),
    };
  }
}
