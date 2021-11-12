// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch Event Bridge
*/
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
  readonly authParameters: CloudwatchEventConnectionAuthParameters;
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

export function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
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

export function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
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

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct!.queryString),
  }
}

export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | undefined; 
  public get body() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('body') as any;
  }
  public set body(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // header - computed: false, optional: true, required: false
  private _header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | undefined; 
  public get queryString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_string') as any;
  }
  public set queryString(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
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

export function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
  }
}

export class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
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

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct!.body),
    header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct!.header),
    query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct!.queryString),
  }
}

export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | undefined; 
  public get body() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('body') as any;
  }
  public set body(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // header - computed: false, optional: true, required: false
  private _header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | undefined; 
  public get header() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('header') as any;
  }
  public set header(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | undefined; 
  public get queryString() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query_string') as any;
  }
  public set queryString(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
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
  readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters;
  /**
  * oauth_http_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
  */
  readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
}

export function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    client_parameters: cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct!.clientParameters),
    oauth_http_parameters: cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct!.oauthHttpParameters),
  }
}

export class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
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

  // http_method - computed: false, optional: false, required: true
  private _httpMethod?: string; 
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

  // client_parameters - computed: false, optional: true, required: false
  private _clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined; 
  private __clientParametersOutput = new CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(this as any, "client_parameters", true);
  public get clientParameters() {
    return this.__clientParametersOutput;
  }
  public putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined) {
    this._clientParameters = value;
  }
  public resetClientParameters() {
    this._clientParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientParametersInput() {
    return this._clientParameters
  }

  // oauth_http_parameters - computed: false, optional: false, required: true
  private _oauthHttpParameters?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters; 
  private __oauthHttpParametersOutput = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(this as any, "oauth_http_parameters", true);
  public get oauthHttpParameters() {
    return this.__oauthHttpParametersOutput;
  }
  public putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters) {
    this._oauthHttpParameters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthHttpParametersInput() {
    return this._oauthHttpParameters
  }
}
export interface CloudwatchEventConnectionAuthParameters {
  /**
  * api_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#api_key CloudwatchEventConnection#api_key}
  */
  readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey;
  /**
  * basic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#basic CloudwatchEventConnection#basic}
  */
  readonly basic?: CloudwatchEventConnectionAuthParametersBasic;
  /**
  * invocation_http_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
  */
  readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
  /**
  * oauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth CloudwatchEventConnection#oauth}
  */
  readonly oauth?: CloudwatchEventConnectionAuthParametersOauth;
}

export function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct!.apiKey),
    basic: cloudwatchEventConnectionAuthParametersBasicToTerraform(struct!.basic),
    invocation_http_parameters: cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct!.invocationHttpParameters),
    oauth: cloudwatchEventConnectionAuthParametersOauthToTerraform(struct!.oauth),
  }
}

export class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: CloudwatchEventConnectionAuthParametersApiKey | undefined; 
  private __apiKeyOutput = new CloudwatchEventConnectionAuthParametersApiKeyOutputReference(this as any, "api_key", true);
  public get apiKey() {
    return this.__apiKeyOutput;
  }
  public putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey
  }

  // basic - computed: false, optional: true, required: false
  private _basic?: CloudwatchEventConnectionAuthParametersBasic | undefined; 
  private __basicOutput = new CloudwatchEventConnectionAuthParametersBasicOutputReference(this as any, "basic", true);
  public get basic() {
    return this.__basicOutput;
  }
  public putBasic(value: CloudwatchEventConnectionAuthParametersBasic | undefined) {
    this._basic = value;
  }
  public resetBasic() {
    this._basic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic
  }

  // invocation_http_parameters - computed: false, optional: true, required: false
  private _invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined; 
  private __invocationHttpParametersOutput = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(this as any, "invocation_http_parameters", true);
  public get invocationHttpParameters() {
    return this.__invocationHttpParametersOutput;
  }
  public putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined) {
    this._invocationHttpParameters = value;
  }
  public resetInvocationHttpParameters() {
    this._invocationHttpParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationHttpParametersInput() {
    return this._invocationHttpParameters
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth?: CloudwatchEventConnectionAuthParametersOauth | undefined; 
  private __oauthOutput = new CloudwatchEventConnectionAuthParametersOauthOutputReference(this as any, "oauth", true);
  public get oauth() {
    return this.__oauthOutput;
  }
  public putOauth(value: CloudwatchEventConnectionAuthParametersOauth | undefined) {
    this._oauth = value;
  }
  public resetOauth() {
    this._oauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth
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
  private _authorizationType?: string; 
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }

  // auth_parameters - computed: false, optional: false, required: true
  private _authParameters?: CloudwatchEventConnectionAuthParameters; 
  private __authParametersOutput = new CloudwatchEventConnectionAuthParametersOutputReference(this as any, "auth_parameters", true);
  public get authParameters() {
    return this.__authParametersOutput;
  }
  public putAuthParameters(value: CloudwatchEventConnectionAuthParameters) {
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
      auth_parameters: cloudwatchEventConnectionAuthParametersToTerraform(this._authParameters),
    };
  }
}
