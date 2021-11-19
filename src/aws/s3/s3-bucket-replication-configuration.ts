// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3BucketReplicationConfigurationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#bucket S3BucketReplicationConfigurationA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#role S3BucketReplicationConfigurationA#role}
  */
  readonly role: string;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#rule S3BucketReplicationConfigurationA#rule}
  */
  readonly rule: S3BucketReplicationConfigurationRule[];
}
export interface S3BucketReplicationConfigurationRuleDeleteMarkerReplication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
}

export function s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference | S3BucketReplicationConfigurationRuleDeleteMarkerReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class S3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#owner S3BucketReplicationConfigurationA#owner}
  */
  readonly owner: string;
}

export function s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference | S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner: cdktf.stringToTerraform(struct!.owner),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replica_kms_key_id S3BucketReplicationConfigurationA#replica_kms_key_id}
  */
  readonly replicaKmsKeyId: string;
}

export function s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference | S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_kms_key_id: cdktf.stringToTerraform(struct!.replicaKmsKeyId),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // replica_kms_key_id - computed: false, optional: false, required: true
  private _replicaKmsKeyId?: string; 
  public get replicaKmsKeyId() {
    return this.getStringAttribute('replica_kms_key_id');
  }
  public set replicaKmsKeyId(value: string) {
    this._replicaKmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaKmsKeyIdInput() {
    return this._replicaKmsKeyId
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#minutes S3BucketReplicationConfigurationA#minutes}
  */
  readonly minutes: number;
}

export function s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference | S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationMetrics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
  /**
  * event_threshold block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#event_threshold S3BucketReplicationConfigurationA#event_threshold}
  */
  readonly eventThreshold: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;
}

export function s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference | S3BucketReplicationConfigurationRuleDestinationMetrics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    event_threshold: s3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdToTerraform(struct!.eventThreshold),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // event_threshold - computed: false, optional: false, required: true
  private _eventThreshold?: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold; 
  private __eventThresholdOutput = new S3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(this as any, "event_threshold", true);
  public get eventThreshold() {
    return this.__eventThresholdOutput;
  }
  public putEventThreshold(value: S3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold) {
    this._eventThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventThresholdInput() {
    return this._eventThreshold
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#minutes S3BucketReplicationConfigurationA#minutes}
  */
  readonly minutes: number;
}

export function s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes
  }
}
export interface S3BucketReplicationConfigurationRuleDestinationReplicationTime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
  /**
  * time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#time S3BucketReplicationConfigurationA#time}
  */
  readonly time: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;
}

export function s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference | S3BucketReplicationConfigurationRuleDestinationReplicationTime): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    time: s3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeToTerraform(struct!.time),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // time - computed: false, optional: false, required: true
  private _time?: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime; 
  private __timeOutput = new S3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(this as any, "time", true);
  public get time() {
    return this.__timeOutput;
  }
  public putTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTimeTime) {
    this._time = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time
  }
}
export interface S3BucketReplicationConfigurationRuleDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#account S3BucketReplicationConfigurationA#account}
  */
  readonly account?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#bucket S3BucketReplicationConfigurationA#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#storage_class S3BucketReplicationConfigurationA#storage_class}
  */
  readonly storageClass?: string;
  /**
  * access_control_translation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#access_control_translation S3BucketReplicationConfigurationA#access_control_translation}
  */
  readonly accessControlTranslation?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#encryption_configuration S3BucketReplicationConfigurationA#encryption_configuration}
  */
  readonly encryptionConfiguration?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;
  /**
  * metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#metrics S3BucketReplicationConfigurationA#metrics}
  */
  readonly metrics?: S3BucketReplicationConfigurationRuleDestinationMetrics;
  /**
  * replication_time block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replication_time S3BucketReplicationConfigurationA#replication_time}
  */
  readonly replicationTime?: S3BucketReplicationConfigurationRuleDestinationReplicationTime;
}

export function s3BucketReplicationConfigurationRuleDestinationToTerraform(struct?: S3BucketReplicationConfigurationRuleDestinationOutputReference | S3BucketReplicationConfigurationRuleDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    access_control_translation: s3BucketReplicationConfigurationRuleDestinationAccessControlTranslationToTerraform(struct!.accessControlTranslation),
    encryption_configuration: s3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationToTerraform(struct!.encryptionConfiguration),
    metrics: s3BucketReplicationConfigurationRuleDestinationMetricsToTerraform(struct!.metrics),
    replication_time: s3BucketReplicationConfigurationRuleDestinationReplicationTimeToTerraform(struct!.replicationTime),
  }
}

export class S3BucketReplicationConfigurationRuleDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // account - computed: false, optional: true, required: false
  private _account?: string | undefined; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account
  }

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

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string | undefined; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }

  // access_control_translation - computed: false, optional: true, required: false
  private _accessControlTranslation?: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined; 
  private __accessControlTranslationOutput = new S3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(this as any, "access_control_translation", true);
  public get accessControlTranslation() {
    return this.__accessControlTranslationOutput;
  }
  public putAccessControlTranslation(value: S3BucketReplicationConfigurationRuleDestinationAccessControlTranslation | undefined) {
    this._accessControlTranslation = value;
  }
  public resetAccessControlTranslation() {
    this._accessControlTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlTranslationInput() {
    return this._accessControlTranslation
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration?: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined; 
  private __encryptionConfigurationOutput = new S3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
  public get encryptionConfiguration() {
    return this.__encryptionConfigurationOutput;
  }
  public putEncryptionConfiguration(value: S3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration | undefined) {
    this._encryptionConfiguration = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: S3BucketReplicationConfigurationRuleDestinationMetrics | undefined; 
  private __metricsOutput = new S3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(this as any, "metrics", true);
  public get metrics() {
    return this.__metricsOutput;
  }
  public putMetrics(value: S3BucketReplicationConfigurationRuleDestinationMetrics | undefined) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics
  }

  // replication_time - computed: false, optional: true, required: false
  private _replicationTime?: S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined; 
  private __replicationTimeOutput = new S3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(this as any, "replication_time", true);
  public get replicationTime() {
    return this.__replicationTimeOutput;
  }
  public putReplicationTime(value: S3BucketReplicationConfigurationRuleDestinationReplicationTime | undefined) {
    this._replicationTime = value;
  }
  public resetReplicationTime() {
    this._replicationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationTimeInput() {
    return this._replicationTime
  }
}
export interface S3BucketReplicationConfigurationRuleExistingObjectReplication {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
}

export function s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct?: S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference | S3BucketReplicationConfigurationRuleExistingObjectReplication): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class S3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }
}
export interface S3BucketReplicationConfigurationRuleFilterAnd {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#tags S3BucketReplicationConfigurationA#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

export function s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterAndOutputReference | S3BucketReplicationConfigurationRuleFilterAnd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export class S3BucketReplicationConfigurationRuleFilterAndOutputReference extends cdktf.ComplexObject {
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
}
export interface S3BucketReplicationConfigurationRuleFilterTag {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#key S3BucketReplicationConfigurationA#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#value S3BucketReplicationConfigurationA#value}
  */
  readonly value: string;
}

export function s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterTagOutputReference | S3BucketReplicationConfigurationRuleFilterTag): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class S3BucketReplicationConfigurationRuleFilterTagOutputReference extends cdktf.ComplexObject {
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
export interface S3BucketReplicationConfigurationRuleFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
  */
  readonly prefix?: string;
  /**
  * and block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#and S3BucketReplicationConfigurationA#and}
  */
  readonly and?: S3BucketReplicationConfigurationRuleFilterAnd;
  /**
  * tag block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#tag S3BucketReplicationConfigurationA#tag}
  */
  readonly tag?: S3BucketReplicationConfigurationRuleFilterTag;
}

export function s3BucketReplicationConfigurationRuleFilterToTerraform(struct?: S3BucketReplicationConfigurationRuleFilterOutputReference | S3BucketReplicationConfigurationRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    and: s3BucketReplicationConfigurationRuleFilterAndToTerraform(struct!.and),
    tag: s3BucketReplicationConfigurationRuleFilterTagToTerraform(struct!.tag),
  }
}

export class S3BucketReplicationConfigurationRuleFilterOutputReference extends cdktf.ComplexObject {
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

  // and - computed: false, optional: true, required: false
  private _and?: S3BucketReplicationConfigurationRuleFilterAnd | undefined; 
  private __andOutput = new S3BucketReplicationConfigurationRuleFilterAndOutputReference(this as any, "and", true);
  public get and() {
    return this.__andOutput;
  }
  public putAnd(value: S3BucketReplicationConfigurationRuleFilterAnd | undefined) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: S3BucketReplicationConfigurationRuleFilterTag | undefined; 
  private __tagOutput = new S3BucketReplicationConfigurationRuleFilterTagOutputReference(this as any, "tag", true);
  public get tag() {
    return this.__tagOutput;
  }
  public putTag(value: S3BucketReplicationConfigurationRuleFilterTag | undefined) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag
  }
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
}

export function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
}

