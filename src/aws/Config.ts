// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export namespace Config {
  export interface ConfigAggregateAuthorizationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#account_id ConfigAggregateAuthorization#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#region ConfigAggregateAuthorization#region}
    */
    readonly region: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags ConfigAggregateAuthorization#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html#tags_all ConfigAggregateAuthorization#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization}
  */
  export class ConfigAggregateAuthorization extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_aggregate_authorization";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_aggregate_authorization.html aws_config_aggregate_authorization} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigAggregateAuthorizationConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigAggregateAuthorizationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_aggregate_authorization',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._region = config.region;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId: string;
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // region - computed: false, optional: false, required: true
    private _region: string;
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string) {
      this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
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
        account_id: cdktf.stringToTerraform(this._accountId),
        region: cdktf.stringToTerraform(this._region),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ConfigConfigRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#description ConfigConfigRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#input_parameters ConfigConfigRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#name ConfigConfigRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags ConfigConfigRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tags_all ConfigConfigRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * scope block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#scope ConfigConfigRule#scope}
    */
    readonly scope?: ConfigConfigRuleScope[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source ConfigConfigRule#source}
    */
    readonly source: ConfigConfigRuleSource[];
  }
  export interface ConfigConfigRuleScope {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_id ConfigConfigRule#compliance_resource_id}
    */
    readonly complianceResourceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#compliance_resource_types ConfigConfigRule#compliance_resource_types}
    */
    readonly complianceResourceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_key ConfigConfigRule#tag_key}
    */
    readonly tagKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#tag_value ConfigConfigRule#tag_value}
    */
    readonly tagValue?: string;
  }

  function configConfigRuleScopeToTerraform(struct?: ConfigConfigRuleScope): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      compliance_resource_id: cdktf.stringToTerraform(struct!.complianceResourceId),
      compliance_resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.complianceResourceTypes),
      tag_key: cdktf.stringToTerraform(struct!.tagKey),
      tag_value: cdktf.stringToTerraform(struct!.tagValue),
    }
  }

  export interface ConfigConfigRuleSourceSourceDetail {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#event_source ConfigConfigRule#event_source}
    */
    readonly eventSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#maximum_execution_frequency ConfigConfigRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#message_type ConfigConfigRule#message_type}
    */
    readonly messageType?: string;
  }

  function configConfigRuleSourceSourceDetailToTerraform(struct?: ConfigConfigRuleSourceSourceDetail): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      event_source: cdktf.stringToTerraform(struct!.eventSource),
      maximum_execution_frequency: cdktf.stringToTerraform(struct!.maximumExecutionFrequency),
      message_type: cdktf.stringToTerraform(struct!.messageType),
    }
  }

  export interface ConfigConfigRuleSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#owner ConfigConfigRule#owner}
    */
    readonly owner: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_identifier ConfigConfigRule#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * source_detail block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html#source_detail ConfigConfigRule#source_detail}
    */
    readonly sourceDetail?: ConfigConfigRuleSourceSourceDetail[];
  }

  function configConfigRuleSourceToTerraform(struct?: ConfigConfigRuleSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      owner: cdktf.stringToTerraform(struct!.owner),
      source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
      source_detail: cdktf.listMapper(configConfigRuleSourceSourceDetailToTerraform)(struct!.sourceDetail),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule}
  */
  export class ConfigConfigRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_config_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_config_rule.html aws_config_config_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_config_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._inputParameters = config.inputParameters;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._scope = config.scope;
      this._source = config.source;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string;
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string ) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string;
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string ) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
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

    // rule_id - computed: true, optional: false, required: false
    public get ruleId() {
      return this.getStringAttribute('rule_id');
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

    // scope - computed: false, optional: true, required: false
    private _scope?: ConfigConfigRuleScope[];
    public get scope() {
      return this.interpolationForAttribute('scope') as any;
    }
    public set scope(value: ConfigConfigRuleScope[] ) {
      this._scope = value;
    }
    public resetScope() {
      this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
      return this._scope
    }

    // source - computed: false, optional: false, required: true
    private _source: ConfigConfigRuleSource[];
    public get source() {
      return this.interpolationForAttribute('source') as any;
    }
    public set source(value: ConfigConfigRuleSource[]) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        scope: cdktf.listMapper(configConfigRuleScopeToTerraform)(this._scope),
        source: cdktf.listMapper(configConfigRuleSourceToTerraform)(this._source),
      };
    }
  }
  export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * account_aggregation_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
    */
    readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
    /**
    * organization_aggregation_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
    */
    readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
  }
  export interface ConfigConfigurationAggregatorAccountAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
    */
    readonly accountIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
  }

  function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
      all_regions: cdktf.booleanToTerraform(struct!.allRegions),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    }
  }

  export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
    */
    readonly regions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
    */
    readonly roleArn: string;
  }

  function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      all_regions: cdktf.booleanToTerraform(struct!.allRegions),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
  */
  export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_aggregator";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationAggregatorConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_aggregator',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._accountAggregationSource = config.accountAggregationSource;
      this._organizationAggregationSource = config.organizationAggregationSource;
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

    // account_aggregation_source - computed: false, optional: true, required: false
    private _accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource[];
    public get accountAggregationSource() {
      return this.interpolationForAttribute('account_aggregation_source') as any;
    }
    public set accountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource[] ) {
      this._accountAggregationSource = value;
    }
    public resetAccountAggregationSource() {
      this._accountAggregationSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountAggregationSourceInput() {
      return this._accountAggregationSource
    }

    // organization_aggregation_source - computed: false, optional: true, required: false
    private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource[];
    public get organizationAggregationSource() {
      return this.interpolationForAttribute('organization_aggregation_source') as any;
    }
    public set organizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource[] ) {
      this._organizationAggregationSource = value;
    }
    public resetOrganizationAggregationSource() {
      this._organizationAggregationSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get organizationAggregationSourceInput() {
      return this._organizationAggregationSource
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        account_aggregation_source: cdktf.listMapper(configConfigurationAggregatorAccountAggregationSourceToTerraform)(this._accountAggregationSource),
        organization_aggregation_source: cdktf.listMapper(configConfigurationAggregatorOrganizationAggregationSourceToTerraform)(this._organizationAggregationSource),
      };
    }
  }
  export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#name ConfigConfigurationRecorder#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#role_arn ConfigConfigurationRecorder#role_arn}
    */
    readonly roleArn: string;
    /**
    * recording_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#recording_group ConfigConfigurationRecorder#recording_group}
    */
    readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
  }
  export interface ConfigConfigurationRecorderRecordingGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#all_supported ConfigConfigurationRecorder#all_supported}
    */
    readonly allSupported?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
    */
    readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#resource_types ConfigConfigurationRecorder#resource_types}
    */
    readonly resourceTypes?: string[];
  }

  function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      all_supported: cdktf.booleanToTerraform(struct!.allSupported),
      include_global_resource_types: cdktf.booleanToTerraform(struct!.includeGlobalResourceTypes),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}
  */
  export class ConfigConfigurationRecorder extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_recorder";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_recorder',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._roleArn = config.roleArn;
      this._recordingGroup = config.recordingGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string ) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn: string;
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // recording_group - computed: false, optional: true, required: false
    private _recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
    public get recordingGroup() {
      return this.interpolationForAttribute('recording_group') as any;
    }
    public set recordingGroup(value: ConfigConfigurationRecorderRecordingGroup[] ) {
      this._recordingGroup = value;
    }
    public resetRecordingGroup() {
      this._recordingGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordingGroupInput() {
      return this._recordingGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        recording_group: cdktf.listMapper(configConfigurationRecorderRecordingGroupToTerraform)(this._recordingGroup),
      };
    }
  }
  export interface ConfigConfigurationRecorderStatusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#is_enabled ConfigConfigurationRecorderStatus#is_enabled}
    */
    readonly isEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html#name ConfigConfigurationRecorderStatus#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status}
  */
  export class ConfigConfigurationRecorderStatus extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_configuration_recorder_status";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder_status.html aws_config_configuration_recorder_status} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConfigurationRecorderStatusConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderStatusConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_configuration_recorder_status',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._isEnabled = config.isEnabled;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_enabled - computed: false, optional: false, required: true
    private _isEnabled: boolean | cdktf.IResolvable;
    public get isEnabled() {
      return this.getBooleanAttribute('is_enabled');
    }
    public set isEnabled(value: boolean | cdktf.IResolvable) {
      this._isEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
      return this._isEnabled
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
        is_enabled: cdktf.booleanToTerraform(this._isEnabled),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface ConfigConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_bucket ConfigConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#delivery_s3_key_prefix ConfigConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#name ConfigConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_body ConfigConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#template_s3_uri ConfigConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#input_parameter ConfigConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigConformancePackInputParameter[];
  }
  export interface ConfigConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_name ConfigConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html#parameter_value ConfigConformancePack#parameter_value}
    */
    readonly parameterValue: string;
  }

  function configConformancePackInputParameterToTerraform(struct?: ConfigConformancePackInputParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      parameter_name: cdktf.stringToTerraform(struct!.parameterName),
      parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack}
  */
  export class ConfigConformancePack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_conformance_pack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_conformance_pack.html aws_config_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigConformancePackConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigConformancePackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_conformance_pack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deliveryS3Bucket = config.deliveryS3Bucket;
      this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
      this._name = config.name;
      this._templateBody = config.templateBody;
      this._templateS3Uri = config.templateS3Uri;
      this._inputParameter = config.inputParameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delivery_s3_bucket - computed: false, optional: true, required: false
    private _deliveryS3Bucket?: string;
    public get deliveryS3Bucket() {
      return this.getStringAttribute('delivery_s3_bucket');
    }
    public set deliveryS3Bucket(value: string ) {
      this._deliveryS3Bucket = value;
    }
    public resetDeliveryS3Bucket() {
      this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3BucketInput() {
      return this._deliveryS3Bucket
    }

    // delivery_s3_key_prefix - computed: false, optional: true, required: false
    private _deliveryS3KeyPrefix?: string;
    public get deliveryS3KeyPrefix() {
      return this.getStringAttribute('delivery_s3_key_prefix');
    }
    public set deliveryS3KeyPrefix(value: string ) {
      this._deliveryS3KeyPrefix = value;
    }
    public resetDeliveryS3KeyPrefix() {
      this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3KeyPrefixInput() {
      return this._deliveryS3KeyPrefix
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

    // template_body - computed: false, optional: true, required: false
    private _templateBody?: string;
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string ) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_s3_uri - computed: false, optional: true, required: false
    private _templateS3Uri?: string;
    public get templateS3Uri() {
      return this.getStringAttribute('template_s3_uri');
    }
    public set templateS3Uri(value: string ) {
      this._templateS3Uri = value;
    }
    public resetTemplateS3Uri() {
      this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateS3UriInput() {
      return this._templateS3Uri
    }

    // input_parameter - computed: false, optional: true, required: false
    private _inputParameter?: ConfigConformancePackInputParameter[];
    public get inputParameter() {
      return this.interpolationForAttribute('input_parameter') as any;
    }
    public set inputParameter(value: ConfigConformancePackInputParameter[] ) {
      this._inputParameter = value;
    }
    public resetInputParameter() {
      this._inputParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParameterInput() {
      return this._inputParameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
        delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
        name: cdktf.stringToTerraform(this._name),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
        input_parameter: cdktf.listMapper(configConformancePackInputParameterToTerraform)(this._inputParameter),
      };
    }
  }
  export interface ConfigDeliveryChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#name ConfigDeliveryChannel#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_bucket_name ConfigDeliveryChannel#s3_bucket_name}
    */
    readonly s3BucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_key_prefix ConfigDeliveryChannel#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#s3_kms_key_arn ConfigDeliveryChannel#s3_kms_key_arn}
    */
    readonly s3KmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#sns_topic_arn ConfigDeliveryChannel#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * snapshot_delivery_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#snapshot_delivery_properties ConfigDeliveryChannel#snapshot_delivery_properties}
    */
    readonly snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
  }
  export interface ConfigDeliveryChannelSnapshotDeliveryProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html#delivery_frequency ConfigDeliveryChannel#delivery_frequency}
    */
    readonly deliveryFrequency?: string;
  }

  function configDeliveryChannelSnapshotDeliveryPropertiesToTerraform(struct?: ConfigDeliveryChannelSnapshotDeliveryProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delivery_frequency: cdktf.stringToTerraform(struct!.deliveryFrequency),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel}
  */
  export class ConfigDeliveryChannel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_delivery_channel";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_delivery_channel.html aws_config_delivery_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigDeliveryChannelConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigDeliveryChannelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_delivery_channel',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._s3BucketName = config.s3BucketName;
      this._s3KeyPrefix = config.s3KeyPrefix;
      this._s3KmsKeyArn = config.s3KmsKeyArn;
      this._snsTopicArn = config.snsTopicArn;
      this._snapshotDeliveryProperties = config.snapshotDeliveryProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string ) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // s3_bucket_name - computed: false, optional: false, required: true
    private _s3BucketName: string;
    public get s3BucketName() {
      return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
      this._s3BucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
      return this._s3BucketName
    }

    // s3_key_prefix - computed: false, optional: true, required: false
    private _s3KeyPrefix?: string;
    public get s3KeyPrefix() {
      return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string ) {
      this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
      this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
      return this._s3KeyPrefix
    }

    // s3_kms_key_arn - computed: false, optional: true, required: false
    private _s3KmsKeyArn?: string;
    public get s3KmsKeyArn() {
      return this.getStringAttribute('s3_kms_key_arn');
    }
    public set s3KmsKeyArn(value: string ) {
      this._s3KmsKeyArn = value;
    }
    public resetS3KmsKeyArn() {
      this._s3KmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KmsKeyArnInput() {
      return this._s3KmsKeyArn
    }

    // sns_topic_arn - computed: false, optional: true, required: false
    private _snsTopicArn?: string;
    public get snsTopicArn() {
      return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string ) {
      this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
      this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
      return this._snsTopicArn
    }

    // snapshot_delivery_properties - computed: false, optional: true, required: false
    private _snapshotDeliveryProperties?: ConfigDeliveryChannelSnapshotDeliveryProperties[];
    public get snapshotDeliveryProperties() {
      return this.interpolationForAttribute('snapshot_delivery_properties') as any;
    }
    public set snapshotDeliveryProperties(value: ConfigDeliveryChannelSnapshotDeliveryProperties[] ) {
      this._snapshotDeliveryProperties = value;
    }
    public resetSnapshotDeliveryProperties() {
      this._snapshotDeliveryProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotDeliveryPropertiesInput() {
      return this._snapshotDeliveryProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        s3_bucket_name: cdktf.stringToTerraform(this._s3BucketName),
        s3_key_prefix: cdktf.stringToTerraform(this._s3KeyPrefix),
        s3_kms_key_arn: cdktf.stringToTerraform(this._s3KmsKeyArn),
        sns_topic_arn: cdktf.stringToTerraform(this._snsTopicArn),
        snapshot_delivery_properties: cdktf.listMapper(configDeliveryChannelSnapshotDeliveryPropertiesToTerraform)(this._snapshotDeliveryProperties),
      };
    }
  }
  export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#name ConfigOrganizationConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_body ConfigOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#input_parameter ConfigOrganizationConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigOrganizationConformancePackInputParameter[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#timeouts ConfigOrganizationConformancePack#timeouts}
    */
    readonly timeouts?: ConfigOrganizationConformancePackTimeouts;
  }
  export interface ConfigOrganizationConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_name ConfigOrganizationConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_value ConfigOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue: string;
  }

  function configOrganizationConformancePackInputParameterToTerraform(struct?: ConfigOrganizationConformancePackInputParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      parameter_name: cdktf.stringToTerraform(struct!.parameterName),
      parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    }
  }

  export interface ConfigOrganizationConformancePackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#create ConfigOrganizationConformancePack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delete ConfigOrganizationConformancePack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#update ConfigOrganizationConformancePack#update}
    */
    readonly update?: string;
  }

  function configOrganizationConformancePackTimeoutsToTerraform(struct?: ConfigOrganizationConformancePackTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack}
  */
  export class ConfigOrganizationConformancePack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_conformance_pack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_conformance_pack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deliveryS3Bucket = config.deliveryS3Bucket;
      this._deliveryS3KeyPrefix = config.deliveryS3KeyPrefix;
      this._excludedAccounts = config.excludedAccounts;
      this._name = config.name;
      this._templateBody = config.templateBody;
      this._templateS3Uri = config.templateS3Uri;
      this._inputParameter = config.inputParameter;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delivery_s3_bucket - computed: false, optional: true, required: false
    private _deliveryS3Bucket?: string;
    public get deliveryS3Bucket() {
      return this.getStringAttribute('delivery_s3_bucket');
    }
    public set deliveryS3Bucket(value: string ) {
      this._deliveryS3Bucket = value;
    }
    public resetDeliveryS3Bucket() {
      this._deliveryS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3BucketInput() {
      return this._deliveryS3Bucket
    }

    // delivery_s3_key_prefix - computed: false, optional: true, required: false
    private _deliveryS3KeyPrefix?: string;
    public get deliveryS3KeyPrefix() {
      return this.getStringAttribute('delivery_s3_key_prefix');
    }
    public set deliveryS3KeyPrefix(value: string ) {
      this._deliveryS3KeyPrefix = value;
    }
    public resetDeliveryS3KeyPrefix() {
      this._deliveryS3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryS3KeyPrefixInput() {
      return this._deliveryS3KeyPrefix
    }

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[];
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] ) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
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

    // template_body - computed: false, optional: true, required: false
    private _templateBody?: string;
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string ) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_s3_uri - computed: false, optional: true, required: false
    private _templateS3Uri?: string;
    public get templateS3Uri() {
      return this.getStringAttribute('template_s3_uri');
    }
    public set templateS3Uri(value: string ) {
      this._templateS3Uri = value;
    }
    public resetTemplateS3Uri() {
      this._templateS3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateS3UriInput() {
      return this._templateS3Uri
    }

    // input_parameter - computed: false, optional: true, required: false
    private _inputParameter?: ConfigOrganizationConformancePackInputParameter[];
    public get inputParameter() {
      return this.interpolationForAttribute('input_parameter') as any;
    }
    public set inputParameter(value: ConfigOrganizationConformancePackInputParameter[] ) {
      this._inputParameter = value;
    }
    public resetInputParameter() {
      this._inputParameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParameterInput() {
      return this._inputParameter
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationConformancePackTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: ConfigOrganizationConformancePackTimeouts ) {
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
        delivery_s3_bucket: cdktf.stringToTerraform(this._deliveryS3Bucket),
        delivery_s3_key_prefix: cdktf.stringToTerraform(this._deliveryS3KeyPrefix),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        name: cdktf.stringToTerraform(this._name),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_s3_uri: cdktf.stringToTerraform(this._templateS3Uri),
        input_parameter: cdktf.listMapper(configOrganizationConformancePackInputParameterToTerraform)(this._inputParameter),
        timeouts: configOrganizationConformancePackTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigOrganizationCustomRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#description ConfigOrganizationCustomRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#excluded_accounts ConfigOrganizationCustomRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#input_parameters ConfigOrganizationCustomRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#lambda_function_arn ConfigOrganizationCustomRule#lambda_function_arn}
    */
    readonly lambdaFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#maximum_execution_frequency ConfigOrganizationCustomRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#name ConfigOrganizationCustomRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_id_scope ConfigOrganizationCustomRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#resource_types_scope ConfigOrganizationCustomRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_key_scope ConfigOrganizationCustomRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#tag_value_scope ConfigOrganizationCustomRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#trigger_types ConfigOrganizationCustomRule#trigger_types}
    */
    readonly triggerTypes: string[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#timeouts ConfigOrganizationCustomRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationCustomRuleTimeouts;
  }
  export interface ConfigOrganizationCustomRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#create ConfigOrganizationCustomRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#delete ConfigOrganizationCustomRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html#update ConfigOrganizationCustomRule#update}
    */
    readonly update?: string;
  }

  function configOrganizationCustomRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomRuleTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule}
  */
  export class ConfigOrganizationCustomRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_custom_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_custom_rule.html aws_config_organization_custom_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationCustomRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationCustomRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_custom_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._excludedAccounts = config.excludedAccounts;
      this._inputParameters = config.inputParameters;
      this._lambdaFunctionArn = config.lambdaFunctionArn;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._resourceIdScope = config.resourceIdScope;
      this._resourceTypesScope = config.resourceTypesScope;
      this._tagKeyScope = config.tagKeyScope;
      this._tagValueScope = config.tagValueScope;
      this._triggerTypes = config.triggerTypes;
      this._timeouts = config.timeouts;
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

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[];
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] ) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string;
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string ) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // lambda_function_arn - computed: false, optional: false, required: true
    private _lambdaFunctionArn: string;
    public get lambdaFunctionArn() {
      return this.getStringAttribute('lambda_function_arn');
    }
    public set lambdaFunctionArn(value: string) {
      this._lambdaFunctionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnInput() {
      return this._lambdaFunctionArn
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string;
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string ) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
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

    // resource_id_scope - computed: false, optional: true, required: false
    private _resourceIdScope?: string;
    public get resourceIdScope() {
      return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string ) {
      this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
      this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
      return this._resourceIdScope
    }

    // resource_types_scope - computed: false, optional: true, required: false
    private _resourceTypesScope?: string[];
    public get resourceTypesScope() {
      return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[] ) {
      this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
      this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
      return this._resourceTypesScope
    }

    // tag_key_scope - computed: false, optional: true, required: false
    private _tagKeyScope?: string;
    public get tagKeyScope() {
      return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string ) {
      this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
      this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
      return this._tagKeyScope
    }

    // tag_value_scope - computed: false, optional: true, required: false
    private _tagValueScope?: string;
    public get tagValueScope() {
      return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string ) {
      this._tagValueScope = value;
    }
    public resetTagValueScope() {
      this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
      return this._tagValueScope
    }

    // trigger_types - computed: false, optional: false, required: true
    private _triggerTypes: string[];
    public get triggerTypes() {
      return this.getListAttribute('trigger_types');
    }
    public set triggerTypes(value: string[]) {
      this._triggerTypes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerTypesInput() {
      return this._triggerTypes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationCustomRuleTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: ConfigOrganizationCustomRuleTimeouts ) {
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
        description: cdktf.stringToTerraform(this._description),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        lambda_function_arn: cdktf.stringToTerraform(this._lambdaFunctionArn),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
        resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
        tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
        tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
        trigger_types: cdktf.listMapper(cdktf.stringToTerraform)(this._triggerTypes),
        timeouts: configOrganizationCustomRuleTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigOrganizationManagedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#description ConfigOrganizationManagedRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#excluded_accounts ConfigOrganizationManagedRule#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#input_parameters ConfigOrganizationManagedRule#input_parameters}
    */
    readonly inputParameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#maximum_execution_frequency ConfigOrganizationManagedRule#maximum_execution_frequency}
    */
    readonly maximumExecutionFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#name ConfigOrganizationManagedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_id_scope ConfigOrganizationManagedRule#resource_id_scope}
    */
    readonly resourceIdScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#resource_types_scope ConfigOrganizationManagedRule#resource_types_scope}
    */
    readonly resourceTypesScope?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#rule_identifier ConfigOrganizationManagedRule#rule_identifier}
    */
    readonly ruleIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_key_scope ConfigOrganizationManagedRule#tag_key_scope}
    */
    readonly tagKeyScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#tag_value_scope ConfigOrganizationManagedRule#tag_value_scope}
    */
    readonly tagValueScope?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#timeouts ConfigOrganizationManagedRule#timeouts}
    */
    readonly timeouts?: ConfigOrganizationManagedRuleTimeouts;
  }
  export interface ConfigOrganizationManagedRuleTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#create ConfigOrganizationManagedRule#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#delete ConfigOrganizationManagedRule#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html#update ConfigOrganizationManagedRule#update}
    */
    readonly update?: string;
  }

  function configOrganizationManagedRuleTimeoutsToTerraform(struct?: ConfigOrganizationManagedRuleTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule}
  */
  export class ConfigOrganizationManagedRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_organization_managed_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_managed_rule.html aws_config_organization_managed_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationManagedRuleConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigOrganizationManagedRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_organization_managed_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._excludedAccounts = config.excludedAccounts;
      this._inputParameters = config.inputParameters;
      this._maximumExecutionFrequency = config.maximumExecutionFrequency;
      this._name = config.name;
      this._resourceIdScope = config.resourceIdScope;
      this._resourceTypesScope = config.resourceTypesScope;
      this._ruleIdentifier = config.ruleIdentifier;
      this._tagKeyScope = config.tagKeyScope;
      this._tagValueScope = config.tagValueScope;
      this._timeouts = config.timeouts;
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

    // excluded_accounts - computed: false, optional: true, required: false
    private _excludedAccounts?: string[];
    public get excludedAccounts() {
      return this.getListAttribute('excluded_accounts');
    }
    public set excludedAccounts(value: string[] ) {
      this._excludedAccounts = value;
    }
    public resetExcludedAccounts() {
      this._excludedAccounts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedAccountsInput() {
      return this._excludedAccounts
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input_parameters - computed: false, optional: true, required: false
    private _inputParameters?: string;
    public get inputParameters() {
      return this.getStringAttribute('input_parameters');
    }
    public set inputParameters(value: string ) {
      this._inputParameters = value;
    }
    public resetInputParameters() {
      this._inputParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputParametersInput() {
      return this._inputParameters
    }

    // maximum_execution_frequency - computed: false, optional: true, required: false
    private _maximumExecutionFrequency?: string;
    public get maximumExecutionFrequency() {
      return this.getStringAttribute('maximum_execution_frequency');
    }
    public set maximumExecutionFrequency(value: string ) {
      this._maximumExecutionFrequency = value;
    }
    public resetMaximumExecutionFrequency() {
      this._maximumExecutionFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumExecutionFrequencyInput() {
      return this._maximumExecutionFrequency
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

    // resource_id_scope - computed: false, optional: true, required: false
    private _resourceIdScope?: string;
    public get resourceIdScope() {
      return this.getStringAttribute('resource_id_scope');
    }
    public set resourceIdScope(value: string ) {
      this._resourceIdScope = value;
    }
    public resetResourceIdScope() {
      this._resourceIdScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdScopeInput() {
      return this._resourceIdScope
    }

    // resource_types_scope - computed: false, optional: true, required: false
    private _resourceTypesScope?: string[];
    public get resourceTypesScope() {
      return this.getListAttribute('resource_types_scope');
    }
    public set resourceTypesScope(value: string[] ) {
      this._resourceTypesScope = value;
    }
    public resetResourceTypesScope() {
      this._resourceTypesScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypesScopeInput() {
      return this._resourceTypesScope
    }

    // rule_identifier - computed: false, optional: false, required: true
    private _ruleIdentifier: string;
    public get ruleIdentifier() {
      return this.getStringAttribute('rule_identifier');
    }
    public set ruleIdentifier(value: string) {
      this._ruleIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleIdentifierInput() {
      return this._ruleIdentifier
    }

    // tag_key_scope - computed: false, optional: true, required: false
    private _tagKeyScope?: string;
    public get tagKeyScope() {
      return this.getStringAttribute('tag_key_scope');
    }
    public set tagKeyScope(value: string ) {
      this._tagKeyScope = value;
    }
    public resetTagKeyScope() {
      this._tagKeyScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyScopeInput() {
      return this._tagKeyScope
    }

    // tag_value_scope - computed: false, optional: true, required: false
    private _tagValueScope?: string;
    public get tagValueScope() {
      return this.getStringAttribute('tag_value_scope');
    }
    public set tagValueScope(value: string ) {
      this._tagValueScope = value;
    }
    public resetTagValueScope() {
      this._tagValueScope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValueScopeInput() {
      return this._tagValueScope
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: ConfigOrganizationManagedRuleTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: ConfigOrganizationManagedRuleTimeouts ) {
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
        description: cdktf.stringToTerraform(this._description),
        excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedAccounts),
        input_parameters: cdktf.stringToTerraform(this._inputParameters),
        maximum_execution_frequency: cdktf.stringToTerraform(this._maximumExecutionFrequency),
        name: cdktf.stringToTerraform(this._name),
        resource_id_scope: cdktf.stringToTerraform(this._resourceIdScope),
        resource_types_scope: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypesScope),
        rule_identifier: cdktf.stringToTerraform(this._ruleIdentifier),
        tag_key_scope: cdktf.stringToTerraform(this._tagKeyScope),
        tag_value_scope: cdktf.stringToTerraform(this._tagValueScope),
        timeouts: configOrganizationManagedRuleTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface ConfigRemediationConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#config_rule_name ConfigRemediationConfiguration#config_rule_name}
    */
    readonly configRuleName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_type ConfigRemediationConfiguration#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_id ConfigRemediationConfiguration#target_id}
    */
    readonly targetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_type ConfigRemediationConfiguration#target_type}
    */
    readonly targetType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#target_version ConfigRemediationConfiguration#target_version}
    */
    readonly targetVersion?: string;
    /**
    * parameter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#parameter ConfigRemediationConfiguration#parameter}
    */
    readonly parameter?: ConfigRemediationConfigurationParameter[];
  }
  export interface ConfigRemediationConfigurationParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#name ConfigRemediationConfiguration#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#resource_value ConfigRemediationConfiguration#resource_value}
    */
    readonly resourceValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html#static_value ConfigRemediationConfiguration#static_value}
    */
    readonly staticValue?: string;
  }

  function configRemediationConfigurationParameterToTerraform(struct?: ConfigRemediationConfigurationParameter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      resource_value: cdktf.stringToTerraform(struct!.resourceValue),
      static_value: cdktf.stringToTerraform(struct!.staticValue),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration}
  */
  export class ConfigRemediationConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_config_remediation_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_remediation_configuration.html aws_config_remediation_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigRemediationConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_config_remediation_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._configRuleName = config.configRuleName;
      this._resourceType = config.resourceType;
      this._targetId = config.targetId;
      this._targetType = config.targetType;
      this._targetVersion = config.targetVersion;
      this._parameter = config.parameter;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // config_rule_name - computed: false, optional: false, required: true
    private _configRuleName: string;
    public get configRuleName() {
      return this.getStringAttribute('config_rule_name');
    }
    public set configRuleName(value: string) {
      this._configRuleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get configRuleNameInput() {
      return this._configRuleName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_type - computed: false, optional: true, required: false
    private _resourceType?: string;
    public get resourceType() {
      return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string ) {
      this._resourceType = value;
    }
    public resetResourceType() {
      this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
      return this._resourceType
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId: string;
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType: string;
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
      this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // target_version - computed: false, optional: true, required: false
    private _targetVersion?: string;
    public get targetVersion() {
      return this.getStringAttribute('target_version');
    }
    public set targetVersion(value: string ) {
      this._targetVersion = value;
    }
    public resetTargetVersion() {
      this._targetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetVersionInput() {
      return this._targetVersion
    }

    // parameter - computed: false, optional: true, required: false
    private _parameter?: ConfigRemediationConfigurationParameter[];
    public get parameter() {
      return this.interpolationForAttribute('parameter') as any;
    }
    public set parameter(value: ConfigRemediationConfigurationParameter[] ) {
      this._parameter = value;
    }
    public resetParameter() {
      this._parameter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterInput() {
      return this._parameter
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        config_rule_name: cdktf.stringToTerraform(this._configRuleName),
        resource_type: cdktf.stringToTerraform(this._resourceType),
        target_id: cdktf.stringToTerraform(this._targetId),
        target_type: cdktf.stringToTerraform(this._targetType),
        target_version: cdktf.stringToTerraform(this._targetVersion),
        parameter: cdktf.listMapper(configRemediationConfigurationParameterToTerraform)(this._parameter),
      };
    }
  }
}
