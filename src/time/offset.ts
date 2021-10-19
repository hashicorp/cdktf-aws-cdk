// https://www.terraform.io/docs/providers/time/r/offset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OffsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#base_rfc3339 Offset#base_rfc3339}
  */
  readonly baseRfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_days Offset#offset_days}
  */
  readonly offsetDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_hours Offset#offset_hours}
  */
  readonly offsetHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_minutes Offset#offset_minutes}
  */
  readonly offsetMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_months Offset#offset_months}
  */
  readonly offsetMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_seconds Offset#offset_seconds}
  */
  readonly offsetSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#offset_years Offset#offset_years}
  */
  readonly offsetYears?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/time/r/offset.html#triggers Offset#triggers}
  */
  readonly triggers?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/time/r/offset.html time_offset}
*/
export class Offset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "time_offset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/time/r/offset.html time_offset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OffsetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OffsetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_offset',
      terraformGeneratorMetadata: {
        providerName: 'time'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._baseRfc3339 = config.baseRfc3339;
    this._offsetDays = config.offsetDays;
    this._offsetHours = config.offsetHours;
    this._offsetMinutes = config.offsetMinutes;
    this._offsetMonths = config.offsetMonths;
    this._offsetSeconds = config.offsetSeconds;
    this._offsetYears = config.offsetYears;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_rfc3339 - computed: true, optional: true, required: false
  private _baseRfc3339?: string | undefined; 
  public get baseRfc3339() {
    return this.getStringAttribute('base_rfc3339');
  }
  public set baseRfc3339(value: string | undefined) {
    this._baseRfc3339 = value;
  }
  public resetBaseRfc3339() {
    this._baseRfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRfc3339Input() {
    return this._baseRfc3339
  }

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

  // offset_days - computed: false, optional: true, required: false
  private _offsetDays?: number | undefined; 
  public get offsetDays() {
    return this.getNumberAttribute('offset_days');
  }
  public set offsetDays(value: number | undefined) {
    this._offsetDays = value;
  }
  public resetOffsetDays() {
    this._offsetDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetDaysInput() {
    return this._offsetDays
  }

  // offset_hours - computed: false, optional: true, required: false
  private _offsetHours?: number | undefined; 
  public get offsetHours() {
    return this.getNumberAttribute('offset_hours');
  }
  public set offsetHours(value: number | undefined) {
    this._offsetHours = value;
  }
  public resetOffsetHours() {
    this._offsetHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetHoursInput() {
    return this._offsetHours
  }

  // offset_minutes - computed: false, optional: true, required: false
  private _offsetMinutes?: number | undefined; 
  public get offsetMinutes() {
    return this.getNumberAttribute('offset_minutes');
  }
  public set offsetMinutes(value: number | undefined) {
    this._offsetMinutes = value;
  }
  public resetOffsetMinutes() {
    this._offsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMinutesInput() {
    return this._offsetMinutes
  }

  // offset_months - computed: false, optional: true, required: false
  private _offsetMonths?: number | undefined; 
  public get offsetMonths() {
    return this.getNumberAttribute('offset_months');
  }
  public set offsetMonths(value: number | undefined) {
    this._offsetMonths = value;
  }
  public resetOffsetMonths() {
    this._offsetMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMonthsInput() {
    return this._offsetMonths
  }

  // offset_seconds - computed: false, optional: true, required: false
  private _offsetSeconds?: number | undefined; 
  public get offsetSeconds() {
    return this.getNumberAttribute('offset_seconds');
  }
  public set offsetSeconds(value: number | undefined) {
    this._offsetSeconds = value;
  }
  public resetOffsetSeconds() {
    this._offsetSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetSecondsInput() {
    return this._offsetSeconds
  }

  // offset_years - computed: false, optional: true, required: false
  private _offsetYears?: number | undefined; 
  public get offsetYears() {
    return this.getNumberAttribute('offset_years');
  }
  public set offsetYears(value: number | undefined) {
    this._offsetYears = value;
  }
  public resetOffsetYears() {
    this._offsetYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetYearsInput() {
    return this._offsetYears
  }

  // rfc3339 - computed: true, optional: false, required: false
  public get rfc3339() {
    return this.getStringAttribute('rfc3339');
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
      base_rfc3339: cdktf.stringToTerraform(this._baseRfc3339),
      offset_days: cdktf.numberToTerraform(this._offsetDays),
      offset_hours: cdktf.numberToTerraform(this._offsetHours),
      offset_minutes: cdktf.numberToTerraform(this._offsetMinutes),
      offset_months: cdktf.numberToTerraform(this._offsetMonths),
      offset_seconds: cdktf.numberToTerraform(this._offsetSeconds),
      offset_years: cdktf.numberToTerraform(this._offsetYears),
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
    };
  }
}
