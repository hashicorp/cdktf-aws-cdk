// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
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

export function configOrganizationCustomRuleTimeoutsToTerraform(struct?: ConfigOrganizationCustomRuleTimeoutsOutputReference | ConfigOrganizationCustomRuleTimeouts): any {
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

export class ConfigOrganizationCustomRuleTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[] | undefined; 
  public get excludedAccounts() {
    return this.getListAttribute('excluded_accounts');
  }
  public set excludedAccounts(value: string[] | undefined) {
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
  private _inputParameters?: string | undefined; 
  public get inputParameters() {
    return this.getStringAttribute('input_parameters');
  }
  public set inputParameters(value: string | undefined) {
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
  private _lambdaFunctionArn?: string; 
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
  private _maximumExecutionFrequency?: string | undefined; 
  public get maximumExecutionFrequency() {
    return this.getStringAttribute('maximum_execution_frequency');
  }
  public set maximumExecutionFrequency(value: string | undefined) {
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

  // resource_id_scope - computed: false, optional: true, required: false
  private _resourceIdScope?: string | undefined; 
  public get resourceIdScope() {
    return this.getStringAttribute('resource_id_scope');
  }
  public set resourceIdScope(value: string | undefined) {
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
  private _resourceTypesScope?: string[] | undefined; 
  public get resourceTypesScope() {
    return this.getListAttribute('resource_types_scope');
  }
  public set resourceTypesScope(value: string[] | undefined) {
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
  private _tagKeyScope?: string | undefined; 
  public get tagKeyScope() {
    return this.getStringAttribute('tag_key_scope');
  }
  public set tagKeyScope(value: string | undefined) {
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
  private _tagValueScope?: string | undefined; 
  public get tagValueScope() {
    return this.getStringAttribute('tag_value_scope');
  }
  public set tagValueScope(value: string | undefined) {
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
  private _triggerTypes?: string[]; 
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
  private _timeouts?: ConfigOrganizationCustomRuleTimeouts | undefined; 
  private __timeoutsOutput = new ConfigOrganizationCustomRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ConfigOrganizationCustomRuleTimeouts | undefined) {
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