// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export namespace IoT {
  export interface IotAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#authorizer_function_arn IotAuthorizer#authorizer_function_arn}
    */
    readonly authorizerFunctionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#name IotAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#signing_disabled IotAuthorizer#signing_disabled}
    */
    readonly signingDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#status IotAuthorizer#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#token_key_name IotAuthorizer#token_key_name}
    */
    readonly tokenKeyName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html#token_signing_public_keys IotAuthorizer#token_signing_public_keys}
    */
    readonly tokenSigningPublicKeys?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer}
  */
  export class IotAuthorizer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_authorizer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_authorizer.html aws_iot_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotAuthorizerConfig
    */
    public constructor(scope: Construct, id: string, config: IotAuthorizerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_authorizer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authorizerFunctionArn = config.authorizerFunctionArn;
      this._name = config.name;
      this._signingDisabled = config.signingDisabled;
      this._status = config.status;
      this._tokenKeyName = config.tokenKeyName;
      this._tokenSigningPublicKeys = config.tokenSigningPublicKeys;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authorizer_function_arn - computed: false, optional: false, required: true
    private _authorizerFunctionArn: string;
    public get authorizerFunctionArn() {
      return this.getStringAttribute('authorizer_function_arn');
    }
    public set authorizerFunctionArn(value: string) {
      this._authorizerFunctionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerFunctionArnInput() {
      return this._authorizerFunctionArn
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

    // signing_disabled - computed: false, optional: true, required: false
    private _signingDisabled?: boolean | cdktf.IResolvable;
    public get signingDisabled() {
      return this.getBooleanAttribute('signing_disabled');
    }
    public set signingDisabled(value: boolean | cdktf.IResolvable ) {
      this._signingDisabled = value;
    }
    public resetSigningDisabled() {
      this._signingDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingDisabledInput() {
      return this._signingDisabled
    }

    // status - computed: false, optional: true, required: false
    private _status?: string;
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string ) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // token_key_name - computed: false, optional: true, required: false
    private _tokenKeyName?: string;
    public get tokenKeyName() {
      return this.getStringAttribute('token_key_name');
    }
    public set tokenKeyName(value: string ) {
      this._tokenKeyName = value;
    }
    public resetTokenKeyName() {
      this._tokenKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenKeyNameInput() {
      return this._tokenKeyName
    }

    // token_signing_public_keys - computed: false, optional: true, required: false
    private _tokenSigningPublicKeys?: { [key: string]: string } | cdktf.IResolvable;
    public get tokenSigningPublicKeys() {
      return this.interpolationForAttribute('token_signing_public_keys') as any;
    }
    public set tokenSigningPublicKeys(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tokenSigningPublicKeys = value;
    }
    public resetTokenSigningPublicKeys() {
      this._tokenSigningPublicKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenSigningPublicKeysInput() {
      return this._tokenSigningPublicKeys
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authorizer_function_arn: cdktf.stringToTerraform(this._authorizerFunctionArn),
        name: cdktf.stringToTerraform(this._name),
        signing_disabled: cdktf.booleanToTerraform(this._signingDisabled),
        status: cdktf.stringToTerraform(this._status),
        token_key_name: cdktf.stringToTerraform(this._tokenKeyName),
        token_signing_public_keys: cdktf.hashMapper(cdktf.anyToTerraform)(this._tokenSigningPublicKeys),
      };
    }
  }
  export interface IotCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html#active IotCertificate#active}
    */
    readonly active: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html#csr IotCertificate#csr}
    */
    readonly csr?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate}
  */
  export class IotCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_certificate.html aws_iot_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotCertificateConfig
    */
    public constructor(scope: Construct, id: string, config: IotCertificateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._active = config.active;
      this._csr = config.csr;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active - computed: false, optional: false, required: true
    private _active: boolean | cdktf.IResolvable;
    public get active() {
      return this.getBooleanAttribute('active');
    }
    public set active(value: boolean | cdktf.IResolvable) {
      this._active = value;
    }
    // Temporarily expose input value. Use with caution.
    public get activeInput() {
      return this._active
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_pem - computed: true, optional: false, required: false
    public get certificatePem() {
      return this.getStringAttribute('certificate_pem');
    }

    // csr - computed: false, optional: true, required: false
    private _csr?: string;
    public get csr() {
      return this.getStringAttribute('csr');
    }
    public set csr(value: string ) {
      this._csr = value;
    }
    public resetCsr() {
      this._csr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csrInput() {
      return this._csr
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // private_key - computed: true, optional: false, required: false
    public get privateKey() {
      return this.getStringAttribute('private_key');
    }

    // public_key - computed: true, optional: false, required: false
    public get publicKey() {
      return this.getStringAttribute('public_key');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        active: cdktf.booleanToTerraform(this._active),
        csr: cdktf.stringToTerraform(this._csr),
      };
    }
  }
  export interface IotPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html#name IotPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html#policy IotPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html aws_iot_policy}
  */
  export class IotPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_policy.html aws_iot_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: IotPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._policy = config.policy;
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
        name: cdktf.stringToTerraform(this._name),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface IotPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html#policy IotPolicyAttachment#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html#target IotPolicyAttachment#target}
    */
    readonly target: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment}
  */
  export class IotPolicyAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_policy_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_policy_attachment.html aws_iot_policy_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotPolicyAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IotPolicyAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_policy_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._target = config.target;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // target - computed: false, optional: false, required: true
    private _target: string;
    public get target() {
      return this.getStringAttribute('target');
    }
    public set target(value: string) {
      this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
      return this._target
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        target: cdktf.stringToTerraform(this._target),
      };
    }
  }
  export interface IotRoleAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#alias IotRoleAlias#alias}
    */
    readonly alias: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#credential_duration IotRoleAlias#credential_duration}
    */
    readonly credentialDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html#role_arn IotRoleAlias#role_arn}
    */
    readonly roleArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias}
  */
  export class IotRoleAlias extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_role_alias";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html aws_iot_role_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotRoleAliasConfig
    */
    public constructor(scope: Construct, id: string, config: IotRoleAliasConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_role_alias',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._alias = config.alias;
      this._credentialDuration = config.credentialDuration;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: false, optional: false, required: true
    private _alias: string;
    public get alias() {
      return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
      this._alias = value;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
      return this._alias
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // credential_duration - computed: false, optional: true, required: false
    private _credentialDuration?: number;
    public get credentialDuration() {
      return this.getNumberAttribute('credential_duration');
    }
    public set credentialDuration(value: number ) {
      this._credentialDuration = value;
    }
    public resetCredentialDuration() {
      this._credentialDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialDurationInput() {
      return this._credentialDuration
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        alias: cdktf.stringToTerraform(this._alias),
        credential_duration: cdktf.numberToTerraform(this._credentialDuration),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface IotThingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#attributes IotThing#attributes}
    */
    readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#name IotThing#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html#thing_type_name IotThing#thing_type_name}
    */
    readonly thingTypeName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing}
  */
  export class IotThing extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_thing";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing.html aws_iot_thing} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingConfig
    */
    public constructor(scope: Construct, id: string, config: IotThingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_thing',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._attributes = config.attributes;
      this._name = config.name;
      this._thingTypeName = config.thingTypeName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // attributes - computed: false, optional: true, required: false
    private _attributes?: { [key: string]: string } | cdktf.IResolvable;
    public get attributes() {
      return this.interpolationForAttribute('attributes') as any;
    }
    public set attributes(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._attributes = value;
    }
    public resetAttributes() {
      this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
      return this._attributes
    }

    // default_client_id - computed: true, optional: false, required: false
    public get defaultClientId() {
      return this.getStringAttribute('default_client_id');
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

    // thing_type_name - computed: false, optional: true, required: false
    private _thingTypeName?: string;
    public get thingTypeName() {
      return this.getStringAttribute('thing_type_name');
    }
    public set thingTypeName(value: string ) {
      this._thingTypeName = value;
    }
    public resetThingTypeName() {
      this._thingTypeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thingTypeNameInput() {
      return this._thingTypeName
    }

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
        name: cdktf.stringToTerraform(this._name),
        thing_type_name: cdktf.stringToTerraform(this._thingTypeName),
      };
    }
  }
  export interface IotThingPrincipalAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html#principal IotThingPrincipalAttachment#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html#thing IotThingPrincipalAttachment#thing}
    */
    readonly thing: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment}
  */
  export class IotThingPrincipalAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_thing_principal_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_principal_attachment.html aws_iot_thing_principal_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingPrincipalAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: IotThingPrincipalAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_thing_principal_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._principal = config.principal;
      this._thing = config.thing;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // thing - computed: false, optional: false, required: true
    private _thing: string;
    public get thing() {
      return this.getStringAttribute('thing');
    }
    public set thing(value: string) {
      this._thing = value;
    }
    // Temporarily expose input value. Use with caution.
    public get thingInput() {
      return this._thing
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        principal: cdktf.stringToTerraform(this._principal),
        thing: cdktf.stringToTerraform(this._thing),
      };
    }
  }
  export interface IotThingTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#deprecated IotThingType#deprecated}
    */
    readonly deprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#name IotThingType#name}
    */
    readonly name: string;
    /**
    * properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#properties IotThingType#properties}
    */
    readonly properties?: IotThingTypeProperties[];
  }
  export interface IotThingTypeProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#description IotThingType#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html#searchable_attributes IotThingType#searchable_attributes}
    */
    readonly searchableAttributes?: string[];
  }

  function iotThingTypePropertiesToTerraform(struct?: IotThingTypeProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      description: cdktf.stringToTerraform(struct!.description),
      searchable_attributes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.searchableAttributes),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type}
  */
  export class IotThingType extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_thing_type";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_thing_type.html aws_iot_thing_type} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotThingTypeConfig
    */
    public constructor(scope: Construct, id: string, config: IotThingTypeConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_thing_type',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deprecated = config.deprecated;
      this._name = config.name;
      this._properties = config.properties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // deprecated - computed: false, optional: true, required: false
    private _deprecated?: boolean | cdktf.IResolvable;
    public get deprecated() {
      return this.getBooleanAttribute('deprecated');
    }
    public set deprecated(value: boolean | cdktf.IResolvable ) {
      this._deprecated = value;
    }
    public resetDeprecated() {
      this._deprecated = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deprecatedInput() {
      return this._deprecated
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

    // properties - computed: false, optional: true, required: false
    private _properties?: IotThingTypeProperties[];
    public get properties() {
      return this.interpolationForAttribute('properties') as any;
    }
    public set properties(value: IotThingTypeProperties[] ) {
      this._properties = value;
    }
    public resetProperties() {
      this._properties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
      return this._properties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        deprecated: cdktf.booleanToTerraform(this._deprecated),
        name: cdktf.stringToTerraform(this._name),
        properties: cdktf.listMapper(iotThingTypePropertiesToTerraform)(this._properties),
      };
    }
  }
  export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#description IotTopicRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#enabled IotTopicRule#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#name IotTopicRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql IotTopicRule#sql}
    */
    readonly sql: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql_version IotTopicRule#sql_version}
    */
    readonly sqlVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags IotTopicRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags_all IotTopicRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * cloudwatch_alarm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
    /**
    * cloudwatch_metric block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
    /**
    * dynamodb block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleDynamodb[];
    /**
    * dynamodbv2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
    /**
    * elasticsearch block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleElasticsearch[];
    /**
    * error_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#error_action IotTopicRule#error_action}
    */
    readonly errorAction?: IotTopicRuleErrorAction[];
    /**
    * firehose block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleFirehose[];
    /**
    * iot_analytics block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
    /**
    * iot_events block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleIotEvents[];
    /**
    * kinesis block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleKinesis[];
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleLambda[];
    /**
    * republish block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleRepublish[];
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleS3[];
    /**
    * sns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleSns[];
    /**
    * sqs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleSqs[];
    /**
    * step_functions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleStepFunctions[];
  }
  export interface IotTopicRuleCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
  }

  function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      alarm_name: cdktf.stringToTerraform(struct!.alarmName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      state_reason: cdktf.stringToTerraform(struct!.stateReason),
      state_value: cdktf.stringToTerraform(struct!.stateValue),
    }
  }

  export interface IotTopicRuleCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
      metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
      metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
      metric_value: cdktf.stringToTerraform(struct!.metricValue),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
  }

  function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
      hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
      hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
      operation: cdktf.stringToTerraform(struct!.operation),
      payload_field: cdktf.stringToTerraform(struct!.payloadField),
      range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
      range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
      range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export interface IotTopicRuleDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
  }

  function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItem): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export interface IotTopicRuleDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleDynamodbv2PutItem[];
  }

  function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      put_item: cdktf.listMapper(iotTopicRuleDynamodbv2PutItemToTerraform)(struct!.putItem),
    }
  }

  export interface IotTopicRuleElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
    */
    readonly type: string;
  }

  function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      endpoint: cdktf.stringToTerraform(struct!.endpoint),
      id: cdktf.stringToTerraform(struct!.id),
      index: cdktf.stringToTerraform(struct!.index),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface IotTopicRuleErrorActionCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
  }

  function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      alarm_name: cdktf.stringToTerraform(struct!.alarmName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      state_reason: cdktf.stringToTerraform(struct!.stateReason),
      state_value: cdktf.stringToTerraform(struct!.stateValue),
    }
  }

  export interface IotTopicRuleErrorActionCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetric): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      metric_name: cdktf.stringToTerraform(struct!.metricName),
      metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
      metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
      metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
      metric_value: cdktf.stringToTerraform(struct!.metricValue),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleErrorActionDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
  }

  function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodb): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
      hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
      hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
      operation: cdktf.stringToTerraform(struct!.operation),
      payload_field: cdktf.stringToTerraform(struct!.payloadField),
      range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
      range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
      range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export interface IotTopicRuleErrorActionDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
  }

  function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItem): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
    }
  }

  export interface IotTopicRuleErrorActionDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem[];
  }

  function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      put_item: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2PutItemToTerraform)(struct!.putItem),
    }
  }

  export interface IotTopicRuleErrorActionElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
    */
    readonly type: string;
  }

  function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      endpoint: cdktf.stringToTerraform(struct!.endpoint),
      id: cdktf.stringToTerraform(struct!.id),
      index: cdktf.stringToTerraform(struct!.index),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface IotTopicRuleErrorActionFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
    */
    readonly separator?: string;
  }

  function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      separator: cdktf.stringToTerraform(struct!.separator),
    }
  }

  export interface IotTopicRuleErrorActionIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalytics): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      channel_name: cdktf.stringToTerraform(struct!.channelName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleErrorActionIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEvents): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input_name: cdktf.stringToTerraform(struct!.inputName),
      message_id: cdktf.stringToTerraform(struct!.messageId),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleErrorActionKinesis {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
  }

  function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesis): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      partition_key: cdktf.stringToTerraform(struct!.partitionKey),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      stream_name: cdktf.stringToTerraform(struct!.streamName),
    }
  }

  export interface IotTopicRuleErrorActionLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
  }

  function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      function_arn: cdktf.stringToTerraform(struct!.functionArn),
    }
  }

  export interface IotTopicRuleErrorActionRepublish {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
    */
    readonly topic: string;
  }

  function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublish): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      qos: cdktf.numberToTerraform(struct!.qos),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      topic: cdktf.stringToTerraform(struct!.topic),
    }
  }

  export interface IotTopicRuleErrorActionS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      key: cdktf.stringToTerraform(struct!.key),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleErrorActionSns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
  }

  function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      message_format: cdktf.stringToTerraform(struct!.messageFormat),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      target_arn: cdktf.stringToTerraform(struct!.targetArn),
    }
  }

  export interface IotTopicRuleErrorActionSqs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
  }

  function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      queue_url: cdktf.stringToTerraform(struct!.queueUrl),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      use_base64: cdktf.booleanToTerraform(struct!.useBase64),
    }
  }

  export interface IotTopicRuleErrorActionStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
  }

  function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
    }
  }

  export interface IotTopicRuleErrorAction {
    /**
    * cloudwatch_alarm block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm[];
    /**
    * cloudwatch_metric block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric[];
    /**
    * dynamodb block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleErrorActionDynamodb[];
    /**
    * dynamodbv2 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2[];
    /**
    * elasticsearch block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch[];
    /**
    * firehose block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleErrorActionFirehose[];
    /**
    * iot_analytics block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics[];
    /**
    * iot_events block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleErrorActionIotEvents[];
    /**
    * kinesis block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleErrorActionKinesis[];
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleErrorActionLambda[];
    /**
    * republish block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleErrorActionRepublish[];
    /**
    * s3 block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleErrorActionS3[];
    /**
    * sns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleErrorActionSns[];
    /**
    * sqs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleErrorActionSqs[];
    /**
    * step_functions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions[];
  }

  function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cloudwatch_alarm: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchAlarmToTerraform)(struct!.cloudwatchAlarm),
      cloudwatch_metric: cdktf.listMapper(iotTopicRuleErrorActionCloudwatchMetricToTerraform)(struct!.cloudwatchMetric),
      dynamodb: cdktf.listMapper(iotTopicRuleErrorActionDynamodbToTerraform)(struct!.dynamodb),
      dynamodbv2: cdktf.listMapper(iotTopicRuleErrorActionDynamodbv2ToTerraform)(struct!.dynamodbv2),
      elasticsearch: cdktf.listMapper(iotTopicRuleErrorActionElasticsearchToTerraform)(struct!.elasticsearch),
      firehose: cdktf.listMapper(iotTopicRuleErrorActionFirehoseToTerraform)(struct!.firehose),
      iot_analytics: cdktf.listMapper(iotTopicRuleErrorActionIotAnalyticsToTerraform)(struct!.iotAnalytics),
      iot_events: cdktf.listMapper(iotTopicRuleErrorActionIotEventsToTerraform)(struct!.iotEvents),
      kinesis: cdktf.listMapper(iotTopicRuleErrorActionKinesisToTerraform)(struct!.kinesis),
      lambda: cdktf.listMapper(iotTopicRuleErrorActionLambdaToTerraform)(struct!.lambda),
      republish: cdktf.listMapper(iotTopicRuleErrorActionRepublishToTerraform)(struct!.republish),
      s3: cdktf.listMapper(iotTopicRuleErrorActionS3ToTerraform)(struct!.s3),
      sns: cdktf.listMapper(iotTopicRuleErrorActionSnsToTerraform)(struct!.sns),
      sqs: cdktf.listMapper(iotTopicRuleErrorActionSqsToTerraform)(struct!.sqs),
      step_functions: cdktf.listMapper(iotTopicRuleErrorActionStepFunctionsToTerraform)(struct!.stepFunctions),
    }
  }

  export interface IotTopicRuleFirehose {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
    */
    readonly separator?: string;
  }

  function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      separator: cdktf.stringToTerraform(struct!.separator),
    }
  }

  export interface IotTopicRuleIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      channel_name: cdktf.stringToTerraform(struct!.channelName),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input_name: cdktf.stringToTerraform(struct!.inputName),
      message_id: cdktf.stringToTerraform(struct!.messageId),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleKinesis {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
  }

  function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      partition_key: cdktf.stringToTerraform(struct!.partitionKey),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      stream_name: cdktf.stringToTerraform(struct!.streamName),
    }
  }

  export interface IotTopicRuleLambda {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
  }

  function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      function_arn: cdktf.stringToTerraform(struct!.functionArn),
    }
  }

  export interface IotTopicRuleRepublish {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
    */
    readonly topic: string;
  }

  function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      qos: cdktf.numberToTerraform(struct!.qos),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      topic: cdktf.stringToTerraform(struct!.topic),
    }
  }

  export interface IotTopicRuleS3 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
  }

  function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_name: cdktf.stringToTerraform(struct!.bucketName),
      key: cdktf.stringToTerraform(struct!.key),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface IotTopicRuleSns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
  }

  function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      message_format: cdktf.stringToTerraform(struct!.messageFormat),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      target_arn: cdktf.stringToTerraform(struct!.targetArn),
    }
  }

  export interface IotTopicRuleSqs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
  }

  function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      queue_url: cdktf.stringToTerraform(struct!.queueUrl),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      use_base64: cdktf.booleanToTerraform(struct!.useBase64),
    }
  }

  export interface IotTopicRuleStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
  }

  function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule}
  */
  export class IotTopicRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_topic_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleConfig
    */
    public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_topic_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._enabled = config.enabled;
      this._name = config.name;
      this._sql = config.sql;
      this._sqlVersion = config.sqlVersion;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._cloudwatchAlarm = config.cloudwatchAlarm;
      this._cloudwatchMetric = config.cloudwatchMetric;
      this._dynamodb = config.dynamodb;
      this._dynamodbv2 = config.dynamodbv2;
      this._elasticsearch = config.elasticsearch;
      this._errorAction = config.errorAction;
      this._firehose = config.firehose;
      this._iotAnalytics = config.iotAnalytics;
      this._iotEvents = config.iotEvents;
      this._kinesis = config.kinesis;
      this._lambda = config.lambda;
      this._republish = config.republish;
      this._s3 = config.s3;
      this._sns = config.sns;
      this._sqs = config.sqs;
      this._stepFunctions = config.stepFunctions;
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

    // enabled - computed: false, optional: false, required: true
    private _enabled: boolean | cdktf.IResolvable;
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktf.IResolvable) {
      this._enabled = value;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
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

    // sql - computed: false, optional: false, required: true
    private _sql: string;
    public get sql() {
      return this.getStringAttribute('sql');
    }
    public set sql(value: string) {
      this._sql = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInput() {
      return this._sql
    }

    // sql_version - computed: false, optional: false, required: true
    private _sqlVersion: string;
    public get sqlVersion() {
      return this.getStringAttribute('sql_version');
    }
    public set sqlVersion(value: string) {
      this._sqlVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlVersionInput() {
      return this._sqlVersion
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

    // cloudwatch_alarm - computed: false, optional: true, required: false
    private _cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
    public get cloudwatchAlarm() {
      return this.interpolationForAttribute('cloudwatch_alarm') as any;
    }
    public set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] ) {
      this._cloudwatchAlarm = value;
    }
    public resetCloudwatchAlarm() {
      this._cloudwatchAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchAlarmInput() {
      return this._cloudwatchAlarm
    }

    // cloudwatch_metric - computed: false, optional: true, required: false
    private _cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
    public get cloudwatchMetric() {
      return this.interpolationForAttribute('cloudwatch_metric') as any;
    }
    public set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] ) {
      this._cloudwatchMetric = value;
    }
    public resetCloudwatchMetric() {
      this._cloudwatchMetric = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchMetricInput() {
      return this._cloudwatchMetric
    }

    // dynamodb - computed: false, optional: true, required: false
    private _dynamodb?: IotTopicRuleDynamodb[];
    public get dynamodb() {
      return this.interpolationForAttribute('dynamodb') as any;
    }
    public set dynamodb(value: IotTopicRuleDynamodb[] ) {
      this._dynamodb = value;
    }
    public resetDynamodb() {
      this._dynamodb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamodbInput() {
      return this._dynamodb
    }

    // dynamodbv2 - computed: false, optional: true, required: false
    private _dynamodbv2?: IotTopicRuleDynamodbv2[];
    public get dynamodbv2() {
      return this.interpolationForAttribute('dynamodbv2') as any;
    }
    public set dynamodbv2(value: IotTopicRuleDynamodbv2[] ) {
      this._dynamodbv2 = value;
    }
    public resetDynamodbv2() {
      this._dynamodbv2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamodbv2Input() {
      return this._dynamodbv2
    }

    // elasticsearch - computed: false, optional: true, required: false
    private _elasticsearch?: IotTopicRuleElasticsearch[];
    public get elasticsearch() {
      return this.interpolationForAttribute('elasticsearch') as any;
    }
    public set elasticsearch(value: IotTopicRuleElasticsearch[] ) {
      this._elasticsearch = value;
    }
    public resetElasticsearch() {
      this._elasticsearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchInput() {
      return this._elasticsearch
    }

    // error_action - computed: false, optional: true, required: false
    private _errorAction?: IotTopicRuleErrorAction[];
    public get errorAction() {
      return this.interpolationForAttribute('error_action') as any;
    }
    public set errorAction(value: IotTopicRuleErrorAction[] ) {
      this._errorAction = value;
    }
    public resetErrorAction() {
      this._errorAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorActionInput() {
      return this._errorAction
    }

    // firehose - computed: false, optional: true, required: false
    private _firehose?: IotTopicRuleFirehose[];
    public get firehose() {
      return this.interpolationForAttribute('firehose') as any;
    }
    public set firehose(value: IotTopicRuleFirehose[] ) {
      this._firehose = value;
    }
    public resetFirehose() {
      this._firehose = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
      return this._firehose
    }

    // iot_analytics - computed: false, optional: true, required: false
    private _iotAnalytics?: IotTopicRuleIotAnalytics[];
    public get iotAnalytics() {
      return this.interpolationForAttribute('iot_analytics') as any;
    }
    public set iotAnalytics(value: IotTopicRuleIotAnalytics[] ) {
      this._iotAnalytics = value;
    }
    public resetIotAnalytics() {
      this._iotAnalytics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotAnalyticsInput() {
      return this._iotAnalytics
    }

    // iot_events - computed: false, optional: true, required: false
    private _iotEvents?: IotTopicRuleIotEvents[];
    public get iotEvents() {
      return this.interpolationForAttribute('iot_events') as any;
    }
    public set iotEvents(value: IotTopicRuleIotEvents[] ) {
      this._iotEvents = value;
    }
    public resetIotEvents() {
      this._iotEvents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iotEventsInput() {
      return this._iotEvents
    }

    // kinesis - computed: false, optional: true, required: false
    private _kinesis?: IotTopicRuleKinesis[];
    public get kinesis() {
      return this.interpolationForAttribute('kinesis') as any;
    }
    public set kinesis(value: IotTopicRuleKinesis[] ) {
      this._kinesis = value;
    }
    public resetKinesis() {
      this._kinesis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisInput() {
      return this._kinesis
    }

    // lambda - computed: false, optional: true, required: false
    private _lambda?: IotTopicRuleLambda[];
    public get lambda() {
      return this.interpolationForAttribute('lambda') as any;
    }
    public set lambda(value: IotTopicRuleLambda[] ) {
      this._lambda = value;
    }
    public resetLambda() {
      this._lambda = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaInput() {
      return this._lambda
    }

    // republish - computed: false, optional: true, required: false
    private _republish?: IotTopicRuleRepublish[];
    public get republish() {
      return this.interpolationForAttribute('republish') as any;
    }
    public set republish(value: IotTopicRuleRepublish[] ) {
      this._republish = value;
    }
    public resetRepublish() {
      this._republish = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get republishInput() {
      return this._republish
    }

    // s3 - computed: false, optional: true, required: false
    private _s3?: IotTopicRuleS3[];
    public get s3() {
      return this.interpolationForAttribute('s3') as any;
    }
    public set s3(value: IotTopicRuleS3[] ) {
      this._s3 = value;
    }
    public resetS3() {
      this._s3 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
      return this._s3
    }

    // sns - computed: false, optional: true, required: false
    private _sns?: IotTopicRuleSns[];
    public get sns() {
      return this.interpolationForAttribute('sns') as any;
    }
    public set sns(value: IotTopicRuleSns[] ) {
      this._sns = value;
    }
    public resetSns() {
      this._sns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsInput() {
      return this._sns
    }

    // sqs - computed: false, optional: true, required: false
    private _sqs?: IotTopicRuleSqs[];
    public get sqs() {
      return this.interpolationForAttribute('sqs') as any;
    }
    public set sqs(value: IotTopicRuleSqs[] ) {
      this._sqs = value;
    }
    public resetSqs() {
      this._sqs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsInput() {
      return this._sqs
    }

    // step_functions - computed: false, optional: true, required: false
    private _stepFunctions?: IotTopicRuleStepFunctions[];
    public get stepFunctions() {
      return this.interpolationForAttribute('step_functions') as any;
    }
    public set stepFunctions(value: IotTopicRuleStepFunctions[] ) {
      this._stepFunctions = value;
    }
    public resetStepFunctions() {
      this._stepFunctions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionsInput() {
      return this._stepFunctions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        enabled: cdktf.booleanToTerraform(this._enabled),
        name: cdktf.stringToTerraform(this._name),
        sql: cdktf.stringToTerraform(this._sql),
        sql_version: cdktf.stringToTerraform(this._sqlVersion),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        cloudwatch_alarm: cdktf.listMapper(iotTopicRuleCloudwatchAlarmToTerraform)(this._cloudwatchAlarm),
        cloudwatch_metric: cdktf.listMapper(iotTopicRuleCloudwatchMetricToTerraform)(this._cloudwatchMetric),
        dynamodb: cdktf.listMapper(iotTopicRuleDynamodbToTerraform)(this._dynamodb),
        dynamodbv2: cdktf.listMapper(iotTopicRuleDynamodbv2ToTerraform)(this._dynamodbv2),
        elasticsearch: cdktf.listMapper(iotTopicRuleElasticsearchToTerraform)(this._elasticsearch),
        error_action: cdktf.listMapper(iotTopicRuleErrorActionToTerraform)(this._errorAction),
        firehose: cdktf.listMapper(iotTopicRuleFirehoseToTerraform)(this._firehose),
        iot_analytics: cdktf.listMapper(iotTopicRuleIotAnalyticsToTerraform)(this._iotAnalytics),
        iot_events: cdktf.listMapper(iotTopicRuleIotEventsToTerraform)(this._iotEvents),
        kinesis: cdktf.listMapper(iotTopicRuleKinesisToTerraform)(this._kinesis),
        lambda: cdktf.listMapper(iotTopicRuleLambdaToTerraform)(this._lambda),
        republish: cdktf.listMapper(iotTopicRuleRepublishToTerraform)(this._republish),
        s3: cdktf.listMapper(iotTopicRuleS3ToTerraform)(this._s3),
        sns: cdktf.listMapper(iotTopicRuleSnsToTerraform)(this._sns),
        sqs: cdktf.listMapper(iotTopicRuleSqsToTerraform)(this._sqs),
        step_functions: cdktf.listMapper(iotTopicRuleStepFunctionsToTerraform)(this._stepFunctions),
      };
    }
  }
  export interface DataAwsIotEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html#endpoint_type DataAwsIotEndpoint#endpoint_type}
    */
    readonly endpointType?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint}
  */
  export class DataAwsIotEndpoint extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_iot_endpoint";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iot_endpoint.html aws_iot_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsIotEndpointConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsIotEndpointConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_iot_endpoint',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endpointType = config.endpointType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // endpoint_address - computed: true, optional: false, required: false
    public get endpointAddress() {
      return this.getStringAttribute('endpoint_address');
    }

    // endpoint_type - computed: false, optional: true, required: false
    private _endpointType?: string;
    public get endpointType() {
      return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string ) {
      this._endpointType = value;
    }
    public resetEndpointType() {
      this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
      return this._endpointType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        endpoint_type: cdktf.stringToTerraform(this._endpointType),
      };
    }
  }
}
