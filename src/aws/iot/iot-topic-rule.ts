// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS IoT
*/
export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#description IotTopicRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#enabled IotTopicRule#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#name IotTopicRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql IotTopicRule#sql}
  */
  readonly sql: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sql_version IotTopicRule#sql_version}
  */
  readonly sqlVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags IotTopicRule#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#tags_all IotTopicRule#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * cloudwatch_alarm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[];
  /**
  * cloudwatch_metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[];
  /**
  * dynamodb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
  */
  readonly dynamodb?: IotTopicRuleDynamodb[];
  /**
  * dynamodbv2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: IotTopicRuleDynamodbv2[];
  /**
  * elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleElasticsearch[];
  /**
  * error_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#error_action IotTopicRule#error_action}
  */
  readonly errorAction?: IotTopicRuleErrorAction;
  /**
  * firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleFirehose[];
  /**
  * iot_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleIotAnalytics[];
  /**
  * iot_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleIotEvents[];
  /**
  * kinesis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleKinesis[];
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleLambda[];
  /**
  * republish block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleRepublish[];
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleS3[];
  /**
  * sns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleSns[];
  /**
  * sqs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleSqs[];
  /**
  * step_functions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleStepFunctions[];
}
export interface IotTopicRuleCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export interface IotTopicRuleCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleDynamodb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export interface IotTopicRuleDynamodbv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class IotTopicRuleDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
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
}
export interface IotTopicRuleDynamodbv2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleDynamodbv2PutItem;
}

export function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    put_item: iotTopicRuleDynamodbv2PutItemToTerraform(struct!.putItem),
  }
}

export interface IotTopicRuleElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface IotTopicRuleErrorActionCloudwatchAlarm {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#alarm_name IotTopicRule#alarm_name}
  */
  readonly alarmName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_reason IotTopicRule#state_reason}
  */
  readonly stateReason: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_value IotTopicRule#state_value}
  */
  readonly stateValue: string;
}

export function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_reason: cdktf.stringToTerraform(struct!.stateReason),
    state_value: cdktf.stringToTerraform(struct!.stateValue),
  }
}

