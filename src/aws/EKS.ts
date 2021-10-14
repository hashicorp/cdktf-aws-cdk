// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Kubernetes Service
*/
export namespace EKS {
  export interface EksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_name EksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#addon_version EksAddon#addon_version}
    */
    readonly addonVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#cluster_name EksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#resolve_conflicts EksAddon#resolve_conflicts}
    */
    readonly resolveConflicts?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#service_account_role_arn EksAddon#service_account_role_arn}
    */
    readonly serviceAccountRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags EksAddon#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html#tags_all EksAddon#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon}
  */
  export class EksAddon extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_addon";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_addon.html aws_eks_addon} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksAddonConfig
    */
    public constructor(scope: Construct, id: string, config: EksAddonConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_addon',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addonName = config.addonName;
      this._addonVersion = config.addonVersion;
      this._clusterName = config.clusterName;
      this._resolveConflicts = config.resolveConflicts;
      this._serviceAccountRoleArn = config.serviceAccountRoleArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addon_name - computed: false, optional: false, required: true
    private _addonName: string;
    public get addonName() {
      return this.getStringAttribute('addon_name');
    }
    public set addonName(value: string) {
      this._addonName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addonNameInput() {
      return this._addonName
    }

    // addon_version - computed: true, optional: true, required: false
    private _addonVersion?: string;
    public get addonVersion() {
      return this.getStringAttribute('addon_version');
    }
    public set addonVersion(value: string) {
      this._addonVersion = value;
    }
    public resetAddonVersion() {
      this._addonVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addonVersionInput() {
      return this._addonVersion
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
      return this.getStringAttribute('modified_at');
    }

    // resolve_conflicts - computed: false, optional: true, required: false
    private _resolveConflicts?: string;
    public get resolveConflicts() {
      return this.getStringAttribute('resolve_conflicts');
    }
    public set resolveConflicts(value: string ) {
      this._resolveConflicts = value;
    }
    public resetResolveConflicts() {
      this._resolveConflicts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resolveConflictsInput() {
      return this._resolveConflicts
    }

    // service_account_role_arn - computed: false, optional: true, required: false
    private _serviceAccountRoleArn?: string;
    public get serviceAccountRoleArn() {
      return this.getStringAttribute('service_account_role_arn');
    }
    public set serviceAccountRoleArn(value: string ) {
      this._serviceAccountRoleArn = value;
    }
    public resetServiceAccountRoleArn() {
      this._serviceAccountRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccountRoleArnInput() {
      return this._serviceAccountRoleArn
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        addon_name: cdktf.stringToTerraform(this._addonName),
        addon_version: cdktf.stringToTerraform(this._addonVersion),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        resolve_conflicts: cdktf.stringToTerraform(this._resolveConflicts),
        service_account_role_arn: cdktf.stringToTerraform(this._serviceAccountRoleArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
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
    readonly encryptionConfig?: EksClusterEncryptionConfig[];
    /**
    * kubernetes_network_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#kubernetes_network_config EksCluster#kubernetes_network_config}
    */
    readonly kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
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
    readonly vpcConfig: EksClusterVpcConfig[];
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
      return this.interpolationForAttribute('oidc') as any;
    }
  }
  export interface EksClusterEncryptionConfigProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#key_arn EksCluster#key_arn}
    */
    readonly keyArn: string;
  }

  function eksClusterEncryptionConfigProviderToTerraform(struct?: EksClusterEncryptionConfigProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key_arn: cdktf.stringToTerraform(struct!.keyArn),
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
    readonly provider: EksClusterEncryptionConfigProvider[];
  }

  function eksClusterEncryptionConfigToTerraform(struct?: EksClusterEncryptionConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
      provider: cdktf.listMapper(eksClusterEncryptionConfigProviderToTerraform)(struct!.provider),
    }
  }

  export interface EksClusterKubernetesNetworkConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html#service_ipv4_cidr EksCluster#service_ipv4_cidr}
    */
    readonly serviceIpv4Cidr?: string;
  }

  function eksClusterKubernetesNetworkConfigToTerraform(struct?: EksClusterKubernetesNetworkConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
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

  function eksClusterTimeoutsToTerraform(struct?: EksClusterTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
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

  function eksClusterVpcConfigToTerraform(struct?: EksClusterVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      endpoint_private_access: cdktf.booleanToTerraform(struct!.endpointPrivateAccess),
      endpoint_public_access: cdktf.booleanToTerraform(struct!.endpointPublicAccess),
      public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicAccessCidrs),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
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
    private _enabledClusterLogTypes?: string[];
    public get enabledClusterLogTypes() {
      return this.getListAttribute('enabled_cluster_log_types');
    }
    public set enabledClusterLogTypes(value: string[] ) {
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

    // platform_version - computed: true, optional: false, required: false
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn: string;
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

    // version - computed: true, optional: true, required: false
    private _version?: string;
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
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
    private _encryptionConfig?: EksClusterEncryptionConfig[];
    public get encryptionConfig() {
      return this.interpolationForAttribute('encryption_config') as any;
    }
    public set encryptionConfig(value: EksClusterEncryptionConfig[] ) {
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
    private _kubernetesNetworkConfig?: EksClusterKubernetesNetworkConfig[];
    public get kubernetesNetworkConfig() {
      return this.interpolationForAttribute('kubernetes_network_config') as any;
    }
    public set kubernetesNetworkConfig(value: EksClusterKubernetesNetworkConfig[] ) {
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
    private _timeouts?: EksClusterTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EksClusterTimeouts ) {
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
    private _vpcConfig: EksClusterVpcConfig[];
    public get vpcConfig() {
      return this.interpolationForAttribute('vpc_config') as any;
    }
    public set vpcConfig(value: EksClusterVpcConfig[]) {
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
        encryption_config: cdktf.listMapper(eksClusterEncryptionConfigToTerraform)(this._encryptionConfig),
        kubernetes_network_config: cdktf.listMapper(eksClusterKubernetesNetworkConfigToTerraform)(this._kubernetesNetworkConfig),
        timeouts: eksClusterTimeoutsToTerraform(this._timeouts),
        vpc_config: cdktf.listMapper(eksClusterVpcConfigToTerraform)(this._vpcConfig),
      };
    }
  }
  export interface EksFargateProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#cluster_name EksFargateProfile#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#fargate_profile_name EksFargateProfile#fargate_profile_name}
    */
    readonly fargateProfileName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#pod_execution_role_arn EksFargateProfile#pod_execution_role_arn}
    */
    readonly podExecutionRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#subnet_ids EksFargateProfile#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags EksFargateProfile#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#tags_all EksFargateProfile#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * selector block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#selector EksFargateProfile#selector}
    */
    readonly selector: EksFargateProfileSelector[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#timeouts EksFargateProfile#timeouts}
    */
    readonly timeouts?: EksFargateProfileTimeouts;
  }
  export interface EksFargateProfileSelector {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#labels EksFargateProfile#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#namespace EksFargateProfile#namespace}
    */
    readonly namespace: string;
  }

  function eksFargateProfileSelectorToTerraform(struct?: EksFargateProfileSelector): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
      namespace: cdktf.stringToTerraform(struct!.namespace),
    }
  }

  export interface EksFargateProfileTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#create EksFargateProfile#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html#delete EksFargateProfile#delete}
    */
    readonly delete?: string;
  }

  function eksFargateProfileTimeoutsToTerraform(struct?: EksFargateProfileTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile}
  */
  export class EksFargateProfile extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_fargate_profile";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_fargate_profile.html aws_eks_fargate_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksFargateProfileConfig
    */
    public constructor(scope: Construct, id: string, config: EksFargateProfileConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_fargate_profile',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._fargateProfileName = config.fargateProfileName;
      this._podExecutionRoleArn = config.podExecutionRoleArn;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._selector = config.selector;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // fargate_profile_name - computed: false, optional: false, required: true
    private _fargateProfileName: string;
    public get fargateProfileName() {
      return this.getStringAttribute('fargate_profile_name');
    }
    public set fargateProfileName(value: string) {
      this._fargateProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fargateProfileNameInput() {
      return this._fargateProfileName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pod_execution_role_arn - computed: false, optional: false, required: true
    private _podExecutionRoleArn: string;
    public get podExecutionRoleArn() {
      return this.getStringAttribute('pod_execution_role_arn');
    }
    public set podExecutionRoleArn(value: string) {
      this._podExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get podExecutionRoleArnInput() {
      return this._podExecutionRoleArn
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // subnet_ids - computed: false, optional: true, required: false
    private _subnetIds?: string[];
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[] ) {
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

    // selector - computed: false, optional: false, required: true
    private _selector: EksFargateProfileSelector[];
    public get selector() {
      return this.interpolationForAttribute('selector') as any;
    }
    public set selector(value: EksFargateProfileSelector[]) {
      this._selector = value;
    }
    // Temporarily expose input value. Use with caution.
    public get selectorInput() {
      return this._selector
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksFargateProfileTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EksFargateProfileTimeouts ) {
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
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        fargate_profile_name: cdktf.stringToTerraform(this._fargateProfileName),
        pod_execution_role_arn: cdktf.stringToTerraform(this._podExecutionRoleArn),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        selector: cdktf.listMapper(eksFargateProfileSelectorToTerraform)(this._selector),
        timeouts: eksFargateProfileTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#cluster_name EksIdentityProviderConfig#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags EksIdentityProviderConfig#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags_all EksIdentityProviderConfig#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#oidc EksIdentityProviderConfig#oidc}
    */
    readonly oidc: EksIdentityProviderConfigOidc[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#timeouts EksIdentityProviderConfig#timeouts}
    */
    readonly timeouts?: EksIdentityProviderConfigTimeouts;
  }
  export interface EksIdentityProviderConfigOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#client_id EksIdentityProviderConfig#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_claim EksIdentityProviderConfig#groups_claim}
    */
    readonly groupsClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_prefix EksIdentityProviderConfig#groups_prefix}
    */
    readonly groupsPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
    */
    readonly identityProviderConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#issuer_url EksIdentityProviderConfig#issuer_url}
    */
    readonly issuerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#required_claims EksIdentityProviderConfig#required_claims}
    */
    readonly requiredClaims?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_claim EksIdentityProviderConfig#username_claim}
    */
    readonly usernameClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_prefix EksIdentityProviderConfig#username_prefix}
    */
    readonly usernamePrefix?: string;
  }

  function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
      groups_prefix: cdktf.stringToTerraform(struct!.groupsPrefix),
      identity_provider_config_name: cdktf.stringToTerraform(struct!.identityProviderConfigName),
      issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
      required_claims: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requiredClaims),
      username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
      username_prefix: cdktf.stringToTerraform(struct!.usernamePrefix),
    }
  }

  export interface EksIdentityProviderConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#create EksIdentityProviderConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#delete EksIdentityProviderConfig#delete}
    */
    readonly delete?: string;
  }

  function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
  */
  export class EksIdentityProviderConfig extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_identity_provider_config";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksIdentityProviderConfigConfig
    */
    public constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_identity_provider_config',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._oidc = config.oidc;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // oidc - computed: false, optional: false, required: true
    private _oidc: EksIdentityProviderConfigOidc[];
    public get oidc() {
      return this.interpolationForAttribute('oidc') as any;
    }
    public set oidc(value: EksIdentityProviderConfigOidc[]) {
      this._oidc = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oidcInput() {
      return this._oidc
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksIdentityProviderConfigTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EksIdentityProviderConfigTimeouts ) {
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
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        oidc: cdktf.listMapper(eksIdentityProviderConfigOidcToTerraform)(this._oidc),
        timeouts: eksIdentityProviderConfigTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ami_type EksNodeGroup#ami_type}
    */
    readonly amiType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#capacity_type EksNodeGroup#capacity_type}
    */
    readonly capacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#cluster_name EksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#disk_size EksNodeGroup#disk_size}
    */
    readonly diskSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#force_update_version EksNodeGroup#force_update_version}
    */
    readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#instance_types EksNodeGroup#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#labels EksNodeGroup#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name EksNodeGroup#node_group_name}
    */
    readonly nodeGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
    */
    readonly nodeGroupNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_role_arn EksNodeGroup#node_role_arn}
    */
    readonly nodeRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#release_version EksNodeGroup#release_version}
    */
    readonly releaseVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#subnet_ids EksNodeGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags EksNodeGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags_all EksNodeGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version?: string;
    /**
    * launch_template block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#launch_template EksNodeGroup#launch_template}
    */
    readonly launchTemplate?: EksNodeGroupLaunchTemplate[];
    /**
    * remote_access block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
    */
    readonly remoteAccess?: EksNodeGroupRemoteAccess[];
    /**
    * scaling_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
    */
    readonly scalingConfig: EksNodeGroupScalingConfig[];
    /**
    * taint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#taint EksNodeGroup#taint}
    */
    readonly taint?: EksNodeGroupTaint[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#timeouts EksNodeGroup#timeouts}
    */
    readonly timeouts?: EksNodeGroupTimeouts;
    /**
    * update_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update_config EksNodeGroup#update_config}
    */
    readonly updateConfig?: EksNodeGroupUpdateConfig[];
  }
  export class EksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class EksNodeGroupResources extends cdktf.ComplexComputedList {

    // autoscaling_groups - computed: true, optional: false, required: false
    public get autoscalingGroups() {
      return this.interpolationForAttribute('autoscaling_groups') as any;
    }

    // remote_access_security_group_id - computed: true, optional: false, required: false
    public get remoteAccessSecurityGroupId() {
      return this.getStringAttribute('remote_access_security_group_id');
    }
  }
  export interface EksNodeGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#id EksNodeGroup#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#name EksNodeGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version: string;
  }

  function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      id: cdktf.stringToTerraform(struct!.id),
      name: cdktf.stringToTerraform(struct!.name),
      version: cdktf.stringToTerraform(struct!.version),
    }
  }

  export interface EksNodeGroupRemoteAccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
    */
    readonly ec2SshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#source_security_group_ids EksNodeGroup#source_security_group_ids}
    */
    readonly sourceSecurityGroupIds?: string[];
  }

  function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccess): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      ec2_ssh_key: cdktf.stringToTerraform(struct!.ec2SshKey),
      source_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceSecurityGroupIds),
    }
  }

  export interface EksNodeGroupScalingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#desired_size EksNodeGroup#desired_size}
    */
    readonly desiredSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_size EksNodeGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#min_size EksNodeGroup#min_size}
    */
    readonly minSize: number;
  }

  function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      desired_size: cdktf.numberToTerraform(struct!.desiredSize),
      max_size: cdktf.numberToTerraform(struct!.maxSize),
      min_size: cdktf.numberToTerraform(struct!.minSize),
    }
  }

  export interface EksNodeGroupTaint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#effect EksNodeGroup#effect}
    */
    readonly effect: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#key EksNodeGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#value EksNodeGroup#value}
    */
    readonly value?: string;
  }

  function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      effect: cdktf.stringToTerraform(struct!.effect),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface EksNodeGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#create EksNodeGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#delete EksNodeGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update EksNodeGroup#update}
    */
    readonly update?: string;
  }

  function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export interface EksNodeGroupUpdateConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable EksNodeGroup#max_unavailable}
    */
    readonly maxUnavailable?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
    */
    readonly maxUnavailablePercentage?: number;
  }

  function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
      max_unavailable_percentage: cdktf.numberToTerraform(struct!.maxUnavailablePercentage),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}
  */
  export class EksNodeGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksNodeGroupConfig
    */
    public constructor(scope: Construct, id: string, config: EksNodeGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._amiType = config.amiType;
      this._capacityType = config.capacityType;
      this._clusterName = config.clusterName;
      this._diskSize = config.diskSize;
      this._forceUpdateVersion = config.forceUpdateVersion;
      this._instanceTypes = config.instanceTypes;
      this._labels = config.labels;
      this._nodeGroupName = config.nodeGroupName;
      this._nodeGroupNamePrefix = config.nodeGroupNamePrefix;
      this._nodeRoleArn = config.nodeRoleArn;
      this._releaseVersion = config.releaseVersion;
      this._subnetIds = config.subnetIds;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._version = config.version;
      this._launchTemplate = config.launchTemplate;
      this._remoteAccess = config.remoteAccess;
      this._scalingConfig = config.scalingConfig;
      this._taint = config.taint;
      this._timeouts = config.timeouts;
      this._updateConfig = config.updateConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami_type - computed: true, optional: true, required: false
    private _amiType?: string;
    public get amiType() {
      return this.getStringAttribute('ami_type');
    }
    public set amiType(value: string) {
      this._amiType = value;
    }
    public resetAmiType() {
      this._amiType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amiTypeInput() {
      return this._amiType
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capacity_type - computed: true, optional: true, required: false
    private _capacityType?: string;
    public get capacityType() {
      return this.getStringAttribute('capacity_type');
    }
    public set capacityType(value: string) {
      this._capacityType = value;
    }
    public resetCapacityType() {
      this._capacityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityTypeInput() {
      return this._capacityType
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // disk_size - computed: true, optional: true, required: false
    private _diskSize?: number;
    public get diskSize() {
      return this.getNumberAttribute('disk_size');
    }
    public set diskSize(value: number) {
      this._diskSize = value;
    }
    public resetDiskSize() {
      this._diskSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get diskSizeInput() {
      return this._diskSize
    }

    // force_update_version - computed: false, optional: true, required: false
    private _forceUpdateVersion?: boolean | cdktf.IResolvable;
    public get forceUpdateVersion() {
      return this.getBooleanAttribute('force_update_version');
    }
    public set forceUpdateVersion(value: boolean | cdktf.IResolvable ) {
      this._forceUpdateVersion = value;
    }
    public resetForceUpdateVersion() {
      this._forceUpdateVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceUpdateVersionInput() {
      return this._forceUpdateVersion
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: true, required: false
    private _instanceTypes?: string[];
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[]) {
      this._instanceTypes = value;
    }
    public resetInstanceTypes() {
      this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
      return this._instanceTypes
    }

    // labels - computed: false, optional: true, required: false
    private _labels?: { [key: string]: string } | cdktf.IResolvable;
    public get labels() {
      return this.interpolationForAttribute('labels') as any;
    }
    public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._labels = value;
    }
    public resetLabels() {
      this._labels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelsInput() {
      return this._labels
    }

    // node_group_name - computed: true, optional: true, required: false
    private _nodeGroupName?: string;
    public get nodeGroupName() {
      return this.getStringAttribute('node_group_name');
    }
    public set nodeGroupName(value: string) {
      this._nodeGroupName = value;
    }
    public resetNodeGroupName() {
      this._nodeGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNameInput() {
      return this._nodeGroupName
    }

    // node_group_name_prefix - computed: true, optional: true, required: false
    private _nodeGroupNamePrefix?: string;
    public get nodeGroupNamePrefix() {
      return this.getStringAttribute('node_group_name_prefix');
    }
    public set nodeGroupNamePrefix(value: string) {
      this._nodeGroupNamePrefix = value;
    }
    public resetNodeGroupNamePrefix() {
      this._nodeGroupNamePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNamePrefixInput() {
      return this._nodeGroupNamePrefix
    }

    // node_role_arn - computed: false, optional: false, required: true
    private _nodeRoleArn: string;
    public get nodeRoleArn() {
      return this.getStringAttribute('node_role_arn');
    }
    public set nodeRoleArn(value: string) {
      this._nodeRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeRoleArnInput() {
      return this._nodeRoleArn
    }

    // release_version - computed: true, optional: true, required: false
    private _releaseVersion?: string;
    public get releaseVersion() {
      return this.getStringAttribute('release_version');
    }
    public set releaseVersion(value: string) {
      this._releaseVersion = value;
    }
    public resetReleaseVersion() {
      this._releaseVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get releaseVersionInput() {
      return this._releaseVersion
    }

    // resources - computed: true, optional: false, required: false
    public resources(index: string) {
      return new EksNodeGroupResources(this, 'resources', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // version - computed: true, optional: true, required: false
    private _version?: string;
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    public resetVersion() {
      this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // launch_template - computed: false, optional: true, required: false
    private _launchTemplate?: EksNodeGroupLaunchTemplate[];
    public get launchTemplate() {
      return this.interpolationForAttribute('launch_template') as any;
    }
    public set launchTemplate(value: EksNodeGroupLaunchTemplate[] ) {
      this._launchTemplate = value;
    }
    public resetLaunchTemplate() {
      this._launchTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTemplateInput() {
      return this._launchTemplate
    }

    // remote_access - computed: false, optional: true, required: false
    private _remoteAccess?: EksNodeGroupRemoteAccess[];
    public get remoteAccess() {
      return this.interpolationForAttribute('remote_access') as any;
    }
    public set remoteAccess(value: EksNodeGroupRemoteAccess[] ) {
      this._remoteAccess = value;
    }
    public resetRemoteAccess() {
      this._remoteAccess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get remoteAccessInput() {
      return this._remoteAccess
    }

    // scaling_config - computed: false, optional: false, required: true
    private _scalingConfig: EksNodeGroupScalingConfig[];
    public get scalingConfig() {
      return this.interpolationForAttribute('scaling_config') as any;
    }
    public set scalingConfig(value: EksNodeGroupScalingConfig[]) {
      this._scalingConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigInput() {
      return this._scalingConfig
    }

    // taint - computed: false, optional: true, required: false
    private _taint?: EksNodeGroupTaint[];
    public get taint() {
      return this.interpolationForAttribute('taint') as any;
    }
    public set taint(value: EksNodeGroupTaint[] ) {
      this._taint = value;
    }
    public resetTaint() {
      this._taint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taintInput() {
      return this._taint
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EksNodeGroupTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EksNodeGroupTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // update_config - computed: false, optional: true, required: false
    private _updateConfig?: EksNodeGroupUpdateConfig[];
    public get updateConfig() {
      return this.interpolationForAttribute('update_config') as any;
    }
    public set updateConfig(value: EksNodeGroupUpdateConfig[] ) {
      this._updateConfig = value;
    }
    public resetUpdateConfig() {
      this._updateConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateConfigInput() {
      return this._updateConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        ami_type: cdktf.stringToTerraform(this._amiType),
        capacity_type: cdktf.stringToTerraform(this._capacityType),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        disk_size: cdktf.numberToTerraform(this._diskSize),
        force_update_version: cdktf.booleanToTerraform(this._forceUpdateVersion),
        instance_types: cdktf.listMapper(cdktf.stringToTerraform)(this._instanceTypes),
        labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
        node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
        node_group_name_prefix: cdktf.stringToTerraform(this._nodeGroupNamePrefix),
        node_role_arn: cdktf.stringToTerraform(this._nodeRoleArn),
        release_version: cdktf.stringToTerraform(this._releaseVersion),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._subnetIds),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        version: cdktf.stringToTerraform(this._version),
        launch_template: cdktf.listMapper(eksNodeGroupLaunchTemplateToTerraform)(this._launchTemplate),
        remote_access: cdktf.listMapper(eksNodeGroupRemoteAccessToTerraform)(this._remoteAccess),
        scaling_config: cdktf.listMapper(eksNodeGroupScalingConfigToTerraform)(this._scalingConfig),
        taint: cdktf.listMapper(eksNodeGroupTaintToTerraform)(this._taint),
        timeouts: eksNodeGroupTimeoutsToTerraform(this._timeouts),
        update_config: cdktf.listMapper(eksNodeGroupUpdateConfigToTerraform)(this._updateConfig),
      };
    }
  }
  export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#addon_name DataAwsEksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#cluster_name DataAwsEksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#tags DataAwsEksAddon#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}
  */
  export class DataAwsEksAddon extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_addon";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksAddonConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_addon',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._addonName = config.addonName;
      this._clusterName = config.clusterName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // addon_name - computed: false, optional: false, required: true
    private _addonName: string;
    public get addonName() {
      return this.getStringAttribute('addon_name');
    }
    public set addonName(value: string) {
      this._addonName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get addonNameInput() {
      return this._addonName
    }

    // addon_version - computed: true, optional: false, required: false
    public get addonVersion() {
      return this.getStringAttribute('addon_version');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
      return this.getStringAttribute('modified_at');
    }

    // service_account_role_arn - computed: true, optional: false, required: false
    public get serviceAccountRoleArn() {
      return this.getStringAttribute('service_account_role_arn');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        addon_name: cdktf.stringToTerraform(this._addonName),
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#name DataAwsEksCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html#tags DataAwsEksCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEksClusterCertificateAuthority extends cdktf.ComplexComputedList {

    // data - computed: true, optional: false, required: false
    public get data() {
      return this.getStringAttribute('data');
    }
  }
  export class DataAwsEksClusterIdentityOidc extends cdktf.ComplexComputedList {

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
      return this.getStringAttribute('issuer');
    }
  }
  export class DataAwsEksClusterIdentity extends cdktf.ComplexComputedList {

    // oidc - computed: true, optional: false, required: false
    public get oidc() {
      return this.interpolationForAttribute('oidc') as any;
    }
  }
  export class DataAwsEksClusterKubernetesNetworkConfig extends cdktf.ComplexComputedList {

    // service_ipv4_cidr - computed: true, optional: false, required: false
    public get serviceIpv4Cidr() {
      return this.getStringAttribute('service_ipv4_cidr');
    }
  }
  export class DataAwsEksClusterVpcConfig extends cdktf.ComplexComputedList {

    // cluster_security_group_id - computed: true, optional: false, required: false
    public get clusterSecurityGroupId() {
      return this.getStringAttribute('cluster_security_group_id');
    }

    // endpoint_private_access - computed: true, optional: false, required: false
    public get endpointPrivateAccess() {
      return this.getBooleanAttribute('endpoint_private_access');
    }

    // endpoint_public_access - computed: true, optional: false, required: false
    public get endpointPublicAccess() {
      return this.getBooleanAttribute('endpoint_public_access');
    }

    // public_access_cidrs - computed: true, optional: false, required: false
    public get publicAccessCidrs() {
      return this.getListAttribute('public_access_cidrs');
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
      return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
  */
  export class DataAwsEksCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClusterConfig) {
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
      this._name = config.name;
      this._tags = config.tags;
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
      return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
      return this.getStringAttribute('created_at');
    }

    // enabled_cluster_log_types - computed: true, optional: false, required: false
    public get enabledClusterLogTypes() {
      return this.getListAttribute('enabled_cluster_log_types');
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
      return new DataAwsEksClusterIdentity(this, 'identity', index);
    }

    // kubernetes_network_config - computed: true, optional: false, required: false
    public kubernetesNetworkConfig(index: string) {
      return new DataAwsEksClusterKubernetesNetworkConfig(this, 'kubernetes_network_config', index);
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

    // platform_version - computed: true, optional: false, required: false
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }

    // role_arn - computed: true, optional: false, required: false
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // vpc_config - computed: true, optional: false, required: false
    public vpcConfig(index: string) {
      return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksClusterAuthConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html#name DataAwsEksClusterAuth#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html aws_eks_cluster_auth}
  */
  export class DataAwsEksClusterAuth extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_cluster_auth";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster_auth.html aws_eks_cluster_auth} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterAuthConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClusterAuthConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_cluster_auth',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // token - computed: true, optional: false, required: false
    public get token() {
      return this.getStringAttribute('token');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsEksClustersConfig extends cdktf.TerraformMetaArguments {
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters}
  */
  export class DataAwsEksClusters extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_clusters";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClustersConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksClustersConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_clusters',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
      };
    }
  }
  export interface DataAwsEksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#cluster_name DataAwsEksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#node_group_name DataAwsEksNodeGroup#node_group_name}
    */
    readonly nodeGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#tags DataAwsEksNodeGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsEksNodeGroupRemoteAccess extends cdktf.ComplexComputedList {

    // ec2_ssh_key - computed: true, optional: false, required: false
    public get ec2SshKey() {
      return this.getStringAttribute('ec2_ssh_key');
    }

    // source_security_group_ids - computed: true, optional: false, required: false
    public get sourceSecurityGroupIds() {
      return this.getListAttribute('source_security_group_ids');
    }
  }
  export class DataAwsEksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }
  }
  export class DataAwsEksNodeGroupResources extends cdktf.ComplexComputedList {

    // autoscaling_groups - computed: true, optional: false, required: false
    public get autoscalingGroups() {
      return this.interpolationForAttribute('autoscaling_groups') as any;
    }

    // remote_access_security_group_id - computed: true, optional: false, required: false
    public get remoteAccessSecurityGroupId() {
      return this.getStringAttribute('remote_access_security_group_id');
    }
  }
  export class DataAwsEksNodeGroupScalingConfig extends cdktf.ComplexComputedList {

    // desired_size - computed: true, optional: false, required: false
    public get desiredSize() {
      return this.getNumberAttribute('desired_size');
    }

    // max_size - computed: true, optional: false, required: false
    public get maxSize() {
      return this.getNumberAttribute('max_size');
    }

    // min_size - computed: true, optional: false, required: false
    public get minSize() {
      return this.getNumberAttribute('min_size');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}
  */
  export class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
      this._nodeGroupName = config.nodeGroupName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // ami_type - computed: true, optional: false, required: false
    public get amiType() {
      return this.getStringAttribute('ami_type');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // disk_size - computed: true, optional: false, required: false
    public get diskSize() {
      return this.getNumberAttribute('disk_size');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_types - computed: true, optional: false, required: false
    public get instanceTypes() {
      return this.getListAttribute('instance_types');
    }

    // labels - computed: true, optional: false, required: false
    public labels(key: string): string {
      return new cdktf.StringMap(this, 'labels').lookup(key);
    }

    // node_group_name - computed: false, optional: false, required: true
    private _nodeGroupName: string;
    public get nodeGroupName() {
      return this.getStringAttribute('node_group_name');
    }
    public set nodeGroupName(value: string) {
      this._nodeGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupNameInput() {
      return this._nodeGroupName
    }

    // node_role_arn - computed: true, optional: false, required: false
    public get nodeRoleArn() {
      return this.getStringAttribute('node_role_arn');
    }

    // release_version - computed: true, optional: false, required: false
    public get releaseVersion() {
      return this.getStringAttribute('release_version');
    }

    // remote_access - computed: true, optional: false, required: false
    public remoteAccess(index: string) {
      return new DataAwsEksNodeGroupRemoteAccess(this, 'remote_access', index);
    }

    // resources - computed: true, optional: false, required: false
    public resources(index: string) {
      return new DataAwsEksNodeGroupResources(this, 'resources', index);
    }

    // scaling_config - computed: true, optional: false, required: false
    public scalingConfig(index: string) {
      return new DataAwsEksNodeGroupScalingConfig(this, 'scaling_config', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
      return this.getListAttribute('subnet_ids');
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

    // version - computed: true, optional: false, required: false
    public get version() {
      return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
        node_group_name: cdktf.stringToTerraform(this._nodeGroupName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsEksNodeGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html#cluster_name DataAwsEksNodeGroups#cluster_name}
    */
    readonly clusterName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups}
  */
  export class DataAwsEksNodeGroups extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_eks_node_groups";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupsConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_eks_node_groups',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // names - computed: true, optional: false, required: false
    public get names() {
      return this.getListAttribute('names');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
      };
    }
  }
}
