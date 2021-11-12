// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFormation
*/
export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#account_id CloudformationStackSetInstance#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
  */
  readonly parameterOverrides?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#region CloudformationStackSetInstance#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#retain_stack CloudformationStackSetInstance#retain_stack}
  */
  readonly retainStack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#stack_set_name CloudformationStackSetInstance#stack_set_name}
  */
  readonly stackSetName: string;
  /**
  * deployment_targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#deployment_targets CloudformationStackSetInstance#deployment_targets}
  */
  readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#timeouts CloudformationStackSetInstance#timeouts}
  */
  readonly timeouts?: CloudformationStackSetInstanceTimeouts;
}
export interface CloudformationStackSetInstanceDeploymentTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
}

export function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargetsOutputReference | CloudformationStackSetInstanceDeploymentTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnitIds),
  }
}

export class CloudformationStackSetInstanceDeploymentTargetsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // organizational_unit_ids - computed: false, optional: true, required: false
  private _organizationalUnitIds?: string[] | undefined; 
  public get organizationalUnitIds() {
    return this.getListAttribute('organizational_unit_ids');
  }
  public set organizationalUnitIds(value: string[] | undefined) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds
  }
}
export interface CloudformationStackSetInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#create CloudformationStackSetInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#delete CloudformationStackSetInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#update CloudformationStackSetInstance#update}
  */
  readonly update?: string;
}

export function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeoutsOutputReference | CloudformationStackSetInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudformationStackSetInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}
*/
export class CloudformationStackSetInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudformation_stack_set_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudformationStackSetInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudformation_stack_set_instance',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._parameterOverrides = config.parameterOverrides;
    this._region = config.region;
    this._retainStack = config.retainStack;
    this._stackSetName = config.stackSetName;
    this._deploymentTargets = config.deploymentTargets;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organizational_unit_id - computed: true, optional: false, required: false
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameterOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter_overrides') as any;
  }
  public set parameterOverrides(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameterOverrides = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // retain_stack - computed: false, optional: true, required: false
  private _retainStack?: boolean | cdktf.IResolvable | undefined; 
  public get retainStack() {
    return this.getBooleanAttribute('retain_stack') as any;
  }
  public set retainStack(value: boolean | cdktf.IResolvable | undefined) {
    this._retainStack = value;
  }
  public resetRetainStack() {
    this._retainStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStackInput() {
    return this._retainStack
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_set_name - computed: false, optional: false, required: true
  private _stackSetName?: string; 
  public get stackSetName() {
    return this.getStringAttribute('stack_set_name');
  }
  public set stackSetName(value: string) {
    this._stackSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetNameInput() {
    return this._stackSetName
  }

  // deployment_targets - computed: false, optional: true, required: false
  private _deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets | undefined; 
  private __deploymentTargetsOutput = new CloudformationStackSetInstanceDeploymentTargetsOutputReference(this as any, "deployment_targets", true);
  public get deploymentTargets() {
    return this.__deploymentTargetsOutput;
  }
  public putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets | undefined) {
    this._deploymentTargets = value;
  }
  public resetDeploymentTargets() {
    this._deploymentTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTargetsInput() {
    return this._deploymentTargets
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudformationStackSetInstanceTimeouts | undefined; 
  private __timeoutsOutput = new CloudformationStackSetInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudformationStackSetInstanceTimeouts | undefined) {
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
      parameter_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameterOverrides),
      region: cdktf.stringToTerraform(this._region),
      retain_stack: cdktf.booleanToTerraform(this._retainStack),
      stack_set_name: cdktf.stringToTerraform(this._stackSetName),
      deployment_targets: cloudformationStackSetInstanceDeploymentTargetsToTerraform(this._deploymentTargets),
      timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