export class IotTopicRuleErrorActionCloudwatchAlarmOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName
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

  // state_reason - computed: false, optional: false, required: true
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason
  }

  // state_value - computed: false, optional: false, required: true
  private _stateValue?: string; 
  public get stateValue() {
    return this.getStringAttribute('state_value');
  }
  public set stateValue(value: string) {
    this._stateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateValueInput() {
    return this._stateValue
  }
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_name IotTopicRule#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_namespace IotTopicRule#metric_namespace}
  */
  readonly metricNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_timestamp IotTopicRule#metric_timestamp}
  */
  readonly metricTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_unit IotTopicRule#metric_unit}
  */
  readonly metricUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#metric_value IotTopicRule#metric_value}
  */
  readonly metricValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    metric_timestamp: cdktf.stringToTerraform(struct!.metricTimestamp),
    metric_unit: cdktf.stringToTerraform(struct!.metricUnit),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class IotTopicRuleErrorActionCloudwatchMetricOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // metric_namespace - computed: false, optional: false, required: true
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace
  }

  // metric_timestamp - computed: false, optional: true, required: false
  private _metricTimestamp?: string | undefined; 
  public get metricTimestamp() {
    return this.getStringAttribute('metric_timestamp');
  }
  public set metricTimestamp(value: string | undefined) {
    this._metricTimestamp = value;
  }
  public resetMetricTimestamp() {
    this._metricTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTimestampInput() {
    return this._metricTimestamp
  }

  // metric_unit - computed: false, optional: false, required: true
  private _metricUnit?: string; 
  public get metricUnit() {
    return this.getStringAttribute('metric_unit');
  }
  public set metricUnit(value: string) {
    this._metricUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUnitInput() {
    return this._metricUnit
  }

  // metric_value - computed: false, optional: false, required: true
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue
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
export interface IotTopicRuleErrorActionDynamodb {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_field IotTopicRule#hash_key_field}
  */
  readonly hashKeyField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_type IotTopicRule#hash_key_type}
  */
  readonly hashKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#hash_key_value IotTopicRule#hash_key_value}
  */
  readonly hashKeyValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#operation IotTopicRule#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#payload_field IotTopicRule#payload_field}
  */
  readonly payloadField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_field IotTopicRule#range_key_field}
  */
  readonly rangeKeyField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_type IotTopicRule#range_key_type}
  */
  readonly rangeKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#range_key_value IotTopicRule#range_key_value}
  */
  readonly rangeKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_key_field: cdktf.stringToTerraform(struct!.hashKeyField),
    hash_key_type: cdktf.stringToTerraform(struct!.hashKeyType),
    hash_key_value: cdktf.stringToTerraform(struct!.hashKeyValue),
    operation: cdktf.stringToTerraform(struct!.operation),
    payload_field: cdktf.stringToTerraform(struct!.payloadField),
    range_key_field: cdktf.stringToTerraform(struct!.rangeKeyField),
    range_key_type: cdktf.stringToTerraform(struct!.rangeKeyType),
    range_key_value: cdktf.stringToTerraform(struct!.rangeKeyValue),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class IotTopicRuleErrorActionDynamodbOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hash_key_field - computed: false, optional: false, required: true
  private _hashKeyField?: string; 
  public get hashKeyField() {
    return this.getStringAttribute('hash_key_field');
  }
  public set hashKeyField(value: string) {
    this._hashKeyField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyFieldInput() {
    return this._hashKeyField
  }

  // hash_key_type - computed: false, optional: true, required: false
  private _hashKeyType?: string | undefined; 
  public get hashKeyType() {
    return this.getStringAttribute('hash_key_type');
  }
  public set hashKeyType(value: string | undefined) {
    this._hashKeyType = value;
  }
  public resetHashKeyType() {
    this._hashKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyTypeInput() {
    return this._hashKeyType
  }

  // hash_key_value - computed: false, optional: false, required: true
  private _hashKeyValue?: string; 
  public get hashKeyValue() {
    return this.getStringAttribute('hash_key_value');
  }
  public set hashKeyValue(value: string) {
    this._hashKeyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyValueInput() {
    return this._hashKeyValue
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string | undefined; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string | undefined) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation
  }

  // payload_field - computed: false, optional: true, required: false
  private _payloadField?: string | undefined; 
  public get payloadField() {
    return this.getStringAttribute('payload_field');
  }
  public set payloadField(value: string | undefined) {
    this._payloadField = value;
  }
  public resetPayloadField() {
    this._payloadField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFieldInput() {
    return this._payloadField
  }

  // range_key_field - computed: false, optional: true, required: false
  private _rangeKeyField?: string | undefined; 
  public get rangeKeyField() {
    return this.getStringAttribute('range_key_field');
  }
  public set rangeKeyField(value: string | undefined) {
    this._rangeKeyField = value;
  }
  public resetRangeKeyField() {
    this._rangeKeyField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyFieldInput() {
    return this._rangeKeyField
  }

  // range_key_type - computed: false, optional: true, required: false
  private _rangeKeyType?: string | undefined; 
  public get rangeKeyType() {
    return this.getStringAttribute('range_key_type');
  }
  public set rangeKeyType(value: string | undefined) {
    this._rangeKeyType = value;
  }
  public resetRangeKeyType() {
    this._rangeKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyTypeInput() {
    return this._rangeKeyType
  }

  // range_key_value - computed: false, optional: true, required: false
  private _rangeKeyValue?: string | undefined; 
  public get rangeKeyValue() {
    return this.getStringAttribute('range_key_value');
  }
  public set rangeKeyValue(value: string | undefined) {
    this._rangeKeyValue = value;
  }
  public resetRangeKeyValue() {
    this._rangeKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeKeyValueInput() {
    return this._rangeKeyValue
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
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#table_name IotTopicRule#table_name}
  */
  readonly tableName: string;
}

export function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class IotTopicRuleErrorActionDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
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
}
export interface IotTopicRuleErrorActionDynamodbv2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * put_item block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#put_item IotTopicRule#put_item}
  */
  readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem;
}

export function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    put_item: iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct!.putItem),
  }
}

export class IotTopicRuleErrorActionDynamodbv2OutputReference extends cdktf.ComplexObject {
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

  // put_item - computed: false, optional: true, required: false
  private _putItem?: IotTopicRuleErrorActionDynamodbv2PutItem | undefined; 
  private __putItemOutput = new IotTopicRuleErrorActionDynamodbv2PutItemOutputReference(this as any, "put_item", true);
  public get putItem() {
    return this.__putItemOutput;
  }
  public putPutItem(value: IotTopicRuleErrorActionDynamodbv2PutItem | undefined) {
    this._putItem = value;
  }
  public resetPutItem() {
    this._putItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putItemInput() {
    return this._putItem
  }
}
export interface IotTopicRuleErrorActionElasticsearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#endpoint IotTopicRule#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#id IotTopicRule#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#index IotTopicRule#index}
  */
  readonly index: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#type IotTopicRule#type}
  */
  readonly type: string;
}

export function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    id: cdktf.stringToTerraform(struct!.id),
    index: cdktf.stringToTerraform(struct!.index),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class IotTopicRuleErrorActionElasticsearchOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface IotTopicRuleErrorActionFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export class IotTopicRuleErrorActionFirehoseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delivery_stream_name - computed: false, optional: false, required: true
  private _deliveryStreamName?: string; 
  public get deliveryStreamName() {
    return this.getStringAttribute('delivery_stream_name');
  }
  public set deliveryStreamName(value: string) {
    this._deliveryStreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamNameInput() {
    return this._deliveryStreamName
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

  // separator - computed: false, optional: true, required: false
  private _separator?: string | undefined; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string | undefined) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator
  }
}
export interface IotTopicRuleErrorActionIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class IotTopicRuleErrorActionIotAnalyticsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // channel_name - computed: false, optional: false, required: true
  private _channelName?: string; 
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }
  public set channelName(value: string) {
    this._channelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNameInput() {
    return this._channelName
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
export interface IotTopicRuleErrorActionIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class IotTopicRuleErrorActionIotEventsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // input_name - computed: false, optional: false, required: true
  private _inputName?: string; 
  public get inputName() {
    return this.getStringAttribute('input_name');
  }
  public set inputName(value: string) {
    this._inputName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputNameInput() {
    return this._inputName
  }

  // message_id - computed: false, optional: true, required: false
  private _messageId?: string | undefined; 
  public get messageId() {
    return this.getStringAttribute('message_id');
  }
  public set messageId(value: string | undefined) {
    this._messageId = value;
  }
  public resetMessageId() {
    this._messageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageIdInput() {
    return this._messageId
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
export interface IotTopicRuleErrorActionKinesis {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export class IotTopicRuleErrorActionKinesisOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string | undefined; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string | undefined) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey
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

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName
  }
}
export interface IotTopicRuleErrorActionLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn: string;
}

export function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class IotTopicRuleErrorActionLambdaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn
  }
}
export interface IotTopicRuleErrorActionRepublish {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class IotTopicRuleErrorActionRepublishOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // qos - computed: false, optional: true, required: false
  private _qos?: number | undefined; 
  public get qos() {
    return this.getNumberAttribute('qos');
  }
  public set qos(value: number | undefined) {
    this._qos = value;
  }
  public resetQos() {
    this._qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos
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

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }
}
export interface IotTopicRuleErrorActionS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class IotTopicRuleErrorActionS3OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
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
export interface IotTopicRuleErrorActionSns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export class IotTopicRuleErrorActionSnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // message_format - computed: false, optional: true, required: false
  private _messageFormat?: string | undefined; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string | undefined) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat
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

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn
  }
}
export interface IotTopicRuleErrorActionSqs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktf.IResolvable;
}

