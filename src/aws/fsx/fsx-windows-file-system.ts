// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS File System FSx
*/
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
  readonly auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration;
  /**
  * self_managed_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_windows_file_system.html#self_managed_active_directory FsxWindowsFileSystem#self_managed_active_directory}
  */
  readonly selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory;
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

export function fsxWindowsFileSystemAuditLogConfigurationToTerraform(struct?: FsxWindowsFileSystemAuditLogConfigurationOutputReference | FsxWindowsFileSystemAuditLogConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_log_destination: cdktf.stringToTerraform(struct!.auditLogDestination),
    file_access_audit_log_level: cdktf.stringToTerraform(struct!.fileAccessAuditLogLevel),
    file_share_access_audit_log_level: cdktf.stringToTerraform(struct!.fileShareAccessAuditLogLevel),
  }
}

export class FsxWindowsFileSystemAuditLogConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // audit_log_destination - computed: true, optional: true, required: false
  private _auditLogDestination?: string | undefined; 
  public get auditLogDestination() {
    return this.getStringAttribute('audit_log_destination');
  }
  public set auditLogDestination(value: string | undefined) {
    this._auditLogDestination = value;
  }
  public resetAuditLogDestination() {
    this._auditLogDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogDestinationInput() {
    return this._auditLogDestination
  }

  // file_access_audit_log_level - computed: false, optional: true, required: false
  private _fileAccessAuditLogLevel?: string | undefined; 
  public get fileAccessAuditLogLevel() {
    return this.getStringAttribute('file_access_audit_log_level');
  }
  public set fileAccessAuditLogLevel(value: string | undefined) {
    this._fileAccessAuditLogLevel = value;
  }
  public resetFileAccessAuditLogLevel() {
    this._fileAccessAuditLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileAccessAuditLogLevelInput() {
    return this._fileAccessAuditLogLevel
  }

  // file_share_access_audit_log_level - computed: false, optional: true, required: false
  private _fileShareAccessAuditLogLevel?: string | undefined; 
  public get fileShareAccessAuditLogLevel() {
    return this.getStringAttribute('file_share_access_audit_log_level');
  }
  public set fileShareAccessAuditLogLevel(value: string | undefined) {
    this._fileShareAccessAuditLogLevel = value;
  }
  public resetFileShareAccessAuditLogLevel() {
    this._fileShareAccessAuditLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareAccessAuditLogLevelInput() {
    return this._fileShareAccessAuditLogLevel
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

export function fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(struct?: FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference | FsxWindowsFileSystemSelfManagedActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsIps),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    file_system_administrators_group: cdktf.stringToTerraform(struct!.fileSystemAdministratorsGroup),
    organizational_unit_distinguished_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguishedName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dns_ips - computed: false, optional: false, required: true
  private _dnsIps?: string[]; 
  public get dnsIps() {
    return this.getListAttribute('dns_ips');
  }
  public set dnsIps(value: string[]) {
    this._dnsIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpsInput() {
    return this._dnsIps
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // file_system_administrators_group - computed: false, optional: true, required: false
  private _fileSystemAdministratorsGroup?: string | undefined; 
  public get fileSystemAdministratorsGroup() {
    return this.getStringAttribute('file_system_administrators_group');
  }
  public set fileSystemAdministratorsGroup(value: string | undefined) {
    this._fileSystemAdministratorsGroup = value;
  }
  public resetFileSystemAdministratorsGroup() {
    this._fileSystemAdministratorsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemAdministratorsGroupInput() {
    return this._fileSystemAdministratorsGroup
  }

  // organizational_unit_distinguished_name - computed: false, optional: true, required: false
  private _organizationalUnitDistinguishedName?: string | undefined; 
  public get organizationalUnitDistinguishedName() {
    return this.getStringAttribute('organizational_unit_distinguished_name');
  }
  public set organizationalUnitDistinguishedName(value: string | undefined) {
    this._organizationalUnitDistinguishedName = value;
  }
  public resetOrganizationalUnitDistinguishedName() {
    this._organizationalUnitDistinguishedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguishedNameInput() {
    return this._organizationalUnitDistinguishedName
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
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

export function fsxWindowsFileSystemTimeoutsToTerraform(struct?: FsxWindowsFileSystemTimeoutsOutputReference | FsxWindowsFileSystemTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class FsxWindowsFileSystemTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _activeDirectoryId?: string | undefined; 
  public get activeDirectoryId() {
    return this.getStringAttribute('active_directory_id');
  }
  public set activeDirectoryId(value: string | undefined) {
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
  private _aliases?: string[] | undefined; 
  public get aliases() {
    return this.getListAttribute('aliases');
  }
  public set aliases(value: string[] | undefined) {
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
  private _automaticBackupRetentionDays?: number | undefined; 
  public get automaticBackupRetentionDays() {
    return this.getNumberAttribute('automatic_backup_retention_days');
  }
  public set automaticBackupRetentionDays(value: number | undefined) {
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
  private _backupId?: string | undefined; 
  public get backupId() {
    return this.getStringAttribute('backup_id');
  }
  public set backupId(value: string | undefined) {
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
  private _copyTagsToBackups?: boolean | cdktf.IResolvable | undefined; 
  public get copyTagsToBackups() {
    return this.getBooleanAttribute('copy_tags_to_backups') as any;
  }
  public set copyTagsToBackups(value: boolean | cdktf.IResolvable | undefined) {
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
  private _dailyAutomaticBackupStartTime?: string | undefined; 
  public get dailyAutomaticBackupStartTime() {
    return this.getStringAttribute('daily_automatic_backup_start_time');
  }
  public set dailyAutomaticBackupStartTime(value: string | undefined) {
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
  private _deploymentType?: string | undefined; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string | undefined) {
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
  private _preferredSubnetId?: string | undefined; 
  public get preferredSubnetId() {
    return this.getStringAttribute('preferred_subnet_id');
  }
  public set preferredSubnetId(value: string | undefined) {
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
  private _securityGroupIds?: string[] | undefined; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[] | undefined) {
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
  private _skipFinalBackup?: boolean | cdktf.IResolvable | undefined; 
  public get skipFinalBackup() {
    return this.getBooleanAttribute('skip_final_backup') as any;
  }
  public set skipFinalBackup(value: boolean | cdktf.IResolvable | undefined) {
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
  private _storageCapacity?: number | undefined; 
  public get storageCapacity() {
    return this.getNumberAttribute('storage_capacity');
  }
  public set storageCapacity(value: number | undefined) {
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
  private _storageType?: string | undefined; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string | undefined) {
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
  private _subnetIds?: string[]; 
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

  // throughput_capacity - computed: false, optional: false, required: true
  private _throughputCapacity?: number; 
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
  private _weeklyMaintenanceStartTime?: string | undefined; 
  public get weeklyMaintenanceStartTime() {
    return this.getStringAttribute('weekly_maintenance_start_time');
  }
  public set weeklyMaintenanceStartTime(value: string | undefined) {
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
  private _auditLogConfiguration?: FsxWindowsFileSystemAuditLogConfiguration | undefined; 
  private __auditLogConfigurationOutput = new FsxWindowsFileSystemAuditLogConfigurationOutputReference(this as any, "audit_log_configuration", true);
  public get auditLogConfiguration() {
    return this.__auditLogConfigurationOutput;
  }
  public putAuditLogConfiguration(value: FsxWindowsFileSystemAuditLogConfiguration | undefined) {
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
  private _selfManagedActiveDirectory?: FsxWindowsFileSystemSelfManagedActiveDirectory | undefined; 
  private __selfManagedActiveDirectoryOutput = new FsxWindowsFileSystemSelfManagedActiveDirectoryOutputReference(this as any, "self_managed_active_directory", true);
  public get selfManagedActiveDirectory() {
    return this.__selfManagedActiveDirectoryOutput;
  }
  public putSelfManagedActiveDirectory(value: FsxWindowsFileSystemSelfManagedActiveDirectory | undefined) {
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
  private _timeouts?: FsxWindowsFileSystemTimeouts | undefined; 
  private __timeoutsOutput = new FsxWindowsFileSystemTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FsxWindowsFileSystemTimeouts | undefined) {
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
      audit_log_configuration: fsxWindowsFileSystemAuditLogConfigurationToTerraform(this._auditLogConfiguration),
      self_managed_active_directory: fsxWindowsFileSystemSelfManagedActiveDirectoryToTerraform(this._selfManagedActiveDirectory),
      timeouts: fsxWindowsFileSystemTimeoutsToTerraform(this._timeouts),
    };
  }
}