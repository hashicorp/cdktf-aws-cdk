// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#code KinesisAnalyticsApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#description KinesisAnalyticsApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#start_application KinesisAnalyticsApplication#start_application}
  */
  readonly startApplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags KinesisAnalyticsApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#tags_all KinesisAnalyticsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
  /**
  * inputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
  */
  readonly inputs?: KinesisAnalyticsApplicationInputs;
  /**
  * outputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#outputs KinesisAnalyticsApplication#outputs}
  */
  readonly outputs?: KinesisAnalyticsApplicationOutputs[];
  /**
  * reference_data_sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
  */
  readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources;
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}
  */
  readonly logStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // log_stream_arn - computed: false, optional: false, required: true
  private _logStreamArn?: string; 
  public get logStreamArn() {
    return this.getStringAttribute('log_stream_arn');
  }
  public set logStreamArn(value: string) {
    this._logStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamArnInput() {
    return this._logStreamArn
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
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationInputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationInputsParallelism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}
  */
  readonly count?: number;
}

export function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: true, optional: true, required: false
  private _count?: number | undefined; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number | undefined) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
}

export function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda: kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct!.lambda),
  }
}

export class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // lambda - computed: false, optional: false, required: true
  private _lambda?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda; 
  private __lambdaOutput = new KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(this as any, "lambda", true);
  public get lambda() {
    return this.__lambdaOutput;
  }
  public putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda) {
    this._lambda = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
    json: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // csv - computed: false, optional: true, required: false
  private _csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined; 
  private __csvOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(this as any, "csv", true);
  public get csv() {
    return this.__csvOutput;
  }
  public putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined) {
    this._csv = value;
  }
  public resetCsv() {
    this._csv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv
  }

  // json - computed: false, optional: true, required: false
  private _json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined; 
  private __jsonOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(this as any, "json", true);
  public get json() {
    return this.__jsonOutput;
  }
  public putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_parameters: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined; 
  private __mappingParametersOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
  public get mappingParameters() {
    return this.__mappingParametersOutput;
  }
  public putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined) {
    this._mappingParameters = value;
  }
  public resetMappingParameters() {
    this._mappingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters
  }
}
export interface KinesisAnalyticsApplicationInputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
}

export function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct!.recordColumns),
    record_format: kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct!.recordFormat),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string | undefined; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string | undefined) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns?: KinesisAnalyticsApplicationInputsSchemaRecordColumns[]; 
  public get recordColumns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('record_columns') as any;
  }
  public set recordColumns(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns[]) {
    this._recordColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat?: KinesisAnalyticsApplicationInputsSchemaRecordFormat; 
  private __recordFormatOutput = new KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(this as any, "record_format", true);
  public get recordFormat() {
    return this.__recordFormatOutput;
  }
  public putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat) {
    this._recordFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat
  }
}
export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position KinesisAnalyticsApplication#starting_position}
  */
  readonly startingPosition?: string;
}

export function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
  }
}

export interface KinesisAnalyticsApplicationInputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name_prefix KinesisAnalyticsApplication#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose;
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream;
  /**
  * parallelism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
  */
  readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
  */
  readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationInputsSchema;
  /**
  * starting_position_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
  */
  readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
}

export function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    kinesis_firehose: kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
    kinesis_stream: kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct!.kinesisStream),
    parallelism: kinesisAnalyticsApplicationInputsParallelismToTerraform(struct!.parallelism),
    processing_configuration: kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct!.processingConfiguration),
    schema: kinesisAnalyticsApplicationInputsSchemaToTerraform(struct!.schema),
    starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct!.startingPositionConfiguration),
  }
}

export class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined; 
  private __kinesisFirehoseOutput = new KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(this as any, "kinesis_firehose", true);
  public get kinesisFirehose() {
    return this.__kinesisFirehoseOutput;
  }
  public putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined) {
    this._kinesisFirehose = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose
  }

  // kinesis_stream - computed: false, optional: true, required: false
  private _kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream | undefined; 
  private __kinesisStreamOutput = new KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(this as any, "kinesis_stream", true);
  public get kinesisStream() {
    return this.__kinesisStreamOutput;
  }
  public putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream | undefined) {
    this._kinesisStream = value;
  }
  public resetKinesisStream() {
    this._kinesisStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamInput() {
    return this._kinesisStream
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: KinesisAnalyticsApplicationInputsParallelism | undefined; 
  private __parallelismOutput = new KinesisAnalyticsApplicationInputsParallelismOutputReference(this as any, "parallelism", true);
  public get parallelism() {
    return this.__parallelismOutput;
  }
  public putParallelism(value: KinesisAnalyticsApplicationInputsParallelism | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined; 
  private __processingConfigurationOutput = new KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(this as any, "processing_configuration", true);
  public get processingConfiguration() {
    return this.__processingConfigurationOutput;
  }
  public putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined) {
    this._processingConfiguration = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: KinesisAnalyticsApplicationInputsSchema; 
  private __schemaOutput = new KinesisAnalyticsApplicationInputsSchemaOutputReference(this as any, "schema", true);
  public get schema() {
    return this.__schemaOutput;
  }
  public putSchema(value: KinesisAnalyticsApplicationInputsSchema) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }

  // starting_position_configuration - computed: false, optional: true, required: false
  private _startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | undefined; 
  public get startingPositionConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('starting_position_configuration') as any;
  }
  public set startingPositionConfiguration(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | undefined) {
    this._startingPositionConfiguration = value;
  }
  public resetStartingPositionConfiguration() {
    this._startingPositionConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionConfigurationInput() {
    return this._startingPositionConfiguration
  }
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationOutputsLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn
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
export interface KinesisAnalyticsApplicationOutputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}
  */
  readonly recordFormatType: string;
}

