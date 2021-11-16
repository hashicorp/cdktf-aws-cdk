// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GluePartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#catalog_id GluePartition#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#database_name GluePartition#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#partition_values GluePartition#partition_values}
  */
  readonly partitionValues: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#table_name GluePartition#table_name}
  */
  readonly tableName: string;
  /**
  * storage_descriptor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#storage_descriptor GluePartition#storage_descriptor}
  */
  readonly storageDescriptor?: GluePartitionStorageDescriptor;
}
export interface GluePartitionStorageDescriptorColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#comment GluePartition#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#type GluePartition#type}
  */
  readonly type?: string;
}

export function gluePartitionStorageDescriptorColumnsToTerraform(struct?: GluePartitionStorageDescriptorColumns): any {
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

export interface GluePartitionStorageDescriptorSerDeInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#name GluePartition#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#serialization_library GluePartition#serialization_library}
  */
  readonly serializationLibrary?: string;
}

export function gluePartitionStorageDescriptorSerDeInfoToTerraform(struct?: GluePartitionStorageDescriptorSerDeInfoOutputReference | GluePartitionStorageDescriptorSerDeInfo): any {
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

export class GluePartitionStorageDescriptorSerDeInfoOutputReference extends cdktf.ComplexObject {
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
export interface GluePartitionStorageDescriptorSkewedInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_names GluePartition#skewed_column_names}
  */
  readonly skewedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_value_location_maps GluePartition#skewed_column_value_location_maps}
  */
  readonly skewedColumnValueLocationMaps?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_column_values GluePartition#skewed_column_values}
  */
  readonly skewedColumnValues?: string[];
}

export function gluePartitionStorageDescriptorSkewedInfoToTerraform(struct?: GluePartitionStorageDescriptorSkewedInfoOutputReference | GluePartitionStorageDescriptorSkewedInfo): any {
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

export class GluePartitionStorageDescriptorSkewedInfoOutputReference extends cdktf.ComplexObject {
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
export interface GluePartitionStorageDescriptorSortColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#column GluePartition#column}
  */
  readonly column: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_order GluePartition#sort_order}
  */
  readonly sortOrder: number;
}

export function gluePartitionStorageDescriptorSortColumnsToTerraform(struct?: GluePartitionStorageDescriptorSortColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    sort_order: cdktf.numberToTerraform(struct!.sortOrder),
  }
}

export interface GluePartitionStorageDescriptor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#bucket_columns GluePartition#bucket_columns}
  */
  readonly bucketColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#compressed GluePartition#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#input_format GluePartition#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#location GluePartition#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#number_of_buckets GluePartition#number_of_buckets}
  */
  readonly numberOfBuckets?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#output_format GluePartition#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#parameters GluePartition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#stored_as_sub_directories GluePartition#stored_as_sub_directories}
  */
  readonly storedAsSubDirectories?: boolean | cdktf.IResolvable;
  /**
  * columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#columns GluePartition#columns}
  */
  readonly columns?: GluePartitionStorageDescriptorColumns[];
  /**
  * ser_de_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#ser_de_info GluePartition#ser_de_info}
  */
  readonly serDeInfo?: GluePartitionStorageDescriptorSerDeInfo;
  /**
  * skewed_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#skewed_info GluePartition#skewed_info}
  */
  readonly skewedInfo?: GluePartitionStorageDescriptorSkewedInfo;
  /**
  * sort_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html#sort_columns GluePartition#sort_columns}
  */
  readonly sortColumns?: GluePartitionStorageDescriptorSortColumns[];
}

export function gluePartitionStorageDescriptorToTerraform(struct?: GluePartitionStorageDescriptorOutputReference | GluePartitionStorageDescriptor): any {
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
    columns: cdktf.listMapper(gluePartitionStorageDescriptorColumnsToTerraform)(struct!.columns),
    ser_de_info: gluePartitionStorageDescriptorSerDeInfoToTerraform(struct!.serDeInfo),
    skewed_info: gluePartitionStorageDescriptorSkewedInfoToTerraform(struct!.skewedInfo),
    sort_columns: cdktf.listMapper(gluePartitionStorageDescriptorSortColumnsToTerraform)(struct!.sortColumns),
  }
}

export class GluePartitionStorageDescriptorOutputReference extends cdktf.ComplexObject {
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
  private _columns?: GluePartitionStorageDescriptorColumns[] | undefined; 
  public get columns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('columns') as any;
  }
  public set columns(value: GluePartitionStorageDescriptorColumns[] | undefined) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns
  }

  // ser_de_info - computed: false, optional: true, required: false
  private _serDeInfo?: GluePartitionStorageDescriptorSerDeInfo | undefined; 
  private __serDeInfoOutput = new GluePartitionStorageDescriptorSerDeInfoOutputReference(this as any, "ser_de_info", true);
  public get serDeInfo() {
    return this.__serDeInfoOutput;
  }
  public putSerDeInfo(value: GluePartitionStorageDescriptorSerDeInfo | undefined) {
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
  private _skewedInfo?: GluePartitionStorageDescriptorSkewedInfo | undefined; 
  private __skewedInfoOutput = new GluePartitionStorageDescriptorSkewedInfoOutputReference(this as any, "skewed_info", true);
  public get skewedInfo() {
    return this.__skewedInfoOutput;
  }
  public putSkewedInfo(value: GluePartitionStorageDescriptorSkewedInfo | undefined) {
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
  private _sortColumns?: GluePartitionStorageDescriptorSortColumns[] | undefined; 
  public get sortColumns() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sort_columns') as any;
  }
  public set sortColumns(value: GluePartitionStorageDescriptorSortColumns[] | undefined) {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition}
*/
export class GluePartition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_partition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_partition.html aws_glue_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GluePartitionConfig
  */
  public constructor(scope: Construct, id: string, config: GluePartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_partition',
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
    this._parameters = config.parameters;
    this._partitionValues = config.partitionValues;
    this._tableName = config.tableName;
    this._storageDescriptor = config.storageDescriptor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_accessed_time - computed: true, optional: false, required: false
  public get lastAccessedTime() {
    return this.getStringAttribute('last_accessed_time');
  }

  // last_analyzed_time - computed: true, optional: false, required: false
  public get lastAnalyzedTime() {
    return this.getStringAttribute('last_analyzed_time');
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

  // partition_values - computed: false, optional: false, required: true
  private _partitionValues?: string[]; 
  public get partitionValues() {
    return this.getListAttribute('partition_values');
  }
  public set partitionValues(value: string[]) {
    this._partitionValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionValuesInput() {
    return this._partitionValues
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

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor?: GluePartitionStorageDescriptor | undefined; 
  private __storageDescriptorOutput = new GluePartitionStorageDescriptorOutputReference(this as any, "storage_descriptor", true);
  public get storageDescriptor() {
    return this.__storageDescriptorOutput;
  }
  public putStorageDescriptor(value: GluePartitionStorageDescriptor | undefined) {
    this._storageDescriptor = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      database_name: cdktf.stringToTerraform(this._databaseName),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      partition_values: cdktf.listMapper(cdktf.stringToTerraform)(this._partitionValues),
      table_name: cdktf.stringToTerraform(this._tableName),
      storage_descriptor: gluePartitionStorageDescriptorToTerraform(this._storageDescriptor),
    };
  }
}
