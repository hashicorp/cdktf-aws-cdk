// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface AppmeshVirtualGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_name AppmeshVirtualGateway#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mesh_owner AppmeshVirtualGateway#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#name AppmeshVirtualGateway#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags AppmeshVirtualGateway#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tags_all AppmeshVirtualGateway#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#spec AppmeshVirtualGateway#spec}
  */
  readonly spec: AppmeshVirtualGatewaySpec;
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined; 
  private __fileOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFile | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // sds - computed: false, optional: true, required: false
  private _sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined; 
  private __sdsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSds | undefined) {
    this._sds = value;
  }
  public resetSds() {
    this._sds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return this.getListAttribute('exact');
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
  */
  readonly match: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
  private __matchOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_authority_arns AppmeshVirtualGateway#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_authority_arns - computed: false, optional: false, required: true
  private _certificateAuthorityArns?: string[]; 
  public get certificateAuthorityArns() {
    return this.getListAttribute('certificate_authority_arns');
  }
  public set certificateAuthorityArns(value: string[]) {
    this._certificateAuthorityArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnsInput() {
    return this._certificateAuthorityArns
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
  */
  readonly acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acm - computed: false, optional: true, required: false
  private _acm?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined; 
  private __acmOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
  public get acm() {
    return this.__acmOutput;
  }
  public putAcm(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined) {
    this._acm = value;
  }
  public resetAcm() {
    this._acm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined; 
  private __fileOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // sds - computed: false, optional: true, required: false
  private _sds?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined; 
  private __sdsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined) {
    this._sds = value;
  }
  public resetSds() {
    this._sds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
  */
  readonly trust: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames
  }

  // trust - computed: false, optional: false, required: true
  private _trust?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust; 
  private __trustOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
  public get trust() {
    return this.__trustOutput;
  }
  public putTrust(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrust) {
    this._trust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#enforce AppmeshVirtualGateway#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#ports AppmeshVirtualGateway#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
  */
  readonly certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
  */
  readonly validation: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable | undefined; 
  public get enforce() {
    return this.getBooleanAttribute('enforce') as any;
  }
  public set enforce(value: boolean | cdktf.IResolvable | undefined) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce
  }

  // ports - computed: false, optional: true, required: false
  private _ports?: number[] | undefined; 
  public get ports() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ports') as any;
  }
  public set ports(value: number[] | undefined) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined; 
  private __certificateOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificate | undefined) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // validation - computed: false, optional: false, required: true
  private _validation?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation; 
  private __validationOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationOutputReference(this as any, "validation", true);
  public get validation() {
    return this.__validationOutput;
  }
  public putValidation(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidation) {
    this._validation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
  */
  readonly tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls;
}

export function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined; 
  private __tlsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyTls | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }
}
export interface AppmeshVirtualGatewaySpecBackendDefaults {
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#client_policy AppmeshVirtualGateway#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy;
}

export function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct?: AppmeshVirtualGatewaySpecBackendDefaultsOutputReference | AppmeshVirtualGatewaySpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
  }
}

export class AppmeshVirtualGatewaySpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy?: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined; 
  private __clientPolicyOutput = new AppmeshVirtualGatewaySpecBackendDefaultsClientPolicyOutputReference(this as any, "client_policy", true);
  public get clientPolicy() {
    return this.__clientPolicyOutput;
  }
  public putClientPolicy(value: AppmeshVirtualGatewaySpecBackendDefaultsClientPolicy | undefined) {
    this._clientPolicy = value;
  }
  public resetClientPolicy() {
    this._clientPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPolicyInput() {
    return this._clientPolicy
  }
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export class AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests
  }
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_connections AppmeshVirtualGateway#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_pending_requests AppmeshVirtualGateway#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export class AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_connections - computed: false, optional: false, required: true
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections
  }

  // max_pending_requests - computed: false, optional: true, required: false
  private _maxPendingRequests?: number | undefined; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number | undefined) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests
  }
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#max_requests AppmeshVirtualGateway#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export class AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_requests - computed: false, optional: false, required: true
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests
  }
}
export interface AppmeshVirtualGatewaySpecListenerConnectionPool {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#grpc AppmeshVirtualGateway#grpc}
  */
  readonly grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http AppmeshVirtualGateway#http}
  */
  readonly http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp;
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#http2 AppmeshVirtualGateway#http2}
  */
  readonly http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2;
}

