// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface AppmeshVirtualNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_name AppmeshVirtualNode#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mesh_owner AppmeshVirtualNode#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#name AppmeshVirtualNode#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags AppmeshVirtualNode#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tags_all AppmeshVirtualNode#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#spec AppmeshVirtualNode#spec}
  */
  readonly spec: AppmeshVirtualNodeSpec;
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateSds | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
  private __matchOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acm - computed: false, optional: true, required: false
  private _acm?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined; 
  private __acmOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
  public get acm() {
    return this.__acmOutput;
  }
  public putAcm(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustAcm | undefined) {
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
  private _file?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustSds | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
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
  private _trust?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust; 
  private __trustOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
  public get trust() {
    return this.__trustOutput;
  }
  public putTrust(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationTrust) {
    this._trust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference extends cdktf.ComplexObject {
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
  private _certificate?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined; 
  private __certificateOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsCertificate | undefined) {
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
  private _validation?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation; 
  private __validationOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidationOutputReference(this as any, "validation", true);
  public get validation() {
    return this.__validationOutput;
  }
  public putValidation(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsValidation) {
    this._validation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation
  }
}
export interface AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsToTerraform(struct!.tls),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined; 
  private __tlsOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyTls | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service_name AppmeshVirtualNode#virtual_service_name}
  */
  readonly virtualServiceName: string;
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy;
}

export function appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct?: AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference | AppmeshVirtualNodeSpecBackendVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
    client_policy: appmeshVirtualNodeSpecBackendVirtualServiceClientPolicyToTerraform(struct!.clientPolicy),
  }
}

export class AppmeshVirtualNodeSpecBackendVirtualServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // virtual_service_name - computed: false, optional: false, required: true
  private _virtualServiceName?: string; 
  public get virtualServiceName() {
    return this.getStringAttribute('virtual_service_name');
  }
  public set virtualServiceName(value: string) {
    this._virtualServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServiceNameInput() {
    return this._virtualServiceName
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy?: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined; 
  private __clientPolicyOutput = new AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicyOutputReference(this as any, "client_policy", true);
  public get clientPolicy() {
    return this.__clientPolicyOutput;
  }
  public putClientPolicy(value: AppmeshVirtualNodeSpecBackendVirtualServiceClientPolicy | undefined) {
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
export interface AppmeshVirtualNodeSpecBackend {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#virtual_service AppmeshVirtualNode#virtual_service}
  */
  readonly virtualService: AppmeshVirtualNodeSpecBackendVirtualService;
}

export function appmeshVirtualNodeSpecBackendToTerraform(struct?: AppmeshVirtualNodeSpecBackend): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_service: appmeshVirtualNodeSpecBackendVirtualServiceToTerraform(struct!.virtualService),
  }
}

export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateSds | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch; 
  private __matchOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_authority_arns AppmeshVirtualNode#certificate_authority_arns}
  */
  readonly certificateAuthorityArns: string[];
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.certificateAuthorityArns),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acm - computed: false, optional: true, required: false
  private _acm?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined; 
  private __acmOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcmOutputReference(this as any, "acm", true);
  public get acm() {
    return this.__acmOutput;
  }
  public putAcm(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustAcm | undefined) {
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
  private _file?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustSds | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct!.trust),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNames | undefined) {
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
  private _trust?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust; 
  private __trustOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrustOutputReference(this as any, "trust", true);
  public get trust() {
    return this.__trustOutput;
  }
  public putTrust(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationTrust) {
    this._trust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#enforce AppmeshVirtualNode#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#ports AppmeshVirtualNode#ports}
  */
  readonly ports?: number[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    ports: cdktf.listMapper(cdktf.numberToTerraform)(struct!.ports),
    certificate: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct!.validation),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference extends cdktf.ComplexObject {
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
  private _certificate?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined; 
  private __certificateOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsCertificate | undefined) {
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
  private _validation?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation; 
  private __validationOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidationOutputReference(this as any, "validation", true);
  public get validation() {
    return this.__validationOutput;
  }
  public putValidation(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsValidation) {
    this._validation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation
  }
}
export interface AppmeshVirtualNodeSpecBackendDefaultsClientPolicy {
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls;
}

export function appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference | AppmeshVirtualNodeSpecBackendDefaultsClientPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls: appmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsToTerraform(struct!.tls),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined; 
  private __tlsOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicyTls | undefined) {
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
export interface AppmeshVirtualNodeSpecBackendDefaults {
  /**
  * client_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#client_policy AppmeshVirtualNode#client_policy}
  */
  readonly clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy;
}

export function appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct?: AppmeshVirtualNodeSpecBackendDefaultsOutputReference | AppmeshVirtualNodeSpecBackendDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_policy: appmeshVirtualNodeSpecBackendDefaultsClientPolicyToTerraform(struct!.clientPolicy),
  }
}

