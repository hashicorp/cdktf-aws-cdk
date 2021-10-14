// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS File System FSx
*/
export namespace FSx {
  export interface FsxBackupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#file_system_id FsxBackup#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#tags FsxBackup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#tags_all FsxBackup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#timeouts FsxBackup#timeouts}
    */
    readonly timeouts?: FsxBackupTimeouts;
  }
  export interface FsxBackupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#create FsxBackup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html#delete FsxBackup#delete}
    */
    readonly delete?: string;
  }

  function fsxBackupTimeoutsToTerraform(struct?: FsxBackupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html aws_fsx_backup}
  */
  export class FsxBackup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_fsx_backup";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_backup.html aws_fsx_backup} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxBackupConfig
    */
    public constructor(scope: Construct, id: string, config: FsxBackupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_fsx_backup',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._fileSystemId = config.fileSystemId;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // file_system_id - computed: false, optional: false, required: true
    private _fileSystemId: string;
    public get fileSystemId() {
      return this.getStringAttribute('file_system_id');
    }
    public set fileSystemId(value: string) {
      this._fileSystemId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemIdInput() {
      return this._fileSystemId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable
    public get tags(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: FsxBackupTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: FsxBackupTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        file_system_id: cdktf.stringToTerraform(this._fileSystemId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        timeouts: fsxBackupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface FsxLustreFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#auto_import_policy FsxLustreFileSystem#auto_import_policy}
    */
    readonly autoImportPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#automatic_backup_retention_days FsxLustreFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#backup_id FsxLustreFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#copy_tags_to_backups FsxLustreFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#daily_automatic_backup_start_time FsxLustreFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#data_compression_type FsxLustreFileSystem#data_compression_type}
    */
    readonly dataCompressionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#deployment_type FsxLustreFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#drive_cache_type FsxLustreFileSystem#drive_cache_type}
    */
    readonly driveCacheType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#export_path FsxLustreFileSystem#export_path}
    */
    readonly exportPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#import_path FsxLustreFileSystem#import_path}
    */
    readonly importPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#imported_file_chunk_size FsxLustreFileSystem#imported_file_chunk_size}
    */
    readonly importedFileChunkSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#kms_key_id FsxLustreFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#per_unit_storage_throughput FsxLustreFileSystem#per_unit_storage_throughput}
    */
    readonly perUnitStorageThroughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#security_group_ids FsxLustreFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_capacity FsxLustreFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#storage_type FsxLustreFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#subnet_ids FsxLustreFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags FsxLustreFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#tags_all FsxLustreFileSystem#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#weekly_maintenance_start_time FsxLustreFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#timeouts FsxLustreFileSystem#timeouts}
    */
    readonly timeouts?: FsxLustreFileSystemTimeouts;
  }
  export interface FsxLustreFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#create FsxLustreFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#delete FsxLustreFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html#update FsxLustreFileSystem#update}
    */
    readonly update?: string;
  }

  function fsxLustreFileSystemTimeoutsToTerraform(struct?: FsxLustreFileSystemTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system}
  */
  export class FsxLustreFileSystem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_fsx_lustre_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_lustre_file_system.html aws_fsx_lustre_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxLustreFileSystemConfig
    */
    public constructor(scope: Construct, id: string, config: FsxLustreFileSystemConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_fsx_lustre_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._autoImportPolicy = config.autoImportPolicy;
      this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
      this._backupId = config.backupId;
      this._copyTagsToBackups = config.copyTagsToBackups;
      this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
      this._dataCompressionType = config.dataCompressionType;
      this._deploymentType = config.deploymentType;
      this._driveCacheType = config.driveCacheType;
      this._exportPath = config.exportPath;
      this._importPath = config.importPath;
      this._importedFileChunkSize = config.importedFileChunkSize;
      this._kmsKeyId = config.kmsKeyId;
      this._perUnitStorageThroughput = config.perUnitStorageThroughput;
      this._securityGroupIds = config.securityGroupIds;
      this._storageCapacity = config.storageCapacity;
      this._storageType = config.storageType;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auto_import_policy - computed: true, optional: true, required: false
    private _autoImportPolicy?: string;
    public get autoImportPolicy() {
      return this.getStringAttribute('auto_import_policy');
    }
    public set autoImportPolicy(value: string) {
      this._autoImportPolicy = value;
    }
    public resetAutoImportPolicy() {
      this._autoImportPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoImportPolicyInput() {
      return this._autoImportPolicy
    }

    // automatic_backup_retention_days - computed: true, optional: true, required: false
    private _automaticBackupRetentionDays?: number;
    public get automaticBackupRetentionDays() {
      return this.getNumberAttribute('automatic_backup_retention_days');
    }
    public set automaticBackupRetentionDays(value: number) {
      this._automaticBackupRetentionDays = value;
    }
    public resetAutomaticBackupRetentionDays() {
      this._automaticBackupRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupRetentionDaysInput() {
      return this._automaticBackupRetentionDays
    }

    // backup_id - computed: false, optional: true, required: false
    private _backupId?: string;
    public get backupId() {
      return this.getStringAttribute('backup_id');
    }
    public set backupId(value: string ) {
      this._backupId = value;
    }
    public resetBackupId() {
      this._backupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupIdInput() {
      return this._backupId
    }

    // copy_tags_to_backups - computed: false, optional: true, required: false
    private _copyTagsToBackups?: boolean | cdktf.IResolvable;
    public get copyTagsToBackups() {
      return this.getBooleanAttribute('copy_tags_to_backups');
    }
    public set copyTagsToBackups(value: boolean | cdktf.IResolvable ) {
      this._copyTagsToBackups = value;
    }
    public resetCopyTagsToBackups() {
      this._copyTagsToBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToBackupsInput() {
      return this._copyTagsToBackups
    }

    // daily_automatic_backup_start_time - computed: true, optional: true, required: false
    private _dailyAutomaticBackupStartTime?: string;
    public get dailyAutomaticBackupStartTime() {
      return this.getStringAttribute('daily_automatic_backup_start_time');
    }
    public set dailyAutomaticBackupStartTime(value: string) {
      this._dailyAutomaticBackupStartTime = value;
    }
    public resetDailyAutomaticBackupStartTime() {
      this._dailyAutomaticBackupStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyAutomaticBackupStartTimeInput() {
      return this._dailyAutomaticBackupStartTime
    }

    // data_compression_type - computed: false, optional: true, required: false
    private _dataCompressionType?: string;
    public get dataCompressionType() {
      return this.getStringAttribute('data_compression_type');
    }
    public set dataCompressionType(value: string ) {
      this._dataCompressionType = value;
    }
    public resetDataCompressionType() {
      this._dataCompressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCompressionTypeInput() {
      return this._dataCompressionType
    }

    // deployment_type - computed: false, optional: true, required: false
    private _deploymentType?: string;
    public get deploymentType() {
      return this.getStringAttribute('deployment_type');
    }
    public set deploymentType(value: string ) {
      this._deploymentType = value;
    }
    public resetDeploymentType() {
      this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTypeInput() {
      return this._deploymentType
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // drive_cache_type - computed: false, optional: true, required: false
    private _driveCacheType?: string;
    public get driveCacheType() {
      return this.getStringAttribute('drive_cache_type');
    }
    public set driveCacheType(value: string ) {
      this._driveCacheType = value;
    }
    public resetDriveCacheType() {
      this._driveCacheType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driveCacheTypeInput() {
      return this._driveCacheType
    }

    // export_path - computed: true, optional: true, required: false
    private _exportPath?: string;
    public get exportPath() {
      return this.getStringAttribute('export_path');
    }
    public set exportPath(value: string) {
      this._exportPath = value;
    }
    public resetExportPath() {
      this._exportPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportPathInput() {
      return this._exportPath
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // import_path - computed: false, optional: true, required: false
    private _importPath?: string;
    public get importPath() {
      return this.getStringAttribute('import_path');
    }
    public set importPath(value: string ) {
      this._importPath = value;
    }
    public resetImportPath() {
      this._importPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importPathInput() {
      return this._importPath
    }

    // imported_file_chunk_size - computed: true, optional: true, required: false
    private _importedFileChunkSize?: number;
    public get importedFileChunkSize() {
      return this.getNumberAttribute('imported_file_chunk_size');
    }
    public set importedFileChunkSize(value: number) {
      this._importedFileChunkSize = value;
    }
    public resetImportedFileChunkSize() {
      this._importedFileChunkSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importedFileChunkSizeInput() {
      return this._importedFileChunkSize
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string;
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // mount_name - computed: true, optional: false, required: false
    public get mountName() {
      return this.getStringAttribute('mount_name');
    }

    // network_interface_ids - computed: true, optional: false, required: false
    public get networkInterfaceIds() {
      return this.getListAttribute('network_interface_ids');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // per_unit_storage_throughput - computed: false, optional: true, required: false
    private _perUnitStorageThroughput?: number;
    public get perUnitStorageThroughput() {
      return this.getNumberAttribute('per_unit_storage_throughput');
    }
    public set perUnitStorageThroughput(value: number ) {
      this._perUnitStorageThroughput = value;
    }
    public resetPerUnitStorageThroughput() {
      this._perUnitStorageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perUnitStorageThroughputInput() {
      return this._perUnitStorageThroughput
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[];
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] ) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // storage_capacity - computed: false, optional: true, required: false
    private _storageCapacity?: number;
    public get storageCapacity() {
      return this.getNumberAttribute('storage_capacity');
    }
    public set storageCapacity(value: number ) {
      this._storageCapacity = value;
    }
    public resetStorageCapacity() {
      this._storageCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityInput() {
      return this._storageCapacity
    }

    // storage_type - computed: false, optional: true, required: false
    private _storageType?: string;
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string ) {
      this._storageType = value;
    }
    public resetStorageType() {
      this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
      return this._storageType
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds: string[];
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // weekly_maintenance_start_time - computed: true, optional: true, required: false
    private _weeklyMaintenanceStartTime?: string;
    public get weeklyMaintenanceStartTime() {
      return this.getStringAttribute('weekly_maintenance_start_time');
    }
    public set weeklyMaintenanceStartTime(value: string) {
      this._weeklyMaintenanceStartTime = value;
    }
    public resetWeeklyMaintenanceStartTime() {
      this._weeklyMaintenanceStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyMaintenanceStartTimeInput() {
      return this._weeklyMaintenanceStartTime
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: FsxLustreFileSystemTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: FsxLustreFileSystemTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auto_import_policy: cdktf.stringToTerraform(this._autoImportPolicy),
        automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
        backup_id: cdktf.stringToTerraform(this._backupId),
        copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
        daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
        data_compression_type: cdktf.stringToTerraform(this._dataCompressionType),
        deployment_type: cdktf.stringToTerraform(this._deploymentType),
        drive_cache_type: cdktf.stringToTerraform(this._driveCacheType),
        export_path: cdktf.stringToTerraform(this._exportPath),
        import_path: cdktf.stringToTerraform(this._importPath),
        imported_file_chunk_size: cdktf.numberToTerraform(this._importedFileChunkSize),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        per_unit_storage_throughput: cdktf.numberToTerraform(this._perUnitStorageThroughput),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
        storage_type: cdktf.stringToTerraform(this._storageType),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
        timeouts: fsxLustreFileSystemTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface FsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#automatic_backup_retention_days FsxOntapFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#daily_automatic_backup_start_time FsxOntapFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#deployment_type FsxOntapFileSystem#deployment_type}
    */
    readonly deploymentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#endpoint_ip_address_range FsxOntapFileSystem#endpoint_ip_address_range}
    */
    readonly endpointIpAddressRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#fsx_admin_password FsxOntapFileSystem#fsx_admin_password}
    */
    readonly fsxAdminPassword?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#kms_key_id FsxOntapFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#preferred_subnet_id FsxOntapFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#route_table_ids FsxOntapFileSystem#route_table_ids}
    */
    readonly routeTableIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#security_group_ids FsxOntapFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_capacity FsxOntapFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#storage_type FsxOntapFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#subnet_ids FsxOntapFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags FsxOntapFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#tags_all FsxOntapFileSystem#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#throughput_capacity FsxOntapFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#weekly_maintenance_start_time FsxOntapFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * disk_iops_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#disk_iops_configuration FsxOntapFileSystem#disk_iops_configuration}
    */
    readonly diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#timeouts FsxOntapFileSystem#timeouts}
    */
    readonly timeouts?: FsxOntapFileSystemTimeouts;
  }
  export class FsxOntapFileSystemEndpointsIntercluster extends cdktf.ComplexComputedList {

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // ip_addresses - computed: true, optional: false, required: false
    public get ipAddresses() {
      return this.getListAttribute('ip_addresses');
    }
  }
  export class FsxOntapFileSystemEndpointsManagement extends cdktf.ComplexComputedList {

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // ip_addresses - computed: true, optional: false, required: false
    public get ipAddresses() {
      return this.getListAttribute('ip_addresses');
    }
  }
  export class FsxOntapFileSystemEndpoints extends cdktf.ComplexComputedList {

    // intercluster - computed: true, optional: false, required: false
    public get intercluster() {
      return this.interpolationForAttribute('intercluster') as any;
    }

    // management - computed: true, optional: false, required: false
    public get management() {
      return this.interpolationForAttribute('management') as any;
    }
  }
  export interface FsxOntapFileSystemDiskIopsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#iops FsxOntapFileSystem#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#mode FsxOntapFileSystem#mode}
    */
    readonly mode?: string;
  }

  function fsxOntapFileSystemDiskIopsConfigurationToTerraform(struct?: FsxOntapFileSystemDiskIopsConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      iops: cdktf.numberToTerraform(struct!.iops),
      mode: cdktf.stringToTerraform(struct!.mode),
    }
  }

  export interface FsxOntapFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#create FsxOntapFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#delete FsxOntapFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html#update FsxOntapFileSystem#update}
    */
    readonly update?: string;
  }

  function fsxOntapFileSystemTimeoutsToTerraform(struct?: FsxOntapFileSystemTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system}
  */
  export class FsxOntapFileSystem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_fsx_ontap_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_file_system.html aws_fsx_ontap_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxOntapFileSystemConfig
    */
    public constructor(scope: Construct, id: string, config: FsxOntapFileSystemConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_fsx_ontap_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
      this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
      this._deploymentType = config.deploymentType;
      this._endpointIpAddressRange = config.endpointIpAddressRange;
      this._fsxAdminPassword = config.fsxAdminPassword;
      this._kmsKeyId = config.kmsKeyId;
      this._preferredSubnetId = config.preferredSubnetId;
      this._routeTableIds = config.routeTableIds;
      this._securityGroupIds = config.securityGroupIds;
      this._storageCapacity = config.storageCapacity;
      this._storageType = config.storageType;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._throughputCapacity = config.throughputCapacity;
      this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
      this._diskIopsConfiguration = config.diskIopsConfiguration;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // automatic_backup_retention_days - computed: false, optional: true, required: false
    private _automaticBackupRetentionDays?: number;
    public get automaticBackupRetentionDays() {
      return this.getNumberAttribute('automatic_backup_retention_days');
    }
    public set automaticBackupRetentionDays(value: number ) {
      this._automaticBackupRetentionDays = value;
    }
    public resetAutomaticBackupRetentionDays() {
      this._automaticBackupRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupRetentionDaysInput() {
      return this._automaticBackupRetentionDays
    }

    // daily_automatic_backup_start_time - computed: true, optional: true, required: false
    private _dailyAutomaticBackupStartTime?: string;
    public get dailyAutomaticBackupStartTime() {
      return this.getStringAttribute('daily_automatic_backup_start_time');
    }
    public set dailyAutomaticBackupStartTime(value: string) {
      this._dailyAutomaticBackupStartTime = value;
    }
    public resetDailyAutomaticBackupStartTime() {
      this._dailyAutomaticBackupStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyAutomaticBackupStartTimeInput() {
      return this._dailyAutomaticBackupStartTime
    }

    // deployment_type - computed: false, optional: false, required: true
    private _deploymentType: string;
    public get deploymentType() {
      return this.getStringAttribute('deployment_type');
    }
    public set deploymentType(value: string) {
      this._deploymentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTypeInput() {
      return this._deploymentType
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // endpoint_ip_address_range - computed: true, optional: true, required: false
    private _endpointIpAddressRange?: string;
    public get endpointIpAddressRange() {
      return this.getStringAttribute('endpoint_ip_address_range');
    }
    public set endpointIpAddressRange(value: string) {
      this._endpointIpAddressRange = value;
    }
    public resetEndpointIpAddressRange() {
      this._endpointIpAddressRange = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIpAddressRangeInput() {
      return this._endpointIpAddressRange
    }

    // endpoints - computed: true, optional: false, required: false
    public endpoints(index: string) {
      return new FsxOntapFileSystemEndpoints(this, 'endpoints', index);
    }

    // fsx_admin_password - computed: false, optional: true, required: false
    private _fsxAdminPassword?: string;
    public get fsxAdminPassword() {
      return this.getStringAttribute('fsx_admin_password');
    }
    public set fsxAdminPassword(value: string ) {
      this._fsxAdminPassword = value;
    }
    public resetFsxAdminPassword() {
      this._fsxAdminPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxAdminPasswordInput() {
      return this._fsxAdminPassword
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string;
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // network_interface_ids - computed: true, optional: false, required: false
    public get networkInterfaceIds() {
      return this.getListAttribute('network_interface_ids');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // preferred_subnet_id - computed: false, optional: false, required: true
    private _preferredSubnetId: string;
    public get preferredSubnetId() {
      return this.getStringAttribute('preferred_subnet_id');
    }
    public set preferredSubnetId(value: string) {
      this._preferredSubnetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredSubnetIdInput() {
      return this._preferredSubnetId
    }

    // route_table_ids - computed: true, optional: true, required: false
    private _routeTableIds?: string[];
    public get routeTableIds() {
      return this.getListAttribute('route_table_ids');
    }
    public set routeTableIds(value: string[]) {
      this._routeTableIds = value;
    }
    public resetRouteTableIds() {
      this._routeTableIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routeTableIdsInput() {
      return this._routeTableIds
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[];
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] ) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // storage_capacity - computed: false, optional: true, required: false
    private _storageCapacity?: number;
    public get storageCapacity() {
      return this.getNumberAttribute('storage_capacity');
    }
    public set storageCapacity(value: number ) {
      this._storageCapacity = value;
    }
    public resetStorageCapacity() {
      this._storageCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityInput() {
      return this._storageCapacity
    }

    // storage_type - computed: false, optional: true, required: false
    private _storageType?: string;
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string ) {
      this._storageType = value;
    }
    public resetStorageType() {
      this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
      return this._storageType
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds: string[];
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // throughput_capacity - computed: false, optional: false, required: true
    private _throughputCapacity: number;
    public get throughputCapacity() {
      return this.getNumberAttribute('throughput_capacity');
    }
    public set throughputCapacity(value: number) {
      this._throughputCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputCapacityInput() {
      return this._throughputCapacity
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // weekly_maintenance_start_time - computed: true, optional: true, required: false
    private _weeklyMaintenanceStartTime?: string;
    public get weeklyMaintenanceStartTime() {
      return this.getStringAttribute('weekly_maintenance_start_time');
    }
    public set weeklyMaintenanceStartTime(value: string) {
      this._weeklyMaintenanceStartTime = value;
    }
    public resetWeeklyMaintenanceStartTime() {
      this._weeklyMaintenanceStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyMaintenanceStartTimeInput() {
      return this._weeklyMaintenanceStartTime
    }

    // disk_iops_configuration - computed: false, optional: true, required: false
    private _diskIopsConfiguration?: FsxOntapFileSystemDiskIopsConfiguration[];
    public get diskIopsConfiguration() {
      return this.interpolationForAttribute('disk_iops_configuration') as any;
    }
    public set diskIopsConfiguration(value: FsxOntapFileSystemDiskIopsConfiguration[] ) {
      this._diskIopsConfiguration = value;
    }
    public resetDiskIopsConfiguration() {
      this._diskIopsConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskIopsConfigurationInput() {
      return this._diskIopsConfiguration
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: FsxOntapFileSystemTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: FsxOntapFileSystemTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
        daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
        deployment_type: cdktf.stringToTerraform(this._deploymentType),
        endpoint_ip_address_range: cdktf.stringToTerraform(this._endpointIpAddressRange),
        fsx_admin_password: cdktf.stringToTerraform(this._fsxAdminPassword),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
        route_table_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._routeTableIds),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
        storage_type: cdktf.stringToTerraform(this._storageType),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
        weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
        disk_iops_configuration: cdktf.listMapper(fsxOntapFileSystemDiskIopsConfigurationToTerraform)(this._diskIopsConfiguration),
        timeouts: fsxOntapFileSystemTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface FsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#active_directory_id FsxWindowsFileSystem#active_directory_id}
    */
    readonly activeDirectoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#aliases FsxWindowsFileSystem#aliases}
    */
    readonly aliases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#automatic_backup_retention_days FsxWindowsFileSystem#automatic_backup_retention_days}
    */
    readonly automaticBackupRetentionDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#backup_id FsxWindowsFileSystem#backup_id}
    */
    readonly backupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#copy_tags_to_backups FsxWindowsFileSystem#copy_tags_to_backups}
    */
    readonly copyTagsToBackups?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#daily_automatic_backup_start_time FsxWindowsFileSystem#daily_automatic_backup_start_time}
    */
    readonly dailyAutomaticBackupStartTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#deployment_type FsxWindowsFileSystem#deployment_type}
    */
    readonly deploymentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#kms_key_id FsxWindowsFileSystem#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#preferred_subnet_id FsxWindowsFileSystem#preferred_subnet_id}
    */
    readonly preferredSubnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#security_group_ids FsxWindowsFileSystem#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#skip_final_backup FsxWindowsFileSystem#skip_final_backup}
    */
    readonly skipFinalBackup?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_capacity FsxWindowsFileSystem#storage_capacity}
    */
    readonly storageCapacity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#storage_type FsxWindowsFileSystem#storage_type}
    */
    readonly storageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#subnet_ids FsxWindowsFileSystem#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags FsxWindowsFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#tags_all FsxWindowsFileSystem#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#throughput_capacity FsxWindowsFileSystem#throughput_capacity}
    */
    readonly throughputCapacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#weekly_maintenance_start_time FsxWindowsFileSystem#weekly_maintenance_start_time}
    */
    readonly weeklyMaintenanceStartTime?: string;
    /**
    * audit_log_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#audit_log_configuration FsxWindowsFileSystem#audit_log_configuration}
    */
    readonly auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration[];
    /**
    * self_managed_active_directory block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
    */
    readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#timeouts FsxWindowsFileSystem#timeouts}
    */
    readonly timeouts?: FsxWindowsFileSystemTimeouts;
  }
  export interface FsxWindowsFileSystemAuditLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#audit_log_destination FsxWindowsFileSystem#audit_log_destination}
    */
    readonly auditLogDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_access_audit_log_level FsxWindowsFileSystem#file_access_audit_log_level}
    */
    readonly fileAccessAuditLogLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_share_access_audit_log_level FsxWindowsFileSystem#file_share_access_audit_log_level}
    */
    readonly fileShareAccessAuditLogLevel?: string;
  }

  function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: FsxWindowsFileSystemAuditLogConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      audit_log_destination: cdktf.stringToTerraform(struct!.auditLogDestination),
      file_access_audit_log_level: cdktf.stringToTerraform(struct!.fileAccessAuditLogLevel),
      file_share_access_audit_log_level: cdktf.stringToTerraform(struct!.fileShareAccessAuditLogLevel),
    }
  }

  export interface FsxWindowsFileSystemSelfManagedActiveDirectory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#dns_ips FsxWindowsFileSystem#dns_ips}
    */
    readonly dnsIps: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#domain_name FsxWindowsFileSystem#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#file_system_administrators_group FsxWindowsFileSystem#file_system_administrators_group}
    */
    readonly fileSystemAdministratorsGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#organizational_unit_distinguished_name FsxWindowsFileSystem#organizational_unit_distinguished_name}
    */
    readonly organizationalUnitDistinguishedName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#password FsxWindowsFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#username FsxWindowsFileSystem#username}
    */
    readonly username: string;
  }

  function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectory): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsIps),
      domain_name: cdktf.stringToTerraform(struct!.domainName),
      file_system_administrators_group: cdktf.stringToTerraform(struct!.fileSystemAdministratorsGroup),
      organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
      password: cdktf.stringToTerraform(struct!.password),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export interface FsxWindowsFileSystemTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#create FsxWindowsFileSystem#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#delete FsxWindowsFileSystem#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#update FsxWindowsFileSystem#update}
    */
    readonly update?: string;
  }

  function fsxWindowsFileSystemTimeoutsToTerraform(struct?: FsxWindowsFileSystemTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system}
  */
  export class FsxWindowsFileSystem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_fsx_windows_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html aws_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FsxWindowsFileSystemConfig
    */
    public constructor(scope: Construct, id: string, config: FsxWindowsFileSystemConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_fsx_windows_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._activeDirectoryId = config.activeDirectoryId;
      this._aliases = config.aliases;
      this._automaticBackupRetentionDays = config.automaticBackupRetentionDays;
      this._backupId = config.backupId;
      this._copyTagsToBackups = config.copyTagsToBackups;
      this._dailyAutomaticBackupStartTime = config.dailyAutomaticBackupStartTime;
      this._deploymentType = config.deploymentType;
      this._kmsKeyId = config.kmsKeyId;
      this._preferredSubnetId = config.preferredSubnetId;
      this._securityGroupIds = config.securityGroupIds;
      this._skipFinalBackup = config.skipFinalBackup;
      this._storageCapacity = config.storageCapacity;
      this._storageType = config.storageType;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._throughputCapacity = config.throughputCapacity;
      this._weeklyMaintenanceStartTime = config.weeklyMaintenanceStartTime;
      this._auditLogConfiguration = config.auditLogConfiguration;
      this._selfManagedActiveDirectory = config.selfManagedActiveDirectory;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // active_directory_id - computed: false, optional: true, required: false
    private _activeDirectoryId?: string;
    public get activeDirectoryId() {
      return this.getStringAttribute('active_directory_id');
    }
    public set activeDirectoryId(value: string ) {
      this._activeDirectoryId = value;
    }
    public resetActiveDirectoryId() {
      this._activeDirectoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeDirectoryIdInput() {
      return this._activeDirectoryId
    }

    // aliases - computed: false, optional: true, required: false
    private _aliases?: string[];
    public get aliases() {
      return this.getListAttribute('aliases');
    }
    public set aliases(value: string[] ) {
      this._aliases = value;
    }
    public resetAliases() {
      this._aliases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasesInput() {
      return this._aliases
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // automatic_backup_retention_days - computed: false, optional: true, required: false
    private _automaticBackupRetentionDays?: number;
    public get automaticBackupRetentionDays() {
      return this.getNumberAttribute('automatic_backup_retention_days');
    }
    public set automaticBackupRetentionDays(value: number ) {
      this._automaticBackupRetentionDays = value;
    }
    public resetAutomaticBackupRetentionDays() {
      this._automaticBackupRetentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupRetentionDaysInput() {
      return this._automaticBackupRetentionDays
    }

    // backup_id - computed: false, optional: true, required: false
    private _backupId?: string;
    public get backupId() {
      return this.getStringAttribute('backup_id');
    }
    public set backupId(value: string ) {
      this._backupId = value;
    }
    public resetBackupId() {
      this._backupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupIdInput() {
      return this._backupId
    }

    // copy_tags_to_backups - computed: false, optional: true, required: false
    private _copyTagsToBackups?: boolean | cdktf.IResolvable;
    public get copyTagsToBackups() {
      return this.getBooleanAttribute('copy_tags_to_backups');
    }
    public set copyTagsToBackups(value: boolean | cdktf.IResolvable ) {
      this._copyTagsToBackups = value;
    }
    public resetCopyTagsToBackups() {
      this._copyTagsToBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToBackupsInput() {
      return this._copyTagsToBackups
    }

    // daily_automatic_backup_start_time - computed: true, optional: true, required: false
    private _dailyAutomaticBackupStartTime?: string;
    public get dailyAutomaticBackupStartTime() {
      return this.getStringAttribute('daily_automatic_backup_start_time');
    }
    public set dailyAutomaticBackupStartTime(value: string) {
      this._dailyAutomaticBackupStartTime = value;
    }
    public resetDailyAutomaticBackupStartTime() {
      this._dailyAutomaticBackupStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dailyAutomaticBackupStartTimeInput() {
      return this._dailyAutomaticBackupStartTime
    }

    // deployment_type - computed: false, optional: true, required: false
    private _deploymentType?: string;
    public get deploymentType() {
      return this.getStringAttribute('deployment_type');
    }
    public set deploymentType(value: string ) {
      this._deploymentType = value;
    }
    public resetDeploymentType() {
      this._deploymentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentTypeInput() {
      return this._deploymentType
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string;
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
      this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
      this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
      return this._kmsKeyId
    }

    // network_interface_ids - computed: true, optional: false, required: false
    public get networkInterfaceIds() {
      return this.getListAttribute('network_interface_ids');
    }

    // owner_id - computed: true, optional: false, required: false
    public get ownerId() {
      return this.getStringAttribute('owner_id');
    }

    // preferred_file_server_ip - computed: true, optional: false, required: false
    public get preferredFileServerIp() {
      return this.getStringAttribute('preferred_file_server_ip');
    }

    // preferred_subnet_id - computed: true, optional: true, required: false
    private _preferredSubnetId?: string;
    public get preferredSubnetId() {
      return this.getStringAttribute('preferred_subnet_id');
    }
    public set preferredSubnetId(value: string) {
      this._preferredSubnetId = value;
    }
    public resetPreferredSubnetId() {
      this._preferredSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredSubnetIdInput() {
      return this._preferredSubnetId
    }

    // remote_administration_endpoint - computed: true, optional: false, required: false
    public get remoteAdministrationEndpoint() {
      return this.getStringAttribute('remote_administration_endpoint');
    }

    // security_group_ids - computed: false, optional: true, required: false
    private _securityGroupIds?: string[];
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[] ) {
      this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
      this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
      return this._securityGroupIds
    }

    // skip_final_backup - computed: false, optional: true, required: false
    private _skipFinalBackup?: boolean | cdktf.IResolvable;
    public get skipFinalBackup() {
      return this.getBooleanAttribute('skip_final_backup');
    }
    public set skipFinalBackup(value: boolean | cdktf.IResolvable ) {
      this._skipFinalBackup = value;
    }
    public resetSkipFinalBackup() {
      this._skipFinalBackup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipFinalBackupInput() {
      return this._skipFinalBackup
    }

    // storage_capacity - computed: true, optional: true, required: false
    private _storageCapacity?: number;
    public get storageCapacity() {
      return this.getNumberAttribute('storage_capacity');
    }
    public set storageCapacity(value: number) {
      this._storageCapacity = value;
    }
    public resetStorageCapacity() {
      this._storageCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCapacityInput() {
      return this._storageCapacity
    }

    // storage_type - computed: false, optional: true, required: false
    private _storageType?: string;
    public get storageType() {
      return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string ) {
      this._storageType = value;
    }
    public resetStorageType() {
      this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
      return this._storageType
    }

    // subnet_ids - computed: false, optional: false, required: true
    private _subnetIds: string[];
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
      return this._subnetIds
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // throughput_capacity - computed: false, optional: false, required: true
    private _throughputCapacity: number;
    public get throughputCapacity() {
      return this.getNumberAttribute('throughput_capacity');
    }
    public set throughputCapacity(value: number) {
      this._throughputCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get throughputCapacityInput() {
      return this._throughputCapacity
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // weekly_maintenance_start_time - computed: true, optional: true, required: false
    private _weeklyMaintenanceStartTime?: string;
    public get weeklyMaintenanceStartTime() {
      return this.getStringAttribute('weekly_maintenance_start_time');
    }
    public set weeklyMaintenanceStartTime(value: string) {
      this._weeklyMaintenanceStartTime = value;
    }
    public resetWeeklyMaintenanceStartTime() {
      this._weeklyMaintenanceStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeklyMaintenanceStartTimeInput() {
      return this._weeklyMaintenanceStartTime
    }

    // audit_log_configuration - computed: false, optional: true, required: false
    private _auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration[];
    public get auditLogConfiguration() {
      return this.interpolationForAttribute('audit_log_configuration') as any;
    }
    public set auditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration[] ) {
      this._auditLogConfiguration = value;
    }
    public resetAuditLogConfiguration() {
      this._auditLogConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auditLogConfigurationInput() {
      return this._auditLogConfiguration
    }

    // self_managed_active_directory - computed: false, optional: true, required: false
    private _selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory[];
    public get selfManagedActiveDirectory() {
      return this.interpolationForAttribute('self_managed_active_directory') as any;
    }
    public set selfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory[] ) {
      this._selfManagedActiveDirectory = value;
    }
    public resetSelfManagedActiveDirectory() {
      this._selfManagedActiveDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedActiveDirectoryInput() {
      return this._selfManagedActiveDirectory
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: FsxWindowsFileSystemTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: FsxWindowsFileSystemTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        active_directory_id: cdktf.stringToTerraform(this._activeDirectoryId),
        aliases: cdktf.listMapper(cdktf.stringToTerraform)(this._aliases),
        automatic_backup_retention_days: cdktf.numberToTerraform(this._automaticBackupRetentionDays),
        backup_id: cdktf.stringToTerraform(this._backupId),
        copy_tags_to_backups: cdktf.booleanToTerraform(this._copyTagsToBackups),
        daily_automatic_backup_start_time: cdktf.stringToTerraform(this._dailyAutomaticBackupStartTime),
        deployment_type: cdktf.stringToTerraform(this._deploymentType),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        preferred_subnet_id: cdktf.stringToTerraform(this._preferredSubnetId),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
        skip_final_backup: cdktf.booleanToTerraform(this._skipFinalBackup),
        storage_capacity: cdktf.numberToTerraform(this._storageCapacity),
        storage_type: cdktf.stringToTerraform(this._storageType),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        throughput_capacity: cdktf.numberToTerraform(this._throughputCapacity),
        weekly_maintenance_start_time: cdktf.stringToTerraform(this._weeklyMaintenanceStartTime),
        audit_log_configuration: cdktf.listMapper(fsxWindowsFileSystemAuditLogConfigurationToTerraform)(this._auditLogConfiguration),
        self_managed_active_directory: cdktf.listMapper(fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform)(this._selfManagedActiveDirectory),
        timeouts: fsxWindowsFileSystemTimeoutsToTerraform(this._timeouts),
      };
    }
  }
}
