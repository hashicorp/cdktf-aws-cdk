// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppAutoScaling
*/
export namespace AppAutoScaling {
  export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#policy_type AppautoscalingPolicy#policy_type}
    */
    readonly policyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_id AppautoscalingPolicy#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scalable_dimension AppautoscalingPolicy#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#service_namespace AppautoscalingPolicy#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * step_scaling_policy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_scaling_policy_configuration AppautoscalingPolicy#step_scaling_policy_configuration}
    */
    readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
    /**
    * target_tracking_scaling_policy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_tracking_scaling_policy_configuration AppautoscalingPolicy#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
  }
  export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_lower_bound AppautoscalingPolicy#metric_interval_lower_bound}
    */
    readonly metricIntervalLowerBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_interval_upper_bound AppautoscalingPolicy#metric_interval_upper_bound}
    */
    readonly metricIntervalUpperBound?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scaling_adjustment AppautoscalingPolicy#scaling_adjustment}
    */
    readonly scalingAdjustment: number;
  }

  function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_interval_lower_bound: cdktf.stringToTerraform(struct!.metricIntervalLowerBound),
      metric_interval_upper_bound: cdktf.stringToTerraform(struct!.metricIntervalUpperBound),
      scaling_adjustment: cdktf.numberToTerraform(struct!.scalingAdjustment),
    }
  }

  export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#adjustment_type AppautoscalingPolicy#adjustment_type}
    */
    readonly adjustmentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#cooldown AppautoscalingPolicy#cooldown}
    */
    readonly cooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_aggregation_type AppautoscalingPolicy#metric_aggregation_type}
    */
    readonly metricAggregationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#min_adjustment_magnitude AppautoscalingPolicy#min_adjustment_magnitude}
    */
    readonly minAdjustmentMagnitude?: number;
    /**
    * step_adjustment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#step_adjustment AppautoscalingPolicy#step_adjustment}
    */
    readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
  }

  function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      adjustment_type: cdktf.stringToTerraform(struct!.adjustmentType),
      cooldown: cdktf.numberToTerraform(struct!.cooldown),
      metric_aggregation_type: cdktf.stringToTerraform(struct!.metricAggregationType),
      min_adjustment_magnitude: cdktf.numberToTerraform(struct!.minAdjustmentMagnitude),
      step_adjustment: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform)(struct!.stepAdjustment),
    }
  }

  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#value AppautoscalingPolicy#value}
    */
    readonly value: string;
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#metric_name AppautoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#namespace AppautoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#statistic AppautoscalingPolicy#statistic}
    */
    readonly statistic: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#unit AppautoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * dimensions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#dimensions AppautoscalingPolicy#dimensions}
    */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      namespace: cdktf.stringToTerraform(struct!.namespace),
      statistic: cdktf.stringToTerraform(struct!.statistic),
      unit: cdktf.stringToTerraform(struct!.unit),
      dimensions: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform)(struct!.dimensions),
    }
  }

  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_type AppautoscalingPolicy#predefined_metric_type}
    */
    readonly predefinedMetricType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#resource_label AppautoscalingPolicy#resource_label}
    */
    readonly resourceLabel?: string;
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      predefined_metric_type: cdktf.stringToTerraform(struct!.predefinedMetricType),
      resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
    }
  }

  export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#disable_scale_in AppautoscalingPolicy#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_in_cooldown AppautoscalingPolicy#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#scale_out_cooldown AppautoscalingPolicy#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#target_value AppautoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#customized_metric_specification AppautoscalingPolicy#customized_metric_specification}
    */
    readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification[];
    /**
    * predefined_metric_specification block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html#predefined_metric_specification AppautoscalingPolicy#predefined_metric_specification}
    */
    readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification[];
  }

  function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
      scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
      scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
      target_value: cdktf.numberToTerraform(struct!.targetValue),
      customized_metric_specification: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform)(struct!.customizedMetricSpecification),
      predefined_metric_specification: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform)(struct!.predefinedMetricSpecification),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy}
  */
  export class AppautoscalingPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html aws_appautoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appautoscaling_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._policyType = config.policyType;
      this._resourceId = config.resourceId;
      this._scalableDimension = config.scalableDimension;
      this._serviceNamespace = config.serviceNamespace;
      this._stepScalingPolicyConfiguration = config.stepScalingPolicyConfiguration;
      this._targetTrackingScalingPolicyConfiguration = config.targetTrackingScalingPolicyConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // resource_id - computed: false, optional: false, required: true
    private _resourceId: string;
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension: string;
    public get scalableDimension() {
      return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
      this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
      return this._scalableDimension
    }

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace: string;
    public get serviceNamespace() {
      return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
      this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
      return this._serviceNamespace
    }

    // step_scaling_policy_configuration - computed: false, optional: true, required: false
    private _stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
    public get stepScalingPolicyConfiguration() {
      return this.interpolationForAttribute('step_scaling_policy_configuration') as any;
    }
    public set stepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration[] ) {
      this._stepScalingPolicyConfiguration = value;
    }
    public resetStepScalingPolicyConfiguration() {
      this._stepScalingPolicyConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepScalingPolicyConfigurationInput() {
      return this._stepScalingPolicyConfiguration
    }

    // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
    public get targetTrackingScalingPolicyConfiguration() {
      return this.interpolationForAttribute('target_tracking_scaling_policy_configuration') as any;
    }
    public set targetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[] ) {
      this._targetTrackingScalingPolicyConfiguration = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
      this._targetTrackingScalingPolicyConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
      return this._targetTrackingScalingPolicyConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        policy_type: cdktf.stringToTerraform(this._policyType),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
        step_scaling_policy_configuration: cdktf.listMapper(appautoscalingPolicyStepScalingPolicyConfigurationToTerraform)(this._stepScalingPolicyConfiguration),
        target_tracking_scaling_policy_configuration: cdktf.listMapper(appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform)(this._targetTrackingScalingPolicyConfiguration),
      };
    }
  }
  export interface AppautoscalingScheduledActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#end_time AppautoscalingScheduledAction#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#name AppautoscalingScheduledAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#resource_id AppautoscalingScheduledAction#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_dimension AppautoscalingScheduledAction#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#schedule AppautoscalingScheduledAction#schedule}
    */
    readonly schedule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#service_namespace AppautoscalingScheduledAction#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#start_time AppautoscalingScheduledAction#start_time}
    */
    readonly startTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#timezone AppautoscalingScheduledAction#timezone}
    */
    readonly timezone?: string;
    /**
    * scalable_target_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#scalable_target_action AppautoscalingScheduledAction#scalable_target_action}
    */
    readonly scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction[];
  }
  export interface AppautoscalingScheduledActionScalableTargetAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#max_capacity AppautoscalingScheduledAction#max_capacity}
    */
    readonly maxCapacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html#min_capacity AppautoscalingScheduledAction#min_capacity}
    */
    readonly minCapacity?: string;
  }

  function appautoscalingScheduledActionScalableTargetActionToTerraform(struct?: AppautoscalingScheduledActionScalableTargetAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_capacity: cdktf.stringToTerraform(struct!.maxCapacity),
      min_capacity: cdktf.stringToTerraform(struct!.minCapacity),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action}
  */
  export class AppautoscalingScheduledAction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_scheduled_action";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_scheduled_action.html aws_appautoscaling_scheduled_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingScheduledActionConfig
    */
    public constructor(scope: Construct, id: string, config: AppautoscalingScheduledActionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appautoscaling_scheduled_action',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endTime = config.endTime;
      this._name = config.name;
      this._resourceId = config.resourceId;
      this._scalableDimension = config.scalableDimension;
      this._schedule = config.schedule;
      this._serviceNamespace = config.serviceNamespace;
      this._startTime = config.startTime;
      this._timezone = config.timezone;
      this._scalableTargetAction = config.scalableTargetAction;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // end_time - computed: false, optional: true, required: false
    private _endTime?: string;
    public get endTime() {
      return this.getStringAttribute('end_time');
    }
    public set endTime(value: string ) {
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

    // resource_id - computed: false, optional: false, required: true
    private _resourceId: string;
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension: string;
    public get scalableDimension() {
      return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
      this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
      return this._scalableDimension
    }

    // schedule - computed: false, optional: false, required: true
    private _schedule: string;
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

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace: string;
    public get serviceNamespace() {
      return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
      this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
      return this._serviceNamespace
    }

    // start_time - computed: false, optional: true, required: false
    private _startTime?: string;
    public get startTime() {
      return this.getStringAttribute('start_time');
    }
    public set startTime(value: string ) {
      this._startTime = value;
    }
    public resetStartTime() {
      this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
      return this._startTime
    }

    // timezone - computed: false, optional: true, required: false
    private _timezone?: string;
    public get timezone() {
      return this.getStringAttribute('timezone');
    }
    public set timezone(value: string ) {
      this._timezone = value;
    }
    public resetTimezone() {
      this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
      return this._timezone
    }

    // scalable_target_action - computed: false, optional: false, required: true
    private _scalableTargetAction: AppautoscalingScheduledActionScalableTargetAction[];
    public get scalableTargetAction() {
      return this.interpolationForAttribute('scalable_target_action') as any;
    }
    public set scalableTargetAction(value: AppautoscalingScheduledActionScalableTargetAction[]) {
      this._scalableTargetAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableTargetActionInput() {
      return this._scalableTargetAction
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        end_time: cdktf.stringToTerraform(this._endTime),
        name: cdktf.stringToTerraform(this._name),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        schedule: cdktf.stringToTerraform(this._schedule),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
        start_time: cdktf.stringToTerraform(this._startTime),
        timezone: cdktf.stringToTerraform(this._timezone),
        scalable_target_action: cdktf.listMapper(appautoscalingScheduledActionScalableTargetActionToTerraform)(this._scalableTargetAction),
      };
    }
  }
  export interface AppautoscalingTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#max_capacity AppautoscalingTarget#max_capacity}
    */
    readonly maxCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#min_capacity AppautoscalingTarget#min_capacity}
    */
    readonly minCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#resource_id AppautoscalingTarget#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#role_arn AppautoscalingTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#scalable_dimension AppautoscalingTarget#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html#service_namespace AppautoscalingTarget#service_namespace}
    */
    readonly serviceNamespace: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target}
  */
  export class AppautoscalingTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_appautoscaling_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appautoscaling_target.html aws_appautoscaling_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingTargetConfig
    */
    public constructor(scope: Construct, id: string, config: AppautoscalingTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_appautoscaling_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._maxCapacity = config.maxCapacity;
      this._minCapacity = config.minCapacity;
      this._resourceId = config.resourceId;
      this._roleArn = config.roleArn;
      this._scalableDimension = config.scalableDimension;
      this._serviceNamespace = config.serviceNamespace;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // max_capacity - computed: false, optional: false, required: true
    private _maxCapacity: number;
    public get maxCapacity() {
      return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
      this._maxCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
      return this._maxCapacity
    }

    // min_capacity - computed: false, optional: false, required: true
    private _minCapacity: number;
    public get minCapacity() {
      return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
      this._minCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
      return this._minCapacity
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId: string;
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string;
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension: string;
    public get scalableDimension() {
      return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
      this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
      return this._scalableDimension
    }

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace: string;
    public get serviceNamespace() {
      return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
      this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
      return this._serviceNamespace
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        max_capacity: cdktf.numberToTerraform(this._maxCapacity),
        min_capacity: cdktf.numberToTerraform(this._minCapacity),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        scalable_dimension: cdktf.stringToTerraform(this._scalableDimension),
        service_namespace: cdktf.stringToTerraform(this._serviceNamespace),
      };
    }
  }
}