export class AppmeshVirtualNodeSpecBackendDefaultsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_policy - computed: false, optional: true, required: false
  private _clientPolicy?: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined; 
  private __clientPolicyOutput = new AppmeshVirtualNodeSpecBackendDefaultsClientPolicyOutputReference(this as any, "client_policy", true);
  public get clientPolicy() {
    return this.__clientPolicyOutput;
  }
  public putClientPolicy(value: AppmeshVirtualNodeSpecBackendDefaultsClientPolicy | undefined) {
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
export interface AppmeshVirtualNodeSpecListenerConnectionPoolGrpc {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_pending_requests AppmeshVirtualNode#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_requests AppmeshVirtualNode#max_requests}
  */
  readonly maxRequests: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerConnectionPoolTcp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_connections AppmeshVirtualNode#max_connections}
  */
  readonly maxConnections: number;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference | AppmeshVirtualNodeSpecListenerConnectionPoolTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference extends cdktf.ComplexObject {
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
}
export interface AppmeshVirtualNodeSpecListenerConnectionPool {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp;
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2;
  /**
  * tcp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp;
}

export function appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct?: AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference | AppmeshVirtualNodeSpecListenerConnectionPool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: appmeshVirtualNodeSpecListenerConnectionPoolGrpcToTerraform(struct!.grpc),
    http: appmeshVirtualNodeSpecListenerConnectionPoolHttpToTerraform(struct!.http),
    http2: appmeshVirtualNodeSpecListenerConnectionPoolHttp2ToTerraform(struct!.http2),
    tcp: appmeshVirtualNodeSpecListenerConnectionPoolTcpToTerraform(struct!.tcp),
  }
}

export class AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined; 
  private __grpcOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolGrpcOutputReference(this as any, "grpc", true);
  public get grpc() {
    return this.__grpcOutput;
  }
  public putGrpc(value: AppmeshVirtualNodeSpecListenerConnectionPoolGrpc | undefined) {
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
  private _http?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined; 
  private __httpOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolHttpOutputReference(this as any, "http", true);
  public get http() {
    return this.__httpOutput;
  }
  public putHttp(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp | undefined) {
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
  private _http2?: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined; 
  private __http2Output = new AppmeshVirtualNodeSpecListenerConnectionPoolHttp2OutputReference(this as any, "http2", true);
  public get http2() {
    return this.__http2Output;
  }
  public putHttp2(value: AppmeshVirtualNodeSpecListenerConnectionPoolHttp2 | undefined) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined; 
  private __tcpOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolTcpOutputReference(this as any, "tcp", true);
  public get tcp() {
    return this.__tcpOutput;
  }
  public putTcp(value: AppmeshVirtualNodeSpecListenerConnectionPoolTcp | undefined) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp
  }
}
export interface AppmeshVirtualNodeSpecListenerHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#healthy_threshold AppmeshVirtualNode#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval_millis AppmeshVirtualNode#interval_millis}
  */
  readonly intervalMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout_millis AppmeshVirtualNode#timeout_millis}
  */
  readonly timeoutMillis: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unhealthy_threshold AppmeshVirtualNode#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
}

export function appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct?: AppmeshVirtualNodeSpecListenerHealthCheckOutputReference | AppmeshVirtualNodeSpecListenerHealthCheck): any {
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

export class AppmeshVirtualNodeSpecListenerHealthCheckOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetectionInterval {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetectionInterval): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_ejection_percent AppmeshVirtualNode#max_ejection_percent}
  */
  readonly maxEjectionPercent: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#max_server_errors AppmeshVirtualNode#max_server_errors}
  */
  readonly maxServerErrors: number;
  /**
  * base_ejection_duration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#base_ejection_duration AppmeshVirtualNode#base_ejection_duration}
  */
  readonly baseEjectionDuration: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration;
  /**
  * interval block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#interval AppmeshVirtualNode#interval}
  */
  readonly interval: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval;
}

export function appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference | AppmeshVirtualNodeSpecListenerOutlierDetection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
    max_server_errors: cdktf.numberToTerraform(struct!.maxServerErrors),
    base_ejection_duration: appmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationToTerraform(struct!.baseEjectionDuration),
    interval: appmeshVirtualNodeSpecListenerOutlierDetectionIntervalToTerraform(struct!.interval),
  }
}

