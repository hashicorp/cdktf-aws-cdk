// https://www.terraform.io/docs/providers/time/r/sleep
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SleepConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#create_duration Sleep#create_duration}
  */
  readonly createDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#destroy_duration Sleep#destroy_duration}
  */
  readonly destroyDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/sleep#triggers Sleep#triggers}
  */
  readonly triggers?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/time/r/sleep time_sleep}
*/
export class Sleep extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "time_sleep";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/time/r/sleep time_sleep} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SleepConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SleepConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_sleep',
      terraformGeneratorMetadata: {
        providerName: 'time',
        providerVersion: '0.7.2',
        providerVersionConstraint: '~> 0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._createDuration = config.createDuration;
    this._destroyDuration = config.destroyDuration;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_duration - computed: false, optional: true, required: false
  private _createDuration?: string; 
  public get createDuration() {
    return this.getStringAttribute('create_duration');
  }
  public set createDuration(value: string) {
    this._createDuration = value;
  }
  public resetCreateDuration() {
    this._createDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDurationInput() {
    return this._createDuration;
  }

  // destroy_duration - computed: false, optional: true, required: false
  private _destroyDuration?: string; 
  public get destroyDuration() {
    return this.getStringAttribute('destroy_duration');
  }
  public set destroyDuration(value: string) {
    this._destroyDuration = value;
  }
  public resetDestroyDuration() {
    this._destroyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyDurationInput() {
    return this._destroyDuration;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_duration: cdktf.stringToTerraform(this._createDuration),
      destroy_duration: cdktf.stringToTerraform(this._destroyDuration),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
    };
  }
}
