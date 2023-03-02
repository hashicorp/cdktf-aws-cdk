/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://www.terraform.io/docs/providers/time/r/rotating
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#id Rotating#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rfc3339 Rotating#rfc3339}
  */
  readonly rfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_days Rotating#rotation_days}
  */
  readonly rotationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_hours Rotating#rotation_hours}
  */
  readonly rotationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_minutes Rotating#rotation_minutes}
  */
  readonly rotationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_months Rotating#rotation_months}
  */
  readonly rotationMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_rfc3339 Rotating#rotation_rfc3339}
  */
  readonly rotationRfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#rotation_years Rotating#rotation_years}
  */
  readonly rotationYears?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating#triggers Rotating#triggers}
  */
  readonly triggers?: { [key: string]: string };
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/time/r/rotating time_rotating}
*/
export class Rotating extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "time_rotating";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/time/r/rotating time_rotating} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RotatingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_rotating',
      terraformGeneratorMetadata: {
        providerName: 'time',
        providerVersion: '0.7.2',
        providerVersionConstraint: '~> 0.7.2'
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
    this._rfc3339 = config.rfc3339;
    this._rotationDays = config.rotationDays;
    this._rotationHours = config.rotationHours;
    this._rotationMinutes = config.rotationMinutes;
    this._rotationMonths = config.rotationMonths;
    this._rotationRfc3339 = config.rotationRfc3339;
    this._rotationYears = config.rotationYears;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
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

  // minute - computed: true, optional: false, required: false
  public get minute() {
    return this.getNumberAttribute('minute');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getNumberAttribute('month');
  }

  // rfc3339 - computed: true, optional: true, required: false
  private _rfc3339?: string; 
  public get rfc3339() {
    return this.getStringAttribute('rfc3339');
  }
  public set rfc3339(value: string) {
    this._rfc3339 = value;
  }
  public resetRfc3339() {
    this._rfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc3339Input() {
    return this._rfc3339;
  }

  // rotation_days - computed: false, optional: true, required: false
  private _rotationDays?: number; 
  public get rotationDays() {
    return this.getNumberAttribute('rotation_days');
  }
  public set rotationDays(value: number) {
    this._rotationDays = value;
  }
  public resetRotationDays() {
    this._rotationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationDaysInput() {
    return this._rotationDays;
  }

  // rotation_hours - computed: false, optional: true, required: false
  private _rotationHours?: number; 
  public get rotationHours() {
    return this.getNumberAttribute('rotation_hours');
  }
  public set rotationHours(value: number) {
    this._rotationHours = value;
  }
  public resetRotationHours() {
    this._rotationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationHoursInput() {
    return this._rotationHours;
  }

  // rotation_minutes - computed: false, optional: true, required: false
  private _rotationMinutes?: number; 
  public get rotationMinutes() {
    return this.getNumberAttribute('rotation_minutes');
  }
  public set rotationMinutes(value: number) {
    this._rotationMinutes = value;
  }
  public resetRotationMinutes() {
    this._rotationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationMinutesInput() {
    return this._rotationMinutes;
  }

  // rotation_months - computed: false, optional: true, required: false
  private _rotationMonths?: number; 
  public get rotationMonths() {
    return this.getNumberAttribute('rotation_months');
  }
  public set rotationMonths(value: number) {
    this._rotationMonths = value;
  }
  public resetRotationMonths() {
    this._rotationMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationMonthsInput() {
    return this._rotationMonths;
  }

  // rotation_rfc3339 - computed: true, optional: true, required: false
  private _rotationRfc3339?: string; 
  public get rotationRfc3339() {
    return this.getStringAttribute('rotation_rfc3339');
  }
  public set rotationRfc3339(value: string) {
    this._rotationRfc3339 = value;
  }
  public resetRotationRfc3339() {
    this._rotationRfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRfc3339Input() {
    return this._rotationRfc3339;
  }

  // rotation_years - computed: false, optional: true, required: false
  private _rotationYears?: number; 
  public get rotationYears() {
    return this.getNumberAttribute('rotation_years');
  }
  public set rotationYears(value: number) {
    this._rotationYears = value;
  }
  public resetRotationYears() {
    this._rotationYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationYearsInput() {
    return this._rotationYears;
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getNumberAttribute('second');
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

  // unix - computed: true, optional: false, required: false
  public get unix() {
    return this.getNumberAttribute('unix');
  }

  // year - computed: true, optional: false, required: false
  public get year() {
    return this.getNumberAttribute('year');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      rfc3339: cdktf.stringToTerraform(this._rfc3339),
      rotation_days: cdktf.numberToTerraform(this._rotationDays),
      rotation_hours: cdktf.numberToTerraform(this._rotationHours),
      rotation_minutes: cdktf.numberToTerraform(this._rotationMinutes),
      rotation_months: cdktf.numberToTerraform(this._rotationMonths),
      rotation_rfc3339: cdktf.stringToTerraform(this._rotationRfc3339),
      rotation_years: cdktf.numberToTerraform(this._rotationYears),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
    };
  }
}