export function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference | AppmeshVirtualGatewaySpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct!.grpc),
    http: appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct!.http),
    http2: appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct!.http2),
  }
}

export class AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined; 
  private __grpcOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolGrpcOutputReference(this as any, "grpc", true);
  public get grpc() {
    return this.__grpcOutput;
  }
  public putGrpc(value: AppmeshVirtualGatewaySpecListenerConnectionPoolGrpc | undefined) {
    this._grpc = value;
  }
  public resetGrpc() {
    this._grpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc
  }

  // http - computed: false, optional: true, required: false
  private _http?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined; 
  private __httpOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttpOutputReference(this as any, "http", true);
  public get http() {
    return this.__httpOutput;
  }
  public putHttp(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp | undefined) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http
  }

  // http2 - computed: false, optional: true, required: false
  private _http2?: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined; 
  private __http2Output = new AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2OutputReference(this as any, "http2", true);
  public get http2() {
    return this.__http2Output;
  }
  public putHttp2(value: AppmeshVirtualGatewaySpecListenerConnectionPoolHttp2 | undefined) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2
  }
}
export interface AppmeshVirtualGatewaySpecListenerHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#healthy_threshold AppmeshVirtualGateway#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#interval_millis AppmeshVirtualGateway#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#timeout_millis AppmeshVirtualGateway#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#unhealthy_threshold AppmeshVirtualGateway#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference | AppmeshVirtualGatewaySpecListenerHealthCheck): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_millis: cdktf.numberToTerraform(struct!.intervalMillis),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_millis: cdktf.numberToTerraform(struct!.timeoutMillis),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}

export class AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold
  }

  // interval_millis - computed: false, optional: false, required: true
  private _intervalMillis?: number; 
  public get intervalMillis() {
    return this.getNumberAttribute('interval_millis');
  }
  public set intervalMillis(value: number) {
    this._intervalMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisInput() {
    return this._intervalMillis
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: true, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }

  // timeout_millis - computed: false, optional: false, required: true
  private _timeoutMillis?: number; 
  public get timeoutMillis() {
    return this.getNumberAttribute('timeout_millis');
  }
  public set timeoutMillis(value: number) {
    this._timeoutMillis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMillisInput() {
    return this._timeoutMillis
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold
  }
}
export interface AppmeshVirtualGatewaySpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port AppmeshVirtualGateway#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#protocol AppmeshVirtualGateway#protocol}
  */
  readonly protocol: string;
}

export function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct?: AppmeshVirtualGatewaySpecListenerPortMappingOutputReference | AppmeshVirtualGatewaySpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class AppmeshVirtualGatewaySpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_arn AppmeshVirtualGateway#certificate_arn}
  */
  readonly certificateArn: string;
}

export function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_arn - computed: false, optional: false, required: true
  private _certificateArn?: string; 
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }
  public set certificateArn(value: string) {
    this._certificateArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateArnInput() {
    return this._certificateArn
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#private_key AppmeshVirtualGateway#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsCertificate {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#acm AppmeshVirtualGateway#acm}
  */
  readonly acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds;
}

export function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference | AppmeshVirtualGatewaySpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct!.acm),
    file: appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acm - computed: false, optional: true, required: false
  private _acm?: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined; 
  private __acmOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateAcmOutputReference(this as any, "acm", true);
  public get acm() {
    return this.__acmOutput;
  }
  public putAcm(value: AppmeshVirtualGatewaySpecListenerTlsCertificateAcm | undefined) {
    this._acm = value;
  }
  public resetAcm() {
    this._acm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acmInput() {
    return this._acm
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined; 
  private __fileOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualGatewaySpecListenerTlsCertificateFile | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // sds - computed: false, optional: true, required: false
  private _sds?: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined; 
  private __sdsOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualGatewaySpecListenerTlsCertificateSds | undefined) {
    this._sds = value;
  }
  public resetSds() {
    this._sds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#exact AppmeshVirtualGateway#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // exact - computed: false, optional: false, required: true
  private _exact?: string[]; 
  public get exact() {
    return this.getListAttribute('exact');
  }
  public set exact(value: string[]) {
    this._exact = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#match AppmeshVirtualGateway#match}
  */
  readonly match: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch; 
  private __matchOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate_chain AppmeshVirtualGateway#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#secret_name AppmeshVirtualGateway#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidationTrust {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#sds AppmeshVirtualGateway#sds}
  */
  readonly sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds;
}

export function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined; 
  private __fileOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustFile | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // sds - computed: false, optional: true, required: false
  private _sds?: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined; 
  private __sdsOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrustSds | undefined) {
    this._sds = value;
  }
  public resetSds() {
    this._sds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdsInput() {
    return this._sds
  }
}
export interface AppmeshVirtualGatewaySpecListenerTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#subject_alternative_names AppmeshVirtualGateway#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#trust AppmeshVirtualGateway#trust}
  */
  readonly trust: AppmeshVirtualGatewaySpecListenerTlsValidationTrust;
}

