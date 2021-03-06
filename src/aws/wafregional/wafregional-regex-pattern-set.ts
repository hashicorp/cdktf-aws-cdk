// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF Regional
*/
export interface WafregionalRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set#name WafregionalRegexPatternSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set#regex_pattern_strings WafregionalRegexPatternSet#regex_pattern_strings}
  */
  readonly regexPatternStrings?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set aws_wafregional_regex_pattern_set}
*/
export class WafregionalRegexPatternSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_wafregional_regex_pattern_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set aws_wafregional_regex_pattern_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafregionalRegexPatternSetConfig
  */
  public constructor(scope: Construct, id: string, config: WafregionalRegexPatternSetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafregional_regex_pattern_set',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.75.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._regexPatternStrings = config.regexPatternStrings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // regex_pattern_strings - computed: false, optional: true, required: false
  private _regexPatternStrings?: string[]; 
  public get regexPatternStrings() {
    return cdktf.Fn.tolist(this.getListAttribute('regex_pattern_strings'));
  }
  public set regexPatternStrings(value: string[]) {
    this._regexPatternStrings = value;
  }
  public resetRegexPatternStrings() {
    this._regexPatternStrings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternStringsInput() {
    return this._regexPatternStrings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      regex_pattern_strings: cdktf.listMapper(cdktf.stringToTerraform)(this._regexPatternStrings),
    };
  }
}
