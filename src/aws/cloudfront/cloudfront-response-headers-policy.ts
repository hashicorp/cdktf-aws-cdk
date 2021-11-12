// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudFront
*/
export interface CloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#comment CloudfrontResponseHeadersPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#etag CloudfrontResponseHeadersPolicy#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#name CloudfrontResponseHeadersPolicy#name}
  */
  readonly name: string;
  /**
  * cors_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#cors_config CloudfrontResponseHeadersPolicy#cors_config}
  */
  readonly corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig;
  /**
  * custom_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
  */
  readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig;
  /**
  * security_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
  */
  readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig;
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

export function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference | CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference extends cdktf.ComplexObject {
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
export interface CloudfrontResponseHeadersPolicyCorsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#origin_override CloudfrontResponseHeadersPolicy#origin_override}
  */
  readonly originOverride: boolean | cdktf.IResolvable;
  /**
  * access_control_allow_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders;
  /**
  * access_control_allow_methods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
  */
  readonly accessControlAllowMethods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods;
  /**
  * access_control_allow_origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins;
  /**
  * access_control_expose_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders;
}

export function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigOutputReference | CloudfrontResponseHeadersPolicyCorsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_allow_credentials: cdktf.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktf.booleanToTerraform(struct!.originOverride),
    access_control_allow_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct!.accessControlAllowHeaders),
    access_control_allow_methods: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct!.accessControlAllowMethods),
    access_control_allow_origins: cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct!.accessControlAllowOrigins),
    access_control_expose_headers: cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct!.accessControlExposeHeaders),
  }
}

export class CloudfrontResponseHeadersPolicyCorsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_control_allow_credentials - computed: false, optional: false, required: true
  private _accessControlAllowCredentials?: boolean | cdktf.IResolvable; 
  public get accessControlAllowCredentials() {
    return this.getBooleanAttribute('access_control_allow_credentials') as any;
  }
  public set accessControlAllowCredentials(value: boolean | cdktf.IResolvable) {
    this._accessControlAllowCredentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowCredentialsInput() {
    return this._accessControlAllowCredentials
  }

  // access_control_max_age_sec - computed: false, optional: true, required: false
  private _accessControlMaxAgeSec?: number | undefined; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number | undefined) {
    this._accessControlMaxAgeSec = value;
  }
  public resetAccessControlMaxAgeSec() {
    this._accessControlMaxAgeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec
  }

  // origin_override - computed: false, optional: false, required: true
  private _originOverride?: boolean | cdktf.IResolvable; 
  public get originOverride() {
    return this.getBooleanAttribute('origin_override') as any;
  }
  public set originOverride(value: boolean | cdktf.IResolvable) {
    this._originOverride = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originOverrideInput() {
    return this._originOverride
  }

  // access_control_allow_headers - computed: false, optional: false, required: true
  private _accessControlAllowHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders; 
  private __accessControlAllowHeadersOutput = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersOutputReference(this as any, "access_control_allow_headers", true);
  public get accessControlAllowHeaders() {
    return this.__accessControlAllowHeadersOutput;
  }
  public putAccessControlAllowHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders) {
    this._accessControlAllowHeaders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowHeadersInput() {
    return this._accessControlAllowHeaders
  }

  // access_control_allow_methods - computed: false, optional: false, required: true
  private _accessControlAllowMethods?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods; 
  private __accessControlAllowMethodsOutput = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsOutputReference(this as any, "access_control_allow_methods", true);
  public get accessControlAllowMethods() {
    return this.__accessControlAllowMethodsOutput;
  }
  public putAccessControlAllowMethods(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods) {
    this._accessControlAllowMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowMethodsInput() {
    return this._accessControlAllowMethods
  }

  // access_control_allow_origins - computed: false, optional: false, required: true
  private _accessControlAllowOrigins?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins; 
  private __accessControlAllowOriginsOutput = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsOutputReference(this as any, "access_control_allow_origins", true);
  public get accessControlAllowOrigins() {
    return this.__accessControlAllowOriginsOutput;
  }
  public putAccessControlAllowOrigins(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins) {
    this._accessControlAllowOrigins = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlAllowOriginsInput() {
    return this._accessControlAllowOrigins
  }

  // access_control_expose_headers - computed: false, optional: true, required: false
  private _accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined; 
  private __accessControlExposeHeadersOutput = new CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersOutputReference(this as any, "access_control_expose_headers", true);
  public get accessControlExposeHeaders() {
    return this.__accessControlExposeHeadersOutput;
  }
  public putAccessControlExposeHeaders(value: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders | undefined) {
    this._accessControlExposeHeaders = value;
  }
  public resetAccessControlExposeHeaders() {
    this._accessControlExposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlExposeHeadersInput() {
    return this._accessControlExposeHeaders
  }
}
export interface CloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#header CloudfrontResponseHeadersPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#value CloudfrontResponseHeadersPolicy#value}
  */
  readonly value: string;
}

