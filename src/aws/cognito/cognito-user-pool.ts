// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface CognitoUserPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#alias_attributes CognitoUserPool#alias_attributes}
  */
  readonly aliasAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#auto_verified_attributes CognitoUserPool#auto_verified_attributes}
  */
  readonly autoVerifiedAttributes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_message CognitoUserPool#email_verification_message}
  */
  readonly emailVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_verification_subject CognitoUserPool#email_verification_subject}
  */
  readonly emailVerificationSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mfa_configuration CognitoUserPool#mfa_configuration}
  */
  readonly mfaConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_authentication_message CognitoUserPool#sms_authentication_message}
  */
  readonly smsAuthenticationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_verification_message CognitoUserPool#sms_verification_message}
  */
  readonly smsVerificationMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags CognitoUserPool#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#tags_all CognitoUserPool#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_attributes CognitoUserPool#username_attributes}
  */
  readonly usernameAttributes?: string[];
  /**
  * account_recovery_setting block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#account_recovery_setting CognitoUserPool#account_recovery_setting}
  */
  readonly accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting;
  /**
  * admin_create_user_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#admin_create_user_config CognitoUserPool#admin_create_user_config}
  */
  readonly adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig;
  /**
  * device_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_configuration CognitoUserPool#device_configuration}
  */
  readonly deviceConfiguration?: CognitoUserPoolDeviceConfiguration;
  /**
  * email_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_configuration CognitoUserPool#email_configuration}
  */
  readonly emailConfiguration?: CognitoUserPoolEmailConfiguration;
  /**
  * lambda_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_config CognitoUserPool#lambda_config}
  */
  readonly lambdaConfig?: CognitoUserPoolLambdaConfig;
  /**
  * password_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#password_policy CognitoUserPool#password_policy}
  */
  readonly passwordPolicy?: CognitoUserPoolPasswordPolicy;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#schema CognitoUserPool#schema}
  */
  readonly schema?: CognitoUserPoolSchema[];
  /**
  * sms_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_configuration CognitoUserPool#sms_configuration}
  */
  readonly smsConfiguration?: CognitoUserPoolSmsConfiguration;
  /**
  * software_token_mfa_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#software_token_mfa_configuration CognitoUserPool#software_token_mfa_configuration}
  */
  readonly softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration;
  /**
  * user_pool_add_ons block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_pool_add_ons CognitoUserPool#user_pool_add_ons}
  */
  readonly userPoolAddOns?: CognitoUserPoolUserPoolAddOns;
  /**
  * username_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#username_configuration CognitoUserPool#username_configuration}
  */
  readonly usernameConfiguration?: CognitoUserPoolUsernameConfiguration;
  /**
  * verification_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verification_message_template CognitoUserPool#verification_message_template}
  */
  readonly verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate;
}
export interface CognitoUserPoolAccountRecoverySettingRecoveryMechanism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#priority CognitoUserPool#priority}
  */
  readonly priority: number;
}

export function cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform(struct?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}

export interface CognitoUserPoolAccountRecoverySetting {
  /**
  * recovery_mechanism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#recovery_mechanism CognitoUserPool#recovery_mechanism}
  */
  readonly recoveryMechanism: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[];
}

export function cognitoUserPoolAccountRecoverySettingToTerraform(struct?: CognitoUserPoolAccountRecoverySettingOutputReference | CognitoUserPoolAccountRecoverySetting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recovery_mechanism: cdktf.listMapper(cognitoUserPoolAccountRecoverySettingRecoveryMechanismToTerraform)(struct!.recoveryMechanism),
  }
}

export class CognitoUserPoolAccountRecoverySettingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // recovery_mechanism - computed: false, optional: false, required: true
  private _recoveryMechanism?: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]; 
  public get recoveryMechanism() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('recovery_mechanism') as any;
  }
  public set recoveryMechanism(value: CognitoUserPoolAccountRecoverySettingRecoveryMechanism[]) {
    this._recoveryMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryMechanismInput() {
    return this._recoveryMechanism
  }
}
export interface CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

export function cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference | CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}

export class CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // email_message - computed: false, optional: true, required: false
  private _emailMessage?: string | undefined; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string | undefined) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string | undefined; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string | undefined) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject
  }

  // sms_message - computed: false, optional: true, required: false
  private _smsMessage?: string | undefined; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string | undefined) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage
  }
}
export interface CognitoUserPoolAdminCreateUserConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#allow_admin_create_user_only CognitoUserPool#allow_admin_create_user_only}
  */
  readonly allowAdminCreateUserOnly?: boolean | cdktf.IResolvable;
  /**
  * invite_message_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#invite_message_template CognitoUserPool#invite_message_template}
  */
  readonly inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate;
}

export function cognitoUserPoolAdminCreateUserConfigToTerraform(struct?: CognitoUserPoolAdminCreateUserConfigOutputReference | CognitoUserPoolAdminCreateUserConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_admin_create_user_only: cdktf.booleanToTerraform(struct!.allowAdminCreateUserOnly),
    invite_message_template: cognitoUserPoolAdminCreateUserConfigInviteMessageTemplateToTerraform(struct!.inviteMessageTemplate),
  }
}

export class CognitoUserPoolAdminCreateUserConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_admin_create_user_only - computed: false, optional: true, required: false
  private _allowAdminCreateUserOnly?: boolean | cdktf.IResolvable | undefined; 
  public get allowAdminCreateUserOnly() {
    return this.getBooleanAttribute('allow_admin_create_user_only') as any;
  }
  public set allowAdminCreateUserOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._allowAdminCreateUserOnly = value;
  }
  public resetAllowAdminCreateUserOnly() {
    this._allowAdminCreateUserOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdminCreateUserOnlyInput() {
    return this._allowAdminCreateUserOnly
  }

  // invite_message_template - computed: false, optional: true, required: false
  private _inviteMessageTemplate?: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined; 
  private __inviteMessageTemplateOutput = new CognitoUserPoolAdminCreateUserConfigInviteMessageTemplateOutputReference(this as any, "invite_message_template", true);
  public get inviteMessageTemplate() {
    return this.__inviteMessageTemplateOutput;
  }
  public putInviteMessageTemplate(value: CognitoUserPoolAdminCreateUserConfigInviteMessageTemplate | undefined) {
    this._inviteMessageTemplate = value;
  }
  public resetInviteMessageTemplate() {
    this._inviteMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteMessageTemplateInput() {
    return this._inviteMessageTemplate
  }
}
export interface CognitoUserPoolDeviceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#challenge_required_on_new_device CognitoUserPool#challenge_required_on_new_device}
  */
  readonly challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#device_only_remembered_on_user_prompt CognitoUserPool#device_only_remembered_on_user_prompt}
  */
  readonly deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolDeviceConfigurationToTerraform(struct?: CognitoUserPoolDeviceConfigurationOutputReference | CognitoUserPoolDeviceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_required_on_new_device: cdktf.booleanToTerraform(struct!.challengeRequiredOnNewDevice),
    device_only_remembered_on_user_prompt: cdktf.booleanToTerraform(struct!.deviceOnlyRememberedOnUserPrompt),
  }
}

export class CognitoUserPoolDeviceConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // challenge_required_on_new_device - computed: false, optional: true, required: false
  private _challengeRequiredOnNewDevice?: boolean | cdktf.IResolvable | undefined; 
  public get challengeRequiredOnNewDevice() {
    return this.getBooleanAttribute('challenge_required_on_new_device') as any;
  }
  public set challengeRequiredOnNewDevice(value: boolean | cdktf.IResolvable | undefined) {
    this._challengeRequiredOnNewDevice = value;
  }
  public resetChallengeRequiredOnNewDevice() {
    this._challengeRequiredOnNewDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeRequiredOnNewDeviceInput() {
    return this._challengeRequiredOnNewDevice
  }

  // device_only_remembered_on_user_prompt - computed: false, optional: true, required: false
  private _deviceOnlyRememberedOnUserPrompt?: boolean | cdktf.IResolvable | undefined; 
  public get deviceOnlyRememberedOnUserPrompt() {
    return this.getBooleanAttribute('device_only_remembered_on_user_prompt') as any;
  }
  public set deviceOnlyRememberedOnUserPrompt(value: boolean | cdktf.IResolvable | undefined) {
    this._deviceOnlyRememberedOnUserPrompt = value;
  }
  public resetDeviceOnlyRememberedOnUserPrompt() {
    this._deviceOnlyRememberedOnUserPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceOnlyRememberedOnUserPromptInput() {
    return this._deviceOnlyRememberedOnUserPrompt
  }
}
export interface CognitoUserPoolEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#configuration_set CognitoUserPool#configuration_set}
  */
  readonly configurationSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_sending_account CognitoUserPool#email_sending_account}
  */
  readonly emailSendingAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#from_email_address CognitoUserPool#from_email_address}
  */
  readonly fromEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#reply_to_email_address CognitoUserPool#reply_to_email_address}
  */
  readonly replyToEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#source_arn CognitoUserPool#source_arn}
  */
  readonly sourceArn?: string;
}

export function cognitoUserPoolEmailConfigurationToTerraform(struct?: CognitoUserPoolEmailConfigurationOutputReference | CognitoUserPoolEmailConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_set: cdktf.stringToTerraform(struct!.configurationSet),
    email_sending_account: cdktf.stringToTerraform(struct!.emailSendingAccount),
    from_email_address: cdktf.stringToTerraform(struct!.fromEmailAddress),
    reply_to_email_address: cdktf.stringToTerraform(struct!.replyToEmailAddress),
    source_arn: cdktf.stringToTerraform(struct!.sourceArn),
  }
}

export class CognitoUserPoolEmailConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // configuration_set - computed: false, optional: true, required: false
  private _configurationSet?: string | undefined; 
  public get configurationSet() {
    return this.getStringAttribute('configuration_set');
  }
  public set configurationSet(value: string | undefined) {
    this._configurationSet = value;
  }
  public resetConfigurationSet() {
    this._configurationSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetInput() {
    return this._configurationSet
  }

  // email_sending_account - computed: false, optional: true, required: false
  private _emailSendingAccount?: string | undefined; 
  public get emailSendingAccount() {
    return this.getStringAttribute('email_sending_account');
  }
  public set emailSendingAccount(value: string | undefined) {
    this._emailSendingAccount = value;
  }
  public resetEmailSendingAccount() {
    this._emailSendingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSendingAccountInput() {
    return this._emailSendingAccount
  }

  // from_email_address - computed: false, optional: true, required: false
  private _fromEmailAddress?: string | undefined; 
  public get fromEmailAddress() {
    return this.getStringAttribute('from_email_address');
  }
  public set fromEmailAddress(value: string | undefined) {
    this._fromEmailAddress = value;
  }
  public resetFromEmailAddress() {
    this._fromEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailAddressInput() {
    return this._fromEmailAddress
  }

  // reply_to_email_address - computed: false, optional: true, required: false
  private _replyToEmailAddress?: string | undefined; 
  public get replyToEmailAddress() {
    return this.getStringAttribute('reply_to_email_address');
  }
  public set replyToEmailAddress(value: string | undefined) {
    this._replyToEmailAddress = value;
  }
  public resetReplyToEmailAddress() {
    this._replyToEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToEmailAddressInput() {
    return this._replyToEmailAddress
  }

  // source_arn - computed: false, optional: true, required: false
  private _sourceArn?: string | undefined; 
  public get sourceArn() {
    return this.getStringAttribute('source_arn');
  }
  public set sourceArn(value: string | undefined) {
    this._sourceArn = value;
  }
  public resetSourceArn() {
    this._sourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArnInput() {
    return this._sourceArn
  }
}
export interface CognitoUserPoolLambdaConfigCustomEmailSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

export function cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference | CognitoUserPoolLambdaConfigCustomEmailSender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export class CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion
  }
}
export interface CognitoUserPoolLambdaConfigCustomSmsSender {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_arn CognitoUserPool#lambda_arn}
  */
  readonly lambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#lambda_version CognitoUserPool#lambda_version}
  */
  readonly lambdaVersion: string;
}

export function cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct?: CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference | CognitoUserPoolLambdaConfigCustomSmsSender): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
    lambda_version: cdktf.stringToTerraform(struct!.lambdaVersion),
  }
}