export function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export class IotTopicRuleErrorActionSqsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // queue_url - computed: false, optional: false, required: true
  private _queueUrl?: string; 
  public get queueUrl() {
    return this.getStringAttribute('queue_url');
  }
  public set queueUrl(value: string) {
    this._queueUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueUrlInput() {
    return this._queueUrl
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

  // use_base64 - computed: false, optional: false, required: true
  private _useBase64?: boolean | cdktf.IResolvable; 
  public get useBase64() {
    return this.getBooleanAttribute('use_base64') as any;
  }
  public set useBase64(value: boolean | cdktf.IResolvable) {
    this._useBase64 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useBase64Input() {
    return this._useBase64
  }
}
export interface IotTopicRuleErrorActionStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}

export class IotTopicRuleErrorActionStepFunctionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // execution_name_prefix - computed: false, optional: true, required: false
  private _executionNamePrefix?: string | undefined; 
  public get executionNamePrefix() {
    return this.getStringAttribute('execution_name_prefix');
  }
  public set executionNamePrefix(value: string | undefined) {
    this._executionNamePrefix = value;
  }
  public resetExecutionNamePrefix() {
    this._executionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionNamePrefixInput() {
    return this._executionNamePrefix
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

  // state_machine_name - computed: false, optional: false, required: true
  private _stateMachineName?: string; 
  public get stateMachineName() {
    return this.getStringAttribute('state_machine_name');
  }
  public set stateMachineName(value: string) {
    this._stateMachineName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMachineNameInput() {
    return this._stateMachineName
  }
}
export interface IotTopicRuleErrorAction {
  /**
  * cloudwatch_alarm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
  */
  readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm;
  /**
  * cloudwatch_metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#cloudwatch_metric IotTopicRule#cloudwatch_metric}
  */
  readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric;
  /**
  * dynamodb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodb IotTopicRule#dynamodb}
  */
  readonly dynamodb?: IotTopicRuleErrorActionDynamodb;
  /**
  * dynamodbv2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#dynamodbv2 IotTopicRule#dynamodbv2}
  */
  readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2;
  /**
  * elasticsearch block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#elasticsearch IotTopicRule#elasticsearch}
  */
  readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch;
  /**
  * firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#firehose IotTopicRule#firehose}
  */
  readonly firehose?: IotTopicRuleErrorActionFirehose;
  /**
  * iot_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_analytics IotTopicRule#iot_analytics}
  */
  readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics;
  /**
  * iot_events block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#iot_events IotTopicRule#iot_events}
  */
  readonly iotEvents?: IotTopicRuleErrorActionIotEvents;
  /**
  * kinesis block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#kinesis IotTopicRule#kinesis}
  */
  readonly kinesis?: IotTopicRuleErrorActionKinesis;
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#lambda IotTopicRule#lambda}
  */
  readonly lambda?: IotTopicRuleErrorActionLambda;
  /**
  * republish block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#republish IotTopicRule#republish}
  */
  readonly republish?: IotTopicRuleErrorActionRepublish;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#s3 IotTopicRule#s3}
  */
  readonly s3?: IotTopicRuleErrorActionS3;
  /**
  * sns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sns IotTopicRule#sns}
  */
  readonly sns?: IotTopicRuleErrorActionSns;
  /**
  * sqs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#sqs IotTopicRule#sqs}
  */
  readonly sqs?: IotTopicRuleErrorActionSqs;
  /**
  * step_functions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#step_functions IotTopicRule#step_functions}
  */
  readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions;
}

export function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_alarm: iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct!.cloudwatchAlarm),
    cloudwatch_metric: iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct!.cloudwatchMetric),
    dynamodb: iotTopicRuleErrorActionDynamodbToTerraform(struct!.dynamodb),
    dynamodbv2: iotTopicRuleErrorActionDynamodbv2ToTerraform(struct!.dynamodbv2),
    elasticsearch: iotTopicRuleErrorActionElasticsearchToTerraform(struct!.elasticsearch),
    firehose: iotTopicRuleErrorActionFirehoseToTerraform(struct!.firehose),
    iot_analytics: iotTopicRuleErrorActionIotAnalyticsToTerraform(struct!.iotAnalytics),
    iot_events: iotTopicRuleErrorActionIotEventsToTerraform(struct!.iotEvents),
    kinesis: iotTopicRuleErrorActionKinesisToTerraform(struct!.kinesis),
    lambda: iotTopicRuleErrorActionLambdaToTerraform(struct!.lambda),
    republish: iotTopicRuleErrorActionRepublishToTerraform(struct!.republish),
    s3: iotTopicRuleErrorActionS3ToTerraform(struct!.s3),
    sns: iotTopicRuleErrorActionSnsToTerraform(struct!.sns),
    sqs: iotTopicRuleErrorActionSqsToTerraform(struct!.sqs),
    step_functions: iotTopicRuleErrorActionStepFunctionsToTerraform(struct!.stepFunctions),
  }
}

export class IotTopicRuleErrorActionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm | undefined; 
  private __cloudwatchAlarmOutput = new IotTopicRuleErrorActionCloudwatchAlarmOutputReference(this as any, "cloudwatch_alarm", true);
  public get cloudwatchAlarm() {
    return this.__cloudwatchAlarmOutput;
  }
  public putCloudwatchAlarm(value: IotTopicRuleErrorActionCloudwatchAlarm | undefined) {
    this._cloudwatchAlarm = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric | undefined; 
  private __cloudwatchMetricOutput = new IotTopicRuleErrorActionCloudwatchMetricOutputReference(this as any, "cloudwatch_metric", true);
  public get cloudwatchMetric() {
    return this.__cloudwatchMetricOutput;
  }
  public putCloudwatchMetric(value: IotTopicRuleErrorActionCloudwatchMetric | undefined) {
    this._cloudwatchMetric = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb?: IotTopicRuleErrorActionDynamodb | undefined; 
  private __dynamodbOutput = new IotTopicRuleErrorActionDynamodbOutputReference(this as any, "dynamodb", true);
  public get dynamodb() {
    return this.__dynamodbOutput;
  }
  public putDynamodb(value: IotTopicRuleErrorActionDynamodb | undefined) {
    this._dynamodb = value;
  }
  public resetDynamodb() {
    this._dynamodb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2?: IotTopicRuleErrorActionDynamodbv2 | undefined; 
  private __dynamodbv2Output = new IotTopicRuleErrorActionDynamodbv2OutputReference(this as any, "dynamodbv2", true);
  public get dynamodbv2() {
    return this.__dynamodbv2Output;
  }
  public putDynamodbv2(value: IotTopicRuleErrorActionDynamodbv2 | undefined) {
    this._dynamodbv2 = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch?: IotTopicRuleErrorActionElasticsearch | undefined; 
  private __elasticsearchOutput = new IotTopicRuleErrorActionElasticsearchOutputReference(this as any, "elasticsearch", true);
  public get elasticsearch() {
    return this.__elasticsearchOutput;
  }
  public putElasticsearch(value: IotTopicRuleErrorActionElasticsearch | undefined) {
    this._elasticsearch = value;
  }
  public resetElasticsearch() {
    this._elasticsearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose?: IotTopicRuleErrorActionFirehose | undefined; 
  private __firehoseOutput = new IotTopicRuleErrorActionFirehoseOutputReference(this as any, "firehose", true);
  public get firehose() {
    return this.__firehoseOutput;
  }
  public putFirehose(value: IotTopicRuleErrorActionFirehose | undefined) {
    this._firehose = value;
  }
  public resetFirehose() {
    this._firehose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics?: IotTopicRuleErrorActionIotAnalytics | undefined; 
  private __iotAnalyticsOutput = new IotTopicRuleErrorActionIotAnalyticsOutputReference(this as any, "iot_analytics", true);
  public get iotAnalytics() {
    return this.__iotAnalyticsOutput;
  }
  public putIotAnalytics(value: IotTopicRuleErrorActionIotAnalytics | undefined) {
    this._iotAnalytics = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents?: IotTopicRuleErrorActionIotEvents | undefined; 
  private __iotEventsOutput = new IotTopicRuleErrorActionIotEventsOutputReference(this as any, "iot_events", true);
  public get iotEvents() {
    return this.__iotEventsOutput;
  }
  public putIotEvents(value: IotTopicRuleErrorActionIotEvents | undefined) {
    this._iotEvents = value;
  }
  public resetIotEvents() {
    this._iotEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis?: IotTopicRuleErrorActionKinesis | undefined; 
  private __kinesisOutput = new IotTopicRuleErrorActionKinesisOutputReference(this as any, "kinesis", true);
  public get kinesis() {
    return this.__kinesisOutput;
  }
  public putKinesis(value: IotTopicRuleErrorActionKinesis | undefined) {
    this._kinesis = value;
  }
  public resetKinesis() {
    this._kinesis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: IotTopicRuleErrorActionLambda | undefined; 
  private __lambdaOutput = new IotTopicRuleErrorActionLambdaOutputReference(this as any, "lambda", true);
  public get lambda() {
    return this.__lambdaOutput;
  }
  public putLambda(value: IotTopicRuleErrorActionLambda | undefined) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda
  }

  // republish - computed: false, optional: true, required: false
  private _republish?: IotTopicRuleErrorActionRepublish | undefined; 
  private __republishOutput = new IotTopicRuleErrorActionRepublishOutputReference(this as any, "republish", true);
  public get republish() {
    return this.__republishOutput;
  }
  public putRepublish(value: IotTopicRuleErrorActionRepublish | undefined) {
    this._republish = value;
  }
  public resetRepublish() {
    this._republish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: IotTopicRuleErrorActionS3 | undefined; 
  private __s3Output = new IotTopicRuleErrorActionS3OutputReference(this as any, "s3", true);
  public get s3() {
    return this.__s3Output;
  }
  public putS3(value: IotTopicRuleErrorActionS3 | undefined) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3
  }

  // sns - computed: false, optional: true, required: false
  private _sns?: IotTopicRuleErrorActionSns | undefined; 
  private __snsOutput = new IotTopicRuleErrorActionSnsOutputReference(this as any, "sns", true);
  public get sns() {
    return this.__snsOutput;
  }
  public putSns(value: IotTopicRuleErrorActionSns | undefined) {
    this._sns = value;
  }
  public resetSns() {
    this._sns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs?: IotTopicRuleErrorActionSqs | undefined; 
  private __sqsOutput = new IotTopicRuleErrorActionSqsOutputReference(this as any, "sqs", true);
  public get sqs() {
    return this.__sqsOutput;
  }
  public putSqs(value: IotTopicRuleErrorActionSqs | undefined) {
    this._sqs = value;
  }
  public resetSqs() {
    this._sqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions?: IotTopicRuleErrorActionStepFunctions | undefined; 
  private __stepFunctionsOutput = new IotTopicRuleErrorActionStepFunctionsOutputReference(this as any, "step_functions", true);
  public get stepFunctions() {
    return this.__stepFunctionsOutput;
  }
  public putStepFunctions(value: IotTopicRuleErrorActionStepFunctions | undefined) {
    this._stepFunctions = value;
  }
  public resetStepFunctions() {
    this._stepFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions
  }
}
export interface IotTopicRuleFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#delivery_stream_name IotTopicRule#delivery_stream_name}
  */
  readonly deliveryStreamName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#separator IotTopicRule#separator}
  */
  readonly separator?: string;
}

export function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream_name: cdktf.stringToTerraform(struct!.deliveryStreamName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    separator: cdktf.stringToTerraform(struct!.separator),
  }
}

export interface IotTopicRuleIotAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#channel_name IotTopicRule#channel_name}
  */
  readonly channelName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_name: cdktf.stringToTerraform(struct!.channelName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleIotEvents {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#input_name IotTopicRule#input_name}
  */
  readonly inputName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_id IotTopicRule#message_id}
  */
  readonly messageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_name: cdktf.stringToTerraform(struct!.inputName),
    message_id: cdktf.stringToTerraform(struct!.messageId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleKinesis {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#partition_key IotTopicRule#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#stream_name IotTopicRule#stream_name}
  */
  readonly streamName: string;
}

export function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_name: cdktf.stringToTerraform(struct!.streamName),
  }
}

export interface IotTopicRuleLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#function_arn IotTopicRule#function_arn}
  */
  readonly functionArn: string;
}

export function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export interface IotTopicRuleRepublish {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#qos IotTopicRule#qos}
  */
  readonly qos?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#topic IotTopicRule#topic}
  */
  readonly topic: string;
}

export function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qos: cdktf.numberToTerraform(struct!.qos),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface IotTopicRuleS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#bucket_name IotTopicRule#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#key IotTopicRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
}

export function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    key: cdktf.stringToTerraform(struct!.key),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export interface IotTopicRuleSns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#message_format IotTopicRule#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#target_arn IotTopicRule#target_arn}
  */
  readonly targetArn: string;
}

export function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface IotTopicRuleSqs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#queue_url IotTopicRule#queue_url}
  */
  readonly queueUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#use_base64 IotTopicRule#use_base64}
  */
  readonly useBase64: boolean | cdktf.IResolvable;
}

export function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_url: cdktf.stringToTerraform(struct!.queueUrl),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    use_base64: cdktf.booleanToTerraform(struct!.useBase64),
  }
}

export interface IotTopicRuleStepFunctions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#execution_name_prefix IotTopicRule#execution_name_prefix}
  */
  readonly executionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#role_arn IotTopicRule#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html#state_machine_name IotTopicRule#state_machine_name}
  */
  readonly stateMachineName: string;
}

export function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_name_prefix: cdktf.stringToTerraform(struct!.executionNamePrefix),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    state_machine_name: cdktf.stringToTerraform(struct!.stateMachineName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule}
*/
export class IotTopicRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_iot_topic_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iot_topic_rule.html aws_iot_topic_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotTopicRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IotTopicRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_topic_rule',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._sql = config.sql;
    this._sqlVersion = config.sqlVersion;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchAlarm = config.cloudwatchAlarm;
    this._cloudwatchMetric = config.cloudwatchMetric;
    this._dynamodb = config.dynamodb;
    this._dynamodbv2 = config.dynamodbv2;
    this._elasticsearch = config.elasticsearch;
    this._errorAction = config.errorAction;
    this._firehose = config.firehose;
    this._iotAnalytics = config.iotAnalytics;
    this._iotEvents = config.iotEvents;
    this._kinesis = config.kinesis;
    this._lambda = config.lambda;
    this._republish = config.republish;
    this._s3 = config.s3;
    this._sns = config.sns;
    this._sqs = config.sqs;
    this._stepFunctions = config.stepFunctions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
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

  // sql - computed: false, optional: false, required: true
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql
  }

  // sql_version - computed: false, optional: false, required: true
  private _sqlVersion?: string; 
  public get sqlVersion() {
    return this.getStringAttribute('sql_version');
  }
  public set sqlVersion(value: string) {
    this._sqlVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlVersionInput() {
    return this._sqlVersion
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

  // cloudwatch_alarm - computed: false, optional: true, required: false
  private _cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[] | undefined; 
  public get cloudwatchAlarm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cloudwatch_alarm') as any;
  }
  public set cloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] | undefined) {
    this._cloudwatchAlarm = value;
  }
  public resetCloudwatchAlarm() {
    this._cloudwatchAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchAlarmInput() {
    return this._cloudwatchAlarm
  }

  // cloudwatch_metric - computed: false, optional: true, required: false
  private _cloudwatchMetric?: IotTopicRuleCloudwatchMetric[] | undefined; 
  public get cloudwatchMetric() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cloudwatch_metric') as any;
  }
  public set cloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] | undefined) {
    this._cloudwatchMetric = value;
  }
  public resetCloudwatchMetric() {
    this._cloudwatchMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricInput() {
    return this._cloudwatchMetric
  }

  // dynamodb - computed: false, optional: true, required: false
  private _dynamodb?: IotTopicRuleDynamodb[] | undefined; 
  public get dynamodb() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dynamodb') as any;
  }
  public set dynamodb(value: IotTopicRuleDynamodb[] | undefined) {
    this._dynamodb = value;
  }
  public resetDynamodb() {
    this._dynamodb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbInput() {
    return this._dynamodb
  }

  // dynamodbv2 - computed: false, optional: true, required: false
  private _dynamodbv2?: IotTopicRuleDynamodbv2[] | undefined; 
  public get dynamodbv2() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dynamodbv2') as any;
  }
  public set dynamodbv2(value: IotTopicRuleDynamodbv2[] | undefined) {
    this._dynamodbv2 = value;
  }
  public resetDynamodbv2() {
    this._dynamodbv2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbv2Input() {
    return this._dynamodbv2
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch?: IotTopicRuleElasticsearch[] | undefined; 
  public get elasticsearch() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('elasticsearch') as any;
  }
  public set elasticsearch(value: IotTopicRuleElasticsearch[] | undefined) {
    this._elasticsearch = value;
  }
  public resetElasticsearch() {
    this._elasticsearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch
  }

  // error_action - computed: false, optional: true, required: false
  private _errorAction?: IotTopicRuleErrorAction | undefined; 
  private __errorActionOutput = new IotTopicRuleErrorActionOutputReference(this as any, "error_action", true);
  public get errorAction() {
    return this.__errorActionOutput;
  }
  public putErrorAction(value: IotTopicRuleErrorAction | undefined) {
    this._errorAction = value;
  }
  public resetErrorAction() {
    this._errorAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorActionInput() {
    return this._errorAction
  }

  // firehose - computed: false, optional: true, required: false
  private _firehose?: IotTopicRuleFirehose[] | undefined; 
  public get firehose() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('firehose') as any;
  }
  public set firehose(value: IotTopicRuleFirehose[] | undefined) {
    this._firehose = value;
  }
  public resetFirehose() {
    this._firehose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseInput() {
    return this._firehose
  }

  // iot_analytics - computed: false, optional: true, required: false
  private _iotAnalytics?: IotTopicRuleIotAnalytics[] | undefined; 
  public get iotAnalytics() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('iot_analytics') as any;
  }
  public set iotAnalytics(value: IotTopicRuleIotAnalytics[] | undefined) {
    this._iotAnalytics = value;
  }
  public resetIotAnalytics() {
    this._iotAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotAnalyticsInput() {
    return this._iotAnalytics
  }

  // iot_events - computed: false, optional: true, required: false
  private _iotEvents?: IotTopicRuleIotEvents[] | undefined; 
  public get iotEvents() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('iot_events') as any;
  }
  public set iotEvents(value: IotTopicRuleIotEvents[] | undefined) {
    this._iotEvents = value;
  }
  public resetIotEvents() {
    this._iotEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iotEventsInput() {
    return this._iotEvents
  }

  // kinesis - computed: false, optional: true, required: false
  private _kinesis?: IotTopicRuleKinesis[] | undefined; 
  public get kinesis() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('kinesis') as any;
  }
  public set kinesis(value: IotTopicRuleKinesis[] | undefined) {
    this._kinesis = value;
  }
  public resetKinesis() {
    this._kinesis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisInput() {
    return this._kinesis
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda?: IotTopicRuleLambda[] | undefined; 
  public get lambda() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lambda') as any;
  }
  public set lambda(value: IotTopicRuleLambda[] | undefined) {
    this._lambda = value;
  }
  public resetLambda() {
    this._lambda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda
  }

  // republish - computed: false, optional: true, required: false
  private _republish?: IotTopicRuleRepublish[] | undefined; 
  public get republish() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('republish') as any;
  }
  public set republish(value: IotTopicRuleRepublish[] | undefined) {
    this._republish = value;
  }
  public resetRepublish() {
    this._republish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get republishInput() {
    return this._republish
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: IotTopicRuleS3[] | undefined; 
  public get s3() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('s3') as any;
  }
  public set s3(value: IotTopicRuleS3[] | undefined) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3
  }

  // sns - computed: false, optional: true, required: false
  private _sns?: IotTopicRuleSns[] | undefined; 
  public get sns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sns') as any;
  }
  public set sns(value: IotTopicRuleSns[] | undefined) {
    this._sns = value;
  }
  public resetSns() {
    this._sns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsInput() {
    return this._sns
  }

  // sqs - computed: false, optional: true, required: false
  private _sqs?: IotTopicRuleSqs[] | undefined; 
  public get sqs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sqs') as any;
  }
  public set sqs(value: IotTopicRuleSqs[] | undefined) {
    this._sqs = value;
  }
  public resetSqs() {
    this._sqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsInput() {
    return this._sqs
  }

  // step_functions - computed: false, optional: true, required: false
  private _stepFunctions?: IotTopicRuleStepFunctions[] | undefined; 
  public get stepFunctions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('step_functions') as any;
  }
  public set stepFunctions(value: IotTopicRuleStepFunctions[] | undefined) {
    this._stepFunctions = value;
  }
  public resetStepFunctions() {
    this._stepFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsInput() {
    return this._stepFunctions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      sql: cdktf.stringToTerraform(this._sql),
      sql_version: cdktf.stringToTerraform(this._sqlVersion),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      cloudwatch_alarm: cdktf.listMapper(iotTopicRuleCloudwatchAlarmToTerraform)(this._cloudwatchAlarm),
      cloudwatch_metric: cdktf.listMapper(iotTopicRuleCloudwatchMetricToTerraform)(this._cloudwatchMetric),
      dynamodb: cdktf.listMapper(iotTopicRuleDynamodbToTerraform)(this._dynamodb),
      dynamodbv2: cdktf.listMapper(iotTopicRuleDynamodbv2ToTerraform)(this._dynamodbv2),
      elasticsearch: cdktf.listMapper(iotTopicRuleElasticsearchToTerraform)(this._elasticsearch),
      error_action: iotTopicRuleErrorActionToTerraform(this._errorAction),
      firehose: cdktf.listMapper(iotTopicRuleFirehoseToTerraform)(this._firehose),
      iot_analytics: cdktf.listMapper(iotTopicRuleIotAnalyticsToTerraform)(this._iotAnalytics),
      iot_events: cdktf.listMapper(iotTopicRuleIotEventsToTerraform)(this._iotEvents),
      kinesis: cdktf.listMapper(iotTopicRuleKinesisToTerraform)(this._kinesis),
      lambda: cdktf.listMapper(iotTopicRuleLambdaToTerraform)(this._lambda),
      republish: cdktf.listMapper(iotTopicRuleRepublishToTerraform)(this._republish),
      s3: cdktf.listMapper(iotTopicRuleS3ToTerraform)(this._s3),
      sns: cdktf.listMapper(iotTopicRuleSnsToTerraform)(this._sns),
      sqs: cdktf.listMapper(iotTopicRuleSqsToTerraform)(this._sqs),
      step_functions: cdktf.listMapper(iotTopicRuleStepFunctionsToTerraform)(this._stepFunctions),
    };
  }
}