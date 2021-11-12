// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination KinesisFirehoseDeliveryStream#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#destination_id KinesisFirehoseDeliveryStream#destination_id}
  */
  readonly destinationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags KinesisFirehoseDeliveryStream#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#tags_all KinesisFirehoseDeliveryStream#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
  /**
  * elasticsearch_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
  */
  readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
  /**
  * extended_s3_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
  */
  readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
  /**
  * http_endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
  */
  readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
  /**
  * kinesis_source_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
  */
  readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
  /**
  * redshift_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
  */
  readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
  /**
  * s3_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
  */
  readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration;
  /**
  * server_side_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
  */
  readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
  /**
  * splunk_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
  */
  readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[];
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[];
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // processors - computed: false, optional: true, required: false
  private _processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | undefined; 
  public get processors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processors') as any;
  }
  public set processors(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | undefined) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds
  }
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
  */
  readonly clusterEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
  */
  readonly domainArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_name KinesisFirehoseDeliveryStream#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
  */
  readonly indexRotationPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type_name KinesisFirehoseDeliveryStream#type_name}
  */
  readonly typeName?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
  */
  readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
}

export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    cluster_endpoint: cdktf.stringToTerraform(struct!.clusterEndpoint),
    domain_arn: cdktf.stringToTerraform(struct!.domainArn),
    index_name: cdktf.stringToTerraform(struct!.indexName),
    index_rotation_period: cdktf.stringToTerraform(struct!.indexRotationPeriod),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    vpc_config: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct!.vpcConfig),
  }
}

