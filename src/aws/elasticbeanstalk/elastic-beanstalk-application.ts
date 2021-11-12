// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Beanstalk
*/
export interface ElasticBeanstalkApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#description ElasticBeanstalkApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#name ElasticBeanstalkApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags ElasticBeanstalkApplication#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#tags_all ElasticBeanstalkApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * appversion_lifecycle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#appversion_lifecycle ElasticBeanstalkApplication#appversion_lifecycle}
  */
  readonly appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle;
}
export interface ElasticBeanstalkApplicationAppversionLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#delete_source_from_s3 ElasticBeanstalkApplication#delete_source_from_s3}
  */
  readonly deleteSourceFromS3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_age_in_days ElasticBeanstalkApplication#max_age_in_days}
  */
  readonly maxAgeInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#max_count ElasticBeanstalkApplication#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html#service_role ElasticBeanstalkApplication#service_role}
  */
  readonly serviceRole: string;
}

export function elasticBeanstalkApplicationAppversionLifecycleToTerraform(struct?: ElasticBeanstalkApplicationAppversionLifecycleOutputReference | ElasticBeanstalkApplicationAppversionLifecycle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_source_from_s3: cdktf.booleanToTerraform(struct!.deleteSourceFromS3),
    max_age_in_days: cdktf.numberToTerraform(struct!.maxAgeInDays),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    service_role: cdktf.stringToTerraform(struct!.serviceRole),
  }
}

export class ElasticBeanstalkApplicationAppversionLifecycleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_source_from_s3 - computed: false, optional: true, required: false
  private _deleteSourceFromS3?: boolean | cdktf.IResolvable | undefined; 
  public get deleteSourceFromS3() {
    return this.getBooleanAttribute('delete_source_from_s3') as any;
  }
  public set deleteSourceFromS3(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteSourceFromS3 = value;
  }
  public resetDeleteSourceFromS3() {
    this._deleteSourceFromS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSourceFromS3Input() {
    return this._deleteSourceFromS3
  }

  // max_age_in_days - computed: false, optional: true, required: false
  private _maxAgeInDays?: number | undefined; 
  public get maxAgeInDays() {
    return this.getNumberAttribute('max_age_in_days');
  }
  public set maxAgeInDays(value: number | undefined) {
    this._maxAgeInDays = value;
  }
  public resetMaxAgeInDays() {
    this._maxAgeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInDaysInput() {
    return this._maxAgeInDays
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number | undefined; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number | undefined) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount
  }

  // service_role - computed: false, optional: false, required: true
  private _serviceRole?: string; 
  public get serviceRole() {
    return this.getStringAttribute('service_role');
  }
  public set serviceRole(value: string) {
    this._serviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleInput() {
    return this._serviceRole
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application}
*/
export class ElasticBeanstalkApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elastic_beanstalk_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastic_beanstalk_application.html aws_elastic_beanstalk_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticBeanstalkApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticBeanstalkApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastic_beanstalk_application',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._appversionLifecycle = config.appversionLifecycle;
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

  // appversion_lifecycle - computed: false, optional: true, required: false
  private _appversionLifecycle?: ElasticBeanstalkApplicationAppversionLifecycle | undefined; 
  private __appversionLifecycleOutput = new ElasticBeanstalkApplicationAppversionLifecycleOutputReference(this as any, "appversion_lifecycle", true);
  public get appversionLifecycle() {
    return this.__appversionLifecycleOutput;
  }
  public putAppversionLifecycle(value: ElasticBeanstalkApplicationAppversionLifecycle | undefined) {
    this._appversionLifecycle = value;
  }
  public resetAppversionLifecycle() {
    this._appversionLifecycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appversionLifecycleInput() {
    return this._appversionLifecycle
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      appversion_lifecycle: elasticBeanstalkApplicationAppversionLifecycleToTerraform(this._appversionLifecycle),
    };
  }
}
