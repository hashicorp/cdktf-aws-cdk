// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#workforce_name SagemakerWorkforce#workforce_name}
  */
  readonly workforceName: string;
  /**
  * cognito_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cognito_config SagemakerWorkforce#cognito_config}
  */
  readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
  /**
  * oidc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#oidc_config SagemakerWorkforce#oidc_config}
  */
  readonly oidcConfig?: SagemakerWorkforceOidcConfig;
  /**
  * source_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#source_ip_config SagemakerWorkforce#source_ip_config}
  */
  readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
}
export interface SagemakerWorkforceCognitoConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_pool SagemakerWorkforce#user_pool}
  */
  readonly userPool: string;
}

export function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    user_pool: cdktf.stringToTerraform(struct!.userPool),
  }
}

export class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // user_pool - computed: false, optional: false, required: true
  private _userPool?: string; 
  public get userPool() {
    return this.getStringAttribute('user_pool');
  }
  public set userPool(value: string) {
    this._userPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolInput() {
    return this._userPool
  }
}
export interface SagemakerWorkforceOidcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_secret SagemakerWorkforce#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#issuer SagemakerWorkforce#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#jwks_uri SagemakerWorkforce#jwks_uri}
  */
  readonly jwksUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#logout_endpoint SagemakerWorkforce#logout_endpoint}
  */
  readonly logoutEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#token_endpoint SagemakerWorkforce#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    logout_endpoint: cdktf.stringToTerraform(struct!.logoutEndpoint),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
  }
}

export class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer
  }

  // jwks_uri - computed: false, optional: false, required: true
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri
  }

  // logout_endpoint - computed: false, optional: false, required: true
  private _logoutEndpoint?: string; 
  public get logoutEndpoint() {
    return this.getStringAttribute('logout_endpoint');
  }
  public set logoutEndpoint(value: string) {
    this._logoutEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEndpointInput() {
    return this._logoutEndpoint
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint
  }
}
export interface SagemakerWorkforceSourceIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cidrs SagemakerWorkforce#cidrs}
  */
  readonly cidrs: string[];
}

export function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cidrs),
  }
}

export class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cidrs - computed: false, optional: false, required: true
  private _cidrs?: string[]; 
  public get cidrs() {
    return this.getListAttribute('cidrs');
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
*/
export class SagemakerWorkforce extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_workforce";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerWorkforceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_workforce',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._workforceName = config.workforceName;
    this._cognitoConfig = config.cognitoConfig;
    this._oidcConfig = config.oidcConfig;
    this._sourceIpConfig = config.sourceIpConfig;
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

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // workforce_name - computed: false, optional: false, required: true
  private _workforceName?: string; 
  public get workforceName() {
    return this.getStringAttribute('workforce_name');
  }
  public set workforceName(value: string) {
    this._workforceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceNameInput() {
    return this._workforceName
  }

  // cognito_config - computed: false, optional: true, required: false
  private _cognitoConfig?: SagemakerWorkforceCognitoConfig | undefined; 
  private __cognitoConfigOutput = new SagemakerWorkforceCognitoConfigOutputReference(this as any, "cognito_config", true);
  public get cognitoConfig() {
    return this.__cognitoConfigOutput;
  }
  public putCognitoConfig(value: SagemakerWorkforceCognitoConfig | undefined) {
    this._cognitoConfig = value;
  }
  public resetCognitoConfig() {
    this._cognitoConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoConfigInput() {
    return this._cognitoConfig
  }

  // oidc_config - computed: false, optional: true, required: false
  private _oidcConfig?: SagemakerWorkforceOidcConfig | undefined; 
  private __oidcConfigOutput = new SagemakerWorkforceOidcConfigOutputReference(this as any, "oidc_config", true);
  public get oidcConfig() {
    return this.__oidcConfigOutput;
  }
  public putOidcConfig(value: SagemakerWorkforceOidcConfig | undefined) {
    this._oidcConfig = value;
  }
  public resetOidcConfig() {
    this._oidcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig
  }

  // source_ip_config - computed: false, optional: true, required: false
  private _sourceIpConfig?: SagemakerWorkforceSourceIpConfig | undefined; 
  private __sourceIpConfigOutput = new SagemakerWorkforceSourceIpConfigOutputReference(this as any, "source_ip_config", true);
  public get sourceIpConfig() {
    return this.__sourceIpConfigOutput;
  }
  public putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig | undefined) {
    this._sourceIpConfig = value;
  }
  public resetSourceIpConfig() {
    this._sourceIpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpConfigInput() {
    return this._sourceIpConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workforce_name: cdktf.stringToTerraform(this._workforceName),
      cognito_config: sagemakerWorkforceCognitoConfigToTerraform(this._cognitoConfig),
      oidc_config: sagemakerWorkforceOidcConfigToTerraform(this._oidcConfig),
      source_ip_config: sagemakerWorkforceSourceIpConfigToTerraform(this._sourceIpConfig),
    };
  }
}