// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontCachePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#comment CloudfrontCachePolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#default_ttl CloudfrontCachePolicy#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#max_ttl CloudfrontCachePolicy#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#min_ttl CloudfrontCachePolicy#min_ttl}
  */
  readonly minTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#name CloudfrontCachePolicy#name}
  */
  readonly name: string;
  /**
  * parameters_in_cache_key_and_forwarded_to_origin block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#parameters_in_cache_key_and_forwarded_to_origin CloudfrontCachePolicy#parameters_in_cache_key_and_forwarded_to_origin}
  */
  readonly parametersInCacheKeyAndForwardedToOrigin: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin;
}
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookie_behavior CloudfrontCachePolicy#cookie_behavior}
  */
  readonly cookieBehavior: string;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies CloudfrontCachePolicy#cookies}
  */
  readonly cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_behavior: cdktf.stringToTerraform(struct!.cookieBehavior),
    cookies: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesToTerraform(struct!.cookies),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference extends cdktf.ComplexObject {
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
  private _cookies?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined; 
  private __cookiesOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookiesOutputReference(this as any, "cookies", true);
  public get cookies() {
    return this.__cookiesOutput;
  }
  public putCookies(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigCookies | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#header_behavior CloudfrontCachePolicy#header_behavior}
  */
  readonly headerBehavior?: string;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers CloudfrontCachePolicy#headers}
  */
  readonly headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_behavior: cdktf.stringToTerraform(struct!.headerBehavior),
    headers: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersToTerraform(struct!.headers),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference extends cdktf.ComplexObject {
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
  private _headers?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined; 
  private __headersOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeadersOutputReference(this as any, "headers", true);
  public get headers() {
    return this.__headersOutput;
  }
  public putHeaders(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigHeaders | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#items CloudfrontCachePolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_string_behavior CloudfrontCachePolicy#query_string_behavior}
  */
  readonly queryStringBehavior: string;
  /**
  * query_strings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings CloudfrontCachePolicy#query_strings}
  */
  readonly queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_string_behavior: cdktf.stringToTerraform(struct!.queryStringBehavior),
    query_strings: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsToTerraform(struct!.queryStrings),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference extends cdktf.ComplexObject {
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
  private _queryStrings?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined; 
  private __queryStringsOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStringsOutputReference(this as any, "query_strings", true);
  public get queryStrings() {
    return this.__queryStringsOutput;
  }
  public putQueryStrings(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigQueryStrings | undefined) {
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
export interface CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_brotli CloudfrontCachePolicy#enable_accept_encoding_brotli}
  */
  readonly enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#enable_accept_encoding_gzip CloudfrontCachePolicy#enable_accept_encoding_gzip}
  */
  readonly enableAcceptEncodingGzip?: boolean | cdktf.IResolvable;
  /**
  * cookies_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#cookies_config CloudfrontCachePolicy#cookies_config}
  */
  readonly cookiesConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig;
  /**
  * headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#headers_config CloudfrontCachePolicy#headers_config}
  */
  readonly headersConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig;
  /**
  * query_strings_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html#query_strings_config CloudfrontCachePolicy#query_strings_config}
  */
  readonly queryStringsConfig: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig;
}

export function cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(struct?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference | CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_accept_encoding_brotli: cdktf.booleanToTerraform(struct!.enableAcceptEncodingBrotli),
    enable_accept_encoding_gzip: cdktf.booleanToTerraform(struct!.enableAcceptEncodingGzip),
    cookies_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigToTerraform(struct!.cookiesConfig),
    headers_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigToTerraform(struct!.headersConfig),
    query_strings_config: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigToTerraform(struct!.queryStringsConfig),
  }
}

export class CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_accept_encoding_brotli - computed: false, optional: true, required: false
  private _enableAcceptEncodingBrotli?: boolean | cdktf.IResolvable | undefined; 
  public get enableAcceptEncodingBrotli() {
    return this.getBooleanAttribute('enable_accept_encoding_brotli') as any;
  }
  public set enableAcceptEncodingBrotli(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAcceptEncodingBrotli = value;
  }
  public resetEnableAcceptEncodingBrotli() {
    this._enableAcceptEncodingBrotli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingBrotliInput() {
    return this._enableAcceptEncodingBrotli
  }

  // enable_accept_encoding_gzip - computed: false, optional: true, required: false
  private _enableAcceptEncodingGzip?: boolean | cdktf.IResolvable | undefined; 
  public get enableAcceptEncodingGzip() {
    return this.getBooleanAttribute('enable_accept_encoding_gzip') as any;
  }
  public set enableAcceptEncodingGzip(value: boolean | cdktf.IResolvable | undefined) {
    this._enableAcceptEncodingGzip = value;
  }
  public resetEnableAcceptEncodingGzip() {
    this._enableAcceptEncodingGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAcceptEncodingGzipInput() {
    return this._enableAcceptEncodingGzip
  }

  // cookies_config - computed: false, optional: false, required: true
  private _cookiesConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig; 
  private __cookiesConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfigOutputReference(this as any, "cookies_config", true);
  public get cookiesConfig() {
    return this.__cookiesConfigOutput;
  }
  public putCookiesConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginCookiesConfig) {
    this._cookiesConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesConfigInput() {
    return this._cookiesConfig
  }

  // headers_config - computed: false, optional: false, required: true
  private _headersConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig; 
  private __headersConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfigOutputReference(this as any, "headers_config", true);
  public get headersConfig() {
    return this.__headersConfigOutput;
  }
  public putHeadersConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginHeadersConfig) {
    this._headersConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersConfigInput() {
    return this._headersConfig
  }

  // query_strings_config - computed: false, optional: false, required: true
  private _queryStringsConfig?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig; 
  private __queryStringsConfigOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfigOutputReference(this as any, "query_strings_config", true);
  public get queryStringsConfig() {
    return this.__queryStringsConfigOutput;
  }
  public putQueryStringsConfig(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginQueryStringsConfig) {
    this._queryStringsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsConfigInput() {
    return this._queryStringsConfig
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy}
*/
export class CloudfrontCachePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_cache_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_cache_policy.html aws_cloudfront_cache_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontCachePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontCachePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_cache_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._defaultTtl = config.defaultTtl;
    this._maxTtl = config.maxTtl;
    this._minTtl = config.minTtl;
    this._name = config.name;
    this._parametersInCacheKeyAndForwardedToOrigin = config.parametersInCacheKeyAndForwardedToOrigin;
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

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number | undefined; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number | undefined) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_ttl - computed: false, optional: true, required: false
  private _maxTtl?: number | undefined; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number | undefined) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl
  }

  // min_ttl - computed: false, optional: true, required: false
  private _minTtl?: number | undefined; 
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
  }
  public set minTtl(value: number | undefined) {
    this._minTtl = value;
  }
  public resetMinTtl() {
    this._minTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTtlInput() {
    return this._minTtl
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

  // parameters_in_cache_key_and_forwarded_to_origin - computed: false, optional: false, required: true
  private _parametersInCacheKeyAndForwardedToOrigin?: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin; 
  private __parametersInCacheKeyAndForwardedToOriginOutput = new CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginOutputReference(this as any, "parameters_in_cache_key_and_forwarded_to_origin", true);
  public get parametersInCacheKeyAndForwardedToOrigin() {
    return this.__parametersInCacheKeyAndForwardedToOriginOutput;
  }
  public putParametersInCacheKeyAndForwardedToOrigin(value: CloudfrontCachePolicyParametersInCacheKeyAndForwardedToOrigin) {
    this._parametersInCacheKeyAndForwardedToOrigin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInCacheKeyAndForwardedToOriginInput() {
    return this._parametersInCacheKeyAndForwardedToOrigin
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      max_ttl: cdktf.numberToTerraform(this._maxTtl),
      min_ttl: cdktf.numberToTerraform(this._minTtl),
      name: cdktf.stringToTerraform(this._name),
      parameters_in_cache_key_and_forwarded_to_origin: cloudfrontCachePolicyParametersInCacheKeyAndForwardedToOriginToTerraform(this._parametersInCacheKeyAndForwardedToOrigin),
    };
  }
}
