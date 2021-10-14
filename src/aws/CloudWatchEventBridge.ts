// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch Event Bridge
*/
export namespace CloudWatchEventBridge {
  export interface CloudwatchEventApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#connection_arn CloudwatchEventApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#description CloudwatchEventApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#http_method CloudwatchEventApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#name CloudwatchEventApiDestination#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination}
  */
  export class CloudwatchEventApiDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_api_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventApiDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_api_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionArn = config.connectionArn;
      this._description = config.description;
      this._httpMethod = config.httpMethod;
      this._invocationEndpoint = config.invocationEndpoint;
      this._invocationRateLimitPerSecond = config.invocationRateLimitPerSecond;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // connection_arn - computed: false, optional: false, required: true
    private _connectionArn: string;
    public get connectionArn() {
      return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
      this._connectionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
      return this._connectionArn
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

    // http_method - computed: false, optional: false, required: true
    private _httpMethod: string;
    public get httpMethod() {
      return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
      this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
      return this._httpMethod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invocation_endpoint - computed: false, optional: false, required: true
    private _invocationEndpoint: string;
    public get invocationEndpoint() {
      return this.getStringAttribute('invocation_endpoint');
    }
    public set invocationEndpoint(value: string) {
      this._invocationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationEndpointInput() {
      return this._invocationEndpoint
    }

    // invocation_rate_limit_per_second - computed: false, optional: true, required: false
    private _invocationRateLimitPerSecond?: number;
    public get invocationRateLimitPerSecond() {
      return this.getNumberAttribute('invocation_rate_limit_per_second');
    }
    public set invocationRateLimitPerSecond(value: number ) {
      this._invocationRateLimitPerSecond = value;
    }
    public resetInvocationRateLimitPerSecond() {
      this._invocationRateLimitPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationRateLimitPerSecondInput() {
      return this._invocationRateLimitPerSecond
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
        connection_arn: cdktf.stringToTerraform(this._connectionArn),
        description: cdktf.stringToTerraform(this._description),
        http_method: cdktf.stringToTerraform(this._httpMethod),
        invocation_endpoint: cdktf.stringToTerraform(this._invocationEndpoint),
        invocation_rate_limit_per_second: cdktf.numberToTerraform(this._invocationRateLimitPerSecond),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface CloudwatchEventArchiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#description CloudwatchEventArchive#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_pattern CloudwatchEventArchive#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_source_arn CloudwatchEventArchive#event_source_arn}
    */
    readonly eventSourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#name CloudwatchEventArchive#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#retention_days CloudwatchEventArchive#retention_days}
    */
    readonly retentionDays?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive}
  */
  export class CloudwatchEventArchive extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_archive";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventArchiveConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventArchiveConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_archive',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._eventPattern = config.eventPattern;
      this._eventSourceArn = config.eventSourceArn;
      this._name = config.name;
      this._retentionDays = config.retentionDays;
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

    // event_pattern - computed: false, optional: true, required: false
    private _eventPattern?: string;
    public get eventPattern() {
      return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string ) {
      this._eventPattern = value;
    }
    public resetEventPattern() {
      this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
      return this._eventPattern
    }

    // event_source_arn - computed: false, optional: false, required: true
    private _eventSourceArn: string;
    public get eventSourceArn() {
      return this.getStringAttribute('event_source_arn');
    }
    public set eventSourceArn(value: string) {
      this._eventSourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceArnInput() {
      return this._eventSourceArn
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

    // retention_days - computed: false, optional: true, required: false
    private _retentionDays?: number;
    public get retentionDays() {
      return this.getNumberAttribute('retention_days');
    }
    public set retentionDays(value: number ) {
      this._retentionDays = value;
    }
    public resetRetentionDays() {
      this._retentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionDaysInput() {
      return this._retentionDays
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        event_pattern: cdktf.stringToTerraform(this._eventPattern),
        event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
        name: cdktf.stringToTerraform(this._name),
        retention_days: cdktf.numberToTerraform(this._retentionDays),
      };
    }
  }
  export interface CloudwatchEventBusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#event_source_name CloudwatchEventBus#event_source_name}
    */
    readonly eventSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#name CloudwatchEventBus#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#tags CloudwatchEventBus#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#tags_all CloudwatchEventBus#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html aws_cloudwatch_event_bus}
  */
  export class CloudwatchEventBus extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_bus";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html aws_cloudwatch_event_bus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventBusConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_bus',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eventSourceName = config.eventSourceName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // event_source_name - computed: false, optional: true, required: false
    private _eventSourceName?: string;
    public get eventSourceName() {
      return this.getStringAttribute('event_source_name');
    }
    public set eventSourceName(value: string ) {
      this._eventSourceName = value;
    }
    public resetEventSourceName() {
      this._eventSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceNameInput() {
      return this._eventSourceName
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        event_source_name: cdktf.stringToTerraform(this._eventSourceName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchEventBusPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#event_bus_name CloudwatchEventBusPolicy#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#policy CloudwatchEventBusPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy}
  */
  export class CloudwatchEventBusPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_bus_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventBusPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_bus_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eventBusName = config.eventBusName;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string;
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string ) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_type CloudwatchEventConnection#authorization_type}
    */
    readonly authorizationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#description CloudwatchEventConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#name CloudwatchEventConnection#name}
    */
    readonly name: string;
    /**
    * auth_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#auth_parameters CloudwatchEventConnection#auth_parameters}
    */
    readonly authParameters: CloudwatchEventConnectionAuthParameters[];
  }
  export interface CloudwatchEventConnectionAuthParametersApiKey {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value: string;
  }

  function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKey): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersBasic {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#password CloudwatchEventConnection#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#username CloudwatchEventConnection#username}
    */
    readonly username: string;
  }

  function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasic): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
    /**
    * body block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct!.body),
      header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct!.header),
      query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct!.queryString),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_id CloudwatchEventConnection#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_secret CloudwatchEventConnection#client_secret}
    */
    readonly clientSecret: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
    /**
    * body block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct!.body),
      header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct!.header),
      query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct!.queryString),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#http_method CloudwatchEventConnection#http_method}
    */
    readonly httpMethod: string;
    /**
    * client_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_parameters CloudwatchEventConnection#client_parameters}
    */
    readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters[];
    /**
    * oauth_http_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
    */
    readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters[];
  }

  function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      http_method: cdktf.stringToTerraform(struct!.httpMethod),
      client_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform)(struct!.clientParameters),
      oauth_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform)(struct!.oauthHttpParameters),
    }
  }

  export interface CloudwatchEventConnectionAuthParameters {
    /**
    * api_key block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#api_key CloudwatchEventConnection#api_key}
    */
    readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey[];
    /**
    * basic block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#basic CloudwatchEventConnection#basic}
    */
    readonly basic?: CloudwatchEventConnectionAuthParametersBasic[];
    /**
    * invocation_http_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
    */
    readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters[];
    /**
    * oauth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth CloudwatchEventConnection#oauth}
    */
    readonly oauth?: CloudwatchEventConnectionAuthParametersOauth[];
  }

  function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      api_key: cdktf.listMapper(cloudwatchEventConnectionAuthParametersApiKeyToTerraform)(struct!.apiKey),
      basic: cdktf.listMapper(cloudwatchEventConnectionAuthParametersBasicToTerraform)(struct!.basic),
      invocation_http_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform)(struct!.invocationHttpParameters),
      oauth: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthToTerraform)(struct!.oauth),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
  */
  export class CloudwatchEventConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authorizationType = config.authorizationType;
      this._description = config.description;
      this._name = config.name;
      this._authParameters = config.authParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authorization_type - computed: false, optional: false, required: true
    private _authorizationType: string;
    public get authorizationType() {
      return this.getStringAttribute('authorization_type');
    }
    public set authorizationType(value: string) {
      this._authorizationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationTypeInput() {
      return this._authorizationType
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }

    // auth_parameters - computed: false, optional: false, required: true
    private _authParameters: CloudwatchEventConnectionAuthParameters[];
    public get authParameters() {
      return this.interpolationForAttribute('auth_parameters') as any;
    }
    public set authParameters(value: CloudwatchEventConnectionAuthParameters[]) {
      this._authParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authParametersInput() {
      return this._authParameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authorization_type: cdktf.stringToTerraform(this._authorizationType),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        auth_parameters: cdktf.listMapper(cloudwatchEventConnectionAuthParametersToTerraform)(this._authParameters),
      };
    }
  }
  export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#action CloudwatchEventPermission#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#event_bus_name CloudwatchEventPermission#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#principal CloudwatchEventPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#statement_id CloudwatchEventPermission#statement_id}
    */
    readonly statementId: string;
    /**
    * condition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#condition CloudwatchEventPermission#condition}
    */
    readonly condition?: CloudwatchEventPermissionCondition[];
  }
  export interface CloudwatchEventPermissionCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#key CloudwatchEventPermission#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#type CloudwatchEventPermission#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#value CloudwatchEventPermission#value}
    */
    readonly value: string;
  }

  function cloudwatchEventPermissionConditionToTerraform(struct?: CloudwatchEventPermissionCondition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}
  */
  export class CloudwatchEventPermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventPermissionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._eventBusName = config.eventBusName;
      this._principal = config.principal;
      this._statementId = config.statementId;
      this._condition = config.condition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: true, required: false
    private _action?: string;
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string ) {
      this._action = value;
    }
    public resetAction() {
      this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string;
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string ) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
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

    // statement_id - computed: false, optional: false, required: true
    private _statementId: string;
    public get statementId() {
      return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
      this._statementId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
      return this._statementId
    }

    // condition - computed: false, optional: true, required: false
    private _condition?: CloudwatchEventPermissionCondition[];
    public get condition() {
      return this.interpolationForAttribute('condition') as any;
    }
    public set condition(value: CloudwatchEventPermissionCondition[] ) {
      this._condition = value;
    }
    public resetCondition() {
      this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
      return this._condition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        principal: cdktf.stringToTerraform(this._principal),
        statement_id: cdktf.stringToTerraform(this._statementId),
        condition: cdktf.listMapper(cloudwatchEventPermissionConditionToTerraform)(this._condition),
      };
    }
  }
  export interface CloudwatchEventRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#description CloudwatchEventRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_bus_name CloudwatchEventRule#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_pattern CloudwatchEventRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#is_enabled CloudwatchEventRule#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name CloudwatchEventRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name_prefix CloudwatchEventRule#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#role_arn CloudwatchEventRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#schedule_expression CloudwatchEventRule#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags CloudwatchEventRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags_all CloudwatchEventRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule}
  */
  export class CloudwatchEventRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventRuleConfig = {}
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventRuleConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._eventBusName = config.eventBusName;
      this._eventPattern = config.eventPattern;
      this._isEnabled = config.isEnabled;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._roleArn = config.roleArn;
      this._scheduleExpression = config.scheduleExpression;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
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

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string;
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string ) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // event_pattern - computed: false, optional: true, required: false
    private _eventPattern?: string;
    public get eventPattern() {
      return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string ) {
      this._eventPattern = value;
    }
    public resetEventPattern() {
      this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
      return this._eventPattern
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_enabled - computed: false, optional: true, required: false
    private _isEnabled?: boolean | cdktf.IResolvable;
    public get isEnabled() {
      return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktf.IResolvable ) {
      this._isEnabled = value;
    }
    public resetIsEnabled() {
      this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
      return this._isEnabled
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

    // schedule_expression - computed: false, optional: true, required: false
    private _scheduleExpression?: string;
    public get scheduleExpression() {
      return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string ) {
      this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
      this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
      return this._scheduleExpression
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        event_pattern: cdktf.stringToTerraform(this._eventPattern),
        is_enabled: cdktf.booleanToTerraform(this._isEnabled),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#event_bus_name CloudwatchEventTarget#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input CloudwatchEventTarget#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_path CloudwatchEventTarget#input_path}
    */
    readonly inputPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#role_arn CloudwatchEventTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#rule CloudwatchEventTarget#rule}
    */
    readonly rule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#target_id CloudwatchEventTarget#target_id}
    */
    readonly targetId?: string;
    /**
    * batch_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#batch_target CloudwatchEventTarget#batch_target}
    */
    readonly batchTarget?: CloudwatchEventTargetBatchTarget[];
    /**
    * dead_letter_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#dead_letter_config CloudwatchEventTarget#dead_letter_config}
    */
    readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig[];
    /**
    * ecs_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#ecs_target CloudwatchEventTarget#ecs_target}
    */
    readonly ecsTarget?: CloudwatchEventTargetEcsTarget[];
    /**
    * http_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#http_target CloudwatchEventTarget#http_target}
    */
    readonly httpTarget?: CloudwatchEventTargetHttpTarget[];
    /**
    * input_transformer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_transformer CloudwatchEventTarget#input_transformer}
    */
    readonly inputTransformer?: CloudwatchEventTargetInputTransformer[];
    /**
    * kinesis_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#kinesis_target CloudwatchEventTarget#kinesis_target}
    */
    readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
    /**
    * redshift_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#redshift_target CloudwatchEventTarget#redshift_target}
    */
    readonly redshiftTarget?: CloudwatchEventTargetRedshiftTarget[];
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#retry_policy CloudwatchEventTarget#retry_policy}
    */
    readonly retryPolicy?: CloudwatchEventTargetRetryPolicy[];
    /**
    * run_command_targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#run_command_targets CloudwatchEventTarget#run_command_targets}
    */
    readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
    /**
    * sqs_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sqs_target CloudwatchEventTarget#sqs_target}
    */
    readonly sqsTarget?: CloudwatchEventTargetSqsTarget[];
  }
  export interface CloudwatchEventTargetBatchTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#array_size CloudwatchEventTarget#array_size}
    */
    readonly arraySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_attempts CloudwatchEventTarget#job_attempts}
    */
    readonly jobAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_definition CloudwatchEventTarget#job_definition}
    */
    readonly jobDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_name CloudwatchEventTarget#job_name}
    */
    readonly jobName: string;
  }

  function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      array_size: cdktf.numberToTerraform(struct!.arraySize),
      job_attempts: cdktf.numberToTerraform(struct!.jobAttempts),
      job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
      job_name: cdktf.stringToTerraform(struct!.jobName),
    }
  }

  export interface CloudwatchEventTargetDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn?: string;
  }

  function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
    }
  }

  export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#assign_public_ip CloudwatchEventTarget#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#security_groups CloudwatchEventTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#subnets CloudwatchEventTarget#subnets}
    */
    readonly subnets: string[];
  }

  function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    }
  }

  export interface CloudwatchEventTargetEcsTargetPlacementConstraint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#expression CloudwatchEventTarget#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#type CloudwatchEventTarget#type}
    */
    readonly type: string;
  }

  function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CloudwatchEventTargetEcsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_execute_command CloudwatchEventTarget#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#group CloudwatchEventTarget#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#launch_type CloudwatchEventTarget#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#platform_version CloudwatchEventTarget#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#propagate_tags CloudwatchEventTarget#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#tags CloudwatchEventTarget#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_count CloudwatchEventTarget#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_definition_arn CloudwatchEventTarget#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * network_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#network_configuration CloudwatchEventTarget#network_configuration}
    */
    readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration[];
    /**
    * placement_constraint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#placement_constraint CloudwatchEventTarget#placement_constraint}
    */
    readonly placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[];
  }

  function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enable_ecs_managed_tags: cdktf.booleanToTerraform(struct!.enableEcsManagedTags),
      enable_execute_command: cdktf.booleanToTerraform(struct!.enableExecuteCommand),
      group: cdktf.stringToTerraform(struct!.group),
      launch_type: cdktf.stringToTerraform(struct!.launchType),
      platform_version: cdktf.stringToTerraform(struct!.platformVersion),
      propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      task_count: cdktf.numberToTerraform(struct!.taskCount),
      task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
      network_configuration: cdktf.listMapper(cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform)(struct!.networkConfiguration),
      placement_constraint: cdktf.listMapper(cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform)(struct!.placementConstraint),
    }
  }

  export interface CloudwatchEventTargetHttpTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#header_parameters CloudwatchEventTarget#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#path_parameter_values CloudwatchEventTarget#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#query_string_parameters CloudwatchEventTarget#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string } | cdktf.IResolvable;
  }

  function cloudwatchEventTargetHttpTargetToTerraform(struct?: CloudwatchEventTargetHttpTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      header_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headerParameters),
      path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pathParameterValues),
      query_string_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.queryStringParameters),
    }
  }

  export interface CloudwatchEventTargetInputTransformer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_paths CloudwatchEventTarget#input_paths}
    */
    readonly inputPaths?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_template CloudwatchEventTarget#input_template}
    */
    readonly inputTemplate: string;
  }

  function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.inputPaths),
      input_template: cdktf.stringToTerraform(struct!.inputTemplate),
    }
  }

  export interface CloudwatchEventTargetKinesisTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#partition_key_path CloudwatchEventTarget#partition_key_path}
    */
    readonly partitionKeyPath?: string;
  }

  function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      partition_key_path: cdktf.stringToTerraform(struct!.partitionKeyPath),
    }
  }

  export interface CloudwatchEventTargetRedshiftTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#database CloudwatchEventTarget#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#db_user CloudwatchEventTarget#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sql CloudwatchEventTarget#sql}
    */
    readonly sql?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#statement_name CloudwatchEventTarget#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#with_event CloudwatchEventTarget#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
  }

  function cloudwatchEventTargetRedshiftTargetToTerraform(struct?: CloudwatchEventTargetRedshiftTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      database: cdktf.stringToTerraform(struct!.database),
      db_user: cdktf.stringToTerraform(struct!.dbUser),
      secrets_manager_arn: cdktf.stringToTerraform(struct!.secretsManagerArn),
      sql: cdktf.stringToTerraform(struct!.sql),
      statement_name: cdktf.stringToTerraform(struct!.statementName),
      with_event: cdktf.booleanToTerraform(struct!.withEvent),
    }
  }

  export interface CloudwatchEventTargetRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
  }

  function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    }
  }

  export interface CloudwatchEventTargetRunCommandTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#key CloudwatchEventTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#values CloudwatchEventTarget#values}
    */
    readonly values: string[];
  }

  function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface CloudwatchEventTargetSqsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#message_group_id CloudwatchEventTarget#message_group_id}
    */
    readonly messageGroupId?: string;
  }

  function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}
  */
  export class CloudwatchEventTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventTargetConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._eventBusName = config.eventBusName;
      this._input = config.input;
      this._inputPath = config.inputPath;
      this._roleArn = config.roleArn;
      this._rule = config.rule;
      this._targetId = config.targetId;
      this._batchTarget = config.batchTarget;
      this._deadLetterConfig = config.deadLetterConfig;
      this._ecsTarget = config.ecsTarget;
      this._httpTarget = config.httpTarget;
      this._inputTransformer = config.inputTransformer;
      this._kinesisTarget = config.kinesisTarget;
      this._redshiftTarget = config.redshiftTarget;
      this._retryPolicy = config.retryPolicy;
      this._runCommandTargets = config.runCommandTargets;
      this._sqsTarget = config.sqsTarget;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string;
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string ) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input - computed: false, optional: true, required: false
    private _input?: string;
    public get input() {
      return this.getStringAttribute('input');
    }
    public set input(value: string ) {
      this._input = value;
    }
    public resetInput() {
      this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
      return this._input
    }

    // input_path - computed: false, optional: true, required: false
    private _inputPath?: string;
    public get inputPath() {
      return this.getStringAttribute('input_path');
    }
    public set inputPath(value: string ) {
      this._inputPath = value;
    }
    public resetInputPath() {
      this._inputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPathInput() {
      return this._inputPath
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

    // rule - computed: false, optional: false, required: true
    private _rule: string;
    public get rule() {
      return this.getStringAttribute('rule');
    }
    public set rule(value: string) {
      this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }

    // target_id - computed: true, optional: true, required: false
    private _targetId?: string;
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    public resetTargetId() {
      this._targetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // batch_target - computed: false, optional: true, required: false
    private _batchTarget?: CloudwatchEventTargetBatchTarget[];
    public get batchTarget() {
      return this.interpolationForAttribute('batch_target') as any;
    }
    public set batchTarget(value: CloudwatchEventTargetBatchTarget[] ) {
      this._batchTarget = value;
    }
    public resetBatchTarget() {
      this._batchTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchTargetInput() {
      return this._batchTarget
    }

    // dead_letter_config - computed: false, optional: true, required: false
    private _deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig[];
    public get deadLetterConfig() {
      return this.interpolationForAttribute('dead_letter_config') as any;
    }
    public set deadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig[] ) {
      this._deadLetterConfig = value;
    }
    public resetDeadLetterConfig() {
      this._deadLetterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
      return this._deadLetterConfig
    }

    // ecs_target - computed: false, optional: true, required: false
    private _ecsTarget?: CloudwatchEventTargetEcsTarget[];
    public get ecsTarget() {
      return this.interpolationForAttribute('ecs_target') as any;
    }
    public set ecsTarget(value: CloudwatchEventTargetEcsTarget[] ) {
      this._ecsTarget = value;
    }
    public resetEcsTarget() {
      this._ecsTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsTargetInput() {
      return this._ecsTarget
    }

    // http_target - computed: false, optional: true, required: false
    private _httpTarget?: CloudwatchEventTargetHttpTarget[];
    public get httpTarget() {
      return this.interpolationForAttribute('http_target') as any;
    }
    public set httpTarget(value: CloudwatchEventTargetHttpTarget[] ) {
      this._httpTarget = value;
    }
    public resetHttpTarget() {
      this._httpTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTargetInput() {
      return this._httpTarget
    }

    // input_transformer - computed: false, optional: true, required: false
    private _inputTransformer?: CloudwatchEventTargetInputTransformer[];
    public get inputTransformer() {
      return this.interpolationForAttribute('input_transformer') as any;
    }
    public set inputTransformer(value: CloudwatchEventTargetInputTransformer[] ) {
      this._inputTransformer = value;
    }
    public resetInputTransformer() {
      this._inputTransformer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTransformerInput() {
      return this._inputTransformer
    }

    // kinesis_target - computed: false, optional: true, required: false
    private _kinesisTarget?: CloudwatchEventTargetKinesisTarget[];
    public get kinesisTarget() {
      return this.interpolationForAttribute('kinesis_target') as any;
    }
    public set kinesisTarget(value: CloudwatchEventTargetKinesisTarget[] ) {
      this._kinesisTarget = value;
    }
    public resetKinesisTarget() {
      this._kinesisTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisTargetInput() {
      return this._kinesisTarget
    }

    // redshift_target - computed: false, optional: true, required: false
    private _redshiftTarget?: CloudwatchEventTargetRedshiftTarget[];
    public get redshiftTarget() {
      return this.interpolationForAttribute('redshift_target') as any;
    }
    public set redshiftTarget(value: CloudwatchEventTargetRedshiftTarget[] ) {
      this._redshiftTarget = value;
    }
    public resetRedshiftTarget() {
      this._redshiftTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftTargetInput() {
      return this._redshiftTarget
    }

    // retry_policy - computed: false, optional: true, required: false
    private _retryPolicy?: CloudwatchEventTargetRetryPolicy[];
    public get retryPolicy() {
      return this.interpolationForAttribute('retry_policy') as any;
    }
    public set retryPolicy(value: CloudwatchEventTargetRetryPolicy[] ) {
      this._retryPolicy = value;
    }
    public resetRetryPolicy() {
      this._retryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
      return this._retryPolicy
    }

    // run_command_targets - computed: false, optional: true, required: false
    private _runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
    public get runCommandTargets() {
      return this.interpolationForAttribute('run_command_targets') as any;
    }
    public set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] ) {
      this._runCommandTargets = value;
    }
    public resetRunCommandTargets() {
      this._runCommandTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runCommandTargetsInput() {
      return this._runCommandTargets
    }

    // sqs_target - computed: false, optional: true, required: false
    private _sqsTarget?: CloudwatchEventTargetSqsTarget[];
    public get sqsTarget() {
      return this.interpolationForAttribute('sqs_target') as any;
    }
    public set sqsTarget(value: CloudwatchEventTargetSqsTarget[] ) {
      this._sqsTarget = value;
    }
    public resetSqsTarget() {
      this._sqsTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsTargetInput() {
      return this._sqsTarget
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        input: cdktf.stringToTerraform(this._input),
        input_path: cdktf.stringToTerraform(this._inputPath),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        rule: cdktf.stringToTerraform(this._rule),
        target_id: cdktf.stringToTerraform(this._targetId),
        batch_target: cdktf.listMapper(cloudwatchEventTargetBatchTargetToTerraform)(this._batchTarget),
        dead_letter_config: cdktf.listMapper(cloudwatchEventTargetDeadLetterConfigToTerraform)(this._deadLetterConfig),
        ecs_target: cdktf.listMapper(cloudwatchEventTargetEcsTargetToTerraform)(this._ecsTarget),
        http_target: cdktf.listMapper(cloudwatchEventTargetHttpTargetToTerraform)(this._httpTarget),
        input_transformer: cdktf.listMapper(cloudwatchEventTargetInputTransformerToTerraform)(this._inputTransformer),
        kinesis_target: cdktf.listMapper(cloudwatchEventTargetKinesisTargetToTerraform)(this._kinesisTarget),
        redshift_target: cdktf.listMapper(cloudwatchEventTargetRedshiftTargetToTerraform)(this._redshiftTarget),
        retry_policy: cdktf.listMapper(cloudwatchEventTargetRetryPolicyToTerraform)(this._retryPolicy),
        run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
        sqs_target: cdktf.listMapper(cloudwatchEventTargetSqsTargetToTerraform)(this._sqsTarget),
      };
    }
  }
  export interface DataAwsCloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html#name DataAwsCloudwatchEventConnection#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
  */
  export class DataAwsCloudwatchEventConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchEventConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_connection',
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

    // authorization_type - computed: true, optional: false, required: false
    public get authorizationType() {
      return this.getStringAttribute('authorization_type');
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
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
  export interface DataAwsCloudwatchEventSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html#name_prefix DataAwsCloudwatchEventSource#name_prefix}
    */
    readonly namePrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source}
  */
  export class DataAwsCloudwatchEventSource extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_source";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventSourceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchEventSourceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_source',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._namePrefix = config.namePrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
      return this.getStringAttribute('created_by');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
      };
    }
  }
}
