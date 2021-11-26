// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS File System FSx
*/
export interface FsxOntapStorageVirtualMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#file_system_id FsxOntapStorageVirtualMachine#file_system_id}
  */
  readonly fileSystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#name FsxOntapStorageVirtualMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#root_volume_security_style FsxOntapStorageVirtualMachine#root_volume_security_style}
  */
  readonly rootVolumeSecurityStyle?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#svm_admin_password FsxOntapStorageVirtualMachine#svm_admin_password}
  */
  readonly svmAdminPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#tags FsxOntapStorageVirtualMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#tags_all FsxOntapStorageVirtualMachine#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * active_directory_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#active_directory_configuration FsxOntapStorageVirtualMachine#active_directory_configuration}
  */
  readonly activeDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#timeouts FsxOntapStorageVirtualMachine#timeouts}
  */
  readonly timeouts?: FsxOntapStorageVirtualMachineTimeouts;
}
export class FsxOntapStorageVirtualMachineEndpointsIscsi extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapStorageVirtualMachineEndpointsManagement extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapStorageVirtualMachineEndpointsNfs extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapStorageVirtualMachineEndpointsSmb extends cdktf.ComplexComputedList {

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
}
export class FsxOntapStorageVirtualMachineEndpoints extends cdktf.ComplexComputedList {

  // iscsi - computed: true, optional: false, required: false
  public get iscsi() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('iscsi') as any;
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('management') as any;
  }

  // nfs - computed: true, optional: false, required: false
  public get nfs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nfs') as any;
  }

  // smb - computed: true, optional: false, required: false
  public get smb() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('smb') as any;
  }
}
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#dns_ips FsxOntapStorageVirtualMachine#dns_ips}
  */
  readonly dnsIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#domain_name FsxOntapStorageVirtualMachine#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#file_system_administrators_group FsxOntapStorageVirtualMachine#file_system_administrators_group}
  */
  readonly fileSystemAdministratorsGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#organizational_unit_distinguidshed_name FsxOntapStorageVirtualMachine#organizational_unit_distinguidshed_name}
  */
  readonly organizationalUnitDistinguidshedName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#password FsxOntapStorageVirtualMachine#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#username FsxOntapStorageVirtualMachine#username}
  */
  readonly username: string;
}

export function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsIps),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    file_system_administrators_group: cdktf.stringToTerraform(struct!.fileSystemAdministratorsGroup),
    organizational_unit_distinguidshed_name: cdktf.stringToTerraform(struct!.organizationalUnitDistinguidshedName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
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

  // organizational_unit_distinguidshed_name - computed: false, optional: true, required: false
  private _organizationalUnitDistinguidshedName?: string | undefined; 
  public get organizationalUnitDistinguidshedName() {
    return this.getStringAttribute('organizational_unit_distinguidshed_name');
  }
  public set organizationalUnitDistinguidshedName(value: string | undefined) {
    this._organizationalUnitDistinguidshedName = value;
  }
  public resetOrganizationalUnitDistinguidshedName() {
    this._organizationalUnitDistinguidshedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitDistinguidshedNameInput() {
    return this._organizationalUnitDistinguidshedName
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
export interface FsxOntapStorageVirtualMachineActiveDirectoryConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#netbios_name FsxOntapStorageVirtualMachine#netbios_name}
  */
  readonly netbiosName?: string;
  /**
  * self_managed_active_directory_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#self_managed_active_directory_configuration FsxOntapStorageVirtualMachine#self_managed_active_directory_configuration}
  */
  readonly selfManagedActiveDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration;
}

export function fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(struct?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference | FsxOntapStorageVirtualMachineActiveDirectoryConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    netbios_name: cdktf.stringToTerraform(struct!.netbiosName),
    self_managed_active_directory_configuration: fsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationToTerraform(struct!.selfManagedActiveDirectoryConfiguration),
  }
}

export class FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // netbios_name - computed: false, optional: true, required: false
  private _netbiosName?: string | undefined; 
  public get netbiosName() {
    return this.getStringAttribute('netbios_name');
  }
  public set netbiosName(value: string | undefined) {
    this._netbiosName = value;
  }
  public resetNetbiosName() {
    this._netbiosName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosNameInput() {
    return this._netbiosName
  }

  // self_managed_active_directory_configuration - computed: false, optional: true, required: false
  private _selfManagedActiveDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined; 
  private __selfManagedActiveDirectoryConfigurationOutput = new FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(this as any, "self_managed_active_directory_configuration", true);
  public get selfManagedActiveDirectoryConfiguration() {
    return this.__selfManagedActiveDirectoryConfigurationOutput;
  }
  public putSelfManagedActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration | undefined) {
    this._selfManagedActiveDirectoryConfiguration = value;
  }
  public resetSelfManagedActiveDirectoryConfiguration() {
    this._selfManagedActiveDirectoryConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedActiveDirectoryConfigurationInput() {
    return this._selfManagedActiveDirectoryConfiguration
  }
}
export interface FsxOntapStorageVirtualMachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#create FsxOntapStorageVirtualMachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#delete FsxOntapStorageVirtualMachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html#update FsxOntapStorageVirtualMachine#update}
  */
  readonly update?: string;
}

