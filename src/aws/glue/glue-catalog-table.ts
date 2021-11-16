// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueCatalogTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#description GlueCatalogTable#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#owner GlueCatalogTable#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#retention GlueCatalogTable#retention}
  */
  readonly retention?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#table_type GlueCatalogTable#table_type}
  */
  readonly tableType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_expanded_text GlueCatalogTable#view_expanded_text}
  */
  readonly viewExpandedText?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#view_original_text GlueCatalogTable#view_original_text}
  */
  readonly viewOriginalText?: string;
  /**
  * partition_index block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_index GlueCatalogTable#partition_index}
  */
  readonly partitionIndex?: GlueCatalogTablePartitionIndex[];
  /**
  * partition_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#partition_keys GlueCatalogTable#partition_keys}
  */
  readonly partitionKeys?: GlueCatalogTablePartitionKeys[];
  /**
  * storage_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#storage_descriptor GlueCatalogTable#storage_descriptor}
  */
  readonly storageDescriptor?: GlueCatalogTableStorageDescriptor;
  /**
  * target_table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#target_table GlueCatalogTable#target_table}
  */
  readonly targetTable?: GlueCatalogTableTargetTable;
}
export interface GlueCatalogTablePartitionIndex {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#index_name GlueCatalogTable#index_name}
  */
  readonly indexName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#keys GlueCatalogTable#keys}
  */
  readonly keys: string[];
}

export function glueCatalogTablePartitionIndexToTerraform(struct?: GlueCatalogTablePartitionIndex): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index_name: cdktf.stringToTerraform(struct!.indexName),
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
  }
}

export interface GlueCatalogTablePartitionKeys {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

export function glueCatalogTablePartitionKeysToTerraform(struct?: GlueCatalogTablePartitionKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GlueCatalogTableStorageDescriptorColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#comment GlueCatalogTable#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#type GlueCatalogTable#type}
  */
  readonly type?: string;
}

export function glueCatalogTableStorageDescriptorColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#registry_name GlueCatalogTable#registry_name}
  */
  readonly registryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_arn GlueCatalogTable#schema_arn}
  */
  readonly schemaArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_name GlueCatalogTable#schema_name}
  */
  readonly schemaName?: string;
}

export function glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference | GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_name: cdktf.stringToTerraform(struct!.registryName),
    schema_arn: cdktf.stringToTerraform(struct!.schemaArn),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}

export class GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // registry_name - computed: false, optional: true, required: false
  private _registryName?: string | undefined; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string | undefined) {
    this._registryName = value;
  }
  public resetRegistryName() {
    this._registryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName
  }

  // schema_arn - computed: false, optional: true, required: false
  private _schemaArn?: string | undefined; 
  public get schemaArn() {
    return this.getStringAttribute('schema_arn');
  }
  public set schemaArn(value: string | undefined) {
    this._schemaArn = value;
  }
  public resetSchemaArn() {
    this._schemaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaArnInput() {
    return this._schemaArn
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string | undefined; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string | undefined) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName
  }
}
export interface GlueCatalogTableStorageDescriptorSchemaReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_id GlueCatalogTable#schema_version_id}
  */
  readonly schemaVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_version_number GlueCatalogTable#schema_version_number}
  */
  readonly schemaVersionNumber: number;
  /**
  * schema_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_id GlueCatalogTable#schema_id}
  */
  readonly schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
}

export function glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct?: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference | GlueCatalogTableStorageDescriptorSchemaReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_version_id: cdktf.stringToTerraform(struct!.schemaVersionId),
    schema_version_number: cdktf.numberToTerraform(struct!.schemaVersionNumber),
    schema_id: glueCatalogTableStorageDescriptorSchemaReferenceSchemaIdToTerraform(struct!.schemaId),
  }
}

export class GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // schema_version_id - computed: false, optional: true, required: false
  private _schemaVersionId?: string | undefined; 
  public get schemaVersionId() {
    return this.getStringAttribute('schema_version_id');
  }
  public set schemaVersionId(value: string | undefined) {
    this._schemaVersionId = value;
  }
  public resetSchemaVersionId() {
    this._schemaVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionIdInput() {
    return this._schemaVersionId
  }

  // schema_version_number - computed: false, optional: false, required: true
  private _schemaVersionNumber?: number; 
  public get schemaVersionNumber() {
    return this.getNumberAttribute('schema_version_number');
  }
  public set schemaVersionNumber(value: number) {
    this._schemaVersionNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionNumberInput() {
    return this._schemaVersionNumber
  }

  // schema_id - computed: false, optional: true, required: false
  private _schemaId?: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined; 
  private __schemaIdOutput = new GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(this as any, "schema_id", true);
  public get schemaId() {
    return this.__schemaIdOutput;
  }
  public putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId | undefined) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId
  }
}
export interface GlueCatalogTableStorageDescriptorSerDeInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#serialization_library GlueCatalogTable#serialization_library}
  */
  readonly serializationLibrary?: string;
}

