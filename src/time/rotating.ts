// https://www.terraform.io/docs/providers/time/r/rotating.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RotatingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rfc3339 Rotating#rfc3339}
  */
  readonly rfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_days Rotating#rotation_days}
  */
  readonly rotationDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_hours Rotating#rotation_hours}
  */
  readonly rotationHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_minutes Rotating#rotation_minutes}
  */
  readonly rotationMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_months Rotating#rotation_months}
  */
  readonly rotationMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_rfc3339 Rotating#rotation_rfc3339}
  */
  readonly rotationRfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#rotation_years Rotating#rotation_years}
  */
  readonly rotationYears?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/rotating.html#triggers Rotating#triggers}
  */
  readonly triggers?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/time/r/rotating.html time_rotating}
*/
export class Rotating extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "time_rotating";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/time/r/rotating.html time_rotating} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RotatingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RotatingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_rotating',
      terraformGeneratorMetadata: {
        providerName: 'time'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _rfc3339?: string | undefined; 
  public get rfc3339() {
    return this.getStringAttribute('rfc3339');
  }
  public set rfc3339(value: string | undefined) {
    this._rfc3339 = value;
  }
  public resetRfc3339() {
    this._rfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc3339Input() {
    return this._rfc3339
  }

  // rotation_days - computed: false, optional: true, required: false
  private _rotationDays?: number | undefined; 
  public get rotationDays() {
    return this.getNumberAttribute('rotation_days');
  }
  public set rotationDays(value: number | undefined) {
    this._rotationDays = value;
  }
  public resetRotationDays() {
    this._rotationDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationDaysInput() {
    return this._rotationDays
  }

  // rotation_hours - computed: false, optional: true, required: false
  private _rotationHours?: number | undefined; 
  public get rotationHours() {
    return this.getNumberAttribute('rotation_hours');
  }
  public set rotationHours(value: number | undefined) {
    this._rotationHours = value;
  }
  public resetRotationHours() {
    this._rotationHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationHoursInput() {
    return this._rotationHours
  }

  // rotation_minutes - computed: false, optional: true, required: false
  private _rotationMinutes?: number | undefined; 
  public get rotationMinutes() {
    return this.getNumberAttribute('rotation_minutes');
  }
  public set rotationMinutes(value: number | undefined) {
    this._rotationMinutes = value;
  }
  public resetRotationMinutes() {
    this._rotationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationMinutesInput() {
    return this._rotationMinutes
  }

  // rotation_months - computed: false, optional: true, required: false
  private _rotationMonths?: number | undefined; 
  public get rotationMonths() {
    return this.getNumberAttribute('rotation_months');
  }
  public set rotationMonths(value: number | undefined) {
    this._rotationMonths = value;
  }
  public resetRotationMonths() {
    this._rotationMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationMonthsInput() {
    return this._rotationMonths
  }

  // rotation_rfc3339 - computed: true, optional: true, required: false
  private _rotationRfc3339?: string | undefined; 
  public get rotationRfc3339() {
    return this.getStringAttribute('rotation_rfc3339');
  }
  public set rotationRfc3339(value: string | undefined) {
    this._rotationRfc3339 = value;
  }
  public resetRotationRfc3339() {
    this._rotationRfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRfc3339Input() {
    return this._rotationRfc3339
  }

  // rotation_years - computed: false, optional: true, required: false
  private _rotationYears?: number | undefined; 
  public get rotationYears() {
    return this.getNumberAttribute('rotation_years');
  }
  public set rotationYears(value: number | undefined) {
    this._rotationYears = value;
  }
  public resetRotationYears() {
    this._rotationYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationYearsInput() {
    return this._rotationYears
  }

  // second - computed: true, optional: false, required: false
  public get second() {
    return this.getNumberAttribute('second');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get triggers() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('triggers') as any;
  }
  public set triggers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers
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
      rfc3339: cdktf.stringToTerraform(this._rfc3339),
      rotation_days: cdktf.numberToTerraform(this._rotationDays),
      rotation_hours: cdktf.numberToTerraform(this._rotationHours),
      rotation_minutes: cdktf.numberToTerraform(this._rotationMinutes),
      rotation_months: cdktf.numberToTerraform(this._rotationMonths),
      rotation_rfc3339: cdktf.stringToTerraform(this._rotationRfc3339),
      rotation_years: cdktf.numberToTerraform(this._rotationYears),
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
    };
  }
}