export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number | undefined; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number | undefined) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number | undefined; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number | undefined) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize
  }

  // cluster_endpoint - computed: false, optional: true, required: false
  private _clusterEndpoint?: string | undefined; 
  public get clusterEndpoint() {
    return this.getStringAttribute('cluster_endpoint');
  }
  public set clusterEndpoint(value: string | undefined) {
    this._clusterEndpoint = value;
  }
  public resetClusterEndpoint() {
    this._clusterEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterEndpointInput() {
    return this._clusterEndpoint
  }

  // domain_arn - computed: false, optional: true, required: false
  private _domainArn?: string | undefined; 
  public get domainArn() {
    return this.getStringAttribute('domain_arn');
  }
  public set domainArn(value: string | undefined) {
    this._domainArn = value;
  }
  public resetDomainArn() {
    this._domainArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainArnInput() {
    return this._domainArn
  }

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName
  }

  // index_rotation_period - computed: false, optional: true, required: false
  private _indexRotationPeriod?: string | undefined; 
  public get indexRotationPeriod() {
    return this.getStringAttribute('index_rotation_period');
  }
  public set indexRotationPeriod(value: string | undefined) {
    this._indexRotationPeriod = value;
  }
  public resetIndexRotationPeriod() {
    this._indexRotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRotationPeriodInput() {
    return this._indexRotationPeriod
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number | undefined; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number | undefined) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string | undefined; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string | undefined) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode
  }

  // type_name - computed: false, optional: true, required: false
  private _typeName?: string | undefined; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string | undefined) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined; 
  private __vpcConfigOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference(this as any, "vpc_config", true);
  public get vpcConfig() {
    return this.__vpcConfigOutput;
  }
  public putVpcConfig(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
  */
  readonly timestampFormats?: string[];
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // timestamp_formats - computed: false, optional: true, required: false
  private _timestampFormats?: string[] | undefined; 
  public get timestampFormats() {
    return this.getListAttribute('timestamp_formats');
  }
  public set timestampFormats(value: string[] | undefined) {
    this._timestampFormats = value;
  }
  public resetTimestampFormats() {
    this._timestampFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFormatsInput() {
    return this._timestampFormats
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}
  */
  readonly caseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}
  */
  readonly columnToJsonKeyMappings?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
  */
  readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
    column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.columnToJsonKeyMappings),
    convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: boolean | cdktf.IResolvable | undefined; 
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive') as any;
  }
  public set caseInsensitive(value: boolean | cdktf.IResolvable | undefined) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive
  }

  // column_to_json_key_mappings - computed: false, optional: true, required: false
  private _columnToJsonKeyMappings?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get columnToJsonKeyMappings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('column_to_json_key_mappings') as any;
  }
  public set columnToJsonKeyMappings(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._columnToJsonKeyMappings = value;
  }
  public resetColumnToJsonKeyMappings() {
    this._columnToJsonKeyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnToJsonKeyMappingsInput() {
    return this._columnToJsonKeyMappings
  }

  // convert_dots_in_json_keys_to_underscores - computed: false, optional: true, required: false
  private _convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable | undefined; 
  public get convertDotsInJsonKeysToUnderscores() {
    return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores') as any;
  }
  public set convertDotsInJsonKeysToUnderscores(value: boolean | cdktf.IResolvable | undefined) {
    this._convertDotsInJsonKeysToUnderscores = value;
  }
  public resetConvertDotsInJsonKeysToUnderscores() {
    this._convertDotsInJsonKeysToUnderscores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertDotsInJsonKeysToUnderscoresInput() {
    return this._convertDotsInJsonKeysToUnderscores
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
  /**
  * hive_json_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
  */
  readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
  /**
  * open_x_json_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
  */
  readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hive_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct!.hiveJsonSerDe),
    open_x_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct!.openXJsonSerDe),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hive_json_ser_de - computed: false, optional: true, required: false
  private _hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined; 
  private __hiveJsonSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this as any, "hive_json_ser_de", true);
  public get hiveJsonSerDe() {
    return this.__hiveJsonSerDeOutput;
  }
  public putHiveJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined) {
    this._hiveJsonSerDe = value;
  }
  public resetHiveJsonSerDe() {
    this._hiveJsonSerDe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveJsonSerDeInput() {
    return this._hiveJsonSerDe
  }

  // open_x_json_ser_de - computed: false, optional: true, required: false
  private _openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined; 
  private __openXJsonSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this as any, "open_x_json_ser_de", true);
  public get openXJsonSerDe() {
    return this.__openXJsonSerDeOutput;
  }
  public putOpenXJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined) {
    this._openXJsonSerDe = value;
  }
  public resetOpenXJsonSerDe() {
    this._openXJsonSerDe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openXJsonSerDeInput() {
    return this._openXJsonSerDe
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
  /**
  * deserializer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
  */
  readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deserializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct!.deserializer),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // deserializer - computed: false, optional: false, required: true
  private _deserializer?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer; 
  private __deserializerOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this as any, "deserializer", true);
  public get deserializer() {
    return this.__deserializerOutput;
  }
  public putDeserializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer) {
    this._deserializer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deserializerInput() {
    return this._deserializer
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}
  */
  readonly bloomFilterColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}
  */
  readonly bloomFilterFalsePositiveProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}
  */
  readonly dictionaryKeyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_padding KinesisFirehoseDeliveryStream#enable_padding}
  */
  readonly enablePadding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#format_version KinesisFirehoseDeliveryStream#format_version}
  */
  readonly formatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}
  */
  readonly paddingTolerance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}
  */
  readonly rowIndexStride?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}
  */
  readonly stripeSizeBytes?: number;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bloomFilterColumns),
    bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct!.bloomFilterFalsePositiveProbability),
    compression: cdktf.stringToTerraform(struct!.compression),
    dictionary_key_threshold: cdktf.numberToTerraform(struct!.dictionaryKeyThreshold),
    enable_padding: cdktf.booleanToTerraform(struct!.enablePadding),
    format_version: cdktf.stringToTerraform(struct!.formatVersion),
    padding_tolerance: cdktf.numberToTerraform(struct!.paddingTolerance),
    row_index_stride: cdktf.numberToTerraform(struct!.rowIndexStride),
    stripe_size_bytes: cdktf.numberToTerraform(struct!.stripeSizeBytes),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number | undefined; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number | undefined) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes
  }

  // bloom_filter_columns - computed: false, optional: true, required: false
  private _bloomFilterColumns?: string[] | undefined; 
  public get bloomFilterColumns() {
    return this.getListAttribute('bloom_filter_columns');
  }
  public set bloomFilterColumns(value: string[] | undefined) {
    this._bloomFilterColumns = value;
  }
  public resetBloomFilterColumns() {
    this._bloomFilterColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterColumnsInput() {
    return this._bloomFilterColumns
  }

  // bloom_filter_false_positive_probability - computed: false, optional: true, required: false
  private _bloomFilterFalsePositiveProbability?: number | undefined; 
  public get bloomFilterFalsePositiveProbability() {
    return this.getNumberAttribute('bloom_filter_false_positive_probability');
  }
  public set bloomFilterFalsePositiveProbability(value: number | undefined) {
    this._bloomFilterFalsePositiveProbability = value;
  }
  public resetBloomFilterFalsePositiveProbability() {
    this._bloomFilterFalsePositiveProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bloomFilterFalsePositiveProbabilityInput() {
    return this._bloomFilterFalsePositiveProbability
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string | undefined; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string | undefined) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
  }

  // dictionary_key_threshold - computed: false, optional: true, required: false
  private _dictionaryKeyThreshold?: number | undefined; 
  public get dictionaryKeyThreshold() {
    return this.getNumberAttribute('dictionary_key_threshold');
  }
  public set dictionaryKeyThreshold(value: number | undefined) {
    this._dictionaryKeyThreshold = value;
  }
  public resetDictionaryKeyThreshold() {
    this._dictionaryKeyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryKeyThresholdInput() {
    return this._dictionaryKeyThreshold
  }

  // enable_padding - computed: false, optional: true, required: false
  private _enablePadding?: boolean | cdktf.IResolvable | undefined; 
  public get enablePadding() {
    return this.getBooleanAttribute('enable_padding') as any;
  }
  public set enablePadding(value: boolean | cdktf.IResolvable | undefined) {
    this._enablePadding = value;
  }
  public resetEnablePadding() {
    this._enablePadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaddingInput() {
    return this._enablePadding
  }

  // format_version - computed: false, optional: true, required: false
  private _formatVersion?: string | undefined; 
  public get formatVersion() {
    return this.getStringAttribute('format_version');
  }
  public set formatVersion(value: string | undefined) {
    this._formatVersion = value;
  }
  public resetFormatVersion() {
    this._formatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatVersionInput() {
    return this._formatVersion
  }

  // padding_tolerance - computed: false, optional: true, required: false
  private _paddingTolerance?: number | undefined; 
  public get paddingTolerance() {
    return this.getNumberAttribute('padding_tolerance');
  }
  public set paddingTolerance(value: number | undefined) {
    this._paddingTolerance = value;
  }
  public resetPaddingTolerance() {
    this._paddingTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paddingToleranceInput() {
    return this._paddingTolerance
  }

  // row_index_stride - computed: false, optional: true, required: false
  private _rowIndexStride?: number | undefined; 
  public get rowIndexStride() {
    return this.getNumberAttribute('row_index_stride');
  }
  public set rowIndexStride(value: number | undefined) {
    this._rowIndexStride = value;
  }
  public resetRowIndexStride() {
    this._rowIndexStride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowIndexStrideInput() {
    return this._rowIndexStride
  }

  // stripe_size_bytes - computed: false, optional: true, required: false
  private _stripeSizeBytes?: number | undefined; 
  public get stripeSizeBytes() {
    return this.getNumberAttribute('stripe_size_bytes');
  }
  public set stripeSizeBytes(value: number | undefined) {
    this._stripeSizeBytes = value;
  }
  public resetStripeSizeBytes() {
    this._stripeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripeSizeBytesInput() {
    return this._stripeSizeBytes
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
  */
  readonly blockSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression KinesisFirehoseDeliveryStream#compression}
  */
  readonly compression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}
  */
  readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}
  */
  readonly maxPaddingBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}
  */
  readonly pageSizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#writer_version KinesisFirehoseDeliveryStream#writer_version}
  */
  readonly writerVersion?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
    compression: cdktf.stringToTerraform(struct!.compression),
    enable_dictionary_compression: cdktf.booleanToTerraform(struct!.enableDictionaryCompression),
    max_padding_bytes: cdktf.numberToTerraform(struct!.maxPaddingBytes),
    page_size_bytes: cdktf.numberToTerraform(struct!.pageSizeBytes),
    writer_version: cdktf.stringToTerraform(struct!.writerVersion),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // block_size_bytes - computed: false, optional: true, required: false
  private _blockSizeBytes?: number | undefined; 
  public get blockSizeBytes() {
    return this.getNumberAttribute('block_size_bytes');
  }
  public set blockSizeBytes(value: number | undefined) {
    this._blockSizeBytes = value;
  }
  public resetBlockSizeBytes() {
    this._blockSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeBytesInput() {
    return this._blockSizeBytes
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string | undefined; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string | undefined) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression
  }

  // enable_dictionary_compression - computed: false, optional: true, required: false
  private _enableDictionaryCompression?: boolean | cdktf.IResolvable | undefined; 
  public get enableDictionaryCompression() {
    return this.getBooleanAttribute('enable_dictionary_compression') as any;
  }
  public set enableDictionaryCompression(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDictionaryCompression = value;
  }
  public resetEnableDictionaryCompression() {
    this._enableDictionaryCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDictionaryCompressionInput() {
    return this._enableDictionaryCompression
  }

  // max_padding_bytes - computed: false, optional: true, required: false
  private _maxPaddingBytes?: number | undefined; 
  public get maxPaddingBytes() {
    return this.getNumberAttribute('max_padding_bytes');
  }
  public set maxPaddingBytes(value: number | undefined) {
    this._maxPaddingBytes = value;
  }
  public resetMaxPaddingBytes() {
    this._maxPaddingBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPaddingBytesInput() {
    return this._maxPaddingBytes
  }

  // page_size_bytes - computed: false, optional: true, required: false
  private _pageSizeBytes?: number | undefined; 
  public get pageSizeBytes() {
    return this.getNumberAttribute('page_size_bytes');
  }
  public set pageSizeBytes(value: number | undefined) {
    this._pageSizeBytes = value;
  }
  public resetPageSizeBytes() {
    this._pageSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeBytesInput() {
    return this._pageSizeBytes
  }

  // writer_version - computed: false, optional: true, required: false
  private _writerVersion?: string | undefined; 
  public get writerVersion() {
    return this.getStringAttribute('writer_version');
  }
  public set writerVersion(value: string | undefined) {
    this._writerVersion = value;
  }
  public resetWriterVersion() {
    this._writerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writerVersionInput() {
    return this._writerVersion
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
  /**
  * orc_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
  */
  readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
  /**
  * parquet_ser_de block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
  */
  readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    orc_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct!.orcSerDe),
    parquet_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct!.parquetSerDe),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // orc_ser_de - computed: false, optional: true, required: false
  private _orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined; 
  private __orcSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this as any, "orc_ser_de", true);
  public get orcSerDe() {
    return this.__orcSerDeOutput;
  }
  public putOrcSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined) {
    this._orcSerDe = value;
  }
  public resetOrcSerDe() {
    this._orcSerDe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orcSerDeInput() {
    return this._orcSerDe
  }

  // parquet_ser_de - computed: false, optional: true, required: false
  private _parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined; 
  private __parquetSerDeOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this as any, "parquet_ser_de", true);
  public get parquetSerDe() {
    return this.__parquetSerDeOutput;
  }
  public putParquetSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined) {
    this._parquetSerDe = value;
  }
  public resetParquetSerDe() {
    this._parquetSerDe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetSerDeInput() {
    return this._parquetSerDe
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
  /**
  * serializer block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
  */
  readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct!.serializer),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // serializer - computed: false, optional: false, required: true
  private _serializer?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer; 
  private __serializerOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this as any, "serializer", true);
  public get serializer() {
    return this.__serializerOutput;
  }
  public putSerializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer) {
    this._serializer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerInput() {
    return this._serializer
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#catalog_id KinesisFirehoseDeliveryStream#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#database_name KinesisFirehoseDeliveryStream#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#region KinesisFirehoseDeliveryStream#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#table_name KinesisFirehoseDeliveryStream#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#version_id KinesisFirehoseDeliveryStream#version_id}
  */
  readonly versionId?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    version_id: cdktf.stringToTerraform(struct!.versionId),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string | undefined; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string | undefined; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * input_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
  */
  readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
  /**
  * output_format_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
  */
  readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
  /**
  * schema_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
  */
  readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    input_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct!.inputFormatConfiguration),
    output_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct!.outputFormatConfiguration),
    schema_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct!.schemaConfiguration),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // input_format_configuration - computed: false, optional: false, required: true
  private _inputFormatConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration; 
  private __inputFormatConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this as any, "input_format_configuration", true);
  public get inputFormatConfiguration() {
    return this.__inputFormatConfigurationOutput;
  }
  public putInputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration) {
    this._inputFormatConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatConfigurationInput() {
    return this._inputFormatConfiguration
  }

  // output_format_configuration - computed: false, optional: false, required: true
  private _outputFormatConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration; 
  private __outputFormatConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this as any, "output_format_configuration", true);
  public get outputFormatConfiguration() {
    return this.__outputFormatConfigurationOutput;
  }
  public putOutputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration) {
    this._outputFormatConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatConfigurationInput() {
    return this._outputFormatConfiguration
  }

  // schema_configuration - computed: false, optional: false, required: true
  private _schemaConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration; 
  private __schemaConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this as any, "schema_configuration", true);
  public get schemaConfiguration() {
    return this.__schemaConfigurationOutput;
  }
  public putSchemaConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration) {
    this._schemaConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigurationInput() {
    return this._schemaConfiguration
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[];
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[];
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // processors - computed: false, optional: true, required: false
  private _processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | undefined; 
  public get processors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processors') as any;
  }
  public set processors(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | undefined) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // buffer_interval - computed: false, optional: true, required: false
  private _bufferInterval?: number | undefined; 
  public get bufferInterval() {
    return this.getNumberAttribute('buffer_interval');
  }
  public set bufferInterval(value: number | undefined) {
    this._bufferInterval = value;
  }
  public resetBufferInterval() {
    this._bufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferIntervalInput() {
    return this._bufferInterval
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: number | undefined; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number | undefined) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string | undefined; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string | undefined) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
  */
  readonly errorOutputPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
  /**
  * data_format_conversion_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
  */
  readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
  /**
  * s3_backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
}

export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    error_output_prefix: cdktf.stringToTerraform(struct!.errorOutputPrefix),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    data_format_conversion_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct!.dataFormatConversionConfiguration),
    processing_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_backup_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
  }
}

export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // buffer_interval - computed: false, optional: true, required: false
  private _bufferInterval?: number | undefined; 
  public get bufferInterval() {
    return this.getNumberAttribute('buffer_interval');
  }
  public set bufferInterval(value: number | undefined) {
    this._bufferInterval = value;
  }
  public resetBufferInterval() {
    this._bufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferIntervalInput() {
    return this._bufferInterval
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: number | undefined; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number | undefined) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string | undefined; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string | undefined) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat
  }

  // error_output_prefix - computed: false, optional: true, required: false
  private _errorOutputPrefix?: string | undefined; 
  public get errorOutputPrefix() {
    return this.getStringAttribute('error_output_prefix');
  }
  public set errorOutputPrefix(value: string | undefined) {
    this._errorOutputPrefix = value;
  }
  public resetErrorOutputPrefix() {
    this._errorOutputPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutputPrefixInput() {
    return this._errorOutputPrefix
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string | undefined; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string | undefined) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // data_format_conversion_configuration - computed: false, optional: true, required: false
  private _dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined; 
  private __dataFormatConversionConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference(this as any, "data_format_conversion_configuration", true);
  public get dataFormatConversionConfiguration() {
    return this.__dataFormatConversionConfigurationOutput;
  }
  public putDataFormatConversionConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined) {
    this._dataFormatConversionConfiguration = value;
  }
  public resetDataFormatConversionConfiguration() {
    this._dataFormatConversionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatConversionConfigurationInput() {
    return this._dataFormatConversionConfiguration
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined; 
  private __s3BackupConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference(this as any, "s3_backup_configuration", true);
  public get s3BackupConfiguration() {
    return this.__s3BackupConfigurationOutput;
  }
  public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined) {
    this._s3BackupConfiguration = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[];
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[];
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // processors - computed: false, optional: true, required: false
  private _processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | undefined; 
  public get processors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processors') as any;
  }
  public set processors(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | undefined) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#value KinesisFirehoseDeliveryStream#value}
  */
  readonly value: string;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#content_encoding KinesisFirehoseDeliveryStream#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * common_attributes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
  */
  readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[];
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string | undefined; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string | undefined) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // common_attributes - computed: false, optional: true, required: false
  private _commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | undefined; 
  public get commonAttributes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('common_attributes') as any;
  }
  public set commonAttributes(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | undefined) {
    this._commonAttributes = value;
  }
  public resetCommonAttributes() {
    this._commonAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAttributesInput() {
    return this._commonAttributes
  }
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#access_key KinesisFirehoseDeliveryStream#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
  */
  readonly bufferingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
  */
  readonly bufferingSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#name KinesisFirehoseDeliveryStream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#url KinesisFirehoseDeliveryStream#url}
  */
  readonly url: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
  /**
  * request_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
  */
  readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
}