export function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference | AppmeshVirtualGatewaySpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct!.trust),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNames | undefined) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames
  }

  // trust - computed: false, optional: false, required: true
  private _trust?: AppmeshVirtualGatewaySpecListenerTlsValidationTrust; 
  private __trustOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationTrustOutputReference(this as any, "trust", true);
  public get trust() {
    return this.__trustOutput;
  }
  public putTrust(value: AppmeshVirtualGatewaySpecListenerTlsValidationTrust) {
    this._trust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust
  }
}
export interface AppmeshVirtualGatewaySpecListenerTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#mode AppmeshVirtualGateway#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#certificate AppmeshVirtualGateway#certificate}
  */
  readonly certificate: AppmeshVirtualGatewaySpecListenerTlsCertificate;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#validation AppmeshVirtualGateway#validation}
  */
  readonly validation?: AppmeshVirtualGatewaySpecListenerTlsValidation;
}

export function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct?: AppmeshVirtualGatewaySpecListenerTlsOutputReference | AppmeshVirtualGatewaySpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct!.validation),
  }
}

export class AppmeshVirtualGatewaySpecListenerTlsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: AppmeshVirtualGatewaySpecListenerTlsCertificate; 
  private __certificateOutput = new AppmeshVirtualGatewaySpecListenerTlsCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: AppmeshVirtualGatewaySpecListenerTlsCertificate) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined; 
  private __validationOutput = new AppmeshVirtualGatewaySpecListenerTlsValidationOutputReference(this as any, "validation", true);
  public get validation() {
    return this.__validationOutput;
  }
  public putValidation(value: AppmeshVirtualGatewaySpecListenerTlsValidation | undefined) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation
  }
}
export interface AppmeshVirtualGatewaySpecListener {
  /**
  * connection_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#connection_pool AppmeshVirtualGateway#connection_pool}
  */
  readonly connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool;
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#health_check AppmeshVirtualGateway#health_check}
  */
  readonly healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck;
  /**
  * port_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#port_mapping AppmeshVirtualGateway#port_mapping}
  */
  readonly portMapping: AppmeshVirtualGatewaySpecListenerPortMapping;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#tls AppmeshVirtualGateway#tls}
  */
  readonly tls?: AppmeshVirtualGatewaySpecListenerTls;
}

export function appmeshVirtualGatewaySpecListenerToTerraform(struct?: AppmeshVirtualGatewaySpecListenerOutputReference | AppmeshVirtualGatewaySpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct!.connectionPool),
    health_check: appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct!.healthCheck),
    port_mapping: appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct!.portMapping),
    tls: appmeshVirtualGatewaySpecListenerTlsToTerraform(struct!.tls),
  }
}

export class AppmeshVirtualGatewaySpecListenerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool?: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined; 
  private __connectionPoolOutput = new AppmeshVirtualGatewaySpecListenerConnectionPoolOutputReference(this as any, "connection_pool", true);
  public get connectionPool() {
    return this.__connectionPoolOutput;
  }
  public putConnectionPool(value: AppmeshVirtualGatewaySpecListenerConnectionPool | undefined) {
    this._connectionPool = value;
  }
  public resetConnectionPool() {
    this._connectionPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolInput() {
    return this._connectionPool
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined; 
  private __healthCheckOutput = new AppmeshVirtualGatewaySpecListenerHealthCheckOutputReference(this as any, "health_check", true);
  public get healthCheck() {
    return this.__healthCheckOutput;
  }
  public putHealthCheck(value: AppmeshVirtualGatewaySpecListenerHealthCheck | undefined) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping?: AppmeshVirtualGatewaySpecListenerPortMapping; 
  private __portMappingOutput = new AppmeshVirtualGatewaySpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
  public get portMapping() {
    return this.__portMappingOutput;
  }
  public putPortMapping(value: AppmeshVirtualGatewaySpecListenerPortMapping) {
    this._portMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: AppmeshVirtualGatewaySpecListenerTls | undefined; 
  private __tlsOutput = new AppmeshVirtualGatewaySpecListenerTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: AppmeshVirtualGatewaySpecListenerTls | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls
  }
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLogFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#path AppmeshVirtualGateway#path}
  */
  readonly path: string;
}

export function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }
}
export interface AppmeshVirtualGatewaySpecLoggingAccessLog {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#file AppmeshVirtualGateway#file}
  */
  readonly file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile;
}

