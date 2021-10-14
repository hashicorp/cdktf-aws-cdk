// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFormation
*/
export namespace CloudFormation {
  export interface CloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#capabilities CloudformationStack#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#disable_rollback CloudformationStack#disable_rollback}
    */
    readonly disableRollback?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#iam_role_arn CloudformationStack#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#name CloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#notification_arns CloudformationStack#notification_arns}
    */
    readonly notificationArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#on_failure CloudformationStack#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#parameters CloudformationStack#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_body CloudformationStack#policy_body}
    */
    readonly policyBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#policy_url CloudformationStack#policy_url}
    */
    readonly policyUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags CloudformationStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#tags_all CloudformationStack#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_body CloudformationStack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#template_url CloudformationStack#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeout_in_minutes CloudformationStack#timeout_in_minutes}
    */
    readonly timeoutInMinutes?: number;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#timeouts CloudformationStack#timeouts}
    */
    readonly timeouts?: CloudformationStackTimeouts;
  }
  export interface CloudformationStackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#create CloudformationStack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#delete CloudformationStack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html#update CloudformationStack#update}
    */
    readonly update?: string;
  }

  function cloudformationStackTimeoutsToTerraform(struct?: CloudformationStackTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack}
  */
  export class CloudformationStack extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack.html aws_cloudformation_stack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._capabilities = config.capabilities;
      this._disableRollback = config.disableRollback;
      this._iamRoleArn = config.iamRoleArn;
      this._name = config.name;
      this._notificationArns = config.notificationArns;
      this._onFailure = config.onFailure;
      this._parameters = config.parameters;
      this._policyBody = config.policyBody;
      this._policyUrl = config.policyUrl;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._templateBody = config.templateBody;
      this._templateUrl = config.templateUrl;
      this._timeoutInMinutes = config.timeoutInMinutes;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: false, optional: true, required: false
    private _capabilities?: string[];
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[] ) {
      this._capabilities = value;
    }
    public resetCapabilities() {
      this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
      return this._capabilities
    }

    // disable_rollback - computed: false, optional: true, required: false
    private _disableRollback?: boolean | cdktf.IResolvable;
    public get disableRollback() {
      return this.getBooleanAttribute('disable_rollback');
    }
    public set disableRollback(value: boolean | cdktf.IResolvable ) {
      this._disableRollback = value;
    }
    public resetDisableRollback() {
      this._disableRollback = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableRollbackInput() {
      return this._disableRollback
    }

    // iam_role_arn - computed: false, optional: true, required: false
    private _iamRoleArn?: string;
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string ) {
      this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
      this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
      return this._iamRoleArn
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

    // notification_arns - computed: false, optional: true, required: false
    private _notificationArns?: string[];
    public get notificationArns() {
      return this.getListAttribute('notification_arns');
    }
    public set notificationArns(value: string[] ) {
      this._notificationArns = value;
    }
    public resetNotificationArns() {
      this._notificationArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArnsInput() {
      return this._notificationArns
    }

    // on_failure - computed: false, optional: true, required: false
    private _onFailure?: string;
    public get onFailure() {
      return this.getStringAttribute('on_failure');
    }
    public set onFailure(value: string ) {
      this._onFailure = value;
    }
    public resetOnFailure() {
      this._onFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onFailureInput() {
      return this._onFailure
    }

    // outputs - computed: true, optional: false, required: false
    public outputs(key: string): string {
      return new cdktf.StringMap(this, 'outputs').lookup(key);
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable
    public get parameters(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('parameters') as any; // Getting the computed value is not yet implemented
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // policy_body - computed: true, optional: true, required: false
    private _policyBody?: string;
    public get policyBody() {
      return this.getStringAttribute('policy_body');
    }
    public set policyBody(value: string) {
      this._policyBody = value;
    }
    public resetPolicyBody() {
      this._policyBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyBodyInput() {
      return this._policyBody
    }

    // policy_url - computed: false, optional: true, required: false
    private _policyUrl?: string;
    public get policyUrl() {
      return this.getStringAttribute('policy_url');
    }
    public set policyUrl(value: string ) {
      this._policyUrl = value;
    }
    public resetPolicyUrl() {
      this._policyUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyUrlInput() {
      return this._policyUrl
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

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string;
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string;
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string ) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // timeout_in_minutes - computed: false, optional: true, required: false
    private _timeoutInMinutes?: number;
    public get timeoutInMinutes() {
      return this.getNumberAttribute('timeout_in_minutes');
    }
    public set timeoutInMinutes(value: number ) {
      this._timeoutInMinutes = value;
    }
    public resetTimeoutInMinutes() {
      this._timeoutInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInMinutesInput() {
      return this._timeoutInMinutes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: CloudformationStackTimeouts ) {
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
        capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
        disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
        iam_role_arn: cdktf.stringToTerraform(this._iamRoleArn),
        name: cdktf.stringToTerraform(this._name),
        notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
        on_failure: cdktf.stringToTerraform(this._onFailure),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        policy_body: cdktf.stringToTerraform(this._policyBody),
        policy_url: cdktf.stringToTerraform(this._policyUrl),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_url: cdktf.stringToTerraform(this._templateUrl),
        timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
        timeouts: cloudformationStackTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationStackSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#administration_role_arn CloudformationStackSet#administration_role_arn}
    */
    readonly administrationRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#capabilities CloudformationStackSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#description CloudformationStackSet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#execution_role_name CloudformationStackSet#execution_role_name}
    */
    readonly executionRoleName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#name CloudformationStackSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#parameters CloudformationStackSet#parameters}
    */
    readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#permission_model CloudformationStackSet#permission_model}
    */
    readonly permissionModel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags CloudformationStackSet#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#tags_all CloudformationStackSet#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_body CloudformationStackSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#template_url CloudformationStackSet#template_url}
    */
    readonly templateUrl?: string;
    /**
    * auto_deployment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#auto_deployment CloudformationStackSet#auto_deployment}
    */
    readonly autoDeployment?: CloudformationStackSetAutoDeployment[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#timeouts CloudformationStackSet#timeouts}
    */
    readonly timeouts?: CloudformationStackSetTimeouts;
  }
  export interface CloudformationStackSetAutoDeployment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#enabled CloudformationStackSet#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}
    */
    readonly retainStacksOnAccountRemoval?: boolean | cdktf.IResolvable;
  }

  function cloudformationStackSetAutoDeploymentToTerraform(struct?: CloudformationStackSetAutoDeployment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct!.retainStacksOnAccountRemoval),
    }
  }

  export interface CloudformationStackSetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html#update CloudformationStackSet#update}
    */
    readonly update?: string;
  }

  function cloudformationStackSetTimeoutsToTerraform(struct?: CloudformationStackSetTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}
  */
  export class CloudformationStackSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._administrationRoleArn = config.administrationRoleArn;
      this._capabilities = config.capabilities;
      this._description = config.description;
      this._executionRoleName = config.executionRoleName;
      this._name = config.name;
      this._parameters = config.parameters;
      this._permissionModel = config.permissionModel;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._templateBody = config.templateBody;
      this._templateUrl = config.templateUrl;
      this._autoDeployment = config.autoDeployment;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // administration_role_arn - computed: false, optional: true, required: false
    private _administrationRoleArn?: string;
    public get administrationRoleArn() {
      return this.getStringAttribute('administration_role_arn');
    }
    public set administrationRoleArn(value: string ) {
      this._administrationRoleArn = value;
    }
    public resetAdministrationRoleArn() {
      this._administrationRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get administrationRoleArnInput() {
      return this._administrationRoleArn
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capabilities - computed: false, optional: true, required: false
    private _capabilities?: string[];
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[] ) {
      this._capabilities = value;
    }
    public resetCapabilities() {
      this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
      return this._capabilities
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

    // execution_role_name - computed: true, optional: true, required: false
    private _executionRoleName?: string;
    public get executionRoleName() {
      return this.getStringAttribute('execution_role_name');
    }
    public set executionRoleName(value: string) {
      this._executionRoleName = value;
    }
    public resetExecutionRoleName() {
      this._executionRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleNameInput() {
      return this._executionRoleName
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

    // parameters - computed: false, optional: true, required: false
    private _parameters?: { [key: string]: string } | cdktf.IResolvable;
    public get parameters() {
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._parameters = value;
    }
    public resetParameters() {
      this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
      return this._parameters
    }

    // permission_model - computed: false, optional: true, required: false
    private _permissionModel?: string;
    public get permissionModel() {
      return this.getStringAttribute('permission_model');
    }
    public set permissionModel(value: string ) {
      this._permissionModel = value;
    }
    public resetPermissionModel() {
      this._permissionModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionModelInput() {
      return this._permissionModel
    }

    // stack_set_id - computed: true, optional: false, required: false
    public get stackSetId() {
      return this.getStringAttribute('stack_set_id');
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

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string;
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
      this._templateBody = value;
    }
    public resetTemplateBody() {
      this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
      return this._templateBody
    }

    // template_url - computed: false, optional: true, required: false
    private _templateUrl?: string;
    public get templateUrl() {
      return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string ) {
      this._templateUrl = value;
    }
    public resetTemplateUrl() {
      this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
      return this._templateUrl
    }

    // auto_deployment - computed: false, optional: true, required: false
    private _autoDeployment?: CloudformationStackSetAutoDeployment[];
    public get autoDeployment() {
      return this.interpolationForAttribute('auto_deployment') as any;
    }
    public set autoDeployment(value: CloudformationStackSetAutoDeployment[] ) {
      this._autoDeployment = value;
    }
    public resetAutoDeployment() {
      this._autoDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeploymentInput() {
      return this._autoDeployment
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackSetTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: CloudformationStackSetTimeouts ) {
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
        administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
        capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
        description: cdktf.stringToTerraform(this._description),
        execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
        name: cdktf.stringToTerraform(this._name),
        parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
        permission_model: cdktf.stringToTerraform(this._permissionModel),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        template_body: cdktf.stringToTerraform(this._templateBody),
        template_url: cdktf.stringToTerraform(this._templateUrl),
        auto_deployment: cdktf.listMapper(cloudformationStackSetAutoDeploymentToTerraform)(this._autoDeployment),
        timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationStackSetInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#account_id CloudformationStackSetInstance#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#parameter_overrides CloudformationStackSetInstance#parameter_overrides}
    */
    readonly parameterOverrides?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#region CloudformationStackSetInstance#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#retain_stack CloudformationStackSetInstance#retain_stack}
    */
    readonly retainStack?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#stack_set_name CloudformationStackSetInstance#stack_set_name}
    */
    readonly stackSetName: string;
    /**
    * deployment_targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#deployment_targets CloudformationStackSetInstance#deployment_targets}
    */
    readonly deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#timeouts CloudformationStackSetInstance#timeouts}
    */
    readonly timeouts?: CloudformationStackSetInstanceTimeouts;
  }
  export interface CloudformationStackSetInstanceDeploymentTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}
    */
    readonly organizationalUnitIds?: string[];
  }

  function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct?: CloudformationStackSetInstanceDeploymentTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.organizationalUnitIds),
    }
  }

  export interface CloudformationStackSetInstanceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#create CloudformationStackSetInstance#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#delete CloudformationStackSetInstance#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html#update CloudformationStackSetInstance#update}
    */
    readonly update?: string;
  }

  function cloudformationStackSetInstanceTimeoutsToTerraform(struct?: CloudformationStackSetInstanceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}
  */
  export class CloudformationStackSetInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack_set_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack_set_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._parameterOverrides = config.parameterOverrides;
      this._region = config.region;
      this._retainStack = config.retainStack;
      this._stackSetName = config.stackSetName;
      this._deploymentTargets = config.deploymentTargets;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string;
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    public resetAccountId() {
      this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // organizational_unit_id - computed: true, optional: false, required: false
    public get organizationalUnitId() {
      return this.getStringAttribute('organizational_unit_id');
    }

    // parameter_overrides - computed: false, optional: true, required: false
    private _parameterOverrides?: { [key: string]: string } | cdktf.IResolvable;
    public get parameterOverrides() {
      return this.interpolationForAttribute('parameter_overrides') as any;
    }
    public set parameterOverrides(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._parameterOverrides = value;
    }
    public resetParameterOverrides() {
      this._parameterOverrides = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parameterOverridesInput() {
      return this._parameterOverrides
    }

    // region - computed: true, optional: true, required: false
    private _region?: string;
    public get region() {
      return this.getStringAttribute('region');
    }
    public set region(value: string) {
      this._region = value;
    }
    public resetRegion() {
      this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
      return this._region
    }

    // retain_stack - computed: false, optional: true, required: false
    private _retainStack?: boolean | cdktf.IResolvable;
    public get retainStack() {
      return this.getBooleanAttribute('retain_stack');
    }
    public set retainStack(value: boolean | cdktf.IResolvable ) {
      this._retainStack = value;
    }
    public resetRetainStack() {
      this._retainStack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retainStackInput() {
      return this._retainStack
    }

    // stack_id - computed: true, optional: false, required: false
    public get stackId() {
      return this.getStringAttribute('stack_id');
    }

    // stack_set_name - computed: false, optional: false, required: true
    private _stackSetName: string;
    public get stackSetName() {
      return this.getStringAttribute('stack_set_name');
    }
    public set stackSetName(value: string) {
      this._stackSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackSetNameInput() {
      return this._stackSetName
    }

    // deployment_targets - computed: false, optional: true, required: false
    private _deploymentTargets?: CloudformationStackSetInstanceDeploymentTargets[];
    public get deploymentTargets() {
      return this.interpolationForAttribute('deployment_targets') as any;
    }
    public set deploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets[] ) {
      this._deploymentTargets = value;
    }
    public resetDeploymentTargets() {
      this._deploymentTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTargetsInput() {
      return this._deploymentTargets
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: CloudformationStackSetInstanceTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: CloudformationStackSetInstanceTimeouts ) {
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
        account_id: cdktf.stringToTerraform(this._accountId),
        parameter_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameterOverrides),
        region: cdktf.stringToTerraform(this._region),
        retain_stack: cdktf.booleanToTerraform(this._retainStack),
        stack_set_name: cdktf.stringToTerraform(this._stackSetName),
        deployment_targets: cdktf.listMapper(cloudformationStackSetInstanceDeploymentTargetsToTerraform)(this._deploymentTargets),
        timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface CloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#execution_role_arn CloudformationType#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#schema_handler_package CloudformationType#schema_handler_package}
    */
    readonly schemaHandlerPackage: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type CloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#type_name CloudformationType#type_name}
    */
    readonly typeName: string;
    /**
    * logging_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#logging_config CloudformationType#logging_config}
    */
    readonly loggingConfig?: CloudformationTypeLoggingConfig[];
  }
  export interface CloudformationTypeLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_group_name CloudformationType#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html#log_role_arn CloudformationType#log_role_arn}
    */
    readonly logRoleArn: string;
  }

  function cloudformationTypeLoggingConfigToTerraform(struct?: CloudformationTypeLoggingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_role_arn: cdktf.stringToTerraform(struct!.logRoleArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type}
  */
  export class CloudformationType extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_type.html aws_cloudformation_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationTypeConfig
    */
    public constructor(scope: Construct, id: string, config: CloudformationTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._executionRoleArn = config.executionRoleArn;
      this._schemaHandlerPackage = config.schemaHandlerPackage;
      this._type = config.type;
      this._typeName = config.typeName;
      this._loggingConfig = config.loggingConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_version_id - computed: true, optional: false, required: false
    public get defaultVersionId() {
      return this.getStringAttribute('default_version_id');
    }

    // deprecated_status - computed: true, optional: false, required: false
    public get deprecatedStatus() {
      return this.getStringAttribute('deprecated_status');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // documentation_url - computed: true, optional: false, required: false
    public get documentationUrl() {
      return this.getStringAttribute('documentation_url');
    }

    // execution_role_arn - computed: false, optional: true, required: false
    private _executionRoleArn?: string;
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string ) {
      this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
      this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
      return this.getBooleanAttribute('is_default_version');
    }

    // provisioning_type - computed: true, optional: false, required: false
    public get provisioningType() {
      return this.getStringAttribute('provisioning_type');
    }

    // schema - computed: true, optional: false, required: false
    public get schema() {
      return this.getStringAttribute('schema');
    }

    // schema_handler_package - computed: false, optional: false, required: true
    private _schemaHandlerPackage: string;
    public get schemaHandlerPackage() {
      return this.getStringAttribute('schema_handler_package');
    }
    public set schemaHandlerPackage(value: string) {
      this._schemaHandlerPackage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaHandlerPackageInput() {
      return this._schemaHandlerPackage
    }

    // source_url - computed: true, optional: false, required: false
    public get sourceUrl() {
      return this.getStringAttribute('source_url');
    }

    // type - computed: true, optional: true, required: false
    private _type?: string;
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // type_arn - computed: true, optional: false, required: false
    public get typeArn() {
      return this.getStringAttribute('type_arn');
    }

    // type_name - computed: false, optional: false, required: true
    private _typeName: string;
    public get typeName() {
      return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
      this._typeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
      return this._typeName
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getStringAttribute('version_id');
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
      return this.getStringAttribute('visibility');
    }

    // logging_config - computed: false, optional: true, required: false
    private _loggingConfig?: CloudformationTypeLoggingConfig[];
    public get loggingConfig() {
      return this.interpolationForAttribute('logging_config') as any;
    }
    public set loggingConfig(value: CloudformationTypeLoggingConfig[] ) {
      this._loggingConfig = value;
    }
    public resetLoggingConfig() {
      this._loggingConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
      return this._loggingConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        schema_handler_package: cdktf.stringToTerraform(this._schemaHandlerPackage),
        type: cdktf.stringToTerraform(this._type),
        type_name: cdktf.stringToTerraform(this._typeName),
        logging_config: cdktf.listMapper(cloudformationTypeLoggingConfigToTerraform)(this._loggingConfig),
      };
    }
  }
  export interface DataAwsCloudformationExportConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html#name DataAwsCloudformationExport#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export}
  */
  export class DataAwsCloudformationExport extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_export";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_export.html aws_cloudformation_export} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationExportConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationExportConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_export',
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

    // exporting_stack_id - computed: true, optional: false, required: false
    public get exportingStackId() {
      return this.getStringAttribute('exporting_stack_id');
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

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
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
  export interface DataAwsCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#name DataAwsCloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#tags DataAwsCloudformationStack#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack}
  */
  export class DataAwsCloudformationStack extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_stack";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationStackConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_stack',
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
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: true, optional: false, required: false
    public get capabilities() {
      return this.getListAttribute('capabilities');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // disable_rollback - computed: true, optional: false, required: false
    public get disableRollback() {
      return this.getBooleanAttribute('disable_rollback');
    }

    // iam_role_arn - computed: true, optional: false, required: false
    public get iamRoleArn() {
      return this.getStringAttribute('iam_role_arn');
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

    // notification_arns - computed: true, optional: false, required: false
    public get notificationArns() {
      return this.getListAttribute('notification_arns');
    }

    // outputs - computed: true, optional: false, required: false
    public outputs(key: string): string {
      return new cdktf.StringMap(this, 'outputs').lookup(key);
    }

    // parameters - computed: true, optional: false, required: false
    public parameters(key: string): string {
      return new cdktf.StringMap(this, 'parameters').lookup(key);
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

    // template_body - computed: true, optional: false, required: false
    public get templateBody() {
      return this.getStringAttribute('template_body');
    }

    // timeout_in_minutes - computed: true, optional: false, required: false
    public get timeoutInMinutes() {
      return this.getNumberAttribute('timeout_in_minutes');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsCloudformationTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type DataAwsCloudformationType#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#type_name DataAwsCloudformationType#type_name}
    */
    readonly typeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html#version_id DataAwsCloudformationType#version_id}
    */
    readonly versionId?: string;
  }
  export class DataAwsCloudformationTypeLoggingConfig extends cdktf.ComplexComputedList {

    // log_group_name - computed: true, optional: false, required: false
    public get logGroupName() {
      return this.getStringAttribute('log_group_name');
    }

    // log_role_arn - computed: true, optional: false, required: false
    public get logRoleArn() {
      return this.getStringAttribute('log_role_arn');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type}
  */
  export class DataAwsCloudformationType extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudformation_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_type.html aws_cloudformation_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationTypeConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudformationTypeConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudformation_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._type = config.type;
      this._typeName = config.typeName;
      this._versionId = config.versionId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // default_version_id - computed: true, optional: false, required: false
    public get defaultVersionId() {
      return this.getStringAttribute('default_version_id');
    }

    // deprecated_status - computed: true, optional: false, required: false
    public get deprecatedStatus() {
      return this.getStringAttribute('deprecated_status');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // documentation_url - computed: true, optional: false, required: false
    public get documentationUrl() {
      return this.getStringAttribute('documentation_url');
    }

    // execution_role_arn - computed: true, optional: false, required: false
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_default_version - computed: true, optional: false, required: false
    public get isDefaultVersion() {
      return this.getBooleanAttribute('is_default_version');
    }

    // logging_config - computed: true, optional: false, required: false
    public loggingConfig(index: string) {
      return new DataAwsCloudformationTypeLoggingConfig(this, 'logging_config', index);
    }

    // provisioning_type - computed: true, optional: false, required: false
    public get provisioningType() {
      return this.getStringAttribute('provisioning_type');
    }

    // schema - computed: true, optional: false, required: false
    public get schema() {
      return this.getStringAttribute('schema');
    }

    // source_url - computed: true, optional: false, required: false
    public get sourceUrl() {
      return this.getStringAttribute('source_url');
    }

    // type - computed: true, optional: true, required: false
    private _type?: string;
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // type_arn - computed: true, optional: false, required: false
    public get typeArn() {
      return this.getStringAttribute('type_arn');
    }

    // type_name - computed: true, optional: true, required: false
    private _typeName?: string;
    public get typeName() {
      return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
      this._typeName = value;
    }
    public resetTypeName() {
      this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
      return this._typeName
    }

    // version_id - computed: false, optional: true, required: false
    private _versionId?: string;
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string ) {
      this._versionId = value;
    }
    public resetVersionId() {
      this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
      return this._versionId
    }

    // visibility - computed: true, optional: false, required: false
    public get visibility() {
      return this.getStringAttribute('visibility');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        type: cdktf.stringToTerraform(this._type),
        type_name: cdktf.stringToTerraform(this._typeName),
        version_id: cdktf.stringToTerraform(this._versionId),
      };
    }
  }
}
