// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Notification Service
*/
export interface SnsTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_failure_feedback_role_arn SnsTopic#application_failure_feedback_role_arn}
  */
  readonly applicationFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_role_arn SnsTopic#application_success_feedback_role_arn}
  */
  readonly applicationSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#application_success_feedback_sample_rate SnsTopic#application_success_feedback_sample_rate}
  */
  readonly applicationSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#content_based_deduplication SnsTopic#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#delivery_policy SnsTopic#delivery_policy}
  */
  readonly deliveryPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#display_name SnsTopic#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#fifo_topic SnsTopic#fifo_topic}
  */
  readonly fifoTopic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_failure_feedback_role_arn SnsTopic#firehose_failure_feedback_role_arn}
  */
  readonly firehoseFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_role_arn SnsTopic#firehose_success_feedback_role_arn}
  */
  readonly firehoseSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#firehose_success_feedback_sample_rate SnsTopic#firehose_success_feedback_sample_rate}
  */
  readonly firehoseSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_failure_feedback_role_arn SnsTopic#http_failure_feedback_role_arn}
  */
  readonly httpFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_role_arn SnsTopic#http_success_feedback_role_arn}
  */
  readonly httpSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#http_success_feedback_sample_rate SnsTopic#http_success_feedback_sample_rate}
  */
  readonly httpSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#kms_master_key_id SnsTopic#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_failure_feedback_role_arn SnsTopic#lambda_failure_feedback_role_arn}
  */
  readonly lambdaFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_role_arn SnsTopic#lambda_success_feedback_role_arn}
  */
  readonly lambdaSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#lambda_success_feedback_sample_rate SnsTopic#lambda_success_feedback_sample_rate}
  */
  readonly lambdaSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name SnsTopic#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#name_prefix SnsTopic#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#policy SnsTopic#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_failure_feedback_role_arn SnsTopic#sqs_failure_feedback_role_arn}
  */
  readonly sqsFailureFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_role_arn SnsTopic#sqs_success_feedback_role_arn}
  */
  readonly sqsSuccessFeedbackRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#sqs_success_feedback_sample_rate SnsTopic#sqs_success_feedback_sample_rate}
  */
  readonly sqsSuccessFeedbackSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags SnsTopic#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html#tags_all SnsTopic#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic}
