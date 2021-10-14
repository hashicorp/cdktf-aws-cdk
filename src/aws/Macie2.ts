// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie 2
*/
export namespace Macie2 {
  export interface Macie2AccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#finding_publishing_frequency Macie2Account#finding_publishing_frequency}
    */
    readonly findingPublishingFrequency?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html#status Macie2Account#status}
    */
    readonly status?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account}
  */
  export class Macie2Account extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_account.html aws_macie2_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2AccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Macie2AccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._findingPublishingFrequency = config.findingPublishingFrequency;
      this._status = config.status;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // finding_publishing_frequency - computed: true, optional: true, required: false
    private _findingPublishingFrequency?: string;
    public get findingPublishingFrequency() {
      return this.getStringAttribute('finding_publishing_frequency');
    }
    public set findingPublishingFrequency(value: string) {
      this._findingPublishingFrequency = value;
    }
    public resetFindingPublishingFrequency() {
      this._findingPublishingFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingPublishingFrequencyInput() {
      return this._findingPublishingFrequency
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // service_role - computed: true, optional: false, required: false
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string;
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
      return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        finding_publishing_frequency: cdktf.stringToTerraform(this._findingPublishingFrequency),
        status: cdktf.stringToTerraform(this._status),
      };
    }
  }
  export interface Macie2ClassificationJobConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}
    */
    readonly customDataIdentifierIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#description Macie2ClassificationJob#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#initial_run Macie2ClassificationJob#initial_run}
    */
    readonly initialRun?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_status Macie2ClassificationJob#job_status}
    */
    readonly jobStatus?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#job_type Macie2ClassificationJob#job_type}
    */
    readonly jobType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name Macie2ClassificationJob#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#name_prefix Macie2ClassificationJob#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#sampling_percentage Macie2ClassificationJob#sampling_percentage}
    */
    readonly samplingPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags Macie2ClassificationJob#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tags_all Macie2ClassificationJob#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * s3_job_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#s3_job_definition Macie2ClassificationJob#s3_job_definition}
    */
    readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition[];
    /**
    * schedule_frequency block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#schedule_frequency Macie2ClassificationJob#schedule_frequency}
    */
    readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency[];
  }
  export class Macie2ClassificationJobUserPausedDetails extends cdktf.ComplexComputedList {

    // job_expires_at - computed: true, optional: false, required: false
    public get jobExpiresAt() {
      return this.getStringAttribute('job_expires_at');
    }

    // job_imminent_expiration_health_event_arn - computed: true, optional: false, required: false
    public get jobImminentExpirationHealthEventArn() {
      return this.getStringAttribute('job_imminent_expiration_health_event_arn');
    }

    // job_paused_at - computed: true, optional: false, required: false
    public get jobPausedAt() {
      return this.getStringAttribute('job_paused_at');
    }
  }
  export interface Macie2ClassificationJobS3JobDefinitionBucketDefinitions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#account_id Macie2ClassificationJob#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#buckets Macie2ClassificationJob#buckets}
    */
    readonly buckets: string[];
  }

  function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      account_id: cdktf.stringToTerraform(struct!.accountId),
      buckets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.buckets),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      comparator: cdktf.stringToTerraform(struct!.comparator),
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
  }

  function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      comparator: cdktf.stringToTerraform(struct!.comparator),
      key: cdktf.stringToTerraform(struct!.key),
      target: cdktf.stringToTerraform(struct!.target),
      tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
    /**
    * simple_scope_term block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm[];
    /**
    * tag_scope_term block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform)(struct!.simpleScopeTerm),
      tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform)(struct!.tagScopeTerm),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingExcludes {
    /**
    * and block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct!.and),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#values Macie2ClassificationJob#values}
    */
    readonly values?: string[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      comparator: cdktf.stringToTerraform(struct!.comparator),
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#value Macie2ClassificationJob#value}
    */
    readonly value?: string;
  }

  function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#comparator Macie2ClassificationJob#comparator}
    */
    readonly comparator?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#key Macie2ClassificationJob#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#target Macie2ClassificationJob#target}
    */
    readonly target?: string;
    /**
    * tag_values block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_values Macie2ClassificationJob#tag_values}
    */
    readonly tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      comparator: cdktf.stringToTerraform(struct!.comparator),
      key: cdktf.stringToTerraform(struct!.key),
      target: cdktf.stringToTerraform(struct!.target),
      tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
    /**
    * simple_scope_term block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
    */
    readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm[];
    /**
    * tag_scope_term block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
    */
    readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      simple_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform)(struct!.simpleScopeTerm),
      tag_scope_term: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform)(struct!.tagScopeTerm),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScopingIncludes {
    /**
    * and block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#and Macie2ClassificationJob#and}
    */
    readonly and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct!.and),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinitionScoping {
    /**
    * excludes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#excludes Macie2ClassificationJob#excludes}
    */
    readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes[];
    /**
    * includes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#includes Macie2ClassificationJob#includes}
    */
    readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes[];
  }

  function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScoping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      excludes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform)(struct!.excludes),
      includes: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform)(struct!.includes),
    }
  }

  export interface Macie2ClassificationJobS3JobDefinition {
    /**
    * bucket_definitions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#bucket_definitions Macie2ClassificationJob#bucket_definitions}
    */
    readonly bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
    /**
    * scoping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#scoping Macie2ClassificationJob#scoping}
    */
    readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping[];
  }

  function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct!.bucketDefinitions),
      scoping: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingToTerraform)(struct!.scoping),
    }
  }

  export interface Macie2ClassificationJobScheduleFrequency {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#daily_schedule Macie2ClassificationJob#daily_schedule}
    */
    readonly dailySchedule?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#monthly_schedule Macie2ClassificationJob#monthly_schedule}
    */
    readonly monthlySchedule?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#weekly_schedule Macie2ClassificationJob#weekly_schedule}
    */
    readonly weeklySchedule?: string;
  }

  function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequency): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      daily_schedule: cdktf.booleanToTerraform(struct!.dailySchedule),
      monthly_schedule: cdktf.numberToTerraform(struct!.monthlySchedule),
      weekly_schedule: cdktf.stringToTerraform(struct!.weeklySchedule),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job}
  */
  export class Macie2ClassificationJob extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_classification_job";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html aws_macie2_classification_job} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2ClassificationJobConfig
    */
    public constructor(scope: Construct, id: string, config: Macie2ClassificationJobConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_classification_job',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._customDataIdentifierIds = config.customDataIdentifierIds;
      this._description = config.description;
      this._initialRun = config.initialRun;
      this._jobStatus = config.jobStatus;
      this._jobType = config.jobType;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._samplingPercentage = config.samplingPercentage;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._s3JobDefinition = config.s3JobDefinition;
      this._scheduleFrequency = config.scheduleFrequency;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // custom_data_identifier_ids - computed: true, optional: true, required: false
    private _customDataIdentifierIds?: string[];
    public get customDataIdentifierIds() {
      return this.getListAttribute('custom_data_identifier_ids');
    }
    public set customDataIdentifierIds(value: string[]) {
      this._customDataIdentifierIds = value;
    }
    public resetCustomDataIdentifierIds() {
      this._customDataIdentifierIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDataIdentifierIdsInput() {
      return this._customDataIdentifierIds
    }

    // description - computed: true, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string) {
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

    // initial_run - computed: false, optional: true, required: false
    private _initialRun?: boolean | cdktf.IResolvable;
    public get initialRun() {
      return this.getBooleanAttribute('initial_run');
    }
    public set initialRun(value: boolean | cdktf.IResolvable ) {
      this._initialRun = value;
    }
    public resetInitialRun() {
      this._initialRun = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initialRunInput() {
      return this._initialRun
    }

    // job_arn - computed: true, optional: false, required: false
    public get jobArn() {
      return this.getStringAttribute('job_arn');
    }

    // job_id - computed: true, optional: false, required: false
    public get jobId() {
      return this.getStringAttribute('job_id');
    }

    // job_status - computed: true, optional: true, required: false
    private _jobStatus?: string;
    public get jobStatus() {
      return this.getStringAttribute('job_status');
    }
    public set jobStatus(value: string) {
      this._jobStatus = value;
    }
    public resetJobStatus() {
      this._jobStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobStatusInput() {
      return this._jobStatus
    }

    // job_type - computed: false, optional: false, required: true
    private _jobType: string;
    public get jobType() {
      return this.getStringAttribute('job_type');
    }
    public set jobType(value: string) {
      this._jobType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobTypeInput() {
      return this._jobType
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

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // sampling_percentage - computed: true, optional: true, required: false
    private _samplingPercentage?: number;
    public get samplingPercentage() {
      return this.getNumberAttribute('sampling_percentage');
    }
    public set samplingPercentage(value: number) {
      this._samplingPercentage = value;
    }
    public resetSamplingPercentage() {
      this._samplingPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingPercentageInput() {
      return this._samplingPercentage
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

    // user_paused_details - computed: true, optional: false, required: false
    public userPausedDetails(index: string) {
      return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
    }

    // s3_job_definition - computed: false, optional: false, required: true
    private _s3JobDefinition: Macie2ClassificationJobS3JobDefinition[];
    public get s3JobDefinition() {
      return this.interpolationForAttribute('s3_job_definition') as any;
    }
    public set s3JobDefinition(value: Macie2ClassificationJobS3JobDefinition[]) {
      this._s3JobDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3JobDefinitionInput() {
      return this._s3JobDefinition
    }

    // schedule_frequency - computed: false, optional: true, required: false
    private _scheduleFrequency?: Macie2ClassificationJobScheduleFrequency[];
    public get scheduleFrequency() {
      return this.interpolationForAttribute('schedule_frequency') as any;
    }
    public set scheduleFrequency(value: Macie2ClassificationJobScheduleFrequency[] ) {
      this._scheduleFrequency = value;
    }
    public resetScheduleFrequency() {
      this._scheduleFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleFrequencyInput() {
      return this._scheduleFrequency
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        custom_data_identifier_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._customDataIdentifierIds),
        description: cdktf.stringToTerraform(this._description),
        initial_run: cdktf.booleanToTerraform(this._initialRun),
        job_status: cdktf.stringToTerraform(this._jobStatus),
        job_type: cdktf.stringToTerraform(this._jobType),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        sampling_percentage: cdktf.numberToTerraform(this._samplingPercentage),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        s3_job_definition: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionToTerraform)(this._s3JobDefinition),
        schedule_frequency: cdktf.listMapper(macie2ClassificationJobScheduleFrequencyToTerraform)(this._scheduleFrequency),
      };
    }
  }
  export interface Macie2CustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#description Macie2CustomDataIdentifier#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#ignore_words Macie2CustomDataIdentifier#ignore_words}
    */
    readonly ignoreWords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#keywords Macie2CustomDataIdentifier#keywords}
    */
    readonly keywords?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}
    */
    readonly maximumMatchDistance?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name Macie2CustomDataIdentifier#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name_prefix Macie2CustomDataIdentifier#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#regex Macie2CustomDataIdentifier#regex}
    */
    readonly regex?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags Macie2CustomDataIdentifier#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags_all Macie2CustomDataIdentifier#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier}
  */
  export class Macie2CustomDataIdentifier extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_custom_data_identifier";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2CustomDataIdentifierConfig = {}
    */
    public constructor(scope: Construct, id: string, config: Macie2CustomDataIdentifierConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_custom_data_identifier',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._ignoreWords = config.ignoreWords;
      this._keywords = config.keywords;
      this._maximumMatchDistance = config.maximumMatchDistance;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._regex = config.regex;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
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

    // ignore_words - computed: false, optional: true, required: false
    private _ignoreWords?: string[];
    public get ignoreWords() {
      return this.getListAttribute('ignore_words');
    }
    public set ignoreWords(value: string[] ) {
      this._ignoreWords = value;
    }
    public resetIgnoreWords() {
      this._ignoreWords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreWordsInput() {
      return this._ignoreWords
    }

    // keywords - computed: false, optional: true, required: false
    private _keywords?: string[];
    public get keywords() {
      return this.getListAttribute('keywords');
    }
    public set keywords(value: string[] ) {
      this._keywords = value;
    }
    public resetKeywords() {
      this._keywords = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordsInput() {
      return this._keywords
    }

    // maximum_match_distance - computed: true, optional: true, required: false
    private _maximumMatchDistance?: number;
    public get maximumMatchDistance() {
      return this.getNumberAttribute('maximum_match_distance');
    }
    public set maximumMatchDistance(value: number) {
      this._maximumMatchDistance = value;
    }
    public resetMaximumMatchDistance() {
      this._maximumMatchDistance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumMatchDistanceInput() {
      return this._maximumMatchDistance
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

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // regex - computed: false, optional: true, required: false
    private _regex?: string;
    public get regex() {
      return this.getStringAttribute('regex');
    }
    public set regex(value: string ) {
      this._regex = value;
    }
    public resetRegex() {
      this._regex = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexInput() {
      return this._regex
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        ignore_words: cdktf.listMapper(cdktf.stringToTerraform)(this._ignoreWords),
        keywords: cdktf.listMapper(cdktf.stringToTerraform)(this._keywords),
        maximum_match_distance: cdktf.numberToTerraform(this._maximumMatchDistance),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        regex: cdktf.stringToTerraform(this._regex),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface Macie2FindingsFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#action Macie2FindingsFilter#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#description Macie2FindingsFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name Macie2FindingsFilter#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#name_prefix Macie2FindingsFilter#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#position Macie2FindingsFilter#position}
    */
    readonly position?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags Macie2FindingsFilter#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#tags_all Macie2FindingsFilter#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * finding_criteria block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#finding_criteria Macie2FindingsFilter#finding_criteria}
    */
    readonly findingCriteria: Macie2FindingsFilterFindingCriteria[];
  }
  export interface Macie2FindingsFilterFindingCriteriaCriterion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq Macie2FindingsFilter#eq}
    */
    readonly eq?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#eq_exact_match Macie2FindingsFilter#eq_exact_match}
    */
    readonly eqExactMatch?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#field Macie2FindingsFilter#field}
    */
    readonly field: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gt Macie2FindingsFilter#gt}
    */
    readonly gt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#gte Macie2FindingsFilter#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lt Macie2FindingsFilter#lt}
    */
    readonly lt?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#lte Macie2FindingsFilter#lte}
    */
    readonly lte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#neq Macie2FindingsFilter#neq}
    */
    readonly neq?: string[];
  }

  function macie2FindingsFilterFindingCriteriaCriterionToTerraform(struct?: Macie2FindingsFilterFindingCriteriaCriterion): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      eq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eq),
      eq_exact_match: cdktf.listMapper(cdktf.stringToTerraform)(struct!.eqExactMatch),
      field: cdktf.stringToTerraform(struct!.field),
      gt: cdktf.stringToTerraform(struct!.gt),
      gte: cdktf.stringToTerraform(struct!.gte),
      lt: cdktf.stringToTerraform(struct!.lt),
      lte: cdktf.stringToTerraform(struct!.lte),
      neq: cdktf.listMapper(cdktf.stringToTerraform)(struct!.neq),
    }
  }

  export interface Macie2FindingsFilterFindingCriteria {
    /**
    * criterion block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html#criterion Macie2FindingsFilter#criterion}
    */
    readonly criterion?: Macie2FindingsFilterFindingCriteriaCriterion[];
  }

  function macie2FindingsFilterFindingCriteriaToTerraform(struct?: Macie2FindingsFilterFindingCriteria): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      criterion: cdktf.listMapper(macie2FindingsFilterFindingCriteriaCriterionToTerraform)(struct!.criterion),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter}
  */
  export class Macie2FindingsFilter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_findings_filter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_findings_filter.html aws_macie2_findings_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2FindingsFilterConfig
    */
    public constructor(scope: Construct, id: string, config: Macie2FindingsFilterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_findings_filter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._description = config.description;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._position = config.position;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._findingCriteria = config.findingCriteria;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: false, required: true
    private _action: string;
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // position - computed: true, optional: true, required: false
    private _position?: number;
    public get position() {
      return this.getNumberAttribute('position');
    }
    public set position(value: number) {
      this._position = value;
    }
    public resetPosition() {
      this._position = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get positionInput() {
      return this._position
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

    // finding_criteria - computed: false, optional: false, required: true
    private _findingCriteria: Macie2FindingsFilterFindingCriteria[];
    public get findingCriteria() {
      return this.interpolationForAttribute('finding_criteria') as any;
    }
    public set findingCriteria(value: Macie2FindingsFilterFindingCriteria[]) {
      this._findingCriteria = value;
    }
    // Temporarily expose input value. Use with caution.
    public get findingCriteriaInput() {
      return this._findingCriteria
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        position: cdktf.numberToTerraform(this._position),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        finding_criteria: cdktf.listMapper(macie2FindingsFilterFindingCriteriaToTerraform)(this._findingCriteria),
      };
    }
  }
  export interface Macie2InvitationAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#administrator_account_id Macie2InvitationAccepter#administrator_account_id}
    */
    readonly administratorAccountId: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#timeouts Macie2InvitationAccepter#timeouts}
    */
    readonly timeouts?: Macie2InvitationAccepterTimeouts;
  }
  export interface Macie2InvitationAccepterTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#create Macie2InvitationAccepter#create}
    */
    readonly create?: string;
  }

  function macie2InvitationAccepterTimeoutsToTerraform(struct?: Macie2InvitationAccepterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter}
  */
  export class Macie2InvitationAccepter extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_invitation_accepter";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2InvitationAccepterConfig
    */
    public constructor(scope: Construct, id: string, config: Macie2InvitationAccepterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_invitation_accepter',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._administratorAccountId = config.administratorAccountId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // administrator_account_id - computed: false, optional: false, required: true
    private _administratorAccountId: string;
    public get administratorAccountId() {
      return this.getStringAttribute('administrator_account_id');
    }
    public set administratorAccountId(value: string) {
      this._administratorAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get administratorAccountIdInput() {
      return this._administratorAccountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invitation_id - computed: true, optional: false, required: false
    public get invitationId() {
      return this.getStringAttribute('invitation_id');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Macie2InvitationAccepterTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: Macie2InvitationAccepterTimeouts ) {
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
        administrator_account_id: cdktf.stringToTerraform(this._administratorAccountId),
        timeouts: macie2InvitationAccepterTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Macie2MemberConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#account_id Macie2Member#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#email Macie2Member#email}
    */
    readonly email: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_disable_email_notification Macie2Member#invitation_disable_email_notification}
    */
    readonly invitationDisableEmailNotification?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invitation_message Macie2Member#invitation_message}
    */
    readonly invitationMessage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#invite Macie2Member#invite}
    */
    readonly invite?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#status Macie2Member#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags Macie2Member#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#tags_all Macie2Member#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#timeouts Macie2Member#timeouts}
    */
    readonly timeouts?: Macie2MemberTimeouts;
  }
  export interface Macie2MemberTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#create Macie2Member#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html#update Macie2Member#update}
    */
    readonly update?: string;
  }

  function macie2MemberTimeoutsToTerraform(struct?: Macie2MemberTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member}
  */
  export class Macie2Member extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_member";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_member.html aws_macie2_member} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2MemberConfig
    */
    public constructor(scope: Construct, id: string, config: Macie2MemberConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_member',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._accountId = config.accountId;
      this._email = config.email;
      this._invitationDisableEmailNotification = config.invitationDisableEmailNotification;
      this._invitationMessage = config.invitationMessage;
      this._invite = config.invite;
      this._status = config.status;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: false, optional: false, required: true
    private _accountId: string;
    public get accountId() {
      return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
      this._accountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
      return this._accountId
    }

    // administrator_account_id - computed: true, optional: false, required: false
    public get administratorAccountId() {
      return this.getStringAttribute('administrator_account_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // email - computed: false, optional: false, required: true
    private _email: string;
    public get email() {
      return this.getStringAttribute('email');
    }
    public set email(value: string) {
      this._email = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
      return this._email
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invitation_disable_email_notification - computed: false, optional: true, required: false
    private _invitationDisableEmailNotification?: string;
    public get invitationDisableEmailNotification() {
      return this.getStringAttribute('invitation_disable_email_notification');
    }
    public set invitationDisableEmailNotification(value: string ) {
      this._invitationDisableEmailNotification = value;
    }
    public resetInvitationDisableEmailNotification() {
      this._invitationDisableEmailNotification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invitationDisableEmailNotificationInput() {
      return this._invitationDisableEmailNotification
    }

    // invitation_message - computed: false, optional: true, required: false
    private _invitationMessage?: string;
    public get invitationMessage() {
      return this.getStringAttribute('invitation_message');
    }
    public set invitationMessage(value: string ) {
      this._invitationMessage = value;
    }
    public resetInvitationMessage() {
      this._invitationMessage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invitationMessageInput() {
      return this._invitationMessage
    }

    // invite - computed: true, optional: true, required: false
    private _invite?: boolean | cdktf.IResolvable;
    public get invite() {
      return this.getBooleanAttribute('invite');
    }
    public set invite(value: boolean | cdktf.IResolvable) {
      this._invite = value;
    }
    public resetInvite() {
      this._invite = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inviteInput() {
      return this._invite
    }

    // invited_at - computed: true, optional: false, required: false
    public get invitedAt() {
      return this.getStringAttribute('invited_at');
    }

    // master_account_id - computed: true, optional: false, required: false
    public get masterAccountId() {
      return this.getStringAttribute('master_account_id');
    }

    // relationship_status - computed: true, optional: false, required: false
    public get relationshipStatus() {
      return this.getStringAttribute('relationship_status');
    }

    // status - computed: true, optional: true, required: false
    private _status?: string;
    public get status() {
      return this.getStringAttribute('status');
    }
    public set status(value: string) {
      this._status = value;
    }
    public resetStatus() {
      this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
      return this._status
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

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
      return this.getStringAttribute('updated_at');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: Macie2MemberTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: Macie2MemberTimeouts ) {
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
        account_id: cdktf.stringToTerraform(this._accountId),
        email: cdktf.stringToTerraform(this._email),
        invitation_disable_email_notification: cdktf.stringToTerraform(this._invitationDisableEmailNotification),
        invitation_message: cdktf.stringToTerraform(this._invitationMessage),
        invite: cdktf.booleanToTerraform(this._invite),
        status: cdktf.stringToTerraform(this._status),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: macie2MemberTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface Macie2OrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html#admin_account_id Macie2OrganizationAdminAccount#admin_account_id}
    */
    readonly adminAccountId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account}
  */
  export class Macie2OrganizationAdminAccount extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_macie2_organization_admin_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_organization_admin_account.html aws_macie2_organization_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Macie2OrganizationAdminAccountConfig
    */
    public constructor(scope: Construct, id: string, config: Macie2OrganizationAdminAccountConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_macie2_organization_admin_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._adminAccountId = config.adminAccountId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admin_account_id - computed: false, optional: false, required: true
    private _adminAccountId: string;
    public get adminAccountId() {
      return this.getStringAttribute('admin_account_id');
    }
    public set adminAccountId(value: string) {
      this._adminAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get adminAccountIdInput() {
      return this._adminAccountId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        admin_account_id: cdktf.stringToTerraform(this._adminAccountId),
      };
    }
  }
}