export function glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference | GlueCatalogTableStorageDescriptorSerDeInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
  }
}

export class GlueCatalogTableStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: true, required: false
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // serialization_library - computed: false, optional: true, required: false
  private _serializationLibrary?: string | undefined; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string | undefined) {
    this._serializationLibrary = value;
  }
  public resetSerializationLibrary() {
    this._serializationLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary
  }
}
export interface GlueCatalogTableStorageDescriptorSkewedInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_names GlueCatalogTable#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_column_values GlueCatalogTable#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

export function glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct?: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference | GlueCatalogTableStorageDescriptorSkewedInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skewed_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnNames),
    skewed_column_value_location_maps: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.skewedColumnValueLocationMaps),
    skewed_column_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.skewedColumnValues),
  }
}

export class GlueCatalogTableStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // skewed_column_names - computed: false, optional: true, required: false
  private _skewedColumnNames?: string[] | undefined; 
  public get skewedColumnNames() {
    return this.getListAttribute('skewed_column_names');
  }
  public set skewedColumnNames(value: string[] | undefined) {
    this._skewedColumnNames = value;
  }
  public resetSkewedColumnNames() {
    this._skewedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnNamesInput() {
    return this._skewedColumnNames
  }

  // skewed_column_value_location_maps - computed: false, optional: true, required: false
  private _skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get skewedColumnValueLocationMaps() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('skewed_column_value_location_maps') as any;
  }
  public set skewedColumnValueLocationMaps(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._skewedColumnValueLocationMaps = value;
  }
  public resetSkewedColumnValueLocationMaps() {
    this._skewedColumnValueLocationMaps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValueLocationMapsInput() {
    return this._skewedColumnValueLocationMaps
  }

  // skewed_column_values - computed: false, optional: true, required: false
  private _skewedColumnValues?: string[] | undefined; 
  public get skewedColumnValues() {
    return this.getListAttribute('skewed_column_values');
  }
  public set skewedColumnValues(value: string[] | undefined) {
    this._skewedColumnValues = value;
  }
  public resetSkewedColumnValues() {
    this._skewedColumnValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedColumnValuesInput() {
    return this._skewedColumnValues
  }
}
export interface GlueCatalogTableStorageDescriptorSortColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#column GlueCatalogTable#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_order GlueCatalogTable#sort_order}
  */
  readonly sortOrder: number;
}

export function glueCatalogTableStorageDescriptorSortColumnsToTerraform(struct?: GlueCatalogTableStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
  }
}

export interface GlueCatalogTableStorageDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#bucket_columns GlueCatalogTable#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#compressed GlueCatalogTable#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#input_format GlueCatalogTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#location GlueCatalogTable#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#number_of_buckets GlueCatalogTable#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#output_format GlueCatalogTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#parameters GlueCatalogTable#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#columns GlueCatalogTable#columns}
  */
  readonly columns?: GlueCatalogTableStorageDescriptorColumns[];
  /**
  * schema_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#schema_reference GlueCatalogTable#schema_reference}
  */
  readonly schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference;
  /**
  * ser_de_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#ser_de_info GlueCatalogTable#ser_de_info}
  */
  readonly serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo;
  /**
  * skewed_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#skewed_info GlueCatalogTable#skewed_info}
  */
  readonly skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo;
  /**
  * sort_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#sort_columns GlueCatalogTable#sort_columns}
  */
  readonly sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[];
}

export function glueCatalogTableStorageDescriptorToTerraform(struct?: GlueCatalogTableStorageDescriptorOutputReference | GlueCatalogTableStorageDescriptor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.bucketColumns),
    compressed: cdktf.booleanToTerraform(struct!.compressed),
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    location: cdktf.stringToTerraform(struct!.location),
    number_of_buckets: cdktf.numberToTerraform(struct!.numberOfBuckets),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.parameters),
    stored_as_sub_directories: cdktf.booleanToTerraform(struct!.storedAsSubDirectories),
    columns: cdktf.listMapper(glueCatalogTableStorageDescriptorColumnsToTerraform)(struct!.columns),
    schema_reference: glueCatalogTableStorageDescriptorSchemaReferenceToTerraform(struct!.schemaReference),
    ser_de_info: glueCatalogTableStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
    skewed_info: glueCatalogTableStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_columns: cdktf.listMapper(glueCatalogTableStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
  }
}

export class GlueCatalogTableStorageDescriptorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket_columns - computed: false, optional: true, required: false
  private _bucketColumns?: string[] | undefined; 
  public get bucketColumns() {
    return this.getListAttribute('bucket_columns');
  }
  public set bucketColumns(value: string[] | undefined) {
    this._bucketColumns = value;
  }
  public resetBucketColumns() {
    this._bucketColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketColumnsInput() {
    return this._bucketColumns
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable | undefined; 
  public get compressed() {
    return this.getBooleanAttribute('compressed') as any;
  }
  public set compressed(value: boolean | cdktf.IResolvable | undefined) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string | undefined; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string | undefined) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat
  }

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // number_of_buckets - computed: false, optional: true, required: false
  private _numberOfBuckets?: number | undefined; 
  public get numberOfBuckets() {
    return this.getNumberAttribute('number_of_buckets');
  }
  public set numberOfBuckets(value: number | undefined) {
    this._numberOfBuckets = value;
  }
  public resetNumberOfBuckets() {
    this._numberOfBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfBucketsInput() {
    return this._numberOfBuckets
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string | undefined; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string | undefined) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // stored_as_sub_directories - computed: false, optional: true, required: false
  private _storedAsSubDirectories?: boolean | cdktf.IResolvable | undefined; 
  public get storedAsSubDirectories() {
    return this.getBooleanAttribute('stored_as_sub_directories') as any;
  }
  public set storedAsSubDirectories(value: boolean | cdktf.IResolvable | undefined) {
    this._storedAsSubDirectories = value;
  }
  public resetStoredAsSubDirectories() {
    this._storedAsSubDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedAsSubDirectoriesInput() {
    return this._storedAsSubDirectories
  }

  // columns - computed: false, optional: true, required: false
  private _columns?: GlueCatalogTableStorageDescriptorColumns[] | undefined; 
  public get columns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('columns') as any;
  }
  public set columns(value: GlueCatalogTableStorageDescriptorColumns[] | undefined) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns
  }

  // schema_reference - computed: false, optional: true, required: false
  private _schemaReference?: GlueCatalogTableStorageDescriptorSchemaReference | undefined; 
  private __schemaReferenceOutput = new GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(this as any, "schema_reference", true);
  public get schemaReference() {
    return this.__schemaReferenceOutput;
  }
  public putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference | undefined) {
    this._schemaReference = value;
  }
  public resetSchemaReference() {
    this._schemaReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaReferenceInput() {
    return this._schemaReference
  }

  // ser_de_info - computed: false, optional: true, required: false
  private _serDeInfo?: GlueCatalogTableStorageDescriptorSerDeInfo | undefined; 
  private __serDeInfoOutput = new GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(this as any, "ser_de_info", true);
  public get serDeInfo() {
    return this.__serDeInfoOutput;
  }
  public putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo | undefined) {
    this._serDeInfo = value;
  }
  public resetSerDeInfo() {
    this._serDeInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serDeInfoInput() {
    return this._serDeInfo
  }

  // skewed_info - computed: false, optional: true, required: false
  private _skewedInfo?: GlueCatalogTableStorageDescriptorSkewedInfo | undefined; 
  private __skewedInfoOutput = new GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(this as any, "skewed_info", true);
  public get skewedInfo() {
    return this.__skewedInfoOutput;
  }
  public putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo | undefined) {
    this._skewedInfo = value;
  }
  public resetSkewedInfo() {
    this._skewedInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skewedInfoInput() {
    return this._skewedInfo
  }

  // sort_columns - computed: false, optional: true, required: false
  private _sortColumns?: GlueCatalogTableStorageDescriptorSortColumns[] | undefined; 
  public get sortColumns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sort_columns') as any;
  }
  public set sortColumns(value: GlueCatalogTableStorageDescriptorSortColumns[] | undefined) {
    this._sortColumns = value;
  }
  public resetSortColumns() {
    this._sortColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnsInput() {
    return this._sortColumns
  }
}
export interface GlueCatalogTableTargetTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#catalog_id GlueCatalogTable#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#database_name GlueCatalogTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html#name GlueCatalogTable#name}
  */
  readonly name: string;
}