export class AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_ejection_percent - computed: false, optional: false, required: true
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent
  }

  // max_server_errors - computed: false, optional: false, required: true
  private _maxServerErrors?: number; 
  public get maxServerErrors() {
    return this.getNumberAttribute('max_server_errors');
  }
  public set maxServerErrors(value: number) {
    this._maxServerErrors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServerErrorsInput() {
    return this._maxServerErrors
  }

  // base_ejection_duration - computed: false, optional: false, required: true
  private _baseEjectionDuration?: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration; 
  private __baseEjectionDurationOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDurationOutputReference(this as any, "base_ejection_duration", true);
  public get baseEjectionDuration() {
    return this.__baseEjectionDurationOutput;
  }
  public putBaseEjectionDuration(value: AppmeshVirtualNodeSpecListenerOutlierDetectionBaseEjectionDuration) {
    this._baseEjectionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionDurationInput() {
    return this._baseEjectionDuration
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval; 
  private __intervalOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionIntervalOutputReference(this as any, "interval", true);
  public get interval() {
    return this.__intervalOutput;
  }
  public putInterval(value: AppmeshVirtualNodeSpecListenerOutlierDetectionInterval) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }
}
export interface AppmeshVirtualNodeSpecListenerPortMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port AppmeshVirtualNode#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#protocol AppmeshVirtualNode#protocol}
  */
  readonly protocol: string;
}

export function appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualNodeSpecListenerPortMappingOutputReference | AppmeshVirtualNodeSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class AppmeshVirtualNodeSpecListenerPortMappingOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutGrpc {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference | AppmeshVirtualNodeSpecListenerTimeoutGrpc): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutGrpcIdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined; 
  private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined; 
  private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutGrpcPerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutHttpIdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutHttpPerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined; 
  private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttpIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined; 
  private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttpPerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutHttp2 {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle;
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#per_request AppmeshVirtualNode#per_request}
  */
  readonly perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest;
}

export function appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference | AppmeshVirtualNodeSpecListenerTimeoutHttp2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutHttp2IdleToTerraform(struct!.idle),
    per_request: appmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestToTerraform(struct!.perRequest),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined; 
  private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttp2IdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2Idle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest?: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined; 
  private __perRequestOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequestOutputReference(this as any, "per_request", true);
  public get perRequest() {
    return this.__perRequestOutput;
  }
  public putPerRequest(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2PerRequest | undefined) {
    this._perRequest = value;
  }
  public resetPerRequest() {
    this._perRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcpIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#unit AppmeshVirtualNode#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#value AppmeshVirtualNode#value}
  */
  readonly value: number;
}

export function appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcpIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeoutTcp {
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#idle AppmeshVirtualNode#idle}
  */
  readonly idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle;
}

export function appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference | AppmeshVirtualNodeSpecListenerTimeoutTcp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: appmeshVirtualNodeSpecListenerTimeoutTcpIdleToTerraform(struct!.idle),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // idle - computed: false, optional: true, required: false
  private _idle?: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined; 
  private __idleOutput = new AppmeshVirtualNodeSpecListenerTimeoutTcpIdleOutputReference(this as any, "idle", true);
  public get idle() {
    return this.__idleOutput;
  }
  public putIdle(value: AppmeshVirtualNodeSpecListenerTimeoutTcpIdle | undefined) {
    this._idle = value;
  }
  public resetIdle() {
    this._idle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle
  }
}
export interface AppmeshVirtualNodeSpecListenerTimeout {
  /**
  * grpc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#grpc AppmeshVirtualNode#grpc}
  */
  readonly grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc;
  /**
  * http block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http AppmeshVirtualNode#http}
  */
  readonly http?: AppmeshVirtualNodeSpecListenerTimeoutHttp;
  /**
  * http2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#http2 AppmeshVirtualNode#http2}
  */
  readonly http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2;
  /**
  * tcp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tcp AppmeshVirtualNode#tcp}
  */
  readonly tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp;
}