export class CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn
  }

  // lambda_version - computed: false, optional: false, required: true
  private _lambdaVersion?: string; 
  public get lambdaVersion() {
    return this.getStringAttribute('lambda_version');
  }
  public set lambdaVersion(value: string) {
    this._lambdaVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaVersionInput() {
    return this._lambdaVersion
  }
}
export interface CognitoUserPoolLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#create_auth_challenge CognitoUserPool#create_auth_challenge}
  */
  readonly createAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_message CognitoUserPool#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#define_auth_challenge CognitoUserPool#define_auth_challenge}
  */
  readonly defineAuthChallenge?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#kms_key_id CognitoUserPool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_authentication CognitoUserPool#post_authentication}
  */
  readonly postAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#post_confirmation CognitoUserPool#post_confirmation}
  */
  readonly postConfirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_authentication CognitoUserPool#pre_authentication}
  */
  readonly preAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_sign_up CognitoUserPool#pre_sign_up}
  */
  readonly preSignUp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#pre_token_generation CognitoUserPool#pre_token_generation}
  */
  readonly preTokenGeneration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#user_migration CognitoUserPool#user_migration}
  */
  readonly userMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#verify_auth_challenge_response CognitoUserPool#verify_auth_challenge_response}
  */
  readonly verifyAuthChallengeResponse?: string;
  /**
  * custom_email_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_email_sender CognitoUserPool#custom_email_sender}
  */
  readonly customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender;
  /**
  * custom_sms_sender block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#custom_sms_sender CognitoUserPool#custom_sms_sender}
  */
  readonly customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender;
}

export function cognitoUserPoolLambdaConfigToTerraform(struct?: CognitoUserPoolLambdaConfigOutputReference | CognitoUserPoolLambdaConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_auth_challenge: cdktf.stringToTerraform(struct!.createAuthChallenge),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    define_auth_challenge: cdktf.stringToTerraform(struct!.defineAuthChallenge),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    post_authentication: cdktf.stringToTerraform(struct!.postAuthentication),
    post_confirmation: cdktf.stringToTerraform(struct!.postConfirmation),
    pre_authentication: cdktf.stringToTerraform(struct!.preAuthentication),
    pre_sign_up: cdktf.stringToTerraform(struct!.preSignUp),
    pre_token_generation: cdktf.stringToTerraform(struct!.preTokenGeneration),
    user_migration: cdktf.stringToTerraform(struct!.userMigration),
    verify_auth_challenge_response: cdktf.stringToTerraform(struct!.verifyAuthChallengeResponse),
    custom_email_sender: cognitoUserPoolLambdaConfigCustomEmailSenderToTerraform(struct!.customEmailSender),
    custom_sms_sender: cognitoUserPoolLambdaConfigCustomSmsSenderToTerraform(struct!.customSmsSender),
  }
}

export class CognitoUserPoolLambdaConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create_auth_challenge - computed: false, optional: true, required: false
  private _createAuthChallenge?: string | undefined; 
  public get createAuthChallenge() {
    return this.getStringAttribute('create_auth_challenge');
  }
  public set createAuthChallenge(value: string | undefined) {
    this._createAuthChallenge = value;
  }
  public resetCreateAuthChallenge() {
    this._createAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAuthChallengeInput() {
    return this._createAuthChallenge
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string | undefined; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string | undefined) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage
  }

  // define_auth_challenge - computed: false, optional: true, required: false
  private _defineAuthChallenge?: string | undefined; 
  public get defineAuthChallenge() {
    return this.getStringAttribute('define_auth_challenge');
  }
  public set defineAuthChallenge(value: string | undefined) {
    this._defineAuthChallenge = value;
  }
  public resetDefineAuthChallenge() {
    this._defineAuthChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defineAuthChallengeInput() {
    return this._defineAuthChallenge
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

  // post_authentication - computed: false, optional: true, required: false
  private _postAuthentication?: string | undefined; 
  public get postAuthentication() {
    return this.getStringAttribute('post_authentication');
  }
  public set postAuthentication(value: string | undefined) {
    this._postAuthentication = value;
  }
  public resetPostAuthentication() {
    this._postAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postAuthenticationInput() {
    return this._postAuthentication
  }

  // post_confirmation - computed: false, optional: true, required: false
  private _postConfirmation?: string | undefined; 
  public get postConfirmation() {
    return this.getStringAttribute('post_confirmation');
  }
  public set postConfirmation(value: string | undefined) {
    this._postConfirmation = value;
  }
  public resetPostConfirmation() {
    this._postConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postConfirmationInput() {
    return this._postConfirmation
  }

  // pre_authentication - computed: false, optional: true, required: false
  private _preAuthentication?: string | undefined; 
  public get preAuthentication() {
    return this.getStringAttribute('pre_authentication');
  }
  public set preAuthentication(value: string | undefined) {
    this._preAuthentication = value;
  }
  public resetPreAuthentication() {
    this._preAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preAuthenticationInput() {
    return this._preAuthentication
  }

  // pre_sign_up - computed: false, optional: true, required: false
  private _preSignUp?: string | undefined; 
  public get preSignUp() {
    return this.getStringAttribute('pre_sign_up');
  }
  public set preSignUp(value: string | undefined) {
    this._preSignUp = value;
  }
  public resetPreSignUp() {
    this._preSignUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSignUpInput() {
    return this._preSignUp
  }

  // pre_token_generation - computed: false, optional: true, required: false
  private _preTokenGeneration?: string | undefined; 
  public get preTokenGeneration() {
    return this.getStringAttribute('pre_token_generation');
  }
  public set preTokenGeneration(value: string | undefined) {
    this._preTokenGeneration = value;
  }
  public resetPreTokenGeneration() {
    this._preTokenGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preTokenGenerationInput() {
    return this._preTokenGeneration
  }

  // user_migration - computed: false, optional: true, required: false
  private _userMigration?: string | undefined; 
  public get userMigration() {
    return this.getStringAttribute('user_migration');
  }
  public set userMigration(value: string | undefined) {
    this._userMigration = value;
  }
  public resetUserMigration() {
    this._userMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMigrationInput() {
    return this._userMigration
  }

  // verify_auth_challenge_response - computed: false, optional: true, required: false
  private _verifyAuthChallengeResponse?: string | undefined; 
  public get verifyAuthChallengeResponse() {
    return this.getStringAttribute('verify_auth_challenge_response');
  }
  public set verifyAuthChallengeResponse(value: string | undefined) {
    this._verifyAuthChallengeResponse = value;
  }
  public resetVerifyAuthChallengeResponse() {
    this._verifyAuthChallengeResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAuthChallengeResponseInput() {
    return this._verifyAuthChallengeResponse
  }

  // custom_email_sender - computed: false, optional: true, required: false
  private _customEmailSender?: CognitoUserPoolLambdaConfigCustomEmailSender | undefined; 
  private __customEmailSenderOutput = new CognitoUserPoolLambdaConfigCustomEmailSenderOutputReference(this as any, "custom_email_sender", true);
  public get customEmailSender() {
    return this.__customEmailSenderOutput;
  }
  public putCustomEmailSender(value: CognitoUserPoolLambdaConfigCustomEmailSender | undefined) {
    this._customEmailSender = value;
  }
  public resetCustomEmailSender() {
    this._customEmailSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEmailSenderInput() {
    return this._customEmailSender
  }

  // custom_sms_sender - computed: false, optional: true, required: false
  private _customSmsSender?: CognitoUserPoolLambdaConfigCustomSmsSender | undefined; 
  private __customSmsSenderOutput = new CognitoUserPoolLambdaConfigCustomSmsSenderOutputReference(this as any, "custom_sms_sender", true);
  public get customSmsSender() {
    return this.__customSmsSenderOutput;
  }
  public putCustomSmsSender(value: CognitoUserPoolLambdaConfigCustomSmsSender | undefined) {
    this._customSmsSender = value;
  }
  public resetCustomSmsSender() {
    this._customSmsSender = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSmsSenderInput() {
    return this._customSmsSender
  }
}
export interface CognitoUserPoolPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#minimum_length CognitoUserPool#minimum_length}
  */
  readonly minimumLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_lowercase CognitoUserPool#require_lowercase}
  */
  readonly requireLowercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_numbers CognitoUserPool#require_numbers}
  */
  readonly requireNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_symbols CognitoUserPool#require_symbols}
  */
  readonly requireSymbols?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#require_uppercase CognitoUserPool#require_uppercase}
  */
  readonly requireUppercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#temporary_password_validity_days CognitoUserPool#temporary_password_validity_days}
  */
  readonly temporaryPasswordValidityDays?: number;
}

export function cognitoUserPoolPasswordPolicyToTerraform(struct?: CognitoUserPoolPasswordPolicyOutputReference | CognitoUserPoolPasswordPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_length: cdktf.numberToTerraform(struct!.minimumLength),
    require_lowercase: cdktf.booleanToTerraform(struct!.requireLowercase),
    require_numbers: cdktf.booleanToTerraform(struct!.requireNumbers),
    require_symbols: cdktf.booleanToTerraform(struct!.requireSymbols),
    require_uppercase: cdktf.booleanToTerraform(struct!.requireUppercase),
    temporary_password_validity_days: cdktf.numberToTerraform(struct!.temporaryPasswordValidityDays),
  }
}

export class CognitoUserPoolPasswordPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // minimum_length - computed: false, optional: true, required: false
  private _minimumLength?: number | undefined; 
  public get minimumLength() {
    return this.getNumberAttribute('minimum_length');
  }
  public set minimumLength(value: number | undefined) {
    this._minimumLength = value;
  }
  public resetMinimumLength() {
    this._minimumLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumLengthInput() {
    return this._minimumLength
  }

  // require_lowercase - computed: false, optional: true, required: false
  private _requireLowercase?: boolean | cdktf.IResolvable | undefined; 
  public get requireLowercase() {
    return this.getBooleanAttribute('require_lowercase') as any;
  }
  public set requireLowercase(value: boolean | cdktf.IResolvable | undefined) {
    this._requireLowercase = value;
  }
  public resetRequireLowercase() {
    this._requireLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireLowercaseInput() {
    return this._requireLowercase
  }

  // require_numbers - computed: false, optional: true, required: false
  private _requireNumbers?: boolean | cdktf.IResolvable | undefined; 
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers') as any;
  }
  public set requireNumbers(value: boolean | cdktf.IResolvable | undefined) {
    this._requireNumbers = value;
  }
  public resetRequireNumbers() {
    this._requireNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumbersInput() {
    return this._requireNumbers
  }

  // require_symbols - computed: false, optional: true, required: false
  private _requireSymbols?: boolean | cdktf.IResolvable | undefined; 
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols') as any;
  }
  public set requireSymbols(value: boolean | cdktf.IResolvable | undefined) {
    this._requireSymbols = value;
  }
  public resetRequireSymbols() {
    this._requireSymbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSymbolsInput() {
    return this._requireSymbols
  }

  // require_uppercase - computed: false, optional: true, required: false
  private _requireUppercase?: boolean | cdktf.IResolvable | undefined; 
  public get requireUppercase() {
    return this.getBooleanAttribute('require_uppercase') as any;
  }
  public set requireUppercase(value: boolean | cdktf.IResolvable | undefined) {
    this._requireUppercase = value;
  }
  public resetRequireUppercase() {
    this._requireUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireUppercaseInput() {
    return this._requireUppercase
  }

  // temporary_password_validity_days - computed: false, optional: true, required: false
  private _temporaryPasswordValidityDays?: number | undefined; 
  public get temporaryPasswordValidityDays() {
    return this.getNumberAttribute('temporary_password_validity_days');
  }
  public set temporaryPasswordValidityDays(value: number | undefined) {
    this._temporaryPasswordValidityDays = value;
  }
  public resetTemporaryPasswordValidityDays() {
    this._temporaryPasswordValidityDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryPasswordValidityDaysInput() {
    return this._temporaryPasswordValidityDays
  }
}
export interface CognitoUserPoolSchemaNumberAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_value CognitoUserPool#max_value}
  */
  readonly maxValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_value CognitoUserPool#min_value}
  */
  readonly minValue?: string;
}

export function cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference | CognitoUserPoolSchemaNumberAttributeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.stringToTerraform(struct!.maxValue),
    min_value: cdktf.stringToTerraform(struct!.minValue),
  }
}

export class CognitoUserPoolSchemaNumberAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: string | undefined; 
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }
  public set maxValue(value: string | undefined) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: string | undefined; 
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
  public set minValue(value: string | undefined) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue
  }
}
export interface CognitoUserPoolSchemaStringAttributeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#max_length CognitoUserPool#max_length}
  */
  readonly maxLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#min_length CognitoUserPool#min_length}
  */
  readonly minLength?: string;
}

export function cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct?: CognitoUserPoolSchemaStringAttributeConstraintsOutputReference | CognitoUserPoolSchemaStringAttributeConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    min_length: cdktf.stringToTerraform(struct!.minLength),
  }
}

export class CognitoUserPoolSchemaStringAttributeConstraintsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string | undefined; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string | undefined) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string | undefined; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string | undefined) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength
  }
}
export interface CognitoUserPoolSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#attribute_data_type CognitoUserPool#attribute_data_type}
  */
  readonly attributeDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#developer_only_attribute CognitoUserPool#developer_only_attribute}
  */
  readonly developerOnlyAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#mutable CognitoUserPool#mutable}
  */
  readonly mutable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#name CognitoUserPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#required CognitoUserPool#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * number_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#number_attribute_constraints CognitoUserPool#number_attribute_constraints}
  */
  readonly numberAttributeConstraints?: CognitoUserPoolSchemaNumberAttributeConstraints;
  /**
  * string_attribute_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#string_attribute_constraints CognitoUserPool#string_attribute_constraints}
  */
  readonly stringAttributeConstraints?: CognitoUserPoolSchemaStringAttributeConstraints;
}

