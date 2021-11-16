// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lake Formation
*/
export interface DataAwsLakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_resource DataAwsLakeformationPermissions#catalog_resource}
  */
  readonly catalogResource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#principal DataAwsLakeformationPermissions#principal}
  */
  readonly principal: string;
  /**
  * data_location block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#data_location DataAwsLakeformationPermissions#data_location}
  */
  readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation;
  /**
  * database block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
  */
  readonly database?: DataAwsLakeformationPermissionsDatabase;
  /**
  * table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
  */
  readonly table?: DataAwsLakeformationPermissionsTable;
  /**
  * table_with_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
  */
  readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns;
}
export interface DataAwsLakeformationPermissionsDataLocation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#arn DataAwsLakeformationPermissions#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
}

export function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocationOutputReference | DataAwsLakeformationPermissionsDataLocation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
  }
}

export class DataAwsLakeformationPermissionsDataLocationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn
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
}
export interface DataAwsLakeformationPermissionsDatabase {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
  readonly name: string;
}

export function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabaseOutputReference | DataAwsLakeformationPermissionsDatabase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataAwsLakeformationPermissionsDatabaseOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
export interface DataAwsLakeformationPermissionsTable {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTableOutputReference | DataAwsLakeformationPermissionsTable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}

export class DataAwsLakeformationPermissionsTableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable | undefined; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard') as any;
  }
  public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard
  }
}
export interface DataAwsLakeformationPermissionsTableWithColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#catalog_id DataAwsLakeformationPermissions#catalog_id}
  */
  readonly catalogId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#column_names DataAwsLakeformationPermissions#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database_name DataAwsLakeformationPermissions#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#excluded_column_names DataAwsLakeformationPermissions#excluded_column_names}
  */
  readonly excludedColumnNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#name DataAwsLakeformationPermissions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#wildcard DataAwsLakeformationPermissions#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}

export function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumnsOutputReference | DataAwsLakeformationPermissionsTableWithColumns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
    name: cdktf.stringToTerraform(struct!.name),
    wildcard: cdktf.booleanToTerraform(struct!.wildcard),
  }
}

export class DataAwsLakeformationPermissionsTableWithColumnsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // column_names - computed: false, optional: true, required: false
  private _columnNames?: string[] | undefined; 
  public get columnNames() {
    return this.getListAttribute('column_names');
  }
  public set columnNames(value: string[] | undefined) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames
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

  // excluded_column_names - computed: false, optional: true, required: false
  private _excludedColumnNames?: string[] | undefined; 
  public get excludedColumnNames() {
    return this.getListAttribute('excluded_column_names');
  }
  public set excludedColumnNames(value: string[] | undefined) {
    this._excludedColumnNames = value;
  }
  public resetExcludedColumnNames() {
    this._excludedColumnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedColumnNamesInput() {
    return this._excludedColumnNames
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

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable | undefined; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard') as any;
  }
  public set wildcard(value: boolean | cdktf.IResolvable | undefined) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions}
*/
export class DataAwsLakeformationPermissions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lakeformation_permissions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html aws_lakeformation_permissions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLakeformationPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLakeformationPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lakeformation_permissions',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._catalogId = config.catalogId;
    this._catalogResource = config.catalogResource;
    this._principal = config.principal;
    this._dataLocation = config.dataLocation;
    this._database = config.database;
    this._table = config.table;
    this._tableWithColumns = config.tableWithColumns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: true, required: false
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

  // catalog_resource - computed: false, optional: true, required: false
  private _catalogResource?: boolean | cdktf.IResolvable | undefined; 
  public get catalogResource() {
    return this.getBooleanAttribute('catalog_resource') as any;
  }
  public set catalogResource(value: boolean | cdktf.IResolvable | undefined) {
    this._catalogResource = value;
  }
  public resetCatalogResource() {
    this._catalogResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogResourceInput() {
    return this._catalogResource
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getListAttribute('permissions');
  }

  // permissions_with_grant_option - computed: true, optional: false, required: false
  public get permissionsWithGrantOption() {
    return this.getListAttribute('permissions_with_grant_option');
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal
  }

  // data_location - computed: false, optional: true, required: false
  private _dataLocation?: DataAwsLakeformationPermissionsDataLocation | undefined; 
  private __dataLocationOutput = new DataAwsLakeformationPermissionsDataLocationOutputReference(this as any, "data_location", true);
  public get dataLocation() {
    return this.__dataLocationOutput;
  }
  public putDataLocation(value: DataAwsLakeformationPermissionsDataLocation | undefined) {
    this._dataLocation = value;
  }
  public resetDataLocation() {
    this._dataLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLocationInput() {
    return this._dataLocation
  }

  // database - computed: false, optional: true, required: false
  private _database?: DataAwsLakeformationPermissionsDatabase | undefined; 
  private __databaseOutput = new DataAwsLakeformationPermissionsDatabaseOutputReference(this as any, "database", true);
  public get database() {
    return this.__databaseOutput;
  }
  public putDatabase(value: DataAwsLakeformationPermissionsDatabase | undefined) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // table - computed: false, optional: true, required: false
  private _table?: DataAwsLakeformationPermissionsTable | undefined; 
  private __tableOutput = new DataAwsLakeformationPermissionsTableOutputReference(this as any, "table", true);
  public get table() {
    return this.__tableOutput;
  }
  public putTable(value: DataAwsLakeformationPermissionsTable | undefined) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table
  }

  // table_with_columns - computed: false, optional: true, required: false
  private _tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns | undefined; 
  private __tableWithColumnsOutput = new DataAwsLakeformationPermissionsTableWithColumnsOutputReference(this as any, "table_with_columns", true);
  public get tableWithColumns() {
    return this.__tableWithColumnsOutput;
  }
  public putTableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns | undefined) {
    this._tableWithColumns = value;
  }
  public resetTableWithColumns() {
    this._tableWithColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableWithColumnsInput() {
    return this._tableWithColumns
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      catalog_resource: cdktf.booleanToTerraform(this._catalogResource),
      principal: cdktf.stringToTerraform(this._principal),
      data_location: dataAwsLakeformationPermissionsDataLocationToTerraform(this._dataLocation),
      database: dataAwsLakeformationPermissionsDatabaseToTerraform(this._database),
      table: dataAwsLakeformationPermissionsTableToTerraform(this._table),
      table_with_columns: dataAwsLakeformationPermissionsTableWithColumnsToTerraform(this._tableWithColumns),
    };
  }
}
