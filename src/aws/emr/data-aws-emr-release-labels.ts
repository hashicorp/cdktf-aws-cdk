// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic MapReduce
*/
export interface DataAwsEmrReleaseLabelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#filters DataAwsEmrReleaseLabels#filters}
  */
  readonly filters?: DataAwsEmrReleaseLabelsFilters;
}
export interface DataAwsEmrReleaseLabelsFilters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#application DataAwsEmrReleaseLabels#application}
  */
  readonly application?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html#prefix DataAwsEmrReleaseLabels#prefix}
  */
  readonly prefix?: string;
}

export function dataAwsEmrReleaseLabelsFiltersToTerraform(struct?: DataAwsEmrReleaseLabelsFiltersOutputReference | DataAwsEmrReleaseLabelsFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class DataAwsEmrReleaseLabelsFiltersOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // application - computed: false, optional: true, required: false
  private _application?: string | undefined; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string | undefined) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html aws_emr_release_labels}
*/
export class DataAwsEmrReleaseLabels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_emr_release_labels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/emr_release_labels.html aws_emr_release_labels} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsEmrReleaseLabelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsEmrReleaseLabelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_release_labels',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // release_labels - computed: true, optional: false, required: false
  public get releaseLabels() {
    return this.getListAttribute('release_labels');
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: DataAwsEmrReleaseLabelsFilters | undefined; 
  private __filtersOutput = new DataAwsEmrReleaseLabelsFiltersOutputReference(this as any, "filters", true);
  public get filters() {
    return this.__filtersOutput;
  }
  public putFilters(value: DataAwsEmrReleaseLabelsFilters | undefined) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: dataAwsEmrReleaseLabelsFiltersToTerraform(this._filters),
    };
  }
}