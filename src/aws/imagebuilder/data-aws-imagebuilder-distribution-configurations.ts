// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export interface DataAwsImagebuilderDistributionConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations.html#filter DataAwsImagebuilderDistributionConfigurations#filter}
  */
  readonly filter?: DataAwsImagebuilderDistributionConfigurationsFilter[];
}
export interface DataAwsImagebuilderDistributionConfigurationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations.html#name DataAwsImagebuilderDistributionConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations.html#values DataAwsImagebuilderDistributionConfigurations#values}
  */
  readonly values: string[];
}

export function dataAwsImagebuilderDistributionConfigurationsFilterToTerraform(struct?: DataAwsImagebuilderDistributionConfigurationsFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations.html aws_imagebuilder_distribution_configurations}
*/
export class DataAwsImagebuilderDistributionConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configurations";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations.html aws_imagebuilder_distribution_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsImagebuilderDistributionConfigurationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsImagebuilderDistributionConfigurationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configurations',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._filter = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: DataAwsImagebuilderDistributionConfigurationsFilter[]; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: DataAwsImagebuilderDistributionConfigurationsFilter[]) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.listMapper(dataAwsImagebuilderDistributionConfigurationsFilterToTerraform)(this._filter),
    };
  }
}