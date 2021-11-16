import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementAndStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementAndStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementByteMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementByteMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementGeoMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementGeoMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementNotStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementNotStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementOrStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementOrStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference } from './structs3200'
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig,
wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference,
Wafv2WebAclRuleStatementOrStatement,
wafv2WebAclRuleStatementOrStatementToTerraform,
Wafv2WebAclRuleStatementOrStatementOutputReference } from './structs2800'
import { Wafv2WebAclRuleStatementAndStatement,
wafv2WebAclRuleStatementAndStatementToTerraform,
Wafv2WebAclRuleStatementAndStatementOutputReference,
Wafv2WebAclRuleStatementByteMatchStatement,
wafv2WebAclRuleStatementByteMatchStatementToTerraform,
Wafv2WebAclRuleStatementByteMatchStatementOutputReference,
Wafv2WebAclRuleStatementGeoMatchStatement,
wafv2WebAclRuleStatementGeoMatchStatementToTerraform,
Wafv2WebAclRuleStatementGeoMatchStatementOutputReference,
Wafv2WebAclRuleStatementIpSetReferenceStatement,
wafv2WebAclRuleStatementIpSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference } from './structs400'
import { Wafv2WebAclRuleStatementManagedRuleGroupStatement,
wafv2WebAclRuleStatementManagedRuleGroupStatementToTerraform,
Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference } from './structs1200'
import { Wafv2WebAclRuleStatementNotStatement,
wafv2WebAclRuleStatementNotStatementToTerraform,
Wafv2WebAclRuleStatementNotStatementOutputReference } from './structs2000'
import { Wafv2WebAclRuleAction,
wafv2WebAclRuleActionToTerraform,
Wafv2WebAclRuleOverrideAction,
wafv2WebAclRuleOverrideActionToTerraform } from './structs0'
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatement {
  /**
  * and_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
  */
  readonly andStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementAndStatement;
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement;
  /**
  * not_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
  */
  readonly notStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementNotStatement;
  /**
  * or_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
  */
  readonly orStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementOrStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementAndStatementToTerraform(struct!.andStatement),
    byte_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    not_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementNotStatementToTerraform(struct!.notStatement),
    or_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementOrStatementToTerraform(struct!.orStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement {
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
  */
  readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatement[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statement: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatement[]; 
  public get statement() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('statement') as any;
  }
  public set statement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementStatement[]) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement {
  /**
  * and_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
  */
  readonly andStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement;
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement;
  /**
  * not_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
  */
  readonly notStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement;
  /**
  * or_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
  */
  readonly orStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementToTerraform(struct!.andStatement),
    byte_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    not_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementToTerraform(struct!.notStatement),
    or_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementToTerraform(struct!.orStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // and_statement - computed: false, optional: true, required: false
  private _andStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement | undefined; 
  private __andStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference(this as any, "and_statement", true);
  public get andStatement() {
    return this.__andStatementOutput;
  }
  public putAndStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement | undefined) {
    this._andStatement = value;
  }
  public resetAndStatement() {
    this._andStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andStatementInput() {
    return this._andStatement
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement | undefined; 
  private __byteMatchStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference(this as any, "byte_match_statement", true);
  public get byteMatchStatement() {
    return this.__byteMatchStatementOutput;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement | undefined) {
    this._byteMatchStatement = value;
  }
  public resetByteMatchStatement() {
    this._byteMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchStatementInput() {
    return this._byteMatchStatement
  }

  // geo_match_statement - computed: false, optional: true, required: false
  private _geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement | undefined; 
  private __geoMatchStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference(this as any, "geo_match_statement", true);
  public get geoMatchStatement() {
    return this.__geoMatchStatementOutput;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement | undefined) {
    this._geoMatchStatement = value;
  }
  public resetGeoMatchStatement() {
    this._geoMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchStatementInput() {
    return this._geoMatchStatement
  }

  // ip_set_reference_statement - computed: false, optional: true, required: false
  private _ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement | undefined; 
  private __ipSetReferenceStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference(this as any, "ip_set_reference_statement", true);
  public get ipSetReferenceStatement() {
    return this.__ipSetReferenceStatementOutput;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement | undefined) {
    this._ipSetReferenceStatement = value;
  }
  public resetIpSetReferenceStatement() {
    this._ipSetReferenceStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceStatementInput() {
    return this._ipSetReferenceStatement
  }

  // not_statement - computed: false, optional: true, required: false
  private _notStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement | undefined; 
  private __notStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference(this as any, "not_statement", true);
  public get notStatement() {
    return this.__notStatementOutput;
  }
  public putNotStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement | undefined) {
    this._notStatement = value;
  }
  public resetNotStatement() {
    this._notStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStatementInput() {
    return this._notStatement
  }

  // or_statement - computed: false, optional: true, required: false
  private _orStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement | undefined; 
  private __orStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference(this as any, "or_statement", true);
  public get orStatement() {
    return this.__orStatementOutput;
  }
  public putOrStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement | undefined) {
    this._orStatement = value;
  }
  public resetOrStatement() {
    this._orStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orStatementInput() {
    return this._orStatement
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement | undefined; 
  private __regexPatternSetReferenceStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference(this as any, "regex_pattern_set_reference_statement", true);
  public get regexPatternSetReferenceStatement() {
    return this.__regexPatternSetReferenceStatementOutput;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement | undefined) {
    this._regexPatternSetReferenceStatement = value;
  }
  public resetRegexPatternSetReferenceStatement() {
    this._regexPatternSetReferenceStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternSetReferenceStatementInput() {
    return this._regexPatternSetReferenceStatement
  }

  // size_constraint_statement - computed: false, optional: true, required: false
  private _sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement | undefined; 
  private __sizeConstraintStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference(this as any, "size_constraint_statement", true);
  public get sizeConstraintStatement() {
    return this.__sizeConstraintStatementOutput;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement | undefined) {
    this._sizeConstraintStatement = value;
  }
  public resetSizeConstraintStatement() {
    this._sizeConstraintStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintStatementInput() {
    return this._sizeConstraintStatement
  }

  // sqli_match_statement - computed: false, optional: true, required: false
  private _sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined; 
  private __sqliMatchStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference(this as any, "sqli_match_statement", true);
  public get sqliMatchStatement() {
    return this.__sqliMatchStatementOutput;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined) {
    this._sqliMatchStatement = value;
  }
  public resetSqliMatchStatement() {
    this._sqliMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliMatchStatementInput() {
    return this._sqliMatchStatement
  }

  // xss_match_statement - computed: false, optional: true, required: false
  private _xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined; 
  private __xssMatchStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference(this as any, "xss_match_statement", true);
  public get xssMatchStatement() {
    return this.__xssMatchStatementOutput;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined) {
    this._xssMatchStatement = value;
  }
  public resetXssMatchStatement() {
    this._xssMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchStatementInput() {
    return this._xssMatchStatement
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#aggregate_key_type Wafv2WebAcl#aggregate_key_type}
  */
  readonly aggregateKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#limit Wafv2WebAcl#limit}
  */
  readonly limit: number;
  /**
  * forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig;
  /**
  * scope_down_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope_down_statement Wafv2WebAcl#scope_down_statement}
  */
  readonly scopeDownStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_key_type: cdktf.stringToTerraform(struct!.aggregateKeyType),
    limit: cdktf.numberToTerraform(struct!.limit),
    forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigToTerraform(struct!.forwardedIpConfig),
    scope_down_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToTerraform(struct!.scopeDownStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aggregate_key_type - computed: false, optional: true, required: false
  private _aggregateKeyType?: string | undefined; 
  public get aggregateKeyType() {
    return this.getStringAttribute('aggregate_key_type');
  }
  public set aggregateKeyType(value: string | undefined) {
    this._aggregateKeyType = value;
  }
  public resetAggregateKeyType() {
    this._aggregateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateKeyTypeInput() {
    return this._aggregateKeyType
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig | undefined; 
  private __forwardedIpConfigOutput = new Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference(this as any, "forwarded_ip_config", true);
  public get forwardedIpConfig() {
    return this.__forwardedIpConfigOutput;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig | undefined) {
    this._forwardedIpConfig = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig
  }

  // scope_down_statement - computed: false, optional: true, required: false
  private _scopeDownStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined; 
  private __scopeDownStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference(this as any, "scope_down_statement", true);
  public get scopeDownStatement() {
    return this.__scopeDownStatementOutput;
  }
  public putScopeDownStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined) {
    this._scopeDownStatement = value;
  }
  public resetScopeDownStatement() {
    this._scopeDownStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeDownStatementInput() {
    return this._scopeDownStatement
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * excluded_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#excluded_rule Wafv2WebAcl#excluded_rule}
  */
  readonly excludedRule?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[];
}

export function wafv2WebAclRuleStatementRuleGroupReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference | Wafv2WebAclRuleStatementRuleGroupReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    excluded_rule: cdktf.listMapper(wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToTerraform)(struct!.excludedRule),
  }
}

export class Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
  }

  // excluded_rule - computed: false, optional: true, required: false
  private _excludedRule?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | undefined; 
  public get excludedRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('excluded_rule') as any;
  }
  public set excludedRule(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | undefined) {
    this._excludedRule = value;
  }
  public resetExcludedRule() {
    this._excludedRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRuleInput() {
    return this._excludedRule
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#comparison_operator Wafv2WebAcl#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size Wafv2WebAcl#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined; 
  private __allQueryArgumentsOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this as any, "all_query_arguments", true);
  public get allQueryArguments() {
    return this.__allQueryArgumentsOutput;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    this._allQueryArguments = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments
  }

  // body - computed: false, optional: true, required: false
  private _body?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined; 
  private __bodyOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference(this as any, "body", true);
  public get body() {
    return this.__bodyOutput;
  }
  public putBody(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // method - computed: false, optional: true, required: false
  private _method?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined; 
  private __methodOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference(this as any, "method", true);
  public get method() {
    return this.__methodOutput;
  }
  public putMethod(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined; 
  private __queryStringOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this as any, "query_string", true);
  public get queryString() {
    return this.__queryStringOutput;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    this._queryString = value;
  }
  public resetQueryString() {
    this._queryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined; 
  private __singleHeaderOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this as any, "single_header", true);
  public get singleHeader() {
    return this.__singleHeaderOutput;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
    this._singleHeader = value;
  }
  public resetSingleHeader() {
    this._singleHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined; 
  private __singleQueryArgumentOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this as any, "single_query_argument", true);
  public get singleQueryArgument() {
    return this.__singleQueryArgumentOutput;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    this._singleQueryArgument = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined; 
  private __uriPathOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference(this as any, "uri_path", true);
  public get uriPath() {
    return this.__uriPathOutput;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    this._uriPath = value;
  }
  public resetUriPath() {
    this._uriPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2WebAclRuleStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[];
}

export function wafv2WebAclRuleStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined; 
  private __fieldToMatchOutput = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference(this as any, "field_to_match", true);
  public get fieldToMatch() {
    return this.__fieldToMatchOutput;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined) {
    this._fieldToMatch = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[]; 
  public get textTransformation() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('text_transformation') as any;
  }
  public set textTransformation(value: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[]) {
    this._textTransformation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation
  }
}
export interface Wafv2WebAclRuleStatement {
  /**
  * and_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
  */
  readonly andStatement?: Wafv2WebAclRuleStatementAndStatement;
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementIpSetReferenceStatement;
  /**
  * managed_rule_group_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#managed_rule_group_statement Wafv2WebAcl#managed_rule_group_statement}
  */
  readonly managedRuleGroupStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatement;
  /**
  * not_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
  */
  readonly notStatement?: Wafv2WebAclRuleStatementNotStatement;
  /**
  * or_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
  */
  readonly orStatement?: Wafv2WebAclRuleStatementOrStatement;
  /**
  * rate_based_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#rate_based_statement Wafv2WebAcl#rate_based_statement}
  */
  readonly rateBasedStatement?: Wafv2WebAclRuleStatementRateBasedStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement;
  /**
  * rule_group_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#rule_group_reference_statement Wafv2WebAcl#rule_group_reference_statement}
  */
  readonly ruleGroupReferenceStatement?: Wafv2WebAclRuleStatementRuleGroupReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementToTerraform(struct?: Wafv2WebAclRuleStatementOutputReference | Wafv2WebAclRuleStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_statement: wafv2WebAclRuleStatementAndStatementToTerraform(struct!.andStatement),
    byte_match_statement: wafv2WebAclRuleStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    managed_rule_group_statement: wafv2WebAclRuleStatementManagedRuleGroupStatementToTerraform(struct!.managedRuleGroupStatement),
    not_statement: wafv2WebAclRuleStatementNotStatementToTerraform(struct!.notStatement),
    or_statement: wafv2WebAclRuleStatementOrStatementToTerraform(struct!.orStatement),
    rate_based_statement: wafv2WebAclRuleStatementRateBasedStatementToTerraform(struct!.rateBasedStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    rule_group_reference_statement: wafv2WebAclRuleStatementRuleGroupReferenceStatementToTerraform(struct!.ruleGroupReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // and_statement - computed: false, optional: true, required: false
  private _andStatement?: Wafv2WebAclRuleStatementAndStatement | undefined; 
  private __andStatementOutput = new Wafv2WebAclRuleStatementAndStatementOutputReference(this as any, "and_statement", true);
  public get andStatement() {
    return this.__andStatementOutput;
  }
  public putAndStatement(value: Wafv2WebAclRuleStatementAndStatement | undefined) {
    this._andStatement = value;
  }
  public resetAndStatement() {
    this._andStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andStatementInput() {
    return this._andStatement
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement?: Wafv2WebAclRuleStatementByteMatchStatement | undefined; 
  private __byteMatchStatementOutput = new Wafv2WebAclRuleStatementByteMatchStatementOutputReference(this as any, "byte_match_statement", true);
  public get byteMatchStatement() {
    return this.__byteMatchStatementOutput;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementByteMatchStatement | undefined) {
    this._byteMatchStatement = value;
  }
  public resetByteMatchStatement() {
    this._byteMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchStatementInput() {
    return this._byteMatchStatement
  }

  // geo_match_statement - computed: false, optional: true, required: false
  private _geoMatchStatement?: Wafv2WebAclRuleStatementGeoMatchStatement | undefined; 
  private __geoMatchStatementOutput = new Wafv2WebAclRuleStatementGeoMatchStatementOutputReference(this as any, "geo_match_statement", true);
  public get geoMatchStatement() {
    return this.__geoMatchStatementOutput;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementGeoMatchStatement | undefined) {
    this._geoMatchStatement = value;
  }
  public resetGeoMatchStatement() {
    this._geoMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchStatementInput() {
    return this._geoMatchStatement
  }

  // ip_set_reference_statement - computed: false, optional: true, required: false
  private _ipSetReferenceStatement?: Wafv2WebAclRuleStatementIpSetReferenceStatement | undefined; 
  private __ipSetReferenceStatementOutput = new Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference(this as any, "ip_set_reference_statement", true);
  public get ipSetReferenceStatement() {
    return this.__ipSetReferenceStatementOutput;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementIpSetReferenceStatement | undefined) {
    this._ipSetReferenceStatement = value;
  }
  public resetIpSetReferenceStatement() {
    this._ipSetReferenceStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceStatementInput() {
    return this._ipSetReferenceStatement
  }

  // managed_rule_group_statement - computed: false, optional: true, required: false
  private _managedRuleGroupStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatement | undefined; 
  private __managedRuleGroupStatementOutput = new Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference(this as any, "managed_rule_group_statement", true);
  public get managedRuleGroupStatement() {
    return this.__managedRuleGroupStatementOutput;
  }
  public putManagedRuleGroupStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatement | undefined) {
    this._managedRuleGroupStatement = value;
  }
  public resetManagedRuleGroupStatement() {
    this._managedRuleGroupStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupStatementInput() {
    return this._managedRuleGroupStatement
  }

  // not_statement - computed: false, optional: true, required: false
  private _notStatement?: Wafv2WebAclRuleStatementNotStatement | undefined; 
  private __notStatementOutput = new Wafv2WebAclRuleStatementNotStatementOutputReference(this as any, "not_statement", true);
  public get notStatement() {
    return this.__notStatementOutput;
  }
  public putNotStatement(value: Wafv2WebAclRuleStatementNotStatement | undefined) {
    this._notStatement = value;
  }
  public resetNotStatement() {
    this._notStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStatementInput() {
    return this._notStatement
  }

  // or_statement - computed: false, optional: true, required: false
  private _orStatement?: Wafv2WebAclRuleStatementOrStatement | undefined; 
  private __orStatementOutput = new Wafv2WebAclRuleStatementOrStatementOutputReference(this as any, "or_statement", true);
  public get orStatement() {
    return this.__orStatementOutput;
  }
  public putOrStatement(value: Wafv2WebAclRuleStatementOrStatement | undefined) {
    this._orStatement = value;
  }
  public resetOrStatement() {
    this._orStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orStatementInput() {
    return this._orStatement
  }

  // rate_based_statement - computed: false, optional: true, required: false
  private _rateBasedStatement?: Wafv2WebAclRuleStatementRateBasedStatement | undefined; 
  private __rateBasedStatementOutput = new Wafv2WebAclRuleStatementRateBasedStatementOutputReference(this as any, "rate_based_statement", true);
  public get rateBasedStatement() {
    return this.__rateBasedStatementOutput;
  }
  public putRateBasedStatement(value: Wafv2WebAclRuleStatementRateBasedStatement | undefined) {
    this._rateBasedStatement = value;
  }
  public resetRateBasedStatement() {
    this._rateBasedStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateBasedStatementInput() {
    return this._rateBasedStatement
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined; 
  private __regexPatternSetReferenceStatementOutput = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference(this as any, "regex_pattern_set_reference_statement", true);
  public get regexPatternSetReferenceStatement() {
    return this.__regexPatternSetReferenceStatementOutput;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined) {
    this._regexPatternSetReferenceStatement = value;
  }
  public resetRegexPatternSetReferenceStatement() {
    this._regexPatternSetReferenceStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternSetReferenceStatementInput() {
    return this._regexPatternSetReferenceStatement
  }

  // rule_group_reference_statement - computed: false, optional: true, required: false
  private _ruleGroupReferenceStatement?: Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined; 
  private __ruleGroupReferenceStatementOutput = new Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference(this as any, "rule_group_reference_statement", true);
  public get ruleGroupReferenceStatement() {
    return this.__ruleGroupReferenceStatementOutput;
  }
  public putRuleGroupReferenceStatement(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined) {
    this._ruleGroupReferenceStatement = value;
  }
  public resetRuleGroupReferenceStatement() {
    this._ruleGroupReferenceStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReferenceStatementInput() {
    return this._ruleGroupReferenceStatement
  }

  // size_constraint_statement - computed: false, optional: true, required: false
  private _sizeConstraintStatement?: Wafv2WebAclRuleStatementSizeConstraintStatement | undefined; 
  private __sizeConstraintStatementOutput = new Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference(this as any, "size_constraint_statement", true);
  public get sizeConstraintStatement() {
    return this.__sizeConstraintStatementOutput;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementSizeConstraintStatement | undefined) {
    this._sizeConstraintStatement = value;
  }
  public resetSizeConstraintStatement() {
    this._sizeConstraintStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintStatementInput() {
    return this._sizeConstraintStatement
  }

  // sqli_match_statement - computed: false, optional: true, required: false
  private _sqliMatchStatement?: Wafv2WebAclRuleStatementSqliMatchStatement | undefined; 
  private __sqliMatchStatementOutput = new Wafv2WebAclRuleStatementSqliMatchStatementOutputReference(this as any, "sqli_match_statement", true);
  public get sqliMatchStatement() {
    return this.__sqliMatchStatementOutput;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementSqliMatchStatement | undefined) {
    this._sqliMatchStatement = value;
  }
  public resetSqliMatchStatement() {
    this._sqliMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliMatchStatementInput() {
    return this._sqliMatchStatement
  }

  // xss_match_statement - computed: false, optional: true, required: false
  private _xssMatchStatement?: Wafv2WebAclRuleStatementXssMatchStatement | undefined; 
  private __xssMatchStatementOutput = new Wafv2WebAclRuleStatementXssMatchStatementOutputReference(this as any, "xss_match_statement", true);
  public get xssMatchStatement() {
    return this.__xssMatchStatementOutput;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementXssMatchStatement | undefined) {
    this._xssMatchStatement = value;
  }
  public resetXssMatchStatement() {
    this._xssMatchStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchStatementInput() {
    return this._xssMatchStatement
  }
}
export interface Wafv2WebAclRuleVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclRuleVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}

export class Wafv2WebAclRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled') as any;
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled') as any;
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled
  }
}
export interface Wafv2WebAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#action Wafv2WebAcl#action}
  */
  readonly action?: Wafv2WebAclRuleAction;
  /**
  * override_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#override_action Wafv2WebAcl#override_action}
  */
  readonly overrideAction?: Wafv2WebAclRuleOverrideAction;
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
  */
  readonly statement: Wafv2WebAclRuleStatement;
  /**
  * visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
}

export function wafv2WebAclRuleToTerraform(struct?: Wafv2WebAclRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: wafv2WebAclRuleActionToTerraform(struct!.action),
    override_action: wafv2WebAclRuleOverrideActionToTerraform(struct!.overrideAction),
    statement: wafv2WebAclRuleStatementToTerraform(struct!.statement),
    visibility_config: wafv2WebAclRuleVisibilityConfigToTerraform(struct!.visibilityConfig),
  }
}

export interface Wafv2WebAclVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclVisibilityConfigToTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}

export class Wafv2WebAclVisibilityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled') as any;
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled') as any;
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled
  }
}
