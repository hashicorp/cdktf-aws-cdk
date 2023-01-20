// https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ec2ClientVpnNetworkAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}
  */
  readonly clientVpnEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association#security_groups Ec2ClientVpnNetworkAssociation#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}
  */
  readonly subnetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association aws_ec2_client_vpn_network_association}
*/
export class Ec2ClientVpnNetworkAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ec2_client_vpn_network_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_client_vpn_network_association aws_ec2_client_vpn_network_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ec2ClientVpnNetworkAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: Ec2ClientVpnNetworkAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ec2_client_vpn_network_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.76.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientVpnEndpointId = config.clientVpnEndpointId;
    this._id = config.id;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // client_vpn_endpoint_id - computed: false, optional: false, required: true
  private _clientVpnEndpointId?: string; 
  public get clientVpnEndpointId() {
    return this.getStringAttribute('client_vpn_endpoint_id');
  }
  public set clientVpnEndpointId(value: string) {
    this._clientVpnEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVpnEndpointIdInput() {
    return this._clientVpnEndpointId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
      client_vpn_endpoint_id: cdktf.stringToTerraform(this._clientVpnEndpointId),
      id: cdktf.stringToTerraform(this._id),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
    };
  }
}
