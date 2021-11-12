// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#method_path ApiGatewayMethodSettings#method_path}
  */
  readonly methodPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#rest_api_id ApiGatewayMethodSettings#rest_api_id}
  */
  readonly restApiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#stage_name ApiGatewayMethodSettings#stage_name}
  */
  readonly stageName: string;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#settings ApiGatewayMethodSettings#settings}
  */
  readonly settings: ApiGatewayMethodSettingsSettings;
}
export interface ApiGatewayMethodSettingsSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
  */
  readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
  */
  readonly cacheTtlInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#caching_enabled ApiGatewayMethodSettings#caching_enabled}
  */
  readonly cachingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
  */
  readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#logging_level ApiGatewayMethodSettings#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
  */
  readonly metricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
  */
  readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
  */
  readonly throttlingBurstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
  */
  readonly throttlingRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
  */
  readonly unauthorizedCacheControlHeaderStrategy?: string;
}

export function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_data_encrypted: cdktf.booleanToTerraform(struct!.cacheDataEncrypted),
    cache_ttl_in_seconds: cdktf.numberToTerraform(struct!.cacheTtlInSeconds),
    caching_enabled: cdktf.booleanToTerraform(struct!.cachingEnabled),
    data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
    require_authorization_for_cache_control: cdktf.booleanToTerraform(struct!.requireAuthorizationForCacheControl),
    throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
    throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
    unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct!.unauthorizedCacheControlHeaderStrategy),
  }
}

export class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cache_data_encrypted - computed: true, optional: true, required: false
  private _cacheDataEncrypted?: boolean | cdktf.IResolvable | undefined; 
  public get cacheDataEncrypted() {
    return this.getBooleanAttribute('cache_data_encrypted') as any;
  }
  public set cacheDataEncrypted(value: boolean | cdktf.IResolvable | undefined) {
    this._cacheDataEncrypted = value;
  }
  public resetCacheDataEncrypted() {
    this._cacheDataEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDataEncryptedInput() {
    return this._cacheDataEncrypted
  }

  // cache_ttl_in_seconds - computed: true, optional: true, required: false
  private _cacheTtlInSeconds?: number | undefined; 
  public get cacheTtlInSeconds() {
    return this.getNumberAttribute('cache_ttl_in_seconds');
  }
  public set cacheTtlInSeconds(value: number | undefined) {
    this._cacheTtlInSeconds = value;
  }
  public resetCacheTtlInSeconds() {
    this._cacheTtlInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInSecondsInput() {
    return this._cacheTtlInSeconds
  }

  // caching_enabled - computed: true, optional: true, required: false
  private _cachingEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cachingEnabled() {
    return this.getBooleanAttribute('caching_enabled') as any;
  }
  public set cachingEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cachingEnabled = value;
  }
  public resetCachingEnabled() {
    this._cachingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingEnabledInput() {
    return this._cachingEnabled
  }

  // data_trace_enabled - computed: true, optional: true, required: false
  private _dataTraceEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get dataTraceEnabled() {
    return this.getBooleanAttribute('data_trace_enabled') as any;
  }
  public set dataTraceEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._dataTraceEnabled = value;
  }
  public resetDataTraceEnabled() {
    this._dataTraceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTraceEnabledInput() {
    return this._dataTraceEnabled
  }

  // logging_level - computed: true, optional: true, required: false
  private _loggingLevel?: string | undefined; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string | undefined) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel
  }

  // metrics_enabled - computed: true, optional: true, required: false
  private _metricsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled') as any;
  }
  public set metricsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._metricsEnabled = value;
  }
  public resetMetricsEnabled() {
    this._metricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsEnabledInput() {
    return this._metricsEnabled
  }

  // require_authorization_for_cache_control - computed: true, optional: true, required: false
  private _requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable | undefined; 
  public get requireAuthorizationForCacheControl() {
    return this.getBooleanAttribute('require_authorization_for_cache_control') as any;
  }
  public set requireAuthorizationForCacheControl(value: boolean | cdktf.IResolvable | undefined) {
    this._requireAuthorizationForCacheControl = value;
  }
  public resetRequireAuthorizationForCacheControl() {
    this._requireAuthorizationForCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthorizationForCacheControlInput() {
    return this._requireAuthorizationForCacheControl
  }

  // throttling_burst_limit - computed: false, optional: true, required: false
  private _throttlingBurstLimit?: number | undefined; 
  public get throttlingBurstLimit() {
    return this.getNumberAttribute('throttling_burst_limit');
  }
  public set throttlingBurstLimit(value: number | undefined) {
    this._throttlingBurstLimit = value;
  }
  public resetThrottlingBurstLimit() {
    this._throttlingBurstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingBurstLimitInput() {
    return this._throttlingBurstLimit
  }

  // throttling_rate_limit - computed: false, optional: true, required: false
  private _throttlingRateLimit?: number | undefined; 
  public get throttlingRateLimit() {
    return this.getNumberAttribute('throttling_rate_limit');
  }
  public set throttlingRateLimit(value: number | undefined) {
    this._throttlingRateLimit = value;
  }
  public resetThrottlingRateLimit() {
    this._throttlingRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttlingRateLimitInput() {
    return this._throttlingRateLimit
  }

  // unauthorized_cache_control_header_strategy - computed: true, optional: true, required: false
  private _unauthorizedCacheControlHeaderStrategy?: string | undefined; 
  public get unauthorizedCacheControlHeaderStrategy() {
    return this.getStringAttribute('unauthorized_cache_control_header_strategy');
  }
  public set unauthorizedCacheControlHeaderStrategy(value: string | undefined) {
    this._unauthorizedCacheControlHeaderStrategy = value;
  }
  public resetUnauthorizedCacheControlHeaderStrategy() {
    this._unauthorizedCacheControlHeaderStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedCacheControlHeaderStrategyInput() {
    return this._unauthorizedCacheControlHeaderStrategy
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}
*/
export class ApiGatewayMethodSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_method_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayMethodSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_method_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._methodPath = config.methodPath;
    this._restApiId = config.restApiId;
    this._stageName = config.stageName;
    this._settings = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // method_path - computed: false, optional: false, required: true
  private _methodPath?: string; 
  public get methodPath() {
    return this.getStringAttribute('method_path');
  }
  public set methodPath(value: string) {
    this._methodPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPathInput() {
    return this._methodPath
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId?: string; 
  public get restApiId() {
    return this.getStringAttribute('rest_api_id');
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiIdInput() {
    return this._restApiId
  }

  // stage_name - computed: false, optional: false, required: true
  private _stageName?: string; 
  public get stageName() {
    return this.getStringAttribute('stage_name');
  }
  public set stageName(value: string) {
    this._stageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNameInput() {
    return this._stageName
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: ApiGatewayMethodSettingsSettings; 
  private __settingsOutput = new ApiGatewayMethodSettingsSettingsOutputReference(this as any, "settings", true);
  public get settings() {
    return this.__settingsOutput;
  }
  public putSettings(value: ApiGatewayMethodSettingsSettings) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      method_path: cdktf.stringToTerraform(this._methodPath),
      rest_api_id: cdktf.stringToTerraform(this._restApiId),
      stage_name: cdktf.stringToTerraform(this._stageName),
      settings: apiGatewayMethodSettingsSettingsToTerraform(this._settings),
    };
  }
}
