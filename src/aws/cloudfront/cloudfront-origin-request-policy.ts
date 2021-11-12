// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontOriginRequestPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#comment CloudfrontOriginRequestPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#name CloudfrontOriginRequestPolicy#name}
  */
  readonly name: string;
  /**
  * cookies_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies_config CloudfrontOriginRequestPolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontOriginRequestPolicyCookiesConfig;
  /**
  * headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers_config CloudfrontOriginRequestPolicy#headers_config}
  */
  readonly headersConfig: CloudfrontOriginRequestPolicyHeadersConfig;
  /**
  * query_strings_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings_config CloudfrontOriginRequestPolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontOriginRequestPolicyQueryStringsConfig;
}
export interface CloudfrontOriginRequestPolicyCookiesConfigCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference | CloudfrontOriginRequestPolicyCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[] | undefined; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface CloudfrontOriginRequestPolicyCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookie_behavior CloudfrontOriginRequestPolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#cookies CloudfrontOriginRequestPolicy#cookies}
  */
  readonly cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies;
}

export function cloudfrontOriginRequestPolicyCookiesConfigToTerraform(struct?: CloudfrontOriginRequestPolicyCookiesConfigOutputReference | CloudfrontOriginRequestPolicyCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cloudfrontOriginRequestPolicyCookiesConfigCookiesToTerraform(struct!.cookies),
  }
}

export class CloudfrontOriginRequestPolicyCookiesConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cookie_behavior - computed: false, optional: false, required: true
  private _cookieBehavior?: string; 
  public get cookieBehavior() {
    return this.getStringAttribute('cookie_behavior');
  }
  public set cookieBehavior(value: string) {
    this._cookieBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieBehaviorInput() {
    return this._cookieBehavior
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies?: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined; 
  private __cookiesOutput = new CloudfrontOriginRequestPolicyCookiesConfigCookiesOutputReference(this as any, "cookies", true);
  public get cookies() {
    return this.__cookiesOutput;
  }
  public putCookies(value: CloudfrontOriginRequestPolicyCookiesConfigCookies | undefined) {
    this._cookies = value;
  }
  public resetCookies() {
    this._cookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies
  }
}
export interface CloudfrontOriginRequestPolicyHeadersConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference | CloudfrontOriginRequestPolicyHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[] | undefined; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface CloudfrontOriginRequestPolicyHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#header_behavior CloudfrontOriginRequestPolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#headers CloudfrontOriginRequestPolicy#headers}
  */
  readonly headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders;
}

export function cloudfrontOriginRequestPolicyHeadersConfigToTerraform(struct?: CloudfrontOriginRequestPolicyHeadersConfigOutputReference | CloudfrontOriginRequestPolicyHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cloudfrontOriginRequestPolicyHeadersConfigHeadersToTerraform(struct!.headers),
  }
}

export class CloudfrontOriginRequestPolicyHeadersConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // header_behavior - computed: false, optional: true, required: false
  private _headerBehavior?: string | undefined; 
  public get headerBehavior() {
    return this.getStringAttribute('header_behavior');
  }
  public set headerBehavior(value: string | undefined) {
    this._headerBehavior = value;
  }
  public resetHeaderBehavior() {
    this._headerBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBehaviorInput() {
    return this._headerBehavior
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined; 
  private __headersOutput = new CloudfrontOriginRequestPolicyHeadersConfigHeadersOutputReference(this as any, "headers", true);
  public get headers() {
    return this.__headersOutput;
  }
  public putHeaders(value: CloudfrontOriginRequestPolicyHeadersConfigHeaders | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers
  }
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#items CloudfrontOriginRequestPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: string[] | undefined; 
  public get items() {
    return this.getListAttribute('items');
  }
  public set items(value: string[] | undefined) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items
  }
}
export interface CloudfrontOriginRequestPolicyQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_string_behavior CloudfrontOriginRequestPolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html#query_strings CloudfrontOriginRequestPolicy#query_strings}
  */
  readonly queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings;
}

export function cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(struct?: CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference | CloudfrontOriginRequestPolicyQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
  }
}

export class CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // query_string_behavior - computed: false, optional: false, required: true
  private _queryStringBehavior?: string; 
  public get queryStringBehavior() {
    return this.getStringAttribute('query_string_behavior');
  }
  public set queryStringBehavior(value: string) {
    this._queryStringBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringBehaviorInput() {
    return this._queryStringBehavior
  }

  // query_strings - computed: false, optional: true, required: false
  private _queryStrings?: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined; 
  private __queryStringsOutput = new CloudfrontOriginRequestPolicyQueryStringsConfigQueryStringsOutputReference(this as any, "query_strings", true);
  public get queryStrings() {
    return this.__queryStringsOutput;
  }
  public putQueryStrings(value: CloudfrontOriginRequestPolicyQueryStringsConfigQueryStrings | undefined) {
    this._queryStrings = value;
  }
  public resetQueryStrings() {
    this._queryStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsInput() {
    return this._queryStrings
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy}
*/
export class CloudfrontOriginRequestPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_origin_request_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_origin_request_policy.html aws_cloudfront_origin_request_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontOriginRequestPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontOriginRequestPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_origin_request_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._name = config.name;
    this._cookiesConfig = config.cookiesConfig;
    this._headersConfig = config.headersConfig;
    this._queryStringsConfig = config.queryStringsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig?: CloudfrontOriginRequestPolicyCookiesConfig; 
  private __cookiesConfigOutput = new CloudfrontOriginRequestPolicyCookiesConfigOutputReference(this as any, "cookies_config", true);
  public get cookiesConfig() {
    return this.__cookiesConfigOutput;
  }
  public putCookiesConfig(value: CloudfrontOriginRequestPolicyCookiesConfig) {
    this._cookiesConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig?: CloudfrontOriginRequestPolicyHeadersConfig; 
  private __headersConfigOutput = new CloudfrontOriginRequestPolicyHeadersConfigOutputReference(this as any, "headers_config", true);
  public get headersConfig() {
    return this.__headersConfigOutput;
  }
  public putHeadersConfig(value: CloudfrontOriginRequestPolicyHeadersConfig) {
    this._headersConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig?: CloudfrontOriginRequestPolicyQueryStringsConfig; 
  private __queryStringsConfigOutput = new CloudfrontOriginRequestPolicyQueryStringsConfigOutputReference(this as any, "query_strings_config", true);
  public get queryStringsConfig() {
    return this.__queryStringsConfigOutput;
  }
  public putQueryStringsConfig(value: CloudfrontOriginRequestPolicyQueryStringsConfig) {
    this._queryStringsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      name: cdktf.stringToTerraform(this._name),
      cookies_config: cloudfrontOriginRequestPolicyCookiesConfigToTerraform(this._cookiesConfig),
      headers_config: cloudfrontOriginRequestPolicyHeadersConfigToTerraform(this._headersConfig),
      query_strings_config: cloudfrontOriginRequestPolicyQueryStringsConfigToTerraform(this._queryStringsConfig),
    };
  }
}
