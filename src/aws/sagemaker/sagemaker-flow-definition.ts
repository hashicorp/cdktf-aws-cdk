// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerFlowDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#flow_definition_name SagemakerFlowDefinition#flow_definition_name}
  */
  readonly flowDefinitionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#role_arn SagemakerFlowDefinition#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags SagemakerFlowDefinition#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tags_all SagemakerFlowDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * human_loop_activation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}
  */
  readonly humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig;
  /**
  * human_loop_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_config SagemakerFlowDefinition#human_loop_config}
  */
  readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig;
  /**
  * human_loop_request_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}
  */
  readonly humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource;
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#output_config SagemakerFlowDefinition#output_config}
  */
  readonly outputConfig: SagemakerFlowDefinitionOutputConfig;
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}
  */
  readonly humanLoopActivationConditions: string;
}

export function sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_loop_activation_conditions: cdktf.stringToTerraform(struct!.humanLoopActivationConditions),
  }
}

export class SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // human_loop_activation_conditions - computed: false, optional: false, required: true
  private _humanLoopActivationConditions?: string; 
  public get humanLoopActivationConditions() {
    return this.getStringAttribute('human_loop_activation_conditions');
  }
  public set humanLoopActivationConditions(value: string) {
    this._humanLoopActivationConditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsInput() {
    return this._humanLoopActivationConditions
  }
}
export interface SagemakerFlowDefinitionHumanLoopActivationConfig {
  /**
  * human_loop_activation_conditions_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}
  */
  readonly humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}

export function sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference | SagemakerFlowDefinitionHumanLoopActivationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_loop_activation_conditions_config: sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigToTerraform(struct!.humanLoopActivationConditionsConfig),
  }
}

export class SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // human_loop_activation_conditions_config - computed: false, optional: true, required: false
  private _humanLoopActivationConditionsConfig?: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined; 
  private __humanLoopActivationConditionsConfigOutput = new SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(this as any, "human_loop_activation_conditions_config", true);
  public get humanLoopActivationConditionsConfig() {
    return this.__humanLoopActivationConditionsConfigOutput;
  }
  public putHumanLoopActivationConditionsConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig | undefined) {
    this._humanLoopActivationConditionsConfig = value;
  }
  public resetHumanLoopActivationConditionsConfig() {
    this._humanLoopActivationConditionsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConditionsConfigInput() {
    return this._humanLoopActivationConditionsConfig
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#cents SagemakerFlowDefinition#cents}
  */
  readonly cents?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#dollars SagemakerFlowDefinition#dollars}
  */
  readonly dollars?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}
  */
  readonly tenthFractionsOfACent?: number;
}

export function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cents: cdktf.numberToTerraform(struct!.cents),
    dollars: cdktf.numberToTerraform(struct!.dollars),
    tenth_fractions_of_a_cent: cdktf.numberToTerraform(struct!.tenthFractionsOfACent),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cents - computed: false, optional: true, required: false
  private _cents?: number | undefined; 
  public get cents() {
    return this.getNumberAttribute('cents');
  }
  public set cents(value: number | undefined) {
    this._cents = value;
  }
  public resetCents() {
    this._cents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centsInput() {
    return this._cents
  }

  // dollars - computed: false, optional: true, required: false
  private _dollars?: number | undefined; 
  public get dollars() {
    return this.getNumberAttribute('dollars');
  }
  public set dollars(value: number | undefined) {
    this._dollars = value;
  }
  public resetDollars() {
    this._dollars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dollarsInput() {
    return this._dollars
  }

  // tenth_fractions_of_a_cent - computed: false, optional: true, required: false
  private _tenthFractionsOfACent?: number | undefined; 
  public get tenthFractionsOfACent() {
    return this.getNumberAttribute('tenth_fractions_of_a_cent');
  }
  public set tenthFractionsOfACent(value: number | undefined) {
    this._tenthFractionsOfACent = value;
  }
  public resetTenthFractionsOfACent() {
    this._tenthFractionsOfACent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenthFractionsOfACentInput() {
    return this._tenthFractionsOfACent
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
  /**
  * amount_in_usd block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#amount_in_usd SagemakerFlowDefinition#amount_in_usd}
  */
  readonly amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}

export function sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference | SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount_in_usd: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdToTerraform(struct!.amountInUsd),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // amount_in_usd - computed: false, optional: true, required: false
  private _amountInUsd?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined; 
  private __amountInUsdOutput = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(this as any, "amount_in_usd", true);
  public get amountInUsd() {
    return this.__amountInUsdOutput;
  }
  public putAmountInUsd(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd | undefined) {
    this._amountInUsd = value;
  }
  public resetAmountInUsd() {
    this._amountInUsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInUsdInput() {
    return this._amountInUsd
  }
}
export interface SagemakerFlowDefinitionHumanLoopConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}
  */
  readonly humanTaskUiArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}
  */
  readonly taskAvailabilityLifetimeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_count SagemakerFlowDefinition#task_count}
  */
  readonly taskCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_description SagemakerFlowDefinition#task_description}
  */
  readonly taskDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_keywords SagemakerFlowDefinition#task_keywords}
  */
  readonly taskKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}
  */
  readonly taskTimeLimitInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#task_title SagemakerFlowDefinition#task_title}
  */
  readonly taskTitle: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#workteam_arn SagemakerFlowDefinition#workteam_arn}
  */
  readonly workteamArn: string;
  /**
  * public_workforce_task_price block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}
  */
  readonly publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
}

