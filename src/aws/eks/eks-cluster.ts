// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export interface EksClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#enabled_cluster_log_types EksCluster#enabled_cluster_log_types}
  */
  readonly enabledClusterLogTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#name EksCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#role_arn EksCluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags EksCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#tags_all EksCluster#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#version EksCluster#version}
  */
  readonly version?: string;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#encryption_config EksCluster#encryption_config}
  */
  readonly encryptionConfig?: EksClusterEncryptionConfig;
  /**
  * kubernetes_network_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
  */
  readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#timeouts EksCluster#timeouts}
  */
  readonly timeouts?: EksClusterTimeouts;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#vpc_config EksCluster#vpc_config}
  */
  readonly vpcConfig: EksClusterVpcConfig;
}
export class EksClusterCertificateAuthority extends cdktf.ComplexComputedList {

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }
}
export class EksClusterIdentityOidc extends cdktf.ComplexComputedList {

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
}
export class EksClusterIdentity extends cdktf.ComplexComputedList {

  // oidc - computed: true, optional: false, required: false
  public get oidc() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('oidc') as any;
  }
}
export interface EksClusterEncryptionConfigProvider {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}
  */
  readonly keyArn: string;
}

export function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProviderOutputReference | EksClusterEncryptionConfigProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_arn: cdktf.stringToTerraform(struct!.keyArn),
  }
}

export class EksClusterEncryptionConfigProviderOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_arn - computed: false, optional: false, required: true
  private _keyArn?: string; 
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }
  public set keyArn(value: string) {
    this._keyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyArnInput() {
    return this._keyArn
  }
}
export interface EksClusterEncryptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#resources EksCluster#resources}
  */
  readonly resources: string[];
  /**
  * provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#provider EksCluster#provider}
  */
  readonly provider: EksClusterEncryptionConfigProvider;
}

export function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfigOutputReference | EksClusterEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    provider: eksClusterEncryptionConfigProviderToTerraform(struct!.provider),
  }
}

export class EksClusterEncryptionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: EksClusterEncryptionConfigProvider; 
  private __providerOutput = new EksClusterEncryptionConfigProviderOutputReference(this as any, "provider", true);
  public get provider() {
    return this.__providerOutput;
  }
  public putProvider(value: EksClusterEncryptionConfigProvider) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider
  }
}
export interface EksClusterKubernetesNetworkConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
}

export function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfigOutputReference | EksClusterKubernetesNetworkConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
  }
}

export class EksClusterKubernetesNetworkConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // service_ipv4_cidr - computed: true, optional: true, required: false
  private _serviceIpv4Cidr?: string | undefined; 
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
  public set serviceIpv4Cidr(value: string | undefined) {
    this._serviceIpv4Cidr = value;
  }
  public resetServiceIpv4Cidr() {
    this._serviceIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4CidrInput() {
    return this._serviceIpv4Cidr
  }
}
export interface EksClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#create EksCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#delete EksCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#update EksCluster#update}
  */
  readonly update?: string;
}

export function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeoutsOutputReference | EksClusterTimeouts): any {
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

export class EksClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface EksClusterVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_private_access EksCluster#endpoint_private_access}
  */
  readonly endpointPrivateAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#endpoint_public_access EksCluster#endpoint_public_access}
  */
  readonly endpointPublicAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#public_access_cidrs EksCluster#public_access_cidrs}
  */
  readonly publicAccessCidrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#security_group_ids EksCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#subnet_ids EksCluster#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfigOutputReference | EksClusterVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
    endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
    public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicAccessCidrs),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}

