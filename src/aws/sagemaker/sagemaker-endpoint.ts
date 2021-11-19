// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#endpoint_config_name SagemakerEndpoint#endpoint_config_name}
  */
  readonly endpointConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#name SagemakerEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags SagemakerEndpoint#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#tags_all SagemakerEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * deployment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#deployment_config SagemakerEndpoint#deployment_config}
  */
  readonly deploymentConfig?: SagemakerEndpointDeploymentConfig;
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#alarm_name SagemakerEndpoint#alarm_name}
  */
  readonly alarmName: string;
}

export function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
  }
}

export interface SagemakerEndpointDeploymentConfigAutoRollbackConfiguration {
  /**
  * alarms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#alarms SagemakerEndpoint#alarms}
  */
  readonly alarms?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[];
}

export function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference | SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform)(struct!.alarms),
  }
}

export class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | undefined; 
  public get alarms() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('alarms') as any;
  }
  public set alarms(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | undefined) {
    this._alarms = value;
  }
  public resetAlarms() {
    this._alarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#value SagemakerEndpoint#value}
  */
  readonly value: number;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#value SagemakerEndpoint#value}
  */
  readonly value: number;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds: number;
  /**
  * canary_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#canary_size SagemakerEndpoint#canary_size}
  */
  readonly canarySize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
  /**
  * linear_step_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#linear_step_size SagemakerEndpoint#linear_step_size}
  */
  readonly linearStepSize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    wait_interval_in_seconds: cdktf.numberToTerraform(struct!.waitIntervalInSeconds),
    canary_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct!.canarySize),
    linear_step_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct!.linearStepSize),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // wait_interval_in_seconds - computed: false, optional: false, required: true
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds
  }

  // canary_size - computed: false, optional: true, required: false
  private _canarySize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined; 
  private __canarySizeOutput = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(this as any, "canary_size", true);
  public get canarySize() {
    return this.__canarySizeOutput;
  }
  public putCanarySize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined) {
    this._canarySize = value;
  }
  public resetCanarySize() {
    this._canarySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySizeInput() {
    return this._canarySize
  }

  // linear_step_size - computed: false, optional: true, required: false
  private _linearStepSize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined; 
  private __linearStepSizeOutput = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(this as any, "linear_step_size", true);
  public get linearStepSize() {
    return this.__linearStepSizeOutput;
  }
  public putLinearStepSize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined) {
    this._linearStepSize = value;
  }
  public resetLinearStepSize() {
    this._linearStepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearStepSizeInput() {
    return this._linearStepSize
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}
  */
  readonly terminationWaitInSeconds?: number;
  /**
  * traffic_routing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}
  */
  readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktf.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    termination_wait_in_seconds: cdktf.numberToTerraform(struct!.terminationWaitInSeconds),
    traffic_routing_configuration: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct!.trafficRoutingConfiguration),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number | undefined; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number | undefined) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds
  }

  // termination_wait_in_seconds - computed: false, optional: true, required: false
  private _terminationWaitInSeconds?: number | undefined; 
  public get terminationWaitInSeconds() {
    return this.getNumberAttribute('termination_wait_in_seconds');
  }
  public set terminationWaitInSeconds(value: number | undefined) {
    this._terminationWaitInSeconds = value;
  }
  public resetTerminationWaitInSeconds() {
    this._terminationWaitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitInSecondsInput() {
    return this._terminationWaitInSeconds
  }

  // traffic_routing_configuration - computed: false, optional: false, required: true
  private _trafficRoutingConfiguration?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration; 
  private __trafficRoutingConfigurationOutput = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(this as any, "traffic_routing_configuration", true);
  public get trafficRoutingConfiguration() {
    return this.__trafficRoutingConfigurationOutput;
  }
  public putTrafficRoutingConfiguration(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration) {
    this._trafficRoutingConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigurationInput() {
    return this._trafficRoutingConfiguration
  }
}
export interface SagemakerEndpointDeploymentConfig {
  /**
  * auto_rollback_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
  /**
  * blue_green_update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}
  */
  readonly blueGreenUpdatePolicy: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
}

export function sagemakerEndpointDeploymentConfigToTerraform(struct?: SagemakerEndpointDeploymentConfigOutputReference | SagemakerEndpointDeploymentConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_rollback_configuration: sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct!.autoRollbackConfiguration),
    blue_green_update_policy: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct!.blueGreenUpdatePolicy),
  }
}

export class SagemakerEndpointDeploymentConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration?: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined; 
  private __autoRollbackConfigurationOutput = new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(this as any, "auto_rollback_configuration", true);
  public get autoRollbackConfiguration() {
    return this.__autoRollbackConfigurationOutput;
  }
  public putAutoRollbackConfiguration(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined) {
    this._autoRollbackConfiguration = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration
  }

  // blue_green_update_policy - computed: false, optional: false, required: true
  private _blueGreenUpdatePolicy?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy; 
  private __blueGreenUpdatePolicyOutput = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(this as any, "blue_green_update_policy", true);
  public get blueGreenUpdatePolicy() {
    return this.__blueGreenUpdatePolicyOutput;
  }
  public putBlueGreenUpdatePolicy(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy) {
    this._blueGreenUpdatePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdatePolicyInput() {
    return this._blueGreenUpdatePolicy
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint}
*/
export class SagemakerEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint.html aws_sagemaker_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._endpointConfigName = config.endpointConfigName;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._deploymentConfig = config.deploymentConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_config_name - computed: false, optional: false, required: true
  private _endpointConfigName?: string; 
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }
  public set endpointConfigName(value: string) {
    this._endpointConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigNameInput() {
    return this._endpointConfigName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig?: SagemakerEndpointDeploymentConfig | undefined; 
  private __deploymentConfigOutput = new SagemakerEndpointDeploymentConfigOutputReference(this as any, "deployment_config", true);
  public get deploymentConfig() {
    return this.__deploymentConfigOutput;
  }
  public putDeploymentConfig(value: SagemakerEndpointDeploymentConfig | undefined) {
    this._deploymentConfig = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_config_name: cdktf.stringToTerraform(this._endpointConfigName),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      deployment_config: sagemakerEndpointDeploymentConfigToTerraform(this._deploymentConfig),
    };
  }
}
