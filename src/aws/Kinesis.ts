// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Kinesis
*/
export namespace Kinesis {
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
    readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
    /**
    * inputs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#inputs KinesisAnalyticsApplication#inputs}
    */
    readonly inputs?: KinesisAnalyticsApplicationInputs[];
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
    readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
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

  function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStream): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface KinesisAnalyticsApplicationInputsParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#count KinesisAnalyticsApplication#count}
    */
    readonly count?: number;
  }

  function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelism): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      count: cdktf.numberToTerraform(struct!.count),
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

  function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda[];
  }

  function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      lambda: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform)(struct!.lambda),
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

  function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    /**
    * csv block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv[];
    /**
    * json block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson[];
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      csv: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform)(struct!.csv),
      json: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform)(struct!.json),
    }
  }

  export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters[];
  }

  function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
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
    readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat[];
  }

  function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform)(struct!.recordColumns),
      record_format: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform)(struct!.recordFormat),
    }
  }

  export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position KinesisAnalyticsApplication#starting_position}
    */
    readonly startingPosition?: string;
  }

  function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose[];
    /**
    * kinesis_stream block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream[];
    /**
    * parallelism block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#parallelism KinesisAnalyticsApplication#parallelism}
    */
    readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#processing_configuration KinesisAnalyticsApplication#processing_configuration}
    */
    readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration[];
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationInputsSchema[];
    /**
    * starting_position_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
    */
    readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[];
  }

  function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
      kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform)(struct!.kinesisFirehose),
      kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationInputsKinesisStreamToTerraform)(struct!.kinesisStream),
      parallelism: cdktf.listMapper(kinesisAnalyticsApplicationInputsParallelismToTerraform)(struct!.parallelism),
      processing_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform)(struct!.processingConfiguration),
      schema: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaToTerraform)(struct!.schema),
      starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform)(struct!.startingPositionConfiguration),
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

  function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehose): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStream): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambda): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
    }
  }

  export interface KinesisAnalyticsApplicationOutputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_format_type KinesisAnalyticsApplication#record_format_type}
    */
    readonly recordFormatType: string;
  }

  function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
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
    readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose[];
    /**
    * kinesis_stream block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream[];
    /**
    * lambda block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda?: KinesisAnalyticsApplicationOutputsLambda[];
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationOutputsSchema[];
  }

  function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      kinesis_firehose: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform)(struct!.kinesisFirehose),
      kinesis_stream: cdktf.listMapper(kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform)(struct!.kinesisStream),
      lambda: cdktf.listMapper(kinesisAnalyticsApplicationOutputsLambdaToTerraform)(struct!.lambda),
      schema: cdktf.listMapper(kinesisAnalyticsApplicationOutputsSchemaToTerraform)(struct!.schema),
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

  function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    /**
    * csv block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv[];
    /**
    * json block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson[];
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      csv: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform)(struct!.csv),
      json: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform)(struct!.json),
    }
  }

  export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters[];
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mapping_parameters: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
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
    readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat[];
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform)(struct!.recordColumns),
      record_format: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform)(struct!.recordFormat),
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
    readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3[];
    /**
    * schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application.html#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema[];
  }

  function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
      s3: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform)(struct!.s3),
      schema: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform)(struct!.schema),
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
    private _code?: string;
    public get code() {
      return this.getStringAttribute('code');
    }
    public set code(value: string ) {
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
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
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
    private _name: string;
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
    private _startApplication?: boolean | cdktf.IResolvable;
    public get startApplication() {
      return this.getBooleanAttribute('start_application');
    }
    public set startApplication(value: boolean | cdktf.IResolvable ) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
    private _cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions[];
    public get cloudwatchLoggingOptions() {
      return this.interpolationForAttribute('cloudwatch_logging_options') as any;
    }
    public set cloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions[] ) {
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
    private _inputs?: KinesisAnalyticsApplicationInputs[];
    public get inputs() {
      return this.interpolationForAttribute('inputs') as any;
    }
    public set inputs(value: KinesisAnalyticsApplicationInputs[] ) {
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
    private _outputs?: KinesisAnalyticsApplicationOutputs[];
    public get outputs() {
      return this.interpolationForAttribute('outputs') as any;
    }
    public set outputs(value: KinesisAnalyticsApplicationOutputs[] ) {
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
    private _referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources[];
    public get referenceDataSources() {
      return this.interpolationForAttribute('reference_data_sources') as any;
    }
    public set referenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources[] ) {
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
        cloudwatch_logging_options: cdktf.listMapper(kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
        inputs: cdktf.listMapper(kinesisAnalyticsApplicationInputsToTerraform)(this._inputs),
        outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform)(this._outputs),
        reference_data_sources: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesToTerraform)(this._referenceDataSources),
      };
    }
  }
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
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
    /**
    * extended_s3_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
    */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
    /**
    * http_endpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
    */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
    /**
    * kinesis_source_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
    */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
    /**
    * redshift_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
    */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
    /**
    * s3_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
    /**
    * server_side_encryption block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
    */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
    /**
    * splunk_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
    */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
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

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration[];
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig[];
  }

  function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
      processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
      vpc_config: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform)(struct!.vpcConfig),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
    }
  }

  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
    */
    readonly timestampFormats?: string[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct!.timestampFormats),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      case_insensitive: cdktf.booleanToTerraform(struct!.caseInsensitive),
      column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.columnToJsonKeyMappings),
      convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct!.convertDotsInJsonKeysToUnderscores),
    }
  }

  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
    /**
    * hive_json_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
    */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe[];
    /**
    * open_x_json_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
    */
    readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      hive_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform)(struct!.hiveJsonSerDe),
      open_x_json_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform)(struct!.openXJsonSerDe),
    }
  }

  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
    * deserializer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#deserializer KinesisFirehoseDeliveryStream#deserializer}
    */
    readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      deserializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform)(struct!.deserializer),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      block_size_bytes: cdktf.numberToTerraform(struct!.blockSizeBytes),
      compression: cdktf.stringToTerraform(struct!.compression),
      enable_dictionary_compression: cdktf.booleanToTerraform(struct!.enableDictionaryCompression),
      max_padding_bytes: cdktf.numberToTerraform(struct!.maxPaddingBytes),
      page_size_bytes: cdktf.numberToTerraform(struct!.pageSizeBytes),
      writer_version: cdktf.stringToTerraform(struct!.writerVersion),
    }
  }

  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
    /**
    * orc_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
    */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe[];
    /**
    * parquet_ser_de block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
    */
    readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      orc_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform)(struct!.orcSerDe),
      parquet_ser_de: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform)(struct!.parquetSerDe),
    }
  }

  export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
    * serializer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#serializer KinesisFirehoseDeliveryStream#serializer}
    */
    readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      serializer: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform)(struct!.serializer),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      region: cdktf.stringToTerraform(struct!.region),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      table_name: cdktf.stringToTerraform(struct!.tableName),
      version_id: cdktf.stringToTerraform(struct!.versionId),
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
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration[];
    /**
    * output_format_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
    */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration[];
    /**
    * schema_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
    */
    readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      input_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform)(struct!.inputFormatConfiguration),
      output_format_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform)(struct!.outputFormatConfiguration),
      schema_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform)(struct!.schemaConfiguration),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
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

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions[];
    /**
    * data_format_conversion_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
    */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration[];
    /**
    * s3_backup_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration[];
  }

  function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3Configuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
      data_format_conversion_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform)(struct!.dataFormatConversionConfiguration),
      processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
      s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform)(struct!.s3BackupConfiguration),
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
      common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct!.commonAttributes),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration[];
    /**
    * request_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
    */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration[];
  }

  function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      access_key: cdktf.stringToTerraform(struct!.accessKey),
      buffering_interval: cdktf.numberToTerraform(struct!.bufferingInterval),
      buffering_size: cdktf.numberToTerraform(struct!.bufferingSize),
      name: cdktf.stringToTerraform(struct!.name),
      retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
      url: cdktf.stringToTerraform(struct!.url),
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
      processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
      request_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform)(struct!.requestConfiguration),
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

  function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      kinesis_stream_arn: cdktf.stringToTerraform(struct!.kinesisStreamArn),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
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

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions[];
  }

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration[];
    /**
    * s3_backup_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration[];
  }

  function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
      processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
      s3_backup_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform)(struct!.s3BackupConfiguration),
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

  function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptions[];
  }

  function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamS3Configuration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      buffer_interval: cdktf.numberToTerraform(struct!.bufferInterval),
      buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
      compression_format: cdktf.stringToTerraform(struct!.compressionFormat),
      kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
      prefix: cdktf.stringToTerraform(struct!.prefix),
      role_arn: cdktf.stringToTerraform(struct!.roleArn),
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
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

  function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      key_arn: cdktf.stringToTerraform(struct!.keyArn),
      key_type: cdktf.stringToTerraform(struct!.keyType),
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      log_group_name: cdktf.stringToTerraform(struct!.logGroupName),
      log_stream_name: cdktf.stringToTerraform(struct!.logStreamName),
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct!.processors),
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
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions[];
    /**
    * processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration[];
  }

  function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      hec_acknowledgment_timeout: cdktf.numberToTerraform(struct!.hecAcknowledgmentTimeout),
      hec_endpoint: cdktf.stringToTerraform(struct!.hecEndpoint),
      hec_endpoint_type: cdktf.stringToTerraform(struct!.hecEndpointType),
      hec_token: cdktf.stringToTerraform(struct!.hecToken),
      retry_duration: cdktf.numberToTerraform(struct!.retryDuration),
      s3_backup_mode: cdktf.stringToTerraform(struct!.s3BackupMode),
      cloudwatch_logging_options: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform)(struct!.cloudwatchLoggingOptions),
      processing_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform)(struct!.processingConfiguration),
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
    private _destination: string;
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
    private _destinationId?: string;
    public get destinationId() {
      return this.getStringAttribute('destination_id');
    }
    public set destinationId(value: string) {
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
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
    private _versionId?: string;
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
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
    private _elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[];
    public get elasticsearchConfiguration() {
      return this.interpolationForAttribute('elasticsearch_configuration') as any;
    }
    public set elasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration[] ) {
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
    private _extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration[];
    public get extendedS3Configuration() {
      return this.interpolationForAttribute('extended_s3_configuration') as any;
    }
    public set extendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration[] ) {
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
    private _httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[];
    public get httpEndpointConfiguration() {
      return this.interpolationForAttribute('http_endpoint_configuration') as any;
    }
    public set httpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration[] ) {
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
    private _kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[];
    public get kinesisSourceConfiguration() {
      return this.interpolationForAttribute('kinesis_source_configuration') as any;
    }
    public set kinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration[] ) {
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
    private _redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration[];
    public get redshiftConfiguration() {
      return this.interpolationForAttribute('redshift_configuration') as any;
    }
    public set redshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration[] ) {
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
    private _s3Configuration?: KinesisFirehoseDeliveryStreamS3Configuration[];
    public get s3Configuration() {
      return this.interpolationForAttribute('s3_configuration') as any;
    }
    public set s3Configuration(value: KinesisFirehoseDeliveryStreamS3Configuration[] ) {
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
    private _serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption[];
    public get serverSideEncryption() {
      return this.interpolationForAttribute('server_side_encryption') as any;
    }
    public set serverSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption[] ) {
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
    private _splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration[];
    public get splunkConfiguration() {
      return this.interpolationForAttribute('splunk_configuration') as any;
    }
    public set splunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration[] ) {
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
        elasticsearch_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform)(this._elasticsearchConfiguration),
        extended_s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform)(this._extendedS3Configuration),
        http_endpoint_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform)(this._httpEndpointConfiguration),
        kinesis_source_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform)(this._kinesisSourceConfiguration),
        redshift_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform)(this._redshiftConfiguration),
        s3_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform)(this._s3Configuration),
        server_side_encryption: cdktf.listMapper(kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform)(this._serverSideEncryption),
        splunk_configuration: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform)(this._splunkConfiguration),
      };
    }
  }
  export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}
    */
    readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#kms_key_id KinesisStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#name KinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#retention_period KinesisStream#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
    */
    readonly shardCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_level_metrics KinesisStream#shard_level_metrics}
    */
    readonly shardLevelMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags KinesisStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags_all KinesisStream#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#timeouts KinesisStream#timeouts}
    */
    readonly timeouts?: KinesisStreamTimeouts;
  }
  export interface KinesisStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#create KinesisStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#delete KinesisStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#update KinesisStream#update}
    */
    readonly update?: string;
  }

  function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}
  */
  export class KinesisStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._encryptionType = config.encryptionType;
      this._enforceConsumerDeletion = config.enforceConsumerDeletion;
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._retentionPeriod = config.retentionPeriod;
      this._shardCount = config.shardCount;
      this._shardLevelMetrics = config.shardLevelMetrics;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // encryption_type - computed: false, optional: true, required: false
    private _encryptionType?: string;
    public get encryptionType() {
      return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string ) {
      this._encryptionType = value;
    }
    public resetEncryptionType() {
      this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
      return this._encryptionType
    }

    // enforce_consumer_deletion - computed: false, optional: true, required: false
    private _enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    public get enforceConsumerDeletion() {
      return this.getBooleanAttribute('enforce_consumer_deletion');
    }
    public set enforceConsumerDeletion(value: boolean | cdktf.IResolvable ) {
      this._enforceConsumerDeletion = value;
    }
    public resetEnforceConsumerDeletion() {
      this._enforceConsumerDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enforceConsumerDeletionInput() {
      return this._enforceConsumerDeletion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string;
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string ) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // retention_period - computed: false, optional: true, required: false
    private _retentionPeriod?: number;
    public get retentionPeriod() {
      return this.getNumberAttribute('retention_period');
    }
    public set retentionPeriod(value: number ) {
      this._retentionPeriod = value;
    }
    public resetRetentionPeriod() {
      this._retentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInput() {
      return this._retentionPeriod
    }

    // shard_count - computed: false, optional: false, required: true
    private _shardCount: number;
    public get shardCount() {
      return this.getNumberAttribute('shard_count');
    }
    public set shardCount(value: number) {
      this._shardCount = value;
    }
    // Temporarily expose input value. Use with caution.
    public get shardCountInput() {
      return this._shardCount
    }

    // shard_level_metrics - computed: false, optional: true, required: false
    private _shardLevelMetrics?: string[];
    public get shardLevelMetrics() {
      return this.getListAttribute('shard_level_metrics');
    }
    public set shardLevelMetrics(value: string[] ) {
      this._shardLevelMetrics = value;
    }
    public resetShardLevelMetrics() {
      this._shardLevelMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shardLevelMetricsInput() {
      return this._shardLevelMetrics
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: KinesisStreamTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: KinesisStreamTimeouts ) {
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
        encryption_type: cdktf.stringToTerraform(this._encryptionType),
        enforce_consumer_deletion: cdktf.booleanToTerraform(this._enforceConsumerDeletion),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        retention_period: cdktf.numberToTerraform(this._retentionPeriod),
        shard_count: cdktf.numberToTerraform(this._shardCount),
        shard_level_metrics: cdktf.listMapper(cdktf.stringToTerraform)(this._shardLevelMetrics),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: kinesisStreamTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface KinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#name KinesisStreamConsumer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html#stream_arn KinesisStreamConsumer#stream_arn}
    */
    readonly streamArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
  */
  export class KinesisStreamConsumer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream_consumer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConsumerConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisStreamConsumerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream_consumer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._streamArn = config.streamArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getStringAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn: string;
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        stream_arn: cdktf.stringToTerraform(this._streamArn),
      };
    }
  }
  export interface KinesisVideoStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}
    */
    readonly dataRetentionInHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#device_name KinesisVideoStream#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#kms_key_id KinesisVideoStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#media_type KinesisVideoStream#media_type}
    */
    readonly mediaType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#name KinesisVideoStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags KinesisVideoStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags_all KinesisVideoStream#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#timeouts KinesisVideoStream#timeouts}
    */
    readonly timeouts?: KinesisVideoStreamTimeouts;
  }
  export interface KinesisVideoStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#create KinesisVideoStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#delete KinesisVideoStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#update KinesisVideoStream#update}
    */
    readonly update?: string;
  }

  function kinesisVideoStreamTimeoutsToTerraform(struct?: KinesisVideoStreamTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream}
  */
  export class KinesisVideoStream extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_video_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisVideoStreamConfig
    */
    public constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_video_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._dataRetentionInHours = config.dataRetentionInHours;
      this._deviceName = config.deviceName;
      this._kmsKeyId = config.kmsKeyId;
      this._mediaType = config.mediaType;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getStringAttribute('creation_time');
    }

    // data_retention_in_hours - computed: false, optional: true, required: false
    private _dataRetentionInHours?: number;
    public get dataRetentionInHours() {
      return this.getNumberAttribute('data_retention_in_hours');
    }
    public set dataRetentionInHours(value: number ) {
      this._dataRetentionInHours = value;
    }
    public resetDataRetentionInHours() {
      this._dataRetentionInHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRetentionInHoursInput() {
      return this._dataRetentionInHours
    }

    // device_name - computed: false, optional: true, required: false
    private _deviceName?: string;
    public get deviceName() {
      return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string ) {
      this._deviceName = value;
    }
    public resetDeviceName() {
      this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
      return this._deviceName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string;
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // media_type - computed: false, optional: true, required: false
    private _mediaType?: string;
    public get mediaType() {
      return this.getStringAttribute('media_type');
    }
    public set mediaType(value: string ) {
      this._mediaType = value;
    }
    public resetMediaType() {
      this._mediaType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mediaTypeInput() {
      return this._mediaType
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
      return this.getStringAttribute('version');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: KinesisVideoStreamTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: KinesisVideoStreamTimeouts ) {
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
        data_retention_in_hours: cdktf.numberToTerraform(this._dataRetentionInHours),
        device_name: cdktf.stringToTerraform(this._deviceName),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        media_type: cdktf.stringToTerraform(this._mediaType),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: kinesisVideoStreamTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Kinesisanalyticsv2ApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#description Kinesisanalyticsv2Application#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#force_stop Kinesisanalyticsv2Application#force_stop}
    */
    readonly forceStop?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#runtime_environment Kinesisanalyticsv2Application#runtime_environment}
    */
    readonly runtimeEnvironment: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#service_execution_role Kinesisanalyticsv2Application#service_execution_role}
    */
    readonly serviceExecutionRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#start_application Kinesisanalyticsv2Application#start_application}
    */
    readonly startApplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags Kinesisanalyticsv2Application#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#tags_all Kinesisanalyticsv2Application#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * application_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_configuration Kinesisanalyticsv2Application#application_configuration}
    */
    readonly applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
    /**
    * cloudwatch_logging_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#cloudwatch_logging_options Kinesisanalyticsv2Application#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
  }
  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
    */
    readonly fileKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#object_version Kinesisanalyticsv2Application#object_version}
    */
    readonly objectVersion?: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
      object_version: cdktf.stringToTerraform(struct!.objectVersion),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#text_content Kinesisanalyticsv2Application#text_content}
    */
    readonly textContent?: string;
    /**
    * s3_content_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_content_location Kinesisanalyticsv2Application#s3_content_location}
    */
    readonly s3ContentLocation?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      text_content: cdktf.stringToTerraform(struct!.textContent),
      s3_content_location: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationToTerraform)(struct!.s3ContentLocation),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content_type Kinesisanalyticsv2Application#code_content_type}
    */
    readonly codeContentType: string;
    /**
    * code_content block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#code_content Kinesisanalyticsv2Application#code_content}
    */
    readonly codeContent?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      code_content_type: cdktf.stringToTerraform(struct!.codeContentType),
      code_content: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentToTerraform)(struct!.codeContent),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}
    */
    readonly snapshotsEnabled: boolean | cdktf.IResolvable;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      snapshots_enabled: cdktf.booleanToTerraform(struct!.snapshotsEnabled),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group_id Kinesisanalyticsv2Application#property_group_id}
    */
    readonly propertyGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_map Kinesisanalyticsv2Application#property_map}
    */
    readonly propertyMap: { [key: string]: string } | cdktf.IResolvable;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      property_group_id: cdktf.stringToTerraform(struct!.propertyGroupId),
      property_map: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.propertyMap),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties {
    /**
    * property_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#property_group Kinesisanalyticsv2Application#property_group}
    */
    readonly propertyGroup: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroup[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      property_group: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupToTerraform)(struct!.propertyGroup),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}
    */
    readonly checkpointInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}
    */
    readonly checkpointingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}
    */
    readonly minPauseBetweenCheckpoints?: number;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      checkpoint_interval: cdktf.numberToTerraform(struct!.checkpointInterval),
      checkpointing_enabled: cdktf.booleanToTerraform(struct!.checkpointingEnabled),
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      min_pause_between_checkpoints: cdktf.numberToTerraform(struct!.minPauseBetweenCheckpoints),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_level Kinesisanalyticsv2Application#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#metrics_level Kinesisanalyticsv2Application#metrics_level}
    */
    readonly metricsLevel?: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
      metrics_level: cdktf.stringToTerraform(struct!.metricsLevel),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}
    */
    readonly autoScalingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#configuration_type Kinesisanalyticsv2Application#configuration_type}
    */
    readonly configurationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism Kinesisanalyticsv2Application#parallelism}
    */
    readonly parallelism?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}
    */
    readonly parallelismPerKpu?: number;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      auto_scaling_enabled: cdktf.booleanToTerraform(struct!.autoScalingEnabled),
      configuration_type: cdktf.stringToTerraform(struct!.configurationType),
      parallelism: cdktf.numberToTerraform(struct!.parallelism),
      parallelism_per_kpu: cdktf.numberToTerraform(struct!.parallelismPerKpu),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration {
    /**
    * checkpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}
    */
    readonly checkpointConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration[];
    /**
    * monitoring_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}
    */
    readonly monitoringConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration[];
    /**
    * parallelism_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}
    */
    readonly parallelismConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      checkpoint_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationToTerraform)(struct!.checkpointConfiguration),
      monitoring_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationToTerraform)(struct!.monitoringConfiguration),
      parallelism_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationToTerraform)(struct!.parallelismConfiguration),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_type Kinesisanalyticsv2Application#application_restore_type}
    */
    readonly applicationRestoreType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#snapshot_name Kinesisanalyticsv2Application#snapshot_name}
    */
    readonly snapshotName?: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      application_restore_type: cdktf.stringToTerraform(struct!.applicationRestoreType),
      snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}
    */
    readonly allowNonRestoredState?: boolean | cdktf.IResolvable;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allow_non_restored_state: cdktf.booleanToTerraform(struct!.allowNonRestoredState),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration {
    /**
    * application_restore_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}
    */
    readonly applicationRestoreConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfiguration[];
    /**
    * flink_run_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}
    */
    readonly flinkRunConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfiguration[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      application_restore_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationApplicationRestoreConfigurationToTerraform)(struct!.applicationRestoreConfiguration),
      flink_run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationFlinkRunConfigurationToTerraform)(struct!.flinkRunConfiguration),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#count Kinesisanalyticsv2Application#count}
    */
    readonly count?: number;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      count: cdktf.numberToTerraform(struct!.count),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration {
    /**
    * input_lambda_processor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_lambda_processor Kinesisanalyticsv2Application#input_lambda_processor}
    */
    readonly inputLambdaProcessor: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessor[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input_lambda_processor: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationInputLambdaProcessorToTerraform)(struct!.inputLambdaProcessor),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
    */
    readonly sqlType: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mapping: cdktf.stringToTerraform(struct!.mapping),
      name: cdktf.stringToTerraform(struct!.name),
      sql_type: cdktf.stringToTerraform(struct!.sqlType),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters[];
    /**
    * json_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParameters[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct!.csvMappingParameters),
      json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct!.jsonMappingParameters),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
    */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParameters[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
      mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_column block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
    */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn[];
    /**
    * record_format block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
    */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumnToTerraform)(struct!.recordColumn),
      record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatToTerraform)(struct!.recordFormat),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position Kinesisanalyticsv2Application#input_starting_position}
    */
    readonly inputStartingPosition?: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input_starting_position: cdktf.stringToTerraform(struct!.inputStartingPosition),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name_prefix Kinesisanalyticsv2Application#name_prefix}
    */
    readonly namePrefix: string;
    /**
    * input_parallelism block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_parallelism Kinesisanalyticsv2Application#input_parallelism}
    */
    readonly inputParallelism?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism[];
    /**
    * input_processing_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_processing_configuration Kinesisanalyticsv2Application#input_processing_configuration}
    */
    readonly inputProcessingConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfiguration[];
    /**
    * input_schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_schema Kinesisanalyticsv2Application#input_schema}
    */
    readonly inputSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema[];
    /**
    * input_starting_position_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input_starting_position_configuration Kinesisanalyticsv2Application#input_starting_position_configuration}
    */
    readonly inputStartingPositionConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfiguration[];
    /**
    * kinesis_firehose_input block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_input Kinesisanalyticsv2Application#kinesis_firehose_input}
    */
    readonly kinesisFirehoseInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInput[];
    /**
    * kinesis_streams_input block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_input Kinesisanalyticsv2Application#kinesis_streams_input}
    */
    readonly kinesisStreamsInput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInput[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
      input_parallelism: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelismToTerraform)(struct!.inputParallelism),
      input_processing_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputProcessingConfigurationToTerraform)(struct!.inputProcessingConfiguration),
      input_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaToTerraform)(struct!.inputSchema),
      input_starting_position_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputStartingPositionConfigurationToTerraform)(struct!.inputStartingPositionConfiguration),
      kinesis_firehose_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisFirehoseInputToTerraform)(struct!.kinesisFirehoseInput),
      kinesis_streams_input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputKinesisStreamsInputToTerraform)(struct!.kinesisStreamsInput),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#resource_arn Kinesisanalyticsv2Application#resource_arn}
    */
    readonly resourceArn: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * destination_schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#destination_schema Kinesisanalyticsv2Application#destination_schema}
    */
    readonly destinationSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchema[];
    /**
    * kinesis_firehose_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_firehose_output Kinesisanalyticsv2Application#kinesis_firehose_output}
    */
    readonly kinesisFirehoseOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutput[];
    /**
    * kinesis_streams_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#kinesis_streams_output Kinesisanalyticsv2Application#kinesis_streams_output}
    */
    readonly kinesisStreamsOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutput[];
    /**
    * lambda_output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#lambda_output Kinesisanalyticsv2Application#lambda_output}
    */
    readonly lambdaOutput?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutput[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      destination_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputDestinationSchemaToTerraform)(struct!.destinationSchema),
      kinesis_firehose_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisFirehoseOutputToTerraform)(struct!.kinesisFirehoseOutput),
      kinesis_streams_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputKinesisStreamsOutputToTerraform)(struct!.kinesisStreamsOutput),
      lambda_output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputLambdaOutputToTerraform)(struct!.lambdaOutput),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping Kinesisanalyticsv2Application#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#name Kinesisanalyticsv2Application#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_type Kinesisanalyticsv2Application#sql_type}
    */
    readonly sqlType: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      mapping: cdktf.stringToTerraform(struct!.mapping),
      name: cdktf.stringToTerraform(struct!.name),
      sql_type: cdktf.stringToTerraform(struct!.sqlType),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column_delimiter Kinesisanalyticsv2Application#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_delimiter Kinesisanalyticsv2Application#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
      record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_row_path Kinesisanalyticsv2Application#record_row_path}
    */
    readonly recordRowPath: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters {
    /**
    * csv_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#csv_mapping_parameters Kinesisanalyticsv2Application#csv_mapping_parameters}
    */
    readonly csvMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParameters[];
    /**
    * json_mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#json_mapping_parameters Kinesisanalyticsv2Application#json_mapping_parameters}
    */
    readonly jsonMappingParameters?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParameters[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      csv_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersCsvMappingParametersToTerraform)(struct!.csvMappingParameters),
      json_mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersJsonMappingParametersToTerraform)(struct!.jsonMappingParameters),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format_type Kinesisanalyticsv2Application#record_format_type}
    */
    readonly recordFormatType: string;
    /**
    * mapping_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#mapping_parameters Kinesisanalyticsv2Application#mapping_parameters}
    */
    readonly mappingParameters: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParameters[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
      mapping_parameters: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatMappingParametersToTerraform)(struct!.mappingParameters),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_encoding Kinesisanalyticsv2Application#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_column block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_column Kinesisanalyticsv2Application#record_column}
    */
    readonly recordColumn: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumn[];
    /**
    * record_format block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#record_format Kinesisanalyticsv2Application#record_format}
    */
    readonly recordFormat: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormat[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
      record_column: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordColumnToTerraform)(struct!.recordColumn),
      record_format: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaRecordFormatToTerraform)(struct!.recordFormat),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#bucket_arn Kinesisanalyticsv2Application#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#file_key Kinesisanalyticsv2Application#file_key}
    */
    readonly fileKey: string;
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
      file_key: cdktf.stringToTerraform(struct!.fileKey),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#table_name Kinesisanalyticsv2Application#table_name}
    */
    readonly tableName: string;
    /**
    * reference_schema block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_schema Kinesisanalyticsv2Application#reference_schema}
    */
    readonly referenceSchema: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema[];
    /**
    * s3_reference_data_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#s3_reference_data_source Kinesisanalyticsv2Application#s3_reference_data_source}
    */
    readonly s3ReferenceDataSource: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      table_name: cdktf.stringToTerraform(struct!.tableName),
      reference_schema: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchemaToTerraform)(struct!.referenceSchema),
      s3_reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSourceToTerraform)(struct!.s3ReferenceDataSource),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration {
    /**
    * input block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#input Kinesisanalyticsv2Application#input}
    */
    readonly input?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInput[];
    /**
    * output block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#output Kinesisanalyticsv2Application#output}
    */
    readonly output?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutput[];
    /**
    * reference_data_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#reference_data_source Kinesisanalyticsv2Application#reference_data_source}
    */
    readonly referenceDataSource?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      input: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationInputToTerraform)(struct!.input),
      output: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationOutputToTerraform)(struct!.output),
      reference_data_source: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceToTerraform)(struct!.referenceDataSource),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#security_group_ids Kinesisanalyticsv2Application#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#subnet_ids Kinesisanalyticsv2Application#subnet_ids}
    */
    readonly subnetIds: string[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
    }
  }

  export interface Kinesisanalyticsv2ApplicationApplicationConfiguration {
    /**
    * application_code_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}
    */
    readonly applicationCodeConfiguration: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration[];
    /**
    * application_snapshot_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}
    */
    readonly applicationSnapshotConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration[];
    /**
    * environment_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#environment_properties Kinesisanalyticsv2Application#environment_properties}
    */
    readonly environmentProperties?: Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties[];
    /**
    * flink_application_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}
    */
    readonly flinkApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration[];
    /**
    * run_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#run_configuration Kinesisanalyticsv2Application#run_configuration}
    */
    readonly runConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationRunConfiguration[];
    /**
    * sql_application_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#sql_application_configuration Kinesisanalyticsv2Application#sql_application_configuration}
    */
    readonly sqlApplicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfiguration[];
    /**
    * vpc_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#vpc_configuration Kinesisanalyticsv2Application#vpc_configuration}
    */
    readonly vpcConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfiguration[];
  }

  function kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform(struct?: Kinesisanalyticsv2ApplicationApplicationConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      application_code_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationToTerraform)(struct!.applicationCodeConfiguration),
      application_snapshot_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationToTerraform)(struct!.applicationSnapshotConfiguration),
      environment_properties: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesToTerraform)(struct!.environmentProperties),
      flink_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationToTerraform)(struct!.flinkApplicationConfiguration),
      run_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationRunConfigurationToTerraform)(struct!.runConfiguration),
      sql_application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationSqlApplicationConfigurationToTerraform)(struct!.sqlApplicationConfiguration),
      vpc_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationToTerraform)(struct!.vpcConfiguration),
    }
  }

  export interface Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html#log_stream_arn Kinesisanalyticsv2Application#log_stream_arn}
    */
    readonly logStreamArn: string;
  }

  function kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform(struct?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application}
  */
  export class Kinesisanalyticsv2Application extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesisanalyticsv2_application";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application.html aws_kinesisanalyticsv2_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationConfig
    */
    public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesisanalyticsv2_application',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._forceStop = config.forceStop;
      this._name = config.name;
      this._runtimeEnvironment = config.runtimeEnvironment;
      this._serviceExecutionRole = config.serviceExecutionRole;
      this._startApplication = config.startApplication;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._applicationConfiguration = config.applicationConfiguration;
      this._cloudwatchLoggingOptions = config.cloudwatchLoggingOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // create_timestamp - computed: true, optional: false, required: false
    public get createTimestamp() {
      return this.getStringAttribute('create_timestamp');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // force_stop - computed: false, optional: true, required: false
    private _forceStop?: boolean | cdktf.IResolvable;
    public get forceStop() {
      return this.getBooleanAttribute('force_stop');
    }
    public set forceStop(value: boolean | cdktf.IResolvable ) {
      this._forceStop = value;
    }
    public resetForceStop() {
      this._forceStop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceStopInput() {
      return this._forceStop
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
    private _name: string;
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

    // runtime_environment - computed: false, optional: false, required: true
    private _runtimeEnvironment: string;
    public get runtimeEnvironment() {
      return this.getStringAttribute('runtime_environment');
    }
    public set runtimeEnvironment(value: string) {
      this._runtimeEnvironment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentInput() {
      return this._runtimeEnvironment
    }

    // service_execution_role - computed: false, optional: false, required: true
    private _serviceExecutionRole: string;
    public get serviceExecutionRole() {
      return this.getStringAttribute('service_execution_role');
    }
    public set serviceExecutionRole(value: string) {
      this._serviceExecutionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceExecutionRoleInput() {
      return this._serviceExecutionRole
    }

    // start_application - computed: false, optional: true, required: false
    private _startApplication?: boolean | cdktf.IResolvable;
    public get startApplication() {
      return this.getBooleanAttribute('start_application');
    }
    public set startApplication(value: boolean | cdktf.IResolvable ) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getNumberAttribute('version_id');
    }

    // application_configuration - computed: false, optional: true, required: false
    private _applicationConfiguration?: Kinesisanalyticsv2ApplicationApplicationConfiguration[];
    public get applicationConfiguration() {
      return this.interpolationForAttribute('application_configuration') as any;
    }
    public set applicationConfiguration(value: Kinesisanalyticsv2ApplicationApplicationConfiguration[] ) {
      this._applicationConfiguration = value;
    }
    public resetApplicationConfiguration() {
      this._applicationConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationConfigurationInput() {
      return this._applicationConfiguration
    }

    // cloudwatch_logging_options - computed: false, optional: true, required: false
    private _cloudwatchLoggingOptions?: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[];
    public get cloudwatchLoggingOptions() {
      return this.interpolationForAttribute('cloudwatch_logging_options') as any;
    }
    public set cloudwatchLoggingOptions(value: Kinesisanalyticsv2ApplicationCloudwatchLoggingOptions[] ) {
      this._cloudwatchLoggingOptions = value;
    }
    public resetCloudwatchLoggingOptions() {
      this._cloudwatchLoggingOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLoggingOptionsInput() {
      return this._cloudwatchLoggingOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        force_stop: cdktf.booleanToTerraform(this._forceStop),
        name: cdktf.stringToTerraform(this._name),
        runtime_environment: cdktf.stringToTerraform(this._runtimeEnvironment),
        service_execution_role: cdktf.stringToTerraform(this._serviceExecutionRole),
        start_application: cdktf.booleanToTerraform(this._startApplication),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        application_configuration: cdktf.listMapper(kinesisanalyticsv2ApplicationApplicationConfigurationToTerraform)(this._applicationConfiguration),
        cloudwatch_logging_options: cdktf.listMapper(kinesisanalyticsv2ApplicationCloudwatchLoggingOptionsToTerraform)(this._cloudwatchLoggingOptions),
      };
    }
  }
  export interface Kinesisanalyticsv2ApplicationSnapshotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#application_name Kinesisanalyticsv2ApplicationSnapshot#application_name}
    */
    readonly applicationName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html#snapshot_name Kinesisanalyticsv2ApplicationSnapshot#snapshot_name}
    */
    readonly snapshotName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot}
  */
  export class Kinesisanalyticsv2ApplicationSnapshot extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesisanalyticsv2_application_snapshot";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesisanalyticsv2_application_snapshot.html aws_kinesisanalyticsv2_application_snapshot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Kinesisanalyticsv2ApplicationSnapshotConfig
    */
    public constructor(scope: Construct, id: string, config: Kinesisanalyticsv2ApplicationSnapshotConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesisanalyticsv2_application_snapshot',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._applicationName = config.applicationName;
      this._snapshotName = config.snapshotName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_name - computed: false, optional: false, required: true
    private _applicationName: string;
    public get applicationName() {
      return this.getStringAttribute('application_name');
    }
    public set applicationName(value: string) {
      this._applicationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationNameInput() {
      return this._applicationName
    }

    // application_version_id - computed: true, optional: false, required: false
    public get applicationVersionId() {
      return this.getNumberAttribute('application_version_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // snapshot_creation_timestamp - computed: true, optional: false, required: false
    public get snapshotCreationTimestamp() {
      return this.getStringAttribute('snapshot_creation_timestamp');
    }

    // snapshot_name - computed: false, optional: false, required: true
    private _snapshotName: string;
    public get snapshotName() {
      return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string) {
      this._snapshotName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
      return this._snapshotName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        application_name: cdktf.stringToTerraform(this._applicationName),
        snapshot_name: cdktf.stringToTerraform(this._snapshotName),
      };
    }
  }
  export interface DataAwsKinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html#name DataAwsKinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
  */
  export class DataAwsKinesisFirehoseDeliveryStream extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_firehose_delivery_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisFirehoseDeliveryStreamConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisFirehoseDeliveryStreamConfig) {
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
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsKinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#name DataAwsKinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html#tags DataAwsKinesisStream#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream}
  */
  export class DataAwsKinesisStream extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream.html aws_kinesis_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // closed_shards - computed: true, optional: false, required: false
    public get closedShards() {
      return this.getListAttribute('closed_shards');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getNumberAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // open_shards - computed: true, optional: false, required: false
    public get openShards() {
      return this.getListAttribute('open_shards');
    }

    // retention_period - computed: true, optional: false, required: false
    public get retentionPeriod() {
      return this.getNumberAttribute('retention_period');
    }

    // shard_level_metrics - computed: true, optional: false, required: false
    public get shardLevelMetrics() {
      return this.getListAttribute('shard_level_metrics');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable
    public get tags(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsKinesisStreamConsumerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#name DataAwsKinesisStreamConsumer#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html#stream_arn DataAwsKinesisStreamConsumer#stream_arn}
    */
    readonly streamArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer}
  */
  export class DataAwsKinesisStreamConsumer extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_kinesis_stream_consumer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_stream_consumer.html aws_kinesis_stream_consumer} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisStreamConsumerConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsKinesisStreamConsumerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_kinesis_stream_consumer',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._streamArn = config.streamArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_timestamp - computed: true, optional: false, required: false
    public get creationTimestamp() {
      return this.getStringAttribute('creation_timestamp');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // stream_arn - computed: false, optional: false, required: true
    private _streamArn: string;
    public get streamArn() {
      return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
      this._streamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
      return this._streamArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        stream_arn: cdktf.stringToTerraform(this._streamArn),
      };
    }
  }
}
