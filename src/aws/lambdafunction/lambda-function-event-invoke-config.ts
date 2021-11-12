// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lambda
*/
export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#function_name LambdaFunctionEventInvokeConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#qualifier LambdaFunctionEventInvokeConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination_config LambdaFunctionEventInvokeConfig#destination_config}
  */
  readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
  */
  readonly destination: string;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
  */
  readonly destination: string;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
  /**
  * on_failure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_failure LambdaFunctionEventInvokeConfig#on_failure}
  */
  readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
  /**
  * on_success block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_success LambdaFunctionEventInvokeConfig#on_success}
  */
  readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined; 
  private __onFailureOutput = new LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this as any, "on_failure", true);
  public get onFailure() {
    return this.__onFailureOutput;
  }
  public putOnFailure(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined; 
  private __onSuccessOutput = new LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this as any, "on_success", true);
  public get onSuccess() {
    return this.__onSuccessOutput;
  }
  public putOnSuccess(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined) {
    this._onSuccess = value;
  }
  public resetOnSuccess() {
    this._onSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config}
*/
export class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_function_event_invoke_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html aws_lambda_function_event_invoke_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionEventInvokeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_event_invoke_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._qualifier = config.qualifier;
    this._destinationConfig = config.destinationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number | undefined; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number | undefined) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number | undefined; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number | undefined) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string | undefined; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string | undefined) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig | undefined; 
  private __destinationConfigOutput = new LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(this as any, "destination_config", true);
  public get destinationConfig() {
    return this.__destinationConfigOutput;
  }
  public putDestinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig | undefined) {
    this._destinationConfig = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      destination_config: lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(this._destinationConfig),
    };
  }
}
