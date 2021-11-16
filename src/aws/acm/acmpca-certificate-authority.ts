// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* Amazon Certificate Manager
*/
export interface AcmpcaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#permanent_deletion_time_in_days AcmpcaCertificateAuthority#permanent_deletion_time_in_days}
  */
  readonly permanentDeletionTimeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags AcmpcaCertificateAuthority#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#tags_all AcmpcaCertificateAuthority#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#type AcmpcaCertificateAuthority#type}
  */
  readonly type?: string;
  /**
  * certificate_authority_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#certificate_authority_configuration AcmpcaCertificateAuthority#certificate_authority_configuration}
  */
  readonly certificateAuthorityConfiguration: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration;
  /**
  * revocation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#revocation_configuration AcmpcaCertificateAuthority#revocation_configuration}
  */
  readonly revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#timeouts AcmpcaCertificateAuthority#timeouts}
  */
  readonly timeouts?: AcmpcaCertificateAuthorityTimeouts;
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#common_name AcmpcaCertificateAuthority#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#country AcmpcaCertificateAuthority#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#distinguished_name_qualifier AcmpcaCertificateAuthority#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#generation_qualifier AcmpcaCertificateAuthority#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#given_name AcmpcaCertificateAuthority#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#initials AcmpcaCertificateAuthority#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#locality AcmpcaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organization AcmpcaCertificateAuthority#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#organizational_unit AcmpcaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#pseudonym AcmpcaCertificateAuthority#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#state AcmpcaCertificateAuthority#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#surname AcmpcaCertificateAuthority#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#title AcmpcaCertificateAuthority#title}
  */
  readonly title?: string;
}

export function acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string | undefined; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string | undefined) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName
  }

  // country - computed: false, optional: true, required: false
  private _country?: string | undefined; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string | undefined) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country
  }

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string | undefined; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string | undefined) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string | undefined; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string | undefined) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string | undefined; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string | undefined) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string | undefined; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string | undefined) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string | undefined; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string | undefined) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string | undefined; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string | undefined; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string | undefined) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string | undefined; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string | undefined) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym
  }

  // state - computed: false, optional: true, required: false
  private _state?: string | undefined; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string | undefined) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
  }

  // surname - computed: false, optional: true, required: false
  private _surname?: string | undefined; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string | undefined) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname
  }

  // title - computed: false, optional: true, required: false
  private _title?: string | undefined; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string | undefined) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }
}
export interface AcmpcaCertificateAuthorityCertificateAuthorityConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#key_algorithm AcmpcaCertificateAuthority#key_algorithm}
  */
  readonly keyAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#signing_algorithm AcmpcaCertificateAuthority#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#subject AcmpcaCertificateAuthority#subject}
  */
  readonly subject: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject;
}

export function acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference | AcmpcaCertificateAuthorityCertificateAuthorityConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_algorithm: cdktf.stringToTerraform(struct!.keyAlgorithm),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
    subject: acmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectToTerraform(struct!.subject),
  }
}

export class AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_algorithm - computed: false, optional: false, required: true
  private _keyAlgorithm?: string; 
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }
  public set keyAlgorithm(value: string) {
    this._keyAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAlgorithmInput() {
    return this._keyAlgorithm
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject; 
  private __subjectOutput = new AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubjectOutputReference(this as any, "subject", true);
  public get subject() {
    return this.__subjectOutput;
  }
  public putSubject(value: AcmpcaCertificateAuthorityCertificateAuthorityConfigurationSubject) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#custom_cname AcmpcaCertificateAuthority#custom_cname}
  */
  readonly customCname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#enabled AcmpcaCertificateAuthority#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#expiration_in_days AcmpcaCertificateAuthority#expiration_in_days}
  */
  readonly expirationInDays: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_bucket_name AcmpcaCertificateAuthority#s3_bucket_name}
  */
  readonly s3BucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#s3_object_acl AcmpcaCertificateAuthority#s3_object_acl}
  */
  readonly s3ObjectAcl?: string;
}

export function acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_cname: cdktf.stringToTerraform(struct!.customCname),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    expiration_in_days: cdktf.numberToTerraform(struct!.expirationInDays),
    s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
    s3_object_acl: cdktf.stringToTerraform(struct!.s3ObjectAcl),
  }
}

