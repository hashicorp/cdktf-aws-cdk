// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkSpaces
*/
export namespace Workspaces {
  export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#directory_id WorkspacesDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#ip_group_ids WorkspacesDirectory#ip_group_ids}
    */
    readonly ipGroupIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#subnet_ids WorkspacesDirectory#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags WorkspacesDirectory#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#tags_all WorkspacesDirectory#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * self_service_permissions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#self_service_permissions WorkspacesDirectory#self_service_permissions}
    */
    readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
    /**
    * workspace_access_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
    */
    readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
    /**
    * workspace_creation_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
    */
    readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
  }
  export interface WorkspacesDirectorySelfServicePermissions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#change_compute_type WorkspacesDirectory#change_compute_type}
    */
    readonly changeComputeType?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#increase_volume_size WorkspacesDirectory#increase_volume_size}
    */
    readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
    */
    readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#restart_workspace WorkspacesDirectory#restart_workspace}
    */
    readonly restartWorkspace?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#switch_running_mode WorkspacesDirectory#switch_running_mode}
    */
    readonly switchRunningMode?: boolean | cdktf.IResolvable;
  }

  function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      change_compute_type: cdktf.booleanToTerraform(struct!.changeComputeType),
      increase_volume_size: cdktf.booleanToTerraform(struct!.increaseVolumeSize),
      rebuild_workspace: cdktf.booleanToTerraform(struct!.rebuildWorkspace),
      restart_workspace: cdktf.booleanToTerraform(struct!.restartWorkspace),
      switch_running_mode: cdktf.booleanToTerraform(struct!.switchRunningMode),
    }
  }

  export interface WorkspacesDirectoryWorkspaceAccessProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_android WorkspacesDirectory#device_type_android}
    */
    readonly deviceTypeAndroid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
    */
    readonly deviceTypeChromeos?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_ios WorkspacesDirectory#device_type_ios}
    */
    readonly deviceTypeIos?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_linux WorkspacesDirectory#device_type_linux}
    */
    readonly deviceTypeLinux?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_osx WorkspacesDirectory#device_type_osx}
    */
    readonly deviceTypeOsx?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_web WorkspacesDirectory#device_type_web}
    */
    readonly deviceTypeWeb?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_windows WorkspacesDirectory#device_type_windows}
    */
    readonly deviceTypeWindows?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
    */
    readonly deviceTypeZeroclient?: string;
  }

  function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      device_type_android: cdktf.stringToTerraform(struct!.deviceTypeAndroid),
      device_type_chromeos: cdktf.stringToTerraform(struct!.deviceTypeChromeos),
      device_type_ios: cdktf.stringToTerraform(struct!.deviceTypeIos),
      device_type_linux: cdktf.stringToTerraform(struct!.deviceTypeLinux),
      device_type_osx: cdktf.stringToTerraform(struct!.deviceTypeOsx),
      device_type_web: cdktf.stringToTerraform(struct!.deviceTypeWeb),
      device_type_windows: cdktf.stringToTerraform(struct!.deviceTypeWindows),
      device_type_zeroclient: cdktf.stringToTerraform(struct!.deviceTypeZeroclient),
    }
  }

  export interface WorkspacesDirectoryWorkspaceCreationProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
    */
    readonly customSecurityGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#default_ou WorkspacesDirectory#default_ou}
    */
    readonly defaultOu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_internet_access WorkspacesDirectory#enable_internet_access}
    */
    readonly enableInternetAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
    */
    readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
    */
    readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
  }

  function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      custom_security_group_id: cdktf.stringToTerraform(struct!.customSecurityGroupId),
      default_ou: cdktf.stringToTerraform(struct!.defaultOu),
      enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
      enable_maintenance_mode: cdktf.booleanToTerraform(struct!.enableMaintenanceMode),
      user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct!.userEnabledAsLocalAdministrator),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory}
  */
  export class WorkspacesDirectory extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_directory";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_directory.html aws_workspaces_directory} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesDirectoryConfig
    */
    public constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_directory',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._ipGroupIds = config.ipGroupIds;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._selfServicePermissions = config.selfServicePermissions;
      this._workspaceAccessProperties = config.workspaceAccessProperties;
      this._workspaceCreationProperties = config.workspaceCreationProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
      return this.getStringAttribute('alias');
    }

    // customer_user_name - computed: true, optional: false, required: false
    public get customerUserName() {
      return this.getStringAttribute('customer_user_name');
    }

    // directory_id - computed: false, optional: false, required: true
    private _directoryId: string;
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // directory_name - computed: true, optional: false, required: false
    public get directoryName() {
      return this.getStringAttribute('directory_name');
    }

    // directory_type - computed: true, optional: false, required: false
    public get directoryType() {
      return this.getStringAttribute('directory_type');
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
      return this.getListAttribute('dns_ip_addresses');
    }

    // iam_role_id - computed: true, optional: false, required: false
    public get iamRoleId() {
      return this.getStringAttribute('iam_role_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_group_ids - computed: true, optional: true, required: false
    private _ipGroupIds?: string[];
    public get ipGroupIds() {
      return this.getListAttribute('ip_group_ids');
    }
    public set ipGroupIds(value: string[]) {
      this._ipGroupIds = value;
    }
    public resetIpGroupIds() {
      this._ipGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipGroupIdsInput() {
      return this._ipGroupIds
    }

    // registration_code - computed: true, optional: false, required: false
    public get registrationCode() {
      return this.getStringAttribute('registration_code');
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[];
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
      this._subnetIds = value;
    }
    public resetSubnetIds() {
      this._subnetIds = undefined;
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

    // workspace_security_group_id - computed: true, optional: false, required: false
    public get workspaceSecurityGroupId() {
      return this.getStringAttribute('workspace_security_group_id');
    }

    // self_service_permissions - computed: false, optional: true, required: false
    private _selfServicePermissions?: WorkspacesDirectorySelfServicePermissions[];
    public get selfServicePermissions() {
      return this.interpolationForAttribute('self_service_permissions') as any;
    }
    public set selfServicePermissions(value: WorkspacesDirectorySelfServicePermissions[] ) {
      this._selfServicePermissions = value;
    }
    public resetSelfServicePermissions() {
      this._selfServicePermissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfServicePermissionsInput() {
      return this._selfServicePermissions
    }

    // workspace_access_properties - computed: false, optional: true, required: false
    private _workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties[];
    public get workspaceAccessProperties() {
      return this.interpolationForAttribute('workspace_access_properties') as any;
    }
    public set workspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties[] ) {
      this._workspaceAccessProperties = value;
    }
    public resetWorkspaceAccessProperties() {
      this._workspaceAccessProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceAccessPropertiesInput() {
      return this._workspaceAccessProperties
    }

    // workspace_creation_properties - computed: false, optional: true, required: false
    private _workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties[];
    public get workspaceCreationProperties() {
      return this.interpolationForAttribute('workspace_creation_properties') as any;
    }
    public set workspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties[] ) {
      this._workspaceCreationProperties = value;
    }
    public resetWorkspaceCreationProperties() {
      this._workspaceCreationProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceCreationPropertiesInput() {
      return this._workspaceCreationProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._ipGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        self_service_permissions: cdktf.listMapper(workspacesDirectorySelfServicePermissionsToTerraform)(this._selfServicePermissions),
        workspace_access_properties: cdktf.listMapper(workspacesDirectoryWorkspaceAccessPropertiesToTerraform)(this._workspaceAccessProperties),
        workspace_creation_properties: cdktf.listMapper(workspacesDirectoryWorkspaceCreationPropertiesToTerraform)(this._workspaceCreationProperties),
      };
    }
  }
  export interface WorkspacesIpGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#name WorkspacesIpGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags WorkspacesIpGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#tags_all WorkspacesIpGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * rules block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#rules WorkspacesIpGroup#rules}
    */
    readonly rules?: WorkspacesIpGroupRules[];
  }
  export interface WorkspacesIpGroupRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#description WorkspacesIpGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html#source WorkspacesIpGroup#source}
    */
    readonly source: string;
  }

  function workspacesIpGroupRulesToTerraform(struct?: WorkspacesIpGroupRules): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      description: cdktf.stringToTerraform(struct!.description),
      source: cdktf.stringToTerraform(struct!.source),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group}
  */
  export class WorkspacesIpGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_ip_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_ip_group.html aws_workspaces_ip_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesIpGroupConfig
    */
    public constructor(scope: Construct, id: string, config: WorkspacesIpGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_ip_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._rules = config.rules;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: false, optional: true, required: false
    private _description?: string;
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string ) {
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
    private _name: string;
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

    // rules - computed: false, optional: true, required: false
    private _rules?: WorkspacesIpGroupRules[];
    public get rules() {
      return this.interpolationForAttribute('rules') as any;
    }
    public set rules(value: WorkspacesIpGroupRules[] ) {
      this._rules = value;
    }
    public resetRules() {
      this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
      return this._rules
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        rules: cdktf.listMapper(workspacesIpGroupRulesToTerraform)(this._rules),
      };
    }
  }
  export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#bundle_id WorkspacesWorkspace#bundle_id}
    */
    readonly bundleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#directory_id WorkspacesWorkspace#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}
    */
    readonly rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags WorkspacesWorkspace#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#tags_all WorkspacesWorkspace#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_name WorkspacesWorkspace#user_name}
    */
    readonly userName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}
    */
    readonly userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}
    */
    readonly volumeEncryptionKey?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#timeouts WorkspacesWorkspace#timeouts}
    */
    readonly timeouts?: WorkspacesWorkspaceTimeouts;
    /**
    * workspace_properties block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#workspace_properties WorkspacesWorkspace#workspace_properties}
    */
    readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
  }
  export interface WorkspacesWorkspaceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#create WorkspacesWorkspace#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#delete WorkspacesWorkspace#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#update WorkspacesWorkspace#update}
    */
    readonly update?: string;
  }

  function workspacesWorkspaceTimeoutsToTerraform(struct?: WorkspacesWorkspaceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export interface WorkspacesWorkspaceWorkspaceProperties {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#compute_type_name WorkspacesWorkspace#compute_type_name}
    */
    readonly computeTypeName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}
    */
    readonly rootVolumeSizeGib?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode WorkspacesWorkspace#running_mode}
    */
    readonly runningMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}
    */
    readonly runningModeAutoStopTimeoutInMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}
    */
    readonly userVolumeSizeGib?: number;
  }

  function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspaceProperties): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      compute_type_name: cdktf.stringToTerraform(struct!.computeTypeName),
      root_volume_size_gib: cdktf.numberToTerraform(struct!.rootVolumeSizeGib),
      running_mode: cdktf.stringToTerraform(struct!.runningMode),
      running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct!.runningModeAutoStopTimeoutInMinutes),
      user_volume_size_gib: cdktf.numberToTerraform(struct!.userVolumeSizeGib),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace}
  */
  export class WorkspacesWorkspace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_workspace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/workspaces_workspace.html aws_workspaces_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WorkspacesWorkspaceConfig
    */
    public constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_workspace',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bundleId = config.bundleId;
      this._directoryId = config.directoryId;
      this._rootVolumeEncryptionEnabled = config.rootVolumeEncryptionEnabled;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._userName = config.userName;
      this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
      this._volumeEncryptionKey = config.volumeEncryptionKey;
      this._timeouts = config.timeouts;
      this._workspaceProperties = config.workspaceProperties;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bundle_id - computed: false, optional: false, required: true
    private _bundleId: string;
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string) {
      this._bundleId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
      return this._bundleId
    }

    // computer_name - computed: true, optional: false, required: false
    public get computerName() {
      return this.getStringAttribute('computer_name');
    }

    // directory_id - computed: false, optional: false, required: true
    private _directoryId: string;
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }

    // root_volume_encryption_enabled - computed: false, optional: true, required: false
    private _rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    public get rootVolumeEncryptionEnabled() {
      return this.getBooleanAttribute('root_volume_encryption_enabled');
    }
    public set rootVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable ) {
      this._rootVolumeEncryptionEnabled = value;
    }
    public resetRootVolumeEncryptionEnabled() {
      this._rootVolumeEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rootVolumeEncryptionEnabledInput() {
      return this._rootVolumeEncryptionEnabled
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
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

    // user_name - computed: false, optional: false, required: true
    private _userName: string;
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // user_volume_encryption_enabled - computed: false, optional: true, required: false
    private _userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
    public get userVolumeEncryptionEnabled() {
      return this.getBooleanAttribute('user_volume_encryption_enabled');
    }
    public set userVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable ) {
      this._userVolumeEncryptionEnabled = value;
    }
    public resetUserVolumeEncryptionEnabled() {
      this._userVolumeEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userVolumeEncryptionEnabledInput() {
      return this._userVolumeEncryptionEnabled
    }

    // volume_encryption_key - computed: false, optional: true, required: false
    private _volumeEncryptionKey?: string;
    public get volumeEncryptionKey() {
      return this.getStringAttribute('volume_encryption_key');
    }
    public set volumeEncryptionKey(value: string ) {
      this._volumeEncryptionKey = value;
    }
    public resetVolumeEncryptionKey() {
      this._volumeEncryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeEncryptionKeyInput() {
      return this._volumeEncryptionKey
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: WorkspacesWorkspaceTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: WorkspacesWorkspaceTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // workspace_properties - computed: false, optional: true, required: false
    private _workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties[];
    public get workspaceProperties() {
      return this.interpolationForAttribute('workspace_properties') as any;
    }
    public set workspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties[] ) {
      this._workspaceProperties = value;
    }
    public resetWorkspaceProperties() {
      this._workspaceProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspacePropertiesInput() {
      return this._workspaceProperties
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        directory_id: cdktf.stringToTerraform(this._directoryId),
        root_volume_encryption_enabled: cdktf.booleanToTerraform(this._rootVolumeEncryptionEnabled),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user_name: cdktf.stringToTerraform(this._userName),
        user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
        volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
        timeouts: workspacesWorkspaceTimeoutsToTerraform(this._timeouts),
        workspace_properties: cdktf.listMapper(workspacesWorkspaceWorkspacePropertiesToTerraform)(this._workspaceProperties),
      };
    }
  }
  export interface DataAwsWorkspacesBundleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#bundle_id DataAwsWorkspacesBundle#bundle_id}
    */
    readonly bundleId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#name DataAwsWorkspacesBundle#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html#owner DataAwsWorkspacesBundle#owner}
    */
    readonly owner?: string;
  }
  export class DataAwsWorkspacesBundleComputeType extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class DataAwsWorkspacesBundleRootStorage extends cdktf.ComplexComputedList {

    // capacity - computed: true, optional: false, required: false
    public get capacity() {
      return this.getStringAttribute('capacity');
    }
  }
  export class DataAwsWorkspacesBundleUserStorage extends cdktf.ComplexComputedList {

    // capacity - computed: true, optional: false, required: false
    public get capacity() {
      return this.getStringAttribute('capacity');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle}
  */
  export class DataAwsWorkspacesBundle extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_bundle";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle.html aws_workspaces_bundle} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesBundleConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsWorkspacesBundleConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_bundle',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._bundleId = config.bundleId;
      this._name = config.name;
      this._owner = config.owner;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bundle_id - computed: false, optional: true, required: false
    private _bundleId?: string;
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }
    public set bundleId(value: string ) {
      this._bundleId = value;
    }
    public resetBundleId() {
      this._bundleId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bundleIdInput() {
      return this._bundleId
    }

    // compute_type - computed: true, optional: false, required: false
    public computeType(index: string) {
      return new DataAwsWorkspacesBundleComputeType(this, 'compute_type', index);
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string ) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // owner - computed: false, optional: true, required: false
    private _owner?: string;
    public get owner() {
      return this.getStringAttribute('owner');
    }
    public set owner(value: string ) {
      this._owner = value;
    }
    public resetOwner() {
      this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
      return this._owner
    }

    // root_storage - computed: true, optional: false, required: false
    public rootStorage(index: string) {
      return new DataAwsWorkspacesBundleRootStorage(this, 'root_storage', index);
    }

    // user_storage - computed: true, optional: false, required: false
    public userStorage(index: string) {
      return new DataAwsWorkspacesBundleUserStorage(this, 'user_storage', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        bundle_id: cdktf.stringToTerraform(this._bundleId),
        name: cdktf.stringToTerraform(this._name),
        owner: cdktf.stringToTerraform(this._owner),
      };
    }
  }
  export interface DataAwsWorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#directory_id DataAwsWorkspacesDirectory#directory_id}
    */
    readonly directoryId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html#tags DataAwsWorkspacesDirectory#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsWorkspacesDirectorySelfServicePermissions extends cdktf.ComplexComputedList {

    // change_compute_type - computed: true, optional: false, required: false
    public get changeComputeType() {
      return this.getBooleanAttribute('change_compute_type');
    }

    // increase_volume_size - computed: true, optional: false, required: false
    public get increaseVolumeSize() {
      return this.getBooleanAttribute('increase_volume_size');
    }

    // rebuild_workspace - computed: true, optional: false, required: false
    public get rebuildWorkspace() {
      return this.getBooleanAttribute('rebuild_workspace');
    }

    // restart_workspace - computed: true, optional: false, required: false
    public get restartWorkspace() {
      return this.getBooleanAttribute('restart_workspace');
    }

    // switch_running_mode - computed: true, optional: false, required: false
    public get switchRunningMode() {
      return this.getBooleanAttribute('switch_running_mode');
    }
  }
  export class DataAwsWorkspacesDirectoryWorkspaceAccessProperties extends cdktf.ComplexComputedList {

    // device_type_android - computed: true, optional: false, required: false
    public get deviceTypeAndroid() {
      return this.getStringAttribute('device_type_android');
    }

    // device_type_chromeos - computed: true, optional: false, required: false
    public get deviceTypeChromeos() {
      return this.getStringAttribute('device_type_chromeos');
    }

    // device_type_ios - computed: true, optional: false, required: false
    public get deviceTypeIos() {
      return this.getStringAttribute('device_type_ios');
    }

    // device_type_linux - computed: true, optional: false, required: false
    public get deviceTypeLinux() {
      return this.getStringAttribute('device_type_linux');
    }

    // device_type_osx - computed: true, optional: false, required: false
    public get deviceTypeOsx() {
      return this.getStringAttribute('device_type_osx');
    }

    // device_type_web - computed: true, optional: false, required: false
    public get deviceTypeWeb() {
      return this.getStringAttribute('device_type_web');
    }

    // device_type_windows - computed: true, optional: false, required: false
    public get deviceTypeWindows() {
      return this.getStringAttribute('device_type_windows');
    }

    // device_type_zeroclient - computed: true, optional: false, required: false
    public get deviceTypeZeroclient() {
      return this.getStringAttribute('device_type_zeroclient');
    }
  }
  export class DataAwsWorkspacesDirectoryWorkspaceCreationProperties extends cdktf.ComplexComputedList {

    // custom_security_group_id - computed: true, optional: false, required: false
    public get customSecurityGroupId() {
      return this.getStringAttribute('custom_security_group_id');
    }

    // default_ou - computed: true, optional: false, required: false
    public get defaultOu() {
      return this.getStringAttribute('default_ou');
    }

    // enable_internet_access - computed: true, optional: false, required: false
    public get enableInternetAccess() {
      return this.getBooleanAttribute('enable_internet_access');
    }

    // enable_maintenance_mode - computed: true, optional: false, required: false
    public get enableMaintenanceMode() {
      return this.getBooleanAttribute('enable_maintenance_mode');
    }

    // user_enabled_as_local_administrator - computed: true, optional: false, required: false
    public get userEnabledAsLocalAdministrator() {
      return this.getBooleanAttribute('user_enabled_as_local_administrator');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory}
  */
  export class DataAwsWorkspacesDirectory extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_directory";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_directory.html aws_workspaces_directory} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesDirectoryConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWorkspacesDirectoryConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_directory',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alias - computed: true, optional: false, required: false
    public get alias() {
      return this.getStringAttribute('alias');
    }

    // customer_user_name - computed: true, optional: false, required: false
    public get customerUserName() {
      return this.getStringAttribute('customer_user_name');
    }

    // directory_id - computed: false, optional: false, required: true
    private _directoryId: string;
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // directory_name - computed: true, optional: false, required: false
    public get directoryName() {
      return this.getStringAttribute('directory_name');
    }

    // directory_type - computed: true, optional: false, required: false
    public get directoryType() {
      return this.getStringAttribute('directory_type');
    }

    // dns_ip_addresses - computed: true, optional: false, required: false
    public get dnsIpAddresses() {
      return this.getListAttribute('dns_ip_addresses');
    }

    // iam_role_id - computed: true, optional: false, required: false
    public get iamRoleId() {
      return this.getStringAttribute('iam_role_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_group_ids - computed: true, optional: false, required: false
    public get ipGroupIds() {
      return this.getListAttribute('ip_group_ids');
    }

    // registration_code - computed: true, optional: false, required: false
    public get registrationCode() {
      return this.getStringAttribute('registration_code');
    }

    // self_service_permissions - computed: true, optional: false, required: false
    public selfServicePermissions(index: string) {
      return new DataAwsWorkspacesDirectorySelfServicePermissions(this, 'self_service_permissions', index);
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
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

    // workspace_access_properties - computed: true, optional: false, required: false
    public workspaceAccessProperties(index: string) {
      return new DataAwsWorkspacesDirectoryWorkspaceAccessProperties(this, 'workspace_access_properties', index);
    }

    // workspace_creation_properties - computed: true, optional: false, required: false
    public workspaceCreationProperties(index: string) {
      return new DataAwsWorkspacesDirectoryWorkspaceCreationProperties(this, 'workspace_creation_properties', index);
    }

    // workspace_security_group_id - computed: true, optional: false, required: false
    public get workspaceSecurityGroupId() {
      return this.getStringAttribute('workspace_security_group_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsWorkspacesImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html#image_id DataAwsWorkspacesImage#image_id}
    */
    readonly imageId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image}
  */
  export class DataAwsWorkspacesImage extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_image";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_image.html aws_workspaces_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesImageConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWorkspacesImageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_image',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._imageId = config.imageId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image_id - computed: false, optional: false, required: true
    private _imageId: string;
    public get imageId() {
      return this.getStringAttribute('image_id');
    }
    public set imageId(value: string) {
      this._imageId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdInput() {
      return this._imageId
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // operating_system_type - computed: true, optional: false, required: false
    public get operatingSystemType() {
      return this.getStringAttribute('operating_system_type');
    }

    // required_tenancy - computed: true, optional: false, required: false
    public get requiredTenancy() {
      return this.getStringAttribute('required_tenancy');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        image_id: cdktf.stringToTerraform(this._imageId),
      };
    }
  }
  export interface DataAwsWorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#directory_id DataAwsWorkspacesWorkspace#directory_id}
    */
    readonly directoryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#tags DataAwsWorkspacesWorkspace#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#user_name DataAwsWorkspacesWorkspace#user_name}
    */
    readonly userName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html#workspace_id DataAwsWorkspacesWorkspace#workspace_id}
    */
    readonly workspaceId?: string;
  }
  export class DataAwsWorkspacesWorkspaceWorkspaceProperties extends cdktf.ComplexComputedList {

    // compute_type_name - computed: true, optional: false, required: false
    public get computeTypeName() {
      return this.getStringAttribute('compute_type_name');
    }

    // root_volume_size_gib - computed: true, optional: false, required: false
    public get rootVolumeSizeGib() {
      return this.getNumberAttribute('root_volume_size_gib');
    }

    // running_mode - computed: true, optional: false, required: false
    public get runningMode() {
      return this.getStringAttribute('running_mode');
    }

    // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: false, required: false
    public get runningModeAutoStopTimeoutInMinutes() {
      return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
    }

    // user_volume_size_gib - computed: true, optional: false, required: false
    public get userVolumeSizeGib() {
      return this.getNumberAttribute('user_volume_size_gib');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace}
  */
  export class DataAwsWorkspacesWorkspace extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_workspaces_workspace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_workspace.html aws_workspaces_workspace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWorkspacesWorkspaceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsWorkspacesWorkspaceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_workspaces_workspace',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._directoryId = config.directoryId;
      this._tags = config.tags;
      this._userName = config.userName;
      this._workspaceId = config.workspaceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bundle_id - computed: true, optional: false, required: false
    public get bundleId() {
      return this.getStringAttribute('bundle_id');
    }

    // computer_name - computed: true, optional: false, required: false
    public get computerName() {
      return this.getStringAttribute('computer_name');
    }

    // directory_id - computed: true, optional: true, required: false
    private _directoryId?: string;
    public get directoryId() {
      return this.getStringAttribute('directory_id');
    }
    public set directoryId(value: string) {
      this._directoryId = value;
    }
    public resetDirectoryId() {
      this._directoryId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directoryIdInput() {
      return this._directoryId
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: false, required: false
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }

    // root_volume_encryption_enabled - computed: true, optional: false, required: false
    public get rootVolumeEncryptionEnabled() {
      return this.getBooleanAttribute('root_volume_encryption_enabled');
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
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

    // user_name - computed: true, optional: true, required: false
    private _userName?: string;
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string) {
      this._userName = value;
    }
    public resetUserName() {
      this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // user_volume_encryption_enabled - computed: true, optional: false, required: false
    public get userVolumeEncryptionEnabled() {
      return this.getBooleanAttribute('user_volume_encryption_enabled');
    }

    // volume_encryption_key - computed: true, optional: false, required: false
    public get volumeEncryptionKey() {
      return this.getStringAttribute('volume_encryption_key');
    }

    // workspace_id - computed: true, optional: true, required: false
    private _workspaceId?: string;
    public get workspaceId() {
      return this.getStringAttribute('workspace_id');
    }
    public set workspaceId(value: string) {
      this._workspaceId = value;
    }
    public resetWorkspaceId() {
      this._workspaceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceIdInput() {
      return this._workspaceId
    }

    // workspace_properties - computed: true, optional: false, required: false
    public workspaceProperties(index: string) {
      return new DataAwsWorkspacesWorkspaceWorkspaceProperties(this, 'workspace_properties', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        directory_id: cdktf.stringToTerraform(this._directoryId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        user_name: cdktf.stringToTerraform(this._userName),
        workspace_id: cdktf.stringToTerraform(this._workspaceId),
      };
    }
  }
}