export function appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct?: AppmeshVirtualNodeSpecListenerTimeoutOutputReference | AppmeshVirtualNodeSpecListenerTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc: appmeshVirtualNodeSpecListenerTimeoutGrpcToTerraform(struct!.grpc),
    http: appmeshVirtualNodeSpecListenerTimeoutHttpToTerraform(struct!.http),
    http2: appmeshVirtualNodeSpecListenerTimeoutHttp2ToTerraform(struct!.http2),
    tcp: appmeshVirtualNodeSpecListenerTimeoutTcpToTerraform(struct!.tcp),
  }
}

export class AppmeshVirtualNodeSpecListenerTimeoutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc?: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined; 
  private __grpcOutput = new AppmeshVirtualNodeSpecListenerTimeoutGrpcOutputReference(this as any, "grpc", true);
  public get grpc() {
    return this.__grpcOutput;
  }
  public putGrpc(value: AppmeshVirtualNodeSpecListenerTimeoutGrpc | undefined) {
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
  private _http?: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined; 
  private __httpOutput = new AppmeshVirtualNodeSpecListenerTimeoutHttpOutputReference(this as any, "http", true);
  public get http() {
    return this.__httpOutput;
  }
  public putHttp(value: AppmeshVirtualNodeSpecListenerTimeoutHttp | undefined) {
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
  private _http2?: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined; 
  private __http2Output = new AppmeshVirtualNodeSpecListenerTimeoutHttp2OutputReference(this as any, "http2", true);
  public get http2() {
    return this.__http2Output;
  }
  public putHttp2(value: AppmeshVirtualNodeSpecListenerTimeoutHttp2 | undefined) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined; 
  private __tcpOutput = new AppmeshVirtualNodeSpecListenerTimeoutTcpOutputReference(this as any, "tcp", true);
  public get tcp() {
    return this.__tcpOutput;
  }
  public putTcp(value: AppmeshVirtualNodeSpecListenerTimeoutTcp | undefined) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsCertificateAcm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_arn AppmeshVirtualNode#certificate_arn}
  */
  readonly certificateArn: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateAcm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_arn: cdktf.stringToTerraform(struct!.certificateArn),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsCertificateFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#private_key AppmeshVirtualNode#private_key}
  */
  readonly privateKey: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsCertificateSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificateSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsCertificate {
  /**
  * acm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#acm AppmeshVirtualNode#acm}
  */
  readonly acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds;
}

export function appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference | AppmeshVirtualNodeSpecListenerTlsCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acm: appmeshVirtualNodeSpecListenerTlsCertificateAcmToTerraform(struct!.acm),
    file: appmeshVirtualNodeSpecListenerTlsCertificateFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecListenerTlsCertificateSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // acm - computed: false, optional: true, required: false
  private _acm?: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined; 
  private __acmOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateAcmOutputReference(this as any, "acm", true);
  public get acm() {
    return this.__acmOutput;
  }
  public putAcm(value: AppmeshVirtualNodeSpecListenerTlsCertificateAcm | undefined) {
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
  private _file?: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecListenerTlsCertificateFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecListenerTlsCertificateSds | undefined) {
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
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#exact AppmeshVirtualNode#exact}
  */
  readonly exact: string[];
}

export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exact),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames {
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#match AppmeshVirtualNode#match}
  */
  readonly match: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch;
}

export function appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct!.match),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match - computed: false, optional: false, required: true
  private _match?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch; 
  private __matchOutput = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatchOutputReference(this as any, "match", true);
  public get match() {
    return this.__matchOutput;
  }
  public putMatch(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesMatch) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match
  }
}
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate_chain AppmeshVirtualNode#certificate_chain}
  */
  readonly certificateChain: string;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_chain: cdktf.stringToTerraform(struct!.certificateChain),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrustSds {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#secret_name AppmeshVirtualNode#secret_name}
  */
  readonly secretName: string;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrustSds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecListenerTlsValidationTrust {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile;
  /**
  * sds block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#sds AppmeshVirtualNode#sds}
  */
  readonly sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds;
}

export function appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference | AppmeshVirtualNodeSpecListenerTlsValidationTrust): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecListenerTlsValidationTrustFileToTerraform(struct!.file),
    sds: appmeshVirtualNodeSpecListenerTlsValidationTrustSdsToTerraform(struct!.sds),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustFile | undefined) {
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
  private _sds?: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined; 
  private __sdsOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustSdsOutputReference(this as any, "sds", true);
  public get sds() {
    return this.__sdsOutput;
  }
  public putSds(value: AppmeshVirtualNodeSpecListenerTlsValidationTrustSds | undefined) {
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
export interface AppmeshVirtualNodeSpecListenerTlsValidation {
  /**
  * subject_alternative_names block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#subject_alternative_names AppmeshVirtualNode#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames;
  /**
  * trust block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#trust AppmeshVirtualNode#trust}
  */
  readonly trust: AppmeshVirtualNodeSpecListenerTlsValidationTrust;
}

export function appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsValidationOutputReference | AppmeshVirtualNodeSpecListenerTlsValidation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_names: appmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct!.subjectAlternativeNames),
    trust: appmeshVirtualNodeSpecListenerTlsValidationTrustToTerraform(struct!.trust),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsValidationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames?: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined; 
  private __subjectAlternativeNamesOutput = new AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNamesOutputReference(this as any, "subject_alternative_names", true);
  public get subjectAlternativeNames() {
    return this.__subjectAlternativeNamesOutput;
  }
  public putSubjectAlternativeNames(value: AppmeshVirtualNodeSpecListenerTlsValidationSubjectAlternativeNames | undefined) {
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
  private _trust?: AppmeshVirtualNodeSpecListenerTlsValidationTrust; 
  private __trustOutput = new AppmeshVirtualNodeSpecListenerTlsValidationTrustOutputReference(this as any, "trust", true);
  public get trust() {
    return this.__trustOutput;
  }
  public putTrust(value: AppmeshVirtualNodeSpecListenerTlsValidationTrust) {
    this._trust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust
  }
}
export interface AppmeshVirtualNodeSpecListenerTls {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#mode AppmeshVirtualNode#mode}
  */
  readonly mode: string;
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#certificate AppmeshVirtualNode#certificate}
  */
  readonly certificate: AppmeshVirtualNodeSpecListenerTlsCertificate;
  /**
  * validation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#validation AppmeshVirtualNode#validation}
  */
  readonly validation?: AppmeshVirtualNodeSpecListenerTlsValidation;
}

export function appmeshVirtualNodeSpecListenerTlsToTerraform(struct?: AppmeshVirtualNodeSpecListenerTlsOutputReference | AppmeshVirtualNodeSpecListenerTls): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    certificate: appmeshVirtualNodeSpecListenerTlsCertificateToTerraform(struct!.certificate),
    validation: appmeshVirtualNodeSpecListenerTlsValidationToTerraform(struct!.validation),
  }
}

