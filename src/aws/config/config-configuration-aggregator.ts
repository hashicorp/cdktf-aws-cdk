// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Config
*/
export interface ConfigConfigurationAggregatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#name ConfigConfigurationAggregator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags ConfigConfigurationAggregator#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#tags_all ConfigConfigurationAggregator#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * account_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_aggregation_source ConfigConfigurationAggregator#account_aggregation_source}
  */
  readonly accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource;
  /**
  * organization_aggregation_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#organization_aggregation_source ConfigConfigurationAggregator#organization_aggregation_source}
  */
  readonly organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource;
}
export interface ConfigConfigurationAggregatorAccountAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#account_ids ConfigConfigurationAggregator#account_ids}
  */
  readonly accountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
}

export function configConfigurationAggregatorAccountAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorAccountAggregationSourceOutputReference | ConfigConfigurationAggregatorAccountAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accountIds),
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export class ConfigConfigurationAggregatorAccountAggregationSourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // account_ids - computed: false, optional: false, required: true
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktf.IResolvable | undefined; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions') as any;
  }
  public set allRegions(value: boolean | cdktf.IResolvable | undefined) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[] | undefined; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }
}
export interface ConfigConfigurationAggregatorOrganizationAggregationSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#all_regions ConfigConfigurationAggregator#all_regions}
  */
  readonly allRegions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#regions ConfigConfigurationAggregator#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html#role_arn ConfigConfigurationAggregator#role_arn}
  */
  readonly roleArn: string;
}

export function configConfigurationAggregatorOrganizationAggregationSourceToTerraform(struct?: ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference | ConfigConfigurationAggregatorOrganizationAggregationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_regions: cdktf.booleanToTerraform(struct!.allRegions),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all_regions - computed: false, optional: true, required: false
  private _allRegions?: boolean | cdktf.IResolvable | undefined; 
  public get allRegions() {
    return this.getBooleanAttribute('all_regions') as any;
  }
  public set allRegions(value: boolean | cdktf.IResolvable | undefined) {
    this._allRegions = value;
  }
  public resetAllRegions() {
    this._allRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRegionsInput() {
    return this._allRegions
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[] | undefined; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] | undefined) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator}
*/
export class ConfigConfigurationAggregator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_configuration_aggregator";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_aggregator.html aws_config_configuration_aggregator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationAggregatorConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationAggregatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_aggregator',
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
    this._tagsAll = config.tagsAll;
    this._accountAggregationSource = config.accountAggregationSource;
    this._organizationAggregationSource = config.organizationAggregationSource;
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

  // account_aggregation_source - computed: false, optional: true, required: false
  private _accountAggregationSource?: ConfigConfigurationAggregatorAccountAggregationSource | undefined; 
  private __accountAggregationSourceOutput = new ConfigConfigurationAggregatorAccountAggregationSourceOutputReference(this as any, "account_aggregation_source", true);
  public get accountAggregationSource() {
    return this.__accountAggregationSourceOutput;
  }
  public putAccountAggregationSource(value: ConfigConfigurationAggregatorAccountAggregationSource | undefined) {
    this._accountAggregationSource = value;
  }
  public resetAccountAggregationSource() {
    this._accountAggregationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAggregationSourceInput() {
    return this._accountAggregationSource
  }

  // organization_aggregation_source - computed: false, optional: true, required: false
  private _organizationAggregationSource?: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined; 
  private __organizationAggregationSourceOutput = new ConfigConfigurationAggregatorOrganizationAggregationSourceOutputReference(this as any, "organization_aggregation_source", true);
  public get organizationAggregationSource() {
    return this.__organizationAggregationSourceOutput;
  }
  public putOrganizationAggregationSource(value: ConfigConfigurationAggregatorOrganizationAggregationSource | undefined) {
    this._organizationAggregationSource = value;
  }
  public resetOrganizationAggregationSource() {
    this._organizationAggregationSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAggregationSourceInput() {
    return this._organizationAggregationSource
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      account_aggregation_source: configConfigurationAggregatorAccountAggregationSourceToTerraform(this._accountAggregationSource),
      organization_aggregation_source: configConfigurationAggregatorOrganizationAggregationSourceToTerraform(this._organizationAggregationSource),
    };
  }
}