export function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    override: cdktf.booleanToTerraform(struct!.override),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudfrontResponseHeadersPolicyCustomHeadersConfig {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[];
}

export function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference | CloudfrontResponseHeadersPolicyCustomHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform)(struct!.items),
  }
}

export class CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // items - computed: false, optional: true, required: false
  private _items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | undefined; 
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items') as any;
  }
  public set items(value: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[] | undefined) {
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
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_security_policy - computed: false, optional: false, required: true
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_option CloudfrontResponseHeadersPolicy#frame_option}
  */
  readonly frameOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frame_option: cdktf.stringToTerraform(struct!.frameOption),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // frame_option - computed: false, optional: false, required: true
  private _frameOption?: string; 
  public get frameOption() {
    return this.getStringAttribute('frame_option');
  }
  public set frameOption(value: string) {
    this._frameOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionInput() {
    return this._frameOption
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy: string;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }

  // referrer_policy - computed: false, optional: false, required: true
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#preload CloudfrontResponseHeadersPolicy#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    override: cdktf.booleanToTerraform(struct!.override),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_control_max_age_sec - computed: false, optional: false, required: true
  private _accessControlMaxAgeSec?: number; 
  public get accessControlMaxAgeSec() {
    return this.getNumberAttribute('access_control_max_age_sec');
  }
  public set accessControlMaxAgeSec(value: number) {
    this._accessControlMaxAgeSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlMaxAgeSecInput() {
    return this._accessControlMaxAgeSec
  }

  // include_subdomains - computed: false, optional: true, required: false
  private _includeSubdomains?: boolean | cdktf.IResolvable | undefined; 
  public get includeSubdomains() {
    return this.getBooleanAttribute('include_subdomains') as any;
  }
  public set includeSubdomains(value: boolean | cdktf.IResolvable | undefined) {
    this._includeSubdomains = value;
  }
  public resetIncludeSubdomains() {
    this._includeSubdomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSubdomainsInput() {
    return this._includeSubdomains
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: boolean | cdktf.IResolvable | undefined; 
  public get preload() {
    return this.getBooleanAttribute('preload') as any;
  }
  public set preload(value: boolean | cdktf.IResolvable | undefined) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#mode_block CloudfrontResponseHeadersPolicy#mode_block}
  */
  readonly modeBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#protection CloudfrontResponseHeadersPolicy#protection}
  */
  readonly protection: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#report_uri CloudfrontResponseHeadersPolicy#report_uri}
  */
  readonly reportUri?: string;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode_block: cdktf.booleanToTerraform(struct!.modeBlock),
    override: cdktf.booleanToTerraform(struct!.override),
    protection: cdktf.booleanToTerraform(struct!.protection),
    report_uri: cdktf.stringToTerraform(struct!.reportUri),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode_block - computed: false, optional: true, required: false
  private _modeBlock?: boolean | cdktf.IResolvable | undefined; 
  public get modeBlock() {
    return this.getBooleanAttribute('mode_block') as any;
  }
  public set modeBlock(value: boolean | cdktf.IResolvable | undefined) {
    this._modeBlock = value;
  }
  public resetModeBlock() {
    this._modeBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeBlockInput() {
    return this._modeBlock
  }

  // override - computed: false, optional: false, required: true
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override') as any;
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override
  }

  // protection - computed: false, optional: false, required: true
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection') as any;
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection
  }

  // report_uri - computed: false, optional: true, required: false
  private _reportUri?: string | undefined; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string | undefined) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri
  }
}
export interface CloudfrontResponseHeadersPolicySecurityHeadersConfig {
  /**
  * content_security_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy;
  /**
  * content_type_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
  */
  readonly contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions;
  /**
  * frame_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_options CloudfrontResponseHeadersPolicy#frame_options}
  */
  readonly frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions;
  /**
  * referrer_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy;
  /**
  * strict_transport_security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
  */
  readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity;
  /**
  * xss_protection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
  */
  readonly xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection;
}

export function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference | CloudfrontResponseHeadersPolicySecurityHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct!.contentSecurityPolicy),
    content_type_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct!.contentTypeOptions),
    frame_options: cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct!.frameOptions),
    referrer_policy: cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct!.referrerPolicy),
    strict_transport_security: cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct!.strictTransportSecurity),
    xss_protection: cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct!.xssProtection),
  }
}

