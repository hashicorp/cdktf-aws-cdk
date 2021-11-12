// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Sources
*/
export interface LaunchConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#associate_public_ip_address LaunchConfiguration#associate_public_ip_address}
  */
  readonly associatePublicIpAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_optimized LaunchConfiguration#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#enable_monitoring LaunchConfiguration#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iam_instance_profile LaunchConfiguration#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#image_id LaunchConfiguration#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#instance_type LaunchConfiguration#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#key_name LaunchConfiguration#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name LaunchConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#name_prefix LaunchConfiguration#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#placement_tenancy LaunchConfiguration#placement_tenancy}
  */
  readonly placementTenancy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#security_groups LaunchConfiguration#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#spot_price LaunchConfiguration#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data LaunchConfiguration#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#user_data_base64 LaunchConfiguration#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_id LaunchConfiguration#vpc_classic_link_id}
  */
  readonly vpcClassicLinkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#vpc_classic_link_security_groups LaunchConfiguration#vpc_classic_link_security_groups}
  */
  readonly vpcClassicLinkSecurityGroups?: string[];
  /**
  * ebs_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ebs_block_device LaunchConfiguration#ebs_block_device}
  */
  readonly ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[];
  /**
  * ephemeral_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#ephemeral_block_device LaunchConfiguration#ephemeral_block_device}
  */
  readonly ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[];
  /**
  * metadata_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#metadata_options LaunchConfiguration#metadata_options}
  */
  readonly metadataOptions?: LaunchConfigurationMetadataOptions;
  /**
  * root_block_device block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#root_block_device LaunchConfiguration#root_block_device}
  */
  readonly rootBlockDevice?: LaunchConfigurationRootBlockDevice;
}
export interface LaunchConfigurationEbsBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#no_device LaunchConfiguration#no_device}
  */
  readonly noDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#snapshot_id LaunchConfiguration#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
  */
  readonly volumeType?: string;
}

export function launchConfigurationEbsBlockDeviceToTerraform(struct?: LaunchConfigurationEbsBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    no_device: cdktf.booleanToTerraform(struct!.noDevice),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export interface LaunchConfigurationEphemeralBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#device_name LaunchConfiguration#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#virtual_name LaunchConfiguration#virtual_name}
  */
  readonly virtualName: string;
}

export function launchConfigurationEphemeralBlockDeviceToTerraform(struct?: LaunchConfigurationEphemeralBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    virtual_name: cdktf.stringToTerraform(struct!.virtualName),
  }
}

export interface LaunchConfigurationMetadataOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_endpoint LaunchConfiguration#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_put_response_hop_limit LaunchConfiguration#http_put_response_hop_limit}
  */
  readonly httpPutResponseHopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#http_tokens LaunchConfiguration#http_tokens}
  */
  readonly httpTokens?: string;
}

export function launchConfigurationMetadataOptionsToTerraform(struct?: LaunchConfigurationMetadataOptionsOutputReference | LaunchConfigurationMetadataOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_put_response_hop_limit: cdktf.numberToTerraform(struct!.httpPutResponseHopLimit),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
  }
}

export class LaunchConfigurationMetadataOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // http_endpoint - computed: true, optional: true, required: false
  private _httpEndpoint?: string | undefined; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string | undefined) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint
  }

  // http_put_response_hop_limit - computed: true, optional: true, required: false
  private _httpPutResponseHopLimit?: number | undefined; 
  public get httpPutResponseHopLimit() {
    return this.getNumberAttribute('http_put_response_hop_limit');
  }
  public set httpPutResponseHopLimit(value: number | undefined) {
    this._httpPutResponseHopLimit = value;
  }
  public resetHttpPutResponseHopLimit() {
    this._httpPutResponseHopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutResponseHopLimitInput() {
    return this._httpPutResponseHopLimit
  }

  // http_tokens - computed: true, optional: true, required: false
  private _httpTokens?: string | undefined; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string | undefined) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens
  }
}
export interface LaunchConfigurationRootBlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#delete_on_termination LaunchConfiguration#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#encrypted LaunchConfiguration#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#iops LaunchConfiguration#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#throughput LaunchConfiguration#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_size LaunchConfiguration#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html#volume_type LaunchConfiguration#volume_type}
  */
  readonly volumeType?: string;
}

