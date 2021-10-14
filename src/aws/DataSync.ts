// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DataSync
*/
export namespace DataSync {
  export interface DatasyncAgentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#activation_key DatasyncAgent#activation_key}
    */
    readonly activationKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#ip_address DatasyncAgent#ip_address}
    */
    readonly ipAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#name DatasyncAgent#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#private_link_endpoint DatasyncAgent#private_link_endpoint}
    */
    readonly privateLinkEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#security_group_arns DatasyncAgent#security_group_arns}
    */
    readonly securityGroupArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#subnet_arns DatasyncAgent#subnet_arns}
    */
    readonly subnetArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags DatasyncAgent#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#tags_all DatasyncAgent#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#vpc_endpoint_id DatasyncAgent#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#timeouts DatasyncAgent#timeouts}
    */
    readonly timeouts?: DatasyncAgentTimeouts;
  }
  export interface DatasyncAgentTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html#create DatasyncAgent#create}
    */
    readonly create?: string;
  }

  function datasyncAgentTimeoutsToTerraform(struct?: DatasyncAgentTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent}
  */
  export class DatasyncAgent extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_agent";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_agent.html aws_datasync_agent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncAgentConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DatasyncAgentConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_agent',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._activationKey = config.activationKey;
      this._ipAddress = config.ipAddress;
      this._name = config.name;
      this._privateLinkEndpoint = config.privateLinkEndpoint;
      this._securityGroupArns = config.securityGroupArns;
      this._subnetArns = config.subnetArns;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcEndpointId = config.vpcEndpointId;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activation_key - computed: true, optional: true, required: false
    private _activationKey?: string;
    public get activationKey() {
      return this.getStringAttribute('activation_key');
    }
    public set activationKey(value: string) {
      this._activationKey = value;
    }
    public resetActivationKey() {
      this._activationKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activationKeyInput() {
      return this._activationKey
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address - computed: true, optional: true, required: false
    private _ipAddress?: string;
    public get ipAddress() {
      return this.getStringAttribute('ip_address');
    }
    public set ipAddress(value: string) {
      this._ipAddress = value;
    }
    public resetIpAddress() {
      this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressInput() {
      return this._ipAddress
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

    // private_link_endpoint - computed: false, optional: true, required: false
    private _privateLinkEndpoint?: string;
    public get privateLinkEndpoint() {
      return this.getStringAttribute('private_link_endpoint');
    }
    public set privateLinkEndpoint(value: string ) {
      this._privateLinkEndpoint = value;
    }
    public resetPrivateLinkEndpoint() {
      this._privateLinkEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get privateLinkEndpointInput() {
      return this._privateLinkEndpoint
    }

    // security_group_arns - computed: false, optional: true, required: false
    private _securityGroupArns?: string[];
    public get securityGroupArns() {
      return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[] ) {
      this._securityGroupArns = value;
    }
    public resetSecurityGroupArns() {
      this._securityGroupArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
      return this._securityGroupArns
    }

    // subnet_arns - computed: false, optional: true, required: false
    private _subnetArns?: string[];
    public get subnetArns() {
      return this.getListAttribute('subnet_arns');
    }
    public set subnetArns(value: string[] ) {
      this._subnetArns = value;
    }
    public resetSubnetArns() {
      this._subnetArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnsInput() {
      return this._subnetArns
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

    // vpc_endpoint_id - computed: false, optional: true, required: false
    private _vpcEndpointId?: string;
    public get vpcEndpointId() {
      return this.getStringAttribute('vpc_endpoint_id');
    }
    public set vpcEndpointId(value: string ) {
      this._vpcEndpointId = value;
    }
    public resetVpcEndpointId() {
      this._vpcEndpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdInput() {
      return this._vpcEndpointId
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DatasyncAgentTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: DatasyncAgentTimeouts ) {
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
        activation_key: cdktf.stringToTerraform(this._activationKey),
        ip_address: cdktf.stringToTerraform(this._ipAddress),
        name: cdktf.stringToTerraform(this._name),
        private_link_endpoint: cdktf.stringToTerraform(this._privateLinkEndpoint),
        security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
        subnet_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetArns),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_endpoint_id: cdktf.stringToTerraform(this._vpcEndpointId),
        timeouts: datasyncAgentTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DatasyncLocationEfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#efs_file_system_arn DatasyncLocationEfs#efs_file_system_arn}
    */
    readonly efsFileSystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subdirectory DatasyncLocationEfs#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags DatasyncLocationEfs#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#tags_all DatasyncLocationEfs#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * ec2_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#ec2_config DatasyncLocationEfs#ec2_config}
    */
    readonly ec2Config: DatasyncLocationEfsEc2Config[];
  }
  export interface DatasyncLocationEfsEc2Config {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#security_group_arns DatasyncLocationEfs#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html#subnet_arn DatasyncLocationEfs#subnet_arn}
    */
    readonly subnetArn: string;
  }

  function datasyncLocationEfsEc2ConfigToTerraform(struct?: DatasyncLocationEfsEc2Config): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupArns),
      subnet_arn: cdktf.stringToTerraform(struct!.subnetArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs}
  */
  export class DatasyncLocationEfs extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_location_efs";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_efs.html aws_datasync_location_efs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationEfsConfig
    */
    public constructor(scope: Construct, id: string, config: DatasyncLocationEfsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_location_efs',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._efsFileSystemArn = config.efsFileSystemArn;
      this._subdirectory = config.subdirectory;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._ec2Config = config.ec2Config;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // efs_file_system_arn - computed: false, optional: false, required: true
    private _efsFileSystemArn: string;
    public get efsFileSystemArn() {
      return this.getStringAttribute('efs_file_system_arn');
    }
    public set efsFileSystemArn(value: string) {
      this._efsFileSystemArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get efsFileSystemArnInput() {
      return this._efsFileSystemArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // subdirectory - computed: false, optional: true, required: false
    private _subdirectory?: string;
    public get subdirectory() {
      return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string ) {
      this._subdirectory = value;
    }
    public resetSubdirectory() {
      this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
      return this._subdirectory
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

    // uri - computed: true, optional: false, required: false
    public get uri() {
      return this.getStringAttribute('uri');
    }

    // ec2_config - computed: false, optional: false, required: true
    private _ec2Config: DatasyncLocationEfsEc2Config[];
    public get ec2Config() {
      return this.interpolationForAttribute('ec2_config') as any;
    }
    public set ec2Config(value: DatasyncLocationEfsEc2Config[]) {
      this._ec2Config = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2ConfigInput() {
      return this._ec2Config
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        efs_file_system_arn: cdktf.stringToTerraform(this._efsFileSystemArn),
        subdirectory: cdktf.stringToTerraform(this._subdirectory),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        ec2_config: cdktf.listMapper(datasyncLocationEfsEc2ConfigToTerraform)(this._ec2Config),
      };
    }
  }
  export interface DatasyncLocationFsxWindowsFileSystemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#domain DatasyncLocationFsxWindowsFileSystem#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#fsx_filesystem_arn DatasyncLocationFsxWindowsFileSystem#fsx_filesystem_arn}
    */
    readonly fsxFilesystemArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#password DatasyncLocationFsxWindowsFileSystem#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#security_group_arns DatasyncLocationFsxWindowsFileSystem#security_group_arns}
    */
    readonly securityGroupArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#subdirectory DatasyncLocationFsxWindowsFileSystem#subdirectory}
    */
    readonly subdirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags DatasyncLocationFsxWindowsFileSystem#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#tags_all DatasyncLocationFsxWindowsFileSystem#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html#user DatasyncLocationFsxWindowsFileSystem#user}
    */
    readonly user: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system}
  */
  export class DatasyncLocationFsxWindowsFileSystem extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_location_fsx_windows_file_system";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_fsx_windows_file_system.html aws_datasync_location_fsx_windows_file_system} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationFsxWindowsFileSystemConfig
    */
    public constructor(scope: Construct, id: string, config: DatasyncLocationFsxWindowsFileSystemConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_location_fsx_windows_file_system',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domain = config.domain;
      this._fsxFilesystemArn = config.fsxFilesystemArn;
      this._password = config.password;
      this._securityGroupArns = config.securityGroupArns;
      this._subdirectory = config.subdirectory;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._user = config.user;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
      return this.getStringAttribute('creation_time');
    }

    // domain - computed: false, optional: true, required: false
    private _domain?: string;
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string ) {
      this._domain = value;
    }
    public resetDomain() {
      this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // fsx_filesystem_arn - computed: false, optional: false, required: true
    private _fsxFilesystemArn: string;
    public get fsxFilesystemArn() {
      return this.getStringAttribute('fsx_filesystem_arn');
    }
    public set fsxFilesystemArn(value: string) {
      this._fsxFilesystemArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fsxFilesystemArnInput() {
      return this._fsxFilesystemArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // password - computed: false, optional: false, required: true
    private _password: string;
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

    // security_group_arns - computed: false, optional: false, required: true
    private _securityGroupArns: string[];
    public get securityGroupArns() {
      return this.getListAttribute('security_group_arns');
    }
    public set securityGroupArns(value: string[]) {
      this._securityGroupArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupArnsInput() {
      return this._securityGroupArns
    }

    // subdirectory - computed: true, optional: true, required: false
    private _subdirectory?: string;
    public get subdirectory() {
      return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
      this._subdirectory = value;
    }
    public resetSubdirectory() {
      this._subdirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
      return this._subdirectory
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

    // uri - computed: true, optional: false, required: false
    public get uri() {
      return this.getStringAttribute('uri');
    }

    // user - computed: false, optional: false, required: true
    private _user: string;
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        domain: cdktf.stringToTerraform(this._domain),
        fsx_filesystem_arn: cdktf.stringToTerraform(this._fsxFilesystemArn),
        password: cdktf.stringToTerraform(this._password),
        security_group_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupArns),
        subdirectory: cdktf.stringToTerraform(this._subdirectory),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user: cdktf.stringToTerraform(this._user),
      };
    }
  }
  export interface DatasyncLocationNfsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#server_hostname DatasyncLocationNfs#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#subdirectory DatasyncLocationNfs#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags DatasyncLocationNfs#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#tags_all DatasyncLocationNfs#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * mount_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#mount_options DatasyncLocationNfs#mount_options}
    */
    readonly mountOptions?: DatasyncLocationNfsMountOptions[];
    /**
    * on_prem_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#on_prem_config DatasyncLocationNfs#on_prem_config}
    */
    readonly onPremConfig: DatasyncLocationNfsOnPremConfig[];
  }
  export interface DatasyncLocationNfsMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#version DatasyncLocationNfs#version}
    */
    readonly version?: string;
  }

  function datasyncLocationNfsMountOptionsToTerraform(struct?: DatasyncLocationNfsMountOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface DatasyncLocationNfsOnPremConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html#agent_arns DatasyncLocationNfs#agent_arns}
    */
    readonly agentArns: string[];
  }

  function datasyncLocationNfsOnPremConfigToTerraform(struct?: DatasyncLocationNfsOnPremConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.agentArns),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs}
  */
  export class DatasyncLocationNfs extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_location_nfs";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_nfs.html aws_datasync_location_nfs} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationNfsConfig
    */
    public constructor(scope: Construct, id: string, config: DatasyncLocationNfsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_location_nfs',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._serverHostname = config.serverHostname;
      this._subdirectory = config.subdirectory;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._mountOptions = config.mountOptions;
      this._onPremConfig = config.onPremConfig;
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

    // server_hostname - computed: false, optional: false, required: true
    private _serverHostname: string;
    public get serverHostname() {
      return this.getStringAttribute('server_hostname');
    }
    public set serverHostname(value: string) {
      this._serverHostname = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverHostnameInput() {
      return this._serverHostname
    }

    // subdirectory - computed: false, optional: false, required: true
    private _subdirectory: string;
    public get subdirectory() {
      return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
      this._subdirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
      return this._subdirectory
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

    // uri - computed: true, optional: false, required: false
    public get uri() {
      return this.getStringAttribute('uri');
    }

    // mount_options - computed: false, optional: true, required: false
    private _mountOptions?: DatasyncLocationNfsMountOptions[];
    public get mountOptions() {
      return this.interpolationForAttribute('mount_options') as any;
    }
    public set mountOptions(value: DatasyncLocationNfsMountOptions[] ) {
      this._mountOptions = value;
    }
    public resetMountOptions() {
      this._mountOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountOptionsInput() {
      return this._mountOptions
    }

    // on_prem_config - computed: false, optional: false, required: true
    private _onPremConfig: DatasyncLocationNfsOnPremConfig[];
    public get onPremConfig() {
      return this.interpolationForAttribute('on_prem_config') as any;
    }
    public set onPremConfig(value: DatasyncLocationNfsOnPremConfig[]) {
      this._onPremConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get onPremConfigInput() {
      return this._onPremConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        server_hostname: cdktf.stringToTerraform(this._serverHostname),
        subdirectory: cdktf.stringToTerraform(this._subdirectory),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        mount_options: cdktf.listMapper(datasyncLocationNfsMountOptionsToTerraform)(this._mountOptions),
        on_prem_config: cdktf.listMapper(datasyncLocationNfsOnPremConfigToTerraform)(this._onPremConfig),
      };
    }
  }
  export interface DatasyncLocationS3Config extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#agent_arns DatasyncLocationS3#agent_arns}
    */
    readonly agentArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_bucket_arn DatasyncLocationS3#s3_bucket_arn}
    */
    readonly s3BucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_storage_class DatasyncLocationS3#s3_storage_class}
    */
    readonly s3StorageClass?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#subdirectory DatasyncLocationS3#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags DatasyncLocationS3#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#tags_all DatasyncLocationS3#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * s3_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#s3_config DatasyncLocationS3#s3_config}
    */
    readonly s3Config: DatasyncLocationS3S3Config[];
  }
  export interface DatasyncLocationS3S3Config {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html#bucket_access_role_arn DatasyncLocationS3#bucket_access_role_arn}
    */
    readonly bucketAccessRoleArn: string;
  }

  function datasyncLocationS3S3ConfigToTerraform(struct?: DatasyncLocationS3S3Config): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket_access_role_arn: cdktf.stringToTerraform(struct!.bucketAccessRoleArn),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3}
  */
  export class DatasyncLocationS3 extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_location_s3";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_s3.html aws_datasync_location_s3} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationS3Config
    */
    public constructor(scope: Construct, id: string, config: DatasyncLocationS3Config) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_location_s3',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._agentArns = config.agentArns;
      this._s3BucketArn = config.s3BucketArn;
      this._s3StorageClass = config.s3StorageClass;
      this._subdirectory = config.subdirectory;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._s3Config = config.s3Config;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: false, optional: true, required: false
    private _agentArns?: string[];
    public get agentArns() {
      return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[] ) {
      this._agentArns = value;
    }
    public resetAgentArns() {
      this._agentArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
      return this._agentArns
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // s3_bucket_arn - computed: false, optional: false, required: true
    private _s3BucketArn: string;
    public get s3BucketArn() {
      return this.getStringAttribute('s3_bucket_arn');
    }
    public set s3BucketArn(value: string) {
      this._s3BucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketArnInput() {
      return this._s3BucketArn
    }

    // s3_storage_class - computed: true, optional: true, required: false
    private _s3StorageClass?: string;
    public get s3StorageClass() {
      return this.getStringAttribute('s3_storage_class');
    }
    public set s3StorageClass(value: string) {
      this._s3StorageClass = value;
    }
    public resetS3StorageClass() {
      this._s3StorageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3StorageClassInput() {
      return this._s3StorageClass
    }

    // subdirectory - computed: false, optional: false, required: true
    private _subdirectory: string;
    public get subdirectory() {
      return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
      this._subdirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
      return this._subdirectory
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

    // uri - computed: true, optional: false, required: false
    public get uri() {
      return this.getStringAttribute('uri');
    }

    // s3_config - computed: false, optional: false, required: true
    private _s3Config: DatasyncLocationS3S3Config[];
    public get s3Config() {
      return this.interpolationForAttribute('s3_config') as any;
    }
    public set s3Config(value: DatasyncLocationS3S3Config[]) {
      this._s3Config = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigInput() {
      return this._s3Config
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
        s3_bucket_arn: cdktf.stringToTerraform(this._s3BucketArn),
        s3_storage_class: cdktf.stringToTerraform(this._s3StorageClass),
        subdirectory: cdktf.stringToTerraform(this._subdirectory),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        s3_config: cdktf.listMapper(datasyncLocationS3S3ConfigToTerraform)(this._s3Config),
      };
    }
  }
  export interface DatasyncLocationSmbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#agent_arns DatasyncLocationSmb#agent_arns}
    */
    readonly agentArns: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#domain DatasyncLocationSmb#domain}
    */
    readonly domain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#password DatasyncLocationSmb#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#server_hostname DatasyncLocationSmb#server_hostname}
    */
    readonly serverHostname: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#subdirectory DatasyncLocationSmb#subdirectory}
    */
    readonly subdirectory: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags DatasyncLocationSmb#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#tags_all DatasyncLocationSmb#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#user DatasyncLocationSmb#user}
    */
    readonly user: string;
    /**
    * mount_options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#mount_options DatasyncLocationSmb#mount_options}
    */
    readonly mountOptions?: DatasyncLocationSmbMountOptions[];
  }
  export interface DatasyncLocationSmbMountOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html#version DatasyncLocationSmb#version}
    */
    readonly version?: string;
  }

  function datasyncLocationSmbMountOptionsToTerraform(struct?: DatasyncLocationSmbMountOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      version: cdktf.stringToTerraform(struct!.version),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb}
  */
  export class DatasyncLocationSmb extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_location_smb";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_location_smb.html aws_datasync_location_smb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncLocationSmbConfig
    */
    public constructor(scope: Construct, id: string, config: DatasyncLocationSmbConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_location_smb',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._agentArns = config.agentArns;
      this._domain = config.domain;
      this._password = config.password;
      this._serverHostname = config.serverHostname;
      this._subdirectory = config.subdirectory;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._user = config.user;
      this._mountOptions = config.mountOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_arns - computed: false, optional: false, required: true
    private _agentArns: string[];
    public get agentArns() {
      return this.getListAttribute('agent_arns');
    }
    public set agentArns(value: string[]) {
      this._agentArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get agentArnsInput() {
      return this._agentArns
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string;
    public get domain() {
      return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
      this._domain = value;
    }
    public resetDomain() {
      this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
      return this._domain
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // password - computed: false, optional: false, required: true
    private _password: string;
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

    // server_hostname - computed: false, optional: false, required: true
    private _serverHostname: string;
    public get serverHostname() {
      return this.getStringAttribute('server_hostname');
    }
    public set serverHostname(value: string) {
      this._serverHostname = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverHostnameInput() {
      return this._serverHostname
    }

    // subdirectory - computed: false, optional: false, required: true
    private _subdirectory: string;
    public get subdirectory() {
      return this.getStringAttribute('subdirectory');
    }
    public set subdirectory(value: string) {
      this._subdirectory = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subdirectoryInput() {
      return this._subdirectory
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

    // uri - computed: true, optional: false, required: false
    public get uri() {
      return this.getStringAttribute('uri');
    }

    // user - computed: false, optional: false, required: true
    private _user: string;
    public get user() {
      return this.getStringAttribute('user');
    }
    public set user(value: string) {
      this._user = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userInput() {
      return this._user
    }

    // mount_options - computed: false, optional: true, required: false
    private _mountOptions?: DatasyncLocationSmbMountOptions[];
    public get mountOptions() {
      return this.interpolationForAttribute('mount_options') as any;
    }
    public set mountOptions(value: DatasyncLocationSmbMountOptions[] ) {
      this._mountOptions = value;
    }
    public resetMountOptions() {
      this._mountOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mountOptionsInput() {
      return this._mountOptions
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        agent_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._agentArns),
        domain: cdktf.stringToTerraform(this._domain),
        password: cdktf.stringToTerraform(this._password),
        server_hostname: cdktf.stringToTerraform(this._serverHostname),
        subdirectory: cdktf.stringToTerraform(this._subdirectory),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        user: cdktf.stringToTerraform(this._user),
        mount_options: cdktf.listMapper(datasyncLocationSmbMountOptionsToTerraform)(this._mountOptions),
      };
    }
  }
  export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}
    */
    readonly destinationLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#name DatasyncTask#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}
    */
    readonly sourceLocationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags DatasyncTask#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags_all DatasyncTask#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * excludes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#excludes DatasyncTask#excludes}
    */
    readonly excludes?: DatasyncTaskExcludes[];
    /**
    * options block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#options DatasyncTask#options}
    */
    readonly options?: DatasyncTaskOptions[];
    /**
    * schedule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule DatasyncTask#schedule}
    */
    readonly schedule?: DatasyncTaskSchedule[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#timeouts DatasyncTask#timeouts}
    */
    readonly timeouts?: DatasyncTaskTimeouts;
  }
  export interface DatasyncTaskExcludes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#filter_type DatasyncTask#filter_type}
    */
    readonly filterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#value DatasyncTask#value}
    */
    readonly value?: string;
  }

  function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      filter_type: cdktf.stringToTerraform(struct!.filterType),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface DatasyncTaskOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#atime DatasyncTask#atime}
    */
    readonly atime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}
    */
    readonly bytesPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#gid DatasyncTask#gid}
    */
    readonly gid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#log_level DatasyncTask#log_level}
    */
    readonly logLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#mtime DatasyncTask#mtime}
    */
    readonly mtime?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}
    */
    readonly overwriteMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}
    */
    readonly posixPermissions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}
    */
    readonly preserveDeletedFiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}
    */
    readonly preserveDevices?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}
    */
    readonly taskQueueing?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}
    */
    readonly transferMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#uid DatasyncTask#uid}
    */
    readonly uid?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}
    */
    readonly verifyMode?: string;
  }

  function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      atime: cdktf.stringToTerraform(struct!.atime),
      bytes_per_second: cdktf.numberToTerraform(struct!.bytesPerSecond),
      gid: cdktf.stringToTerraform(struct!.gid),
      log_level: cdktf.stringToTerraform(struct!.logLevel),
      mtime: cdktf.stringToTerraform(struct!.mtime),
      overwrite_mode: cdktf.stringToTerraform(struct!.overwriteMode),
      posix_permissions: cdktf.stringToTerraform(struct!.posixPermissions),
      preserve_deleted_files: cdktf.stringToTerraform(struct!.preserveDeletedFiles),
      preserve_devices: cdktf.stringToTerraform(struct!.preserveDevices),
      task_queueing: cdktf.stringToTerraform(struct!.taskQueueing),
      transfer_mode: cdktf.stringToTerraform(struct!.transferMode),
      uid: cdktf.stringToTerraform(struct!.uid),
      verify_mode: cdktf.stringToTerraform(struct!.verifyMode),
    }
  }

  export interface DatasyncTaskSchedule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
    */
    readonly scheduleExpression: string;
  }

  function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskSchedule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    }
  }

  export interface DatasyncTaskTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#create DatasyncTask#create}
    */
    readonly create?: string;
  }

  function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}
  */
  export class DatasyncTask extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_datasync_task";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatasyncTaskConfig
    */
    public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_datasync_task',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
      this._destinationLocationArn = config.destinationLocationArn;
      this._name = config.name;
      this._sourceLocationArn = config.sourceLocationArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._excludes = config.excludes;
      this._options = config.options;
      this._schedule = config.schedule;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cloudwatch_log_group_arn - computed: false, optional: true, required: false
    private _cloudwatchLogGroupArn?: string;
    public get cloudwatchLogGroupArn() {
      return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    public set cloudwatchLogGroupArn(value: string ) {
      this._cloudwatchLogGroupArn = value;
    }
    public resetCloudwatchLogGroupArn() {
      this._cloudwatchLogGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogGroupArnInput() {
      return this._cloudwatchLogGroupArn
    }

    // destination_location_arn - computed: false, optional: false, required: true
    private _destinationLocationArn: string;
    public get destinationLocationArn() {
      return this.getStringAttribute('destination_location_arn');
    }
    public set destinationLocationArn(value: string) {
      this._destinationLocationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationLocationArnInput() {
      return this._destinationLocationArn
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

    // source_location_arn - computed: false, optional: false, required: true
    private _sourceLocationArn: string;
    public get sourceLocationArn() {
      return this.getStringAttribute('source_location_arn');
    }
    public set sourceLocationArn(value: string) {
      this._sourceLocationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLocationArnInput() {
      return this._sourceLocationArn
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

    // excludes - computed: false, optional: true, required: false
    private _excludes?: DatasyncTaskExcludes[];
    public get excludes() {
      return this.interpolationForAttribute('excludes') as any;
    }
    public set excludes(value: DatasyncTaskExcludes[] ) {
      this._excludes = value;
    }
    public resetExcludes() {
      this._excludes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludesInput() {
      return this._excludes
    }

    // options - computed: false, optional: true, required: false
    private _options?: DatasyncTaskOptions[];
    public get options() {
      return this.interpolationForAttribute('options') as any;
    }
    public set options(value: DatasyncTaskOptions[] ) {
      this._options = value;
    }
    public resetOptions() {
      this._options = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionsInput() {
      return this._options
    }

    // schedule - computed: false, optional: true, required: false
    private _schedule?: DatasyncTaskSchedule[];
    public get schedule() {
      return this.interpolationForAttribute('schedule') as any;
    }
    public set schedule(value: DatasyncTaskSchedule[] ) {
      this._schedule = value;
    }
    public resetSchedule() {
      this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
      return this._schedule
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: DatasyncTaskTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: DatasyncTaskTimeouts ) {
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
        cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
        destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
        name: cdktf.stringToTerraform(this._name),
        source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        excludes: cdktf.listMapper(datasyncTaskExcludesToTerraform)(this._excludes),
        options: cdktf.listMapper(datasyncTaskOptionsToTerraform)(this._options),
        schedule: cdktf.listMapper(datasyncTaskScheduleToTerraform)(this._schedule),
        timeouts: datasyncTaskTimeoutsToTerraform(this._timeouts),
      };
    }
  }
}
