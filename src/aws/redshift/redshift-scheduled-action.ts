// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Redshift
*/
export interface RedshiftScheduledActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#description RedshiftScheduledAction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#enable RedshiftScheduledAction#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#end_time RedshiftScheduledAction#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#iam_role RedshiftScheduledAction#iam_role}
  */
  readonly iamRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#name RedshiftScheduledAction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#schedule RedshiftScheduledAction#schedule}
  */
  readonly schedule: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#start_time RedshiftScheduledAction#start_time}
  */
  readonly startTime?: string;
  /**
  * target_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#target_action RedshiftScheduledAction#target_action}
  */
  readonly targetAction: RedshiftScheduledActionTargetAction;
}
export interface RedshiftScheduledActionTargetActionPauseCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}

export function redshiftScheduledActionTargetActionPauseClusterToTerraform(struct?: RedshiftScheduledActionTargetActionPauseClusterOutputReference | RedshiftScheduledActionTargetActionPauseCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
  }
}

export class RedshiftScheduledActionTargetActionPauseClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }
}
export interface RedshiftScheduledActionTargetActionResizeCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#classic RedshiftScheduledAction#classic}
  */
  readonly classic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_type RedshiftScheduledAction#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#node_type RedshiftScheduledAction#node_type}
  */
  readonly nodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#number_of_nodes RedshiftScheduledAction#number_of_nodes}
  */
  readonly numberOfNodes?: number;
}

export function redshiftScheduledActionTargetActionResizeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResizeClusterOutputReference | RedshiftScheduledActionTargetActionResizeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classic: cdktf.booleanToTerraform(struct!.classic),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    cluster_type: cdktf.stringToTerraform(struct!.clusterType),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    number_of_nodes: cdktf.numberToTerraform(struct!.numberOfNodes),
  }
}

export class RedshiftScheduledActionTargetActionResizeClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // classic - computed: false, optional: true, required: false
  private _classic?: boolean | cdktf.IResolvable | undefined; 
  public get classic() {
    return this.getBooleanAttribute('classic') as any;
  }
  public set classic(value: boolean | cdktf.IResolvable | undefined) {
    this._classic = value;
  }
  public resetClassic() {
    this._classic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicInput() {
    return this._classic
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string | undefined; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string | undefined) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string | undefined; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string | undefined) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number | undefined; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number | undefined) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes
  }
}
export interface RedshiftScheduledActionTargetActionResumeCluster {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#cluster_identifier RedshiftScheduledAction#cluster_identifier}
  */
  readonly clusterIdentifier: string;
}

export function redshiftScheduledActionTargetActionResumeClusterToTerraform(struct?: RedshiftScheduledActionTargetActionResumeClusterOutputReference | RedshiftScheduledActionTargetActionResumeCluster): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
  }
}

export class RedshiftScheduledActionTargetActionResumeClusterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_identifier - computed: false, optional: false, required: true
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier
  }
}
export interface RedshiftScheduledActionTargetAction {
  /**
  * pause_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#pause_cluster RedshiftScheduledAction#pause_cluster}
  */
  readonly pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster;
  /**
  * resize_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resize_cluster RedshiftScheduledAction#resize_cluster}
  */
  readonly resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster;
  /**
  * resume_cluster block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html#resume_cluster RedshiftScheduledAction#resume_cluster}
  */
  readonly resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster;
}

export function redshiftScheduledActionTargetActionToTerraform(struct?: RedshiftScheduledActionTargetActionOutputReference | RedshiftScheduledActionTargetAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pause_cluster: redshiftScheduledActionTargetActionPauseClusterToTerraform(struct!.pauseCluster),
    resize_cluster: redshiftScheduledActionTargetActionResizeClusterToTerraform(struct!.resizeCluster),
    resume_cluster: redshiftScheduledActionTargetActionResumeClusterToTerraform(struct!.resumeCluster),
  }
}

export class RedshiftScheduledActionTargetActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // pause_cluster - computed: false, optional: true, required: false
  private _pauseCluster?: RedshiftScheduledActionTargetActionPauseCluster | undefined; 
  private __pauseClusterOutput = new RedshiftScheduledActionTargetActionPauseClusterOutputReference(this as any, "pause_cluster", true);
  public get pauseCluster() {
    return this.__pauseClusterOutput;
  }
  public putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster | undefined) {
    this._pauseCluster = value;
  }
  public resetPauseCluster() {
    this._pauseCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseClusterInput() {
    return this._pauseCluster
  }

  // resize_cluster - computed: false, optional: true, required: false
  private _resizeCluster?: RedshiftScheduledActionTargetActionResizeCluster | undefined; 
  private __resizeClusterOutput = new RedshiftScheduledActionTargetActionResizeClusterOutputReference(this as any, "resize_cluster", true);
  public get resizeCluster() {
    return this.__resizeClusterOutput;
  }
  public putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster | undefined) {
    this._resizeCluster = value;
  }
  public resetResizeCluster() {
    this._resizeCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeClusterInput() {
    return this._resizeCluster
  }

  // resume_cluster - computed: false, optional: true, required: false
  private _resumeCluster?: RedshiftScheduledActionTargetActionResumeCluster | undefined; 
  private __resumeClusterOutput = new RedshiftScheduledActionTargetActionResumeClusterOutputReference(this as any, "resume_cluster", true);
  public get resumeCluster() {
    return this.__resumeClusterOutput;
  }
  public putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster | undefined) {
    this._resumeCluster = value;
  }
  public resetResumeCluster() {
    this._resumeCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resumeClusterInput() {
    return this._resumeCluster
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action}
*/
export class RedshiftScheduledAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_redshift_scheduled_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/redshift_scheduled_action.html aws_redshift_scheduled_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftScheduledActionConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftScheduledActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_scheduled_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enable = config.enable;
    this._endTime = config.endTime;
    this._iamRole = config.iamRole;
    this._name = config.name;
    this._schedule = config.schedule;
    this._startTime = config.startTime;
    this._targetAction = config.targetAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable | undefined; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable | undefined) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // iam_role - computed: false, optional: false, required: true
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // target_action - computed: false, optional: false, required: true
  private _targetAction?: RedshiftScheduledActionTargetAction; 
  private __targetActionOutput = new RedshiftScheduledActionTargetActionOutputReference(this as any, "target_action", true);
  public get targetAction() {
    return this.__targetActionOutput;
  }
  public putTargetAction(value: RedshiftScheduledActionTargetAction) {
    this._targetAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetActionInput() {
    return this._targetAction
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.booleanToTerraform(this._enable),
      end_time: cdktf.stringToTerraform(this._endTime),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      name: cdktf.stringToTerraform(this._name),
      schedule: cdktf.stringToTerraform(this._schedule),
      start_time: cdktf.stringToTerraform(this._startTime),
      target_action: redshiftScheduledActionTargetActionToTerraform(this._targetAction),
    };
  }
}
