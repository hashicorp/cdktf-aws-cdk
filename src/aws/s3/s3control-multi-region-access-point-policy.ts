// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3ControlMultiRegionAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#account_id S3ControlMultiRegionAccessPointPolicy#account_id}
  */
  readonly accountId?: string;
  /**
  * details block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#details S3ControlMultiRegionAccessPointPolicy#details}
  */
  readonly details: S3ControlMultiRegionAccessPointPolicyDetails;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#timeouts S3ControlMultiRegionAccessPointPolicy#timeouts}
  */
  readonly timeouts?: S3ControlMultiRegionAccessPointPolicyTimeouts;
}
export interface S3ControlMultiRegionAccessPointPolicyDetails {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#name S3ControlMultiRegionAccessPointPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#policy S3ControlMultiRegionAccessPointPolicy#policy}
  */
  readonly policy: string;
}

export function s3ControlMultiRegionAccessPointPolicyDetailsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyDetailsOutputReference | S3ControlMultiRegionAccessPointPolicyDetails): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}

export class S3ControlMultiRegionAccessPointPolicyDetailsOutputReference extends cdktf.ComplexObject {
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }
}
export interface S3ControlMultiRegionAccessPointPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#create S3ControlMultiRegionAccessPointPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html#update S3ControlMultiRegionAccessPointPolicy#update}
  */
  readonly update?: string;
}

export function s3ControlMultiRegionAccessPointPolicyTimeoutsToTerraform(struct?: S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference | S3ControlMultiRegionAccessPointPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html aws_s3control_multi_region_access_point_policy}
*/
export class S3ControlMultiRegionAccessPointPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3control_multi_region_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_multi_region_access_point_policy.html aws_s3control_multi_region_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlMultiRegionAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_multi_region_access_point_policy',
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

  // established - computed: true, optional: false, required: false
  public get established() {
    return this.getStringAttribute('established');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // proposed - computed: true, optional: false, required: false
  public get proposed() {
    return this.getStringAttribute('proposed');
  }

  // details - computed: false, optional: false, required: true
  private _details?: S3ControlMultiRegionAccessPointPolicyDetails; 
  private __detailsOutput = new S3ControlMultiRegionAccessPointPolicyDetailsOutputReference(this as any, "details", true);
  public get details() {
    return this.__detailsOutput;
  }
  public putDetails(value: S3ControlMultiRegionAccessPointPolicyDetails) {
    this._details = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: S3ControlMultiRegionAccessPointPolicyTimeouts | undefined; 
  private __timeoutsOutput = new S3ControlMultiRegionAccessPointPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: S3ControlMultiRegionAccessPointPolicyTimeouts | undefined) {
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
      details: s3ControlMultiRegionAccessPointPolicyDetailsToTerraform(this._details),
      timeouts: s3ControlMultiRegionAccessPointPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}