export function cognitoUserPoolSchemaToTerraform(struct?: CognitoUserPoolSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_data_type: cdktf.stringToTerraform(struct!.attributeDataType),
    developer_only_attribute: cdktf.booleanToTerraform(struct!.developerOnlyAttribute),
    mutable: cdktf.booleanToTerraform(struct!.mutable),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    number_attribute_constraints: cognitoUserPoolSchemaNumberAttributeConstraintsToTerraform(struct!.numberAttributeConstraints),
    string_attribute_constraints: cognitoUserPoolSchemaStringAttributeConstraintsToTerraform(struct!.stringAttributeConstraints),
  }
}

export interface CognitoUserPoolSmsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#external_id CognitoUserPool#external_id}
  */
  readonly externalId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sns_caller_arn CognitoUserPool#sns_caller_arn}
  */
  readonly snsCallerArn: string;
}

export function cognitoUserPoolSmsConfigurationToTerraform(struct?: CognitoUserPoolSmsConfigurationOutputReference | CognitoUserPoolSmsConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    sns_caller_arn: cdktf.stringToTerraform(struct!.snsCallerArn),
  }
}

export class CognitoUserPoolSmsConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // external_id - computed: false, optional: false, required: true
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId
  }

  // sns_caller_arn - computed: false, optional: false, required: true
  private _snsCallerArn?: string; 
  public get snsCallerArn() {
    return this.getStringAttribute('sns_caller_arn');
  }
  public set snsCallerArn(value: string) {
    this._snsCallerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snsCallerArnInput() {
    return this._snsCallerArn
  }
}
export interface CognitoUserPoolSoftwareTokenMfaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#enabled CognitoUserPool#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(struct?: CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference | CognitoUserPoolSoftwareTokenMfaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface CognitoUserPoolUserPoolAddOns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#advanced_security_mode CognitoUserPool#advanced_security_mode}
  */
  readonly advancedSecurityMode: string;
}

export function cognitoUserPoolUserPoolAddOnsToTerraform(struct?: CognitoUserPoolUserPoolAddOnsOutputReference | CognitoUserPoolUserPoolAddOns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_security_mode: cdktf.stringToTerraform(struct!.advancedSecurityMode),
  }
}

export class CognitoUserPoolUserPoolAddOnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // advanced_security_mode - computed: false, optional: false, required: true
  private _advancedSecurityMode?: string; 
  public get advancedSecurityMode() {
    return this.getStringAttribute('advanced_security_mode');
  }
  public set advancedSecurityMode(value: string) {
    this._advancedSecurityMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityModeInput() {
    return this._advancedSecurityMode
  }
}
export interface CognitoUserPoolUsernameConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#case_sensitive CognitoUserPool#case_sensitive}
  */
  readonly caseSensitive: boolean | cdktf.IResolvable;
}

export function cognitoUserPoolUsernameConfigurationToTerraform(struct?: CognitoUserPoolUsernameConfigurationOutputReference | CognitoUserPoolUsernameConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
  }
}

export class CognitoUserPoolUsernameConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // case_sensitive - computed: false, optional: false, required: true
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive') as any;
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive
  }
}
export interface CognitoUserPoolVerificationMessageTemplate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#default_email_option CognitoUserPool#default_email_option}
  */
  readonly defaultEmailOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message CognitoUserPool#email_message}
  */
  readonly emailMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_message_by_link CognitoUserPool#email_message_by_link}
  */
  readonly emailMessageByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject CognitoUserPool#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#email_subject_by_link CognitoUserPool#email_subject_by_link}
  */
  readonly emailSubjectByLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html#sms_message CognitoUserPool#sms_message}
  */
  readonly smsMessage?: string;
}

export function cognitoUserPoolVerificationMessageTemplateToTerraform(struct?: CognitoUserPoolVerificationMessageTemplateOutputReference | CognitoUserPoolVerificationMessageTemplate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_email_option: cdktf.stringToTerraform(struct!.defaultEmailOption),
    email_message: cdktf.stringToTerraform(struct!.emailMessage),
    email_message_by_link: cdktf.stringToTerraform(struct!.emailMessageByLink),
    email_subject: cdktf.stringToTerraform(struct!.emailSubject),
    email_subject_by_link: cdktf.stringToTerraform(struct!.emailSubjectByLink),
    sms_message: cdktf.stringToTerraform(struct!.smsMessage),
  }
}