export class AppmeshVirtualNodeSpecListenerTlsOutputReference extends cdktf.ComplexObject {
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
  private _certificate?: AppmeshVirtualNodeSpecListenerTlsCertificate; 
  private __certificateOutput = new AppmeshVirtualNodeSpecListenerTlsCertificateOutputReference(this as any, "certificate", true);
  public get certificate() {
    return this.__certificateOutput;
  }
  public putCertificate(value: AppmeshVirtualNodeSpecListenerTlsCertificate) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: AppmeshVirtualNodeSpecListenerTlsValidation | undefined; 
  private __validationOutput = new AppmeshVirtualNodeSpecListenerTlsValidationOutputReference(this as any, "validation", true);
  public get validation() {
    return this.__validationOutput;
  }
  public putValidation(value: AppmeshVirtualNodeSpecListenerTlsValidation | undefined) {
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
export interface AppmeshVirtualNodeSpecListener {
  /**
  * connection_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#connection_pool AppmeshVirtualNode#connection_pool}
  */
  readonly connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool;
  /**
  * health_check block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#health_check AppmeshVirtualNode#health_check}
  */
  readonly healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck;
  /**
  * outlier_detection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#outlier_detection AppmeshVirtualNode#outlier_detection}
  */
  readonly outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection;
  /**
  * port_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#port_mapping AppmeshVirtualNode#port_mapping}
  */
  readonly portMapping: AppmeshVirtualNodeSpecListenerPortMapping;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#timeout AppmeshVirtualNode#timeout}
  */
  readonly timeout?: AppmeshVirtualNodeSpecListenerTimeout;
  /**
  * tls block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#tls AppmeshVirtualNode#tls}
  */
  readonly tls?: AppmeshVirtualNodeSpecListenerTls;
}

export function appmeshVirtualNodeSpecListenerToTerraform(struct?: AppmeshVirtualNodeSpecListenerOutputReference | AppmeshVirtualNodeSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_pool: appmeshVirtualNodeSpecListenerConnectionPoolToTerraform(struct!.connectionPool),
    health_check: appmeshVirtualNodeSpecListenerHealthCheckToTerraform(struct!.healthCheck),
    outlier_detection: appmeshVirtualNodeSpecListenerOutlierDetectionToTerraform(struct!.outlierDetection),
    port_mapping: appmeshVirtualNodeSpecListenerPortMappingToTerraform(struct!.portMapping),
    timeout: appmeshVirtualNodeSpecListenerTimeoutToTerraform(struct!.timeout),
    tls: appmeshVirtualNodeSpecListenerTlsToTerraform(struct!.tls),
  }
}

export class AppmeshVirtualNodeSpecListenerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_pool - computed: false, optional: true, required: false
  private _connectionPool?: AppmeshVirtualNodeSpecListenerConnectionPool | undefined; 
  private __connectionPoolOutput = new AppmeshVirtualNodeSpecListenerConnectionPoolOutputReference(this as any, "connection_pool", true);
  public get connectionPool() {
    return this.__connectionPoolOutput;
  }
  public putConnectionPool(value: AppmeshVirtualNodeSpecListenerConnectionPool | undefined) {
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
  private _healthCheck?: AppmeshVirtualNodeSpecListenerHealthCheck | undefined; 
  private __healthCheckOutput = new AppmeshVirtualNodeSpecListenerHealthCheckOutputReference(this as any, "health_check", true);
  public get healthCheck() {
    return this.__healthCheckOutput;
  }
  public putHealthCheck(value: AppmeshVirtualNodeSpecListenerHealthCheck | undefined) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection?: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined; 
  private __outlierDetectionOutput = new AppmeshVirtualNodeSpecListenerOutlierDetectionOutputReference(this as any, "outlier_detection", true);
  public get outlierDetection() {
    return this.__outlierDetectionOutput;
  }
  public putOutlierDetection(value: AppmeshVirtualNodeSpecListenerOutlierDetection | undefined) {
    this._outlierDetection = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping?: AppmeshVirtualNodeSpecListenerPortMapping; 
  private __portMappingOutput = new AppmeshVirtualNodeSpecListenerPortMappingOutputReference(this as any, "port_mapping", true);
  public get portMapping() {
    return this.__portMappingOutput;
  }
  public putPortMapping(value: AppmeshVirtualNodeSpecListenerPortMapping) {
    this._portMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: AppmeshVirtualNodeSpecListenerTimeout | undefined; 
  private __timeoutOutput = new AppmeshVirtualNodeSpecListenerTimeoutOutputReference(this as any, "timeout", true);
  public get timeout() {
    return this.__timeoutOutput;
  }
  public putTimeout(value: AppmeshVirtualNodeSpecListenerTimeout | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: AppmeshVirtualNodeSpecListenerTls | undefined; 
  private __tlsOutput = new AppmeshVirtualNodeSpecListenerTlsOutputReference(this as any, "tls", true);
  public get tls() {
    return this.__tlsOutput;
  }
  public putTls(value: AppmeshVirtualNodeSpecListenerTls | undefined) {
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
export interface AppmeshVirtualNodeSpecLoggingAccessLogFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#path AppmeshVirtualNode#path}
  */
  readonly path: string;
}

export function appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference | AppmeshVirtualNodeSpecLoggingAccessLogFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference extends cdktf.ComplexObject {
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
export interface AppmeshVirtualNodeSpecLoggingAccessLog {
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#file AppmeshVirtualNode#file}
  */
  readonly file?: AppmeshVirtualNodeSpecLoggingAccessLogFile;
}

export function appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct?: AppmeshVirtualNodeSpecLoggingAccessLogOutputReference | AppmeshVirtualNodeSpecLoggingAccessLog): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: appmeshVirtualNodeSpecLoggingAccessLogFileToTerraform(struct!.file),
  }
}

export class AppmeshVirtualNodeSpecLoggingAccessLogOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // file - computed: false, optional: true, required: false
  private _file?: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined; 
  private __fileOutput = new AppmeshVirtualNodeSpecLoggingAccessLogFileOutputReference(this as any, "file", true);
  public get file() {
    return this.__fileOutput;
  }
  public putFile(value: AppmeshVirtualNodeSpecLoggingAccessLogFile | undefined) {
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
export interface AppmeshVirtualNodeSpecLogging {
  /**
  * access_log block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#access_log AppmeshVirtualNode#access_log}
  */
  readonly accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog;
}

export function appmeshVirtualNodeSpecLoggingToTerraform(struct?: AppmeshVirtualNodeSpecLoggingOutputReference | AppmeshVirtualNodeSpecLogging): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_log: appmeshVirtualNodeSpecLoggingAccessLogToTerraform(struct!.accessLog),
  }
}

export class AppmeshVirtualNodeSpecLoggingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_log - computed: false, optional: true, required: false
  private _accessLog?: AppmeshVirtualNodeSpecLoggingAccessLog | undefined; 
  private __accessLogOutput = new AppmeshVirtualNodeSpecLoggingAccessLogOutputReference(this as any, "access_log", true);
  public get accessLog() {
    return this.__accessLogOutput;
  }
  public putAccessLog(value: AppmeshVirtualNodeSpecLoggingAccessLog | undefined) {
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
export interface AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#attributes AppmeshVirtualNode#attributes}
  */
  readonly attributes?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#namespace_name AppmeshVirtualNode#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_name AppmeshVirtualNode#service_name}
  */
  readonly serviceName: string;
}

export function appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.attributes),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get attributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attributes') as any;
  }
  public set attributes(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }
}
export interface AppmeshVirtualNodeSpecServiceDiscoveryDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#hostname AppmeshVirtualNode#hostname}
  */
  readonly hostname: string;
}