export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
    buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
    name: cdktf.stringToTerraform(struct!.name),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    url: cdktf.stringToTerraform(struct!.url),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    request_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct!.requestConfiguration),
  }
}

export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string | undefined; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // buffering_interval - computed: false, optional: true, required: false
  private _bufferingInterval?: number | undefined; 
  public get bufferingInterval() {
    return this.getNumberAttribute('buffering_interval');
  }
  public set bufferingInterval(value: number | undefined) {
    this._bufferingInterval = value;
  }
  public resetBufferingInterval() {
    this._bufferingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingIntervalInput() {
    return this._bufferingInterval
  }

  // buffering_size - computed: false, optional: true, required: false
  private _bufferingSize?: number | undefined; 
  public get bufferingSize() {
    return this.getNumberAttribute('buffering_size');
  }
  public set bufferingSize(value: number | undefined) {
    this._bufferingSize = value;
  }
  public resetBufferingSize() {
    this._bufferingSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferingSizeInput() {
    return this._bufferingSize
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number | undefined; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number | undefined) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string | undefined; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string | undefined; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string | undefined) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }

  // request_configuration - computed: false, optional: true, required: false
  private _requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined; 
  private __requestConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference(this as any, "request_configuration", true);
  public get requestConfiguration() {
    return this.__requestConfigurationOutput;
  }
  public putRequestConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined) {
    this._requestConfiguration = value;
  }
  public resetRequestConfiguration() {
    this._requestConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationInput() {
    return this._requestConfiguration
  }
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}
  */
  readonly kinesisStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kinesis_stream_arn - computed: false, optional: false, required: true
  private _kinesisStreamArn?: string; 
  public get kinesisStreamArn() {
    return this.getStringAttribute('kinesis_stream_arn');
  }
  public set kinesisStreamArn(value: string) {
    this._kinesisStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamArnInput() {
    return this._kinesisStreamArn
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[];
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[];
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // processors - computed: false, optional: true, required: false
  private _processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | undefined; 
  public get processors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processors') as any;
  }
  public set processors(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | undefined) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // buffer_interval - computed: false, optional: true, required: false
  private _bufferInterval?: number | undefined; 
  public get bufferInterval() {
    return this.getNumberAttribute('buffer_interval');
  }
  public set bufferInterval(value: number | undefined) {
    this._bufferInterval = value;
  }
  public resetBufferInterval() {
    this._bufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferIntervalInput() {
    return this._bufferInterval
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: number | undefined; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number | undefined) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string | undefined; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string | undefined) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}
  */
  readonly clusterJdbcurl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#copy_options KinesisFirehoseDeliveryStream#copy_options}
  */
  readonly copyOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}
  */
  readonly dataTableColumns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_table_name KinesisFirehoseDeliveryStream#data_table_name}
  */
  readonly dataTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#password KinesisFirehoseDeliveryStream#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#username KinesisFirehoseDeliveryStream#username}
  */
  readonly username: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
  /**
  * s3_backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
  */
  readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
}

