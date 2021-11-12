// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie 2
*/
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
  readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
  /**
  * schedule_frequency block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#schedule_frequency Macie2ClassificationJob#schedule_frequency}
  */
  readonly scheduleFrequency?: Macie2ClassificationJobScheduleFrequency;
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

export function macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string | undefined; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string | undefined) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator
  }

  // key - computed: true, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
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

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string | undefined; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string | undefined) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator
  }

  // key - computed: true, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // target - computed: true, optional: true, required: false
  private _target?: string | undefined; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string | undefined) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | undefined; 
  public get tagValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag_values') as any;
  }
  public set tagValues(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[] | undefined) {
    this._tagValues = value;
  }
  public resetTagValues() {
    this._tagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
}

export function macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermToTerraform(struct!.tagScopeTerm),
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

export function macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingExcludesAndToTerraform)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // and - computed: false, optional: true, required: false
  private _and?: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | undefined; 
  public get and() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('and') as any;
  }
  public set and(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[] | undefined) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and
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

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string | undefined; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string | undefined) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator
  }

  // key - computed: true, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // values - computed: true, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
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

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: cdktf.stringToTerraform(struct!.comparator),
    key: cdktf.stringToTerraform(struct!.key),
    target: cdktf.stringToTerraform(struct!.target),
    tag_values: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesToTerraform)(struct!.tagValues),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // comparator - computed: true, optional: true, required: false
  private _comparator?: string | undefined; 
  public get comparator() {
    return this.getStringAttribute('comparator');
  }
  public set comparator(value: string | undefined) {
    this._comparator = value;
  }
  public resetComparator() {
    this._comparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator
  }

  // key - computed: true, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }

  // target - computed: true, optional: true, required: false
  private _target?: string | undefined; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string | undefined) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // tag_values - computed: false, optional: true, required: false
  private _tagValues?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | undefined; 
  public get tagValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tag_values') as any;
  }
  public set tagValues(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[] | undefined) {
    this._tagValues = value;
  }
  public resetTagValues() {
    this._tagValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValuesInput() {
    return this._tagValues
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd {
  /**
  * simple_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#simple_scope_term Macie2ClassificationJob#simple_scope_term}
  */
  readonly simpleScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
  /**
  * tag_scope_term block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#tag_scope_term Macie2ClassificationJob#tag_scope_term}
  */
  readonly tagScopeTerm?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
}

export function macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermToTerraform(struct!.simpleScopeTerm),
    tag_scope_term: macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermToTerraform(struct!.tagScopeTerm),
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

export function macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference | Macie2ClassificationJobS3JobDefinitionScopingIncludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionScopingIncludesAndToTerraform)(struct!.and),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // and - computed: false, optional: true, required: false
  private _and?: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | undefined; 
  public get and() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('and') as any;
  }
  public set and(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[] | undefined) {
    this._and = value;
  }
  public resetAnd() {
    this._and = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andInput() {
    return this._and
  }
}
export interface Macie2ClassificationJobS3JobDefinitionScoping {
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#excludes Macie2ClassificationJob#excludes}
  */
  readonly excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
  /**
  * includes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_classification_job.html#includes Macie2ClassificationJob#includes}
  */
  readonly includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
}

export function macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionScopingOutputReference | Macie2ClassificationJobS3JobDefinitionScoping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: macie2ClassificationJobS3JobDefinitionScopingExcludesToTerraform(struct!.excludes),
    includes: macie2ClassificationJobS3JobDefinitionScopingIncludesToTerraform(struct!.includes),
  }
}

export class Macie2ClassificationJobS3JobDefinitionScopingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined; 
  private __excludesOutput = new Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(this as any, "excludes", true);
  public get excludes() {
    return this.__excludesOutput;
  }
  public putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // includes - computed: false, optional: true, required: false
  private _includes?: Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined; 
  private __includesOutput = new Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(this as any, "includes", true);
  public get includes() {
    return this.__includesOutput;
  }
  public putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes | undefined) {
    this._includes = value;
  }
  public resetIncludes() {
    this._includes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includesInput() {
    return this._includes
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
  readonly scoping?: Macie2ClassificationJobS3JobDefinitionScoping;
}

export function macie2ClassificationJobS3JobDefinitionToTerraform(struct?: Macie2ClassificationJobS3JobDefinitionOutputReference | Macie2ClassificationJobS3JobDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_definitions: cdktf.listMapper(macie2ClassificationJobS3JobDefinitionBucketDefinitionsToTerraform)(struct!.bucketDefinitions),
    scoping: macie2ClassificationJobS3JobDefinitionScopingToTerraform(struct!.scoping),
  }
}

