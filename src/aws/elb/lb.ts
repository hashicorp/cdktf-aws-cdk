// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export interface LbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}
  */
  readonly customerOwnedIpv4Pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#desync_mitigation_mode Lb#desync_mitigation_mode}
  */
  readonly desyncMitigationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#drop_invalid_header_fields Lb#drop_invalid_header_fields}
  */
  readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}
  */
  readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_deletion_protection Lb#enable_deletion_protection}
  */
  readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_http2 Lb#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_waf_fail_open Lb#enable_waf_fail_open}
  */
  readonly enableWafFailOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#idle_timeout Lb#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#internal Lb#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ip_address_type Lb#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#load_balancer_type Lb#load_balancer_type}
  */
  readonly loadBalancerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name Lb#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name_prefix Lb#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#security_groups Lb#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnets Lb#subnets}
  */
  readonly subnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags Lb#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags_all Lb#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * access_logs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#access_logs Lb#access_logs}
  */
  readonly accessLogs?: LbAccessLogs;
  /**
  * subnet_mapping block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_mapping Lb#subnet_mapping}
  */
  readonly subnetMapping?: LbSubnetMapping[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#timeouts Lb#timeouts}
  */
  readonly timeouts?: LbTimeouts;
}
export interface LbAccessLogs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#bucket Lb#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enabled Lb#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#prefix Lb#prefix}
  */
  readonly prefix?: string;
}

export function lbAccessLogsToTerraform(struct?: LbAccessLogsOutputReference | LbAccessLogs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export class LbAccessLogsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string | undefined; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
  }
}
export interface LbSubnetMapping {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#allocation_id Lb#allocation_id}
  */
  readonly allocationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ipv6_address Lb#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#private_ipv4_address Lb#private_ipv4_address}
  */
  readonly privateIpv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_id Lb#subnet_id}
  */
  readonly subnetId: string;
}

export function lbSubnetMappingToTerraform(struct?: LbSubnetMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocation_id: cdktf.stringToTerraform(struct!.allocationId),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    private_ipv4_address: cdktf.stringToTerraform(struct!.privateIpv4Address),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export interface LbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#create Lb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#delete Lb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#update Lb#update}
  */
  readonly update?: string;
}