export function appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference | AppmeshVirtualNodeSpecServiceDiscoveryDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}

export class AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname
  }
}
export interface AppmeshVirtualNodeSpecServiceDiscovery {
  /**
  * aws_cloud_map block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#aws_cloud_map AppmeshVirtualNode#aws_cloud_map}
  */
  readonly awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#dns AppmeshVirtualNode#dns}
  */
  readonly dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns;
}

export function appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct?: AppmeshVirtualNodeSpecServiceDiscoveryOutputReference | AppmeshVirtualNodeSpecServiceDiscovery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cloud_map: appmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapToTerraform(struct!.awsCloudMap),
    dns: appmeshVirtualNodeSpecServiceDiscoveryDnsToTerraform(struct!.dns),
  }
}

export class AppmeshVirtualNodeSpecServiceDiscoveryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aws_cloud_map - computed: false, optional: true, required: false
  private _awsCloudMap?: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined; 
  private __awsCloudMapOutput = new AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMapOutputReference(this as any, "aws_cloud_map", true);
  public get awsCloudMap() {
    return this.__awsCloudMapOutput;
  }
  public putAwsCloudMap(value: AppmeshVirtualNodeSpecServiceDiscoveryAwsCloudMap | undefined) {
    this._awsCloudMap = value;
  }
  public resetAwsCloudMap() {
    this._awsCloudMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudMapInput() {
    return this._awsCloudMap
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined; 
  private __dnsOutput = new AppmeshVirtualNodeSpecServiceDiscoveryDnsOutputReference(this as any, "dns", true);
  public get dns() {
    return this.__dnsOutput;
  }
  public putDns(value: AppmeshVirtualNodeSpecServiceDiscoveryDns | undefined) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns
  }
}
export interface AppmeshVirtualNodeSpec {
  /**
  * backend block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend AppmeshVirtualNode#backend}
  */
  readonly backend?: AppmeshVirtualNodeSpecBackend[];
  /**
  * backend_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#backend_defaults AppmeshVirtualNode#backend_defaults}
  */
  readonly backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults;
  /**
  * listener block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#listener AppmeshVirtualNode#listener}
  */
  readonly listener?: AppmeshVirtualNodeSpecListener;
  /**
  * logging block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#logging AppmeshVirtualNode#logging}
  */
  readonly logging?: AppmeshVirtualNodeSpecLogging;
  /**
  * service_discovery block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html#service_discovery AppmeshVirtualNode#service_discovery}
  */
  readonly serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery;
}