*/
export class SnsTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sns_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sns_topic.html aws_sns_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnsTopicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnsTopicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_topic',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._applicationFailureFeedbackRoleArn = config.applicationFailureFeedbackRoleArn;
    this._applicationSuccessFeedbackRoleArn = config.applicationSuccessFeedbackRoleArn;
    this._applicationSuccessFeedbackSampleRate = config.applicationSuccessFeedbackSampleRate;
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._deliveryPolicy = config.deliveryPolicy;
    this._displayName = config.displayName;
    this._fifoTopic = config.fifoTopic;
    this._firehoseFailureFeedbackRoleArn = config.firehoseFailureFeedbackRoleArn;
    this._firehoseSuccessFeedbackRoleArn = config.firehoseSuccessFeedbackRoleArn;
    this._firehoseSuccessFeedbackSampleRate = config.firehoseSuccessFeedbackSampleRate;
    this._httpFailureFeedbackRoleArn = config.httpFailureFeedbackRoleArn;
    this._httpSuccessFeedbackRoleArn = config.httpSuccessFeedbackRoleArn;
    this._httpSuccessFeedbackSampleRate = config.httpSuccessFeedbackSampleRate;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._lambdaFailureFeedbackRoleArn = config.lambdaFailureFeedbackRoleArn;
    this._lambdaSuccessFeedbackRoleArn = config.lambdaSuccessFeedbackRoleArn;
    this._lambdaSuccessFeedbackSampleRate = config.lambdaSuccessFeedbackSampleRate;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._sqsFailureFeedbackRoleArn = config.sqsFailureFeedbackRoleArn;
    this._sqsSuccessFeedbackRoleArn = config.sqsSuccessFeedbackRoleArn;
    this._sqsSuccessFeedbackSampleRate = config.sqsSuccessFeedbackSampleRate;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationFailureFeedbackRoleArn?: string | undefined; 
  public get applicationFailureFeedbackRoleArn() {
    return this.getStringAttribute('application_failure_feedback_role_arn');
  }
  public set applicationFailureFeedbackRoleArn(value: string | undefined) {
    this._applicationFailureFeedbackRoleArn = value;
  }
  public resetApplicationFailureFeedbackRoleArn() {
    this._applicationFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationFailureFeedbackRoleArnInput() {
    return this._applicationFailureFeedbackRoleArn
  }

  // application_success_feedback_role_arn - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackRoleArn?: string | undefined; 
  public get applicationSuccessFeedbackRoleArn() {
    return this.getStringAttribute('application_success_feedback_role_arn');
  }
  public set applicationSuccessFeedbackRoleArn(value: string | undefined) {
    this._applicationSuccessFeedbackRoleArn = value;
  }
  public resetApplicationSuccessFeedbackRoleArn() {
    this._applicationSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackRoleArnInput() {
    return this._applicationSuccessFeedbackRoleArn
  }

  // application_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _applicationSuccessFeedbackSampleRate?: number | undefined; 
  public get applicationSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('application_success_feedback_sample_rate');
  }
  public set applicationSuccessFeedbackSampleRate(value: number | undefined) {
    this._applicationSuccessFeedbackSampleRate = value;
  }
  public resetApplicationSuccessFeedbackSampleRate() {
    this._applicationSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSuccessFeedbackSampleRateInput() {
    return this._applicationSuccessFeedbackSampleRate
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: boolean | cdktf.IResolvable | undefined; 
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication') as any;
  }
  public set contentBasedDeduplication(value: boolean | cdktf.IResolvable | undefined) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication
  }

  // delivery_policy - computed: false, optional: true, required: false
  private _deliveryPolicy?: string | undefined; 
  public get deliveryPolicy() {
    return this.getStringAttribute('delivery_policy');
  }
  public set deliveryPolicy(value: string | undefined) {
    this._deliveryPolicy = value;
  }
  public resetDeliveryPolicy() {
    this._deliveryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryPolicyInput() {
    return this._deliveryPolicy
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string | undefined; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // fifo_topic - computed: false, optional: true, required: false
  private _fifoTopic?: boolean | cdktf.IResolvable | undefined; 
  public get fifoTopic() {
    return this.getBooleanAttribute('fifo_topic') as any;
  }
  public set fifoTopic(value: boolean | cdktf.IResolvable | undefined) {
    this._fifoTopic = value;
  }
  public resetFifoTopic() {
    this._fifoTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoTopicInput() {
    return this._fifoTopic
  }

  // firehose_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _firehoseFailureFeedbackRoleArn?: string | undefined; 
  public get firehoseFailureFeedbackRoleArn() {
    return this.getStringAttribute('firehose_failure_feedback_role_arn');
  }
  public set firehoseFailureFeedbackRoleArn(value: string | undefined) {
    this._firehoseFailureFeedbackRoleArn = value;
  }
  public resetFirehoseFailureFeedbackRoleArn() {
    this._firehoseFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseFailureFeedbackRoleArnInput() {
    return this._firehoseFailureFeedbackRoleArn
  }

  // firehose_success_feedback_role_arn - computed: false, optional: true, required: false
  private _firehoseSuccessFeedbackRoleArn?: string | undefined; 
  public get firehoseSuccessFeedbackRoleArn() {
    return this.getStringAttribute('firehose_success_feedback_role_arn');
  }
  public set firehoseSuccessFeedbackRoleArn(value: string | undefined) {
    this._firehoseSuccessFeedbackRoleArn = value;
  }
  public resetFirehoseSuccessFeedbackRoleArn() {
    this._firehoseSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseSuccessFeedbackRoleArnInput() {
    return this._firehoseSuccessFeedbackRoleArn
  }

  // firehose_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _firehoseSuccessFeedbackSampleRate?: number | undefined; 
  public get firehoseSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('firehose_success_feedback_sample_rate');
  }
  public set firehoseSuccessFeedbackSampleRate(value: number | undefined) {
    this._firehoseSuccessFeedbackSampleRate = value;
  }
  public resetFirehoseSuccessFeedbackSampleRate() {
    this._firehoseSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firehoseSuccessFeedbackSampleRateInput() {
    return this._firehoseSuccessFeedbackSampleRate
  }

  // http_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _httpFailureFeedbackRoleArn?: string | undefined; 
  public get httpFailureFeedbackRoleArn() {
    return this.getStringAttribute('http_failure_feedback_role_arn');
  }
  public set httpFailureFeedbackRoleArn(value: string | undefined) {
    this._httpFailureFeedbackRoleArn = value;
  }
  public resetHttpFailureFeedbackRoleArn() {
    this._httpFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpFailureFeedbackRoleArnInput() {
    return this._httpFailureFeedbackRoleArn
  }

  // http_success_feedback_role_arn - computed: false, optional: true, required: false
  private _httpSuccessFeedbackRoleArn?: string | undefined; 
  public get httpSuccessFeedbackRoleArn() {
    return this.getStringAttribute('http_success_feedback_role_arn');
  }
  public set httpSuccessFeedbackRoleArn(value: string | undefined) {
    this._httpSuccessFeedbackRoleArn = value;
  }
  public resetHttpSuccessFeedbackRoleArn() {
    this._httpSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackRoleArnInput() {
    return this._httpSuccessFeedbackRoleArn
  }

  // http_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _httpSuccessFeedbackSampleRate?: number | undefined; 
  public get httpSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('http_success_feedback_sample_rate');
  }
  public set httpSuccessFeedbackSampleRate(value: number | undefined) {
    this._httpSuccessFeedbackSampleRate = value;
  }
  public resetHttpSuccessFeedbackSampleRate() {
    this._httpSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSuccessFeedbackSampleRateInput() {
    return this._httpSuccessFeedbackSampleRate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string | undefined; 
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string | undefined) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId
  }

  // lambda_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaFailureFeedbackRoleArn?: string | undefined; 
  public get lambdaFailureFeedbackRoleArn() {
    return this.getStringAttribute('lambda_failure_feedback_role_arn');
  }
  public set lambdaFailureFeedbackRoleArn(value: string | undefined) {
    this._lambdaFailureFeedbackRoleArn = value;
  }
  public resetLambdaFailureFeedbackRoleArn() {
    this._lambdaFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFailureFeedbackRoleArnInput() {
    return this._lambdaFailureFeedbackRoleArn
  }

  // lambda_success_feedback_role_arn - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackRoleArn?: string | undefined; 
  public get lambdaSuccessFeedbackRoleArn() {
    return this.getStringAttribute('lambda_success_feedback_role_arn');
  }
  public set lambdaSuccessFeedbackRoleArn(value: string | undefined) {
    this._lambdaSuccessFeedbackRoleArn = value;
  }
  public resetLambdaSuccessFeedbackRoleArn() {
    this._lambdaSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackRoleArnInput() {
    return this._lambdaSuccessFeedbackRoleArn
  }

  // lambda_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _lambdaSuccessFeedbackSampleRate?: number | undefined; 
  public get lambdaSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('lambda_success_feedback_sample_rate');
  }
  public set lambdaSuccessFeedbackSampleRate(value: number | undefined) {
    this._lambdaSuccessFeedbackSampleRate = value;
  }
  public resetLambdaSuccessFeedbackSampleRate() {
    this._lambdaSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaSuccessFeedbackSampleRateInput() {
    return this._lambdaSuccessFeedbackSampleRate
  }

  // name - computed: true, optional: true, required: false
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string | undefined; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string | undefined; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // sqs_failure_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsFailureFeedbackRoleArn?: string | undefined; 
  public get sqsFailureFeedbackRoleArn() {
    return this.getStringAttribute('sqs_failure_feedback_role_arn');
  }
  public set sqsFailureFeedbackRoleArn(value: string | undefined) {
    this._sqsFailureFeedbackRoleArn = value;
  }
  public resetSqsFailureFeedbackRoleArn() {
    this._sqsFailureFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsFailureFeedbackRoleArnInput() {
    return this._sqsFailureFeedbackRoleArn
  }

  // sqs_success_feedback_role_arn - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackRoleArn?: string | undefined; 
  public get sqsSuccessFeedbackRoleArn() {
    return this.getStringAttribute('sqs_success_feedback_role_arn');
  }
  public set sqsSuccessFeedbackRoleArn(value: string | undefined) {
    this._sqsSuccessFeedbackRoleArn = value;
  }
  public resetSqsSuccessFeedbackRoleArn() {
    this._sqsSuccessFeedbackRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackRoleArnInput() {
    return this._sqsSuccessFeedbackRoleArn
  }

  // sqs_success_feedback_sample_rate - computed: false, optional: true, required: false
  private _sqsSuccessFeedbackSampleRate?: number | undefined; 
  public get sqsSuccessFeedbackSampleRate() {
    return this.getNumberAttribute('sqs_success_feedback_sample_rate');
  }
  public set sqsSuccessFeedbackSampleRate(value: number | undefined) {
    this._sqsSuccessFeedbackSampleRate = value;
  }
  public resetSqsSuccessFeedbackSampleRate() {
    this._sqsSuccessFeedbackSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsSuccessFeedbackSampleRateInput() {
    return this._sqsSuccessFeedbackSampleRate
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_failure_feedback_role_arn: cdktf.stringToTerraform(this._applicationFailureFeedbackRoleArn),
      application_success_feedback_role_arn: cdktf.stringToTerraform(this._applicationSuccessFeedbackRoleArn),
      application_success_feedback_sample_rate: cdktf.numberToTerraform(this._applicationSuccessFeedbackSampleRate),
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      delivery_policy: cdktf.stringToTerraform(this._deliveryPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      fifo_topic: cdktf.booleanToTerraform(this._fifoTopic),
      firehose_failure_feedback_role_arn: cdktf.stringToTerraform(this._firehoseFailureFeedbackRoleArn),
      firehose_success_feedback_role_arn: cdktf.stringToTerraform(this._firehoseSuccessFeedbackRoleArn),
      firehose_success_feedback_sample_rate: cdktf.numberToTerraform(this._firehoseSuccessFeedbackSampleRate),
      http_failure_feedback_role_arn: cdktf.stringToTerraform(this._httpFailureFeedbackRoleArn),
      http_success_feedback_role_arn: cdktf.stringToTerraform(this._httpSuccessFeedbackRoleArn),
      http_success_feedback_sample_rate: cdktf.numberToTerraform(this._httpSuccessFeedbackSampleRate),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      lambda_failure_feedback_role_arn: cdktf.stringToTerraform(this._lambdaFailureFeedbackRoleArn),
      lambda_success_feedback_role_arn: cdktf.stringToTerraform(this._lambdaSuccessFeedbackRoleArn),
      lambda_success_feedback_sample_rate: cdktf.numberToTerraform(this._lambdaSuccessFeedbackSampleRate),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      sqs_failure_feedback_role_arn: cdktf.stringToTerraform(this._sqsFailureFeedbackRoleArn),
      sqs_success_feedback_role_arn: cdktf.stringToTerraform(this._sqsSuccessFeedbackRoleArn),
      sqs_success_feedback_sample_rate: cdktf.numberToTerraform(this._sqsSuccessFeedbackSampleRate),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
