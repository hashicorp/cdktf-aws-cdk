// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Budgets
*/
export interface BudgetsBudgetActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#account_id BudgetsBudgetAction#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_type BudgetsBudgetAction#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#approval_model BudgetsBudgetAction#approval_model}
  */
  readonly approvalModel: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#budget_name BudgetsBudgetAction#budget_name}
  */
  readonly budgetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#execution_role_arn BudgetsBudgetAction#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#notification_type BudgetsBudgetAction#notification_type}
  */
  readonly notificationType: string;
  /**
  * action_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold BudgetsBudgetAction#action_threshold}
  */
  readonly actionThreshold: BudgetsBudgetActionActionThreshold;
  /**
  * definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#definition BudgetsBudgetAction#definition}
  */
  readonly definition: BudgetsBudgetActionDefinition;
  /**
  * subscriber block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscriber BudgetsBudgetAction#subscriber}
  */
  readonly subscriber: BudgetsBudgetActionSubscriber[];
}
export interface BudgetsBudgetActionActionThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_type BudgetsBudgetAction#action_threshold_type}
  */
  readonly actionThresholdType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_threshold_value BudgetsBudgetAction#action_threshold_value}
  */
  readonly actionThresholdValue: number;
}

export function budgetsBudgetActionActionThresholdToTerraform(struct?: BudgetsBudgetActionActionThresholdOutputReference | BudgetsBudgetActionActionThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_threshold_type: cdktf.stringToTerraform(struct!.actionThresholdType),
    action_threshold_value: cdktf.numberToTerraform(struct!.actionThresholdValue),
  }
}

export class BudgetsBudgetActionActionThresholdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action_threshold_type - computed: false, optional: false, required: true
  private _actionThresholdType?: string; 
  public get actionThresholdType() {
    return this.getStringAttribute('action_threshold_type');
  }
  public set actionThresholdType(value: string) {
    this._actionThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdTypeInput() {
    return this._actionThresholdType
  }

  // action_threshold_value - computed: false, optional: false, required: true
  private _actionThresholdValue?: number; 
  public get actionThresholdValue() {
    return this.getNumberAttribute('action_threshold_value');
  }
  public set actionThresholdValue(value: number) {
    this._actionThresholdValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdValueInput() {
    return this._actionThresholdValue
  }
}
export interface BudgetsBudgetActionDefinitionIamActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#groups BudgetsBudgetAction#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_arn BudgetsBudgetAction#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#roles BudgetsBudgetAction#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#users BudgetsBudgetAction#users}
  */
  readonly users?: string[];
}

export function budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference | BudgetsBudgetActionDefinitionIamActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groups),
    policy_arn: cdktf.stringToTerraform(struct!.policyArn),
    roles: cdktf.listMapper(cdktf.stringToTerraform)(struct!.roles),
    users: cdktf.listMapper(cdktf.stringToTerraform)(struct!.users),
  }
}

export class BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[] | undefined; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[] | undefined) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups
  }

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[] | undefined; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[] | undefined) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // users - computed: false, optional: true, required: false
  private _users?: string[] | undefined; 
  public get users() {
    return this.getListAttribute('users');
  }
  public set users(value: string[] | undefined) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users
  }
}
export interface BudgetsBudgetActionDefinitionScpActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#policy_id BudgetsBudgetAction#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#target_ids BudgetsBudgetAction#target_ids}
  */
  readonly targetIds: string[];
}

export function budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference | BudgetsBudgetActionDefinitionScpActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_id: cdktf.stringToTerraform(struct!.policyId),
    target_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetIds),
  }
}

export class BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId
  }

  // target_ids - computed: false, optional: false, required: true
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds
  }
}
export interface BudgetsBudgetActionDefinitionSsmActionDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#action_sub_type BudgetsBudgetAction#action_sub_type}
  */
  readonly actionSubType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#instance_ids BudgetsBudgetAction#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#region BudgetsBudgetAction#region}
  */
  readonly region: string;
}

export function budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference | BudgetsBudgetActionDefinitionSsmActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_sub_type: cdktf.stringToTerraform(struct!.actionSubType),
    instance_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceIds),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // action_sub_type - computed: false, optional: false, required: true
  private _actionSubType?: string; 
  public get actionSubType() {
    return this.getStringAttribute('action_sub_type');
  }
  public set actionSubType(value: string) {
    this._actionSubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSubTypeInput() {
    return this._actionSubType
  }

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
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
}
export interface BudgetsBudgetActionDefinition {
  /**
  * iam_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#iam_action_definition BudgetsBudgetAction#iam_action_definition}
  */
  readonly iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition;
  /**
  * scp_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#scp_action_definition BudgetsBudgetAction#scp_action_definition}
  */
  readonly scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition;
  /**
  * ssm_action_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#ssm_action_definition BudgetsBudgetAction#ssm_action_definition}
  */
  readonly ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition;
}

export function budgetsBudgetActionDefinitionToTerraform(struct?: BudgetsBudgetActionDefinitionOutputReference | BudgetsBudgetActionDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_action_definition: budgetsBudgetActionDefinitionIamActionDefinitionToTerraform(struct!.iamActionDefinition),
    scp_action_definition: budgetsBudgetActionDefinitionScpActionDefinitionToTerraform(struct!.scpActionDefinition),
    ssm_action_definition: budgetsBudgetActionDefinitionSsmActionDefinitionToTerraform(struct!.ssmActionDefinition),
  }
}