export function appmeshVirtualNodeSpecToTerraform(struct?: AppmeshVirtualNodeSpecOutputReference | AppmeshVirtualNodeSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend: cdktf.listMapper(appmeshVirtualNodeSpecBackendToTerraform)(struct!.backend),
    backend_defaults: appmeshVirtualNodeSpecBackendDefaultsToTerraform(struct!.backendDefaults),
    listener: appmeshVirtualNodeSpecListenerToTerraform(struct!.listener),
    logging: appmeshVirtualNodeSpecLoggingToTerraform(struct!.logging),
    service_discovery: appmeshVirtualNodeSpecServiceDiscoveryToTerraform(struct!.serviceDiscovery),
  }
}

export class AppmeshVirtualNodeSpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // backend - computed: false, optional: true, required: false
  private _backend?: AppmeshVirtualNodeSpecBackend[] | undefined; 
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend') as any;
  }
  public set backend(value: AppmeshVirtualNodeSpecBackend[] | undefined) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend
  }

  // backend_defaults - computed: false, optional: true, required: false
  private _backendDefaults?: AppmeshVirtualNodeSpecBackendDefaults | undefined; 
  private __backendDefaultsOutput = new AppmeshVirtualNodeSpecBackendDefaultsOutputReference(this as any, "backend_defaults", true);
  public get backendDefaults() {
    return this.__backendDefaultsOutput;
  }
  public putBackendDefaults(value: AppmeshVirtualNodeSpecBackendDefaults | undefined) {
    this._backendDefaults = value;
  }
  public resetBackendDefaults() {
    this._backendDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendDefaultsInput() {
    return this._backendDefaults
  }

  // listener - computed: false, optional: true, required: false
  private _listener?: AppmeshVirtualNodeSpecListener | undefined; 
  private __listenerOutput = new AppmeshVirtualNodeSpecListenerOutputReference(this as any, "listener", true);
  public get listener() {
    return this.__listenerOutput;
  }
  public putListener(value: AppmeshVirtualNodeSpecListener | undefined) {
    this._listener = value;
  }
  public resetListener() {
    this._listener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: AppmeshVirtualNodeSpecLogging | undefined; 
  private __loggingOutput = new AppmeshVirtualNodeSpecLoggingOutputReference(this as any, "logging", true);
  public get logging() {
    return this.__loggingOutput;
  }
  public putLogging(value: AppmeshVirtualNodeSpecLogging | undefined) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery?: AppmeshVirtualNodeSpecServiceDiscovery | undefined; 
  private __serviceDiscoveryOutput = new AppmeshVirtualNodeSpecServiceDiscoveryOutputReference(this as any, "service_discovery", true);
  public get serviceDiscovery() {
    return this.__serviceDiscoveryOutput;
  }
  public putServiceDiscovery(value: AppmeshVirtualNodeSpecServiceDiscovery | undefined) {
    this._serviceDiscovery = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node}
*/
export class AppmeshVirtualNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_node.html aws_appmesh_virtual_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualNodeConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_node',
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
  private _spec?: AppmeshVirtualNodeSpec; 
  private __specOutput = new AppmeshVirtualNodeSpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: AppmeshVirtualNodeSpec) {
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
      spec: appmeshVirtualNodeSpecToTerraform(this._spec),
    };
  }
}
