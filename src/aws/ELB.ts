// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Load Balancer
*/
export namespace ELB {
  export interface AlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#drop_invalid_header_fields Alb#drop_invalid_header_fields}
    */
    readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}
    */
    readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_deletion_protection Alb#enable_deletion_protection}
    */
    readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_http2 Alb#enable_http2}
    */
    readonly enableHttp2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#idle_timeout Alb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#internal Alb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ip_address_type Alb#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#load_balancer_type Alb#load_balancer_type}
    */
    readonly loadBalancerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name Alb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name_prefix Alb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#security_groups Alb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnets Alb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags Alb#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags_all Alb#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * access_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#access_logs Alb#access_logs}
    */
    readonly accessLogs?: AlbAccessLogs[];
    /**
    * subnet_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_mapping Alb#subnet_mapping}
    */
    readonly subnetMapping?: AlbSubnetMapping[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#timeouts Alb#timeouts}
    */
    readonly timeouts?: AlbTimeouts;
  }
  export interface AlbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#bucket Alb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enabled Alb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#prefix Alb#prefix}
    */
    readonly prefix?: string;
  }

  function albAccessLogsToTerraform(struct?: AlbAccessLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      prefix: cdktf.stringToTerraform(struct!.prefix),
    }
  }

  export interface AlbSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#allocation_id Alb#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ipv6_address Alb#ipv6_address}
    */
    readonly ipv6Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#private_ipv4_address Alb#private_ipv4_address}
    */
    readonly privateIpv4Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_id Alb#subnet_id}
    */
    readonly subnetId: string;
  }

  function albSubnetMappingToTerraform(struct?: AlbSubnetMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      allocation_id: cdktf.stringToTerraform(struct!.allocationId),
      ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
      private_ipv4_address: cdktf.stringToTerraform(struct!.privateIpv4Address),
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }

  export interface AlbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#create Alb#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#delete Alb#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#update Alb#update}
    */
    readonly update?: string;
  }

  function albTimeoutsToTerraform(struct?: AlbTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb}
  */
  export class Alb extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbConfig = {}
    */
    public constructor(scope: Construct, id: string, config: AlbConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_alb',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._customerOwnedIpv4Pool = config.customerOwnedIpv4Pool;
      this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
      this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
      this._enableDeletionProtection = config.enableDeletionProtection;
      this._enableHttp2 = config.enableHttp2;
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
    private _customerOwnedIpv4Pool?: string;
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    public set customerOwnedIpv4Pool(value: string ) {
      this._customerOwnedIpv4Pool = value;
    }
    public resetCustomerOwnedIpv4Pool() {
      this._customerOwnedIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerOwnedIpv4PoolInput() {
      return this._customerOwnedIpv4Pool
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // drop_invalid_header_fields - computed: false, optional: true, required: false
    private _dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    public get dropInvalidHeaderFields() {
      return this.getBooleanAttribute('drop_invalid_header_fields');
    }
    public set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable ) {
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
    private _enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    public get enableCrossZoneLoadBalancing() {
      return this.getBooleanAttribute('enable_cross_zone_load_balancing');
    }
    public set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable ) {
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
    private _enableDeletionProtection?: boolean | cdktf.IResolvable;
    public get enableDeletionProtection() {
      return this.getBooleanAttribute('enable_deletion_protection');
    }
    public set enableDeletionProtection(value: boolean | cdktf.IResolvable ) {
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
    private _enableHttp2?: boolean | cdktf.IResolvable;
    public get enableHttp2() {
      return this.getBooleanAttribute('enable_http2');
    }
    public set enableHttp2(value: boolean | cdktf.IResolvable ) {
      this._enableHttp2 = value;
    }
    public resetEnableHttp2() {
      this._enableHttp2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHttp2Input() {
      return this._enableHttp2
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_timeout - computed: false, optional: true, required: false
    private _idleTimeout?: number;
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }
    public set idleTimeout(value: number ) {
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
    private _internal?: boolean | cdktf.IResolvable;
    public get internal() {
      return this.getBooleanAttribute('internal');
    }
    public set internal(value: boolean | cdktf.IResolvable) {
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
    private _ipAddressType?: string;
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
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
    private _loadBalancerType?: string;
    public get loadBalancerType() {
      return this.getStringAttribute('load_balancer_type');
    }
    public set loadBalancerType(value: string ) {
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
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
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
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
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
    private _securityGroups?: string[];
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
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
    private _subnets?: string[];
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
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

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }

    // access_logs - computed: false, optional: true, required: false
    private _accessLogs?: AlbAccessLogs[];
    public get accessLogs() {
      return this.interpolationForAttribute('access_logs') as any;
    }
    public set accessLogs(value: AlbAccessLogs[] ) {
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
    private _subnetMapping?: AlbSubnetMapping[];
    public get subnetMapping() {
      return this.interpolationForAttribute('subnet_mapping') as any;
    }
    public set subnetMapping(value: AlbSubnetMapping[] ) {
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
    private _timeouts?: AlbTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: AlbTimeouts ) {
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
        drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
        enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
        enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
        enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
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
        access_logs: cdktf.listMapper(albAccessLogsToTerraform)(this._accessLogs),
        subnet_mapping: cdktf.listMapper(albSubnetMappingToTerraform)(this._subnetMapping),
        timeouts: albTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface AlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#alpn_policy AlbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#certificate_arn AlbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#load_balancer_arn AlbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#ssl_policy AlbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags AlbListener#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#tags_all AlbListener#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * default_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#default_action AlbListener#default_action}
    */
    readonly defaultAction: AlbListenerDefaultAction[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#timeouts AlbListener#timeouts}
    */
    readonly timeouts?: AlbListenerTimeouts;
  }
  export interface AlbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_arn AlbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_client_id AlbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_pool_domain AlbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
  }

  function albListenerDefaultActionAuthenticateCognitoToTerraform(struct?: AlbListenerDefaultActionAuthenticateCognito): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
      user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
      user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
    }
  }

  export interface AlbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authentication_request_extra_params AlbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authorization_endpoint AlbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_id AlbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#client_secret AlbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#issuer AlbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#on_unauthenticated_request AlbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#scope AlbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_cookie_name AlbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#session_timeout AlbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#token_endpoint AlbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#user_info_endpoint AlbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
  }

  function albListenerDefaultActionAuthenticateOidcToTerraform(struct?: AlbListenerDefaultActionAuthenticateOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
      issuer: cdktf.stringToTerraform(struct!.issuer),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
      user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
    }
  }

  export interface AlbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#content_type AlbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#message_body AlbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
    */
    readonly statusCode?: string;
  }

  function albListenerDefaultActionFixedResponseToTerraform(struct?: AlbListenerDefaultActionFixedResponse): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      content_type: cdktf.stringToTerraform(struct!.contentType),
      message_body: cdktf.stringToTerraform(struct!.messageBody),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface AlbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#duration AlbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#enabled AlbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function albListenerDefaultActionForwardStickinessToTerraform(struct?: AlbListenerDefaultActionForwardStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      duration: cdktf.numberToTerraform(struct!.duration),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export interface AlbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#arn AlbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#weight AlbListener#weight}
    */
    readonly weight?: number;
  }

  function albListenerDefaultActionForwardTargetGroupToTerraform(struct?: AlbListenerDefaultActionForwardTargetGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AlbListenerDefaultActionForward {
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#stickiness AlbListener#stickiness}
    */
    readonly stickiness?: AlbListenerDefaultActionForwardStickiness[];
    /**
    * target_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group AlbListener#target_group}
    */
    readonly targetGroup: AlbListenerDefaultActionForwardTargetGroup[];
  }

  function albListenerDefaultActionForwardToTerraform(struct?: AlbListenerDefaultActionForward): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      stickiness: cdktf.listMapper(albListenerDefaultActionForwardStickinessToTerraform)(struct!.stickiness),
      target_group: cdktf.listMapper(albListenerDefaultActionForwardTargetGroupToTerraform)(struct!.targetGroup),
    }
  }

  export interface AlbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#host AlbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#path AlbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#port AlbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#protocol AlbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#query AlbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#status_code AlbListener#status_code}
    */
    readonly statusCode: string;
  }

  function albListenerDefaultActionRedirectToTerraform(struct?: AlbListenerDefaultActionRedirect): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      query: cdktf.stringToTerraform(struct!.query),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface AlbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#order AlbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#target_group_arn AlbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#type AlbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_cognito AlbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerDefaultActionAuthenticateCognito[];
    /**
    * authenticate_oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#authenticate_oidc AlbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerDefaultActionAuthenticateOidc[];
    /**
    * fixed_response block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#fixed_response AlbListener#fixed_response}
    */
    readonly fixedResponse?: AlbListenerDefaultActionFixedResponse[];
    /**
    * forward block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#forward AlbListener#forward}
    */
    readonly forward?: AlbListenerDefaultActionForward[];
    /**
    * redirect block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#redirect AlbListener#redirect}
    */
    readonly redirect?: AlbListenerDefaultActionRedirect[];
  }

  function albListenerDefaultActionToTerraform(struct?: AlbListenerDefaultAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      order: cdktf.numberToTerraform(struct!.order),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
      type: cdktf.stringToTerraform(struct!.type),
      authenticate_cognito: cdktf.listMapper(albListenerDefaultActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
      authenticate_oidc: cdktf.listMapper(albListenerDefaultActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
      fixed_response: cdktf.listMapper(albListenerDefaultActionFixedResponseToTerraform)(struct!.fixedResponse),
      forward: cdktf.listMapper(albListenerDefaultActionForwardToTerraform)(struct!.forward),
      redirect: cdktf.listMapper(albListenerDefaultActionRedirectToTerraform)(struct!.redirect),
    }
  }

  export interface AlbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html#read AlbListener#read}
    */
    readonly read?: string;
  }

  function albListenerTimeoutsToTerraform(struct?: AlbListenerTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      read: cdktf.stringToTerraform(struct!.read),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener}
  */
  export class AlbListener extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_listener";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener.html aws_alb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerConfig
    */
    public constructor(scope: Construct, id: string, config: AlbListenerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_listener',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._alpnPolicy = config.alpnPolicy;
      this._certificateArn = config.certificateArn;
      this._loadBalancerArn = config.loadBalancerArn;
      this._port = config.port;
      this._protocol = config.protocol;
      this._sslPolicy = config.sslPolicy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._defaultAction = config.defaultAction;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alpn_policy - computed: false, optional: true, required: false
    private _alpnPolicy?: string;
    public get alpnPolicy() {
      return this.getStringAttribute('alpn_policy');
    }
    public set alpnPolicy(value: string ) {
      this._alpnPolicy = value;
    }
    public resetAlpnPolicy() {
      this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alpnPolicyInput() {
      return this._alpnPolicy
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: false, optional: true, required: false
    private _certificateArn?: string;
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string ) {
      this._certificateArn = value;
    }
    public resetCertificateArn() {
      this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_arn - computed: false, optional: false, required: true
    private _loadBalancerArn: string;
    public get loadBalancerArn() {
      return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
      this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
      return this._loadBalancerArn
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string;
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // ssl_policy - computed: true, optional: true, required: false
    private _sslPolicy?: string;
    public get sslPolicy() {
      return this.getStringAttribute('ssl_policy');
    }
    public set sslPolicy(value: string) {
      this._sslPolicy = value;
    }
    public resetSslPolicy() {
      this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslPolicyInput() {
      return this._sslPolicy
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

    // default_action - computed: false, optional: false, required: true
    private _defaultAction: AlbListenerDefaultAction[];
    public get defaultAction() {
      return this.interpolationForAttribute('default_action') as any;
    }
    public set defaultAction(value: AlbListenerDefaultAction[]) {
      this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
      return this._defaultAction
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: AlbListenerTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: AlbListenerTimeouts ) {
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
        alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
        port: cdktf.numberToTerraform(this._port),
        protocol: cdktf.stringToTerraform(this._protocol),
        ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        default_action: cdktf.listMapper(albListenerDefaultActionToTerraform)(this._defaultAction),
        timeouts: albListenerTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface AlbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html#certificate_arn AlbListenerCertificate#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html#listener_arn AlbListenerCertificate#listener_arn}
    */
    readonly listenerArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html aws_alb_listener_certificate}
  */
  export class AlbListenerCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_listener_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_certificate.html aws_alb_listener_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerCertificateConfig
    */
    public constructor(scope: Construct, id: string, config: AlbListenerCertificateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_listener_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateArn = config.certificateArn;
      this._listenerArn = config.listenerArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn: string;
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
      this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn: string;
    public get listenerArn() {
      return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
      this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
      return this._listenerArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        listener_arn: cdktf.stringToTerraform(this._listenerArn),
      };
    }
  }
  export interface AlbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#listener_arn AlbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#priority AlbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags AlbListenerRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#tags_all AlbListenerRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#action AlbListenerRule#action}
    */
    readonly action: AlbListenerRuleAction[];
    /**
    * condition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#condition AlbListenerRule#condition}
    */
    readonly condition: AlbListenerRuleCondition[];
  }
  export interface AlbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_arn AlbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_client_id AlbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_pool_domain AlbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
  }

  function albListenerRuleActionAuthenticateCognitoToTerraform(struct?: AlbListenerRuleActionAuthenticateCognito): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
      user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
      user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
    }
  }

  export interface AlbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authentication_request_extra_params AlbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authorization_endpoint AlbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_id AlbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#client_secret AlbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#issuer AlbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#on_unauthenticated_request AlbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#scope AlbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_cookie_name AlbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#session_timeout AlbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#token_endpoint AlbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#user_info_endpoint AlbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
  }

  function albListenerRuleActionAuthenticateOidcToTerraform(struct?: AlbListenerRuleActionAuthenticateOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
      issuer: cdktf.stringToTerraform(struct!.issuer),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
      user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
    }
  }

  export interface AlbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#content_type AlbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#message_body AlbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
    */
    readonly statusCode?: string;
  }

  function albListenerRuleActionFixedResponseToTerraform(struct?: AlbListenerRuleActionFixedResponse): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      content_type: cdktf.stringToTerraform(struct!.contentType),
      message_body: cdktf.stringToTerraform(struct!.messageBody),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface AlbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#duration AlbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#enabled AlbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function albListenerRuleActionForwardStickinessToTerraform(struct?: AlbListenerRuleActionForwardStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      duration: cdktf.numberToTerraform(struct!.duration),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export interface AlbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#arn AlbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#weight AlbListenerRule#weight}
    */
    readonly weight?: number;
  }

  function albListenerRuleActionForwardTargetGroupToTerraform(struct?: AlbListenerRuleActionForwardTargetGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface AlbListenerRuleActionForward {
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#stickiness AlbListenerRule#stickiness}
    */
    readonly stickiness?: AlbListenerRuleActionForwardStickiness[];
    /**
    * target_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group AlbListenerRule#target_group}
    */
    readonly targetGroup: AlbListenerRuleActionForwardTargetGroup[];
  }

  function albListenerRuleActionForwardToTerraform(struct?: AlbListenerRuleActionForward): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      stickiness: cdktf.listMapper(albListenerRuleActionForwardStickinessToTerraform)(struct!.stickiness),
      target_group: cdktf.listMapper(albListenerRuleActionForwardTargetGroupToTerraform)(struct!.targetGroup),
    }
  }

  export interface AlbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host AlbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path AlbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#port AlbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#protocol AlbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query AlbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#status_code AlbListenerRule#status_code}
    */
    readonly statusCode: string;
  }

  function albListenerRuleActionRedirectToTerraform(struct?: AlbListenerRuleActionRedirect): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      query: cdktf.stringToTerraform(struct!.query),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface AlbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#order AlbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#target_group_arn AlbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#type AlbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_cognito AlbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: AlbListenerRuleActionAuthenticateCognito[];
    /**
    * authenticate_oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#authenticate_oidc AlbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: AlbListenerRuleActionAuthenticateOidc[];
    /**
    * fixed_response block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#fixed_response AlbListenerRule#fixed_response}
    */
    readonly fixedResponse?: AlbListenerRuleActionFixedResponse[];
    /**
    * forward block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#forward AlbListenerRule#forward}
    */
    readonly forward?: AlbListenerRuleActionForward[];
    /**
    * redirect block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#redirect AlbListenerRule#redirect}
    */
    readonly redirect?: AlbListenerRuleActionRedirect[];
  }

  function albListenerRuleActionToTerraform(struct?: AlbListenerRuleAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      order: cdktf.numberToTerraform(struct!.order),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
      type: cdktf.stringToTerraform(struct!.type),
      authenticate_cognito: cdktf.listMapper(albListenerRuleActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
      authenticate_oidc: cdktf.listMapper(albListenerRuleActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
      fixed_response: cdktf.listMapper(albListenerRuleActionFixedResponseToTerraform)(struct!.fixedResponse),
      forward: cdktf.listMapper(albListenerRuleActionForwardToTerraform)(struct!.forward),
      redirect: cdktf.listMapper(albListenerRuleActionRedirectToTerraform)(struct!.redirect),
    }
  }

  export interface AlbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
  }

  function albListenerRuleConditionHostHeaderToTerraform(struct?: AlbListenerRuleConditionHostHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AlbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header_name AlbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
  }

  function albListenerRuleConditionHttpHeaderToTerraform(struct?: AlbListenerRuleConditionHttpHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AlbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
  }

  function albListenerRuleConditionHttpRequestMethodToTerraform(struct?: AlbListenerRuleConditionHttpRequestMethod): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AlbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
  }

  function albListenerRuleConditionPathPatternToTerraform(struct?: AlbListenerRuleConditionPathPattern): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AlbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#key AlbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#value AlbListenerRule#value}
    */
    readonly value: string;
  }

  function albListenerRuleConditionQueryStringToTerraform(struct?: AlbListenerRuleConditionQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface AlbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#values AlbListenerRule#values}
    */
    readonly values: string[];
  }

  function albListenerRuleConditionSourceIpToTerraform(struct?: AlbListenerRuleConditionSourceIp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface AlbListenerRuleCondition {
    /**
    * host_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#host_header AlbListenerRule#host_header}
    */
    readonly hostHeader?: AlbListenerRuleConditionHostHeader[];
    /**
    * http_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_header AlbListenerRule#http_header}
    */
    readonly httpHeader?: AlbListenerRuleConditionHttpHeader[];
    /**
    * http_request_method block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#http_request_method AlbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: AlbListenerRuleConditionHttpRequestMethod[];
    /**
    * path_pattern block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#path_pattern AlbListenerRule#path_pattern}
    */
    readonly pathPattern?: AlbListenerRuleConditionPathPattern[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#query_string AlbListenerRule#query_string}
    */
    readonly queryString?: AlbListenerRuleConditionQueryString[];
    /**
    * source_ip block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html#source_ip AlbListenerRule#source_ip}
    */
    readonly sourceIp?: AlbListenerRuleConditionSourceIp[];
  }

  function albListenerRuleConditionToTerraform(struct?: AlbListenerRuleCondition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host_header: cdktf.listMapper(albListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
      http_header: cdktf.listMapper(albListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
      http_request_method: cdktf.listMapper(albListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
      path_pattern: cdktf.listMapper(albListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
      query_string: cdktf.listMapper(albListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
      source_ip: cdktf.listMapper(albListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule}
  */
  export class AlbListenerRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_listener_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_listener_rule.html aws_alb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbListenerRuleConfig
    */
    public constructor(scope: Construct, id: string, config: AlbListenerRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_listener_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._listenerArn = config.listenerArn;
      this._priority = config.priority;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._action = config.action;
      this._condition = config.condition;
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

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn: string;
    public get listenerArn() {
      return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
      this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
      return this._listenerArn
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number;
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
      this._priority = value;
    }
    public resetPriority() {
      this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
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

    // action - computed: false, optional: false, required: true
    private _action: AlbListenerRuleAction[];
    public get action() {
      return this.interpolationForAttribute('action') as any;
    }
    public set action(value: AlbListenerRuleAction[]) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // condition - computed: false, optional: false, required: true
    private _condition: AlbListenerRuleCondition[];
    public get condition() {
      return this.interpolationForAttribute('condition') as any;
    }
    public set condition(value: AlbListenerRuleCondition[]) {
      this._condition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
      return this._condition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        listener_arn: cdktf.stringToTerraform(this._listenerArn),
        priority: cdktf.numberToTerraform(this._priority),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        action: cdktf.listMapper(albListenerRuleActionToTerraform)(this._action),
        condition: cdktf.listMapper(albListenerRuleConditionToTerraform)(this._condition),
      };
    }
  }
  export interface AlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#deregistration_delay AlbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name AlbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#name_prefix AlbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#preserve_client_ip AlbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol_version AlbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#slow_start AlbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags AlbTargetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#tags_all AlbTargetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#target_type AlbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#vpc_id AlbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#health_check AlbTargetGroup#health_check}
    */
    readonly healthCheck?: AlbTargetGroupHealthCheck[];
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#stickiness AlbTargetGroup#stickiness}
    */
    readonly stickiness?: AlbTargetGroupStickiness[];
  }
  export interface AlbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#healthy_threshold AlbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#interval AlbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#matcher AlbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#path AlbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#port AlbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#protocol AlbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#timeout AlbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
  }

  function albTargetGroupHealthCheckToTerraform(struct?: AlbTargetGroupHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval: cdktf.numberToTerraform(struct!.interval),
      matcher: cdktf.stringToTerraform(struct!.matcher),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout: cdktf.numberToTerraform(struct!.timeout),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export interface AlbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#cookie_duration AlbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#cookie_name AlbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#enabled AlbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html#type AlbTargetGroup#type}
    */
    readonly type: string;
  }

  function albTargetGroupStickinessToTerraform(struct?: AlbTargetGroupStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cookie_duration: cdktf.numberToTerraform(struct!.cookieDuration),
      cookie_name: cdktf.stringToTerraform(struct!.cookieName),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group}
  */
  export class AlbTargetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_target_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group.html aws_alb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: AlbTargetGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_target_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deregistrationDelay = config.deregistrationDelay;
      this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
      this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._port = config.port;
      this._preserveClientIp = config.preserveClientIp;
      this._protocol = config.protocol;
      this._protocolVersion = config.protocolVersion;
      this._proxyProtocolV2 = config.proxyProtocolV2;
      this._slowStart = config.slowStart;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetType = config.targetType;
      this._vpcId = config.vpcId;
      this._healthCheck = config.healthCheck;
      this._stickiness = config.stickiness;
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

    // deregistration_delay - computed: false, optional: true, required: false
    private _deregistrationDelay?: string;
    public get deregistrationDelay() {
      return this.getStringAttribute('deregistration_delay');
    }
    public set deregistrationDelay(value: string ) {
      this._deregistrationDelay = value;
    }
    public resetDeregistrationDelay() {
      this._deregistrationDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deregistrationDelayInput() {
      return this._deregistrationDelay
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lambda_multi_value_headers_enabled - computed: false, optional: true, required: false
    private _lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    public get lambdaMultiValueHeadersEnabled() {
      return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
    }
    public set lambdaMultiValueHeadersEnabled(value: boolean | cdktf.IResolvable ) {
      this._lambdaMultiValueHeadersEnabled = value;
    }
    public resetLambdaMultiValueHeadersEnabled() {
      this._lambdaMultiValueHeadersEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaMultiValueHeadersEnabledInput() {
      return this._lambdaMultiValueHeadersEnabled
    }

    // load_balancing_algorithm_type - computed: true, optional: true, required: false
    private _loadBalancingAlgorithmType?: string;
    public get loadBalancingAlgorithmType() {
      return this.getStringAttribute('load_balancing_algorithm_type');
    }
    public set loadBalancingAlgorithmType(value: string) {
      this._loadBalancingAlgorithmType = value;
    }
    public resetLoadBalancingAlgorithmType() {
      this._loadBalancingAlgorithmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancingAlgorithmTypeInput() {
      return this._loadBalancingAlgorithmType
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
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
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // preserve_client_ip - computed: true, optional: true, required: false
    private _preserveClientIp?: string;
    public get preserveClientIp() {
      return this.getStringAttribute('preserve_client_ip');
    }
    public set preserveClientIp(value: string) {
      this._preserveClientIp = value;
    }
    public resetPreserveClientIp() {
      this._preserveClientIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveClientIpInput() {
      return this._preserveClientIp
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: string;
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string ) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // protocol_version - computed: true, optional: true, required: false
    private _protocolVersion?: string;
    public get protocolVersion() {
      return this.getStringAttribute('protocol_version');
    }
    public set protocolVersion(value: string) {
      this._protocolVersion = value;
    }
    public resetProtocolVersion() {
      this._protocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolVersionInput() {
      return this._protocolVersion
    }

    // proxy_protocol_v2 - computed: false, optional: true, required: false
    private _proxyProtocolV2?: boolean | cdktf.IResolvable;
    public get proxyProtocolV2() {
      return this.getBooleanAttribute('proxy_protocol_v2');
    }
    public set proxyProtocolV2(value: boolean | cdktf.IResolvable ) {
      this._proxyProtocolV2 = value;
    }
    public resetProxyProtocolV2() {
      this._proxyProtocolV2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyProtocolV2Input() {
      return this._proxyProtocolV2
    }

    // slow_start - computed: false, optional: true, required: false
    private _slowStart?: number;
    public get slowStart() {
      return this.getNumberAttribute('slow_start');
    }
    public set slowStart(value: number ) {
      this._slowStart = value;
    }
    public resetSlowStart() {
      this._slowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slowStartInput() {
      return this._slowStart
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

    // target_type - computed: false, optional: true, required: false
    private _targetType?: string;
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string ) {
      this._targetType = value;
    }
    public resetTargetType() {
      this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string;
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string ) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // health_check - computed: false, optional: true, required: false
    private _healthCheck?: AlbTargetGroupHealthCheck[];
    public get healthCheck() {
      return this.interpolationForAttribute('health_check') as any;
    }
    public set healthCheck(value: AlbTargetGroupHealthCheck[] ) {
      this._healthCheck = value;
    }
    public resetHealthCheck() {
      this._healthCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
      return this._healthCheck
    }

    // stickiness - computed: false, optional: true, required: false
    private _stickiness?: AlbTargetGroupStickiness[];
    public get stickiness() {
      return this.interpolationForAttribute('stickiness') as any;
    }
    public set stickiness(value: AlbTargetGroupStickiness[] ) {
      this._stickiness = value;
    }
    public resetStickiness() {
      this._stickiness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stickinessInput() {
      return this._stickiness
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
        lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
        load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        port: cdktf.numberToTerraform(this._port),
        preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
        protocol: cdktf.stringToTerraform(this._protocol),
        protocol_version: cdktf.stringToTerraform(this._protocolVersion),
        proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
        slow_start: cdktf.numberToTerraform(this._slowStart),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_type: cdktf.stringToTerraform(this._targetType),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        health_check: cdktf.listMapper(albTargetGroupHealthCheckToTerraform)(this._healthCheck),
        stickiness: cdktf.listMapper(albTargetGroupStickinessToTerraform)(this._stickiness),
      };
    }
  }
  export interface AlbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#availability_zone AlbTargetGroupAttachment#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#port AlbTargetGroupAttachment#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#target_group_arn AlbTargetGroupAttachment#target_group_arn}
    */
    readonly targetGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html#target_id AlbTargetGroupAttachment#target_id}
    */
    readonly targetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment}
  */
  export class AlbTargetGroupAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_target_group_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb_target_group_attachment.html aws_alb_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbTargetGroupAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: AlbTargetGroupAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_target_group_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._port = config.port;
      this._targetGroupArn = config.targetGroupArn;
      this._targetId = config.targetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string;
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string ) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // target_group_arn - computed: false, optional: false, required: true
    private _targetGroupArn: string;
    public get targetGroupArn() {
      return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
      this._targetGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
      return this._targetGroupArn
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId: string;
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        port: cdktf.numberToTerraform(this._port),
        target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
        target_id: cdktf.stringToTerraform(this._targetId),
      };
    }
  }
  export interface AppCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#cookie_name AppCookieStickinessPolicy#cookie_name}
    */
    readonly cookieName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#lb_port AppCookieStickinessPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#load_balancer AppCookieStickinessPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html#name AppCookieStickinessPolicy#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy}
  */
  export class AppCookieStickinessPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_app_cookie_stickiness_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/app_cookie_stickiness_policy.html aws_app_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppCookieStickinessPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: AppCookieStickinessPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_app_cookie_stickiness_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cookieName = config.cookieName;
      this._lbPort = config.lbPort;
      this._loadBalancer = config.loadBalancer;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cookie_name - computed: false, optional: false, required: true
    private _cookieName: string;
    public get cookieName() {
      return this.getStringAttribute('cookie_name');
    }
    public set cookieName(value: string) {
      this._cookieName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieNameInput() {
      return this._cookieName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lb_port - computed: false, optional: false, required: true
    private _lbPort: number;
    public get lbPort() {
      return this.getNumberAttribute('lb_port');
    }
    public set lbPort(value: number) {
      this._lbPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lbPortInput() {
      return this._lbPort
    }

    // load_balancer - computed: false, optional: false, required: true
    private _loadBalancer: string;
    public get loadBalancer() {
      return this.getStringAttribute('load_balancer');
    }
    public set loadBalancer(value: string) {
      this._loadBalancer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cookie_name: cdktf.stringToTerraform(this._cookieName),
        lb_port: cdktf.numberToTerraform(this._lbPort),
        load_balancer: cdktf.stringToTerraform(this._loadBalancer),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface LbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
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
    readonly accessLogs?: LbAccessLogs[];
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

  function lbAccessLogsToTerraform(struct?: LbAccessLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      prefix: cdktf.stringToTerraform(struct!.prefix),
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

  function lbSubnetMappingToTerraform(struct?: LbSubnetMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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

  function lbTimeoutsToTerraform(struct?: LbTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
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
      this._dropInvalidHeaderFields = config.dropInvalidHeaderFields;
      this._enableCrossZoneLoadBalancing = config.enableCrossZoneLoadBalancing;
      this._enableDeletionProtection = config.enableDeletionProtection;
      this._enableHttp2 = config.enableHttp2;
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
    private _customerOwnedIpv4Pool?: string;
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }
    public set customerOwnedIpv4Pool(value: string ) {
      this._customerOwnedIpv4Pool = value;
    }
    public resetCustomerOwnedIpv4Pool() {
      this._customerOwnedIpv4Pool = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerOwnedIpv4PoolInput() {
      return this._customerOwnedIpv4Pool
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // drop_invalid_header_fields - computed: false, optional: true, required: false
    private _dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    public get dropInvalidHeaderFields() {
      return this.getBooleanAttribute('drop_invalid_header_fields');
    }
    public set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable ) {
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
    private _enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    public get enableCrossZoneLoadBalancing() {
      return this.getBooleanAttribute('enable_cross_zone_load_balancing');
    }
    public set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable ) {
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
    private _enableDeletionProtection?: boolean | cdktf.IResolvable;
    public get enableDeletionProtection() {
      return this.getBooleanAttribute('enable_deletion_protection');
    }
    public set enableDeletionProtection(value: boolean | cdktf.IResolvable ) {
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
    private _enableHttp2?: boolean | cdktf.IResolvable;
    public get enableHttp2() {
      return this.getBooleanAttribute('enable_http2');
    }
    public set enableHttp2(value: boolean | cdktf.IResolvable ) {
      this._enableHttp2 = value;
    }
    public resetEnableHttp2() {
      this._enableHttp2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHttp2Input() {
      return this._enableHttp2
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_timeout - computed: false, optional: true, required: false
    private _idleTimeout?: number;
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }
    public set idleTimeout(value: number ) {
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
    private _internal?: boolean | cdktf.IResolvable;
    public get internal() {
      return this.getBooleanAttribute('internal');
    }
    public set internal(value: boolean | cdktf.IResolvable) {
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
    private _ipAddressType?: string;
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
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
    private _loadBalancerType?: string;
    public get loadBalancerType() {
      return this.getStringAttribute('load_balancer_type');
    }
    public set loadBalancerType(value: string ) {
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
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
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
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
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
    private _securityGroups?: string[];
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
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
    private _subnets?: string[];
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
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

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
    }

    // access_logs - computed: false, optional: true, required: false
    private _accessLogs?: LbAccessLogs[];
    public get accessLogs() {
      return this.interpolationForAttribute('access_logs') as any;
    }
    public set accessLogs(value: LbAccessLogs[] ) {
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
    private _subnetMapping?: LbSubnetMapping[];
    public get subnetMapping() {
      return this.interpolationForAttribute('subnet_mapping') as any;
    }
    public set subnetMapping(value: LbSubnetMapping[] ) {
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
    private _timeouts?: LbTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: LbTimeouts ) {
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
        drop_invalid_header_fields: cdktf.booleanToTerraform(this._dropInvalidHeaderFields),
        enable_cross_zone_load_balancing: cdktf.booleanToTerraform(this._enableCrossZoneLoadBalancing),
        enable_deletion_protection: cdktf.booleanToTerraform(this._enableDeletionProtection),
        enable_http2: cdktf.booleanToTerraform(this._enableHttp2),
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
        access_logs: cdktf.listMapper(lbAccessLogsToTerraform)(this._accessLogs),
        subnet_mapping: cdktf.listMapper(lbSubnetMappingToTerraform)(this._subnetMapping),
        timeouts: lbTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface LbCookieStickinessPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#cookie_expiration_period LbCookieStickinessPolicy#cookie_expiration_period}
    */
    readonly cookieExpirationPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#lb_port LbCookieStickinessPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#load_balancer LbCookieStickinessPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html#name LbCookieStickinessPolicy#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy}
  */
  export class LbCookieStickinessPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_cookie_stickiness_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_cookie_stickiness_policy.html aws_lb_cookie_stickiness_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbCookieStickinessPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: LbCookieStickinessPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_cookie_stickiness_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cookieExpirationPeriod = config.cookieExpirationPeriod;
      this._lbPort = config.lbPort;
      this._loadBalancer = config.loadBalancer;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cookie_expiration_period - computed: false, optional: true, required: false
    private _cookieExpirationPeriod?: number;
    public get cookieExpirationPeriod() {
      return this.getNumberAttribute('cookie_expiration_period');
    }
    public set cookieExpirationPeriod(value: number ) {
      this._cookieExpirationPeriod = value;
    }
    public resetCookieExpirationPeriod() {
      this._cookieExpirationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cookieExpirationPeriodInput() {
      return this._cookieExpirationPeriod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lb_port - computed: false, optional: false, required: true
    private _lbPort: number;
    public get lbPort() {
      return this.getNumberAttribute('lb_port');
    }
    public set lbPort(value: number) {
      this._lbPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lbPortInput() {
      return this._lbPort
    }

    // load_balancer - computed: false, optional: false, required: true
    private _loadBalancer: string;
    public get loadBalancer() {
      return this.getStringAttribute('load_balancer');
    }
    public set loadBalancer(value: string) {
      this._loadBalancer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cookie_expiration_period: cdktf.numberToTerraform(this._cookieExpirationPeriod),
        lb_port: cdktf.numberToTerraform(this._lbPort),
        load_balancer: cdktf.stringToTerraform(this._loadBalancer),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface LbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#alpn_policy LbListener#alpn_policy}
    */
    readonly alpnPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#certificate_arn LbListener#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#load_balancer_arn LbListener#load_balancer_arn}
    */
    readonly loadBalancerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#ssl_policy LbListener#ssl_policy}
    */
    readonly sslPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags LbListener#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#tags_all LbListener#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * default_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#default_action LbListener#default_action}
    */
    readonly defaultAction: LbListenerDefaultAction[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#timeouts LbListener#timeouts}
    */
    readonly timeouts?: LbListenerTimeouts;
  }
  export interface LbListenerDefaultActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_arn LbListener#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_client_id LbListener#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_pool_domain LbListener#user_pool_domain}
    */
    readonly userPoolDomain: string;
  }

  function lbListenerDefaultActionAuthenticateCognitoToTerraform(struct?: LbListenerDefaultActionAuthenticateCognito): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
      user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
      user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
    }
  }

  export interface LbListenerDefaultActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authentication_request_extra_params LbListener#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authorization_endpoint LbListener#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_id LbListener#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#client_secret LbListener#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#issuer LbListener#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#on_unauthenticated_request LbListener#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#scope LbListener#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_cookie_name LbListener#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#session_timeout LbListener#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#token_endpoint LbListener#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#user_info_endpoint LbListener#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
  }

  function lbListenerDefaultActionAuthenticateOidcToTerraform(struct?: LbListenerDefaultActionAuthenticateOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
      issuer: cdktf.stringToTerraform(struct!.issuer),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
      user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
    }
  }

  export interface LbListenerDefaultActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#content_type LbListener#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#message_body LbListener#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
    */
    readonly statusCode?: string;
  }

  function lbListenerDefaultActionFixedResponseToTerraform(struct?: LbListenerDefaultActionFixedResponse): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      content_type: cdktf.stringToTerraform(struct!.contentType),
      message_body: cdktf.stringToTerraform(struct!.messageBody),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface LbListenerDefaultActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#duration LbListener#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#enabled LbListener#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function lbListenerDefaultActionForwardStickinessToTerraform(struct?: LbListenerDefaultActionForwardStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      duration: cdktf.numberToTerraform(struct!.duration),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export interface LbListenerDefaultActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#arn LbListener#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#weight LbListener#weight}
    */
    readonly weight?: number;
  }

  function lbListenerDefaultActionForwardTargetGroupToTerraform(struct?: LbListenerDefaultActionForwardTargetGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface LbListenerDefaultActionForward {
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#stickiness LbListener#stickiness}
    */
    readonly stickiness?: LbListenerDefaultActionForwardStickiness[];
    /**
    * target_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group LbListener#target_group}
    */
    readonly targetGroup: LbListenerDefaultActionForwardTargetGroup[];
  }

  function lbListenerDefaultActionForwardToTerraform(struct?: LbListenerDefaultActionForward): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      stickiness: cdktf.listMapper(lbListenerDefaultActionForwardStickinessToTerraform)(struct!.stickiness),
      target_group: cdktf.listMapper(lbListenerDefaultActionForwardTargetGroupToTerraform)(struct!.targetGroup),
    }
  }

  export interface LbListenerDefaultActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#host LbListener#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#path LbListener#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#port LbListener#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#protocol LbListener#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#query LbListener#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#status_code LbListener#status_code}
    */
    readonly statusCode: string;
  }

  function lbListenerDefaultActionRedirectToTerraform(struct?: LbListenerDefaultActionRedirect): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      query: cdktf.stringToTerraform(struct!.query),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface LbListenerDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#order LbListener#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#target_group_arn LbListener#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#type LbListener#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_cognito LbListener#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerDefaultActionAuthenticateCognito[];
    /**
    * authenticate_oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#authenticate_oidc LbListener#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerDefaultActionAuthenticateOidc[];
    /**
    * fixed_response block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#fixed_response LbListener#fixed_response}
    */
    readonly fixedResponse?: LbListenerDefaultActionFixedResponse[];
    /**
    * forward block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#forward LbListener#forward}
    */
    readonly forward?: LbListenerDefaultActionForward[];
    /**
    * redirect block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#redirect LbListener#redirect}
    */
    readonly redirect?: LbListenerDefaultActionRedirect[];
  }

  function lbListenerDefaultActionToTerraform(struct?: LbListenerDefaultAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      order: cdktf.numberToTerraform(struct!.order),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
      type: cdktf.stringToTerraform(struct!.type),
      authenticate_cognito: cdktf.listMapper(lbListenerDefaultActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
      authenticate_oidc: cdktf.listMapper(lbListenerDefaultActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
      fixed_response: cdktf.listMapper(lbListenerDefaultActionFixedResponseToTerraform)(struct!.fixedResponse),
      forward: cdktf.listMapper(lbListenerDefaultActionForwardToTerraform)(struct!.forward),
      redirect: cdktf.listMapper(lbListenerDefaultActionRedirectToTerraform)(struct!.redirect),
    }
  }

  export interface LbListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html#read LbListener#read}
    */
    readonly read?: string;
  }

  function lbListenerTimeoutsToTerraform(struct?: LbListenerTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      read: cdktf.stringToTerraform(struct!.read),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener}
  */
  export class LbListener extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_listener";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener.html aws_lb_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerConfig
    */
    public constructor(scope: Construct, id: string, config: LbListenerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_listener',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._alpnPolicy = config.alpnPolicy;
      this._certificateArn = config.certificateArn;
      this._loadBalancerArn = config.loadBalancerArn;
      this._port = config.port;
      this._protocol = config.protocol;
      this._sslPolicy = config.sslPolicy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._defaultAction = config.defaultAction;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alpn_policy - computed: false, optional: true, required: false
    private _alpnPolicy?: string;
    public get alpnPolicy() {
      return this.getStringAttribute('alpn_policy');
    }
    public set alpnPolicy(value: string ) {
      this._alpnPolicy = value;
    }
    public resetAlpnPolicy() {
      this._alpnPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alpnPolicyInput() {
      return this._alpnPolicy
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: false, optional: true, required: false
    private _certificateArn?: string;
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string ) {
      this._certificateArn = value;
    }
    public resetCertificateArn() {
      this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_arn - computed: false, optional: false, required: true
    private _loadBalancerArn: string;
    public get loadBalancerArn() {
      return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
      this._loadBalancerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
      return this._loadBalancerArn
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string;
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // ssl_policy - computed: true, optional: true, required: false
    private _sslPolicy?: string;
    public get sslPolicy() {
      return this.getStringAttribute('ssl_policy');
    }
    public set sslPolicy(value: string) {
      this._sslPolicy = value;
    }
    public resetSslPolicy() {
      this._sslPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslPolicyInput() {
      return this._sslPolicy
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

    // default_action - computed: false, optional: false, required: true
    private _defaultAction: LbListenerDefaultAction[];
    public get defaultAction() {
      return this.interpolationForAttribute('default_action') as any;
    }
    public set defaultAction(value: LbListenerDefaultAction[]) {
      this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
      return this._defaultAction
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: LbListenerTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: LbListenerTimeouts ) {
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
        alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
        port: cdktf.numberToTerraform(this._port),
        protocol: cdktf.stringToTerraform(this._protocol),
        ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        default_action: cdktf.listMapper(lbListenerDefaultActionToTerraform)(this._defaultAction),
        timeouts: lbListenerTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface LbListenerCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html#certificate_arn LbListenerCertificate#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html#listener_arn LbListenerCertificate#listener_arn}
    */
    readonly listenerArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate}
  */
  export class LbListenerCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_listener_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_certificate.html aws_lb_listener_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerCertificateConfig
    */
    public constructor(scope: Construct, id: string, config: LbListenerCertificateConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_listener_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateArn = config.certificateArn;
      this._listenerArn = config.listenerArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: false, optional: false, required: true
    private _certificateArn: string;
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
      this._certificateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn: string;
    public get listenerArn() {
      return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
      this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
      return this._listenerArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        listener_arn: cdktf.stringToTerraform(this._listenerArn),
      };
    }
  }
  export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#listener_arn LbListenerRule#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#priority LbListenerRule#priority}
    */
    readonly priority?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags LbListenerRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags_all LbListenerRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#action LbListenerRule#action}
    */
    readonly action: LbListenerRuleAction[];
    /**
    * condition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#condition LbListenerRule#condition}
    */
    readonly condition: LbListenerRuleCondition[];
  }
  export interface LbListenerRuleActionAuthenticateCognito {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_arn LbListenerRule#user_pool_arn}
    */
    readonly userPoolArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_client_id LbListenerRule#user_pool_client_id}
    */
    readonly userPoolClientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_domain LbListenerRule#user_pool_domain}
    */
    readonly userPoolDomain: string;
  }

  function lbListenerRuleActionAuthenticateCognitoToTerraform(struct?: LbListenerRuleActionAuthenticateCognito): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
      user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
      user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
    }
  }

  export interface LbListenerRuleActionAuthenticateOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}
    */
    readonly authenticationRequestExtraParams?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authorization_endpoint LbListenerRule#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_id LbListenerRule#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_secret LbListenerRule#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#issuer LbListenerRule#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}
    */
    readonly onUnauthenticatedRequest?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}
    */
    readonly sessionCookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}
    */
    readonly sessionTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#token_endpoint LbListenerRule#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_info_endpoint LbListenerRule#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
  }

  function lbListenerRuleActionAuthenticateOidcToTerraform(struct?: LbListenerRuleActionAuthenticateOidc): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      authentication_request_extra_params: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.authenticationRequestExtraParams),
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
      issuer: cdktf.stringToTerraform(struct!.issuer),
      on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
      scope: cdktf.stringToTerraform(struct!.scope),
      session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
      session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
      token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
      user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
    }
  }

  export interface LbListenerRuleActionFixedResponse {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#content_type LbListenerRule#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#message_body LbListenerRule#message_body}
    */
    readonly messageBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
    */
    readonly statusCode?: string;
  }

  function lbListenerRuleActionFixedResponseToTerraform(struct?: LbListenerRuleActionFixedResponse): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      content_type: cdktf.stringToTerraform(struct!.contentType),
      message_body: cdktf.stringToTerraform(struct!.messageBody),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface LbListenerRuleActionForwardStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#duration LbListenerRule#duration}
    */
    readonly duration: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#enabled LbListenerRule#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
  }

  function lbListenerRuleActionForwardStickinessToTerraform(struct?: LbListenerRuleActionForwardStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      duration: cdktf.numberToTerraform(struct!.duration),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
    }
  }

  export interface LbListenerRuleActionForwardTargetGroup {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#arn LbListenerRule#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#weight LbListenerRule#weight}
    */
    readonly weight?: number;
  }

  function lbListenerRuleActionForwardTargetGroupToTerraform(struct?: LbListenerRuleActionForwardTargetGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface LbListenerRuleActionForward {
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#stickiness LbListenerRule#stickiness}
    */
    readonly stickiness?: LbListenerRuleActionForwardStickiness[];
    /**
    * target_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group LbListenerRule#target_group}
    */
    readonly targetGroup: LbListenerRuleActionForwardTargetGroup[];
  }

  function lbListenerRuleActionForwardToTerraform(struct?: LbListenerRuleActionForward): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      stickiness: cdktf.listMapper(lbListenerRuleActionForwardStickinessToTerraform)(struct!.stickiness),
      target_group: cdktf.listMapper(lbListenerRuleActionForwardTargetGroupToTerraform)(struct!.targetGroup),
    }
  }

  export interface LbListenerRuleActionRedirect {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host LbListenerRule#host}
    */
    readonly host?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path LbListenerRule#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#port LbListenerRule#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#protocol LbListenerRule#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query LbListenerRule#query}
    */
    readonly query?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}
    */
    readonly statusCode: string;
  }

  function lbListenerRuleActionRedirectToTerraform(struct?: LbListenerRuleActionRedirect): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host: cdktf.stringToTerraform(struct!.host),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      query: cdktf.stringToTerraform(struct!.query),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
    }
  }

  export interface LbListenerRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#order LbListenerRule#order}
    */
    readonly order?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group_arn LbListenerRule#target_group_arn}
    */
    readonly targetGroupArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#type LbListenerRule#type}
    */
    readonly type: string;
    /**
    * authenticate_cognito block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_cognito LbListenerRule#authenticate_cognito}
    */
    readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito[];
    /**
    * authenticate_oidc block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_oidc LbListenerRule#authenticate_oidc}
    */
    readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc[];
    /**
    * fixed_response block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#fixed_response LbListenerRule#fixed_response}
    */
    readonly fixedResponse?: LbListenerRuleActionFixedResponse[];
    /**
    * forward block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#forward LbListenerRule#forward}
    */
    readonly forward?: LbListenerRuleActionForward[];
    /**
    * redirect block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#redirect LbListenerRule#redirect}
    */
    readonly redirect?: LbListenerRuleActionRedirect[];
  }

  function lbListenerRuleActionToTerraform(struct?: LbListenerRuleAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      order: cdktf.numberToTerraform(struct!.order),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
      type: cdktf.stringToTerraform(struct!.type),
      authenticate_cognito: cdktf.listMapper(lbListenerRuleActionAuthenticateCognitoToTerraform)(struct!.authenticateCognito),
      authenticate_oidc: cdktf.listMapper(lbListenerRuleActionAuthenticateOidcToTerraform)(struct!.authenticateOidc),
      fixed_response: cdktf.listMapper(lbListenerRuleActionFixedResponseToTerraform)(struct!.fixedResponse),
      forward: cdktf.listMapper(lbListenerRuleActionForwardToTerraform)(struct!.forward),
      redirect: cdktf.listMapper(lbListenerRuleActionRedirectToTerraform)(struct!.redirect),
    }
  }

  export interface LbListenerRuleConditionHostHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
  }

  function lbListenerRuleConditionHostHeaderToTerraform(struct?: LbListenerRuleConditionHostHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface LbListenerRuleConditionHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header_name LbListenerRule#http_header_name}
    */
    readonly httpHeaderName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
  }

  function lbListenerRuleConditionHttpHeaderToTerraform(struct?: LbListenerRuleConditionHttpHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface LbListenerRuleConditionHttpRequestMethod {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
  }

  function lbListenerRuleConditionHttpRequestMethodToTerraform(struct?: LbListenerRuleConditionHttpRequestMethod): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface LbListenerRuleConditionPathPattern {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
  }

  function lbListenerRuleConditionPathPatternToTerraform(struct?: LbListenerRuleConditionPathPattern): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface LbListenerRuleConditionQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#key LbListenerRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#value LbListenerRule#value}
    */
    readonly value: string;
  }

  function lbListenerRuleConditionQueryStringToTerraform(struct?: LbListenerRuleConditionQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface LbListenerRuleConditionSourceIp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}
    */
    readonly values: string[];
  }

  function lbListenerRuleConditionSourceIpToTerraform(struct?: LbListenerRuleConditionSourceIp): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface LbListenerRuleCondition {
    /**
    * host_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host_header LbListenerRule#host_header}
    */
    readonly hostHeader?: LbListenerRuleConditionHostHeader[];
    /**
    * http_header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header LbListenerRule#http_header}
    */
    readonly httpHeader?: LbListenerRuleConditionHttpHeader[];
    /**
    * http_request_method block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_request_method LbListenerRule#http_request_method}
    */
    readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod[];
    /**
    * path_pattern block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path_pattern LbListenerRule#path_pattern}
    */
    readonly pathPattern?: LbListenerRuleConditionPathPattern[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query_string LbListenerRule#query_string}
    */
    readonly queryString?: LbListenerRuleConditionQueryString[];
    /**
    * source_ip block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#source_ip LbListenerRule#source_ip}
    */
    readonly sourceIp?: LbListenerRuleConditionSourceIp[];
  }

  function lbListenerRuleConditionToTerraform(struct?: LbListenerRuleCondition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host_header: cdktf.listMapper(lbListenerRuleConditionHostHeaderToTerraform)(struct!.hostHeader),
      http_header: cdktf.listMapper(lbListenerRuleConditionHttpHeaderToTerraform)(struct!.httpHeader),
      http_request_method: cdktf.listMapper(lbListenerRuleConditionHttpRequestMethodToTerraform)(struct!.httpRequestMethod),
      path_pattern: cdktf.listMapper(lbListenerRuleConditionPathPatternToTerraform)(struct!.pathPattern),
      query_string: cdktf.listMapper(lbListenerRuleConditionQueryStringToTerraform)(struct!.queryString),
      source_ip: cdktf.listMapper(lbListenerRuleConditionSourceIpToTerraform)(struct!.sourceIp),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule}
  */
  export class LbListenerRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_listener_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbListenerRuleConfig
    */
    public constructor(scope: Construct, id: string, config: LbListenerRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_listener_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._listenerArn = config.listenerArn;
      this._priority = config.priority;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._action = config.action;
      this._condition = config.condition;
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

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn: string;
    public get listenerArn() {
      return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
      this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
      return this._listenerArn
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: number;
    public get priority() {
      return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
      this._priority = value;
    }
    public resetPriority() {
      this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
      return this._priority
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

    // action - computed: false, optional: false, required: true
    private _action: LbListenerRuleAction[];
    public get action() {
      return this.interpolationForAttribute('action') as any;
    }
    public set action(value: LbListenerRuleAction[]) {
      this._action = value;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // condition - computed: false, optional: false, required: true
    private _condition: LbListenerRuleCondition[];
    public get condition() {
      return this.interpolationForAttribute('condition') as any;
    }
    public set condition(value: LbListenerRuleCondition[]) {
      this._condition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
      return this._condition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        listener_arn: cdktf.stringToTerraform(this._listenerArn),
        priority: cdktf.numberToTerraform(this._priority),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        action: cdktf.listMapper(lbListenerRuleActionToTerraform)(this._action),
        condition: cdktf.listMapper(lbListenerRuleConditionToTerraform)(this._condition),
      };
    }
  }
  export interface LbSslNegotiationPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#lb_port LbSslNegotiationPolicy#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#load_balancer LbSslNegotiationPolicy#load_balancer}
    */
    readonly loadBalancer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}
    */
    readonly name: string;
    /**
    * attribute block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#attribute LbSslNegotiationPolicy#attribute}
    */
    readonly attribute?: LbSslNegotiationPolicyAttribute[];
  }
  export interface LbSslNegotiationPolicyAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#name LbSslNegotiationPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html#value LbSslNegotiationPolicy#value}
    */
    readonly value: string;
  }

  function lbSslNegotiationPolicyAttributeToTerraform(struct?: LbSslNegotiationPolicyAttribute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy}
  */
  export class LbSslNegotiationPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_ssl_negotiation_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_ssl_negotiation_policy.html aws_lb_ssl_negotiation_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbSslNegotiationPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: LbSslNegotiationPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_ssl_negotiation_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._lbPort = config.lbPort;
      this._loadBalancer = config.loadBalancer;
      this._name = config.name;
      this._attribute = config.attribute;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lb_port - computed: false, optional: false, required: true
    private _lbPort: number;
    public get lbPort() {
      return this.getNumberAttribute('lb_port');
    }
    public set lbPort(value: number) {
      this._lbPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lbPortInput() {
      return this._lbPort
    }

    // load_balancer - computed: false, optional: false, required: true
    private _loadBalancer: string;
    public get loadBalancer() {
      return this.getStringAttribute('load_balancer');
    }
    public set loadBalancer(value: string) {
      this._loadBalancer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
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

    // attribute - computed: false, optional: true, required: false
    private _attribute?: LbSslNegotiationPolicyAttribute[];
    public get attribute() {
      return this.interpolationForAttribute('attribute') as any;
    }
    public set attribute(value: LbSslNegotiationPolicyAttribute[] ) {
      this._attribute = value;
    }
    public resetAttribute() {
      this._attribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeInput() {
      return this._attribute
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        lb_port: cdktf.numberToTerraform(this._lbPort),
        load_balancer: cdktf.stringToTerraform(this._loadBalancer),
        name: cdktf.stringToTerraform(this._name),
        attribute: cdktf.listMapper(lbSslNegotiationPolicyAttributeToTerraform)(this._attribute),
      };
    }
  }
  export interface LbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#deregistration_delay LbTargetGroup#deregistration_delay}
    */
    readonly deregistrationDelay?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#lambda_multi_value_headers_enabled LbTargetGroup#lambda_multi_value_headers_enabled}
    */
    readonly lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#load_balancing_algorithm_type LbTargetGroup#load_balancing_algorithm_type}
    */
    readonly loadBalancingAlgorithmType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name LbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#name_prefix LbTargetGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#preserve_client_ip LbTargetGroup#preserve_client_ip}
    */
    readonly preserveClientIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol_version LbTargetGroup#protocol_version}
    */
    readonly protocolVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#proxy_protocol_v2 LbTargetGroup#proxy_protocol_v2}
    */
    readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#slow_start LbTargetGroup#slow_start}
    */
    readonly slowStart?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags LbTargetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#tags_all LbTargetGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#target_type LbTargetGroup#target_type}
    */
    readonly targetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#vpc_id LbTargetGroup#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * health_check block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#health_check LbTargetGroup#health_check}
    */
    readonly healthCheck?: LbTargetGroupHealthCheck[];
    /**
    * stickiness block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#stickiness LbTargetGroup#stickiness}
    */
    readonly stickiness?: LbTargetGroupStickiness[];
  }
  export interface LbTargetGroupHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#healthy_threshold LbTargetGroup#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#interval LbTargetGroup#interval}
    */
    readonly interval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#matcher LbTargetGroup#matcher}
    */
    readonly matcher?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#path LbTargetGroup#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#port LbTargetGroup#port}
    */
    readonly port?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#protocol LbTargetGroup#protocol}
    */
    readonly protocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#timeout LbTargetGroup#timeout}
    */
    readonly timeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#unhealthy_threshold LbTargetGroup#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
  }

  function lbTargetGroupHealthCheckToTerraform(struct?: LbTargetGroupHealthCheck): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
      interval: cdktf.numberToTerraform(struct!.interval),
      matcher: cdktf.stringToTerraform(struct!.matcher),
      path: cdktf.stringToTerraform(struct!.path),
      port: cdktf.stringToTerraform(struct!.port),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      timeout: cdktf.numberToTerraform(struct!.timeout),
      unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    }
  }

  export interface LbTargetGroupStickiness {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_duration LbTargetGroup#cookie_duration}
    */
    readonly cookieDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#cookie_name LbTargetGroup#cookie_name}
    */
    readonly cookieName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#enabled LbTargetGroup#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html#type LbTargetGroup#type}
    */
    readonly type: string;
  }

  function lbTargetGroupStickinessToTerraform(struct?: LbTargetGroupStickiness): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cookie_duration: cdktf.numberToTerraform(struct!.cookieDuration),
      cookie_name: cdktf.stringToTerraform(struct!.cookieName),
      enabled: cdktf.booleanToTerraform(struct!.enabled),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group}
  */
  export class LbTargetGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_target_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group.html aws_lb_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: LbTargetGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_target_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deregistrationDelay = config.deregistrationDelay;
      this._lambdaMultiValueHeadersEnabled = config.lambdaMultiValueHeadersEnabled;
      this._loadBalancingAlgorithmType = config.loadBalancingAlgorithmType;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._port = config.port;
      this._preserveClientIp = config.preserveClientIp;
      this._protocol = config.protocol;
      this._protocolVersion = config.protocolVersion;
      this._proxyProtocolV2 = config.proxyProtocolV2;
      this._slowStart = config.slowStart;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetType = config.targetType;
      this._vpcId = config.vpcId;
      this._healthCheck = config.healthCheck;
      this._stickiness = config.stickiness;
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

    // deregistration_delay - computed: false, optional: true, required: false
    private _deregistrationDelay?: string;
    public get deregistrationDelay() {
      return this.getStringAttribute('deregistration_delay');
    }
    public set deregistrationDelay(value: string ) {
      this._deregistrationDelay = value;
    }
    public resetDeregistrationDelay() {
      this._deregistrationDelay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deregistrationDelayInput() {
      return this._deregistrationDelay
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lambda_multi_value_headers_enabled - computed: false, optional: true, required: false
    private _lambdaMultiValueHeadersEnabled?: boolean | cdktf.IResolvable;
    public get lambdaMultiValueHeadersEnabled() {
      return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
    }
    public set lambdaMultiValueHeadersEnabled(value: boolean | cdktf.IResolvable ) {
      this._lambdaMultiValueHeadersEnabled = value;
    }
    public resetLambdaMultiValueHeadersEnabled() {
      this._lambdaMultiValueHeadersEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaMultiValueHeadersEnabledInput() {
      return this._lambdaMultiValueHeadersEnabled
    }

    // load_balancing_algorithm_type - computed: true, optional: true, required: false
    private _loadBalancingAlgorithmType?: string;
    public get loadBalancingAlgorithmType() {
      return this.getStringAttribute('load_balancing_algorithm_type');
    }
    public set loadBalancingAlgorithmType(value: string) {
      this._loadBalancingAlgorithmType = value;
    }
    public resetLoadBalancingAlgorithmType() {
      this._loadBalancingAlgorithmType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancingAlgorithmTypeInput() {
      return this._loadBalancingAlgorithmType
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
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
    private _namePrefix?: string;
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string ) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // preserve_client_ip - computed: true, optional: true, required: false
    private _preserveClientIp?: string;
    public get preserveClientIp() {
      return this.getStringAttribute('preserve_client_ip');
    }
    public set preserveClientIp(value: string) {
      this._preserveClientIp = value;
    }
    public resetPreserveClientIp() {
      this._preserveClientIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveClientIpInput() {
      return this._preserveClientIp
    }

    // protocol - computed: false, optional: true, required: false
    private _protocol?: string;
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string ) {
      this._protocol = value;
    }
    public resetProtocol() {
      this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // protocol_version - computed: true, optional: true, required: false
    private _protocolVersion?: string;
    public get protocolVersion() {
      return this.getStringAttribute('protocol_version');
    }
    public set protocolVersion(value: string) {
      this._protocolVersion = value;
    }
    public resetProtocolVersion() {
      this._protocolVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolVersionInput() {
      return this._protocolVersion
    }

    // proxy_protocol_v2 - computed: false, optional: true, required: false
    private _proxyProtocolV2?: boolean | cdktf.IResolvable;
    public get proxyProtocolV2() {
      return this.getBooleanAttribute('proxy_protocol_v2');
    }
    public set proxyProtocolV2(value: boolean | cdktf.IResolvable ) {
      this._proxyProtocolV2 = value;
    }
    public resetProxyProtocolV2() {
      this._proxyProtocolV2 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyProtocolV2Input() {
      return this._proxyProtocolV2
    }

    // slow_start - computed: false, optional: true, required: false
    private _slowStart?: number;
    public get slowStart() {
      return this.getNumberAttribute('slow_start');
    }
    public set slowStart(value: number ) {
      this._slowStart = value;
    }
    public resetSlowStart() {
      this._slowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slowStartInput() {
      return this._slowStart
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

    // target_type - computed: false, optional: true, required: false
    private _targetType?: string;
    public get targetType() {
      return this.getStringAttribute('target_type');
    }
    public set targetType(value: string ) {
      this._targetType = value;
    }
    public resetTargetType() {
      this._targetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
      return this._targetType
    }

    // vpc_id - computed: false, optional: true, required: false
    private _vpcId?: string;
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string ) {
      this._vpcId = value;
    }
    public resetVpcId() {
      this._vpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // health_check - computed: false, optional: true, required: false
    private _healthCheck?: LbTargetGroupHealthCheck[];
    public get healthCheck() {
      return this.interpolationForAttribute('health_check') as any;
    }
    public set healthCheck(value: LbTargetGroupHealthCheck[] ) {
      this._healthCheck = value;
    }
    public resetHealthCheck() {
      this._healthCheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckInput() {
      return this._healthCheck
    }

    // stickiness - computed: false, optional: true, required: false
    private _stickiness?: LbTargetGroupStickiness[];
    public get stickiness() {
      return this.interpolationForAttribute('stickiness') as any;
    }
    public set stickiness(value: LbTargetGroupStickiness[] ) {
      this._stickiness = value;
    }
    public resetStickiness() {
      this._stickiness = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stickinessInput() {
      return this._stickiness
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        deregistration_delay: cdktf.stringToTerraform(this._deregistrationDelay),
        lambda_multi_value_headers_enabled: cdktf.booleanToTerraform(this._lambdaMultiValueHeadersEnabled),
        load_balancing_algorithm_type: cdktf.stringToTerraform(this._loadBalancingAlgorithmType),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        port: cdktf.numberToTerraform(this._port),
        preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
        protocol: cdktf.stringToTerraform(this._protocol),
        protocol_version: cdktf.stringToTerraform(this._protocolVersion),
        proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
        slow_start: cdktf.numberToTerraform(this._slowStart),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_type: cdktf.stringToTerraform(this._targetType),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        health_check: cdktf.listMapper(lbTargetGroupHealthCheckToTerraform)(this._healthCheck),
        stickiness: cdktf.listMapper(lbTargetGroupStickinessToTerraform)(this._stickiness),
      };
    }
  }
  export interface LbTargetGroupAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#availability_zone LbTargetGroupAttachment#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#port LbTargetGroupAttachment#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#target_group_arn LbTargetGroupAttachment#target_group_arn}
    */
    readonly targetGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html#target_id LbTargetGroupAttachment#target_id}
    */
    readonly targetId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment}
  */
  export class LbTargetGroupAttachment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_target_group_attachment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_target_group_attachment.html aws_lb_target_group_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbTargetGroupAttachmentConfig
    */
    public constructor(scope: Construct, id: string, config: LbTargetGroupAttachmentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_target_group_attachment',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._availabilityZone = config.availabilityZone;
      this._port = config.port;
      this._targetGroupArn = config.targetGroupArn;
      this._targetId = config.targetId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // availability_zone - computed: false, optional: true, required: false
    private _availabilityZone?: string;
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string ) {
      this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
      this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
      return this._availabilityZone
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // port - computed: false, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number ) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // target_group_arn - computed: false, optional: false, required: true
    private _targetGroupArn: string;
    public get targetGroupArn() {
      return this.getStringAttribute('target_group_arn');
    }
    public set targetGroupArn(value: string) {
      this._targetGroupArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetGroupArnInput() {
      return this._targetGroupArn
    }

    // target_id - computed: false, optional: false, required: true
    private _targetId: string;
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string) {
      this._targetId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        availability_zone: cdktf.stringToTerraform(this._availabilityZone),
        port: cdktf.numberToTerraform(this._port),
        target_group_arn: cdktf.stringToTerraform(this._targetGroupArn),
        target_id: cdktf.stringToTerraform(this._targetId),
      };
    }
  }
  export interface LoadBalancerBackendServerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#instance_port LoadBalancerBackendServerPolicy#instance_port}
    */
    readonly instancePort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#load_balancer_name LoadBalancerBackendServerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html#policy_names LoadBalancerBackendServerPolicy#policy_names}
    */
    readonly policyNames?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy}
  */
  export class LoadBalancerBackendServerPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_load_balancer_backend_server_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_backend_server_policy.html aws_load_balancer_backend_server_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerBackendServerPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: LoadBalancerBackendServerPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_load_balancer_backend_server_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instancePort = config.instancePort;
      this._loadBalancerName = config.loadBalancerName;
      this._policyNames = config.policyNames;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_port - computed: false, optional: false, required: true
    private _instancePort: number;
    public get instancePort() {
      return this.getNumberAttribute('instance_port');
    }
    public set instancePort(value: number) {
      this._instancePort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePortInput() {
      return this._instancePort
    }

    // load_balancer_name - computed: false, optional: false, required: true
    private _loadBalancerName: string;
    public get loadBalancerName() {
      return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
      this._loadBalancerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
      return this._loadBalancerName
    }

    // policy_names - computed: false, optional: true, required: false
    private _policyNames?: string[];
    public get policyNames() {
      return this.getListAttribute('policy_names');
    }
    public set policyNames(value: string[] ) {
      this._policyNames = value;
    }
    public resetPolicyNames() {
      this._policyNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNamesInput() {
      return this._policyNames
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_port: cdktf.numberToTerraform(this._instancePort),
        load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
        policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames),
      };
    }
  }
  export interface LoadBalancerListenerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_name LoadBalancerListenerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#load_balancer_port LoadBalancerListenerPolicy#load_balancer_port}
    */
    readonly loadBalancerPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html#policy_names LoadBalancerListenerPolicy#policy_names}
    */
    readonly policyNames?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy}
  */
  export class LoadBalancerListenerPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_load_balancer_listener_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_listener_policy.html aws_load_balancer_listener_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerListenerPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: LoadBalancerListenerPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_load_balancer_listener_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._loadBalancerName = config.loadBalancerName;
      this._loadBalancerPort = config.loadBalancerPort;
      this._policyNames = config.policyNames;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_name - computed: false, optional: false, required: true
    private _loadBalancerName: string;
    public get loadBalancerName() {
      return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
      this._loadBalancerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
      return this._loadBalancerName
    }

    // load_balancer_port - computed: false, optional: false, required: true
    private _loadBalancerPort: number;
    public get loadBalancerPort() {
      return this.getNumberAttribute('load_balancer_port');
    }
    public set loadBalancerPort(value: number) {
      this._loadBalancerPort = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerPortInput() {
      return this._loadBalancerPort
    }

    // policy_names - computed: false, optional: true, required: false
    private _policyNames?: string[];
    public get policyNames() {
      return this.getListAttribute('policy_names');
    }
    public set policyNames(value: string[] ) {
      this._policyNames = value;
    }
    public resetPolicyNames() {
      this._policyNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNamesInput() {
      return this._policyNames
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
        load_balancer_port: cdktf.numberToTerraform(this._loadBalancerPort),
        policy_names: cdktf.listMapper(cdktf.stringToTerraform)(this._policyNames),
      };
    }
  }
  export interface LoadBalancerPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#load_balancer_name LoadBalancerPolicy#load_balancer_name}
    */
    readonly loadBalancerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_name LoadBalancerPolicy#policy_name}
    */
    readonly policyName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_type_name LoadBalancerPolicy#policy_type_name}
    */
    readonly policyTypeName: string;
    /**
    * policy_attribute block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#policy_attribute LoadBalancerPolicy#policy_attribute}
    */
    readonly policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
  }
  export interface LoadBalancerPolicyPolicyAttribute {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#name LoadBalancerPolicy#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html#value LoadBalancerPolicy#value}
    */
    readonly value?: string;
  }

  function loadBalancerPolicyPolicyAttributeToTerraform(struct?: LoadBalancerPolicyPolicyAttribute): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy}
  */
  export class LoadBalancerPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_load_balancer_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/load_balancer_policy.html aws_load_balancer_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LoadBalancerPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: LoadBalancerPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_load_balancer_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._loadBalancerName = config.loadBalancerName;
      this._policyName = config.policyName;
      this._policyTypeName = config.policyTypeName;
      this._policyAttribute = config.policyAttribute;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_name - computed: false, optional: false, required: true
    private _loadBalancerName: string;
    public get loadBalancerName() {
      return this.getStringAttribute('load_balancer_name');
    }
    public set loadBalancerName(value: string) {
      this._loadBalancerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerNameInput() {
      return this._loadBalancerName
    }

    // policy_name - computed: false, optional: false, required: true
    private _policyName: string;
    public get policyName() {
      return this.getStringAttribute('policy_name');
    }
    public set policyName(value: string) {
      this._policyName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyNameInput() {
      return this._policyName
    }

    // policy_type_name - computed: false, optional: false, required: true
    private _policyTypeName: string;
    public get policyTypeName() {
      return this.getStringAttribute('policy_type_name');
    }
    public set policyTypeName(value: string) {
      this._policyTypeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyTypeNameInput() {
      return this._policyTypeName
    }

    // policy_attribute - computed: false, optional: true, required: false
    private _policyAttribute?: LoadBalancerPolicyPolicyAttribute[];
    public get policyAttribute() {
      return this.interpolationForAttribute('policy_attribute') as any;
    }
    public set policyAttribute(value: LoadBalancerPolicyPolicyAttribute[] ) {
      this._policyAttribute = value;
    }
    public resetPolicyAttribute() {
      this._policyAttribute = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyAttributeInput() {
      return this._policyAttribute
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        load_balancer_name: cdktf.stringToTerraform(this._loadBalancerName),
        policy_name: cdktf.stringToTerraform(this._policyName),
        policy_type_name: cdktf.stringToTerraform(this._policyTypeName),
        policy_attribute: cdktf.listMapper(loadBalancerPolicyPolicyAttributeToTerraform)(this._policyAttribute),
      };
    }
  }
  export interface ProxyProtocolPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html#instance_ports ProxyProtocolPolicy#instance_ports}
    */
    readonly instancePorts: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html#load_balancer ProxyProtocolPolicy#load_balancer}
    */
    readonly loadBalancer: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy}
  */
  export class ProxyProtocolPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_proxy_protocol_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/proxy_protocol_policy.html aws_proxy_protocol_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ProxyProtocolPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: ProxyProtocolPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_proxy_protocol_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._instancePorts = config.instancePorts;
      this._loadBalancer = config.loadBalancer;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_ports - computed: false, optional: false, required: true
    private _instancePorts: string[];
    public get instancePorts() {
      return this.getListAttribute('instance_ports');
    }
    public set instancePorts(value: string[]) {
      this._instancePorts = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instancePortsInput() {
      return this._instancePorts
    }

    // load_balancer - computed: false, optional: false, required: true
    private _loadBalancer: string;
    public get loadBalancer() {
      return this.getStringAttribute('load_balancer');
    }
    public set loadBalancer(value: string) {
      this._loadBalancer = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        instance_ports: cdktf.listMapper(cdktf.stringToTerraform)(this._instancePorts),
        load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      };
    }
  }
  export interface DataAwsAlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#name DataAwsAlb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#tags DataAwsAlb#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAlbAccessLogs extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // prefix - computed: true, optional: false, required: false
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
  }
  export class DataAwsAlbSubnetMapping extends cdktf.ComplexComputedList {

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }

    // ipv6_address - computed: true, optional: false, required: false
    public get ipv6Address() {
      return this.getStringAttribute('ipv6_address');
    }

    // outpost_id - computed: true, optional: false, required: false
    public get outpostId() {
      return this.getStringAttribute('outpost_id');
    }

    // private_ipv4_address - computed: true, optional: false, required: false
    public get privateIpv4Address() {
      return this.getStringAttribute('private_ipv4_address');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}
  */
  export class DataAwsAlb extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAlbConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_alb',
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

    // access_logs - computed: true, optional: false, required: false
    public accessLogs(index: string) {
      return new DataAwsAlbAccessLogs(this, 'access_logs', index);
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // arn_suffix - computed: true, optional: false, required: false
    public get arnSuffix() {
      return this.getStringAttribute('arn_suffix');
    }

    // customer_owned_ipv4_pool - computed: true, optional: false, required: false
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // drop_invalid_header_fields - computed: true, optional: false, required: false
    public get dropInvalidHeaderFields() {
      return this.getBooleanAttribute('drop_invalid_header_fields');
    }

    // enable_deletion_protection - computed: true, optional: false, required: false
    public get enableDeletionProtection() {
      return this.getBooleanAttribute('enable_deletion_protection');
    }

    // enable_http2 - computed: true, optional: false, required: false
    public get enableHttp2() {
      return this.getBooleanAttribute('enable_http2');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_timeout - computed: true, optional: false, required: false
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }

    // internal - computed: true, optional: false, required: false
    public get internal() {
      return this.getBooleanAttribute('internal');
    }

    // ip_address_type - computed: true, optional: false, required: false
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }

    // load_balancer_type - computed: true, optional: false, required: false
    public get loadBalancerType() {
      return this.getStringAttribute('load_balancer_type');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // subnet_mapping - computed: true, optional: false, required: false
    public subnetMapping(index: string) {
      return new DataAwsAlbSubnetMapping(this, 'subnet_mapping', index);
    }

    // subnets - computed: true, optional: false, required: false
    public get subnets() {
      return this.getListAttribute('subnets');
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

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
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
  export interface DataAwsAlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#load_balancer_arn DataAwsAlbListener#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#port DataAwsAlbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#tags DataAwsAlbListener#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAlbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {

    // authentication_request_extra_params - computed: true, optional: false, required: false
    public get authenticationRequestExtraParams() {
      return this.interpolationForAttribute('authentication_request_extra_params') as any;
    }

    // on_unauthenticated_request - computed: true, optional: false, required: false
    public get onUnauthenticatedRequest() {
      return this.getStringAttribute('on_unauthenticated_request');
    }

    // scope - computed: true, optional: false, required: false
    public get scope() {
      return this.getStringAttribute('scope');
    }

    // session_cookie_name - computed: true, optional: false, required: false
    public get sessionCookieName() {
      return this.getStringAttribute('session_cookie_name');
    }

    // session_timeout - computed: true, optional: false, required: false
    public get sessionTimeout() {
      return this.getNumberAttribute('session_timeout');
    }

    // user_pool_arn - computed: true, optional: false, required: false
    public get userPoolArn() {
      return this.getStringAttribute('user_pool_arn');
    }

    // user_pool_client_id - computed: true, optional: false, required: false
    public get userPoolClientId() {
      return this.getStringAttribute('user_pool_client_id');
    }

    // user_pool_domain - computed: true, optional: false, required: false
    public get userPoolDomain() {
      return this.getStringAttribute('user_pool_domain');
    }
  }
  export class DataAwsAlbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {

    // authentication_request_extra_params - computed: true, optional: false, required: false
    public get authenticationRequestExtraParams() {
      return this.interpolationForAttribute('authentication_request_extra_params') as any;
    }

    // authorization_endpoint - computed: true, optional: false, required: false
    public get authorizationEndpoint() {
      return this.getStringAttribute('authorization_endpoint');
    }

    // client_id - computed: true, optional: false, required: false
    public get clientId() {
      return this.getStringAttribute('client_id');
    }

    // client_secret - computed: true, optional: false, required: false
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
      return this.getStringAttribute('issuer');
    }

    // on_unauthenticated_request - computed: true, optional: false, required: false
    public get onUnauthenticatedRequest() {
      return this.getStringAttribute('on_unauthenticated_request');
    }

    // scope - computed: true, optional: false, required: false
    public get scope() {
      return this.getStringAttribute('scope');
    }

    // session_cookie_name - computed: true, optional: false, required: false
    public get sessionCookieName() {
      return this.getStringAttribute('session_cookie_name');
    }

    // session_timeout - computed: true, optional: false, required: false
    public get sessionTimeout() {
      return this.getNumberAttribute('session_timeout');
    }

    // token_endpoint - computed: true, optional: false, required: false
    public get tokenEndpoint() {
      return this.getStringAttribute('token_endpoint');
    }

    // user_info_endpoint - computed: true, optional: false, required: false
    public get userInfoEndpoint() {
      return this.getStringAttribute('user_info_endpoint');
    }
  }
  export class DataAwsAlbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {

    // content_type - computed: true, optional: false, required: false
    public get contentType() {
      return this.getStringAttribute('content_type');
    }

    // message_body - computed: true, optional: false, required: false
    public get messageBody() {
      return this.getStringAttribute('message_body');
    }

    // status_code - computed: true, optional: false, required: false
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
  }
  export class DataAwsAlbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {

    // duration - computed: true, optional: false, required: false
    public get duration() {
      return this.getNumberAttribute('duration');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }
  }
  export class DataAwsAlbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // weight - computed: true, optional: false, required: false
    public get weight() {
      return this.getNumberAttribute('weight');
    }
  }
  export class DataAwsAlbListenerDefaultActionForward extends cdktf.ComplexComputedList {

    // stickiness - computed: true, optional: false, required: false
    public get stickiness() {
      return this.interpolationForAttribute('stickiness') as any;
    }

    // target_group - computed: true, optional: false, required: false
    public get targetGroup() {
      return this.interpolationForAttribute('target_group') as any;
    }
  }
  export class DataAwsAlbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {

    // host - computed: true, optional: false, required: false
    public get host() {
      return this.getStringAttribute('host');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getStringAttribute('port');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // query - computed: true, optional: false, required: false
    public get query() {
      return this.getStringAttribute('query');
    }

    // status_code - computed: true, optional: false, required: false
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
  }
  export class DataAwsAlbListenerDefaultAction extends cdktf.ComplexComputedList {

    // authenticate_cognito - computed: true, optional: false, required: false
    public get authenticateCognito() {
      return this.interpolationForAttribute('authenticate_cognito') as any;
    }

    // authenticate_oidc - computed: true, optional: false, required: false
    public get authenticateOidc() {
      return this.interpolationForAttribute('authenticate_oidc') as any;
    }

    // fixed_response - computed: true, optional: false, required: false
    public get fixedResponse() {
      return this.interpolationForAttribute('fixed_response') as any;
    }

    // forward - computed: true, optional: false, required: false
    public get forward() {
      return this.interpolationForAttribute('forward') as any;
    }

    // order - computed: true, optional: false, required: false
    public get order() {
      return this.getNumberAttribute('order');
    }

    // redirect - computed: true, optional: false, required: false
    public get redirect() {
      return this.interpolationForAttribute('redirect') as any;
    }

    // target_group_arn - computed: true, optional: false, required: false
    public get targetGroupArn() {
      return this.getStringAttribute('target_group_arn');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener}
  */
  export class DataAwsAlbListener extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_listener";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbListenerConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAlbListenerConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_listener',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._loadBalancerArn = config.loadBalancerArn;
      this._port = config.port;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alpn_policy - computed: true, optional: false, required: false
    public get alpnPolicy() {
      return this.getStringAttribute('alpn_policy');
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }

    // default_action - computed: true, optional: false, required: false
    public defaultAction(index: string) {
      return new DataAwsAlbListenerDefaultAction(this, 'default_action', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_arn - computed: true, optional: true, required: false
    private _loadBalancerArn?: string;
    public get loadBalancerArn() {
      return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
      this._loadBalancerArn = value;
    }
    public resetLoadBalancerArn() {
      this._loadBalancerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
      return this._loadBalancerArn
    }

    // port - computed: true, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // ssl_policy - computed: true, optional: false, required: false
    public get sslPolicy() {
      return this.getStringAttribute('ssl_policy');
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
        load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
        port: cdktf.numberToTerraform(this._port),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsAlbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html#name DataAwsAlbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html#tags DataAwsAlbTargetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsAlbTargetGroupHealthCheck extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // healthy_threshold - computed: true, optional: false, required: false
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }

    // interval - computed: true, optional: false, required: false
    public get interval() {
      return this.getNumberAttribute('interval');
    }

    // matcher - computed: true, optional: false, required: false
    public get matcher() {
      return this.getStringAttribute('matcher');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getStringAttribute('port');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // timeout - computed: true, optional: false, required: false
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }

    // unhealthy_threshold - computed: true, optional: false, required: false
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
  }
  export class DataAwsAlbTargetGroupStickiness extends cdktf.ComplexComputedList {

    // cookie_duration - computed: true, optional: false, required: false
    public get cookieDuration() {
      return this.getNumberAttribute('cookie_duration');
    }

    // cookie_name - computed: true, optional: false, required: false
    public get cookieName() {
      return this.getStringAttribute('cookie_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group}
  */
  export class DataAwsAlbTargetGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_alb_target_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_target_group.html aws_alb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbTargetGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsAlbTargetGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_alb_target_group',
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

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // arn_suffix - computed: true, optional: false, required: false
    public get arnSuffix() {
      return this.getStringAttribute('arn_suffix');
    }

    // deregistration_delay - computed: true, optional: false, required: false
    public get deregistrationDelay() {
      return this.getNumberAttribute('deregistration_delay');
    }

    // health_check - computed: true, optional: false, required: false
    public healthCheck(index: string) {
      return new DataAwsAlbTargetGroupHealthCheck(this, 'health_check', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
    public get lambdaMultiValueHeadersEnabled() {
      return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
    }

    // load_balancing_algorithm_type - computed: true, optional: false, required: false
    public get loadBalancingAlgorithmType() {
      return this.getStringAttribute('load_balancing_algorithm_type');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preserve_client_ip - computed: true, optional: false, required: false
    public get preserveClientIp() {
      return this.getStringAttribute('preserve_client_ip');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // protocol_version - computed: true, optional: false, required: false
    public get protocolVersion() {
      return this.getStringAttribute('protocol_version');
    }

    // proxy_protocol_v2 - computed: true, optional: false, required: false
    public get proxyProtocolV2() {
      return this.getBooleanAttribute('proxy_protocol_v2');
    }

    // slow_start - computed: true, optional: false, required: false
    public get slowStart() {
      return this.getNumberAttribute('slow_start');
    }

    // stickiness - computed: true, optional: false, required: false
    public stickiness(index: string) {
      return new DataAwsAlbTargetGroupStickiness(this, 'stickiness', index);
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

    // target_type - computed: true, optional: false, required: false
    public get targetType() {
      return this.getStringAttribute('target_type');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
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
  export interface DataAwsLbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb.html#name DataAwsLb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb.html#tags DataAwsLb#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsLbAccessLogs extends cdktf.ComplexComputedList {

    // bucket - computed: true, optional: false, required: false
    public get bucket() {
      return this.getStringAttribute('bucket');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // prefix - computed: true, optional: false, required: false
    public get prefix() {
      return this.getStringAttribute('prefix');
    }
  }
  export class DataAwsLbSubnetMapping extends cdktf.ComplexComputedList {

    // allocation_id - computed: true, optional: false, required: false
    public get allocationId() {
      return this.getStringAttribute('allocation_id');
    }

    // ipv6_address - computed: true, optional: false, required: false
    public get ipv6Address() {
      return this.getStringAttribute('ipv6_address');
    }

    // outpost_id - computed: true, optional: false, required: false
    public get outpostId() {
      return this.getStringAttribute('outpost_id');
    }

    // private_ipv4_address - computed: true, optional: false, required: false
    public get privateIpv4Address() {
      return this.getStringAttribute('private_ipv4_address');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb}
  */
  export class DataAwsLb extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb.html aws_lb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsLbConfig = {}) {
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
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_logs - computed: true, optional: false, required: false
    public accessLogs(index: string) {
      return new DataAwsLbAccessLogs(this, 'access_logs', index);
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // arn_suffix - computed: true, optional: false, required: false
    public get arnSuffix() {
      return this.getStringAttribute('arn_suffix');
    }

    // customer_owned_ipv4_pool - computed: true, optional: false, required: false
    public get customerOwnedIpv4Pool() {
      return this.getStringAttribute('customer_owned_ipv4_pool');
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // drop_invalid_header_fields - computed: true, optional: false, required: false
    public get dropInvalidHeaderFields() {
      return this.getBooleanAttribute('drop_invalid_header_fields');
    }

    // enable_deletion_protection - computed: true, optional: false, required: false
    public get enableDeletionProtection() {
      return this.getBooleanAttribute('enable_deletion_protection');
    }

    // enable_http2 - computed: true, optional: false, required: false
    public get enableHttp2() {
      return this.getBooleanAttribute('enable_http2');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // idle_timeout - computed: true, optional: false, required: false
    public get idleTimeout() {
      return this.getNumberAttribute('idle_timeout');
    }

    // internal - computed: true, optional: false, required: false
    public get internal() {
      return this.getBooleanAttribute('internal');
    }

    // ip_address_type - computed: true, optional: false, required: false
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }

    // load_balancer_type - computed: true, optional: false, required: false
    public get loadBalancerType() {
      return this.getStringAttribute('load_balancer_type');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // security_groups - computed: true, optional: false, required: false
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }

    // subnet_mapping - computed: true, optional: false, required: false
    public subnetMapping(index: string) {
      return new DataAwsLbSubnetMapping(this, 'subnet_mapping', index);
    }

    // subnets - computed: true, optional: false, required: false
    public get subnets() {
      return this.getListAttribute('subnets');
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

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }

    // zone_id - computed: true, optional: false, required: false
    public get zoneId() {
      return this.getStringAttribute('zone_id');
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
  export interface DataAwsLbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#load_balancer_arn DataAwsLbListener#load_balancer_arn}
    */
    readonly loadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#port DataAwsLbListener#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#tags DataAwsLbListener#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsLbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {

    // authentication_request_extra_params - computed: true, optional: false, required: false
    public get authenticationRequestExtraParams() {
      return this.interpolationForAttribute('authentication_request_extra_params') as any;
    }

    // on_unauthenticated_request - computed: true, optional: false, required: false
    public get onUnauthenticatedRequest() {
      return this.getStringAttribute('on_unauthenticated_request');
    }

    // scope - computed: true, optional: false, required: false
    public get scope() {
      return this.getStringAttribute('scope');
    }

    // session_cookie_name - computed: true, optional: false, required: false
    public get sessionCookieName() {
      return this.getStringAttribute('session_cookie_name');
    }

    // session_timeout - computed: true, optional: false, required: false
    public get sessionTimeout() {
      return this.getNumberAttribute('session_timeout');
    }

    // user_pool_arn - computed: true, optional: false, required: false
    public get userPoolArn() {
      return this.getStringAttribute('user_pool_arn');
    }

    // user_pool_client_id - computed: true, optional: false, required: false
    public get userPoolClientId() {
      return this.getStringAttribute('user_pool_client_id');
    }

    // user_pool_domain - computed: true, optional: false, required: false
    public get userPoolDomain() {
      return this.getStringAttribute('user_pool_domain');
    }
  }
  export class DataAwsLbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {

    // authentication_request_extra_params - computed: true, optional: false, required: false
    public get authenticationRequestExtraParams() {
      return this.interpolationForAttribute('authentication_request_extra_params') as any;
    }

    // authorization_endpoint - computed: true, optional: false, required: false
    public get authorizationEndpoint() {
      return this.getStringAttribute('authorization_endpoint');
    }

    // client_id - computed: true, optional: false, required: false
    public get clientId() {
      return this.getStringAttribute('client_id');
    }

    // client_secret - computed: true, optional: false, required: false
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }

    // issuer - computed: true, optional: false, required: false
    public get issuer() {
      return this.getStringAttribute('issuer');
    }

    // on_unauthenticated_request - computed: true, optional: false, required: false
    public get onUnauthenticatedRequest() {
      return this.getStringAttribute('on_unauthenticated_request');
    }

    // scope - computed: true, optional: false, required: false
    public get scope() {
      return this.getStringAttribute('scope');
    }

    // session_cookie_name - computed: true, optional: false, required: false
    public get sessionCookieName() {
      return this.getStringAttribute('session_cookie_name');
    }

    // session_timeout - computed: true, optional: false, required: false
    public get sessionTimeout() {
      return this.getNumberAttribute('session_timeout');
    }

    // token_endpoint - computed: true, optional: false, required: false
    public get tokenEndpoint() {
      return this.getStringAttribute('token_endpoint');
    }

    // user_info_endpoint - computed: true, optional: false, required: false
    public get userInfoEndpoint() {
      return this.getStringAttribute('user_info_endpoint');
    }
  }
  export class DataAwsLbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {

    // content_type - computed: true, optional: false, required: false
    public get contentType() {
      return this.getStringAttribute('content_type');
    }

    // message_body - computed: true, optional: false, required: false
    public get messageBody() {
      return this.getStringAttribute('message_body');
    }

    // status_code - computed: true, optional: false, required: false
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
  }
  export class DataAwsLbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {

    // duration - computed: true, optional: false, required: false
    public get duration() {
      return this.getNumberAttribute('duration');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }
  }
  export class DataAwsLbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // weight - computed: true, optional: false, required: false
    public get weight() {
      return this.getNumberAttribute('weight');
    }
  }
  export class DataAwsLbListenerDefaultActionForward extends cdktf.ComplexComputedList {

    // stickiness - computed: true, optional: false, required: false
    public get stickiness() {
      return this.interpolationForAttribute('stickiness') as any;
    }

    // target_group - computed: true, optional: false, required: false
    public get targetGroup() {
      return this.interpolationForAttribute('target_group') as any;
    }
  }
  export class DataAwsLbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {

    // host - computed: true, optional: false, required: false
    public get host() {
      return this.getStringAttribute('host');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getStringAttribute('port');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // query - computed: true, optional: false, required: false
    public get query() {
      return this.getStringAttribute('query');
    }

    // status_code - computed: true, optional: false, required: false
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
  }
  export class DataAwsLbListenerDefaultAction extends cdktf.ComplexComputedList {

    // authenticate_cognito - computed: true, optional: false, required: false
    public get authenticateCognito() {
      return this.interpolationForAttribute('authenticate_cognito') as any;
    }

    // authenticate_oidc - computed: true, optional: false, required: false
    public get authenticateOidc() {
      return this.interpolationForAttribute('authenticate_oidc') as any;
    }

    // fixed_response - computed: true, optional: false, required: false
    public get fixedResponse() {
      return this.interpolationForAttribute('fixed_response') as any;
    }

    // forward - computed: true, optional: false, required: false
    public get forward() {
      return this.interpolationForAttribute('forward') as any;
    }

    // order - computed: true, optional: false, required: false
    public get order() {
      return this.getNumberAttribute('order');
    }

    // redirect - computed: true, optional: false, required: false
    public get redirect() {
      return this.interpolationForAttribute('redirect') as any;
    }

    // target_group_arn - computed: true, optional: false, required: false
    public get targetGroupArn() {
      return this.getStringAttribute('target_group_arn');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener}
  */
  export class DataAwsLbListener extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_listener";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbListenerConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsLbListenerConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_listener',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._loadBalancerArn = config.loadBalancerArn;
      this._port = config.port;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alpn_policy - computed: true, optional: false, required: false
    public get alpnPolicy() {
      return this.getStringAttribute('alpn_policy');
    }

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }

    // default_action - computed: true, optional: false, required: false
    public defaultAction(index: string) {
      return new DataAwsLbListenerDefaultAction(this, 'default_action', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // load_balancer_arn - computed: true, optional: true, required: false
    private _loadBalancerArn?: string;
    public get loadBalancerArn() {
      return this.getStringAttribute('load_balancer_arn');
    }
    public set loadBalancerArn(value: string) {
      this._loadBalancerArn = value;
    }
    public resetLoadBalancerArn() {
      this._loadBalancerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerArnInput() {
      return this._loadBalancerArn
    }

    // port - computed: true, optional: true, required: false
    private _port?: number;
    public get port() {
      return this.getNumberAttribute('port');
    }
    public set port(value: number) {
      this._port = value;
    }
    public resetPort() {
      this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
      return this._port
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // ssl_policy - computed: true, optional: false, required: false
    public get sslPolicy() {
      return this.getStringAttribute('ssl_policy');
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
        load_balancer_arn: cdktf.stringToTerraform(this._loadBalancerArn),
        port: cdktf.numberToTerraform(this._port),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsLbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#name DataAwsLbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#tags DataAwsLbTargetGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsLbTargetGroupHealthCheck extends cdktf.ComplexComputedList {

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // healthy_threshold - computed: true, optional: false, required: false
    public get healthyThreshold() {
      return this.getNumberAttribute('healthy_threshold');
    }

    // interval - computed: true, optional: false, required: false
    public get interval() {
      return this.getNumberAttribute('interval');
    }

    // matcher - computed: true, optional: false, required: false
    public get matcher() {
      return this.getStringAttribute('matcher');
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getStringAttribute('port');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // timeout - computed: true, optional: false, required: false
    public get timeout() {
      return this.getNumberAttribute('timeout');
    }

    // unhealthy_threshold - computed: true, optional: false, required: false
    public get unhealthyThreshold() {
      return this.getNumberAttribute('unhealthy_threshold');
    }
  }
  export class DataAwsLbTargetGroupStickiness extends cdktf.ComplexComputedList {

    // cookie_duration - computed: true, optional: false, required: false
    public get cookieDuration() {
      return this.getNumberAttribute('cookie_duration');
    }

    // cookie_name - computed: true, optional: false, required: false
    public get cookieName() {
      return this.getStringAttribute('cookie_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
      return this.getStringAttribute('type');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group}
  */
  export class DataAwsLbTargetGroup extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_lb_target_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbTargetGroupConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsLbTargetGroupConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_lb_target_group',
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

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // arn_suffix - computed: true, optional: false, required: false
    public get arnSuffix() {
      return this.getStringAttribute('arn_suffix');
    }

    // deregistration_delay - computed: true, optional: false, required: false
    public get deregistrationDelay() {
      return this.getNumberAttribute('deregistration_delay');
    }

    // health_check - computed: true, optional: false, required: false
    public healthCheck(index: string) {
      return new DataAwsLbTargetGroupHealthCheck(this, 'health_check', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // lambda_multi_value_headers_enabled - computed: true, optional: false, required: false
    public get lambdaMultiValueHeadersEnabled() {
      return this.getBooleanAttribute('lambda_multi_value_headers_enabled');
    }

    // load_balancing_algorithm_type - computed: true, optional: false, required: false
    public get loadBalancingAlgorithmType() {
      return this.getStringAttribute('load_balancing_algorithm_type');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // port - computed: true, optional: false, required: false
    public get port() {
      return this.getNumberAttribute('port');
    }

    // preserve_client_ip - computed: true, optional: false, required: false
    public get preserveClientIp() {
      return this.getStringAttribute('preserve_client_ip');
    }

    // protocol - computed: true, optional: false, required: false
    public get protocol() {
      return this.getStringAttribute('protocol');
    }

    // protocol_version - computed: true, optional: false, required: false
    public get protocolVersion() {
      return this.getStringAttribute('protocol_version');
    }

    // proxy_protocol_v2 - computed: true, optional: false, required: false
    public get proxyProtocolV2() {
      return this.getBooleanAttribute('proxy_protocol_v2');
    }

    // slow_start - computed: true, optional: false, required: false
    public get slowStart() {
      return this.getNumberAttribute('slow_start');
    }

    // stickiness - computed: true, optional: false, required: false
    public stickiness(index: string) {
      return new DataAwsLbTargetGroupStickiness(this, 'stickiness', index);
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

    // target_type - computed: true, optional: false, required: false
    public get targetType() {
      return this.getStringAttribute('target_type');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
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
}
