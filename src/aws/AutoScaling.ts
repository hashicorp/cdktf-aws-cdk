// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Auto Scaling
*/
export namespace AutoScaling {
  export interface AutoscalingAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}
    */
    readonly albTargetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html#elb AutoscalingAttachment#elb}
    */
    readonly elb?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment}
  */
  export class AutoscalingAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_attachment.html aws_autoscaling_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._albTargetGroupArn = config.albTargetGroupArn;
      this._autoscalingGroupName = config.autoscalingGroupName;
      this._elb = config.elb;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alb_target_group_arn - computed: false, optional: true, required: false
    private _albTargetGroupArn?: string;
    public get albTargetGroupArn() {
      return this.getStringAttribute('alb_target_group_arn');
    }
    public set albTargetGroupArn(value: string ) {
      this._albTargetGroupArn = value;
    }
    public resetAlbTargetGroupArn() {
      this._albTargetGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get albTargetGroupArnInput() {
      return this._albTargetGroupArn
    }

    // autoscaling_group_name - computed: false, optional: false, required: true
    private _autoscalingGroupName: string;
    public get autoscalingGroupName() {
      return this.getStringAttribute('autoscaling_group_name');
    }
    public set autoscalingGroupName(value: string) {
      this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupNameInput() {
      return this._autoscalingGroupName
    }

    // elb - computed: false, optional: true, required: false
    private _elb?: string;
    public get elb() {
      return this.getStringAttribute('elb');
    }
    public set elb(value: string ) {
      this._elb = value;
    }
    public resetElb() {
      this._elb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elbInput() {
      return this._elb
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        alb_target_group_arn: cdktf.stringToTerraform(this._albTargetGroupArn),
        autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
        elb: cdktf.stringToTerraform(this._elb),
      };
    }
  }
  export interface AutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#availability_zones AutoscalingGroup#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#capacity_rebalance AutoscalingGroup#capacity_rebalance}
    */
    readonly capacityRebalance?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_cooldown AutoscalingGroup#default_cooldown}
    */
    readonly defaultCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#desired_capacity AutoscalingGroup#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#enabled_metrics AutoscalingGroup#enabled_metrics}
    */
    readonly enabledMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete AutoscalingGroup#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#force_delete_warm_pool AutoscalingGroup#force_delete_warm_pool}
    */
    readonly forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_grace_period AutoscalingGroup#health_check_grace_period}
    */
    readonly healthCheckGracePeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#health_check_type AutoscalingGroup#health_check_type}
    */
    readonly healthCheckType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_configuration AutoscalingGroup#launch_configuration}
    */
    readonly launchConfiguration?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#load_balancers AutoscalingGroup#load_balancers}
    */
    readonly loadBalancers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_instance_lifetime AutoscalingGroup#max_instance_lifetime}
    */
    readonly maxInstanceLifetime?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_size AutoscalingGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#metrics_granularity AutoscalingGroup#metrics_granularity}
    */
    readonly metricsGranularity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_elb_capacity AutoscalingGroup#min_elb_capacity}
    */
    readonly minElbCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
    */
    readonly minSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name_prefix AutoscalingGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#placement_group AutoscalingGroup#placement_group}
    */
    readonly placementGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#protect_from_scale_in AutoscalingGroup#protect_from_scale_in}
    */
    readonly protectFromScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#service_linked_role_arn AutoscalingGroup#service_linked_role_arn}
    */
    readonly serviceLinkedRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#suspended_processes AutoscalingGroup#suspended_processes}
    */
    readonly suspendedProcesses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tags AutoscalingGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#target_group_arns AutoscalingGroup#target_group_arns}
    */
    readonly targetGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#termination_policies AutoscalingGroup#termination_policies}
    */
    readonly terminationPolicies?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#vpc_zone_identifier AutoscalingGroup#vpc_zone_identifier}
    */
    readonly vpcZoneIdentifier?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_capacity_timeout AutoscalingGroup#wait_for_capacity_timeout}
    */
    readonly waitForCapacityTimeout?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#wait_for_elb_capacity AutoscalingGroup#wait_for_elb_capacity}
    */
    readonly waitForElbCapacity?: number;
    /**
    * initial_lifecycle_hook block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#initial_lifecycle_hook AutoscalingGroup#initial_lifecycle_hook}
    */
    readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
    /**
    * instance_refresh block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_refresh AutoscalingGroup#instance_refresh}
    */
    readonly instanceRefresh?: AutoscalingGroupInstanceRefresh[];
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate?: AutoscalingGroupLaunchTemplate[];
    /**
    * mixed_instances_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#mixed_instances_policy AutoscalingGroup#mixed_instances_policy}
    */
    readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
    /**
    * tag block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#tag AutoscalingGroup#tag}
    */
    readonly tag?: AutoscalingGroupTag[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#timeouts AutoscalingGroup#timeouts}
    */
    readonly timeouts?: AutoscalingGroupTimeouts;
    /**
    * warm_pool block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#warm_pool AutoscalingGroup#warm_pool}
    */
    readonly warmPool?: AutoscalingGroupWarmPool[];
  }
  export interface AutoscalingGroupInitialLifecycleHook {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#default_result AutoscalingGroup#default_result}
    */
    readonly defaultResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#heartbeat_timeout AutoscalingGroup#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#lifecycle_transition AutoscalingGroup#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_metadata AutoscalingGroup#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#notification_target_arn AutoscalingGroup#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#role_arn AutoscalingGroup#role_arn}
    */
    readonly roleArn?: string;
  }

  function autoscalingGroupInitialLifecycleHookToTerraform(struct?: AutoscalingGroupInitialLifecycleHook): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      default_result: cdktf.stringToTerraform(struct!.defaultResult),
      heartbeat_timeout: cdktf.numberToTerraform(struct!.heartbeatTimeout),
      lifecycle_transition: cdktf.stringToTerraform(struct!.lifecycleTransition),
      name: cdktf.stringToTerraform(struct!.name),
      notification_metadata: cdktf.stringToTerraform(struct!.notificationMetadata),
      notification_target_arn: cdktf.stringToTerraform(struct!.notificationTargetArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface AutoscalingGroupInstanceRefreshPreferences {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_warmup AutoscalingGroup#instance_warmup}
    */
    readonly instanceWarmup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_healthy_percentage AutoscalingGroup#min_healthy_percentage}
    */
    readonly minHealthyPercentage?: number;
  }

  function autoscalingGroupInstanceRefreshPreferencesToTerraform(struct?: AutoscalingGroupInstanceRefreshPreferences): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      instance_warmup: cdktf.stringToTerraform(struct!.instanceWarmup),
      min_healthy_percentage: cdktf.numberToTerraform(struct!.minHealthyPercentage),
    }
  }

  export interface AutoscalingGroupInstanceRefresh {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#strategy AutoscalingGroup#strategy}
    */
    readonly strategy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#triggers AutoscalingGroup#triggers}
    */
    readonly triggers?: string[];
    /**
    * preferences block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#preferences AutoscalingGroup#preferences}
    */
    readonly preferences?: AutoscalingGroupInstanceRefreshPreferences[];
  }

  function autoscalingGroupInstanceRefreshToTerraform(struct?: AutoscalingGroupInstanceRefresh): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      strategy: cdktf.stringToTerraform(struct!.strategy),
      triggers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.triggers),
      preferences: cdktf.listMapper(autoscalingGroupInstanceRefreshPreferencesToTerraform)(struct!.preferences),
    }
  }

  export interface AutoscalingGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#id AutoscalingGroup#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#name AutoscalingGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
  }

  function autoscalingGroupLaunchTemplateToTerraform(struct?: AutoscalingGroupLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_allocation_strategy AutoscalingGroup#on_demand_allocation_strategy}
    */
    readonly onDemandAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_base_capacity AutoscalingGroup#on_demand_base_capacity}
    */
    readonly onDemandBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#on_demand_percentage_above_base_capacity AutoscalingGroup#on_demand_percentage_above_base_capacity}
    */
    readonly onDemandPercentageAboveBaseCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_allocation_strategy AutoscalingGroup#spot_allocation_strategy}
    */
    readonly spotAllocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_instance_pools AutoscalingGroup#spot_instance_pools}
    */
    readonly spotInstancePools?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#spot_max_price AutoscalingGroup#spot_max_price}
    */
    readonly spotMaxPrice?: string;
  }

  function autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_demand_allocation_strategy: cdktf.stringToTerraform(struct!.onDemandAllocationStrategy),
      on_demand_base_capacity: cdktf.numberToTerraform(struct!.onDemandBaseCapacity),
      on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
      spot_allocation_strategy: cdktf.stringToTerraform(struct!.spotAllocationStrategy),
      spot_instance_pools: cdktf.numberToTerraform(struct!.spotInstancePools),
      spot_max_price: cdktf.stringToTerraform(struct!.spotMaxPrice),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
  }

  function autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_id AutoscalingGroup#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_name AutoscalingGroup#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#version AutoscalingGroup#version}
    */
    readonly version?: string;
  }

  function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      launch_template_id: cdktf.stringToTerraform(struct!.launchTemplateId),
      launch_template_name: cdktf.stringToTerraform(struct!.launchTemplateName),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instance_type AutoscalingGroup#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#weighted_capacity AutoscalingGroup#weighted_capacity}
    */
    readonly weightedCapacity?: string;
    /**
    * launch_template_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecification[];
  }

  function autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      instance_type: cdktf.stringToTerraform(struct!.instanceType),
      weighted_capacity: cdktf.stringToTerraform(struct!.weightedCapacity),
      launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
    /**
    * launch_template_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template_specification AutoscalingGroup#launch_template_specification}
    */
    readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification[];
    /**
    * override block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#override AutoscalingGroup#override}
    */
    readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
  }

  function autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform(struct?: AutoscalingGroupMixedInstancesPolicyLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      launch_template_specification: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecificationToTerraform)(struct!.launchTemplateSpecification),
      override: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateOverrideToTerraform)(struct!.override),
    }
  }

  export interface AutoscalingGroupMixedInstancesPolicy {
    /**
    * instances_distribution block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#instances_distribution AutoscalingGroup#instances_distribution}
    */
    readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution[];
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#launch_template AutoscalingGroup#launch_template}
    */
    readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate[];
  }

  function autoscalingGroupMixedInstancesPolicyToTerraform(struct?: AutoscalingGroupMixedInstancesPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      instances_distribution: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyInstancesDistributionToTerraform)(struct!.instancesDistribution),
      launch_template: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyLaunchTemplateToTerraform)(struct!.launchTemplate),
    }
  }

  export interface AutoscalingGroupTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#key AutoscalingGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#propagate_at_launch AutoscalingGroup#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#value AutoscalingGroup#value}
    */
    readonly value: string;
  }

  function autoscalingGroupTagToTerraform(struct?: AutoscalingGroupTag): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      propagate_at_launch: cdktf.booleanToTerraform(struct!.propagateAtLaunch),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface AutoscalingGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#delete AutoscalingGroup#delete}
    */
    readonly delete?: string;
  }

  function autoscalingGroupTimeoutsToTerraform(struct?: AutoscalingGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }

  export interface AutoscalingGroupWarmPool {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#max_group_prepared_capacity AutoscalingGroup#max_group_prepared_capacity}
    */
    readonly maxGroupPreparedCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#min_size AutoscalingGroup#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html#pool_state AutoscalingGroup#pool_state}
    */
    readonly poolState?: string;
  }

  function autoscalingGroupWarmPoolToTerraform(struct?: AutoscalingGroupWarmPool): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_group_prepared_capacity: cdktf.numberToTerraform(struct!.maxGroupPreparedCapacity),
      min_size: cdktf.numberToTerraform(struct!.minSize),
      pool_state: cdktf.stringToTerraform(struct!.poolState),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group}
  */
  export class AutoscalingGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html aws_autoscaling_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZones = config.availabilityZones;
      this._capacityRebalance = config.capacityRebalance;
      this._defaultCooldown = config.defaultCooldown;
      this._desiredCapacity = config.desiredCapacity;
      this._enabledMetrics = config.enabledMetrics;
      this._forceDelete = config.forceDelete;
      this._forceDeleteWarmPool = config.forceDeleteWarmPool;
      this._healthCheckGracePeriod = config.healthCheckGracePeriod;
      this._healthCheckType = config.healthCheckType;
      this._launchConfiguration = config.launchConfiguration;
      this._loadBalancers = config.loadBalancers;
      this._maxInstanceLifetime = config.maxInstanceLifetime;
      this._maxSize = config.maxSize;
      this._metricsGranularity = config.metricsGranularity;
      this._minElbCapacity = config.minElbCapacity;
      this._minSize = config.minSize;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._placementGroup = config.placementGroup;
      this._protectFromScaleIn = config.protectFromScaleIn;
      this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
      this._suspendedProcesses = config.suspendedProcesses;
      this._tags = config.tags;
      this._targetGroupArns = config.targetGroupArns;
      this._terminationPolicies = config.terminationPolicies;
      this._vpcZoneIdentifier = config.vpcZoneIdentifier;
      this._waitForCapacityTimeout = config.waitForCapacityTimeout;
      this._waitForElbCapacity = config.waitForElbCapacity;
      this._initialLifecycleHook = config.initialLifecycleHook;
      this._instanceRefresh = config.instanceRefresh;
      this._launchTemplate = config.launchTemplate;
      this._mixedInstancesPolicy = config.mixedInstancesPolicy;
      this._tag = config.tag;
      this._timeouts = config.timeouts;
      this._warmPool = config.warmPool;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[];
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
      this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
      this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
      return this._availabilityZones
    }

    // capacity_rebalance - computed: false, optional: true, required: false
    private _capacityRebalance?: boolean | cdktf.IResolvable;
    public get capacityRebalance() {
      return this.getBooleanAttribute('capacity_rebalance');
    }
    public set capacityRebalance(value: boolean | cdktf.IResolvable ) {
      this._capacityRebalance = value;
    }
    public resetCapacityRebalance() {
      this._capacityRebalance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityRebalanceInput() {
      return this._capacityRebalance
    }

    // default_cooldown - computed: true, optional: true, required: false
    private _defaultCooldown?: number;
    public get defaultCooldown() {
      return this.getNumberAttribute('default_cooldown');
    }
    public set defaultCooldown(value: number) {
      this._defaultCooldown = value;
    }
    public resetDefaultCooldown() {
      this._defaultCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCooldownInput() {
      return this._defaultCooldown
    }

    // desired_capacity - computed: true, optional: true, required: false
    private _desiredCapacity?: number;
    public get desiredCapacity() {
      return this.getNumberAttribute('desired_capacity');
    }
    public set desiredCapacity(value: number) {
      this._desiredCapacity = value;
    }
    public resetDesiredCapacity() {
      this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityInput() {
      return this._desiredCapacity
    }

    // enabled_metrics - computed: false, optional: true, required: false
    private _enabledMetrics?: string[];
    public get enabledMetrics() {
      return this.getListAttribute('enabled_metrics');
    }
    public set enabledMetrics(value: string[] ) {
      this._enabledMetrics = value;
    }
    public resetEnabledMetrics() {
      this._enabledMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledMetricsInput() {
      return this._enabledMetrics
    }

    // force_delete - computed: false, optional: true, required: false
    private _forceDelete?: boolean | cdktf.IResolvable;
    public get forceDelete() {
      return this.getBooleanAttribute('force_delete');
    }
    public set forceDelete(value: boolean | cdktf.IResolvable ) {
      this._forceDelete = value;
    }
    public resetForceDelete() {
      this._forceDelete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDeleteInput() {
      return this._forceDelete
    }

    // force_delete_warm_pool - computed: false, optional: true, required: false
    private _forceDeleteWarmPool?: boolean | cdktf.IResolvable;
    public get forceDeleteWarmPool() {
      return this.getBooleanAttribute('force_delete_warm_pool');
    }
    public set forceDeleteWarmPool(value: boolean | cdktf.IResolvable ) {
      this._forceDeleteWarmPool = value;
    }
    public resetForceDeleteWarmPool() {
      this._forceDeleteWarmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceDeleteWarmPoolInput() {
      return this._forceDeleteWarmPool
    }

    // health_check_grace_period - computed: false, optional: true, required: false
    private _healthCheckGracePeriod?: number;
    public get healthCheckGracePeriod() {
      return this.getNumberAttribute('health_check_grace_period');
    }
    public set healthCheckGracePeriod(value: number ) {
      this._healthCheckGracePeriod = value;
    }
    public resetHealthCheckGracePeriod() {
      this._healthCheckGracePeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckGracePeriodInput() {
      return this._healthCheckGracePeriod
    }

    // health_check_type - computed: true, optional: true, required: false
    private _healthCheckType?: string;
    public get healthCheckType() {
      return this.getStringAttribute('health_check_type');
    }
    public set healthCheckType(value: string) {
      this._healthCheckType = value;
    }
    public resetHealthCheckType() {
      this._healthCheckType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckTypeInput() {
      return this._healthCheckType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_configuration - computed: false, optional: true, required: false
    private _launchConfiguration?: string;
    public get launchConfiguration() {
      return this.getStringAttribute('launch_configuration');
    }
    public set launchConfiguration(value: string ) {
      this._launchConfiguration = value;
    }
    public resetLaunchConfiguration() {
      this._launchConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchConfigurationInput() {
      return this._launchConfiguration
    }

    // load_balancers - computed: false, optional: true, required: false
    private _loadBalancers?: string[];
    public get loadBalancers() {
      return this.getListAttribute('load_balancers');
    }
    public set loadBalancers(value: string[] ) {
      this._loadBalancers = value;
    }
    public resetLoadBalancers() {
      this._loadBalancers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancersInput() {
      return this._loadBalancers
    }

    // max_instance_lifetime - computed: false, optional: true, required: false
    private _maxInstanceLifetime?: number;
    public get maxInstanceLifetime() {
      return this.getNumberAttribute('max_instance_lifetime');
    }
    public set maxInstanceLifetime(value: number ) {
      this._maxInstanceLifetime = value;
    }
    public resetMaxInstanceLifetime() {
      this._maxInstanceLifetime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxInstanceLifetimeInput() {
      return this._maxInstanceLifetime
    }

    // max_size - computed: false, optional: false, required: true
    private _maxSize: number;
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
      this._maxSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
      return this._maxSize
    }

    // metrics_granularity - computed: false, optional: true, required: false
    private _metricsGranularity?: string;
    public get metricsGranularity() {
      return this.getStringAttribute('metrics_granularity');
    }
    public set metricsGranularity(value: string ) {
      this._metricsGranularity = value;
    }
    public resetMetricsGranularity() {
      this._metricsGranularity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsGranularityInput() {
      return this._metricsGranularity
    }

    // min_elb_capacity - computed: false, optional: true, required: false
    private _minElbCapacity?: number;
    public get minElbCapacity() {
      return this.getNumberAttribute('min_elb_capacity');
    }
    public set minElbCapacity(value: number ) {
      this._minElbCapacity = value;
    }
    public resetMinElbCapacity() {
      this._minElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minElbCapacityInput() {
      return this._minElbCapacity
    }

    // min_size - computed: false, optional: false, required: true
    private _minSize: number;
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
      this._minSize = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
      return this._minSize
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // placement_group - computed: false, optional: true, required: false
    private _placementGroup?: string;
    public get placementGroup() {
      return this.getStringAttribute('placement_group');
    }
    public set placementGroup(value: string ) {
      this._placementGroup = value;
    }
    public resetPlacementGroup() {
      this._placementGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementGroupInput() {
      return this._placementGroup
    }

    // protect_from_scale_in - computed: false, optional: true, required: false
    private _protectFromScaleIn?: boolean | cdktf.IResolvable;
    public get protectFromScaleIn() {
      return this.getBooleanAttribute('protect_from_scale_in');
    }
    public set protectFromScaleIn(value: boolean | cdktf.IResolvable ) {
      this._protectFromScaleIn = value;
    }
    public resetProtectFromScaleIn() {
      this._protectFromScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectFromScaleInInput() {
      return this._protectFromScaleIn
    }

    // service_linked_role_arn - computed: true, optional: true, required: false
    private _serviceLinkedRoleArn?: string;
    public get serviceLinkedRoleArn() {
      return this.getStringAttribute('service_linked_role_arn');
    }
    public set serviceLinkedRoleArn(value: string) {
      this._serviceLinkedRoleArn = value;
    }
    public resetServiceLinkedRoleArn() {
      this._serviceLinkedRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceLinkedRoleArnInput() {
      return this._serviceLinkedRoleArn
    }

    // suspended_processes - computed: false, optional: true, required: false
    private _suspendedProcesses?: string[];
    public get suspendedProcesses() {
      return this.getListAttribute('suspended_processes');
    }
    public set suspendedProcesses(value: string[] ) {
      this._suspendedProcesses = value;
    }
    public resetSuspendedProcesses() {
      this._suspendedProcesses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suspendedProcessesInput() {
      return this._suspendedProcesses
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // target_group_arns - computed: false, optional: true, required: false
    private _targetGroupArns?: string[];
    public get targetGroupArns() {
      return this.getListAttribute('target_group_arns');
    }
    public set targetGroupArns(value: string[] ) {
      this._targetGroupArns = value;
    }
    public resetTargetGroupArns() {
      this._targetGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnsInput() {
      return this._targetGroupArns
    }

    // termination_policies - computed: false, optional: true, required: false
    private _terminationPolicies?: string[];
    public get terminationPolicies() {
      return this.getListAttribute('termination_policies');
    }
    public set terminationPolicies(value: string[] ) {
      this._terminationPolicies = value;
    }
    public resetTerminationPolicies() {
      this._terminationPolicies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminationPoliciesInput() {
      return this._terminationPolicies
    }

    // vpc_zone_identifier - computed: true, optional: true, required: false
    private _vpcZoneIdentifier?: string[];
    public get vpcZoneIdentifier() {
      return this.getListAttribute('vpc_zone_identifier');
    }
    public set vpcZoneIdentifier(value: string[]) {
      this._vpcZoneIdentifier = value;
    }
    public resetVpcZoneIdentifier() {
      this._vpcZoneIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcZoneIdentifierInput() {
      return this._vpcZoneIdentifier
    }

    // wait_for_capacity_timeout - computed: false, optional: true, required: false
    private _waitForCapacityTimeout?: string;
    public get waitForCapacityTimeout() {
      return this.getStringAttribute('wait_for_capacity_timeout');
    }
    public set waitForCapacityTimeout(value: string ) {
      this._waitForCapacityTimeout = value;
    }
    public resetWaitForCapacityTimeout() {
      this._waitForCapacityTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForCapacityTimeoutInput() {
      return this._waitForCapacityTimeout
    }

    // wait_for_elb_capacity - computed: false, optional: true, required: false
    private _waitForElbCapacity?: number;
    public get waitForElbCapacity() {
      return this.getNumberAttribute('wait_for_elb_capacity');
    }
    public set waitForElbCapacity(value: number ) {
      this._waitForElbCapacity = value;
    }
    public resetWaitForElbCapacity() {
      this._waitForElbCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForElbCapacityInput() {
      return this._waitForElbCapacity
    }

    // initial_lifecycle_hook - computed: false, optional: true, required: false
    private _initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
    public get initialLifecycleHook() {
      return this.interpolationForAttribute('initial_lifecycle_hook') as any;
    }
    public set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] ) {
      this._initialLifecycleHook = value;
    }
    public resetInitialLifecycleHook() {
      this._initialLifecycleHook = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialLifecycleHookInput() {
      return this._initialLifecycleHook
    }

    // instance_refresh - computed: false, optional: true, required: false
    private _instanceRefresh?: AutoscalingGroupInstanceRefresh[];
    public get instanceRefresh() {
      return this.interpolationForAttribute('instance_refresh') as any;
    }
    public set instanceRefresh(value: AutoscalingGroupInstanceRefresh[] ) {
      this._instanceRefresh = value;
    }
    public resetInstanceRefresh() {
      this._instanceRefresh = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRefreshInput() {
      return this._instanceRefresh
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: AutoscalingGroupLaunchTemplate[];
    public get launchTemplate() {
      return this.interpolationForAttribute('launch_template') as any;
    }
    public set launchTemplate(value: AutoscalingGroupLaunchTemplate[] ) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }

    // mixed_instances_policy - computed: false, optional: true, required: false
    private _mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
    public get mixedInstancesPolicy() {
      return this.interpolationForAttribute('mixed_instances_policy') as any;
    }
    public set mixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy[] ) {
      this._mixedInstancesPolicy = value;
    }
    public resetMixedInstancesPolicy() {
      this._mixedInstancesPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mixedInstancesPolicyInput() {
      return this._mixedInstancesPolicy
    }

    // tag - computed: false, optional: true, required: false
    private _tag?: AutoscalingGroupTag[];
    public get tag() {
      return this.interpolationForAttribute('tag') as any;
    }
    public set tag(value: AutoscalingGroupTag[] ) {
      this._tag = value;
    }
    public resetTag() {
      this._tag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagInput() {
      return this._tag
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: AutoscalingGroupTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: AutoscalingGroupTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // warm_pool - computed: false, optional: true, required: false
    private _warmPool?: AutoscalingGroupWarmPool[];
    public get warmPool() {
      return this.interpolationForAttribute('warm_pool') as any;
    }
    public set warmPool(value: AutoscalingGroupWarmPool[] ) {
      this._warmPool = value;
    }
    public resetWarmPool() {
      this._warmPool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmPoolInput() {
      return this._warmPool
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._availabilityZones),
        capacity_rebalance: cdktf.booleanToTerraform(this._capacityRebalance),
        default_cooldown: cdktf.numberToTerraform(this._defaultCooldown),
        desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
        enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledMetrics),
        force_delete: cdktf.booleanToTerraform(this._forceDelete),
        force_delete_warm_pool: cdktf.booleanToTerraform(this._forceDeleteWarmPool),
        health_check_grace_period: cdktf.numberToTerraform(this._healthCheckGracePeriod),
        health_check_type: cdktf.stringToTerraform(this._healthCheckType),
        launch_configuration: cdktf.stringToTerraform(this._launchConfiguration),
        load_balancers: cdktf.listMapper(cdktf.stringToTerraform)(this._loadBalancers),
        max_instance_lifetime: cdktf.numberToTerraform(this._maxInstanceLifetime),
        max_size: cdktf.numberToTerraform(this._maxSize),
        metrics_granularity: cdktf.stringToTerraform(this._metricsGranularity),
        min_elb_capacity: cdktf.numberToTerraform(this._minElbCapacity),
        min_size: cdktf.numberToTerraform(this._minSize),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        placement_group: cdktf.stringToTerraform(this._placementGroup),
        protect_from_scale_in: cdktf.booleanToTerraform(this._protectFromScaleIn),
        service_linked_role_arn: cdktf.stringToTerraform(this._serviceLinkedRoleArn),
        suspended_processes: cdktf.listMapper(cdktf.stringToTerraform)(this._suspendedProcesses),
        tags: cdktf.listMapper(cdktf.hashMapper(cdktf.anyToTerraform))(this._tags),
        target_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetGroupArns),
        termination_policies: cdktf.listMapper(cdktf.stringToTerraform)(this._terminationPolicies),
        vpc_zone_identifier: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcZoneIdentifier),
        wait_for_capacity_timeout: cdktf.stringToTerraform(this._waitForCapacityTimeout),
        wait_for_elb_capacity: cdktf.numberToTerraform(this._waitForElbCapacity),
        initial_lifecycle_hook: cdktf.listMapper(autoscalingGroupInitialLifecycleHookToTerraform)(this._initialLifecycleHook),
        instance_refresh: cdktf.listMapper(autoscalingGroupInstanceRefreshToTerraform)(this._instanceRefresh),
        launch_template: cdktf.listMapper(autoscalingGroupLaunchTemplateToTerraform)(this._launchTemplate),
        mixed_instances_policy: cdktf.listMapper(autoscalingGroupMixedInstancesPolicyToTerraform)(this._mixedInstancesPolicy),
        tag: cdktf.listMapper(autoscalingGroupTagToTerraform)(this._tag),
        timeouts: autoscalingGroupTimeoutsToTerraform(this._timeouts),
        warm_pool: cdktf.listMapper(autoscalingGroupWarmPoolToTerraform)(this._warmPool),
      };
    }
  }
  export interface AutoscalingGroupTagAConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * tag block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#tag AutoscalingGroupTagA#tag}
    */
    readonly tag: AutoscalingGroupTagTag[];
  }
  export interface AutoscalingGroupTagTag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#key AutoscalingGroupTagA#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}
    */
    readonly propagateAtLaunch: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html#value AutoscalingGroupTagA#value}
    */
    readonly value: string;
  }

  function autoscalingGroupTagTagToTerraform(struct?: AutoscalingGroupTagTag): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      propagate_at_launch: cdktf.booleanToTerraform(struct!.propagateAtLaunch),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag}
  */
  export class AutoscalingGroupTagA extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_group_tag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_group_tag.html aws_autoscaling_group_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingGroupTagAConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingGroupTagAConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_group_tag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoscalingGroupName = config.autoscalingGroupName;
      this._tag = config.tag;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // autoscaling_group_name - computed: false, optional: false, required: true
    private _autoscalingGroupName: string;
    public get autoscalingGroupName() {
      return this.getStringAttribute('autoscaling_group_name');
    }
    public set autoscalingGroupName(value: string) {
      this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupNameInput() {
      return this._autoscalingGroupName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // tag - computed: false, optional: false, required: true
    private _tag: AutoscalingGroupTagTag[];
    public get tag() {
      return this.interpolationForAttribute('tag') as any;
    }
    public set tag(value: AutoscalingGroupTagTag[]) {
      this._tag = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagInput() {
      return this._tag
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
        tag: cdktf.listMapper(autoscalingGroupTagTagToTerraform)(this._tag),
      };
    }
  }
  export interface AutoscalingLifecycleHookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#autoscaling_group_name AutoscalingLifecycleHook#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#default_result AutoscalingLifecycleHook#default_result}
    */
    readonly defaultResult?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#heartbeat_timeout AutoscalingLifecycleHook#heartbeat_timeout}
    */
    readonly heartbeatTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#lifecycle_transition AutoscalingLifecycleHook#lifecycle_transition}
    */
    readonly lifecycleTransition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#name AutoscalingLifecycleHook#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#notification_metadata AutoscalingLifecycleHook#notification_metadata}
    */
    readonly notificationMetadata?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#notification_target_arn AutoscalingLifecycleHook#notification_target_arn}
    */
    readonly notificationTargetArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html#role_arn AutoscalingLifecycleHook#role_arn}
    */
    readonly roleArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook}
  */
  export class AutoscalingLifecycleHook extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_lifecycle_hook";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_lifecycle_hook.html aws_autoscaling_lifecycle_hook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingLifecycleHookConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingLifecycleHookConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_lifecycle_hook',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoscalingGroupName = config.autoscalingGroupName;
      this._defaultResult = config.defaultResult;
      this._heartbeatTimeout = config.heartbeatTimeout;
      this._lifecycleTransition = config.lifecycleTransition;
      this._name = config.name;
      this._notificationMetadata = config.notificationMetadata;
      this._notificationTargetArn = config.notificationTargetArn;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // autoscaling_group_name - computed: false, optional: false, required: true
    private _autoscalingGroupName: string;
    public get autoscalingGroupName() {
      return this.getStringAttribute('autoscaling_group_name');
    }
    public set autoscalingGroupName(value: string) {
      this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupNameInput() {
      return this._autoscalingGroupName
    }

    // default_result - computed: true, optional: true, required: false
    private _defaultResult?: string;
    public get defaultResult() {
      return this.getStringAttribute('default_result');
    }
    public set defaultResult(value: string) {
      this._defaultResult = value;
    }
    public resetDefaultResult() {
      this._defaultResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultResultInput() {
      return this._defaultResult
    }

    // heartbeat_timeout - computed: false, optional: true, required: false
    private _heartbeatTimeout?: number;
    public get heartbeatTimeout() {
      return this.getNumberAttribute('heartbeat_timeout');
    }
    public set heartbeatTimeout(value: number ) {
      this._heartbeatTimeout = value;
    }
    public resetHeartbeatTimeout() {
      this._heartbeatTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatTimeoutInput() {
      return this._heartbeatTimeout
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lifecycle_transition - computed: false, optional: false, required: true
    private _lifecycleTransition: string;
    public get lifecycleTransition() {
      return this.getStringAttribute('lifecycle_transition');
    }
    public set lifecycleTransition(value: string) {
      this._lifecycleTransition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleTransitionInput() {
      return this._lifecycleTransition
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // notification_metadata - computed: false, optional: true, required: false
    private _notificationMetadata?: string;
    public get notificationMetadata() {
      return this.getStringAttribute('notification_metadata');
    }
    public set notificationMetadata(value: string ) {
      this._notificationMetadata = value;
    }
    public resetNotificationMetadata() {
      this._notificationMetadata = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationMetadataInput() {
      return this._notificationMetadata
    }

    // notification_target_arn - computed: false, optional: true, required: false
    private _notificationTargetArn?: string;
    public get notificationTargetArn() {
      return this.getStringAttribute('notification_target_arn');
    }
    public set notificationTargetArn(value: string ) {
      this._notificationTargetArn = value;
    }
    public resetNotificationTargetArn() {
      this._notificationTargetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTargetArnInput() {
      return this._notificationTargetArn
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string;
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string ) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
        default_result: cdktf.stringToTerraform(this._defaultResult),
        heartbeat_timeout: cdktf.numberToTerraform(this._heartbeatTimeout),
        lifecycle_transition: cdktf.stringToTerraform(this._lifecycleTransition),
        name: cdktf.stringToTerraform(this._name),
        notification_metadata: cdktf.stringToTerraform(this._notificationMetadata),
        notification_target_arn: cdktf.stringToTerraform(this._notificationTargetArn),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface AutoscalingNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#group_names AutoscalingNotification#group_names}
    */
    readonly groupNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#notifications AutoscalingNotification#notifications}
    */
    readonly notifications: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html#topic_arn AutoscalingNotification#topic_arn}
    */
    readonly topicArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification}
  */
  export class AutoscalingNotification extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_notification";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_notification.html aws_autoscaling_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingNotificationConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingNotificationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_notification',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._groupNames = config.groupNames;
      this._notifications = config.notifications;
      this._topicArn = config.topicArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_names - computed: false, optional: false, required: true
    private _groupNames: string[];
    public get groupNames() {
      return this.getListAttribute('group_names');
    }
    public set groupNames(value: string[]) {
      this._groupNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupNamesInput() {
      return this._groupNames
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // notifications - computed: false, optional: false, required: true
    private _notifications: string[];
    public get notifications() {
      return this.getListAttribute('notifications');
    }
    public set notifications(value: string[]) {
      this._notifications = value;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationsInput() {
      return this._notifications
    }

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn: string;
    public get topicArn() {
      return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
      this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
      return this._topicArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._groupNames),
        notifications: cdktf.listMapper(cdktf.stringToTerraform)(this._notifications),
        topic_arn: cdktf.stringToTerraform(this._topicArn),
      };
    }
  }
  export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#adjustment_type AutoscalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#autoscaling_group_name AutoscalingPolicy#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#cooldown AutoscalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#estimated_instance_warmup AutoscalingPolicy#estimated_instance_warmup}
    */
    readonly estimatedInstanceWarmup?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_aggregation_type AutoscalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#min_adjustment_magnitude AutoscalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#policy_type AutoscalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment?: number;
    /**
    * predictive_scaling_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predictive_scaling_configuration AutoscalingPolicy#predictive_scaling_configuration}
    */
    readonly predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration[];
    /**
    * step_adjustment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#step_adjustment AutoscalingPolicy#step_adjustment}
    */
    readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
    /**
    * target_tracking_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_tracking_configuration AutoscalingPolicy#target_tracking_configuration}
    */
    readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
  }
  export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
  }

  function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
  }

  function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel: string;
  }

  function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * predefined_load_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification[];
    /**
    * predefined_metric_pair_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}
    */
    readonly predefinedMetricPairSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification[];
    /**
    * predefined_scaling_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification[];
  }

  function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      target_value: cdktf.numberToTerraform(struct!.targetValue),
      predefined_load_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform)(struct!.predefinedLoadMetricSpecification),
      predefined_metric_pair_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform)(struct!.predefinedMetricPairSpecification),
      predefined_scaling_metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform)(struct!.predefinedScalingMetricSpecification),
    }
  }

  export interface AutoscalingPolicyPredictiveScalingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_breach_behavior AutoscalingPolicy#max_capacity_breach_behavior}
    */
    readonly maxCapacityBreachBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#max_capacity_buffer AutoscalingPolicy#max_capacity_buffer}
    */
    readonly maxCapacityBuffer?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#mode AutoscalingPolicy#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scheduling_buffer_time AutoscalingPolicy#scheduling_buffer_time}
    */
    readonly schedulingBufferTime?: string;
    /**
    * metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_specification AutoscalingPolicy#metric_specification}
    */
    readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification[];
  }

  function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_capacity_breach_behavior: cdktf.stringToTerraform(struct!.maxCapacityBreachBehavior),
      max_capacity_buffer: cdktf.stringToTerraform(struct!.maxCapacityBuffer),
      mode: cdktf.stringToTerraform(struct!.mode),
      scheduling_buffer_time: cdktf.stringToTerraform(struct!.schedulingBufferTime),
      metric_specification: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform)(struct!.metricSpecification),
    }
  }

  export interface AutoscalingPolicyStepAdjustment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_lower_bound AutoscalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_interval_upper_bound AutoscalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#scaling_adjustment AutoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment: number;
  }

  function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
      metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
      scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
    }
  }

  export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#value AutoscalingPolicy#value}
    */
    readonly value: string;
  }

  function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_name AutoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#namespace AutoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#statistic AutoscalingPolicy#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#unit AutoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * metric_dimension block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#metric_dimension AutoscalingPolicy#metric_dimension}
    */
    readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
  }

  function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      statistic: cdktf.stringToTerraform(struct!.statistic),
      unit: cdktf.stringToTerraform(struct!.unit),
      metric_dimension: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform)(struct!.metricDimension),
    }
  }

  export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_type AutoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#resource_label AutoscalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
  }

  function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export interface AutoscalingPolicyTargetTrackingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#disable_scale_in AutoscalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#target_value AutoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#customized_metric_specification AutoscalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
    /**
    * predefined_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html#predefined_metric_specification AutoscalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification[];
  }

  function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
      target_value: cdktf.numberToTerraform(struct!.targetValue),
      customized_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform)(struct!.customizedMetricSpecification),
      predefined_metric_specification: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform)(struct!.predefinedMetricSpecification),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy}
  */
  export class AutoscalingPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._adjustmentType = config.adjustmentType;
      this._autoscalingGroupName = config.autoscalingGroupName;
      this._cooldown = config.cooldown;
      this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
      this._metricAggregationType = config.metricAggregationType;
      this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
      this._name = config.name;
      this._policyType = config.policyType;
      this._scalingAdjustment = config.scalingAdjustment;
      this._predictiveScalingConfiguration = config.predictiveScalingConfiguration;
      this._stepAdjustment = config.stepAdjustment;
      this._targetTrackingConfiguration = config.targetTrackingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // adjustment_type - computed: false, optional: true, required: false
    private _adjustmentType?: string;
    public get adjustmentType() {
      return this.getStringAttribute('adjustment_type');
    }
    public set adjustmentType(value: string ) {
      this._adjustmentType = value;
    }
    public resetAdjustmentType() {
      this._adjustmentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adjustmentTypeInput() {
      return this._adjustmentType
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // autoscaling_group_name - computed: false, optional: false, required: true
    private _autoscalingGroupName: string;
    public get autoscalingGroupName() {
      return this.getStringAttribute('autoscaling_group_name');
    }
    public set autoscalingGroupName(value: string) {
      this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupNameInput() {
      return this._autoscalingGroupName
    }

    // cooldown - computed: false, optional: true, required: false
    private _cooldown?: number;
    public get cooldown() {
      return this.getNumberAttribute('cooldown');
    }
    public set cooldown(value: number ) {
      this._cooldown = value;
    }
    public resetCooldown() {
      this._cooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cooldownInput() {
      return this._cooldown
    }

    // estimated_instance_warmup - computed: false, optional: true, required: false
    private _estimatedInstanceWarmup?: number;
    public get estimatedInstanceWarmup() {
      return this.getNumberAttribute('estimated_instance_warmup');
    }
    public set estimatedInstanceWarmup(value: number ) {
      this._estimatedInstanceWarmup = value;
    }
    public resetEstimatedInstanceWarmup() {
      this._estimatedInstanceWarmup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get estimatedInstanceWarmupInput() {
      return this._estimatedInstanceWarmup
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // metric_aggregation_type - computed: true, optional: true, required: false
    private _metricAggregationType?: string;
    public get metricAggregationType() {
      return this.getStringAttribute('metric_aggregation_type');
    }
    public set metricAggregationType(value: string) {
      this._metricAggregationType = value;
    }
    public resetMetricAggregationType() {
      this._metricAggregationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricAggregationTypeInput() {
      return this._metricAggregationType
    }

    // min_adjustment_magnitude - computed: false, optional: true, required: false
    private _minAdjustmentMagnitude?: number;
    public get minAdjustmentMagnitude() {
      return this.getNumberAttribute('min_adjustment_magnitude');
    }
    public set minAdjustmentMagnitude(value: number ) {
      this._minAdjustmentMagnitude = value;
    }
    public resetMinAdjustmentMagnitude() {
      this._minAdjustmentMagnitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minAdjustmentMagnitudeInput() {
      return this._minAdjustmentMagnitude
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // policy_type - computed: false, optional: true, required: false
    private _policyType?: string;
    public get policyType() {
      return this.getStringAttribute('policy_type');
    }
    public set policyType(value: string ) {
      this._policyType = value;
    }
    public resetPolicyType() {
      this._policyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeInput() {
      return this._policyType
    }

    // scaling_adjustment - computed: false, optional: true, required: false
    private _scalingAdjustment?: number;
    public get scalingAdjustment() {
      return this.getNumberAttribute('scaling_adjustment');
    }
    public set scalingAdjustment(value: number ) {
      this._scalingAdjustment = value;
    }
    public resetScalingAdjustment() {
      this._scalingAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingAdjustmentInput() {
      return this._scalingAdjustment
    }

    // predictive_scaling_configuration - computed: false, optional: true, required: false
    private _predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration[];
    public get predictiveScalingConfiguration() {
      return this.interpolationForAttribute('predictive_scaling_configuration') as any;
    }
    public set predictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration[] ) {
      this._predictiveScalingConfiguration = value;
    }
    public resetPredictiveScalingConfiguration() {
      this._predictiveScalingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predictiveScalingConfigurationInput() {
      return this._predictiveScalingConfiguration
    }

    // step_adjustment - computed: false, optional: true, required: false
    private _stepAdjustment?: AutoscalingPolicyStepAdjustment[];
    public get stepAdjustment() {
      return this.interpolationForAttribute('step_adjustment') as any;
    }
    public set stepAdjustment(value: AutoscalingPolicyStepAdjustment[] ) {
      this._stepAdjustment = value;
    }
    public resetStepAdjustment() {
      this._stepAdjustment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepAdjustmentInput() {
      return this._stepAdjustment
    }

    // target_tracking_configuration - computed: false, optional: true, required: false
    private _targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
    public get targetTrackingConfiguration() {
      return this.interpolationForAttribute('target_tracking_configuration') as any;
    }
    public set targetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration[] ) {
      this._targetTrackingConfiguration = value;
    }
    public resetTargetTrackingConfiguration() {
      this._targetTrackingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingConfigurationInput() {
      return this._targetTrackingConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        adjustment_type: cdktf.stringToTerraform(this._adjustmentType),
        autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
        cooldown: cdktf.numberToTerraform(this._cooldown),
        estimated_instance_warmup: cdktf.numberToTerraform(this._estimatedInstanceWarmup),
        metric_aggregation_type: cdktf.stringToTerraform(this._metricAggregationType),
        min_adjustment_magnitude: cdktf.numberToTerraform(this._minAdjustmentMagnitude),
        name: cdktf.stringToTerraform(this._name),
        policy_type: cdktf.stringToTerraform(this._policyType),
        scaling_adjustment: cdktf.numberToTerraform(this._scalingAdjustment),
        predictive_scaling_configuration: cdktf.listMapper(autoscalingPolicyPredictiveScalingConfigurationToTerraform)(this._predictiveScalingConfiguration),
        step_adjustment: cdktf.listMapper(autoscalingPolicyStepAdjustmentToTerraform)(this._stepAdjustment),
        target_tracking_configuration: cdktf.listMapper(autoscalingPolicyTargetTrackingConfigurationToTerraform)(this._targetTrackingConfiguration),
      };
    }
  }
  export interface AutoscalingScheduleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}
    */
    readonly autoscalingGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#desired_capacity AutoscalingSchedule#desired_capacity}
    */
    readonly desiredCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#end_time AutoscalingSchedule#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#max_size AutoscalingSchedule#max_size}
    */
    readonly maxSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#min_size AutoscalingSchedule#min_size}
    */
    readonly minSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#recurrence AutoscalingSchedule#recurrence}
    */
    readonly recurrence?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#scheduled_action_name AutoscalingSchedule#scheduled_action_name}
    */
    readonly scheduledActionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#start_time AutoscalingSchedule#start_time}
    */
    readonly startTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html#time_zone AutoscalingSchedule#time_zone}
    */
    readonly timeZone?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule}
  */
  export class AutoscalingSchedule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_schedule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/autoscaling_schedule.html aws_autoscaling_schedule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingScheduleConfig
    */
    public constructor(scope: Construct, id: string, config: AutoscalingScheduleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_schedule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoscalingGroupName = config.autoscalingGroupName;
      this._desiredCapacity = config.desiredCapacity;
      this._endTime = config.endTime;
      this._maxSize = config.maxSize;
      this._minSize = config.minSize;
      this._recurrence = config.recurrence;
      this._scheduledActionName = config.scheduledActionName;
      this._startTime = config.startTime;
      this._timeZone = config.timeZone;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // autoscaling_group_name - computed: false, optional: false, required: true
    private _autoscalingGroupName: string;
    public get autoscalingGroupName() {
      return this.getStringAttribute('autoscaling_group_name');
    }
    public set autoscalingGroupName(value: string) {
      this._autoscalingGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoscalingGroupNameInput() {
      return this._autoscalingGroupName
    }

    // desired_capacity - computed: true, optional: true, required: false
    private _desiredCapacity?: number;
    public get desiredCapacity() {
      return this.getNumberAttribute('desired_capacity');
    }
    public set desiredCapacity(value: number) {
      this._desiredCapacity = value;
    }
    public resetDesiredCapacity() {
      this._desiredCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCapacityInput() {
      return this._desiredCapacity
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string;
    public get endTime() {
      return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
      this._endTime = value;
    }
    public resetEndTime() {
      this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
      return this._endTime
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_size - computed: true, optional: true, required: false
    private _maxSize?: number;
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }
    public set maxSize(value: number) {
      this._maxSize = value;
    }
    public resetMaxSize() {
      this._maxSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSizeInput() {
      return this._maxSize
    }

    // min_size - computed: true, optional: true, required: false
    private _minSize?: number;
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
    public set minSize(value: number) {
      this._minSize = value;
    }
    public resetMinSize() {
      this._minSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minSizeInput() {
      return this._minSize
    }

    // recurrence - computed: true, optional: true, required: false
    private _recurrence?: string;
    public get recurrence() {
      return this.getStringAttribute('recurrence');
    }
    public set recurrence(value: string) {
      this._recurrence = value;
    }
    public resetRecurrence() {
      this._recurrence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recurrenceInput() {
      return this._recurrence
    }

    // scheduled_action_name - computed: false, optional: false, required: true
    private _scheduledActionName: string;
    public get scheduledActionName() {
      return this.getStringAttribute('scheduled_action_name');
    }
    public set scheduledActionName(value: string) {
      this._scheduledActionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionNameInput() {
      return this._scheduledActionName
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string;
    public get startTime() {
      return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
      this._startTime = value;
    }
    public resetStartTime() {
      this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
      return this._startTime
    }

    // time_zone - computed: true, optional: true, required: false
    private _timeZone?: string;
    public get timeZone() {
      return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
      this._timeZone = value;
    }
    public resetTimeZone() {
      this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
      return this._timeZone
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
        desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
        end_time: cdktf.stringToTerraform(this._endTime),
        max_size: cdktf.numberToTerraform(this._maxSize),
        min_size: cdktf.numberToTerraform(this._minSize),
        recurrence: cdktf.stringToTerraform(this._recurrence),
        scheduled_action_name: cdktf.stringToTerraform(this._scheduledActionName),
        start_time: cdktf.stringToTerraform(this._startTime),
        time_zone: cdktf.stringToTerraform(this._timeZone),
      };
    }
  }
  export interface DataAwsAutoscalingGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html#name DataAwsAutoscalingGroup#name}
    */
    readonly name: string;
  }
  export class DataAwsAutoscalingGroupLaunchTemplate extends cdktf.ComplexComputedList {

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group}
  */
  export class DataAwsAutoscalingGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_group.html aws_autoscaling_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // availability_zones - computed: true, optional: false, required: false
    public get availabilityZones() {
      return this.getListAttribute('availability_zones');
    }

    // default_cooldown - computed: true, optional: false, required: false
    public get defaultCooldown() {
      return this.getNumberAttribute('default_cooldown');
    }

    // desired_capacity - computed: true, optional: false, required: false
    public get desiredCapacity() {
      return this.getNumberAttribute('desired_capacity');
    }

    // health_check_grace_period - computed: true, optional: false, required: false
    public get healthCheckGracePeriod() {
      return this.getNumberAttribute('health_check_grace_period');
    }

    // health_check_type - computed: true, optional: false, required: false
    public get healthCheckType() {
      return this.getStringAttribute('health_check_type');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_configuration - computed: true, optional: false, required: false
    public get launchConfiguration() {
      return this.getStringAttribute('launch_configuration');
    }

    // launch_template - computed: true, optional: false, required: false
    public launchTemplate(index: string) {
      return new DataAwsAutoscalingGroupLaunchTemplate(this, 'launch_template', index);
    }

    // load_balancers - computed: true, optional: false, required: false
    public get loadBalancers() {
      return this.getListAttribute('load_balancers');
    }

    // max_size - computed: true, optional: false, required: false
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }

    // min_size - computed: true, optional: false, required: false
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // new_instances_protected_from_scale_in - computed: true, optional: false, required: false
    public get newInstancesProtectedFromScaleIn() {
      return this.getBooleanAttribute('new_instances_protected_from_scale_in');
    }

    // placement_group - computed: true, optional: false, required: false
    public get placementGroup() {
      return this.getStringAttribute('placement_group');
    }

    // service_linked_role_arn - computed: true, optional: false, required: false
    public get serviceLinkedRoleArn() {
      return this.getStringAttribute('service_linked_role_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // target_group_arns - computed: true, optional: false, required: false
    public get targetGroupArns() {
      return this.getListAttribute('target_group_arns');
    }

    // termination_policies - computed: true, optional: false, required: false
    public get terminationPolicies() {
      return this.getListAttribute('termination_policies');
    }

    // vpc_zone_identifier - computed: true, optional: false, required: false
    public get vpcZoneIdentifier() {
      return this.getStringAttribute('vpc_zone_identifier');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsAutoscalingGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#filter DataAwsAutoscalingGroups#filter}
    */
    readonly filter?: DataAwsAutoscalingGroupsFilter[];
  }
  export interface DataAwsAutoscalingGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#name DataAwsAutoscalingGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html#values DataAwsAutoscalingGroups#values}
    */
    readonly values: string[];
  }

  function dataAwsAutoscalingGroupsFilterToTerraform(struct?: DataAwsAutoscalingGroupsFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups}
  */
  export class DataAwsAutoscalingGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_autoscaling_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/autoscaling_groups.html aws_autoscaling_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAutoscalingGroupsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAutoscalingGroupsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_autoscaling_groups',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._filter = config.filter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arns - computed: true, optional: false, required: false
    public get arns() {
      return this.getListAttribute('arns');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // filter - computed: false, optional: true, required: false
    private _filter?: DataAwsAutoscalingGroupsFilter[];
    public get filter() {
      return this.interpolationForAttribute('filter') as any;
    }
    public set filter(value: DataAwsAutoscalingGroupsFilter[] ) {
      this._filter = value;
    }
    public resetFilter() {
      this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
      return this._filter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        filter: cdktf.listMapper(dataAwsAutoscalingGroupsFilterToTerraform)(this._filter),
      };
    }
  }
}