export function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType
  }
}
export interface KinesisAnalyticsApplicationOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose;
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream;
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda?: KinesisAnalyticsApplicationOutputsLambda;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationOutputsSchema;
}

export function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    kinesis_firehose: kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
    kinesis_stream: kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct!.kinesisStream),
    lambda: kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct!.lambda),
    schema: kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct!.schema),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#bucket_arn KinesisAnalyticsApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#file_key KinesisAnalyticsApplication#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
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

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey
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
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
    json: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // csv - computed: false, optional: true, required: false
  private _csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined; 
  private __csvOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(this as any, "csv", true);
  public get csv() {
    return this.__csvOutput;
  }
  public putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined) {
    this._csv = value;
  }
  public resetCsv() {
    this._csv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv
  }

  // json - computed: false, optional: true, required: false
  private _json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined; 
  private __jsonOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(this as any, "json", true);
  public get json() {
    return this.__jsonOutput;
  }
  public putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_parameters: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined; 
  private __mappingParametersOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(this as any, "mapping_parameters", true);
  public get mappingParameters() {
    return this.__mappingParametersOutput;
  }
  public putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined) {
    this._mappingParameters = value;
  }
  public resetMappingParameters() {
    this._mappingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[];
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct!.recordColumns),
    record_format: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct!.recordFormat),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string | undefined; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string | undefined) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]; 
  public get recordColumns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('record_columns') as any;
  }
  public set recordColumns(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[]) {
    this._recordColumns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat; 
  private __recordFormatOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(this as any, "record_format", true);
  public get recordFormat() {
    return this.__recordFormatOutput;
  }
  public putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat) {
    this._recordFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#table_name KinesisAnalyticsApplication#table_name}
  */
  readonly tableName: string;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#s3 KinesisAnalyticsApplication#s3}
  */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    s3: kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct!.s3),
    schema: kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct!.schema),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // s3 - computed: false, optional: false, required: true
  private _s3?: KinesisAnalyticsApplicationReferenceDataSourcesS3; 
  private __s3Output = new KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(this as any, "s3", true);
  public get s3() {
    return this.__s3Output;
  }
  public putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3) {
    this._s3 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: KinesisAnalyticsApplicationReferenceDataSourcesSchema; 
  private __schemaOutput = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(this as any, "schema", true);
  public get schema() {
    return this.__schemaOutput;
  }
  public putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application}
*/
export class KinesisAnalyticsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kinesis_analytics_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html aws_kinesis_analytics_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisAnalyticsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_analytics_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._code = config.code;
    this._description = config.description;
    this._name = config.name;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
    this._inputs = config.inputs;
    this._outputs = config.outputs;
    this._referenceDataSources = config.referenceDataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string | undefined; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string | undefined) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
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

  // start_application - computed: false, optional: true, required: false
  private _startApplication?: boolean | cdktf.IResolvable | undefined; 
  public get startApplication() {
    return this.getBooleanAttribute('start_application') as any;
  }
  public set startApplication(value: boolean | cdktf.IResolvable | undefined) {
    this._startApplication = value;
  }
  public resetStartApplication() {
    this._startApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startApplicationInput() {
    return this._startApplication
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined; 
  private __cloudwatchLoggingOptionsOutput = new KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(this as any, "cloudwatch_logging_options", true);
  public get cloudwatchLoggingOptions() {
    return this.__cloudwatchLoggingOptionsOutput;
  }
  public putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined) {
    this._cloudwatchLoggingOptions = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs?: KinesisAnalyticsApplicationInputs | undefined; 
  private __inputsOutput = new KinesisAnalyticsApplicationInputsOutputReference(this as any, "inputs", true);
  public get inputs() {
    return this.__inputsOutput;
  }
  public putInputs(value: KinesisAnalyticsApplicationInputs | undefined) {
    this._inputs = value;
  }
  public resetInputs() {
    this._inputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: KinesisAnalyticsApplicationOutputs[] | undefined; 
  public get outputs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('outputs') as any;
  }
  public set outputs(value: KinesisAnalyticsApplicationOutputs[] | undefined) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs
  }

  // reference_data_sources - computed: false, optional: true, required: false
  private _referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources | undefined; 
  private __referenceDataSourcesOutput = new KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(this as any, "reference_data_sources", true);
  public get referenceDataSources() {
    return this.__referenceDataSourcesOutput;
  }
  public putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources | undefined) {
    this._referenceDataSources = value;
  }
  public resetReferenceDataSources() {
    this._referenceDataSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataSourcesInput() {
    return this._referenceDataSources
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      start_application: cdktf.booleanToTerraform(this._startApplication),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      cloudwatch_logging_options: kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions),
      inputs: kinesisAnalyticsApplicationInputsToTerraform(this._inputs),
      outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
      reference_data_sources: kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(this._referenceDataSources),
    };
  }
}
