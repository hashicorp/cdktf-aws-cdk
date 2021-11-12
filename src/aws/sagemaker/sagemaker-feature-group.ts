// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#description SagemakerFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_group_name SagemakerFeatureGroup#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#role_arn SagemakerFeatureGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags SagemakerFeatureGroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#tags_all SagemakerFeatureGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * feature_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_definition SagemakerFeatureGroup#feature_definition}
  */
  readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[];
  /**
  * offline_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#offline_store_config SagemakerFeatureGroup#offline_store_config}
  */
  readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
  /**
  * online_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#online_store_config SagemakerFeatureGroup#online_store_config}
  */
  readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
}
export interface SagemakerFeatureGroupFeatureDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_name SagemakerFeatureGroup#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#feature_type SagemakerFeatureGroup#feature_type}
  */
  readonly featureType?: string;
}

export function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
}

export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#catalog SagemakerFeatureGroup#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#database SagemakerFeatureGroup#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#table_name SagemakerFeatureGroup#table_name}
  */
  readonly tableName?: string;
}

export function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}

export class SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string | undefined; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string | undefined) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog
  }

  // database - computed: true, optional: true, required: false
  private _database?: string | undefined; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string | undefined) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string | undefined; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string | undefined) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName
  }
}
export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_uri SagemakerFeatureGroup#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string | undefined; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri
  }
}
export interface SagemakerFeatureGroupOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
  /**
  * data_catalog_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
  */
  readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
  /**
  * s3_storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
  */
  readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}

export function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    data_catalog_config: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    s3_storage_config: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
}

export class SagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disable_glue_table_creation - computed: false, optional: true, required: false
  private _disableGlueTableCreation?: boolean | cdktf.IResolvable | undefined; 
  public get disableGlueTableCreation() {
    return this.getBooleanAttribute('disable_glue_table_creation') as any;
  }
  public set disableGlueTableCreation(value: boolean | cdktf.IResolvable | undefined) {
    this._disableGlueTableCreation = value;
  }
  public resetDisableGlueTableCreation() {
    this._disableGlueTableCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGlueTableCreationInput() {
    return this._disableGlueTableCreation
  }

  // data_catalog_config - computed: false, optional: true, required: false
  private _dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined; 
  private __dataCatalogConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(this as any, "data_catalog_config", true);
  public get dataCatalogConfig() {
    return this.__dataCatalogConfigOutput;
  }
  public putDataCatalogConfig(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined) {
    this._dataCatalogConfig = value;
  }
  public resetDataCatalogConfig() {
    this._dataCatalogConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogConfigInput() {
    return this._dataCatalogConfig
  }

  // s3_storage_config - computed: false, optional: false, required: true
  private _s3StorageConfig?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig; 
  private __s3StorageConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(this as any, "s3_storage_config", true);
  public get s3StorageConfig() {
    return this.__s3StorageConfigOutput;
  }
  public putS3StorageConfig(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig) {
    this._s3StorageConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageConfigInput() {
    return this._s3StorageConfig
  }
}
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string | undefined; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }
}
export interface SagemakerFeatureGroupOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#enable_online_store SagemakerFeatureGroup#enable_online_store}
  */
  readonly enableOnlineStore?: boolean | cdktf.IResolvable;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html#security_config SagemakerFeatureGroup#security_config}
  */
  readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
}

export function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
  }
}

export class SagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_online_store - computed: false, optional: true, required: false
  private _enableOnlineStore?: boolean | cdktf.IResolvable | undefined; 
  public get enableOnlineStore() {
    return this.getBooleanAttribute('enable_online_store') as any;
  }
  public set enableOnlineStore(value: boolean | cdktf.IResolvable | undefined) {
    this._enableOnlineStore = value;
  }
  public resetEnableOnlineStore() {
    this._enableOnlineStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineStoreInput() {
    return this._enableOnlineStore
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined; 
  private __securityConfigOutput = new SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(this as any, "security_config", true);
  public get securityConfig() {
    return this.__securityConfigOutput;
  }
  public putSecurityConfig(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined) {
    this._securityConfig = value;
  }
  public resetSecurityConfig() {
    this._securityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group}
*/
export class SagemakerFeatureGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_feature_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group.html aws_sagemaker_feature_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_feature_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._eventTimeFeatureName = config.eventTimeFeatureName;
    this._featureGroupName = config.featureGroupName;
    this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._featureDefinition = config.featureDefinition;
    this._offlineStoreConfig = config.offlineStoreConfig;
    this._onlineStoreConfig = config.onlineStoreConfig;
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

  // event_time_feature_name - computed: false, optional: false, required: true
  private _eventTimeFeatureName?: string; 
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }
  public set eventTimeFeatureName(value: string) {
    this._eventTimeFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeFeatureNameInput() {
    return this._eventTimeFeatureName
  }

  // feature_group_name - computed: false, optional: false, required: true
  private _featureGroupName?: string; 
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // record_identifier_feature_name - computed: false, optional: false, required: true
  private _recordIdentifierFeatureName?: string; 
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }
  public set recordIdentifierFeatureName(value: string) {
    this._recordIdentifierFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdentifierFeatureNameInput() {
    return this._recordIdentifierFeatureName
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

  // feature_definition - computed: false, optional: false, required: true
  private _featureDefinition?: SagemakerFeatureGroupFeatureDefinition[]; 
  public get featureDefinition() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('feature_definition') as any;
  }
  public set featureDefinition(value: SagemakerFeatureGroupFeatureDefinition[]) {
    this._featureDefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDefinitionInput() {
    return this._featureDefinition
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig | undefined; 
  private __offlineStoreConfigOutput = new SagemakerFeatureGroupOfflineStoreConfigOutputReference(this as any, "offline_store_config", true);
  public get offlineStoreConfig() {
    return this.__offlineStoreConfigOutput;
  }
  public putOfflineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig | undefined) {
    this._offlineStoreConfig = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig | undefined; 
  private __onlineStoreConfigOutput = new SagemakerFeatureGroupOnlineStoreConfigOutputReference(this as any, "online_store_config", true);
  public get onlineStoreConfig() {
    return this.__onlineStoreConfigOutput;
  }
  public putOnlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig | undefined) {
    this._onlineStoreConfig = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
      feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
      record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      feature_definition: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionToTerraform)(this._featureDefinition),
      offline_store_config: sagemakerFeatureGroupOfflineStoreConfigToTerraform(this._offlineStoreConfig),
      online_store_config: sagemakerFeatureGroupOnlineStoreConfigToTerraform(this._onlineStoreConfig),
    };
  }
}