export function launchConfigurationRootBlockDeviceToTerraform(struct?: LaunchConfigurationRootBlockDeviceOutputReference | LaunchConfigurationRootBlockDevice): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    iops: cdktf.numberToTerraform(struct!.iops),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class LaunchConfigurationRootBlockDeviceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable | undefined; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination') as any;
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable | undefined) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination
  }

  // encrypted - computed: true, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable | undefined; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }
  public set encrypted(value: boolean | cdktf.IResolvable | undefined) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number | undefined; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number | undefined) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number | undefined; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number | undefined) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput
  }

  // volume_size - computed: true, optional: true, required: false
  private _volumeSize?: number | undefined; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number | undefined) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string | undefined; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string | undefined) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration}
*/
export class LaunchConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_launch_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/launch_configuration.html aws_launch_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LaunchConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LaunchConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_launch_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatePublicIpAddress = config.associatePublicIpAddress;
    this._ebsOptimized = config.ebsOptimized;
    this._enableMonitoring = config.enableMonitoring;
    this._iamInstanceProfile = config.iamInstanceProfile;
    this._imageId = config.imageId;
    this._instanceType = config.instanceType;
    this._keyName = config.keyName;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._placementTenancy = config.placementTenancy;
    this._securityGroups = config.securityGroups;
    this._spotPrice = config.spotPrice;
    this._userData = config.userData;
    this._userDataBase64 = config.userDataBase64;
    this._vpcClassicLinkId = config.vpcClassicLinkId;
    this._vpcClassicLinkSecurityGroups = config.vpcClassicLinkSecurityGroups;
    this._ebsBlockDevice = config.ebsBlockDevice;
    this._ephemeralBlockDevice = config.ephemeralBlockDevice;
    this._metadataOptions = config.metadataOptions;
    this._rootBlockDevice = config.rootBlockDevice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // associate_public_ip_address - computed: false, optional: true, required: false
  private _associatePublicIpAddress?: boolean | cdktf.IResolvable | undefined; 
  public get associatePublicIpAddress() {
    return this.getBooleanAttribute('associate_public_ip_address') as any;
  }
  public set associatePublicIpAddress(value: boolean | cdktf.IResolvable | undefined) {
    this._associatePublicIpAddress = value;
  }
  public resetAssociatePublicIpAddress() {
    this._associatePublicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpAddressInput() {
    return this._associatePublicIpAddress
  }

  // ebs_optimized - computed: true, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable | undefined; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized') as any;
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable | undefined) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // enable_monitoring - computed: false, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable | undefined; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring') as any;
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable | undefined) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string | undefined; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string | undefined) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
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

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string | undefined; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string | undefined) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string | undefined; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // placement_tenancy - computed: false, optional: true, required: false
  private _placementTenancy?: string | undefined; 
  public get placementTenancy() {
    return this.getStringAttribute('placement_tenancy');
  }
  public set placementTenancy(value: string | undefined) {
    this._placementTenancy = value;
  }
  public resetPlacementTenancy() {
    this._placementTenancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTenancyInput() {
    return this._placementTenancy
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[] | undefined; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[] | undefined) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string | undefined; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string | undefined) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string | undefined; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string | undefined) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string | undefined; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string | undefined) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64
  }

  // vpc_classic_link_id - computed: false, optional: true, required: false
  private _vpcClassicLinkId?: string | undefined; 
  public get vpcClassicLinkId() {
    return this.getStringAttribute('vpc_classic_link_id');
  }
  public set vpcClassicLinkId(value: string | undefined) {
    this._vpcClassicLinkId = value;
  }
  public resetVpcClassicLinkId() {
    this._vpcClassicLinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcClassicLinkIdInput() {
    return this._vpcClassicLinkId
  }

  // vpc_classic_link_security_groups - computed: false, optional: true, required: false
  private _vpcClassicLinkSecurityGroups?: string[] | undefined; 
  public get vpcClassicLinkSecurityGroups() {
    return this.getListAttribute('vpc_classic_link_security_groups');
  }
  public set vpcClassicLinkSecurityGroups(value: string[] | undefined) {
    this._vpcClassicLinkSecurityGroups = value;
  }
  public resetVpcClassicLinkSecurityGroups() {
    this._vpcClassicLinkSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcClassicLinkSecurityGroupsInput() {
    return this._vpcClassicLinkSecurityGroups
  }

  // ebs_block_device - computed: false, optional: true, required: false
  private _ebsBlockDevice?: LaunchConfigurationEbsBlockDevice[] | undefined; 
  public get ebsBlockDevice() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ebs_block_device') as any;
  }
  public set ebsBlockDevice(value: LaunchConfigurationEbsBlockDevice[] | undefined) {
    this._ebsBlockDevice = value;
  }
  public resetEbsBlockDevice() {
    this._ebsBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsBlockDeviceInput() {
    return this._ebsBlockDevice
  }

  // ephemeral_block_device - computed: false, optional: true, required: false
  private _ephemeralBlockDevice?: LaunchConfigurationEphemeralBlockDevice[] | undefined; 
  public get ephemeralBlockDevice() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ephemeral_block_device') as any;
  }
  public set ephemeralBlockDevice(value: LaunchConfigurationEphemeralBlockDevice[] | undefined) {
    this._ephemeralBlockDevice = value;
  }
  public resetEphemeralBlockDevice() {
    this._ephemeralBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralBlockDeviceInput() {
    return this._ephemeralBlockDevice
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions?: LaunchConfigurationMetadataOptions | undefined; 
  private __metadataOptionsOutput = new LaunchConfigurationMetadataOptionsOutputReference(this as any, "metadata_options", true);
  public get metadataOptions() {
    return this.__metadataOptionsOutput;
  }
  public putMetadataOptions(value: LaunchConfigurationMetadataOptions | undefined) {
    this._metadataOptions = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions
  }

  // root_block_device - computed: false, optional: true, required: false
  private _rootBlockDevice?: LaunchConfigurationRootBlockDevice | undefined; 
  private __rootBlockDeviceOutput = new LaunchConfigurationRootBlockDeviceOutputReference(this as any, "root_block_device", true);
  public get rootBlockDevice() {
    return this.__rootBlockDeviceOutput;
  }
  public putRootBlockDevice(value: LaunchConfigurationRootBlockDevice | undefined) {
    this._rootBlockDevice = value;
  }
  public resetRootBlockDevice() {
    this._rootBlockDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootBlockDeviceInput() {
    return this._rootBlockDevice
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associate_public_ip_address: cdktf.booleanToTerraform(this._associatePublicIpAddress),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      enable_monitoring: cdktf.booleanToTerraform(this._enableMonitoring),
      iam_instance_profile: cdktf.stringToTerraform(this._iamInstanceProfile),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      key_name: cdktf.stringToTerraform(this._keyName),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      placement_tenancy: cdktf.stringToTerraform(this._placementTenancy),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      spot_price: cdktf.stringToTerraform(this._spotPrice),
      user_data: cdktf.stringToTerraform(this._userData),
      user_data_base64: cdktf.stringToTerraform(this._userDataBase64),
      vpc_classic_link_id: cdktf.stringToTerraform(this._vpcClassicLinkId),
      vpc_classic_link_security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcClassicLinkSecurityGroups),
      ebs_block_device: cdktf.listMapper(launchConfigurationEbsBlockDeviceToTerraform)(this._ebsBlockDevice),
      ephemeral_block_device: cdktf.listMapper(launchConfigurationEphemeralBlockDeviceToTerraform)(this._ephemeralBlockDevice),
      metadata_options: launchConfigurationMetadataOptionsToTerraform(this._metadataOptions),
      root_block_device: launchConfigurationRootBlockDeviceToTerraform(this._rootBlockDevice),
    };
  }
}
