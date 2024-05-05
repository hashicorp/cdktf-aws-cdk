/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimeVoiceConnectorStreamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}
  */
  readonly dataRetention: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}
  */
  readonly streamingNotificationTargets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}
  */
  readonly voiceConnectorId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}
*/
export class ChimeVoiceConnectorStreaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chime_voice_connector_streaming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import
  * @param importFromId The id of the existing ChimeVoiceConnectorStreaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chime_voice_connector_streaming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimeVoiceConnectorStreamingConfig
  */
  public constructor(scope: Construct, id: string, config: ChimeVoiceConnectorStreamingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chime_voice_connector_streaming',
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
    this._dataRetention = config.dataRetention;
    this._disabled = config.disabled;
    this._id = config.id;
    this._streamingNotificationTargets = config.streamingNotificationTargets;
    this._voiceConnectorId = config.voiceConnectorId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_retention - computed: false, optional: false, required: true
  private _dataRetention?: number; 
  public get dataRetention() {
    return this.getNumberAttribute('data_retention');
  }
  public set dataRetention(value: number) {
    this._dataRetention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionInput() {
    return this._dataRetention;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // streaming_notification_targets - computed: false, optional: true, required: false
  private _streamingNotificationTargets?: string[]; 
  public get streamingNotificationTargets() {
    return cdktf.Fn.tolist(this.getListAttribute('streaming_notification_targets'));
  }
  public set streamingNotificationTargets(value: string[]) {
    this._streamingNotificationTargets = value;
  }
  public resetStreamingNotificationTargets() {
    this._streamingNotificationTargets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingNotificationTargetsInput() {
    return this._streamingNotificationTargets;
  }

  // voice_connector_id - computed: false, optional: false, required: true
  private _voiceConnectorId?: string; 
  public get voiceConnectorId() {
    return this.getStringAttribute('voice_connector_id');
  }
  public set voiceConnectorId(value: string) {
    this._voiceConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceConnectorIdInput() {
    return this._voiceConnectorId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_retention: cdktf.numberToTerraform(this._dataRetention),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      streaming_notification_targets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamingNotificationTargets),
      voice_connector_id: cdktf.stringToTerraform(this._voiceConnectorId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_retention: {
        value: cdktf.numberToHclTerraform(this._dataRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      streaming_notification_targets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamingNotificationTargets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      voice_connector_id: {
        value: cdktf.stringToHclTerraform(this._voiceConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