export function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_jdbcurl: cdktf.stringToTerraform(struct!.clusterJdbcurl),
    copy_options: cdktf.stringToTerraform(struct!.copyOptions),
    data_table_columns: cdktf.stringToTerraform(struct!.dataTableColumns),
    data_table_name: cdktf.stringToTerraform(struct!.dataTableName),
    password: cdktf.stringToTerraform(struct!.password),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    username: cdktf.stringToTerraform(struct!.username),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
    s3_backup_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct!.s3BackupConfiguration),
  }
}

export class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_jdbcurl - computed: false, optional: false, required: true
  private _clusterJdbcurl?: string; 
  public get clusterJdbcurl() {
    return this.getStringAttribute('cluster_jdbcurl');
  }
  public set clusterJdbcurl(value: string) {
    this._clusterJdbcurl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterJdbcurlInput() {
    return this._clusterJdbcurl
  }

  // copy_options - computed: false, optional: true, required: false
  private _copyOptions?: string | undefined; 
  public get copyOptions() {
    return this.getStringAttribute('copy_options');
  }
  public set copyOptions(value: string | undefined) {
    this._copyOptions = value;
  }
  public resetCopyOptions() {
    this._copyOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyOptionsInput() {
    return this._copyOptions
  }

  // data_table_columns - computed: false, optional: true, required: false
  private _dataTableColumns?: string | undefined; 
  public get dataTableColumns() {
    return this.getStringAttribute('data_table_columns');
  }
  public set dataTableColumns(value: string | undefined) {
    this._dataTableColumns = value;
  }
  public resetDataTableColumns() {
    this._dataTableColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableColumnsInput() {
    return this._dataTableColumns
  }

  // data_table_name - computed: false, optional: false, required: true
  private _dataTableName?: string; 
  public get dataTableName() {
    return this.getStringAttribute('data_table_name');
  }
  public set dataTableName(value: string) {
    this._dataTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTableNameInput() {
    return this._dataTableName
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

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number | undefined; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number | undefined) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string | undefined; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string | undefined) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode
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

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }

  // s3_backup_configuration - computed: false, optional: true, required: false
  private _s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined; 
  private __s3BackupConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference(this as any, "s3_backup_configuration", true);
  public get s3BackupConfiguration() {
    return this.__s3BackupConfigurationOutput;
  }
  public putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined) {
    this._s3BackupConfiguration = value;
  }
  public resetS3BackupConfiguration() {
    this._s3BackupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupConfigurationInput() {
    return this._s3BackupConfiguration
  }
}
export interface KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_interval KinesisFirehoseDeliveryStream#buffer_interval}
  */
  readonly bufferInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#buffer_size KinesisFirehoseDeliveryStream#buffer_size}
  */
  readonly bufferSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#compression_format KinesisFirehoseDeliveryStream#compression_format}
  */
  readonly compressionFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#prefix KinesisFirehoseDeliveryStream#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#role_arn KinesisFirehoseDeliveryStream#role_arn}
  */
  readonly roleArn: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions;
}

