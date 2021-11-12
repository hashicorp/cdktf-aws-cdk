// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketInventoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#enabled S3BucketInventory#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#included_object_versions S3BucketInventory#included_object_versions}
  */
  readonly includedObjectVersions: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#name S3BucketInventory#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#optional_fields S3BucketInventory#optional_fields}
  */
  readonly optionalFields?: string[];
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#destination S3BucketInventory#destination}
  */
  readonly destination: S3BucketInventoryDestination;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#filter S3BucketInventory#filter}
  */
  readonly filter?: S3BucketInventoryFilter;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#schedule S3BucketInventory#schedule}
  */
  readonly schedule: S3BucketInventorySchedule;
}
export interface S3BucketInventoryDestinationBucketEncryptionSseKms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#key_id S3BucketInventory#key_id}
  */
  readonly keyId: string;
}

export function s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference | S3BucketInventoryDestinationBucketEncryptionSseKms): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId
  }
}
export interface S3BucketInventoryDestinationBucketEncryptionSseS3 {
}

export function s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference | S3BucketInventoryDestinationBucketEncryptionSseS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }
}
export interface S3BucketInventoryDestinationBucketEncryption {
  /**
  * sse_kms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_kms S3BucketInventory#sse_kms}
  */
  readonly sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms;
  /**
  * sse_s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#sse_s3 S3BucketInventory#sse_s3}
  */
  readonly sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3;
}

export function s3BucketInventoryDestinationBucketEncryptionToTerraform(struct?: S3BucketInventoryDestinationBucketEncryptionOutputReference | S3BucketInventoryDestinationBucketEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sse_kms: s3BucketInventoryDestinationBucketEncryptionSseKmsToTerraform(struct!.sseKms),
    sse_s3: s3BucketInventoryDestinationBucketEncryptionSseS3ToTerraform(struct!.sseS3),
  }
}

export class S3BucketInventoryDestinationBucketEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // sse_kms - computed: false, optional: true, required: false
  private _sseKms?: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined; 
  private __sseKmsOutput = new S3BucketInventoryDestinationBucketEncryptionSseKmsOutputReference(this as any, "sse_kms", true);
  public get sseKms() {
    return this.__sseKmsOutput;
  }
  public putSseKms(value: S3BucketInventoryDestinationBucketEncryptionSseKms | undefined) {
    this._sseKms = value;
  }
  public resetSseKms() {
    this._sseKms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsInput() {
    return this._sseKms
  }

  // sse_s3 - computed: false, optional: true, required: false
  private _sseS3?: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined; 
  private __sseS3Output = new S3BucketInventoryDestinationBucketEncryptionSseS3OutputReference(this as any, "sse_s3", true);
  public get sseS3() {
    return this.__sseS3Output;
  }
  public putSseS3(value: S3BucketInventoryDestinationBucketEncryptionSseS3 | undefined) {
    this._sseS3 = value;
  }
  public resetSseS3() {
    this._sseS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseS3Input() {
    return this._sseS3
  }
}
export interface S3BucketInventoryDestinationBucket {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#account_id S3BucketInventory#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket_arn S3BucketInventory#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#format S3BucketInventory#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
  */
  readonly prefix?: string;
  /**
  * encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#encryption S3BucketInventory#encryption}
  */
  readonly encryption?: S3BucketInventoryDestinationBucketEncryption;
}

export function s3BucketInventoryDestinationBucketToTerraform(struct?: S3BucketInventoryDestinationBucketOutputReference | S3BucketInventoryDestinationBucket): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    format: cdktf.stringToTerraform(struct!.format),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    encryption: s3BucketInventoryDestinationBucketEncryptionToTerraform(struct!.encryption),
  }
}

export class S3BucketInventoryDestinationBucketOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string | undefined; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: S3BucketInventoryDestinationBucketEncryption | undefined; 
  private __encryptionOutput = new S3BucketInventoryDestinationBucketEncryptionOutputReference(this as any, "encryption", true);
  public get encryption() {
    return this.__encryptionOutput;
  }
  public putEncryption(value: S3BucketInventoryDestinationBucketEncryption | undefined) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption
  }
}
export interface S3BucketInventoryDestination {
  /**
  * bucket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#bucket S3BucketInventory#bucket}
  */
  readonly bucket: S3BucketInventoryDestinationBucket;
}

export function s3BucketInventoryDestinationToTerraform(struct?: S3BucketInventoryDestinationOutputReference | S3BucketInventoryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: s3BucketInventoryDestinationBucketToTerraform(struct!.bucket),
  }
}

export class S3BucketInventoryDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: S3BucketInventoryDestinationBucket; 
  private __bucketOutput = new S3BucketInventoryDestinationBucketOutputReference(this as any, "bucket", true);
  public get bucket() {
    return this.__bucketOutput;
  }
  public putBucket(value: S3BucketInventoryDestinationBucket) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }
}
export interface S3BucketInventoryFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#prefix S3BucketInventory#prefix}
  */
  readonly prefix?: string;
}

export function s3BucketInventoryFilterToTerraform(struct?: S3BucketInventoryFilterOutputReference | S3BucketInventoryFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class S3BucketInventoryFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }
}
export interface S3BucketInventorySchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html#frequency S3BucketInventory#frequency}
  */
  readonly frequency: string;
}

export function s3BucketInventoryScheduleToTerraform(struct?: S3BucketInventoryScheduleOutputReference | S3BucketInventorySchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
  }
}

export class S3BucketInventoryScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory}
*/
export class S3BucketInventory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_inventory";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_inventory.html aws_s3_bucket_inventory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketInventoryConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketInventoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_inventory',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._enabled = config.enabled;
    this._includedObjectVersions = config.includedObjectVersions;
    this._name = config.name;
    this._optionalFields = config.optionalFields;
    this._destination = config.destination;
    this._filter = config.filter;
    this._schedule = config.schedule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
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

  // included_object_versions - computed: false, optional: false, required: true
  private _includedObjectVersions?: string; 
  public get includedObjectVersions() {
    return this.getStringAttribute('included_object_versions');
  }
  public set includedObjectVersions(value: string) {
    this._includedObjectVersions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includedObjectVersionsInput() {
    return this._includedObjectVersions
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

  // optional_fields - computed: false, optional: true, required: false
  private _optionalFields?: string[] | undefined; 
  public get optionalFields() {
    return this.getListAttribute('optional_fields');
  }
  public set optionalFields(value: string[] | undefined) {
    this._optionalFields = value;
  }
  public resetOptionalFields() {
    this._optionalFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalFieldsInput() {
    return this._optionalFields
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: S3BucketInventoryDestination; 
  private __destinationOutput = new S3BucketInventoryDestinationOutputReference(this as any, "destination", true);
  public get destination() {
    return this.__destinationOutput;
  }
  public putDestination(value: S3BucketInventoryDestination) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: S3BucketInventoryFilter | undefined; 
  private __filterOutput = new S3BucketInventoryFilterOutputReference(this as any, "filter", true);
  public get filter() {
    return this.__filterOutput;
  }
  public putFilter(value: S3BucketInventoryFilter | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: S3BucketInventorySchedule; 
  private __scheduleOutput = new S3BucketInventoryScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: S3BucketInventorySchedule) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      enabled: cdktf.booleanToTerraform(this._enabled),
      included_object_versions: cdktf.stringToTerraform(this._includedObjectVersions),
      name: cdktf.stringToTerraform(this._name),
      optional_fields: cdktf.listMapper(cdktf.stringToTerraform)(this._optionalFields),
      destination: s3BucketInventoryDestinationToTerraform(this._destination),
      filter: s3BucketInventoryFilterToTerraform(this._filter),
      schedule: s3BucketInventoryScheduleToTerraform(this._schedule),
    };
  }
}
