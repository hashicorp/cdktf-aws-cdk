// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Network Firewall
*/
export namespace NetworkFirewall {
  export interface NetworkfirewallFirewallConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#delete_protection NetworkfirewallFirewall#delete_protection}
    */
    readonly deleteProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#description NetworkfirewallFirewall#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_arn NetworkfirewallFirewall#firewall_policy_arn}
    */
    readonly firewallPolicyArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#firewall_policy_change_protection NetworkfirewallFirewall#firewall_policy_change_protection}
    */
    readonly firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#name NetworkfirewallFirewall#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_change_protection NetworkfirewallFirewall#subnet_change_protection}
    */
    readonly subnetChangeProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags NetworkfirewallFirewall#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#tags_all NetworkfirewallFirewall#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#vpc_id NetworkfirewallFirewall#vpc_id}
    */
    readonly vpcId: string;
    /**
    * subnet_mapping block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_mapping NetworkfirewallFirewall#subnet_mapping}
    */
    readonly subnetMapping: NetworkfirewallFirewallSubnetMapping[];
  }
  export class NetworkfirewallFirewallFirewallStatusSyncStatesAttachment extends cdktf.ComplexComputedList {

    // endpoint_id - computed: true, optional: false, required: false
    public get endpointId() {
      return this.getStringAttribute('endpoint_id');
    }

    // subnet_id - computed: true, optional: false, required: false
    public get subnetId() {
      return this.getStringAttribute('subnet_id');
    }
  }
  export class NetworkfirewallFirewallFirewallStatusSyncStates extends cdktf.ComplexComputedList {

    // attachment - computed: true, optional: false, required: false
    public get attachment() {
      return this.interpolationForAttribute('attachment') as any;
    }

    // availability_zone - computed: true, optional: false, required: false
    public get availabilityZone() {
      return this.getStringAttribute('availability_zone');
    }
  }
  export class NetworkfirewallFirewallFirewallStatus extends cdktf.ComplexComputedList {

    // sync_states - computed: true, optional: false, required: false
    public get syncStates() {
      return this.interpolationForAttribute('sync_states') as any;
    }
  }
  export interface NetworkfirewallFirewallSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html#subnet_id NetworkfirewallFirewall#subnet_id}
    */
    readonly subnetId: string;
  }

  function networkfirewallFirewallSubnetMappingToTerraform(struct?: NetworkfirewallFirewallSubnetMapping): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall}
  */
  export class NetworkfirewallFirewall extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_firewall";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall.html aws_networkfirewall_firewall} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_firewall',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deleteProtection = config.deleteProtection;
      this._description = config.description;
      this._firewallPolicyArn = config.firewallPolicyArn;
      this._firewallPolicyChangeProtection = config.firewallPolicyChangeProtection;
      this._name = config.name;
      this._subnetChangeProtection = config.subnetChangeProtection;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpcId = config.vpcId;
      this._subnetMapping = config.subnetMapping;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // delete_protection - computed: false, optional: true, required: false
    private _deleteProtection?: boolean | cdktf.IResolvable;
    public get deleteProtection() {
      return this.getBooleanAttribute('delete_protection');
    }
    public set deleteProtection(value: boolean | cdktf.IResolvable ) {
      this._deleteProtection = value;
    }
    public resetDeleteProtection() {
      this._deleteProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteProtectionInput() {
      return this._deleteProtection
    }

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

    // firewall_policy_arn - computed: false, optional: false, required: true
    private _firewallPolicyArn: string;
    public get firewallPolicyArn() {
      return this.getStringAttribute('firewall_policy_arn');
    }
    public set firewallPolicyArn(value: string) {
      this._firewallPolicyArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyArnInput() {
      return this._firewallPolicyArn
    }

    // firewall_policy_change_protection - computed: false, optional: true, required: false
    private _firewallPolicyChangeProtection?: boolean | cdktf.IResolvable;
    public get firewallPolicyChangeProtection() {
      return this.getBooleanAttribute('firewall_policy_change_protection');
    }
    public set firewallPolicyChangeProtection(value: boolean | cdktf.IResolvable ) {
      this._firewallPolicyChangeProtection = value;
    }
    public resetFirewallPolicyChangeProtection() {
      this._firewallPolicyChangeProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyChangeProtectionInput() {
      return this._firewallPolicyChangeProtection
    }

    // firewall_status - computed: true, optional: false, required: false
    public firewallStatus(index: string) {
      return new NetworkfirewallFirewallFirewallStatus(this, 'firewall_status', index);
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

    // subnet_change_protection - computed: false, optional: true, required: false
    private _subnetChangeProtection?: boolean | cdktf.IResolvable;
    public get subnetChangeProtection() {
      return this.getBooleanAttribute('subnet_change_protection');
    }
    public set subnetChangeProtection(value: boolean | cdktf.IResolvable ) {
      this._subnetChangeProtection = value;
    }
    public resetSubnetChangeProtection() {
      this._subnetChangeProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetChangeProtectionInput() {
      return this._subnetChangeProtection
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

    // update_token - computed: true, optional: false, required: false
    public get updateToken() {
      return this.getStringAttribute('update_token');
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId: string;
    public get vpcId() {
      return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
      this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
      return this._vpcId
    }

    // subnet_mapping - computed: false, optional: false, required: true
    private _subnetMapping: NetworkfirewallFirewallSubnetMapping[];
    public get subnetMapping() {
      return this.interpolationForAttribute('subnet_mapping') as any;
    }
    public set subnetMapping(value: NetworkfirewallFirewallSubnetMapping[]) {
      this._subnetMapping = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetMappingInput() {
      return this._subnetMapping
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delete_protection: cdktf.booleanToTerraform(this._deleteProtection),
        description: cdktf.stringToTerraform(this._description),
        firewall_policy_arn: cdktf.stringToTerraform(this._firewallPolicyArn),
        firewall_policy_change_protection: cdktf.booleanToTerraform(this._firewallPolicyChangeProtection),
        name: cdktf.stringToTerraform(this._name),
        subnet_change_protection: cdktf.booleanToTerraform(this._subnetChangeProtection),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc_id: cdktf.stringToTerraform(this._vpcId),
        subnet_mapping: cdktf.listMapper(networkfirewallFirewallSubnetMappingToTerraform)(this._subnetMapping),
      };
    }
  }
  export interface NetworkfirewallFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#description NetworkfirewallFirewallPolicy#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#name NetworkfirewallFirewallPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags NetworkfirewallFirewallPolicy#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#tags_all NetworkfirewallFirewallPolicy#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * firewall_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}
    */
    readonly firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
  }
  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#value NetworkfirewallFirewallPolicy#value}
    */
    readonly value: string;
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#dimension NetworkfirewallFirewallPolicy#dimension}
    */
    readonly dimension: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimension[];
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      dimension: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition {
    /**
    * publish_metric_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricAction[];
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      publish_metric_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionPublishMetricActionToTerraform)(struct!.publishMetricAction),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_name NetworkfirewallFirewallPolicy#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#action_definition NetworkfirewallFirewallPolicy#action_definition}
    */
    readonly actionDefinition: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinition[];
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action_name: cdktf.stringToTerraform(struct!.actionName),
      action_definition: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionActionDefinitionToTerraform)(struct!.actionDefinition),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#priority NetworkfirewallFirewallPolicy#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#resource_arn NetworkfirewallFirewallPolicy#resource_arn}
    */
    readonly resourceArn: string;
  }

  function networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    }
  }

  export interface NetworkfirewallFirewallPolicyFirewallPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}
    */
    readonly statelessDefaultActions: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}
    */
    readonly statelessFragmentDefaultActions: string[];
    /**
    * stateful_rule_group_reference block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateful_rule_group_reference NetworkfirewallFirewallPolicy#stateful_rule_group_reference}
    */
    readonly statefulRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReference[];
    /**
    * stateless_custom_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_custom_action NetworkfirewallFirewallPolicy#stateless_custom_action}
    */
    readonly statelessCustomAction?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomAction[];
    /**
    * stateless_rule_group_reference block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html#stateless_rule_group_reference NetworkfirewallFirewallPolicy#stateless_rule_group_reference}
    */
    readonly statelessRuleGroupReference?: NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReference[];
  }

  function networkfirewallFirewallPolicyFirewallPolicyToTerraform(struct?: NetworkfirewallFirewallPolicyFirewallPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      stateless_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessDefaultActions),
      stateless_fragment_default_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.statelessFragmentDefaultActions),
      stateful_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferenceToTerraform)(struct!.statefulRuleGroupReference),
      stateless_custom_action: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionToTerraform)(struct!.statelessCustomAction),
      stateless_rule_group_reference: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferenceToTerraform)(struct!.statelessRuleGroupReference),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy}
  */
  export class NetworkfirewallFirewallPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_firewall_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_firewall_policy.html aws_networkfirewall_firewall_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallFirewallPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallFirewallPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_firewall_policy',
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
      this._firewallPolicy = config.firewallPolicy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

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

    // update_token - computed: true, optional: false, required: false
    public get updateToken() {
      return this.getStringAttribute('update_token');
    }

    // firewall_policy - computed: false, optional: false, required: true
    private _firewallPolicy: NetworkfirewallFirewallPolicyFirewallPolicy[];
    public get firewallPolicy() {
      return this.interpolationForAttribute('firewall_policy') as any;
    }
    public set firewallPolicy(value: NetworkfirewallFirewallPolicyFirewallPolicy[]) {
      this._firewallPolicy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallPolicyInput() {
      return this._firewallPolicy
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
        firewall_policy: cdktf.listMapper(networkfirewallFirewallPolicyFirewallPolicyToTerraform)(this._firewallPolicy),
      };
    }
  }
  export interface NetworkfirewallLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}
    */
    readonly firewallArn: string;
    /**
    * logging_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}
    */
    readonly loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
  }
  export interface NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination NetworkfirewallLoggingConfiguration#log_destination}
    */
    readonly logDestination: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}
    */
    readonly logDestinationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_type NetworkfirewallLoggingConfiguration#log_type}
    */
    readonly logType: string;
  }

  function networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_destination: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.logDestination),
      log_destination_type: cdktf.stringToTerraform(struct!.logDestinationType),
      log_type: cdktf.stringToTerraform(struct!.logType),
    }
  }

  export interface NetworkfirewallLoggingConfigurationLoggingConfiguration {
    /**
    * log_destination_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html#log_destination_config NetworkfirewallLoggingConfiguration#log_destination_config}
    */
    readonly logDestinationConfig: NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfig[];
  }

  function networkfirewallLoggingConfigurationLoggingConfigurationToTerraform(struct?: NetworkfirewallLoggingConfigurationLoggingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_destination_config: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigToTerraform)(struct!.logDestinationConfig),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration}
  */
  export class NetworkfirewallLoggingConfiguration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_logging_configuration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_logging_configuration.html aws_networkfirewall_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallLoggingConfigurationConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallLoggingConfigurationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_logging_configuration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._firewallArn = config.firewallArn;
      this._loggingConfiguration = config.loggingConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // firewall_arn - computed: false, optional: false, required: true
    private _firewallArn: string;
    public get firewallArn() {
      return this.getStringAttribute('firewall_arn');
    }
    public set firewallArn(value: string) {
      this._firewallArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get firewallArnInput() {
      return this._firewallArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // logging_configuration - computed: false, optional: false, required: true
    private _loggingConfiguration: NetworkfirewallLoggingConfigurationLoggingConfiguration[];
    public get loggingConfiguration() {
      return this.interpolationForAttribute('logging_configuration') as any;
    }
    public set loggingConfiguration(value: NetworkfirewallLoggingConfigurationLoggingConfiguration[]) {
      this._loggingConfiguration = value;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
      return this._loggingConfiguration
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        firewall_arn: cdktf.stringToTerraform(this._firewallArn),
        logging_configuration: cdktf.listMapper(networkfirewallLoggingConfigurationLoggingConfigurationToTerraform)(this._loggingConfiguration),
      };
    }
  }
  export interface NetworkfirewallResourcePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#policy NetworkfirewallResourcePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html#resource_arn NetworkfirewallResourcePolicy#resource_arn}
    */
    readonly resourceArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy}
  */
  export class NetworkfirewallResourcePolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_resource_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_resource_policy.html aws_networkfirewall_resource_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallResourcePolicyConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallResourcePolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_resource_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._resourceArn = config.resourceArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy: string;
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn: string;
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
      };
    }
  }
  export interface NetworkfirewallRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#capacity NetworkfirewallRuleGroup#capacity}
    */
    readonly capacity: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#description NetworkfirewallRuleGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#name NetworkfirewallRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules NetworkfirewallRuleGroup#rules}
    */
    readonly rules?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags NetworkfirewallRuleGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tags_all NetworkfirewallRuleGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#type NetworkfirewallRuleGroup#type}
    */
    readonly type: string;
    /**
    * rule_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_group NetworkfirewallRuleGroup#rule_group}
    */
    readonly ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
  }
  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * ip_set block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_set NetworkfirewallRuleGroup#ip_set}
    */
    readonly ipSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSet[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      ip_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsIpSetToTerraform)(struct!.ipSet),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#definition NetworkfirewallRuleGroup#definition}
    */
    readonly definition: string[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      definition: cdktf.listMapper(cdktf.stringToTerraform)(struct!.definition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#key NetworkfirewallRuleGroup#key}
    */
    readonly key: string;
    /**
    * port_set block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_set NetworkfirewallRuleGroup#port_set}
    */
    readonly portSet: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSet[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      port_set: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsPortSetToTerraform)(struct!.portSet),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRuleVariables {
    /**
    * ip_sets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#ip_sets NetworkfirewallRuleGroup#ip_sets}
    */
    readonly ipSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesIpSets[];
    /**
    * port_sets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#port_sets NetworkfirewallRuleGroup#port_sets}
    */
    readonly portSets?: NetworkfirewallRuleGroupRuleGroupRuleVariablesPortSets[];
  }

  function networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRuleVariables): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      ip_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesIpSetsToTerraform)(struct!.ipSets),
      port_sets: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesPortSetsToTerraform)(struct!.portSets),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#generated_rules_type NetworkfirewallRuleGroup#generated_rules_type}
    */
    readonly generatedRulesType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#target_types NetworkfirewallRuleGroup#target_types}
    */
    readonly targetTypes: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#targets NetworkfirewallRuleGroup#targets}
    */
    readonly targets: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      generated_rules_type: cdktf.stringToTerraform(struct!.generatedRulesType),
      target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
      targets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targets),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#direction NetworkfirewallRuleGroup#direction}
    */
    readonly direction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocol NetworkfirewallRuleGroup#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      destination: cdktf.stringToTerraform(struct!.destination),
      destination_port: cdktf.stringToTerraform(struct!.destinationPort),
      direction: cdktf.stringToTerraform(struct!.direction),
      protocol: cdktf.stringToTerraform(struct!.protocol),
      source: cdktf.stringToTerraform(struct!.source),
      source_port: cdktf.stringToTerraform(struct!.sourcePort),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#keyword NetworkfirewallRuleGroup#keyword}
    */
    readonly keyword: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#settings NetworkfirewallRuleGroup#settings}
    */
    readonly settings?: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      keyword: cdktf.stringToTerraform(struct!.keyword),
      settings: cdktf.listMapper(cdktf.stringToTerraform)(struct!.settings),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action NetworkfirewallRuleGroup#action}
    */
    readonly action: string;
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#header NetworkfirewallRuleGroup#header}
    */
    readonly header: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeader[];
    /**
    * rule_option block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_option NetworkfirewallRuleGroup#rule_option}
    */
    readonly ruleOption: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOption[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action: cdktf.stringToTerraform(struct!.action),
      header: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleHeaderToTerraform)(struct!.header),
      rule_option: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleRuleOptionToTerraform)(struct!.ruleOption),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#value NetworkfirewallRuleGroup#value}
    */
    readonly value: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction {
    /**
    * dimension block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#dimension NetworkfirewallRuleGroup#dimension}
    */
    readonly dimension: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimension[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      dimension: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionDimensionToTerraform)(struct!.dimension),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition {
    /**
    * publish_metric_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#publish_metric_action NetworkfirewallRuleGroup#publish_metric_action}
    */
    readonly publishMetricAction: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricAction[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      publish_metric_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionPublishMetricActionToTerraform)(struct!.publishMetricAction),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_name NetworkfirewallRuleGroup#action_name}
    */
    readonly actionName: string;
    /**
    * action_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#action_definition NetworkfirewallRuleGroup#action_definition}
    */
    readonly actionDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinition[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      action_name: cdktf.stringToTerraform(struct!.actionName),
      action_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionActionDefinitionToTerraform)(struct!.actionDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#address_definition NetworkfirewallRuleGroup#address_definition}
    */
    readonly addressDefinition: string;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      address_definition: cdktf.stringToTerraform(struct!.addressDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#from_port NetworkfirewallRuleGroup#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#to_port NetworkfirewallRuleGroup#to_port}
    */
    readonly toPort?: number;
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#flags NetworkfirewallRuleGroup#flags}
    */
    readonly flags: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#masks NetworkfirewallRuleGroup#masks}
    */
    readonly masks?: string[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
      masks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.masks),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#protocols NetworkfirewallRuleGroup#protocols}
    */
    readonly protocols?: number[];
    /**
    * destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination NetworkfirewallRuleGroup#destination}
    */
    readonly destination?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestination[];
    /**
    * destination_port block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#destination_port NetworkfirewallRuleGroup#destination_port}
    */
    readonly destinationPort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPort[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source NetworkfirewallRuleGroup#source}
    */
    readonly source?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSource[];
    /**
    * source_port block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#source_port NetworkfirewallRuleGroup#source_port}
    */
    readonly sourcePort?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePort[];
    /**
    * tcp_flag block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#tcp_flag NetworkfirewallRuleGroup#tcp_flag}
    */
    readonly tcpFlag?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlag[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      protocols: cdktf.listMapper(cdktf.numberToTerraform)(struct!.protocols),
      destination: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationToTerraform)(struct!.destination),
      destination_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesDestinationPortToTerraform)(struct!.destinationPort),
      source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourceToTerraform)(struct!.source),
      source_port: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesSourcePortToTerraform)(struct!.sourcePort),
      tcp_flag: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesTcpFlagToTerraform)(struct!.tcpFlag),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#actions NetworkfirewallRuleGroup#actions}
    */
    readonly actions: string[];
    /**
    * match_attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#match_attributes NetworkfirewallRuleGroup#match_attributes}
    */
    readonly matchAttributes: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributes[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
      match_attributes: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionMatchAttributesToTerraform)(struct!.matchAttributes),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#priority NetworkfirewallRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * rule_definition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_definition NetworkfirewallRuleGroup#rule_definition}
    */
    readonly ruleDefinition: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinition[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_definition: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleRuleDefinitionToTerraform)(struct!.ruleDefinition),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions {
    /**
    * custom_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#custom_action NetworkfirewallRuleGroup#custom_action}
    */
    readonly customAction?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomAction[];
    /**
    * stateless_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rule NetworkfirewallRuleGroup#stateless_rule}
    */
    readonly statelessRule: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRule[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      custom_action: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsCustomActionToTerraform)(struct!.customAction),
      stateless_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsStatelessRuleToTerraform)(struct!.statelessRule),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroupRulesSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_string NetworkfirewallRuleGroup#rules_string}
    */
    readonly rulesString?: string;
    /**
    * rules_source_list block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source_list NetworkfirewallRuleGroup#rules_source_list}
    */
    readonly rulesSourceList?: NetworkfirewallRuleGroupRuleGroupRulesSourceRulesSourceList[];
    /**
    * stateful_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateful_rule NetworkfirewallRuleGroup#stateful_rule}
    */
    readonly statefulRule?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatefulRule[];
    /**
    * stateless_rules_and_custom_actions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#stateless_rules_and_custom_actions NetworkfirewallRuleGroup#stateless_rules_and_custom_actions}
    */
    readonly statelessRulesAndCustomActions?: NetworkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActions[];
  }

  function networkfirewallRuleGroupRuleGroupRulesSourceToTerraform(struct?: NetworkfirewallRuleGroupRuleGroupRulesSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      rules_string: cdktf.stringToTerraform(struct!.rulesString),
      rules_source_list: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceRulesSourceListToTerraform)(struct!.rulesSourceList),
      stateful_rule: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatefulRuleToTerraform)(struct!.statefulRule),
      stateless_rules_and_custom_actions: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceStatelessRulesAndCustomActionsToTerraform)(struct!.statelessRulesAndCustomActions),
    }
  }

  export interface NetworkfirewallRuleGroupRuleGroup {
    /**
    * rule_variables block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rule_variables NetworkfirewallRuleGroup#rule_variables}
    */
    readonly ruleVariables?: NetworkfirewallRuleGroupRuleGroupRuleVariables[];
    /**
    * rules_source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html#rules_source NetworkfirewallRuleGroup#rules_source}
    */
    readonly rulesSource: NetworkfirewallRuleGroupRuleGroupRulesSource[];
  }

  function networkfirewallRuleGroupRuleGroupToTerraform(struct?: NetworkfirewallRuleGroupRuleGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      rule_variables: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRuleVariablesToTerraform)(struct!.ruleVariables),
      rules_source: cdktf.listMapper(networkfirewallRuleGroupRuleGroupRulesSourceToTerraform)(struct!.rulesSource),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group}
  */
  export class NetworkfirewallRuleGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_networkfirewall_rule_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/networkfirewall_rule_group.html aws_networkfirewall_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NetworkfirewallRuleGroupConfig
    */
    public constructor(scope: Construct, id: string, config: NetworkfirewallRuleGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_networkfirewall_rule_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._capacity = config.capacity;
      this._description = config.description;
      this._name = config.name;
      this._rules = config.rules;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._ruleGroup = config.ruleGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capacity - computed: false, optional: false, required: true
    private _capacity: number;
    public get capacity() {
      return this.getNumberAttribute('capacity');
    }
    public set capacity(value: number) {
      this._capacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityInput() {
      return this._capacity
    }

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

    // rules - computed: false, optional: true, required: false
    private _rules?: string;
    public get rules() {
      return this.getStringAttribute('rules');
    }
    public set rules(value: string ) {
      this._rules = value;
    }
    public resetRules() {
      this._rules = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
      return this._rules
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

    // type - computed: false, optional: false, required: true
    private _type: string;
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // update_token - computed: true, optional: false, required: false
    public get updateToken() {
      return this.getStringAttribute('update_token');
    }

    // rule_group - computed: false, optional: true, required: false
    private _ruleGroup?: NetworkfirewallRuleGroupRuleGroup[];
    public get ruleGroup() {
      return this.interpolationForAttribute('rule_group') as any;
    }
    public set ruleGroup(value: NetworkfirewallRuleGroupRuleGroup[] ) {
      this._ruleGroup = value;
    }
    public resetRuleGroup() {
      this._ruleGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleGroupInput() {
      return this._ruleGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        capacity: cdktf.numberToTerraform(this._capacity),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        rules: cdktf.stringToTerraform(this._rules),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        rule_group: cdktf.listMapper(networkfirewallRuleGroupRuleGroupToTerraform)(this._ruleGroup),
      };
    }
  }
}