export function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }
}
export interface S3BucketReplicationConfigurationRuleSourceSelectionCriteria {
  /**
  * replica_modifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#replica_modifications S3BucketReplicationConfigurationA#replica_modifications}
  */
  readonly replicaModifications?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;
  /**
  * sse_kms_encrypted_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#sse_kms_encrypted_objects S3BucketReplicationConfigurationA#sse_kms_encrypted_objects}
  */
  readonly sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
}

export function s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference | S3BucketReplicationConfigurationRuleSourceSelectionCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replica_modifications: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsToTerraform(struct!.replicaModifications),
    sse_kms_encrypted_objects: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsToTerraform(struct!.sseKmsEncryptedObjects),
  }
}

export class S3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // replica_modifications - computed: false, optional: true, required: false
  private _replicaModifications?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined; 
  private __replicaModificationsOutput = new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(this as any, "replica_modifications", true);
  public get replicaModifications() {
    return this.__replicaModificationsOutput;
  }
  public putReplicaModifications(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications | undefined) {
    this._replicaModifications = value;
  }
  public resetReplicaModifications() {
    this._replicaModifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaModificationsInput() {
    return this._replicaModifications
  }

  // sse_kms_encrypted_objects - computed: false, optional: true, required: false
  private _sseKmsEncryptedObjects?: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined; 
  private __sseKmsEncryptedObjectsOutput = new S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(this as any, "sse_kms_encrypted_objects", true);
  public get sseKmsEncryptedObjects() {
    return this.__sseKmsEncryptedObjectsOutput;
  }
  public putSseKmsEncryptedObjects(value: S3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects | undefined) {
    this._sseKmsEncryptedObjects = value;
  }
  public resetSseKmsEncryptedObjects() {
    this._sseKmsEncryptedObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sseKmsEncryptedObjectsInput() {
    return this._sseKmsEncryptedObjects
  }
}
export interface S3BucketReplicationConfigurationRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#id S3BucketReplicationConfigurationA#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#prefix S3BucketReplicationConfigurationA#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#priority S3BucketReplicationConfigurationA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#status S3BucketReplicationConfigurationA#status}
  */
  readonly status: string;
  /**
  * delete_marker_replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#delete_marker_replication S3BucketReplicationConfigurationA#delete_marker_replication}
  */
  readonly deleteMarkerReplication?: S3BucketReplicationConfigurationRuleDeleteMarkerReplication;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#destination S3BucketReplicationConfigurationA#destination}
  */
  readonly destination: S3BucketReplicationConfigurationRuleDestination;
  /**
  * existing_object_replication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#existing_object_replication S3BucketReplicationConfigurationA#existing_object_replication}
  */
  readonly existingObjectReplication?: S3BucketReplicationConfigurationRuleExistingObjectReplication;
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#filter S3BucketReplicationConfigurationA#filter}
  */
  readonly filter?: S3BucketReplicationConfigurationRuleFilter;
  /**
  * source_selection_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html#source_selection_criteria S3BucketReplicationConfigurationA#source_selection_criteria}
  */
  readonly sourceSelectionCriteria?: S3BucketReplicationConfigurationRuleSourceSelectionCriteria;
}

export function s3BucketReplicationConfigurationRuleToTerraform(struct?: S3BucketReplicationConfigurationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    priority: cdktf.numberToTerraform(struct!.priority),
    status: cdktf.stringToTerraform(struct!.status),
    delete_marker_replication: s3BucketReplicationConfigurationRuleDeleteMarkerReplicationToTerraform(struct!.deleteMarkerReplication),
    destination: s3BucketReplicationConfigurationRuleDestinationToTerraform(struct!.destination),
    existing_object_replication: s3BucketReplicationConfigurationRuleExistingObjectReplicationToTerraform(struct!.existingObjectReplication),
    filter: s3BucketReplicationConfigurationRuleFilterToTerraform(struct!.filter),
    source_selection_criteria: s3BucketReplicationConfigurationRuleSourceSelectionCriteriaToTerraform(struct!.sourceSelectionCriteria),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html aws_s3_bucket_replication_configuration}
*/
export class S3BucketReplicationConfigurationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3_bucket_replication_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_replication_configuration.html aws_s3_bucket_replication_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketReplicationConfigurationAConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketReplicationConfigurationAConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_replication_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucket = config.bucket;
    this._role = config.role;
    this._rule = config.rule;
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: S3BucketReplicationConfigurationRule[]; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: S3BucketReplicationConfigurationRule[]) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      role: cdktf.stringToTerraform(this._role),
      rule: cdktf.listMapper(s3BucketReplicationConfigurationRuleToTerraform)(this._rule),
    };
  }
}
