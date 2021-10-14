// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Lake Formation
*/
export namespace LakeFormation {
  export interface LakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#admins LakeformationDataLakeSettings#admins}
    */
    readonly admins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#catalog_id LakeformationDataLakeSettings#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#trusted_resource_owners LakeformationDataLakeSettings#trusted_resource_owners}
    */
    readonly trustedResourceOwners?: string[];
    /**
    * create_database_default_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_database_default_permissions LakeformationDataLakeSettings#create_database_default_permissions}
    */
    readonly createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
    /**
    * create_table_default_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#create_table_default_permissions LakeformationDataLakeSettings#create_table_default_permissions}
    */
    readonly createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
  }
  export interface LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
  }

  function lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
      principal: cdktf.stringToTerraform(struct!.principal),
    }
  }

  export interface LakeformationDataLakeSettingsCreateTableDefaultPermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#permissions LakeformationDataLakeSettings#permissions}
    */
    readonly permissions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html#principal LakeformationDataLakeSettings#principal}
    */
    readonly principal?: string;
  }

  function lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform(struct?: LakeformationDataLakeSettingsCreateTableDefaultPermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.permissions),
      principal: cdktf.stringToTerraform(struct!.principal),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
  */
  export class LakeformationDataLakeSettings extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_data_lake_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationDataLakeSettingsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: LakeformationDataLakeSettingsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_data_lake_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._admins = config.admins;
      this._catalogId = config.catalogId;
      this._trustedResourceOwners = config.trustedResourceOwners;
      this._createDatabaseDefaultPermissions = config.createDatabaseDefaultPermissions;
      this._createTableDefaultPermissions = config.createTableDefaultPermissions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admins - computed: true, optional: true, required: false
    private _admins?: string[];
    public get admins() {
      return this.getListAttribute('admins');
    }
    public set admins(value: string[]) {
      this._admins = value;
    }
    public resetAdmins() {
      this._admins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adminsInput() {
      return this._admins
    }

    // catalog_id - computed: false, optional: true, required: false
    private _catalogId?: string;
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string ) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // trusted_resource_owners - computed: true, optional: true, required: false
    private _trustedResourceOwners?: string[];
    public get trustedResourceOwners() {
      return this.getListAttribute('trusted_resource_owners');
    }
    public set trustedResourceOwners(value: string[]) {
      this._trustedResourceOwners = value;
    }
    public resetTrustedResourceOwners() {
      this._trustedResourceOwners = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trustedResourceOwnersInput() {
      return this._trustedResourceOwners
    }

    // create_database_default_permissions - computed: false, optional: true, required: false
    private _createDatabaseDefaultPermissions?: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[];
    public get createDatabaseDefaultPermissions() {
      return this.interpolationForAttribute('create_database_default_permissions') as any;
    }
    public set createDatabaseDefaultPermissions(value: LakeformationDataLakeSettingsCreateDatabaseDefaultPermissions[] ) {
      this._createDatabaseDefaultPermissions = value;
    }
    public resetCreateDatabaseDefaultPermissions() {
      this._createDatabaseDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDatabaseDefaultPermissionsInput() {
      return this._createDatabaseDefaultPermissions
    }

    // create_table_default_permissions - computed: false, optional: true, required: false
    private _createTableDefaultPermissions?: LakeformationDataLakeSettingsCreateTableDefaultPermissions[];
    public get createTableDefaultPermissions() {
      return this.interpolationForAttribute('create_table_default_permissions') as any;
    }
    public set createTableDefaultPermissions(value: LakeformationDataLakeSettingsCreateTableDefaultPermissions[] ) {
      this._createTableDefaultPermissions = value;
    }
    public resetCreateTableDefaultPermissions() {
      this._createTableDefaultPermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTableDefaultPermissionsInput() {
      return this._createTableDefaultPermissions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        admins: cdktf.listMapper(cdktf.stringToTerraform)(this._admins),
        catalog_id: cdktf.stringToTerraform(this._catalogId),
        trusted_resource_owners: cdktf.listMapper(cdktf.stringToTerraform)(this._trustedResourceOwners),
        create_database_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateDatabaseDefaultPermissionsToTerraform)(this._createDatabaseDefaultPermissions),
        create_table_default_permissions: cdktf.listMapper(lakeformationDataLakeSettingsCreateTableDefaultPermissionsToTerraform)(this._createTableDefaultPermissions),
      };
    }
  }
  export interface LakeformationPermissionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_resource LakeformationPermissions#catalog_resource}
    */
    readonly catalogResource?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions LakeformationPermissions#permissions}
    */
    readonly permissions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#permissions_with_grant_option LakeformationPermissions#permissions_with_grant_option}
    */
    readonly permissionsWithGrantOption?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#principal LakeformationPermissions#principal}
    */
    readonly principal: string;
    /**
    * data_location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#data_location LakeformationPermissions#data_location}
    */
    readonly dataLocation?: LakeformationPermissionsDataLocation[];
    /**
    * database block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database LakeformationPermissions#database}
    */
    readonly database?: LakeformationPermissionsDatabase[];
    /**
    * table block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table LakeformationPermissions#table}
    */
    readonly table?: LakeformationPermissionsTable[];
    /**
    * table_with_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#table_with_columns LakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: LakeformationPermissionsTableWithColumns[];
  }
  export interface LakeformationPermissionsDataLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#arn LakeformationPermissions#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
  }

  function lakeformationPermissionsDataLocationToTerraform(struct?: LakeformationPermissionsDataLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
    }
  }

  export interface LakeformationPermissionsDatabase {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
  }

  function lakeformationPermissionsDatabaseToTerraform(struct?: LakeformationPermissionsDatabase): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      name: cdktf.stringToTerraform(struct!.name),
    }
  }

  export interface LakeformationPermissionsTable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
  }

  function lakeformationPermissionsTableToTerraform(struct?: LakeformationPermissionsTable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }

  export interface LakeformationPermissionsTableWithColumns {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#catalog_id LakeformationPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#column_names LakeformationPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#database_name LakeformationPermissions#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#excluded_column_names LakeformationPermissions#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#name LakeformationPermissions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html#wildcard LakeformationPermissions#wildcard}
    */
    readonly wildcard?: boolean | cdktf.IResolvable;
  }

  function lakeformationPermissionsTableWithColumnsToTerraform(struct?: LakeformationPermissionsTableWithColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions}
  */
  export class LakeformationPermissions extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_permissions";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_permissions.html aws_lakeformation_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationPermissionsConfig
    */
    public constructor(scope: Construct, id: string, config: LakeformationPermissionsConfig) {
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
      this._permissions = config.permissions;
      this._permissionsWithGrantOption = config.permissionsWithGrantOption;
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
    private _catalogId?: string;
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string ) {
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
    private _catalogResource?: boolean | cdktf.IResolvable;
    public get catalogResource() {
      return this.getBooleanAttribute('catalog_resource');
    }
    public set catalogResource(value: boolean | cdktf.IResolvable ) {
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

    // permissions - computed: false, optional: false, required: true
    private _permissions: string[];
    public get permissions() {
      return this.getListAttribute('permissions');
    }
    public set permissions(value: string[]) {
      this._permissions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
      return this._permissions
    }

    // permissions_with_grant_option - computed: true, optional: true, required: false
    private _permissionsWithGrantOption?: string[];
    public get permissionsWithGrantOption() {
      return this.getListAttribute('permissions_with_grant_option');
    }
    public set permissionsWithGrantOption(value: string[]) {
      this._permissionsWithGrantOption = value;
    }
    public resetPermissionsWithGrantOption() {
      this._permissionsWithGrantOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsWithGrantOptionInput() {
      return this._permissionsWithGrantOption
    }

    // principal - computed: false, optional: false, required: true
    private _principal: string;
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
    private _dataLocation?: LakeformationPermissionsDataLocation[];
    public get dataLocation() {
      return this.interpolationForAttribute('data_location') as any;
    }
    public set dataLocation(value: LakeformationPermissionsDataLocation[] ) {
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
    private _database?: LakeformationPermissionsDatabase[];
    public get database() {
      return this.interpolationForAttribute('database') as any;
    }
    public set database(value: LakeformationPermissionsDatabase[] ) {
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
    private _table?: LakeformationPermissionsTable[];
    public get table() {
      return this.interpolationForAttribute('table') as any;
    }
    public set table(value: LakeformationPermissionsTable[] ) {
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
    private _tableWithColumns?: LakeformationPermissionsTableWithColumns[];
    public get tableWithColumns() {
      return this.interpolationForAttribute('table_with_columns') as any;
    }
    public set tableWithColumns(value: LakeformationPermissionsTableWithColumns[] ) {
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
        permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._permissions),
        permissions_with_grant_option: cdktf.listMapper(cdktf.stringToTerraform)(this._permissionsWithGrantOption),
        principal: cdktf.stringToTerraform(this._principal),
        data_location: cdktf.listMapper(lakeformationPermissionsDataLocationToTerraform)(this._dataLocation),
        database: cdktf.listMapper(lakeformationPermissionsDatabaseToTerraform)(this._database),
        table: cdktf.listMapper(lakeformationPermissionsTableToTerraform)(this._table),
        table_with_columns: cdktf.listMapper(lakeformationPermissionsTableWithColumnsToTerraform)(this._tableWithColumns),
      };
    }
  }
  export interface LakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#arn LakeformationResource#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html#role_arn LakeformationResource#role_arn}
    */
    readonly roleArn?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource}
  */
  export class LakeformationResource extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lakeformation_resource.html aws_lakeformation_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LakeformationResourceConfig
    */
    public constructor(scope: Construct, id: string, config: LakeformationResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._roleArn = config.roleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn: string;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string;
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        role_arn: cdktf.stringToTerraform(this._roleArn),
      };
    }
  }
  export interface DataAwsLakeformationDataLakeSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html#catalog_id DataAwsLakeformationDataLakeSettings#catalog_id}
    */
    readonly catalogId?: string;
  }
  export class DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions extends cdktf.ComplexComputedList {

    // permissions - computed: true, optional: false, required: false
    public get permissions() {
      return this.getListAttribute('permissions');
    }

    // principal - computed: true, optional: false, required: false
    public get principal() {
      return this.getStringAttribute('principal');
    }
  }
  export class DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions extends cdktf.ComplexComputedList {

    // permissions - computed: true, optional: false, required: false
    public get permissions() {
      return this.getListAttribute('permissions');
    }

    // principal - computed: true, optional: false, required: false
    public get principal() {
      return this.getStringAttribute('principal');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings}
  */
  export class DataAwsLakeformationDataLakeSettings extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_data_lake_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_data_lake_settings.html aws_lakeformation_data_lake_settings} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationDataLakeSettingsConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsLakeformationDataLakeSettingsConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_data_lake_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._catalogId = config.catalogId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // admins - computed: true, optional: false, required: false
    public get admins() {
      return this.getListAttribute('admins');
    }

    // catalog_id - computed: false, optional: true, required: false
    private _catalogId?: string;
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string ) {
      this._catalogId = value;
    }
    public resetCatalogId() {
      this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
      return this._catalogId
    }

    // create_database_default_permissions - computed: true, optional: false, required: false
    public createDatabaseDefaultPermissions(index: string) {
      return new DataAwsLakeformationDataLakeSettingsCreateDatabaseDefaultPermissions(this, 'create_database_default_permissions', index);
    }

    // create_table_default_permissions - computed: true, optional: false, required: false
    public createTableDefaultPermissions(index: string) {
      return new DataAwsLakeformationDataLakeSettingsCreateTableDefaultPermissions(this, 'create_table_default_permissions', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // trusted_resource_owners - computed: true, optional: false, required: false
    public get trustedResourceOwners() {
      return this.getListAttribute('trusted_resource_owners');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        catalog_id: cdktf.stringToTerraform(this._catalogId),
      };
    }
  }
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
    readonly dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
    /**
    * database block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#database DataAwsLakeformationPermissions#database}
    */
    readonly database?: DataAwsLakeformationPermissionsDatabase[];
    /**
    * table block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table DataAwsLakeformationPermissions#table}
    */
    readonly table?: DataAwsLakeformationPermissionsTable[];
    /**
    * table_with_columns block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_permissions.html#table_with_columns DataAwsLakeformationPermissions#table_with_columns}
    */
    readonly tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
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

  function dataAwsLakeformationPermissionsDataLocationToTerraform(struct?: DataAwsLakeformationPermissionsDataLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
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

  function dataAwsLakeformationPermissionsDatabaseToTerraform(struct?: DataAwsLakeformationPermissionsDatabase): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      name: cdktf.stringToTerraform(struct!.name),
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

  function dataAwsLakeformationPermissionsTableToTerraform(struct?: DataAwsLakeformationPermissionsTable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
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

  function dataAwsLakeformationPermissionsTableWithColumnsToTerraform(struct?: DataAwsLakeformationPermissionsTableWithColumns): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      catalog_id: cdktf.stringToTerraform(struct!.catalogId),
      column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.columnNames),
      database_name: cdktf.stringToTerraform(struct!.databaseName),
      excluded_column_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludedColumnNames),
      name: cdktf.stringToTerraform(struct!.name),
      wildcard: cdktf.booleanToTerraform(struct!.wildcard),
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
    private _catalogId?: string;
    public get catalogId() {
      return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string ) {
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
    private _catalogResource?: boolean | cdktf.IResolvable;
    public get catalogResource() {
      return this.getBooleanAttribute('catalog_resource');
    }
    public set catalogResource(value: boolean | cdktf.IResolvable ) {
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
    private _principal: string;
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
    private _dataLocation?: DataAwsLakeformationPermissionsDataLocation[];
    public get dataLocation() {
      return this.interpolationForAttribute('data_location') as any;
    }
    public set dataLocation(value: DataAwsLakeformationPermissionsDataLocation[] ) {
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
    private _database?: DataAwsLakeformationPermissionsDatabase[];
    public get database() {
      return this.interpolationForAttribute('database') as any;
    }
    public set database(value: DataAwsLakeformationPermissionsDatabase[] ) {
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
    private _table?: DataAwsLakeformationPermissionsTable[];
    public get table() {
      return this.interpolationForAttribute('table') as any;
    }
    public set table(value: DataAwsLakeformationPermissionsTable[] ) {
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
    private _tableWithColumns?: DataAwsLakeformationPermissionsTableWithColumns[];
    public get tableWithColumns() {
      return this.interpolationForAttribute('table_with_columns') as any;
    }
    public set tableWithColumns(value: DataAwsLakeformationPermissionsTableWithColumns[] ) {
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
        data_location: cdktf.listMapper(dataAwsLakeformationPermissionsDataLocationToTerraform)(this._dataLocation),
        database: cdktf.listMapper(dataAwsLakeformationPermissionsDatabaseToTerraform)(this._database),
        table: cdktf.listMapper(dataAwsLakeformationPermissionsTableToTerraform)(this._table),
        table_with_columns: cdktf.listMapper(dataAwsLakeformationPermissionsTableWithColumnsToTerraform)(this._tableWithColumns),
      };
    }
  }
  export interface DataAwsLakeformationResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html#arn DataAwsLakeformationResource#arn}
    */
    readonly arn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource}
  */
  export class DataAwsLakeformationResource extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lakeformation_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lakeformation_resource.html aws_lakeformation_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLakeformationResourceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsLakeformationResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lakeformation_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn: string;
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

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_modified - computed: true, optional: false, required: false
    public get lastModified() {
      return this.getStringAttribute('last_modified');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
      };
    }
  }
}