export class CognitoUserPoolVerificationMessageTemplateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default_email_option - computed: false, optional: true, required: false
  private _defaultEmailOption?: string | undefined; 
  public get defaultEmailOption() {
    return this.getStringAttribute('default_email_option');
  }
  public set defaultEmailOption(value: string | undefined) {
    this._defaultEmailOption = value;
  }
  public resetDefaultEmailOption() {
    this._defaultEmailOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEmailOptionInput() {
    return this._defaultEmailOption
  }

  // email_message - computed: true, optional: true, required: false
  private _emailMessage?: string | undefined; 
  public get emailMessage() {
    return this.getStringAttribute('email_message');
  }
  public set emailMessage(value: string | undefined) {
    this._emailMessage = value;
  }
  public resetEmailMessage() {
    this._emailMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageInput() {
    return this._emailMessage
  }

  // email_message_by_link - computed: true, optional: true, required: false
  private _emailMessageByLink?: string | undefined; 
  public get emailMessageByLink() {
    return this.getStringAttribute('email_message_by_link');
  }
  public set emailMessageByLink(value: string | undefined) {
    this._emailMessageByLink = value;
  }
  public resetEmailMessageByLink() {
    this._emailMessageByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailMessageByLinkInput() {
    return this._emailMessageByLink
  }

  // email_subject - computed: true, optional: true, required: false
  private _emailSubject?: string | undefined; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string | undefined) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject
  }

  // email_subject_by_link - computed: true, optional: true, required: false
  private _emailSubjectByLink?: string | undefined; 
  public get emailSubjectByLink() {
    return this.getStringAttribute('email_subject_by_link');
  }
  public set emailSubjectByLink(value: string | undefined) {
    this._emailSubjectByLink = value;
  }
  public resetEmailSubjectByLink() {
    this._emailSubjectByLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectByLinkInput() {
    return this._emailSubjectByLink
  }

  // sms_message - computed: true, optional: true, required: false
  private _smsMessage?: string | undefined; 
  public get smsMessage() {
    return this.getStringAttribute('sms_message');
  }
  public set smsMessage(value: string | undefined) {
    this._smsMessage = value;
  }
  public resetSmsMessage() {
    this._smsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsMessageInput() {
    return this._smsMessage
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool}
*/
export class CognitoUserPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_user_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool.html aws_cognito_user_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoUserPoolConfig
  */
  public constructor(scope: Construct, id: string, config: CognitoUserPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_pool',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aliasAttributes = config.aliasAttributes;
    this._autoVerifiedAttributes = config.autoVerifiedAttributes;
    this._emailVerificationMessage = config.emailVerificationMessage;
    this._emailVerificationSubject = config.emailVerificationSubject;
    this._mfaConfiguration = config.mfaConfiguration;
    this._name = config.name;
    this._smsAuthenticationMessage = config.smsAuthenticationMessage;
    this._smsVerificationMessage = config.smsVerificationMessage;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._usernameAttributes = config.usernameAttributes;
    this._accountRecoverySetting = config.accountRecoverySetting;
    this._adminCreateUserConfig = config.adminCreateUserConfig;
    this._deviceConfiguration = config.deviceConfiguration;
    this._emailConfiguration = config.emailConfiguration;
    this._lambdaConfig = config.lambdaConfig;
    this._passwordPolicy = config.passwordPolicy;
    this._schema = config.schema;
    this._smsConfiguration = config.smsConfiguration;
    this._softwareTokenMfaConfiguration = config.softwareTokenMfaConfiguration;
    this._userPoolAddOns = config.userPoolAddOns;
    this._usernameConfiguration = config.usernameConfiguration;
    this._verificationMessageTemplate = config.verificationMessageTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_attributes - computed: false, optional: true, required: false
  private _aliasAttributes?: string[] | undefined; 
  public get aliasAttributes() {
    return this.getListAttribute('alias_attributes');
  }
  public set aliasAttributes(value: string[] | undefined) {
    this._aliasAttributes = value;
  }
  public resetAliasAttributes() {
    this._aliasAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAttributesInput() {
    return this._aliasAttributes
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_verified_attributes - computed: false, optional: true, required: false
  private _autoVerifiedAttributes?: string[] | undefined; 
  public get autoVerifiedAttributes() {
    return this.getListAttribute('auto_verified_attributes');
  }
  public set autoVerifiedAttributes(value: string[] | undefined) {
    this._autoVerifiedAttributes = value;
  }
  public resetAutoVerifiedAttributes() {
    this._autoVerifiedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVerifiedAttributesInput() {
    return this._autoVerifiedAttributes
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // custom_domain - computed: true, optional: false, required: false
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // email_verification_message - computed: true, optional: true, required: false
  private _emailVerificationMessage?: string | undefined; 
  public get emailVerificationMessage() {
    return this.getStringAttribute('email_verification_message');
  }
  public set emailVerificationMessage(value: string | undefined) {
    this._emailVerificationMessage = value;
  }
  public resetEmailVerificationMessage() {
    this._emailVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationMessageInput() {
    return this._emailVerificationMessage
  }

  // email_verification_subject - computed: true, optional: true, required: false
  private _emailVerificationSubject?: string | undefined; 
  public get emailVerificationSubject() {
    return this.getStringAttribute('email_verification_subject');
  }
  public set emailVerificationSubject(value: string | undefined) {
    this._emailVerificationSubject = value;
  }
  public resetEmailVerificationSubject() {
    this._emailVerificationSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationSubjectInput() {
    return this._emailVerificationSubject
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // estimated_number_of_users - computed: true, optional: false, required: false
  public get estimatedNumberOfUsers() {
    return this.getNumberAttribute('estimated_number_of_users');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // mfa_configuration - computed: false, optional: true, required: false
  private _mfaConfiguration?: string | undefined; 
  public get mfaConfiguration() {
    return this.getStringAttribute('mfa_configuration');
  }
  public set mfaConfiguration(value: string | undefined) {
    this._mfaConfiguration = value;
  }
  public resetMfaConfiguration() {
    this._mfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaConfigurationInput() {
    return this._mfaConfiguration
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

  // sms_authentication_message - computed: false, optional: true, required: false
  private _smsAuthenticationMessage?: string | undefined; 
  public get smsAuthenticationMessage() {
    return this.getStringAttribute('sms_authentication_message');
  }
  public set smsAuthenticationMessage(value: string | undefined) {
    this._smsAuthenticationMessage = value;
  }
  public resetSmsAuthenticationMessage() {
    this._smsAuthenticationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsAuthenticationMessageInput() {
    return this._smsAuthenticationMessage
  }

  // sms_verification_message - computed: true, optional: true, required: false
  private _smsVerificationMessage?: string | undefined; 
  public get smsVerificationMessage() {
    return this.getStringAttribute('sms_verification_message');
  }
  public set smsVerificationMessage(value: string | undefined) {
    this._smsVerificationMessage = value;
  }
  public resetSmsVerificationMessage() {
    this._smsVerificationMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsVerificationMessageInput() {
    return this._smsVerificationMessage
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

  // username_attributes - computed: false, optional: true, required: false
  private _usernameAttributes?: string[] | undefined; 
  public get usernameAttributes() {
    return this.getListAttribute('username_attributes');
  }
  public set usernameAttributes(value: string[] | undefined) {
    this._usernameAttributes = value;
  }
  public resetUsernameAttributes() {
    this._usernameAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAttributesInput() {
    return this._usernameAttributes
  }

  // account_recovery_setting - computed: false, optional: true, required: false
  private _accountRecoverySetting?: CognitoUserPoolAccountRecoverySetting | undefined; 
  private __accountRecoverySettingOutput = new CognitoUserPoolAccountRecoverySettingOutputReference(this as any, "account_recovery_setting", true);
  public get accountRecoverySetting() {
    return this.__accountRecoverySettingOutput;
  }
  public putAccountRecoverySetting(value: CognitoUserPoolAccountRecoverySetting | undefined) {
    this._accountRecoverySetting = value;
  }
  public resetAccountRecoverySetting() {
    this._accountRecoverySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRecoverySettingInput() {
    return this._accountRecoverySetting
  }

  // admin_create_user_config - computed: false, optional: true, required: false
  private _adminCreateUserConfig?: CognitoUserPoolAdminCreateUserConfig | undefined; 
  private __adminCreateUserConfigOutput = new CognitoUserPoolAdminCreateUserConfigOutputReference(this as any, "admin_create_user_config", true);
  public get adminCreateUserConfig() {
    return this.__adminCreateUserConfigOutput;
  }
  public putAdminCreateUserConfig(value: CognitoUserPoolAdminCreateUserConfig | undefined) {
    this._adminCreateUserConfig = value;
  }
  public resetAdminCreateUserConfig() {
    this._adminCreateUserConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCreateUserConfigInput() {
    return this._adminCreateUserConfig
  }

  // device_configuration - computed: false, optional: true, required: false
  private _deviceConfiguration?: CognitoUserPoolDeviceConfiguration | undefined; 
  private __deviceConfigurationOutput = new CognitoUserPoolDeviceConfigurationOutputReference(this as any, "device_configuration", true);
  public get deviceConfiguration() {
    return this.__deviceConfigurationOutput;
  }
  public putDeviceConfiguration(value: CognitoUserPoolDeviceConfiguration | undefined) {
    this._deviceConfiguration = value;
  }
  public resetDeviceConfiguration() {
    this._deviceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceConfigurationInput() {
    return this._deviceConfiguration
  }

  // email_configuration - computed: false, optional: true, required: false
  private _emailConfiguration?: CognitoUserPoolEmailConfiguration | undefined; 
  private __emailConfigurationOutput = new CognitoUserPoolEmailConfigurationOutputReference(this as any, "email_configuration", true);
  public get emailConfiguration() {
    return this.__emailConfigurationOutput;
  }
  public putEmailConfiguration(value: CognitoUserPoolEmailConfiguration | undefined) {
    this._emailConfiguration = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig?: CognitoUserPoolLambdaConfig | undefined; 
  private __lambdaConfigOutput = new CognitoUserPoolLambdaConfigOutputReference(this as any, "lambda_config", true);
  public get lambdaConfig() {
    return this.__lambdaConfigOutput;
  }
  public putLambdaConfig(value: CognitoUserPoolLambdaConfig | undefined) {
    this._lambdaConfig = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: CognitoUserPoolPasswordPolicy | undefined; 
  private __passwordPolicyOutput = new CognitoUserPoolPasswordPolicyOutputReference(this as any, "password_policy", true);
  public get passwordPolicy() {
    return this.__passwordPolicyOutput;
  }
  public putPasswordPolicy(value: CognitoUserPoolPasswordPolicy | undefined) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: CognitoUserPoolSchema[] | undefined; 
  public get schema() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schema') as any;
  }
  public set schema(value: CognitoUserPoolSchema[] | undefined) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // sms_configuration - computed: false, optional: true, required: false
  private _smsConfiguration?: CognitoUserPoolSmsConfiguration | undefined; 
  private __smsConfigurationOutput = new CognitoUserPoolSmsConfigurationOutputReference(this as any, "sms_configuration", true);
  public get smsConfiguration() {
    return this.__smsConfigurationOutput;
  }
  public putSmsConfiguration(value: CognitoUserPoolSmsConfiguration | undefined) {
    this._smsConfiguration = value;
  }
  public resetSmsConfiguration() {
    this._smsConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsConfigurationInput() {
    return this._smsConfiguration
  }

  // software_token_mfa_configuration - computed: false, optional: true, required: false
  private _softwareTokenMfaConfiguration?: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined; 
  private __softwareTokenMfaConfigurationOutput = new CognitoUserPoolSoftwareTokenMfaConfigurationOutputReference(this as any, "software_token_mfa_configuration", true);
  public get softwareTokenMfaConfiguration() {
    return this.__softwareTokenMfaConfigurationOutput;
  }
  public putSoftwareTokenMfaConfiguration(value: CognitoUserPoolSoftwareTokenMfaConfiguration | undefined) {
    this._softwareTokenMfaConfiguration = value;
  }
  public resetSoftwareTokenMfaConfiguration() {
    this._softwareTokenMfaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareTokenMfaConfigurationInput() {
    return this._softwareTokenMfaConfiguration
  }

  // user_pool_add_ons - computed: false, optional: true, required: false
  private _userPoolAddOns?: CognitoUserPoolUserPoolAddOns | undefined; 
  private __userPoolAddOnsOutput = new CognitoUserPoolUserPoolAddOnsOutputReference(this as any, "user_pool_add_ons", true);
  public get userPoolAddOns() {
    return this.__userPoolAddOnsOutput;
  }
  public putUserPoolAddOns(value: CognitoUserPoolUserPoolAddOns | undefined) {
    this._userPoolAddOns = value;
  }
  public resetUserPoolAddOns() {
    this._userPoolAddOns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolAddOnsInput() {
    return this._userPoolAddOns
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration?: CognitoUserPoolUsernameConfiguration | undefined; 
  private __usernameConfigurationOutput = new CognitoUserPoolUsernameConfigurationOutputReference(this as any, "username_configuration", true);
  public get usernameConfiguration() {
    return this.__usernameConfigurationOutput;
  }
  public putUsernameConfiguration(value: CognitoUserPoolUsernameConfiguration | undefined) {
    this._usernameConfiguration = value;
  }
  public resetUsernameConfiguration() {
    this._usernameConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameConfigurationInput() {
    return this._usernameConfiguration
  }

  // verification_message_template - computed: false, optional: true, required: false
  private _verificationMessageTemplate?: CognitoUserPoolVerificationMessageTemplate | undefined; 
  private __verificationMessageTemplateOutput = new CognitoUserPoolVerificationMessageTemplateOutputReference(this as any, "verification_message_template", true);
  public get verificationMessageTemplate() {
    return this.__verificationMessageTemplateOutput;
  }
  public putVerificationMessageTemplate(value: CognitoUserPoolVerificationMessageTemplate | undefined) {
    this._verificationMessageTemplate = value;
  }
  public resetVerificationMessageTemplate() {
    this._verificationMessageTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMessageTemplateInput() {
    return this._verificationMessageTemplate
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._aliasAttributes),
      auto_verified_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._autoVerifiedAttributes),
      email_verification_message: cdktf.stringToTerraform(this._emailVerificationMessage),
      email_verification_subject: cdktf.stringToTerraform(this._emailVerificationSubject),
      mfa_configuration: cdktf.stringToTerraform(this._mfaConfiguration),
      name: cdktf.stringToTerraform(this._name),
      sms_authentication_message: cdktf.stringToTerraform(this._smsAuthenticationMessage),
      sms_verification_message: cdktf.stringToTerraform(this._smsVerificationMessage),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      username_attributes: cdktf.listMapper(cdktf.stringToTerraform)(this._usernameAttributes),
      account_recovery_setting: cognitoUserPoolAccountRecoverySettingToTerraform(this._accountRecoverySetting),
      admin_create_user_config: cognitoUserPoolAdminCreateUserConfigToTerraform(this._adminCreateUserConfig),
      device_configuration: cognitoUserPoolDeviceConfigurationToTerraform(this._deviceConfiguration),
      email_configuration: cognitoUserPoolEmailConfigurationToTerraform(this._emailConfiguration),
      lambda_config: cognitoUserPoolLambdaConfigToTerraform(this._lambdaConfig),
      password_policy: cognitoUserPoolPasswordPolicyToTerraform(this._passwordPolicy),
      schema: cdktf.listMapper(cognitoUserPoolSchemaToTerraform)(this._schema),
      sms_configuration: cognitoUserPoolSmsConfigurationToTerraform(this._smsConfiguration),
      software_token_mfa_configuration: cognitoUserPoolSoftwareTokenMfaConfigurationToTerraform(this._softwareTokenMfaConfiguration),
      user_pool_add_ons: cognitoUserPoolUserPoolAddOnsToTerraform(this._userPoolAddOns),
      username_configuration: cognitoUserPoolUsernameConfigurationToTerraform(this._usernameConfiguration),
      verification_message_template: cognitoUserPoolVerificationMessageTemplateToTerraform(this._verificationMessageTemplate),
    };
  }
}
