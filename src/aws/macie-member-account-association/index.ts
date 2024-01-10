/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacieMemberAccountAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#id MacieMemberAccountAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#member_account_id MacieMemberAccountAssociation#member_account_id}
  */
  readonly memberAccountId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association aws_macie_member_account_association}
*/
export class MacieMemberAccountAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie_member_account_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MacieMemberAccountAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MacieMemberAccountAssociation to import
  * @param importFromId The id of the existing MacieMemberAccountAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MacieMemberAccountAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie_member_account_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie_member_account_association aws_macie_member_account_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacieMemberAccountAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MacieMemberAccountAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie_member_account_association',
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
    this._id = config.id;
    this._memberAccountId = config.memberAccountId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // member_account_id - computed: false, optional: false, required: true
  private _memberAccountId?: string; 
  public get memberAccountId() {
    return this.getStringAttribute('member_account_id');
  }
  public set memberAccountId(value: string) {
    this._memberAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountIdInput() {
    return this._memberAccountId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      member_account_id: cdktf.stringToTerraform(this._memberAccountId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_account_id: {
        value: cdktf.stringToHclTerraform(this._memberAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