export function lbTimeoutsToTerraform(struct?: LbTimeoutsOutputReference | LbTimeouts): any {
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

export class LbTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}
*/
export class Lb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lb";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_lb',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
    this._desyncMitigationMode = config.desyncMitigationMode;
    this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
    this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
    this._enableDeletionProtection = config.enableDeletionProtection;
    this._enableHttp2 = config.enableHttp2;
    this._enableWafFailOpen = config.enableWafFailOpen;
    this._idleTimeout = config.idleTimeout;
    this._internal = config.internal;
    this._ipAddressType = config.ipAddressType;
    this._loadBalancerType = config.loadBalancerType;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._securityGroups = config.securityGroups;
    this._subnets = config.subnets;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._accessLogs = config.accessLogs;
    this._subnetMapping = config.subnetMapping;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // arn_suffix - computed: true, optional: false, required: false
  public get arnSuffix() {
    return this.getStringAttribute('arn_suffix');
  }

  // customer_owned_ipv4_pool - computed: false, optional: true, required: false
  private _customerOwnedIpv4Pool?: string | undefined; 
  public get customerOwnedIpv4Pool() {
    return this.getStringAttribute('customer_owned_ipv4_pool');
  }
  public set customerOwnedIpv4Pool(value: string | undefined) {
    this._customerOwnedIpv4Pool = value;
  }
  public resetCustomerOwnedIpv4Pool() {
    this._customerOwnedIpv4Pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerOwnedIpv4PoolInput() {
    return this._customerOwnedIpv4Pool
  }

  // desync_mitigation_mode - computed: false, optional: true, required: false
  private _desyncMitigationMode?: string | undefined; 
  public get desyncMitigationMode() {
    return this.getStringAttribute('desync_mitigation_mode');
  }
  public set desyncMitigationMode(value: string | undefined) {
    this._desyncMitigationMode = value;
  }
  public resetDesyncMitigationMode() {
    this._desyncMitigationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desyncMitigationModeInput() {
    return this._desyncMitigationMode
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // drop_invalid_header_fields - computed: false, optional: true, required: false
  private _dropInvalidHeaderFields?: boolean | cdktf.IResolvable | undefined; 
  public get dropInvalidHeaderFields() {
    return this.getBooleanAttribute('drop_invalid_header_fields') as any;
  }
  public set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable | undefined) {
    this._dropInvalidHeaderFields = value;
  }
  public resetDropInvalidHeaderFields() {
    this._dropInvalidHeaderFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInvalidHeaderFieldsInput() {
    return this._dropInvalidHeaderFields
  }

  // enable_cross_zone_load_balancing - computed: false, optional: true, required: false
  private _enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable | undefined; 
  public get enableCrossZoneLoadBalancing() {
    return this.getBooleanAttribute('enable_cross_zone_load_balancing') as any;
  }
  public set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable | undefined) {
    this._enableCrossZoneLoadBalancing = value;
  }
  public resetEnableCrossZoneLoadBalancing() {
    this._enableCrossZoneLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCrossZoneLoadBalancingInput() {
    return this._enableCrossZoneLoadBalancing
  }

  // enable_deletion_protection - computed: false, optional: true, required: false
  private _enableDeletionProtection?: boolean | cdktf.IResolvable | undefined; 
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection') as any;
  }
  public set enableDeletionProtection(value: boolean | cdktf.IResolvable | undefined) {
    this._enableDeletionProtection = value;
  }
  public resetEnableDeletionProtection() {
    this._enableDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeletionProtectionInput() {
    return this._enableDeletionProtection
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable | undefined; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2') as any;
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable | undefined) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2
  }

  // enable_waf_fail_open - computed: false, optional: true, required: false
  private _enableWafFailOpen?: boolean | cdktf.IResolvable | undefined; 
  public get enableWafFailOpen() {
    return this.getBooleanAttribute('enable_waf_fail_open') as any;
  }
  public set enableWafFailOpen(value: boolean | cdktf.IResolvable | undefined) {
    this._enableWafFailOpen = value;
  }
  public resetEnableWafFailOpen() {
    this._enableWafFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWafFailOpenInput() {
    return this._enableWafFailOpen
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number | undefined; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number | undefined) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout
  }

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable | undefined; 
  public get internal() {
    return this.getBooleanAttribute('internal') as any;
  }
  public set internal(value: boolean | cdktf.IResolvable | undefined) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal
  }

  // ip_address_type - computed: true, optional: true, required: false
  private _ipAddressType?: string | undefined; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string | undefined) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string | undefined; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string | undefined) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType
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

  // name_prefix - computed: false, optional: true, required: false
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

  // security_groups - computed: true, optional: true, required: false
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

  // subnets - computed: true, optional: true, required: false
  private _subnets?: string[] | undefined; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[] | undefined) {
    this._subnets = value;
  }
  public resetSubnets() {
    this._subnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets
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

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }

  // access_logs - computed: false, optional: true, required: false
  private _accessLogs?: LbAccessLogs | undefined; 
  private __accessLogsOutput = new LbAccessLogsOutputReference(this as any, "access_logs", true);
  public get accessLogs() {
    return this.__accessLogsOutput;
  }
  public putAccessLogs(value: LbAccessLogs | undefined) {
    this._accessLogs = value;
  }
  public resetAccessLogs() {
    this._accessLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogsInput() {
    return this._accessLogs
  }

  // subnet_mapping - computed: false, optional: true, required: false
  private _subnetMapping?: LbSubnetMapping[] | undefined; 
  public get subnetMapping() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subnet_mapping') as any;
  }
  public set subnetMapping(value: LbSubnetMapping[] | undefined) {
    this._subnetMapping = value;
  }
  public resetSubnetMapping() {
    this._subnetMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMappingInput() {
    return this._subnetMapping
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LbTimeouts | undefined; 
  private __timeoutsOutput = new LbTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: LbTimeouts | undefined) {
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
      customer_owned_ipv4_pool: cdktf.stringToTerraform(this._customerOwnedIpv4Pool),
      desync_mitigation_mode: cdktf.stringToTerraform(this._desyncMitigationMode),
      drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
      enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
      enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
      enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
      enable_waf_fail_open: cdktf.booleanToTerraform(this._enableWafFailOpen),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      internal: cdktf.booleanToTerraform(this._internal),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      load_balancer_type: cdktf.stringToTerraform(this._loadBalancerType),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._subnets),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      access_logs: lbAccessLogsToTerraform(this._accessLogs),
      subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform)(this._subnetMapping),
      timeouts: lbTimeoutsToTerraform(this._timeouts),
    };
  }
}