export function sagemakerFlowDefinitionHumanLoopConfigToTerraform(struct?: SagemakerFlowDefinitionHumanLoopConfigOutputReference | SagemakerFlowDefinitionHumanLoopConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_task_ui_arn: cdktf.stringToTerraform(struct!.humanTaskUiArn),
    task_availability_lifetime_in_seconds: cdktf.numberToTerraform(struct!.taskAvailabilityLifetimeInSeconds),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_description: cdktf.stringToTerraform(struct!.taskDescription),
    task_keywords: cdktf.listMapper(cdktf.stringToTerraform)(struct!.taskKeywords),
    task_time_limit_in_seconds: cdktf.numberToTerraform(struct!.taskTimeLimitInSeconds),
    task_title: cdktf.stringToTerraform(struct!.taskTitle),
    workteam_arn: cdktf.stringToTerraform(struct!.workteamArn),
    public_workforce_task_price: sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceToTerraform(struct!.publicWorkforceTaskPrice),
  }
}

export class SagemakerFlowDefinitionHumanLoopConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // human_task_ui_arn - computed: false, optional: false, required: true
  private _humanTaskUiArn?: string; 
  public get humanTaskUiArn() {
    return this.getStringAttribute('human_task_ui_arn');
  }
  public set humanTaskUiArn(value: string) {
    this._humanTaskUiArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanTaskUiArnInput() {
    return this._humanTaskUiArn
  }

  // task_availability_lifetime_in_seconds - computed: false, optional: true, required: false
  private _taskAvailabilityLifetimeInSeconds?: number | undefined; 
  public get taskAvailabilityLifetimeInSeconds() {
    return this.getNumberAttribute('task_availability_lifetime_in_seconds');
  }
  public set taskAvailabilityLifetimeInSeconds(value: number | undefined) {
    this._taskAvailabilityLifetimeInSeconds = value;
  }
  public resetTaskAvailabilityLifetimeInSeconds() {
    this._taskAvailabilityLifetimeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAvailabilityLifetimeInSecondsInput() {
    return this._taskAvailabilityLifetimeInSeconds
  }

  // task_count - computed: false, optional: false, required: true
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount
  }

  // task_description - computed: false, optional: false, required: true
  private _taskDescription?: string; 
  public get taskDescription() {
    return this.getStringAttribute('task_description');
  }
  public set taskDescription(value: string) {
    this._taskDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDescriptionInput() {
    return this._taskDescription
  }

  // task_keywords - computed: false, optional: true, required: false
  private _taskKeywords?: string[] | undefined; 
  public get taskKeywords() {
    return this.getListAttribute('task_keywords');
  }
  public set taskKeywords(value: string[] | undefined) {
    this._taskKeywords = value;
  }
  public resetTaskKeywords() {
    this._taskKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskKeywordsInput() {
    return this._taskKeywords
  }

  // task_time_limit_in_seconds - computed: false, optional: true, required: false
  private _taskTimeLimitInSeconds?: number | undefined; 
  public get taskTimeLimitInSeconds() {
    return this.getNumberAttribute('task_time_limit_in_seconds');
  }
  public set taskTimeLimitInSeconds(value: number | undefined) {
    this._taskTimeLimitInSeconds = value;
  }
  public resetTaskTimeLimitInSeconds() {
    this._taskTimeLimitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTimeLimitInSecondsInput() {
    return this._taskTimeLimitInSeconds
  }

  // task_title - computed: false, optional: false, required: true
  private _taskTitle?: string; 
  public get taskTitle() {
    return this.getStringAttribute('task_title');
  }
  public set taskTitle(value: string) {
    this._taskTitle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTitleInput() {
    return this._taskTitle
  }

  // workteam_arn - computed: false, optional: false, required: true
  private _workteamArn?: string; 
  public get workteamArn() {
    return this.getStringAttribute('workteam_arn');
  }
  public set workteamArn(value: string) {
    this._workteamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workteamArnInput() {
    return this._workteamArn
  }

  // public_workforce_task_price - computed: false, optional: true, required: false
  private _publicWorkforceTaskPrice?: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined; 
  private __publicWorkforceTaskPriceOutput = new SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(this as any, "public_workforce_task_price", true);
  public get publicWorkforceTaskPrice() {
    return this.__publicWorkforceTaskPriceOutput;
  }
  public putPublicWorkforceTaskPrice(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice | undefined) {
    this._publicWorkforceTaskPrice = value;
  }
  public resetPublicWorkforceTaskPrice() {
    this._publicWorkforceTaskPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicWorkforceTaskPriceInput() {
    return this._publicWorkforceTaskPrice
  }
}
export interface SagemakerFlowDefinitionHumanLoopRequestSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}
  */
  readonly awsManagedHumanLoopRequestSource: string;
}

export function sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(struct?: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference | SagemakerFlowDefinitionHumanLoopRequestSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_managed_human_loop_request_source: cdktf.stringToTerraform(struct!.awsManagedHumanLoopRequestSource),
  }
}

export class SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aws_managed_human_loop_request_source - computed: false, optional: false, required: true
  private _awsManagedHumanLoopRequestSource?: string; 
  public get awsManagedHumanLoopRequestSource() {
    return this.getStringAttribute('aws_managed_human_loop_request_source');
  }
  public set awsManagedHumanLoopRequestSource(value: string) {
    this._awsManagedHumanLoopRequestSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsManagedHumanLoopRequestSourceInput() {
    return this._awsManagedHumanLoopRequestSource
  }
}
export interface SagemakerFlowDefinitionOutputConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#kms_key_id SagemakerFlowDefinition#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html#s3_output_path SagemakerFlowDefinition#s3_output_path}
  */
  readonly s3OutputPath: string;
}

export function sagemakerFlowDefinitionOutputConfigToTerraform(struct?: SagemakerFlowDefinitionOutputConfigOutputReference | SagemakerFlowDefinitionOutputConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}

export class SagemakerFlowDefinitionOutputConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string | undefined; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // s3_output_path - computed: false, optional: false, required: true
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition}
*/
export class SagemakerFlowDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_flow_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_flow_definition.html aws_sagemaker_flow_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFlowDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_flow_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._flowDefinitionName = config.flowDefinitionName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._humanLoopActivationConfig = config.humanLoopActivationConfig;
    this._humanLoopConfig = config.humanLoopConfig;
    this._humanLoopRequestSource = config.humanLoopRequestSource;
    this._outputConfig = config.outputConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // flow_definition_name - computed: false, optional: false, required: true
  private _flowDefinitionName?: string; 
  public get flowDefinitionName() {
    return this.getStringAttribute('flow_definition_name');
  }
  public set flowDefinitionName(value: string) {
    this._flowDefinitionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDefinitionNameInput() {
    return this._flowDefinitionName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
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

  // human_loop_activation_config - computed: false, optional: true, required: false
  private _humanLoopActivationConfig?: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined; 
  private __humanLoopActivationConfigOutput = new SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(this as any, "human_loop_activation_config", true);
  public get humanLoopActivationConfig() {
    return this.__humanLoopActivationConfigOutput;
  }
  public putHumanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig | undefined) {
    this._humanLoopActivationConfig = value;
  }
  public resetHumanLoopActivationConfig() {
    this._humanLoopActivationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopActivationConfigInput() {
    return this._humanLoopActivationConfig
  }

  // human_loop_config - computed: false, optional: false, required: true
  private _humanLoopConfig?: SagemakerFlowDefinitionHumanLoopConfig; 
  private __humanLoopConfigOutput = new SagemakerFlowDefinitionHumanLoopConfigOutputReference(this as any, "human_loop_config", true);
  public get humanLoopConfig() {
    return this.__humanLoopConfigOutput;
  }
  public putHumanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig) {
    this._humanLoopConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopConfigInput() {
    return this._humanLoopConfig
  }

  // human_loop_request_source - computed: false, optional: true, required: false
  private _humanLoopRequestSource?: SagemakerFlowDefinitionHumanLoopRequestSource | undefined; 
  private __humanLoopRequestSourceOutput = new SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(this as any, "human_loop_request_source", true);
  public get humanLoopRequestSource() {
    return this.__humanLoopRequestSourceOutput;
  }
  public putHumanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource | undefined) {
    this._humanLoopRequestSource = value;
  }
  public resetHumanLoopRequestSource() {
    this._humanLoopRequestSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get humanLoopRequestSourceInput() {
    return this._humanLoopRequestSource
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig?: SagemakerFlowDefinitionOutputConfig; 
  private __outputConfigOutput = new SagemakerFlowDefinitionOutputConfigOutputReference(this as any, "output_config", true);
  public get outputConfig() {
    return this.__outputConfigOutput;
  }
  public putOutputConfig(value: SagemakerFlowDefinitionOutputConfig) {
    this._outputConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      flow_definition_name: cdktf.stringToTerraform(this._flowDefinitionName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      human_loop_activation_config: sagemakerFlowDefinitionHumanLoopActivationConfigToTerraform(this._humanLoopActivationConfig),
      human_loop_config: sagemakerFlowDefinitionHumanLoopConfigToTerraform(this._humanLoopConfig),
      human_loop_request_source: sagemakerFlowDefinitionHumanLoopRequestSourceToTerraform(this._humanLoopRequestSource),
      output_config: sagemakerFlowDefinitionOutputConfigToTerraform(this._outputConfig),
    };
  }
}