export class CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined; 
  private __contentSecurityPolicyOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyOutputReference(this as any, "content_security_policy", true);
  public get contentSecurityPolicy() {
    return this.__contentSecurityPolicyOutput;
  }
  public putContentSecurityPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy | undefined) {
    this._contentSecurityPolicy = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy
  }

  // content_type_options - computed: false, optional: true, required: false
  private _contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined; 
  private __contentTypeOptionsOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsOutputReference(this as any, "content_type_options", true);
  public get contentTypeOptions() {
    return this.__contentTypeOptionsOutput;
  }
  public putContentTypeOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions | undefined) {
    this._contentTypeOptions = value;
  }
  public resetContentTypeOptions() {
    this._contentTypeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeOptionsInput() {
    return this._contentTypeOptions
  }

  // frame_options - computed: false, optional: true, required: false
  private _frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined; 
  private __frameOptionsOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsOutputReference(this as any, "frame_options", true);
  public get frameOptions() {
    return this.__frameOptionsOutput;
  }
  public putFrameOptions(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions | undefined) {
    this._frameOptions = value;
  }
  public resetFrameOptions() {
    this._frameOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameOptionsInput() {
    return this._frameOptions
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined; 
  private __referrerPolicyOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyOutputReference(this as any, "referrer_policy", true);
  public get referrerPolicy() {
    return this.__referrerPolicyOutput;
  }
  public putReferrerPolicy(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy | undefined) {
    this._referrerPolicy = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined; 
  private __strictTransportSecurityOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityOutputReference(this as any, "strict_transport_security", true);
  public get strictTransportSecurity() {
    return this.__strictTransportSecurityOutput;
  }
  public putStrictTransportSecurity(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity | undefined) {
    this._strictTransportSecurity = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity
  }

  // xss_protection - computed: false, optional: true, required: false
  private _xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined; 
  private __xssProtectionOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionOutputReference(this as any, "xss_protection", true);
  public get xssProtection() {
    return this.__xssProtectionOutput;
  }
  public putXssProtection(value: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection | undefined) {
    this._xssProtection = value;
  }
  public resetXssProtection() {
    this._xssProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssProtectionInput() {
    return this._xssProtection
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_response_headers_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._etag = config.etag;
    this._name = config.name;
    this._corsConfig = config.corsConfig;
    this._customHeadersConfig = config.customHeadersConfig;
    this._securityHeadersConfig = config.securityHeadersConfig;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string | undefined; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string | undefined) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
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

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig | undefined; 
  private __corsConfigOutput = new CloudfrontResponseHeadersPolicyCorsConfigOutputReference(this as any, "cors_config", true);
  public get corsConfig() {
    return this.__corsConfigOutput;
  }
  public putCorsConfig(value: CloudfrontResponseHeadersPolicyCorsConfig | undefined) {
    this._corsConfig = value;
  }
  public resetCorsConfig() {
    this._corsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig
  }

  // custom_headers_config - computed: false, optional: true, required: false
  private _customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined; 
  private __customHeadersConfigOutput = new CloudfrontResponseHeadersPolicyCustomHeadersConfigOutputReference(this as any, "custom_headers_config", true);
  public get customHeadersConfig() {
    return this.__customHeadersConfigOutput;
  }
  public putCustomHeadersConfig(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig | undefined) {
    this._customHeadersConfig = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig
  }

  // security_headers_config - computed: false, optional: true, required: false
  private _securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined; 
  private __securityHeadersConfigOutput = new CloudfrontResponseHeadersPolicySecurityHeadersConfigOutputReference(this as any, "security_headers_config", true);
  public get securityHeadersConfig() {
    return this.__securityHeadersConfigOutput;
  }
  public putSecurityHeadersConfig(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig | undefined) {
    this._securityHeadersConfig = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      etag: cdktf.stringToTerraform(this._etag),
      name: cdktf.stringToTerraform(this._name),
      cors_config: cloudfrontResponseHeadersPolicyCorsConfigToTerraform(this._corsConfig),
      custom_headers_config: cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(this._customHeadersConfig),
      security_headers_config: cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(this._securityHeadersConfig),
    };
  }
}