export function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference | AppmeshVirtualGatewaySpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct!.file),
  }
}

export class AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined; 
  private __fileOutput = new AppmeshVirtualGatewaySpecLoggingAccessLogFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualGatewaySpecLoggingAccessLogFile | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }
}
export interface AppmeshVirtualGatewaySpecLogging {
  /**
  * access_log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#access_log AppmeshVirtualGateway#access_log}
  */
  readonly accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog;
}

export function appmeshVirtualGatewaySpecLoggingToTerraform(struct?: AppmeshVirtualGatewaySpecLoggingOutputReference | AppmeshVirtualGatewaySpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct!.accessLog),
  }
}

export class AppmeshVirtualGatewaySpecLoggingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined; 
  private __accessLogOutput = new AppmeshVirtualGatewaySpecLoggingAccessLogOutputReference(this as any, "access_log", true);
  public get accessLog() {
    return this.__accessLogOutput;
  }
  public putAccessLog(value: AppmeshVirtualGatewaySpecLoggingAccessLog | undefined) {
    this._accessLog = value;
  }
  public resetAccessLog() {
    this._accessLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogInput() {
    return this._accessLog
  }
}
export interface AppmeshVirtualGatewaySpec {
  /**
  * backend_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#backend_defaults AppmeshVirtualGateway#backend_defaults}
  */
  readonly backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults;
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#listener AppmeshVirtualGateway#listener}
  */
  readonly listener: AppmeshVirtualGatewaySpecListener;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html#logging AppmeshVirtualGateway#logging}
  */
  readonly logging?: AppmeshVirtualGatewaySpecLogging;
}

export function appmeshVirtualGatewaySpecToTerraform(struct?: AppmeshVirtualGatewaySpecOutputReference | AppmeshVirtualGatewaySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_defaults: appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct!.backendDefaults),
    listener: appmeshVirtualGatewaySpecListenerToTerraform(struct!.listener),
    logging: appmeshVirtualGatewaySpecLoggingToTerraform(struct!.logging),
  }
}

export class AppmeshVirtualGatewaySpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend_defaults - computed: false, optional: true, required: false
  private _backendDefaults?: AppmeshVirtualGatewaySpecBackendDefaults | undefined; 
  private __backendDefaultsOutput = new AppmeshVirtualGatewaySpecBackendDefaultsOutputReference(this as any, "backend_defaults", true);
  public get backendDefaults() {
    return this.__backendDefaultsOutput;
  }
  public putBackendDefaults(value: AppmeshVirtualGatewaySpecBackendDefaults | undefined) {
    this._backendDefaults = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults
  }

  // listener - computed: false, optional: false, required: true
  private _listener?: AppmeshVirtualGatewaySpecListener; 
  private __listenerOutput = new AppmeshVirtualGatewaySpecListenerOutputReference(this as any, "listener", true);
  public get listener() {
    return this.__listenerOutput;
  }
  public putListener(value: AppmeshVirtualGatewaySpecListener) {
    this._listener = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: AppmeshVirtualGatewaySpecLogging | undefined; 
  private __loggingOutput = new AppmeshVirtualGatewaySpecLoggingOutputReference(this as any, "logging", true);
  public get logging() {
    return this.__loggingOutput;
  }
  public putLogging(value: AppmeshVirtualGatewaySpecLogging | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
*/
export class AppmeshVirtualGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_gateway";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_gateway',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string | undefined; 
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string | undefined) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner
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

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
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

  // spec - computed: false, optional: false, required: true
  private _spec?: AppmeshVirtualGatewaySpec; 
  private __specOutput = new AppmeshVirtualGatewaySpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: AppmeshVirtualGatewaySpec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      spec: appmeshVirtualGatewaySpecToTerraform(this._spec),
    };
  }
}