export class BudgetsBudgetActionDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // iam_action_definition - computed: false, optional: true, required: false
  private _iamActionDefinition?: BudgetsBudgetActionDefinitionIamActionDefinition | undefined; 
  private __iamActionDefinitionOutput = new BudgetsBudgetActionDefinitionIamActionDefinitionOutputReference(this as any, "iam_action_definition", true);
  public get iamActionDefinition() {
    return this.__iamActionDefinitionOutput;
  }
  public putIamActionDefinition(value: BudgetsBudgetActionDefinitionIamActionDefinition | undefined) {
    this._iamActionDefinition = value;
  }
  public resetIamActionDefinition() {
    this._iamActionDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamActionDefinitionInput() {
    return this._iamActionDefinition
  }

  // scp_action_definition - computed: false, optional: true, required: false
  private _scpActionDefinition?: BudgetsBudgetActionDefinitionScpActionDefinition | undefined; 
  private __scpActionDefinitionOutput = new BudgetsBudgetActionDefinitionScpActionDefinitionOutputReference(this as any, "scp_action_definition", true);
  public get scpActionDefinition() {
    return this.__scpActionDefinitionOutput;
  }
  public putScpActionDefinition(value: BudgetsBudgetActionDefinitionScpActionDefinition | undefined) {
    this._scpActionDefinition = value;
  }
  public resetScpActionDefinition() {
    this._scpActionDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scpActionDefinitionInput() {
    return this._scpActionDefinition
  }

  // ssm_action_definition - computed: false, optional: true, required: false
  private _ssmActionDefinition?: BudgetsBudgetActionDefinitionSsmActionDefinition | undefined; 
  private __ssmActionDefinitionOutput = new BudgetsBudgetActionDefinitionSsmActionDefinitionOutputReference(this as any, "ssm_action_definition", true);
  public get ssmActionDefinition() {
    return this.__ssmActionDefinitionOutput;
  }
  public putSsmActionDefinition(value: BudgetsBudgetActionDefinitionSsmActionDefinition | undefined) {
    this._ssmActionDefinition = value;
  }
  public resetSsmActionDefinition() {
    this._ssmActionDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmActionDefinitionInput() {
    return this._ssmActionDefinition
  }
}
export interface BudgetsBudgetActionSubscriber {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#address BudgetsBudgetAction#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html#subscription_type BudgetsBudgetAction#subscription_type}
  */
  readonly subscriptionType: string;
}

export function budgetsBudgetActionSubscriberToTerraform(struct?: BudgetsBudgetActionSubscriber): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subscription_type: cdktf.stringToTerraform(struct!.subscriptionType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action}
*/
export class BudgetsBudgetAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_budgets_budget_action";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/budgets_budget_action.html aws_budgets_budget_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetsBudgetActionConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetsBudgetActionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_budgets_budget_action',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._actionType = config.actionType;
    this._approvalModel = config.approvalModel;
    this._budgetName = config.budgetName;
    this._executionRoleArn = config.executionRoleArn;
    this._notificationType = config.notificationType;
    this._actionThreshold = config.actionThreshold;
    this._definition = config.definition;
    this._subscriber = config.subscriber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string | undefined; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType
  }

  // approval_model - computed: false, optional: false, required: true
  private _approvalModel?: string; 
  public get approvalModel() {
    return this.getStringAttribute('approval_model');
  }
  public set approvalModel(value: string) {
    this._approvalModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalModelInput() {
    return this._approvalModel
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // budget_name - computed: false, optional: false, required: true
  private _budgetName?: string; 
  public get budgetName() {
    return this.getStringAttribute('budget_name');
  }
  public set budgetName(value: string) {
    this._budgetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get budgetNameInput() {
    return this._budgetName
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_type - computed: false, optional: false, required: true
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // action_threshold - computed: false, optional: false, required: true
  private _actionThreshold?: BudgetsBudgetActionActionThreshold; 
  private __actionThresholdOutput = new BudgetsBudgetActionActionThresholdOutputReference(this as any, "action_threshold", true);
  public get actionThreshold() {
    return this.__actionThresholdOutput;
  }
  public putActionThreshold(value: BudgetsBudgetActionActionThreshold) {
    this._actionThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionThresholdInput() {
    return this._actionThreshold
  }

  // definition - computed: false, optional: false, required: true
  private _definition?: BudgetsBudgetActionDefinition; 
  private __definitionOutput = new BudgetsBudgetActionDefinitionOutputReference(this as any, "definition", true);
  public get definition() {
    return this.__definitionOutput;
  }
  public putDefinition(value: BudgetsBudgetActionDefinition) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // subscriber - computed: false, optional: false, required: true
  private _subscriber?: BudgetsBudgetActionSubscriber[]; 
  public get subscriber() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subscriber') as any;
  }
  public set subscriber(value: BudgetsBudgetActionSubscriber[]) {
    this._subscriber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberInput() {
    return this._subscriber
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      action_type: cdktf.stringToTerraform(this._actionType),
      approval_model: cdktf.stringToTerraform(this._approvalModel),
      budget_name: cdktf.stringToTerraform(this._budgetName),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      notification_type: cdktf.stringToTerraform(this._notificationType),
      action_threshold: budgetsBudgetActionActionThresholdToTerraform(this._actionThreshold),
      definition: budgetsBudgetActionDefinitionToTerraform(this._definition),
      subscriber: cdktf.listMapper(budgetsBudgetActionSubscriberToTerraform)(this._subscriber),
    };
  }
}