export class Macie2ClassificationJobS3JobDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket_definitions - computed: false, optional: true, required: false
  private _bucketDefinitions?: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | undefined; 
  public get bucketDefinitions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('bucket_definitions') as any;
  }
  public set bucketDefinitions(value: Macie2ClassificationJobS3JobDefinitionBucketDefinitions[] | undefined) {
    this._bucketDefinitions = value;
  }
  public resetBucketDefinitions() {
    this._bucketDefinitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketDefinitionsInput() {
    return this._bucketDefinitions
  }

  // scoping - computed: false, optional: true, required: false
  private _scoping?: Macie2ClassificationJobS3JobDefinitionScoping | undefined; 
  private __scopingOutput = new Macie2ClassificationJobS3JobDefinitionScopingOutputReference(this as any, "scoping", true);
  public get scoping() {
    return this.__scopingOutput;
  }
  public putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping | undefined) {
    this._scoping = value;
  }
  public resetScoping() {
    this._scoping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopingInput() {
    return this._scoping
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

export function macie2ClassificationJobScheduleFrequencyToTerraform(struct?: Macie2ClassificationJobScheduleFrequencyOutputReference | Macie2ClassificationJobScheduleFrequency): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_schedule: cdktf.booleanToTerraform(struct!.dailySchedule),
    monthly_schedule: cdktf.numberToTerraform(struct!.monthlySchedule),
    weekly_schedule: cdktf.stringToTerraform(struct!.weeklySchedule),
  }
}

export class Macie2ClassificationJobScheduleFrequencyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // daily_schedule - computed: false, optional: true, required: false
  private _dailySchedule?: boolean | cdktf.IResolvable | undefined; 
  public get dailySchedule() {
    return this.getBooleanAttribute('daily_schedule') as any;
  }
  public set dailySchedule(value: boolean | cdktf.IResolvable | undefined) {
    this._dailySchedule = value;
  }
  public resetDailySchedule() {
    this._dailySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyScheduleInput() {
    return this._dailySchedule
  }

  // monthly_schedule - computed: true, optional: true, required: false
  private _monthlySchedule?: number | undefined; 
  public get monthlySchedule() {
    return this.getNumberAttribute('monthly_schedule');
  }
  public set monthlySchedule(value: number | undefined) {
    this._monthlySchedule = value;
  }
  public resetMonthlySchedule() {
    this._monthlySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyScheduleInput() {
    return this._monthlySchedule
  }

  // weekly_schedule - computed: true, optional: true, required: false
  private _weeklySchedule?: string | undefined; 
  public get weeklySchedule() {
    return this.getStringAttribute('weekly_schedule');
  }
  public set weeklySchedule(value: string | undefined) {
    this._weeklySchedule = value;
  }
  public resetWeeklySchedule() {
    this._weeklySchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyScheduleInput() {
    return this._weeklySchedule
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
  private _customDataIdentifierIds?: string[] | undefined; 
  public get customDataIdentifierIds() {
    return this.getListAttribute('custom_data_identifier_ids');
  }
  public set customDataIdentifierIds(value: string[] | undefined) {
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

  // initial_run - computed: false, optional: true, required: false
  private _initialRun?: boolean | cdktf.IResolvable | undefined; 
  public get initialRun() {
    return this.getBooleanAttribute('initial_run') as any;
  }
  public set initialRun(value: boolean | cdktf.IResolvable | undefined) {
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
  private _jobStatus?: string | undefined; 
  public get jobStatus() {
    return this.getStringAttribute('job_status');
  }
  public set jobStatus(value: string | undefined) {
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
  private _jobType?: string; 
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

  // sampling_percentage - computed: true, optional: true, required: false
  private _samplingPercentage?: number | undefined; 
  public get samplingPercentage() {
    return this.getNumberAttribute('sampling_percentage');
  }
  public set samplingPercentage(value: number | undefined) {
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

  // user_paused_details - computed: true, optional: false, required: false
  public userPausedDetails(index: string) {
    return new Macie2ClassificationJobUserPausedDetails(this, 'user_paused_details', index);
  }

  // s3_job_definition - computed: false, optional: false, required: true
  private _s3JobDefinition?: Macie2ClassificationJobS3JobDefinition; 
  private __s3JobDefinitionOutput = new Macie2ClassificationJobS3JobDefinitionOutputReference(this as any, "s3_job_definition", true);
  public get s3JobDefinition() {
    return this.__s3JobDefinitionOutput;
  }
  public putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition) {
    this._s3JobDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3JobDefinitionInput() {
    return this._s3JobDefinition
  }

  // schedule_frequency - computed: false, optional: true, required: false
  private _scheduleFrequency?: Macie2ClassificationJobScheduleFrequency | undefined; 
  private __scheduleFrequencyOutput = new Macie2ClassificationJobScheduleFrequencyOutputReference(this as any, "schedule_frequency", true);
  public get scheduleFrequency() {
    return this.__scheduleFrequencyOutput;
  }
  public putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency | undefined) {
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
      s3_job_definition: macie2ClassificationJobS3JobDefinitionToTerraform(this._s3JobDefinition),
      schedule_frequency: macie2ClassificationJobScheduleFrequencyToTerraform(this._scheduleFrequency),
    };
  }
}
