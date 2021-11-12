// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Systems Manager
*/
export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#description SsmMaintenanceWindowTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
  */
  readonly maxConcurrency: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#max_errors SsmMaintenanceWindowTask#max_errors}
  */
  readonly maxErrors: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#priority SsmMaintenanceWindowTask#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_arn SsmMaintenanceWindowTask#task_arn}
  */
  readonly taskArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_type SsmMaintenanceWindowTask#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#window_id SsmMaintenanceWindowTask#window_id}
  */
  readonly windowId: string;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#targets SsmMaintenanceWindowTask#targets}
  */
  readonly targets?: SsmMaintenanceWindowTaskTargets[];
  /**
  * task_invocation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
  */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
}
export interface SsmMaintenanceWindowTaskTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#key SsmMaintenanceWindowTask#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform)(struct!.parameter),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string | undefined; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string | undefined) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | undefined; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | undefined) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#client_context SsmMaintenanceWindowTask#client_context}
  */
  readonly clientContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#payload SsmMaintenanceWindowTask#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#qualifier SsmMaintenanceWindowTask#qualifier}
  */
  readonly qualifier?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_context: cdktf.stringToTerraform(struct!.clientContext),
    payload: cdktf.stringToTerraform(struct!.payload),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_context - computed: false, optional: true, required: false
  private _clientContext?: string | undefined; 
  public get clientContext() {
    return this.getStringAttribute('client_context');
  }
  public set clientContext(value: string | undefined) {
    this._clientContext = value;
  }
  public resetClientContext() {
    this._clientContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientContextInput() {
    return this._clientContext
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string | undefined; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string | undefined) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload
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
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
  */
  readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
    cloudwatch_output_enabled: cdktf.booleanToTerraform(struct!.cloudwatchOutputEnabled),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_log_group_name - computed: true, optional: true, required: false
  private _cloudwatchLogGroupName?: string | undefined; 
  public get cloudwatchLogGroupName() {
    return this.getStringAttribute('cloudwatch_log_group_name');
  }
  public set cloudwatchLogGroupName(value: string | undefined) {
    this._cloudwatchLogGroupName = value;
  }
  public resetCloudwatchLogGroupName() {
    this._cloudwatchLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupNameInput() {
    return this._cloudwatchLogGroupName
  }

  // cloudwatch_output_enabled - computed: false, optional: true, required: false
  private _cloudwatchOutputEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get cloudwatchOutputEnabled() {
    return this.getBooleanAttribute('cloudwatch_output_enabled') as any;
  }
  public set cloudwatchOutputEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._cloudwatchOutputEnabled = value;
  }
  public resetCloudwatchOutputEnabled() {
    this._cloudwatchOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchOutputEnabledInput() {
    return this._cloudwatchOutputEnabled
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_arn SsmMaintenanceWindowTask#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_events SsmMaintenanceWindowTask#notification_events}
  */
  readonly notificationEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_type SsmMaintenanceWindowTask#notification_type}
  */
  readonly notificationType?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_arn: cdktf.stringToTerraform(struct!.notificationArn),
    notification_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notificationEvents),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // notification_arn - computed: false, optional: true, required: false
  private _notificationArn?: string | undefined; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string | undefined) {
    this._notificationArn = value;
  }
  public resetNotificationArn() {
    this._notificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn
  }

  // notification_events - computed: false, optional: true, required: false
  private _notificationEvents?: string[] | undefined; 
  public get notificationEvents() {
    return this.getListAttribute('notification_events');
  }
  public set notificationEvents(value: string[] | undefined) {
    this._notificationEvents = value;
  }
  public resetNotificationEvents() {
    this._notificationEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventsInput() {
    return this._notificationEvents
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string | undefined; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string | undefined) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#comment SsmMaintenanceWindowTask#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash SsmMaintenanceWindowTask#document_hash}
  */
  readonly documentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
  */
  readonly documentHashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
  */
  readonly outputS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * cloudwatch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
  */
  readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#notification_config SsmMaintenanceWindowTask#notification_config}
  */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    document_hash: cdktf.stringToTerraform(struct!.documentHash),
    document_hash_type: cdktf.stringToTerraform(struct!.documentHashType),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    output_s3_bucket: cdktf.stringToTerraform(struct!.outputS3Bucket),
    output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
    service_role_arn: cdktf.stringToTerraform(struct!.serviceRoleArn),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    cloudwatch_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
    notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct!.notificationConfig),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform)(struct!.parameter),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string | undefined; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string | undefined) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // document_hash - computed: false, optional: true, required: false
  private _documentHash?: string | undefined; 
  public get documentHash() {
    return this.getStringAttribute('document_hash');
  }
  public set documentHash(value: string | undefined) {
    this._documentHash = value;
  }
  public resetDocumentHash() {
    this._documentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashInput() {
    return this._documentHash
  }

  // document_hash_type - computed: false, optional: true, required: false
  private _documentHashType?: string | undefined; 
  public get documentHashType() {
    return this.getStringAttribute('document_hash_type');
  }
  public set documentHashType(value: string | undefined) {
    this._documentHashType = value;
  }
  public resetDocumentHashType() {
    this._documentHashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashTypeInput() {
    return this._documentHashType
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string | undefined; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string | undefined) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion
  }

  // output_s3_bucket - computed: false, optional: true, required: false
  private _outputS3Bucket?: string | undefined; 
  public get outputS3Bucket() {
    return this.getStringAttribute('output_s3_bucket');
  }
  public set outputS3Bucket(value: string | undefined) {
    this._outputS3Bucket = value;
  }
  public resetOutputS3Bucket() {
    this._outputS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3BucketInput() {
    return this._outputS3Bucket
  }

  // output_s3_key_prefix - computed: false, optional: true, required: false
  private _outputS3KeyPrefix?: string | undefined; 
  public get outputS3KeyPrefix() {
    return this.getStringAttribute('output_s3_key_prefix');
  }
  public set outputS3KeyPrefix(value: string | undefined) {
    this._outputS3KeyPrefix = value;
  }
  public resetOutputS3KeyPrefix() {
    this._outputS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3KeyPrefixInput() {
    return this._outputS3KeyPrefix
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string | undefined; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string | undefined) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number | undefined; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number | undefined) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds
  }

  // cloudwatch_config - computed: false, optional: true, required: false
  private _cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined; 
  private __cloudwatchConfigOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(this as any, "cloudwatch_config", true);
  public get cloudwatchConfig() {
    return this.__cloudwatchConfigOutput;
  }
  public putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined) {
    this._cloudwatchConfig = value;
  }
  public resetCloudwatchConfig() {
    this._cloudwatchConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigInput() {
    return this._cloudwatchConfig
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined; 
  private __notificationConfigOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(this as any, "notification_config", true);
  public get notificationConfig() {
    return this.__notificationConfigOutput;
  }
  public putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined) {
    this._notificationConfig = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | undefined; 
  public get parameter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter') as any;
  }
  public set parameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | undefined) {
    this._parameter = value;
  }
  public resetParameter() {
    this._parameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#input SsmMaintenanceWindowTask#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // input - computed: false, optional: true, required: false
  private _input?: string | undefined; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string | undefined) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input
  }

  // name - computed: false, optional: true, required: false
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
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /**
  * automation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
  */
  readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
  /**
  * lambda_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
  */
  readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
  /**
  * run_command_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
  */
  readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
  /**
  * step_functions_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
  */
  readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct!.automationParameters),
    lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct!.lambdaParameters),
    run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct!.runCommandParameters),
    step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct!.stepFunctionsParameters),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // automation_parameters - computed: false, optional: true, required: false
  private _automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined; 
  private __automationParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(this as any, "automation_parameters", true);
  public get automationParameters() {
    return this.__automationParametersOutput;
  }
  public putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined) {
    this._automationParameters = value;
  }
  public resetAutomationParameters() {
    this._automationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationParametersInput() {
    return this._automationParameters
  }

  // lambda_parameters - computed: false, optional: true, required: false
  private _lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined; 
  private __lambdaParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(this as any, "lambda_parameters", true);
  public get lambdaParameters() {
    return this.__lambdaParametersOutput;
  }
  public putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined) {
    this._lambdaParameters = value;
  }
  public resetLambdaParameters() {
    this._lambdaParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaParametersInput() {
    return this._lambdaParameters
  }

  // run_command_parameters - computed: false, optional: true, required: false
  private _runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined; 
  private __runCommandParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(this as any, "run_command_parameters", true);
  public get runCommandParameters() {
    return this.__runCommandParametersOutput;
  }
  public putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined) {
    this._runCommandParameters = value;
  }
  public resetRunCommandParameters() {
    this._runCommandParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandParametersInput() {
    return this._runCommandParameters
  }

  // step_functions_parameters - computed: false, optional: true, required: false
  private _stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined; 
  private __stepFunctionsParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(this as any, "step_functions_parameters", true);
  public get stepFunctionsParameters() {
    return this.__stepFunctionsParametersOutput;
  }
  public putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined) {
    this._stepFunctionsParameters = value;
  }
  public resetStepFunctionsParameters() {
    this._stepFunctionsParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsParametersInput() {
    return this._stepFunctionsParameters
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task}
*/
export class SsmMaintenanceWindowTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssm_maintenance_window_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task.html aws_ssm_maintenance_window_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTaskConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._priority = config.priority;
    this._serviceRoleArn = config.serviceRoleArn;
    this._taskArn = config.taskArn;
    this._taskType = config.taskType;
    this._windowId = config.windowId;
    this._targets = config.targets;
    this._taskInvocationParameters = config.taskInvocationParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_concurrency - computed: false, optional: false, required: true
  private _maxConcurrency?: string; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency
  }

  // max_errors - computed: false, optional: false, required: true
  private _maxErrors?: string; 
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors
  }

  // name - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number | undefined; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number | undefined) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority
  }

  // service_role_arn - computed: true, optional: true, required: false
  private _serviceRoleArn?: string | undefined; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string | undefined) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn
  }

  // task_arn - computed: false, optional: false, required: true
  private _taskArn?: string; 
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }
  public set taskArn(value: string) {
    this._taskArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskArnInput() {
    return this._taskArn
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId?: string; 
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId
  }

  // targets - computed: false, optional: true, required: false
  private _targets?: SsmMaintenanceWindowTaskTargets[] | undefined; 
  public get targets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('targets') as any;
  }
  public set targets(value: SsmMaintenanceWindowTaskTargets[] | undefined) {
    this._targets = value;
  }
  public resetTargets() {
    this._targets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets
  }

  // task_invocation_parameters - computed: false, optional: true, required: false
  private _taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined; 
  private __taskInvocationParametersOutput = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this as any, "task_invocation_parameters", true);
  public get taskInvocationParameters() {
    return this.__taskInvocationParametersOutput;
  }
  public putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined) {
    this._taskInvocationParameters = value;
  }
  public resetTaskInvocationParameters() {
    this._taskInvocationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInvocationParametersInput() {
    return this._taskInvocationParameters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      task_arn: cdktf.stringToTerraform(this._taskArn),
      task_type: cdktf.stringToTerraform(this._taskType),
      window_id: cdktf.stringToTerraform(this._windowId),
      targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform)(this._targets),
      task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters),
    };
  }
}
