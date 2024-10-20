/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OffsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#base_rfc3339 Offset#base_rfc3339}
  */
  readonly baseRfc3339?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#id Offset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_days Offset#offset_days}
  */
  readonly offsetDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_hours Offset#offset_hours}
  */
  readonly offsetHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_minutes Offset#offset_minutes}
  */
  readonly offsetMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_months Offset#offset_months}
  */
  readonly offsetMonths?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_seconds Offset#offset_seconds}
  */
  readonly offsetSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#offset_years Offset#offset_years}
  */
  readonly offsetYears?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#triggers Offset#triggers}
  */
  readonly triggers?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset time_offset}
*/
export class Offset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "time_offset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Offset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Offset to import
  * @param importFromId The id of the existing Offset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Offset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "time_offset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/time/0.7.2/docs/resources/offset time_offset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OffsetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OffsetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'time_offset',
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
    this._baseRfc3339 = config.baseRfc3339;
    this._id = config.id;
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
  private _baseRfc3339?: string; 
  public get baseRfc3339() {
    return this.getStringAttribute('base_rfc3339');
  }
  public set baseRfc3339(value: string) {
    this._baseRfc3339 = value;
  }
  public resetBaseRfc3339() {
    this._baseRfc3339 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseRfc3339Input() {
    return this._baseRfc3339;
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

  // offset_days - computed: false, optional: true, required: false
  private _offsetDays?: number; 
  public get offsetDays() {
    return this.getNumberAttribute('offset_days');
  }
  public set offsetDays(value: number) {
    this._offsetDays = value;
  }
  public resetOffsetDays() {
    this._offsetDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetDaysInput() {
    return this._offsetDays;
  }

  // offset_hours - computed: false, optional: true, required: false
  private _offsetHours?: number; 
  public get offsetHours() {
    return this.getNumberAttribute('offset_hours');
  }
  public set offsetHours(value: number) {
    this._offsetHours = value;
  }
  public resetOffsetHours() {
    this._offsetHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetHoursInput() {
    return this._offsetHours;
  }

  // offset_minutes - computed: false, optional: true, required: false
  private _offsetMinutes?: number; 
  public get offsetMinutes() {
    return this.getNumberAttribute('offset_minutes');
  }
  public set offsetMinutes(value: number) {
    this._offsetMinutes = value;
  }
  public resetOffsetMinutes() {
    this._offsetMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMinutesInput() {
    return this._offsetMinutes;
  }

  // offset_months - computed: false, optional: true, required: false
  private _offsetMonths?: number; 
  public get offsetMonths() {
    return this.getNumberAttribute('offset_months');
  }
  public set offsetMonths(value: number) {
    this._offsetMonths = value;
  }
  public resetOffsetMonths() {
    this._offsetMonths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetMonthsInput() {
    return this._offsetMonths;
  }

  // offset_seconds - computed: false, optional: true, required: false
  private _offsetSeconds?: number; 
  public get offsetSeconds() {
    return this.getNumberAttribute('offset_seconds');
  }
  public set offsetSeconds(value: number) {
    this._offsetSeconds = value;
  }
  public resetOffsetSeconds() {
    this._offsetSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetSecondsInput() {
    return this._offsetSeconds;
  }

  // offset_years - computed: false, optional: true, required: false
  private _offsetYears?: number; 
  public get offsetYears() {
    return this.getNumberAttribute('offset_years');
  }
  public set offsetYears(value: number) {
    this._offsetYears = value;
  }
  public resetOffsetYears() {
    this._offsetYears = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetYearsInput() {
    return this._offsetYears;
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
      base_rfc3339: cdktf.stringToTerraform(this._baseRfc3339),
      id: cdktf.stringToTerraform(this._id),
      offset_days: cdktf.numberToTerraform(this._offsetDays),
      offset_hours: cdktf.numberToTerraform(this._offsetHours),
      offset_minutes: cdktf.numberToTerraform(this._offsetMinutes),
      offset_months: cdktf.numberToTerraform(this._offsetMonths),
      offset_seconds: cdktf.numberToTerraform(this._offsetSeconds),
      offset_years: cdktf.numberToTerraform(this._offsetYears),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_rfc3339: {
        value: cdktf.stringToHclTerraform(this._baseRfc3339),
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
      offset_days: {
        value: cdktf.numberToHclTerraform(this._offsetDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset_hours: {
        value: cdktf.numberToHclTerraform(this._offsetHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset_minutes: {
        value: cdktf.numberToHclTerraform(this._offsetMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset_months: {
        value: cdktf.numberToHclTerraform(this._offsetMonths),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset_seconds: {
        value: cdktf.numberToHclTerraform(this._offsetSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset_years: {
        value: cdktf.numberToHclTerraform(this._offsetYears),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