export class EksClusterVpcConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // endpoint_private_access - computed: false, optional: true, required: false
  private _endpointPrivateAccess?: boolean | cdktf.IResolvable | undefined; 
  public get endpointPrivateAccess() {
    return this.getBooleanAttribute('endpoint_private_access') as any;
  }
  public set endpointPrivateAccess(value: boolean | cdktf.IResolvable | undefined) {
    this._endpointPrivateAccess = value;
  }
  public resetEndpointPrivateAccess() {
    this._endpointPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPrivateAccessInput() {
    return this._endpointPrivateAccess
  }

  // endpoint_public_access - computed: false, optional: true, required: false
  private _endpointPublicAccess?: boolean | cdktf.IResolvable | undefined; 
  public get endpointPublicAccess() {
    return this.getBooleanAttribute('endpoint_public_access') as any;
  }
  public set endpointPublicAccess(value: boolean | cdktf.IResolvable | undefined) {
    this._endpointPublicAccess = value;
  }
  public resetEndpointPublicAccess() {
    this._endpointPublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointPublicAccessInput() {
    return this._endpointPublicAccess
  }

  // public_access_cidrs - computed: true, optional: true, required: false
  private _publicAccessCidrs?: string[] | undefined; 
  public get publicAccessCidrs() {
    return this.getListAttribute('public_access_cidrs');
  }
  public set publicAccessCidrs(value: string[] | undefined) {
    this._publicAccessCidrs = value;
  }
  public resetPublicAccessCidrs() {
    this._publicAccessCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessCidrsInput() {
    return this._publicAccessCidrs
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
*/
export class EksCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_eks_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EksClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EksClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_eks_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabledClusterLogTypes = config.enabledClusterLogTypes;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._version = config.version;
    this._encryptionConfig = config.encryptionConfig;
    this._kubernetesNetworkConfig = config.kubernetesNetworkConfig;
    this._timeouts = config.timeouts;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority - computed: true, optional: false, required: false
  public certificateAuthority(index: string) {
    return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled_cluster_log_types - computed: false, optional: true, required: false
  private _enabledClusterLogTypes?: string[] | undefined; 
  public get enabledClusterLogTypes() {
    return this.getListAttribute('enabled_cluster_log_types');
  }
  public set enabledClusterLogTypes(value: string[] | undefined) {
    this._enabledClusterLogTypes = value;
  }
  public resetEnabledClusterLogTypes() {
    this._enabledClusterLogTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledClusterLogTypesInput() {
    return this._enabledClusterLogTypes
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new EksClusterIdentity(this, 'identity', index);
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

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: true, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig?: EksClusterEncryptionConfig | undefined; 
  private __encryptionConfigOutput = new EksClusterEncryptionConfigOutputReference(this as any, "encryption_config", true);
  public get encryptionConfig() {
    return this.__encryptionConfigOutput;
  }
  public putEncryptionConfig(value: EksClusterEncryptionConfig | undefined) {
    this._encryptionConfig = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig
  }

  // kubernetes_network_config - computed: false, optional: true, required: false
  private _kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig | undefined; 
  private __kubernetesNetworkConfigOutput = new EksClusterKubernetesNetworkConfigOutputReference(this as any, "kubernetes_network_config", true);
  public get kubernetesNetworkConfig() {
    return this.__kubernetesNetworkConfigOutput;
  }
  public putKubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig | undefined) {
    this._kubernetesNetworkConfig = value;
  }
  public resetKubernetesNetworkConfig() {
    this._kubernetesNetworkConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesNetworkConfigInput() {
    return this._kubernetesNetworkConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EksClusterTimeouts | undefined; 
  private __timeoutsOutput = new EksClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EksClusterTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpc_config - computed: false, optional: false, required: true
  private _vpcConfig?: EksClusterVpcConfig; 
  private __vpcConfigOutput = new EksClusterVpcConfigOutputReference(this as any, "vpc_config", true);
  public get vpcConfig() {
    return this.__vpcConfigOutput;
  }
  public putVpcConfig(value: EksClusterVpcConfig) {
    this._vpcConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledClusterLogTypes),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      version: cdktf.stringToTerraform(this._version),
      encryption_config: eksClusterEncryptionConfigToTerraform(this._encryptionConfig),
      kubernetes_network_config: eksClusterKubernetesNetworkConfigToTerraform(this._kubernetesNetworkConfig),
      timeouts: eksClusterTimeoutsToTerraform(this._timeouts),
      vpc_config: eksClusterVpcConfigToTerraform(this._vpcConfig),
    };
  }
}
