// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie 2
*/
export interface Macie2InvitationAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#administrator_account_id Macie2InvitationAccepter#administrator_account_id}
  */
  readonly administratorAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#timeouts Macie2InvitationAccepter#timeouts}
  */
  readonly timeouts?: Macie2InvitationAccepterTimeouts;
}
export interface Macie2InvitationAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html#create Macie2InvitationAccepter#create}
  */
  readonly create?: string;
}

export function macie2InvitationAccepterTimeoutsToTerraform(struct?: Macie2InvitationAccepterTimeoutsOutputReference | Macie2InvitationAccepterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class Macie2InvitationAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter}
*/
export class Macie2InvitationAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_invitation_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html aws_macie2_invitation_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2InvitationAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2InvitationAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_invitation_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorAccountId = config.administratorAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_account_id - computed: false, optional: false, required: true
  private _administratorAccountId?: string; 
  public get administratorAccountId() {
    return this.getStringAttribute('administrator_account_id');
  }
  public set administratorAccountId(value: string) {
    this._administratorAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorAccountIdInput() {
    return this._administratorAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Macie2InvitationAccepterTimeouts | undefined; 
  private __timeoutsOutput = new Macie2InvitationAccepterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: Macie2InvitationAccepterTimeouts | undefined) {
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
      administrator_account_id: cdktf.stringToTerraform(this._administratorAccountId),
      timeouts: macie2InvitationAccepterTimeoutsToTerraform(this._timeouts),
    };
  }
}