export function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamS3Configuration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
  }
}

export class KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // buffer_interval - computed: false, optional: true, required: false
  private _bufferInterval?: number | undefined; 
  public get bufferInterval() {
    return this.getNumberAttribute('buffer_interval');
  }
  public set bufferInterval(value: number | undefined) {
    this._bufferInterval = value;
  }
  public resetBufferInterval() {
    this._bufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferIntervalInput() {
    return this._bufferInterval
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: number | undefined; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number | undefined) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize
  }

  // compression_format - computed: false, optional: true, required: false
  private _compressionFormat?: string | undefined; 
  public get compressionFormat() {
    return this.getStringAttribute('compression_format');
  }
  public set compressionFormat(value: string | undefined) {
    this._compressionFormat = value;
  }
  public resetCompressionFormat() {
    this._compressionFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionFormatInput() {
    return this._compressionFormat
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_arn KinesisFirehoseDeliveryStream#key_arn}
  */
  readonly keyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#key_type KinesisFirehoseDeliveryStream#key_type}
  */
  readonly keyType?: string;
}

export function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
    key_type: cdktf.stringToTerraform(struct!.keyType),
  }
}

export class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // key_arn - computed: false, optional: true, required: false
  private _keyArn?: string | undefined; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string | undefined) {
    this._keyArn = value;
  }
  public resetKeyArn() {
    this._keyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string | undefined; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string | undefined) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
  */
  readonly logGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
  */
  readonly logStreamName?: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
    log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
  }
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // log_group_name - computed: false, optional: true, required: false
  private _logGroupName?: string | undefined; 
  public get logGroupName() {
    return this.getStringAttribute('log_group_name');
  }
  public set logGroupName(value: string | undefined) {
    this._logGroupName = value;
  }
  public resetLogGroupName() {
    this._logGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupNameInput() {
    return this._logGroupName
  }

  // log_stream_name - computed: false, optional: true, required: false
  private _logStreamName?: string | undefined; 
  public get logStreamName() {
    return this.getStringAttribute('log_stream_name');
  }
  public set logStreamName(value: string | undefined) {
    this._logStreamName = value;
  }
  public resetLogStreamName() {
    this._logStreamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamNameInput() {
    return this._logStreamName
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
  */
  readonly parameterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
  */
  readonly parameterValue: string;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_name: cdktf.stringToTerraform(struct!.parameterName),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#type KinesisFirehoseDeliveryStream#type}
  */
  readonly type: string;
  /**
  * parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parameters KinesisFirehoseDeliveryStream#parameters}
  */
  readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[];
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct!.parameters),
  }
}

