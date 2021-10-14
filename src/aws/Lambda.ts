// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lambda
*/
export namespace Lambda {
  export interface LambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#description LambdaAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_name LambdaAlias#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#function_version LambdaAlias#function_version}
    */
    readonly functionVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#name LambdaAlias#name}
    */
    readonly name: string;
    /**
    * routing_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#routing_config LambdaAlias#routing_config}
    */
    readonly routingConfig?: LambdaAliasRoutingConfig[];
  }
  export interface LambdaAliasRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html#additional_version_weights LambdaAlias#additional_version_weights}
    */
    readonly additionalVersionWeights?: { [key: string]: number } | cdktf.IResolvable;
  }

  function lambdaAliasRoutingConfigToTerraform(struct?: LambdaAliasRoutingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      additional_version_weights: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.additionalVersionWeights),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias}
  */
  export class LambdaAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_alias.html aws_lambda_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaAliasConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._functionName = config.functionName;
      this._functionVersion = config.functionVersion;
      this._name = config.name;
      this._routingConfig = config.routingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // function_version - computed: false, optional: false, required: true
    private _functionVersion: string;
    public get functionVersion() {
      return this.getStringAttribute('function_version');
    }
    public set functionVersion(value: string) {
      this._functionVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionVersionInput() {
      return this._functionVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_arn - computed: true, optional: false, required: false
    public get invokeArn() {
      return this.getStringAttribute('invoke_arn');
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

    // routing_config - computed: false, optional: true, required: false
    private _routingConfig?: LambdaAliasRoutingConfig[];
    public get routingConfig() {
      return this.interpolationForAttribute('routing_config') as any;
    }
    public set routingConfig(value: LambdaAliasRoutingConfig[] ) {
      this._routingConfig = value;
    }
    public resetRoutingConfig() {
      this._routingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingConfigInput() {
      return this._routingConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        function_name: cdktf.stringToTerraform(this._functionName),
        function_version: cdktf.stringToTerraform(this._functionVersion),
        name: cdktf.stringToTerraform(this._name),
        routing_config: cdktf.listMapper(lambdaAliasRoutingConfigToTerraform)(this._routingConfig),
      };
    }
  }
  export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}
    */
    readonly description?: string;
    /**
    * allowed_publishers block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
    */
    readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
    /**
    * policies block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#policies LambdaCodeSigningConfig#policies}
    */
    readonly policies?: LambdaCodeSigningConfigPolicies[];
  }
  export interface LambdaCodeSigningConfigAllowedPublishers {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
    */
    readonly signingProfileVersionArns: string[];
  }

  function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishers): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      signing_profile_version_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.signingProfileVersionArns),
    }
  }

  export interface LambdaCodeSigningConfigPolicies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
    */
    readonly untrustedArtifactOnDeployment: string;
  }

  function lambdaCodeSigningConfigPoliciesToTerraform(struct?: LambdaCodeSigningConfigPolicies): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      untrusted_artifact_on_deployment: cdktf.stringToTerraform(struct!.untrustedArtifactOnDeployment),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config}
  */
  export class LambdaCodeSigningConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_code_signing_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaCodeSigningConfigConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_code_signing_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._allowedPublishers = config.allowedPublishers;
      this._policies = config.policies;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // config_id - computed: true, optional: false, required: false
    public get configId() {
      return this.getStringAttribute('config_id');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // allowed_publishers - computed: false, optional: false, required: true
    private _allowedPublishers: LambdaCodeSigningConfigAllowedPublishers[];
    public get allowedPublishers() {
      return this.interpolationForAttribute('allowed_publishers') as any;
    }
    public set allowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers[]) {
      this._allowedPublishers = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedPublishersInput() {
      return this._allowedPublishers
    }

    // policies - computed: false, optional: true, required: false
    private _policies?: LambdaCodeSigningConfigPolicies[];
    public get policies() {
      return this.interpolationForAttribute('policies') as any;
    }
    public set policies(value: LambdaCodeSigningConfigPolicies[] ) {
      this._policies = value;
    }
    public resetPolicies() {
      this._policies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policiesInput() {
      return this._policies
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        allowed_publishers: cdktf.listMapper(lambdaCodeSigningConfigAllowedPublishersToTerraform)(this._allowedPublishers),
        policies: cdktf.listMapper(lambdaCodeSigningConfigPoliciesToTerraform)(this._policies),
      };
    }
  }
  export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#batch_size LambdaEventSourceMapping#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
    */
    readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#enabled LambdaEventSourceMapping#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#event_source_arn LambdaEventSourceMapping#event_source_arn}
    */
    readonly eventSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_name LambdaEventSourceMapping#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_response_types LambdaEventSourceMapping#function_response_types}
    */
    readonly functionResponseTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#queues LambdaEventSourceMapping#queues}
    */
    readonly queues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position LambdaEventSourceMapping#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#topics LambdaEventSourceMapping#topics}
    */
    readonly topics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
    */
    readonly tumblingWindowInSeconds?: number;
    /**
    * destination_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_config LambdaEventSourceMapping#destination_config}
    */
    readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
    /**
    * self_managed_event_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
    */
    readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource[];
    /**
    * source_access_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#source_access_configuration LambdaEventSourceMapping#source_access_configuration}
    */
    readonly sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[];
  }
  export interface LambdaEventSourceMappingDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_arn LambdaEventSourceMapping#destination_arn}
    */
    readonly destinationArn: string;
  }

  function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailure): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
    }
  }

  export interface LambdaEventSourceMappingDestinationConfig {
    /**
    * on_failure block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#on_failure LambdaEventSourceMapping#on_failure}
    */
    readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure[];
  }

  function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_failure: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigOnFailureToTerraform)(struct!.onFailure),
    }
  }

  export interface LambdaEventSourceMappingSelfManagedEventSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#endpoints LambdaEventSourceMapping#endpoints}
    */
    readonly endpoints: { [key: string]: string } | cdktf.IResolvable;
  }

  function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      endpoints: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.endpoints),
    }
  }

  export interface LambdaEventSourceMappingSourceAccessConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#type LambdaEventSourceMapping#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#uri LambdaEventSourceMapping#uri}
    */
    readonly uri: string;
  }

  function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      uri: cdktf.stringToTerraform(struct!.uri),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}
  */
  export class LambdaEventSourceMapping extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_event_source_mapping";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_event_source_mapping',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._batchSize = config.batchSize;
      this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
      this._enabled = config.enabled;
      this._eventSourceArn = config.eventSourceArn;
      this._functionName = config.functionName;
      this._functionResponseTypes = config.functionResponseTypes;
      this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
      this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
      this._maximumRetryAttempts = config.maximumRetryAttempts;
      this._parallelizationFactor = config.parallelizationFactor;
      this._queues = config.queues;
      this._startingPosition = config.startingPosition;
      this._startingPositionTimestamp = config.startingPositionTimestamp;
      this._topics = config.topics;
      this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
      this._destinationConfig = config.destinationConfig;
      this._selfManagedEventSource = config.selfManagedEventSource;
      this._sourceAccessConfiguration = config.sourceAccessConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // batch_size - computed: false, optional: true, required: false
    private _batchSize?: number;
    public get batchSize() {
      return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number ) {
      this._batchSize = value;
    }
    public resetBatchSize() {
      this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
      return this._batchSize
    }

    // bisect_batch_on_function_error - computed: false, optional: true, required: false
    private _bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
    public get bisectBatchOnFunctionError() {
      return this.getBooleanAttribute('bisect_batch_on_function_error');
    }
    public set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable ) {
      this._bisectBatchOnFunctionError = value;
    }
    public resetBisectBatchOnFunctionError() {
      this._bisectBatchOnFunctionError = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bisectBatchOnFunctionErrorInput() {
      return this._bisectBatchOnFunctionError
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable;
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktf.IResolvable ) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // event_source_arn - computed: false, optional: true, required: false
    private _eventSourceArn?: string;
    public get eventSourceArn() {
      return this.getStringAttribute('event_source_arn');
    }
    public set eventSourceArn(value: string ) {
      this._eventSourceArn = value;
    }
    public resetEventSourceArn() {
      this._eventSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceArnInput() {
      return this._eventSourceArn
    }

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
      return this.getStringAttribute('function_arn');
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // function_response_types - computed: false, optional: true, required: false
    private _functionResponseTypes?: string[];
    public get functionResponseTypes() {
      return this.getListAttribute('function_response_types');
    }
    public set functionResponseTypes(value: string[] ) {
      this._functionResponseTypes = value;
    }
    public resetFunctionResponseTypes() {
      this._functionResponseTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionResponseTypesInput() {
      return this._functionResponseTypes
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // last_processing_result - computed: true, optional: false, required: false
    public get lastProcessingResult() {
      return this.getStringAttribute('last_processing_result');
    }

    // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number;
    public get maximumBatchingWindowInSeconds() {
      return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number ) {
      this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
      this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
      return this._maximumBatchingWindowInSeconds
    }

    // maximum_record_age_in_seconds - computed: true, optional: true, required: false
    private _maximumRecordAgeInSeconds?: number;
    public get maximumRecordAgeInSeconds() {
      return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    public set maximumRecordAgeInSeconds(value: number) {
      this._maximumRecordAgeInSeconds = value;
    }
    public resetMaximumRecordAgeInSeconds() {
      this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRecordAgeInSecondsInput() {
      return this._maximumRecordAgeInSeconds
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number;
    public get maximumRetryAttempts() {
      return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
      this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
      this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
      return this._maximumRetryAttempts
    }

    // parallelization_factor - computed: true, optional: true, required: false
    private _parallelizationFactor?: number;
    public get parallelizationFactor() {
      return this.getNumberAttribute('parallelization_factor');
    }
    public set parallelizationFactor(value: number) {
      this._parallelizationFactor = value;
    }
    public resetParallelizationFactor() {
      this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelizationFactorInput() {
      return this._parallelizationFactor
    }

    // queues - computed: false, optional: true, required: false
    private _queues?: string[];
    public get queues() {
      return this.getListAttribute('queues');
    }
    public set queues(value: string[] ) {
      this._queues = value;
    }
    public resetQueues() {
      this._queues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queuesInput() {
      return this._queues
    }

    // starting_position - computed: false, optional: true, required: false
    private _startingPosition?: string;
    public get startingPosition() {
      return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string ) {
      this._startingPosition = value;
    }
    public resetStartingPosition() {
      this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
      return this._startingPosition
    }

    // starting_position_timestamp - computed: false, optional: true, required: false
    private _startingPositionTimestamp?: string;
    public get startingPositionTimestamp() {
      return this.getStringAttribute('starting_position_timestamp');
    }
    public set startingPositionTimestamp(value: string ) {
      this._startingPositionTimestamp = value;
    }
    public resetStartingPositionTimestamp() {
      this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionTimestampInput() {
      return this._startingPositionTimestamp
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // state_transition_reason - computed: true, optional: false, required: false
    public get stateTransitionReason() {
      return this.getStringAttribute('state_transition_reason');
    }

    // topics - computed: false, optional: true, required: false
    private _topics?: string[];
    public get topics() {
      return this.getListAttribute('topics');
    }
    public set topics(value: string[] ) {
      this._topics = value;
    }
    public resetTopics() {
      this._topics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsInput() {
      return this._topics
    }

    // tumbling_window_in_seconds - computed: false, optional: true, required: false
    private _tumblingWindowInSeconds?: number;
    public get tumblingWindowInSeconds() {
      return this.getNumberAttribute('tumbling_window_in_seconds');
    }
    public set tumblingWindowInSeconds(value: number ) {
      this._tumblingWindowInSeconds = value;
    }
    public resetTumblingWindowInSeconds() {
      this._tumblingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tumblingWindowInSecondsInput() {
      return this._tumblingWindowInSeconds
    }

    // uuid - computed: true, optional: false, required: false
    public get uuid() {
      return this.getStringAttribute('uuid');
    }

    // destination_config - computed: false, optional: true, required: false
    private _destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
    public get destinationConfig() {
      return this.interpolationForAttribute('destination_config') as any;
    }
    public set destinationConfig(value: LambdaEventSourceMappingDestinationConfig[] ) {
      this._destinationConfig = value;
    }
    public resetDestinationConfig() {
      this._destinationConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationConfigInput() {
      return this._destinationConfig
    }

    // self_managed_event_source - computed: false, optional: true, required: false
    private _selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource[];
    public get selfManagedEventSource() {
      return this.interpolationForAttribute('self_managed_event_source') as any;
    }
    public set selfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource[] ) {
      this._selfManagedEventSource = value;
    }
    public resetSelfManagedEventSource() {
      this._selfManagedEventSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedEventSourceInput() {
      return this._selfManagedEventSource
    }

    // source_access_configuration - computed: false, optional: true, required: false
    private _sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[];
    public get sourceAccessConfiguration() {
      return this.interpolationForAttribute('source_access_configuration') as any;
    }
    public set sourceAccessConfiguration(value: LambdaEventSourceMappingSourceAccessConfiguration[] ) {
      this._sourceAccessConfiguration = value;
    }
    public resetSourceAccessConfiguration() {
      this._sourceAccessConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAccessConfigurationInput() {
      return this._sourceAccessConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        batch_size: cdktf.numberToTerraform(this._batchSize),
        bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
        enabled: cdktf.booleanToTerraform(this._enabled),
        event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
        function_name: cdktf.stringToTerraform(this._functionName),
        function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
        maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
        maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
        maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
        parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
        queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
        starting_position: cdktf.stringToTerraform(this._startingPosition),
        starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
        topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
        tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
        destination_config: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigToTerraform)(this._destinationConfig),
        self_managed_event_source: cdktf.listMapper(lambdaEventSourceMappingSelfManagedEventSourceToTerraform)(this._selfManagedEventSource),
        source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform)(this._sourceAccessConfiguration),
      };
    }
  }
  export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#architectures LambdaFunction#architectures}
    */
    readonly architectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#code_signing_config_arn LambdaFunction#code_signing_config_arn}
    */
    readonly codeSigningConfigArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#description LambdaFunction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#filename LambdaFunction#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#function_name LambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#handler LambdaFunction#handler}
    */
    readonly handler?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_uri LambdaFunction#image_uri}
    */
    readonly imageUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#kms_key_arn LambdaFunction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#layers LambdaFunction#layers}
    */
    readonly layers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#memory_size LambdaFunction#memory_size}
    */
    readonly memorySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#package_type LambdaFunction#package_type}
    */
    readonly packageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#publish LambdaFunction#publish}
    */
    readonly publish?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
    */
    readonly reservedConcurrentExecutions?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#role LambdaFunction#role}
    */
    readonly role: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#runtime LambdaFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_bucket LambdaFunction#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_key LambdaFunction#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_object_version LambdaFunction#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#source_code_hash LambdaFunction#source_code_hash}
    */
    readonly sourceCodeHash?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags LambdaFunction#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags_all LambdaFunction#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeout LambdaFunction#timeout}
    */
    readonly timeout?: number;
    /**
    * dead_letter_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#dead_letter_config LambdaFunction#dead_letter_config}
    */
    readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
    /**
    * environment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#environment LambdaFunction#environment}
    */
    readonly environment?: LambdaFunctionEnvironment[];
    /**
    * file_system_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#file_system_config LambdaFunction#file_system_config}
    */
    readonly fileSystemConfig?: LambdaFunctionFileSystemConfig[];
    /**
    * image_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_config LambdaFunction#image_config}
    */
    readonly imageConfig?: LambdaFunctionImageConfig[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeouts LambdaFunction#timeouts}
    */
    readonly timeouts?: LambdaFunctionTimeouts;
    /**
    * tracing_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tracing_config LambdaFunction#tracing_config}
    */
    readonly tracingConfig?: LambdaFunctionTracingConfig[];
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#vpc_config LambdaFunction#vpc_config}
    */
    readonly vpcConfig?: LambdaFunctionVpcConfig[];
  }
  export interface LambdaFunctionDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#target_arn LambdaFunction#target_arn}
    */
    readonly targetArn: string;
  }

  function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      target_arn: cdktf.stringToTerraform(struct!.targetArn),
    }
  }

  export interface LambdaFunctionEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#variables LambdaFunction#variables}
    */
    readonly variables?: { [key: string]: string } | cdktf.IResolvable;
  }

  function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.variables),
    }
  }

  export interface LambdaFunctionFileSystemConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#arn LambdaFunction#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#local_mount_path LambdaFunction#local_mount_path}
    */
    readonly localMountPath: string;
  }

  function lambdaFunctionFileSystemConfigToTerraform(struct?: LambdaFunctionFileSystemConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
    }
  }

  export interface LambdaFunctionImageConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#command LambdaFunction#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#entry_point LambdaFunction#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#working_directory LambdaFunction#working_directory}
    */
    readonly workingDirectory?: string;
  }

  function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
      entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
      working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    }
  }

  export interface LambdaFunctionTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#create LambdaFunction#create}
    */
    readonly create?: string;
  }

  function lambdaFunctionTimeoutsToTerraform(struct?: LambdaFunctionTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }

  export interface LambdaFunctionTracingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#mode LambdaFunction#mode}
    */
    readonly mode: string;
  }

  function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mode: cdktf.stringToTerraform(struct!.mode),
    }
  }

  export interface LambdaFunctionVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#security_group_ids LambdaFunction#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#subnet_ids LambdaFunction#subnet_ids}
    */
    readonly subnetIds: string[];
  }

  function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function}
  */
  export class LambdaFunction extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._architectures = config.architectures;
      this._codeSigningConfigArn = config.codeSigningConfigArn;
      this._description = config.description;
      this._filename = config.filename;
      this._functionName = config.functionName;
      this._handler = config.handler;
      this._imageUri = config.imageUri;
      this._kmsKeyArn = config.kmsKeyArn;
      this._layers = config.layers;
      this._memorySize = config.memorySize;
      this._packageType = config.packageType;
      this._publish = config.publish;
      this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
      this._role = config.role;
      this._runtime = config.runtime;
      this._s3Bucket = config.s3Bucket;
      this._s3Key = config.s3Key;
      this._s3ObjectVersion = config.s3ObjectVersion;
      this._sourceCodeHash = config.sourceCodeHash;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeout = config.timeout;
      this._deadLetterConfig = config.deadLetterConfig;
      this._environment = config.environment;
      this._fileSystemConfig = config.fileSystemConfig;
      this._imageConfig = config.imageConfig;
      this._timeouts = config.timeouts;
      this._tracingConfig = config.tracingConfig;
      this._vpcConfig = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architectures - computed: true, optional: true, required: false
    private _architectures?: string[];
    public get architectures() {
      return this.getListAttribute('architectures');
    }
    public set architectures(value: string[]) {
      this._architectures = value;
    }
    public resetArchitectures() {
      this._architectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architecturesInput() {
      return this._architectures
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // code_signing_config_arn - computed: false, optional: true, required: false
    private _codeSigningConfigArn?: string;
    public get codeSigningConfigArn() {
      return this.getStringAttribute('code_signing_config_arn');
    }
    public set codeSigningConfigArn(value: string ) {
      this._codeSigningConfigArn = value;
    }
    public resetCodeSigningConfigArn() {
      this._codeSigningConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeSigningConfigArnInput() {
      return this._codeSigningConfigArn
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // filename - computed: false, optional: true, required: false
    private _filename?: string;
    public get filename() {
      return this.getStringAttribute('filename');
    }
    public set filename(value: string ) {
      this._filename = value;
    }
    public resetFilename() {
      this._filename = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filenameInput() {
      return this._filename
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // handler - computed: false, optional: true, required: false
    private _handler?: string;
    public get handler() {
      return this.getStringAttribute('handler');
    }
    public set handler(value: string ) {
      this._handler = value;
    }
    public resetHandler() {
      this._handler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get handlerInput() {
      return this._handler
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_uri - computed: false, optional: true, required: false
    private _imageUri?: string;
    public get imageUri() {
      return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string ) {
      this._imageUri = value;
    }
    public resetImageUri() {
      this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
      return this._imageUri
    }

    // invoke_arn - computed: true, optional: false, required: false
    public get invokeArn() {
      return this.getStringAttribute('invoke_arn');
    }

    // kms_key_arn - computed: false, optional: true, required: false
    private _kmsKeyArn?: string;
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string ) {
      this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
      this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
      return this._kmsKeyArn
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // layers - computed: false, optional: true, required: false
    private _layers?: string[];
    public get layers() {
      return this.getListAttribute('layers');
    }
    public set layers(value: string[] ) {
      this._layers = value;
    }
    public resetLayers() {
      this._layers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get layersInput() {
      return this._layers
    }

    // memory_size - computed: false, optional: true, required: false
    private _memorySize?: number;
    public get memorySize() {
      return this.getNumberAttribute('memory_size');
    }
    public set memorySize(value: number ) {
      this._memorySize = value;
    }
    public resetMemorySize() {
      this._memorySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInput() {
      return this._memorySize
    }

    // package_type - computed: false, optional: true, required: false
    private _packageType?: string;
    public get packageType() {
      return this.getStringAttribute('package_type');
    }
    public set packageType(value: string ) {
      this._packageType = value;
    }
    public resetPackageType() {
      this._packageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageTypeInput() {
      return this._packageType
    }

    // publish - computed: false, optional: true, required: false
    private _publish?: boolean | cdktf.IResolvable;
    public get publish() {
      return this.getBooleanAttribute('publish');
    }
    public set publish(value: boolean | cdktf.IResolvable ) {
      this._publish = value;
    }
    public resetPublish() {
      this._publish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishInput() {
      return this._publish
    }

    // qualified_arn - computed: true, optional: false, required: false
    public get qualifiedArn() {
      return this.getStringAttribute('qualified_arn');
    }

    // reserved_concurrent_executions - computed: false, optional: true, required: false
    private _reservedConcurrentExecutions?: number;
    public get reservedConcurrentExecutions() {
      return this.getNumberAttribute('reserved_concurrent_executions');
    }
    public set reservedConcurrentExecutions(value: number ) {
      this._reservedConcurrentExecutions = value;
    }
    public resetReservedConcurrentExecutions() {
      this._reservedConcurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservedConcurrentExecutionsInput() {
      return this._reservedConcurrentExecutions
    }

    // role - computed: false, optional: false, required: true
    private _role: string;
    public get role() {
      return this.getStringAttribute('role');
    }
    public set role(value: string) {
      this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
      return this._role
    }

    // runtime - computed: false, optional: true, required: false
    private _runtime?: string;
    public get runtime() {
      return this.getStringAttribute('runtime');
    }
    public set runtime(value: string ) {
      this._runtime = value;
    }
    public resetRuntime() {
      this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
      return this._runtime
    }

    // s3_bucket - computed: false, optional: true, required: false
    private _s3Bucket?: string;
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string ) {
      this._s3Bucket = value;
    }
    public resetS3Bucket() {
      this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
      return this._s3Bucket
    }

    // s3_key - computed: false, optional: true, required: false
    private _s3Key?: string;
    public get s3Key() {
      return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string ) {
      this._s3Key = value;
    }
    public resetS3Key() {
      this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
      return this._s3Key
    }

    // s3_object_version - computed: false, optional: true, required: false
    private _s3ObjectVersion?: string;
    public get s3ObjectVersion() {
      return this.getStringAttribute('s3_object_version');
    }
    public set s3ObjectVersion(value: string ) {
      this._s3ObjectVersion = value;
    }
    public resetS3ObjectVersion() {
      this._s3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectVersionInput() {
      return this._s3ObjectVersion
    }

    // signing_job_arn - computed: true, optional: false, required: false
    public get signingJobArn() {
      return this.getStringAttribute('signing_job_arn');
    }

    // signing_profile_version_arn - computed: true, optional: false, required: false
    public get signingProfileVersionArn() {
      return this.getStringAttribute('signing_profile_version_arn');
    }

    // source_code_hash - computed: true, optional: true, required: false
    private _sourceCodeHash?: string;
    public get sourceCodeHash() {
      return this.getStringAttribute('source_code_hash');
    }
    public set sourceCodeHash(value: string) {
      this._sourceCodeHash = value;
    }
    public resetSourceCodeHash() {
      this._sourceCodeHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCodeHashInput() {
      return this._sourceCodeHash
    }

    // source_code_size - computed: true, optional: false, required: false
    public get sourceCodeSize() {
      return this.getNumberAttribute('source_code_size');
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

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeout - computed: false, optional: true, required: false
    private _timeout?: number;
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number ) {
      this._timeout = value;
    }
    public resetTimeout() {
      this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
      return this._timeout
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // dead_letter_config - computed: false, optional: true, required: false
    private _deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
    public get deadLetterConfig() {
      return this.interpolationForAttribute('dead_letter_config') as any;
    }
    public set deadLetterConfig(value: LambdaFunctionDeadLetterConfig[] ) {
      this._deadLetterConfig = value;
    }
    public resetDeadLetterConfig() {
      this._deadLetterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
      return this._deadLetterConfig
    }

    // environment - computed: false, optional: true, required: false
    private _environment?: LambdaFunctionEnvironment[];
    public get environment() {
      return this.interpolationForAttribute('environment') as any;
    }
    public set environment(value: LambdaFunctionEnvironment[] ) {
      this._environment = value;
    }
    public resetEnvironment() {
      this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
      return this._environment
    }

    // file_system_config - computed: false, optional: true, required: false
    private _fileSystemConfig?: LambdaFunctionFileSystemConfig[];
    public get fileSystemConfig() {
      return this.interpolationForAttribute('file_system_config') as any;
    }
    public set fileSystemConfig(value: LambdaFunctionFileSystemConfig[] ) {
      this._fileSystemConfig = value;
    }
    public resetFileSystemConfig() {
      this._fileSystemConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemConfigInput() {
      return this._fileSystemConfig
    }

    // image_config - computed: false, optional: true, required: false
    private _imageConfig?: LambdaFunctionImageConfig[];
    public get imageConfig() {
      return this.interpolationForAttribute('image_config') as any;
    }
    public set imageConfig(value: LambdaFunctionImageConfig[] ) {
      this._imageConfig = value;
    }
    public resetImageConfig() {
      this._imageConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigInput() {
      return this._imageConfig
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: LambdaFunctionTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: LambdaFunctionTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // tracing_config - computed: false, optional: true, required: false
    private _tracingConfig?: LambdaFunctionTracingConfig[];
    public get tracingConfig() {
      return this.interpolationForAttribute('tracing_config') as any;
    }
    public set tracingConfig(value: LambdaFunctionTracingConfig[] ) {
      this._tracingConfig = value;
    }
    public resetTracingConfig() {
      this._tracingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tracingConfigInput() {
      return this._tracingConfig
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: LambdaFunctionVpcConfig[];
    public get vpcConfig() {
      return this.interpolationForAttribute('vpc_config') as any;
    }
    public set vpcConfig(value: LambdaFunctionVpcConfig[] ) {
      this._vpcConfig = value;
    }
    public resetVpcConfig() {
      this._vpcConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
      return this._vpcConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        architectures: cdktf.listMapper(cdktf.stringToTerraform)(this._architectures),
        code_signing_config_arn: cdktf.stringToTerraform(this._codeSigningConfigArn),
        description: cdktf.stringToTerraform(this._description),
        filename: cdktf.stringToTerraform(this._filename),
        function_name: cdktf.stringToTerraform(this._functionName),
        handler: cdktf.stringToTerraform(this._handler),
        image_uri: cdktf.stringToTerraform(this._imageUri),
        kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
        layers: cdktf.listMapper(cdktf.stringToTerraform)(this._layers),
        memory_size: cdktf.numberToTerraform(this._memorySize),
        package_type: cdktf.stringToTerraform(this._packageType),
        publish: cdktf.booleanToTerraform(this._publish),
        reserved_concurrent_executions: cdktf.numberToTerraform(this._reservedConcurrentExecutions),
        role: cdktf.stringToTerraform(this._role),
        runtime: cdktf.stringToTerraform(this._runtime),
        s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
        s3_key: cdktf.stringToTerraform(this._s3Key),
        s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
        source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeout: cdktf.numberToTerraform(this._timeout),
        dead_letter_config: cdktf.listMapper(lambdaFunctionDeadLetterConfigToTerraform)(this._deadLetterConfig),
        environment: cdktf.listMapper(lambdaFunctionEnvironmentToTerraform)(this._environment),
        file_system_config: cdktf.listMapper(lambdaFunctionFileSystemConfigToTerraform)(this._fileSystemConfig),
        image_config: cdktf.listMapper(lambdaFunctionImageConfigToTerraform)(this._imageConfig),
        timeouts: lambdaFunctionTimeoutsToTerraform(this._timeouts),
        tracing_config: cdktf.listMapper(lambdaFunctionTracingConfigToTerraform)(this._tracingConfig),
        vpc_config: cdktf.listMapper(lambdaFunctionVpcConfigToTerraform)(this._vpcConfig),
      };
    }
  }
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
    readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
  }
  export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
  }

  function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      destination: cdktf.stringToTerraform(struct!.destination),
    }
  }

  export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
  }

  function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      destination: cdktf.stringToTerraform(struct!.destination),
    }
  }

  export interface LambdaFunctionEventInvokeConfigDestinationConfig {
    /**
    * on_failure block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_failure LambdaFunctionEventInvokeConfig#on_failure}
    */
    readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure[];
    /**
    * on_success block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html#on_success LambdaFunctionEventInvokeConfig#on_success}
    */
    readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess[];
  }

  function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      on_failure: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform)(struct!.onFailure),
      on_success: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform)(struct!.onSuccess),
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
    private _functionName: string;
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
    private _maximumEventAgeInSeconds?: number;
    public get maximumEventAgeInSeconds() {
      return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    public set maximumEventAgeInSeconds(value: number ) {
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
    private _maximumRetryAttempts?: number;
    public get maximumRetryAttempts() {
      return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number ) {
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
    private _qualifier?: string;
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string ) {
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
    private _destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
    public get destinationConfig() {
      return this.interpolationForAttribute('destination_config') as any;
    }
    public set destinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig[] ) {
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
        destination_config: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigToTerraform)(this._destinationConfig),
      };
    }
  }
  export interface LambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#compatible_architectures LambdaLayerVersion#compatible_architectures}
    */
    readonly compatibleArchitectures?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#compatible_runtimes LambdaLayerVersion#compatible_runtimes}
    */
    readonly compatibleRuntimes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#description LambdaLayerVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#filename LambdaLayerVersion#filename}
    */
    readonly filename?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#layer_name LambdaLayerVersion#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#license_info LambdaLayerVersion#license_info}
    */
    readonly licenseInfo?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_bucket LambdaLayerVersion#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_key LambdaLayerVersion#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#s3_object_version LambdaLayerVersion#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html#source_code_hash LambdaLayerVersion#source_code_hash}
    */
    readonly sourceCodeHash?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version}
  */
  export class LambdaLayerVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_layer_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_layer_version.html aws_lambda_layer_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaLayerVersionConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaLayerVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_layer_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._compatibleArchitectures = config.compatibleArchitectures;
      this._compatibleRuntimes = config.compatibleRuntimes;
      this._description = config.description;
      this._filename = config.filename;
      this._layerName = config.layerName;
      this._licenseInfo = config.licenseInfo;
      this._s3Bucket = config.s3Bucket;
      this._s3Key = config.s3Key;
      this._s3ObjectVersion = config.s3ObjectVersion;
      this._sourceCodeHash = config.sourceCodeHash;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compatible_architectures - computed: false, optional: true, required: false
    private _compatibleArchitectures?: string[];
    public get compatibleArchitectures() {
      return this.getListAttribute('compatible_architectures');
    }
    public set compatibleArchitectures(value: string[] ) {
      this._compatibleArchitectures = value;
    }
    public resetCompatibleArchitectures() {
      this._compatibleArchitectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleArchitecturesInput() {
      return this._compatibleArchitectures
    }

    // compatible_runtimes - computed: false, optional: true, required: false
    private _compatibleRuntimes?: string[];
    public get compatibleRuntimes() {
      return this.getListAttribute('compatible_runtimes');
    }
    public set compatibleRuntimes(value: string[] ) {
      this._compatibleRuntimes = value;
    }
    public resetCompatibleRuntimes() {
      this._compatibleRuntimes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleRuntimesInput() {
      return this._compatibleRuntimes
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // filename - computed: false, optional: true, required: false
    private _filename?: string;
    public get filename() {
      return this.getStringAttribute('filename');
    }
    public set filename(value: string ) {
      this._filename = value;
    }
    public resetFilename() {
      this._filename = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filenameInput() {
      return this._filename
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // layer_arn - computed: true, optional: false, required: false
    public get layerArn() {
      return this.getStringAttribute('layer_arn');
    }

    // layer_name - computed: false, optional: false, required: true
    private _layerName: string;
    public get layerName() {
      return this.getStringAttribute('layer_name');
    }
    public set layerName(value: string) {
      this._layerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get layerNameInput() {
      return this._layerName
    }

    // license_info - computed: false, optional: true, required: false
    private _licenseInfo?: string;
    public get licenseInfo() {
      return this.getStringAttribute('license_info');
    }
    public set licenseInfo(value: string ) {
      this._licenseInfo = value;
    }
    public resetLicenseInfo() {
      this._licenseInfo = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseInfoInput() {
      return this._licenseInfo
    }

    // s3_bucket - computed: false, optional: true, required: false
    private _s3Bucket?: string;
    public get s3Bucket() {
      return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string ) {
      this._s3Bucket = value;
    }
    public resetS3Bucket() {
      this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
      return this._s3Bucket
    }

    // s3_key - computed: false, optional: true, required: false
    private _s3Key?: string;
    public get s3Key() {
      return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string ) {
      this._s3Key = value;
    }
    public resetS3Key() {
      this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
      return this._s3Key
    }

    // s3_object_version - computed: false, optional: true, required: false
    private _s3ObjectVersion?: string;
    public get s3ObjectVersion() {
      return this.getStringAttribute('s3_object_version');
    }
    public set s3ObjectVersion(value: string ) {
      this._s3ObjectVersion = value;
    }
    public resetS3ObjectVersion() {
      this._s3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectVersionInput() {
      return this._s3ObjectVersion
    }

    // signing_job_arn - computed: true, optional: false, required: false
    public get signingJobArn() {
      return this.getStringAttribute('signing_job_arn');
    }

    // signing_profile_version_arn - computed: true, optional: false, required: false
    public get signingProfileVersionArn() {
      return this.getStringAttribute('signing_profile_version_arn');
    }

    // source_code_hash - computed: true, optional: true, required: false
    private _sourceCodeHash?: string;
    public get sourceCodeHash() {
      return this.getStringAttribute('source_code_hash');
    }
    public set sourceCodeHash(value: string) {
      this._sourceCodeHash = value;
    }
    public resetSourceCodeHash() {
      this._sourceCodeHash = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCodeHashInput() {
      return this._sourceCodeHash
    }

    // source_code_size - computed: true, optional: false, required: false
    public get sourceCodeSize() {
      return this.getNumberAttribute('source_code_size');
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compatible_architectures: cdktf.listMapper(cdktf.stringToTerraform)(this._compatibleArchitectures),
        compatible_runtimes: cdktf.listMapper(cdktf.stringToTerraform)(this._compatibleRuntimes),
        description: cdktf.stringToTerraform(this._description),
        filename: cdktf.stringToTerraform(this._filename),
        layer_name: cdktf.stringToTerraform(this._layerName),
        license_info: cdktf.stringToTerraform(this._licenseInfo),
        s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
        s3_key: cdktf.stringToTerraform(this._s3Key),
        s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
        source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
      };
    }
  }
  export interface LambdaPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#action LambdaPermission#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#event_source_token LambdaPermission#event_source_token}
    */
    readonly eventSourceToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#function_name LambdaPermission#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#principal LambdaPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#qualifier LambdaPermission#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#source_account LambdaPermission#source_account}
    */
    readonly sourceAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#source_arn LambdaPermission#source_arn}
    */
    readonly sourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#statement_id LambdaPermission#statement_id}
    */
    readonly statementId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html#statement_id_prefix LambdaPermission#statement_id_prefix}
    */
    readonly statementIdPrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission}
  */
  export class LambdaPermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaPermissionConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaPermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._eventSourceToken = config.eventSourceToken;
      this._functionName = config.functionName;
      this._principal = config.principal;
      this._qualifier = config.qualifier;
      this._sourceAccount = config.sourceAccount;
      this._sourceArn = config.sourceArn;
      this._statementId = config.statementId;
      this._statementIdPrefix = config.statementIdPrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action: string;
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // event_source_token - computed: false, optional: true, required: false
    private _eventSourceToken?: string;
    public get eventSourceToken() {
      return this.getStringAttribute('event_source_token');
    }
    public set eventSourceToken(value: string ) {
      this._eventSourceToken = value;
    }
    public resetEventSourceToken() {
      this._eventSourceToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceTokenInput() {
      return this._eventSourceToken
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // principal - computed: false, optional: false, required: true
    private _principal: string;
    public get principal() {
      return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
      this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
      return this._principal
    }

    // qualifier - computed: false, optional: true, required: false
    private _qualifier?: string;
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string ) {
      this._qualifier = value;
    }
    public resetQualifier() {
      this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
      return this._qualifier
    }

    // source_account - computed: false, optional: true, required: false
    private _sourceAccount?: string;
    public get sourceAccount() {
      return this.getStringAttribute('source_account');
    }
    public set sourceAccount(value: string ) {
      this._sourceAccount = value;
    }
    public resetSourceAccount() {
      this._sourceAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAccountInput() {
      return this._sourceAccount
    }

    // source_arn - computed: false, optional: true, required: false
    private _sourceArn?: string;
    public get sourceArn() {
      return this.getStringAttribute('source_arn');
    }
    public set sourceArn(value: string ) {
      this._sourceArn = value;
    }
    public resetSourceArn() {
      this._sourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceArnInput() {
      return this._sourceArn
    }

    // statement_id - computed: true, optional: true, required: false
    private _statementId?: string;
    public get statementId() {
      return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
      this._statementId = value;
    }
    public resetStatementId() {
      this._statementId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
      return this._statementId
    }

    // statement_id_prefix - computed: false, optional: true, required: false
    private _statementIdPrefix?: string;
    public get statementIdPrefix() {
      return this.getStringAttribute('statement_id_prefix');
    }
    public set statementIdPrefix(value: string ) {
      this._statementIdPrefix = value;
    }
    public resetStatementIdPrefix() {
      this._statementIdPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdPrefixInput() {
      return this._statementIdPrefix
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        event_source_token: cdktf.stringToTerraform(this._eventSourceToken),
        function_name: cdktf.stringToTerraform(this._functionName),
        principal: cdktf.stringToTerraform(this._principal),
        qualifier: cdktf.stringToTerraform(this._qualifier),
        source_account: cdktf.stringToTerraform(this._sourceAccount),
        source_arn: cdktf.stringToTerraform(this._sourceArn),
        statement_id: cdktf.stringToTerraform(this._statementId),
        statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix),
      };
    }
  }
  export interface LambdaProvisionedConcurrencyConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#function_name LambdaProvisionedConcurrencyConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}
    */
    readonly provisionedConcurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#qualifier LambdaProvisionedConcurrencyConfig#qualifier}
    */
    readonly qualifier: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#timeouts LambdaProvisionedConcurrencyConfig#timeouts}
    */
    readonly timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
  }
  export interface LambdaProvisionedConcurrencyConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#create LambdaProvisionedConcurrencyConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html#update LambdaProvisionedConcurrencyConfig#update}
    */
    readonly update?: string;
  }

  function lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(struct?: LambdaProvisionedConcurrencyConfigTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config}
  */
  export class LambdaProvisionedConcurrencyConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_provisioned_concurrency_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_provisioned_concurrency_config.html aws_lambda_provisioned_concurrency_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaProvisionedConcurrencyConfigConfig
    */
    public constructor(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_provisioned_concurrency_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._functionName = config.functionName;
      this._provisionedConcurrentExecutions = config.provisionedConcurrentExecutions;
      this._qualifier = config.qualifier;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // provisioned_concurrent_executions - computed: false, optional: false, required: true
    private _provisionedConcurrentExecutions: number;
    public get provisionedConcurrentExecutions() {
      return this.getNumberAttribute('provisioned_concurrent_executions');
    }
    public set provisionedConcurrentExecutions(value: number) {
      this._provisionedConcurrentExecutions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedConcurrentExecutionsInput() {
      return this._provisionedConcurrentExecutions
    }

    // qualifier - computed: false, optional: false, required: true
    private _qualifier: string;
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string) {
      this._qualifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
      return this._qualifier
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: LambdaProvisionedConcurrencyConfigTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: LambdaProvisionedConcurrencyConfigTimeouts ) {
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
        function_name: cdktf.stringToTerraform(this._functionName),
        provisioned_concurrent_executions: cdktf.numberToTerraform(this._provisionedConcurrentExecutions),
        qualifier: cdktf.stringToTerraform(this._qualifier),
        timeouts: lambdaProvisionedConcurrencyConfigTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsLambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html#function_name DataAwsLambdaAlias#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html#name DataAwsLambdaAlias#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias}
  */
  export class DataAwsLambdaAlias extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_alias.html aws_lambda_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaAliasConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLambdaAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._functionName = config.functionName;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // function_version - computed: true, optional: false, required: false
    public get functionVersion() {
      return this.getStringAttribute('function_version');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_arn - computed: true, optional: false, required: false
    public get invokeArn() {
      return this.getStringAttribute('invoke_arn');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        function_name: cdktf.stringToTerraform(this._functionName),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsLambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html#arn DataAwsLambdaCodeSigningConfig#arn}
    */
    readonly arn: string;
  }
  export class DataAwsLambdaCodeSigningConfigAllowedPublishers extends cdktf.ComplexComputedList {

    // signing_profile_version_arns - computed: true, optional: false, required: false
    public get signingProfileVersionArns() {
      return this.getListAttribute('signing_profile_version_arns');
    }
  }
  export class DataAwsLambdaCodeSigningConfigPolicies extends cdktf.ComplexComputedList {

    // untrusted_artifact_on_deployment - computed: true, optional: false, required: false
    public get untrustedArtifactOnDeployment() {
      return this.getStringAttribute('untrusted_artifact_on_deployment');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config}
  */
  export class DataAwsLambdaCodeSigningConfig extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_code_signing_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_code_signing_config.html aws_lambda_code_signing_config} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaCodeSigningConfigConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLambdaCodeSigningConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_code_signing_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_publishers - computed: true, optional: false, required: false
    public allowedPublishers(index: string) {
      return new DataAwsLambdaCodeSigningConfigAllowedPublishers(this, 'allowed_publishers', index);
    }

    // arn - computed: false, optional: false, required: true
    private _arn: string;
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // config_id - computed: true, optional: false, required: false
    public get configId() {
      return this.getStringAttribute('config_id');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // policies - computed: true, optional: false, required: false
    public policies(index: string) {
      return new DataAwsLambdaCodeSigningConfigPolicies(this, 'policies', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
  export interface DataAwsLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#function_name DataAwsLambdaFunction#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#qualifier DataAwsLambdaFunction#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html#tags DataAwsLambdaFunction#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {

    // target_arn - computed: true, optional: false, required: false
    public get targetArn() {
      return this.getStringAttribute('target_arn');
    }
  }
  export class DataAwsLambdaFunctionEnvironment extends cdktf.ComplexComputedList {

    // variables - computed: true, optional: false, required: false
    public get variables() {
      return this.interpolationForAttribute('variables') as any;
    }
  }
  export class DataAwsLambdaFunctionFileSystemConfig extends cdktf.ComplexComputedList {

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // local_mount_path - computed: true, optional: false, required: false
    public get localMountPath() {
      return this.getStringAttribute('local_mount_path');
    }
  }
  export class DataAwsLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {

    // mode - computed: true, optional: false, required: false
    public get mode() {
      return this.getStringAttribute('mode');
    }
  }
  export class DataAwsLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function}
  */
  export class DataAwsLambdaFunction extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_function";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_function.html aws_lambda_function} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaFunctionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_function',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._functionName = config.functionName;
      this._qualifier = config.qualifier;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architectures - computed: true, optional: false, required: false
    public get architectures() {
      return this.getListAttribute('architectures');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // code_signing_config_arn - computed: true, optional: false, required: false
    public get codeSigningConfigArn() {
      return this.getStringAttribute('code_signing_config_arn');
    }

    // dead_letter_config - computed: true, optional: false, required: false
    public deadLetterConfig(index: string) {
      return new DataAwsLambdaFunctionDeadLetterConfig(this, 'dead_letter_config', index);
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // environment - computed: true, optional: false, required: false
    public environment(index: string) {
      return new DataAwsLambdaFunctionEnvironment(this, 'environment', index);
    }

    // file_system_config - computed: true, optional: false, required: false
    public fileSystemConfig(index: string) {
      return new DataAwsLambdaFunctionFileSystemConfig(this, 'file_system_config', index);
    }

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // handler - computed: true, optional: false, required: false
    public get handler() {
      return this.getStringAttribute('handler');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_arn - computed: true, optional: false, required: false
    public get invokeArn() {
      return this.getStringAttribute('invoke_arn');
    }

    // kms_key_arn - computed: true, optional: false, required: false
    public get kmsKeyArn() {
      return this.getStringAttribute('kms_key_arn');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // layers - computed: true, optional: false, required: false
    public get layers() {
      return this.getListAttribute('layers');
    }

    // memory_size - computed: true, optional: false, required: false
    public get memorySize() {
      return this.getNumberAttribute('memory_size');
    }

    // qualified_arn - computed: true, optional: false, required: false
    public get qualifiedArn() {
      return this.getStringAttribute('qualified_arn');
    }

    // qualifier - computed: false, optional: true, required: false
    private _qualifier?: string;
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string ) {
      this._qualifier = value;
    }
    public resetQualifier() {
      this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
      return this._qualifier
    }

    // reserved_concurrent_executions - computed: true, optional: false, required: false
    public get reservedConcurrentExecutions() {
      return this.getNumberAttribute('reserved_concurrent_executions');
    }

    // role - computed: true, optional: false, required: false
    public get role() {
      return this.getStringAttribute('role');
    }

    // runtime - computed: true, optional: false, required: false
    public get runtime() {
      return this.getStringAttribute('runtime');
    }

    // signing_job_arn - computed: true, optional: false, required: false
    public get signingJobArn() {
      return this.getStringAttribute('signing_job_arn');
    }

    // signing_profile_version_arn - computed: true, optional: false, required: false
    public get signingProfileVersionArn() {
      return this.getStringAttribute('signing_profile_version_arn');
    }

    // source_code_hash - computed: true, optional: false, required: false
    public get sourceCodeHash() {
      return this.getStringAttribute('source_code_hash');
    }

    // source_code_size - computed: true, optional: false, required: false
    public get sourceCodeSize() {
      return this.getNumberAttribute('source_code_size');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable
    public get tags(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // timeout - computed: true, optional: false, required: false
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }

    // tracing_config - computed: true, optional: false, required: false
    public tracingConfig(index: string) {
      return new DataAwsLambdaFunctionTracingConfig(this, 'tracing_config', index);
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // vpc_config - computed: true, optional: false, required: false
    public vpcConfig(index: string) {
      return new DataAwsLambdaFunctionVpcConfig(this, 'vpc_config', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        function_name: cdktf.stringToTerraform(this._functionName),
        qualifier: cdktf.stringToTerraform(this._qualifier),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsLambdaInvocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#function_name DataAwsLambdaInvocation#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#input DataAwsLambdaInvocation#input}
    */
    readonly input: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html#qualifier DataAwsLambdaInvocation#qualifier}
    */
    readonly qualifier?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation}
  */
  export class DataAwsLambdaInvocation extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_invocation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_invocation.html aws_lambda_invocation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaInvocationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLambdaInvocationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_invocation',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._functionName = config.functionName;
      this._input = config.input;
      this._qualifier = config.qualifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // function_name - computed: false, optional: false, required: true
    private _functionName: string;
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

    // input - computed: false, optional: false, required: true
    private _input: string;
    public get input() {
      return this.getStringAttribute('input');
    }
    public set input(value: string) {
      this._input = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
      return this._input
    }

    // qualifier - computed: false, optional: true, required: false
    private _qualifier?: string;
    public get qualifier() {
      return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string ) {
      this._qualifier = value;
    }
    public resetQualifier() {
      this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
      return this._qualifier
    }

    // result - computed: true, optional: false, required: false
    public get result() {
      return this.getStringAttribute('result');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        function_name: cdktf.stringToTerraform(this._functionName),
        input: cdktf.stringToTerraform(this._input),
        qualifier: cdktf.stringToTerraform(this._qualifier),
      };
    }
  }
  export interface DataAwsLambdaLayerVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_architecture DataAwsLambdaLayerVersion#compatible_architecture}
    */
    readonly compatibleArchitecture?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#compatible_runtime DataAwsLambdaLayerVersion#compatible_runtime}
    */
    readonly compatibleRuntime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#layer_name DataAwsLambdaLayerVersion#layer_name}
    */
    readonly layerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html#version DataAwsLambdaLayerVersion#version}
    */
    readonly version?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version}
  */
  export class DataAwsLambdaLayerVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lambda_layer_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lambda_layer_version.html aws_lambda_layer_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaLayerVersionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLambdaLayerVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lambda_layer_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._compatibleArchitecture = config.compatibleArchitecture;
      this._compatibleRuntime = config.compatibleRuntime;
      this._layerName = config.layerName;
      this._version = config.version;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // compatible_architecture - computed: false, optional: true, required: false
    private _compatibleArchitecture?: string;
    public get compatibleArchitecture() {
      return this.getStringAttribute('compatible_architecture');
    }
    public set compatibleArchitecture(value: string ) {
      this._compatibleArchitecture = value;
    }
    public resetCompatibleArchitecture() {
      this._compatibleArchitecture = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleArchitectureInput() {
      return this._compatibleArchitecture
    }

    // compatible_architectures - computed: true, optional: false, required: false
    public get compatibleArchitectures() {
      return this.getListAttribute('compatible_architectures');
    }

    // compatible_runtime - computed: false, optional: true, required: false
    private _compatibleRuntime?: string;
    public get compatibleRuntime() {
      return this.getStringAttribute('compatible_runtime');
    }
    public set compatibleRuntime(value: string ) {
      this._compatibleRuntime = value;
    }
    public resetCompatibleRuntime() {
      this._compatibleRuntime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compatibleRuntimeInput() {
      return this._compatibleRuntime
    }

    // compatible_runtimes - computed: true, optional: false, required: false
    public get compatibleRuntimes() {
      return this.getListAttribute('compatible_runtimes');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // layer_arn - computed: true, optional: false, required: false
    public get layerArn() {
      return this.getStringAttribute('layer_arn');
    }

    // layer_name - computed: false, optional: false, required: true
    private _layerName: string;
    public get layerName() {
      return this.getStringAttribute('layer_name');
    }
    public set layerName(value: string) {
      this._layerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get layerNameInput() {
      return this._layerName
    }

    // license_info - computed: true, optional: false, required: false
    public get licenseInfo() {
      return this.getStringAttribute('license_info');
    }

    // signing_job_arn - computed: true, optional: false, required: false
    public get signingJobArn() {
      return this.getStringAttribute('signing_job_arn');
    }

    // signing_profile_version_arn - computed: true, optional: false, required: false
    public get signingProfileVersionArn() {
      return this.getStringAttribute('signing_profile_version_arn');
    }

    // source_code_hash - computed: true, optional: false, required: false
    public get sourceCodeHash() {
      return this.getStringAttribute('source_code_hash');
    }

    // source_code_size - computed: true, optional: false, required: false
    public get sourceCodeSize() {
      return this.getNumberAttribute('source_code_size');
    }

    // version - computed: true, optional: true, required: false
    private _version?: number;
    public get version() {
      return this.getNumberAttribute('version');
    }
    public set version(value: number) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        compatible_architecture: cdktf.stringToTerraform(this._compatibleArchitecture),
        compatible_runtime: cdktf.stringToTerraform(this._compatibleRuntime),
        layer_name: cdktf.stringToTerraform(this._layerName),
        version: cdktf.numberToTerraform(this._version),
      };
    }
  }
}