export function glueCatalogTableTargetTableToTerraform(struct?: GlueCatalogTableTargetTableOutputReference | GlueCatalogTableTargetTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class GlueCatalogTableTargetTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table}
*/
export class GlueCatalogTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_catalog_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_catalog_table.html aws_glue_catalog_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueCatalogTableConfig
  */
  public constructor(scope: Construct, id: string, config: GlueCatalogTableConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_catalog_table',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._databaseName = config.databaseName;
    this._description = config.description;
    this._name = config.name;
    this._owner = config.owner;
    this._parameters = config.parameters;
    this._retention = config.retention;
    this._tableType = config.tableType;
    this._viewExpandedText = config.viewExpandedText;
    this._viewOriginalText = config.viewOriginalText;
    this._partitionIndex = config.partitionIndex;
    this._partitionKeys = config.partitionKeys;
    this._storageDescriptor = config.storageDescriptor;
    this._targetTable = config.targetTable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // catalog_id - computed: true, optional: true, required: false
  private _catalogId?: string | undefined; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string | undefined) {
    this._catalogId = value;
  }
  public resetCatalogId() {
    this._catalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string | undefined; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string | undefined) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get parameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: number | undefined; 
  public get retention() {
    return this.getNumberAttribute('retention');
  }
  public set retention(value: number | undefined) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention
  }

  // table_type - computed: false, optional: true, required: false
  private _tableType?: string | undefined; 
  public get tableType() {
    return this.getStringAttribute('table_type');
  }
  public set tableType(value: string | undefined) {
    this._tableType = value;
  }
  public resetTableType() {
    this._tableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableTypeInput() {
    return this._tableType
  }

  // view_expanded_text - computed: false, optional: true, required: false
  private _viewExpandedText?: string | undefined; 
  public get viewExpandedText() {
    return this.getStringAttribute('view_expanded_text');
  }
  public set viewExpandedText(value: string | undefined) {
    this._viewExpandedText = value;
  }
  public resetViewExpandedText() {
    this._viewExpandedText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewExpandedTextInput() {
    return this._viewExpandedText
  }

  // view_original_text - computed: false, optional: true, required: false
  private _viewOriginalText?: string | undefined; 
  public get viewOriginalText() {
    return this.getStringAttribute('view_original_text');
  }
  public set viewOriginalText(value: string | undefined) {
    this._viewOriginalText = value;
  }
  public resetViewOriginalText() {
    this._viewOriginalText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewOriginalTextInput() {
    return this._viewOriginalText
  }

  // partition_index - computed: false, optional: true, required: false
  private _partitionIndex?: GlueCatalogTablePartitionIndex[] | undefined; 
  public get partitionIndex() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('partition_index') as any;
  }
  public set partitionIndex(value: GlueCatalogTablePartitionIndex[] | undefined) {
    this._partitionIndex = value;
  }
  public resetPartitionIndex() {
    this._partitionIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIndexInput() {
    return this._partitionIndex
  }

  // partition_keys - computed: false, optional: true, required: false
  private _partitionKeys?: GlueCatalogTablePartitionKeys[] | undefined; 
  public get partitionKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('partition_keys') as any;
  }
  public set partitionKeys(value: GlueCatalogTablePartitionKeys[] | undefined) {
    this._partitionKeys = value;
  }
  public resetPartitionKeys() {
    this._partitionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeysInput() {
    return this._partitionKeys
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GlueCatalogTableStorageDescriptor | undefined; 
  private __storageDescriptorOutput = new GlueCatalogTableStorageDescriptorOutputReference(this as any, "storage_descriptor", true);
  public get storageDescriptor() {
    return this.__storageDescriptorOutput;
  }
  public putStorageDescriptor(value: GlueCatalogTableStorageDescriptor | undefined) {
    this._storageDescriptor = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor
  }

  // target_table - computed: false, optional: true, required: false
  private _targetTable?: GlueCatalogTableTargetTable | undefined; 
  private __targetTableOutput = new GlueCatalogTableTargetTableOutputReference(this as any, "target_table", true);
  public get targetTable() {
    return this.__targetTableOutput;
  }
  public putTargetTable(value: GlueCatalogTableTargetTable | undefined) {
    this._targetTable = value;
  }
  public resetTargetTable() {
    this._targetTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTableInput() {
    return this._targetTable
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      retention: cdktf.numberToTerraform(this._retention),
      table_type: cdktf.stringToTerraform(this._tableType),
      view_expanded_text: cdktf.stringToTerraform(this._viewExpandedText),
      view_original_text: cdktf.stringToTerraform(this._viewOriginalText),
      partition_index: cdktf.listMapper(glueCatalogTablePartitionIndexToTerraform)(this._partitionIndex),
      partition_keys: cdktf.listMapper(glueCatalogTablePartitionKeysToTerraform)(this._partitionKeys),
      storage_descriptor: glueCatalogTableStorageDescriptorToTerraform(this._storageDescriptor),
      target_table: glueCatalogTableTargetTableToTerraform(this._targetTable),
    };
  }
}