export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#enabled KinesisFirehoseDeliveryStream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * processors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processors KinesisFirehoseDeliveryStream#processors}
  */
  readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[];
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
  }
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // processors - computed: false, optional: true, required: false
  private _processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | undefined; 
  public get processors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('processors') as any;
  }
  public set processors(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | undefined) {
    this._processors = value;
  }
  public resetProcessors() {
    this._processors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorsInput() {
    return this._processors
  }
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}
  */
  readonly hecAcknowledgmentTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}
  */
  readonly hecEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}
  */
  readonly hecEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hec_token KinesisFirehoseDeliveryStream#hec_token}
  */
  readonly hecToken: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
  */
  readonly retryDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
  */
  readonly s3BackupMode?: string;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
  */
  readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
}

export function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hec_acknowledgment_timeout: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeout),
    hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
    hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
    hec_token: cdktf.stringToTerraform(struct!.hecToken),
    retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
    s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
    cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct!.cloudwatchLoggingOptions),
    processing_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct!.processingConfiguration),
  }
}

export class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hec_acknowledgment_timeout - computed: false, optional: true, required: false
  private _hecAcknowledgmentTimeout?: number | undefined; 
  public get hecAcknowledgmentTimeout() {
    return this.getNumberAttribute('hec_acknowledgment_timeout');
  }
  public set hecAcknowledgmentTimeout(value: number | undefined) {
    this._hecAcknowledgmentTimeout = value;
  }
  public resetHecAcknowledgmentTimeout() {
    this._hecAcknowledgmentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecAcknowledgmentTimeoutInput() {
    return this._hecAcknowledgmentTimeout
  }

  // hec_endpoint - computed: false, optional: false, required: true
  private _hecEndpoint?: string; 
  public get hecEndpoint() {
    return this.getStringAttribute('hec_endpoint');
  }
  public set hecEndpoint(value: string) {
    this._hecEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecEndpointInput() {
    return this._hecEndpoint
  }

  // hec_endpoint_type - computed: false, optional: true, required: false
  private _hecEndpointType?: string | undefined; 
  public get hecEndpointType() {
    return this.getStringAttribute('hec_endpoint_type');
  }
  public set hecEndpointType(value: string | undefined) {
    this._hecEndpointType = value;
  }
  public resetHecEndpointType() {
    this._hecEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hecEndpointTypeInput() {
    return this._hecEndpointType
  }

  // hec_token - computed: false, optional: false, required: true
  private _hecToken?: string; 
  public get hecToken() {
    return this.getStringAttribute('hec_token');
  }
  public set hecToken(value: string) {
    this._hecToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hecTokenInput() {
    return this._hecToken
  }

  // retry_duration - computed: false, optional: true, required: false
  private _retryDuration?: number | undefined; 
  public get retryDuration() {
    return this.getNumberAttribute('retry_duration');
  }
  public set retryDuration(value: number | undefined) {
    this._retryDuration = value;
  }
  public resetRetryDuration() {
    this._retryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryDurationInput() {
    return this._retryDuration
  }

  // s3_backup_mode - computed: false, optional: true, required: false
  private _s3BackupMode?: string | undefined; 
  public get s3BackupMode() {
    return this.getStringAttribute('s3_backup_mode');
  }
  public set s3BackupMode(value: string | undefined) {
    this._s3BackupMode = value;
  }
  public resetS3BackupMode() {
    this._s3BackupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BackupModeInput() {
    return this._s3BackupMode
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
export class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesis_firehose_delivery_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisFirehoseDeliveryStreamConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._destination = config.destination;
    this._destinationId = config.destinationId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._versionId = config.versionId;
    this._elasticsearchConfiguration = config.elasticsearchConfiguration;
    this._extendedS3Configuration = config.extendedS3Configuration;
    this._httpEndpointConfiguration = config.httpEndpointConfiguration;
    this._kinesisSourceConfiguration = config.kinesisSourceConfiguration;
    this._redshiftConfiguration = config.redshiftConfiguration;
    this._s3Configuration = config.s3Configuration;
    this._serverSideEncryption = config.serverSideEncryption;
    this._splunkConfiguration = config.splunkConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: true, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // destination_id - computed: true, optional: true, required: false
  private _destinationId?: string | undefined; 
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }
  public set destinationId(value: string | undefined) {
    this._destinationId = value;
  }
  public resetDestinationId() {
    this._destinationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIdInput() {
    return this._destinationId
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

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string | undefined; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // elasticsearch_configuration - computed: false, optional: true, required: false
  private _elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined; 
  private __elasticsearchConfigurationOutput = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference(this as any, "elasticsearch_configuration", true);
  public get elasticsearchConfiguration() {
    return this.__elasticsearchConfigurationOutput;
  }
  public putElasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined) {
    this._elasticsearchConfiguration = value;
  }
  public resetElasticsearchConfiguration() {
    this._elasticsearchConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigurationInput() {
    return this._elasticsearchConfiguration
  }

  // extended_s3_configuration - computed: false, optional: true, required: false
  private _extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined; 
  private __extendedS3ConfigurationOutput = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference(this as any, "extended_s3_configuration", true);
  public get extendedS3Configuration() {
    return this.__extendedS3ConfigurationOutput;
  }
  public putExtendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined) {
    this._extendedS3Configuration = value;
  }
  public resetExtendedS3Configuration() {
    this._extendedS3Configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedS3ConfigurationInput() {
    return this._extendedS3Configuration
  }

  // http_endpoint_configuration - computed: false, optional: true, required: false
  private _httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined; 
  private __httpEndpointConfigurationOutput = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference(this as any, "http_endpoint_configuration", true);
  public get httpEndpointConfiguration() {
    return this.__httpEndpointConfigurationOutput;
  }
  public putHttpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined) {
    this._httpEndpointConfiguration = value;
  }
  public resetHttpEndpointConfiguration() {
    this._httpEndpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigurationInput() {
    return this._httpEndpointConfiguration
  }

  // kinesis_source_configuration - computed: false, optional: true, required: false
  private _kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined; 
  private __kinesisSourceConfigurationOutput = new KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference(this as any, "kinesis_source_configuration", true);
  public get kinesisSourceConfiguration() {
    return this.__kinesisSourceConfigurationOutput;
  }
  public putKinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined) {
    this._kinesisSourceConfiguration = value;
  }
  public resetKinesisSourceConfiguration() {
    this._kinesisSourceConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisSourceConfigurationInput() {
    return this._kinesisSourceConfiguration
  }

  // redshift_configuration - computed: false, optional: true, required: false
  private _redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined; 
  private __redshiftConfigurationOutput = new KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference(this as any, "redshift_configuration", true);
  public get redshiftConfiguration() {
    return this.__redshiftConfigurationOutput;
  }
  public putRedshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined) {
    this._redshiftConfiguration = value;
  }
  public resetRedshiftConfiguration() {
    this._redshiftConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftConfigurationInput() {
    return this._redshiftConfiguration
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration | undefined; 
  private __s3ConfigurationOutput = new KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference(this as any, "s3_configuration", true);
  public get s3Configuration() {
    return this.__s3ConfigurationOutput;
  }
  public putS3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration | undefined) {
    this._s3Configuration = value;
  }
  public resetS3Configuration() {
    this._s3Configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined; 
  private __serverSideEncryptionOutput = new KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference(this as any, "server_side_encryption", true);
  public get serverSideEncryption() {
    return this.__serverSideEncryptionOutput;
  }
  public putServerSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption
  }

  // splunk_configuration - computed: false, optional: true, required: false
  private _splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined; 
  private __splunkConfigurationOutput = new KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference(this as any, "splunk_configuration", true);
  public get splunkConfiguration() {
    return this.__splunkConfigurationOutput;
  }
  public putSplunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined) {
    this._splunkConfiguration = value;
  }
  public resetSplunkConfiguration() {
    this._splunkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkConfigurationInput() {
    return this._splunkConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      destination_id: cdktf.stringToTerraform(this._destinationId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version_id: cdktf.stringToTerraform(this._versionId),
      elasticsearch_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(this._elasticsearchConfiguration),
      extended_s3_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(this._extendedS3Configuration),
      http_endpoint_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(this._httpEndpointConfiguration),
      kinesis_source_configuration: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(this._kinesisSourceConfiguration),
      redshift_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(this._redshiftConfiguration),
      s3_configuration: kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(this._s3Configuration),
      server_side_encryption: kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(this._serverSideEncryption),
      splunk_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(this._splunkConfiguration),
    };
  }
}