export function fsxOntapStorageVirtualMachineTimeoutsToTerraform(struct?: FsxOntapStorageVirtualMachineTimeoutsOutputReference | FsxOntapStorageVirtualMachineTimeouts): any {
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

export class FsxOntapStorageVirtualMachineTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine}
*/
export class FsxOntapStorageVirtualMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_fsx_ontap_storage_virtual_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/fsx_ontap_storage_virtual_machine.html aws_fsx_ontap_storage_virtual_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxOntapStorageVirtualMachineConfig
  */
  public constructor(scope: Construct, id: string, config: FsxOntapStorageVirtualMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_ontap_storage_virtual_machine',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._fileSystemId = config.fileSystemId;
    this._name = config.name;
    this._rootVolumeSecurityStyle = config.rootVolumeSecurityStyle;
    this._svmAdminPassword = config.svmAdminPassword;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._activeDirectoryConfiguration = config.activeDirectoryConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoints - computed: true, optional: false, required: false
  public endpoints(index: string) {
    return new FsxOntapStorageVirtualMachineEndpoints(this, 'endpoints', index);
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
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

  // root_volume_security_style - computed: false, optional: true, required: false
  private _rootVolumeSecurityStyle?: string | undefined; 
  public get rootVolumeSecurityStyle() {
    return this.getStringAttribute('root_volume_security_style');
  }
  public set rootVolumeSecurityStyle(value: string | undefined) {
    this._rootVolumeSecurityStyle = value;
  }
  public resetRootVolumeSecurityStyle() {
    this._rootVolumeSecurityStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSecurityStyleInput() {
    return this._rootVolumeSecurityStyle
  }

  // subtype - computed: true, optional: false, required: false
  public get subtype() {
    return this.getStringAttribute('subtype');
  }

  // svm_admin_password - computed: false, optional: true, required: false
  private _svmAdminPassword?: string | undefined; 
  public get svmAdminPassword() {
    return this.getStringAttribute('svm_admin_password');
  }
  public set svmAdminPassword(value: string | undefined) {
    this._svmAdminPassword = value;
  }
  public resetSvmAdminPassword() {
    this._svmAdminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmAdminPasswordInput() {
    return this._svmAdminPassword
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

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // active_directory_configuration - computed: false, optional: true, required: false
  private _activeDirectoryConfiguration?: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined; 
  private __activeDirectoryConfigurationOutput = new FsxOntapStorageVirtualMachineActiveDirectoryConfigurationOutputReference(this as any, "active_directory_configuration", true);
  public get activeDirectoryConfiguration() {
    return this.__activeDirectoryConfigurationOutput;
  }
  public putActiveDirectoryConfiguration(value: FsxOntapStorageVirtualMachineActiveDirectoryConfiguration | undefined) {
    this._activeDirectoryConfiguration = value;
  }
  public resetActiveDirectoryConfiguration() {
    this._activeDirectoryConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigurationInput() {
    return this._activeDirectoryConfiguration
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FsxOntapStorageVirtualMachineTimeouts | undefined; 
  private __timeoutsOutput = new FsxOntapStorageVirtualMachineTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FsxOntapStorageVirtualMachineTimeouts | undefined) {
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
      name: cdktf.stringToTerraform(this._name),
      root_volume_security_style: cdktf.stringToTerraform(this._rootVolumeSecurityStyle),
      svm_admin_password: cdktf.stringToTerraform(this._svmAdminPassword),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      active_directory_configuration: fsxOntapStorageVirtualMachineActiveDirectoryConfigurationToTerraform(this._activeDirectoryConfiguration),
      timeouts: fsxOntapStorageVirtualMachineTimeoutsToTerraform(this._timeouts),
    };
  }
}
