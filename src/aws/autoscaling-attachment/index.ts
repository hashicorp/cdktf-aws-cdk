// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment#alb_target_group_arn AutoscalingAttachment#alb_target_group_arn}
  */
  readonly albTargetGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment#autoscaling_group_name AutoscalingAttachment#autoscaling_group_name}
  */
  readonly autoscalingGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment#elb AutoscalingAttachment#elb}
  */
  readonly elb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment#id AutoscalingAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment aws_autoscaling_attachment}
*/
export class AutoscalingAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_autoscaling_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoscalingAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoscalingAttachment to import
  * @param importFromId The id of the existing AutoscalingAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoscalingAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_autoscaling_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_attachment aws_autoscaling_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoscalingAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AutoscalingAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_attachment',
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
    this._albTargetGroupArn = config.albTargetGroupArn;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._elb = config.elb;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alb_target_group_arn - computed: false, optional: true, required: false
  private _albTargetGroupArn?: string; 
  public get albTargetGroupArn() {
    return this.getStringAttribute('alb_target_group_arn');
  }
  public set albTargetGroupArn(value: string) {
    this._albTargetGroupArn = value;
  }
  public resetAlbTargetGroupArn() {
    this._albTargetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get albTargetGroupArnInput() {
    return this._albTargetGroupArn;
  }

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName?: string; 
  public get autoscalingGroupName() {
    return this.getStringAttribute('autoscaling_group_name');
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingGroupNameInput() {
    return this._autoscalingGroupName;
  }

  // elb - computed: false, optional: true, required: false
  private _elb?: string; 
  public get elb() {
    return this.getStringAttribute('elb');
  }
  public set elb(value: string) {
    this._elb = value;
  }
  public resetElb() {
    this._elb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbInput() {
    return this._elb;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alb_target_group_arn: cdktf.stringToTerraform(this._albTargetGroupArn),
      autoscaling_group_name: cdktf.stringToTerraform(this._autoscalingGroupName),
      elb: cdktf.stringToTerraform(this._elb),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alb_target_group_arn: {
        value: cdktf.stringToHclTerraform(this._albTargetGroupArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling_group_name: {
        value: cdktf.stringToHclTerraform(this._autoscalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elb: {
        value: cdktf.stringToHclTerraform(this._elb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