export class AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // custom_cname - computed: false, optional: true, required: false
  private _customCname?: string | undefined; 
  public get customCname() {
    return this.getStringAttribute('custom_cname');
  }
  public set customCname(value: string | undefined) {
    this._customCname = value;
  }
  public resetCustomCname() {
    this._customCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCnameInput() {
    return this._customCname
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // expiration_in_days - computed: false, optional: false, required: true
  private _expirationInDays?: number; 
  public get expirationInDays() {
    return this.getNumberAttribute('expiration_in_days');
  }
  public set expirationInDays(value: number) {
    this._expirationInDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInDaysInput() {
    return this._expirationInDays
  }

  // s3_bucket_name - computed: false, optional: true, required: false
  private _s3BucketName?: string | undefined; 
  public get s3BucketName() {
    return this.getStringAttribute('s3_bucket_name');
  }
  public set s3BucketName(value: string | undefined) {
    this._s3BucketName = value;
  }
  public resetS3BucketName() {
    this._s3BucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketNameInput() {
    return this._s3BucketName
  }

  // s3_object_acl - computed: true, optional: true, required: false
  private _s3ObjectAcl?: string | undefined; 
  public get s3ObjectAcl() {
    return this.getStringAttribute('s3_object_acl');
  }
  public set s3ObjectAcl(value: string | undefined) {
    this._s3ObjectAcl = value;
  }
  public resetS3ObjectAcl() {
    this._s3ObjectAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectAclInput() {
    return this._s3ObjectAcl
  }
}
export interface AcmpcaCertificateAuthorityRevocationConfiguration {
  /**
  * crl_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#crl_configuration AcmpcaCertificateAuthority#crl_configuration}
  */
  readonly crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration;
}

export function acmpcaCertificateAuthorityRevocationConfigurationToTerraform(struct?: AcmpcaCertificateAuthorityRevocationConfigurationOutputReference | AcmpcaCertificateAuthorityRevocationConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_configuration: acmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationToTerraform(struct!.crlConfiguration),
  }
}

export class AcmpcaCertificateAuthorityRevocationConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // crl_configuration - computed: false, optional: true, required: false
  private _crlConfiguration?: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined; 
  private __crlConfigurationOutput = new AcmpcaCertificateAuthorityRevocationConfigurationCrlConfigurationOutputReference(this as any, "crl_configuration", true);
  public get crlConfiguration() {
    return this.__crlConfigurationOutput;
  }
  public putCrlConfiguration(value: AcmpcaCertificateAuthorityRevocationConfigurationCrlConfiguration | undefined) {
    this._crlConfiguration = value;
  }
  public resetCrlConfiguration() {
    this._crlConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlConfigurationInput() {
    return this._crlConfiguration
  }
}
export interface AcmpcaCertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html#create AcmpcaCertificateAuthority#create}
  */
  readonly create?: string;
}

export function acmpcaCertificateAuthorityTimeoutsToTerraform(struct?: AcmpcaCertificateAuthorityTimeoutsOutputReference | AcmpcaCertificateAuthorityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class AcmpcaCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority}
*/
export class AcmpcaCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_acmpca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/acmpca_certificate_authority.html aws_acmpca_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AcmpcaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: AcmpcaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_acmpca_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._permanentDeletionTimeInDays = config.permanentDeletionTimeInDays;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._certificateAuthorityConfiguration = config.certificateAuthorityConfiguration;
    this._revocationConfiguration = config.revocationConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // certificate_chain - computed: true, optional: false, required: false
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }

  // certificate_signing_request - computed: true, optional: false, required: false
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // not_after - computed: true, optional: false, required: false
  public get notAfter() {
    return this.getStringAttribute('not_after');
  }

  // not_before - computed: true, optional: false, required: false
  public get notBefore() {
    return this.getStringAttribute('not_before');
  }

  // permanent_deletion_time_in_days - computed: false, optional: true, required: false
  private _permanentDeletionTimeInDays?: number | undefined; 
  public get permanentDeletionTimeInDays() {
    return this.getNumberAttribute('permanent_deletion_time_in_days');
  }
  public set permanentDeletionTimeInDays(value: number | undefined) {
    this._permanentDeletionTimeInDays = value;
  }
  public resetPermanentDeletionTimeInDays() {
    this._permanentDeletionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentDeletionTimeInDaysInput() {
    return this._permanentDeletionTimeInDays
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // certificate_authority_configuration - computed: false, optional: false, required: true
  private _certificateAuthorityConfiguration?: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration; 
  private __certificateAuthorityConfigurationOutput = new AcmpcaCertificateAuthorityCertificateAuthorityConfigurationOutputReference(this as any, "certificate_authority_configuration", true);
  public get certificateAuthorityConfiguration() {
    return this.__certificateAuthorityConfigurationOutput;
  }
  public putCertificateAuthorityConfiguration(value: AcmpcaCertificateAuthorityCertificateAuthorityConfiguration) {
    this._certificateAuthorityConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityConfigurationInput() {
    return this._certificateAuthorityConfiguration
  }

  // revocation_configuration - computed: false, optional: true, required: false
  private _revocationConfiguration?: AcmpcaCertificateAuthorityRevocationConfiguration | undefined; 
  private __revocationConfigurationOutput = new AcmpcaCertificateAuthorityRevocationConfigurationOutputReference(this as any, "revocation_configuration", true);
  public get revocationConfiguration() {
    return this.__revocationConfigurationOutput;
  }
  public putRevocationConfiguration(value: AcmpcaCertificateAuthorityRevocationConfiguration | undefined) {
    this._revocationConfiguration = value;
  }
  public resetRevocationConfiguration() {
    this._revocationConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationConfigurationInput() {
    return this._revocationConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AcmpcaCertificateAuthorityTimeouts | undefined; 
  private __timeoutsOutput = new AcmpcaCertificateAuthorityTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AcmpcaCertificateAuthorityTimeouts | undefined) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      permanent_deletion_time_in_days: cdktf.numberToTerraform(this._permanentDeletionTimeInDays),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      certificate_authority_configuration: acmpcaCertificateAuthorityCertificateAuthorityConfigurationToTerraform(this._certificateAuthorityConfiguration),
      revocation_configuration: acmpcaCertificateAuthorityRevocationConfigurationToTerraform(this._revocationConfiguration),
      timeouts: acmpcaCertificateAuthorityTimeoutsToTerraform(this._timeouts),
    };
  }
}
