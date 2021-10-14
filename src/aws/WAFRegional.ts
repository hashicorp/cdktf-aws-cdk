// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WAF Regional
*/
export namespace WAFRegional {
  export interface WafregionalByteMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#name WafregionalByteMatchSet#name}
    */
    readonly name: string;
    /**
    * byte_match_tuples block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#byte_match_tuples WafregionalByteMatchSet#byte_match_tuples}
    */
    readonly byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
  }
  export interface WafregionalByteMatchSetByteMatchTuplesFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#data WafregionalByteMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#type WafregionalByteMatchSet#type}
    */
    readonly type: string;
  }

  function wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform(struct?: WafregionalByteMatchSetByteMatchTuplesFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalByteMatchSetByteMatchTuples {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#positional_constraint WafregionalByteMatchSet#positional_constraint}
    */
    readonly positionalConstraint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#target_string WafregionalByteMatchSet#target_string}
    */
    readonly targetString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#text_transformation WafregionalByteMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html#field_to_match WafregionalByteMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalByteMatchSetByteMatchTuplesFieldToMatch[];
  }

  function wafregionalByteMatchSetByteMatchTuplesToTerraform(struct?: WafregionalByteMatchSetByteMatchTuples): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
      target_string: cdktf.stringToTerraform(struct!.targetString),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set}
  */
  export class WafregionalByteMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_byte_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_byte_match_set.html aws_wafregional_byte_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalByteMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalByteMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_byte_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._byteMatchTuples = config.byteMatchTuples;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // byte_match_tuples - computed: false, optional: true, required: false
    private _byteMatchTuples?: WafregionalByteMatchSetByteMatchTuples[];
    public get byteMatchTuples() {
      return this.interpolationForAttribute('byte_match_tuples') as any;
    }
    public set byteMatchTuples(value: WafregionalByteMatchSetByteMatchTuples[] ) {
      this._byteMatchTuples = value;
    }
    public resetByteMatchTuples() {
      this._byteMatchTuples = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get byteMatchTuplesInput() {
      return this._byteMatchTuples
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        byte_match_tuples: cdktf.listMapper(wafregionalByteMatchSetByteMatchTuplesToTerraform)(this._byteMatchTuples),
      };
    }
  }
  export interface WafregionalGeoMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#name WafregionalGeoMatchSet#name}
    */
    readonly name: string;
    /**
    * geo_match_constraint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#geo_match_constraint WafregionalGeoMatchSet#geo_match_constraint}
    */
    readonly geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
  }
  export interface WafregionalGeoMatchSetGeoMatchConstraint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#type WafregionalGeoMatchSet#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html#value WafregionalGeoMatchSet#value}
    */
    readonly value: string;
  }

  function wafregionalGeoMatchSetGeoMatchConstraintToTerraform(struct?: WafregionalGeoMatchSetGeoMatchConstraint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html aws_wafregional_geo_match_set}
  */
  export class WafregionalGeoMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_geo_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_geo_match_set.html aws_wafregional_geo_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalGeoMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalGeoMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_geo_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._geoMatchConstraint = config.geoMatchConstraint;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // geo_match_constraint - computed: false, optional: true, required: false
    private _geoMatchConstraint?: WafregionalGeoMatchSetGeoMatchConstraint[];
    public get geoMatchConstraint() {
      return this.interpolationForAttribute('geo_match_constraint') as any;
    }
    public set geoMatchConstraint(value: WafregionalGeoMatchSetGeoMatchConstraint[] ) {
      this._geoMatchConstraint = value;
    }
    public resetGeoMatchConstraint() {
      this._geoMatchConstraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geoMatchConstraintInput() {
      return this._geoMatchConstraint
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        geo_match_constraint: cdktf.listMapper(wafregionalGeoMatchSetGeoMatchConstraintToTerraform)(this._geoMatchConstraint),
      };
    }
  }
  export interface WafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#name WafregionalIpset#name}
    */
    readonly name: string;
    /**
    * ip_set_descriptor block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#ip_set_descriptor WafregionalIpset#ip_set_descriptor}
    */
    readonly ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
  }
  export interface WafregionalIpsetIpSetDescriptor {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#type WafregionalIpset#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html#value WafregionalIpset#value}
    */
    readonly value: string;
  }

  function wafregionalIpsetIpSetDescriptorToTerraform(struct?: WafregionalIpsetIpSetDescriptor): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset}
  */
  export class WafregionalIpset extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_ipset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_ipset.html aws_wafregional_ipset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalIpsetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalIpsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_ipset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._ipSetDescriptor = config.ipSetDescriptor;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // ip_set_descriptor - computed: false, optional: true, required: false
    private _ipSetDescriptor?: WafregionalIpsetIpSetDescriptor[];
    public get ipSetDescriptor() {
      return this.interpolationForAttribute('ip_set_descriptor') as any;
    }
    public set ipSetDescriptor(value: WafregionalIpsetIpSetDescriptor[] ) {
      this._ipSetDescriptor = value;
    }
    public resetIpSetDescriptor() {
      this._ipSetDescriptor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipSetDescriptorInput() {
      return this._ipSetDescriptor
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        ip_set_descriptor: cdktf.listMapper(wafregionalIpsetIpSetDescriptorToTerraform)(this._ipSetDescriptor),
      };
    }
  }
  export interface WafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#metric_name WafregionalRateBasedRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#name WafregionalRateBasedRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_key WafregionalRateBasedRule#rate_key}
    */
    readonly rateKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#rate_limit WafregionalRateBasedRule#rate_limit}
    */
    readonly rateLimit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags WafregionalRateBasedRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#tags_all WafregionalRateBasedRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * predicate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#predicate WafregionalRateBasedRule#predicate}
    */
    readonly predicate?: WafregionalRateBasedRulePredicate[];
  }
  export interface WafregionalRateBasedRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#data_id WafregionalRateBasedRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#negated WafregionalRateBasedRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html#type WafregionalRateBasedRule#type}
    */
    readonly type: string;
  }

  function wafregionalRateBasedRulePredicateToTerraform(struct?: WafregionalRateBasedRulePredicate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data_id: cdktf.stringToTerraform(struct!.dataId),
      negated: cdktf.booleanToTerraform(struct!.negated),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}
  */
  export class WafregionalRateBasedRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_rate_based_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRateBasedRuleConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalRateBasedRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_rate_based_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._metricName = config.metricName;
      this._name = config.name;
      this._rateKey = config.rateKey;
      this._rateLimit = config.rateLimit;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._predicate = config.predicate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName: string;
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // rate_key - computed: false, optional: false, required: true
    private _rateKey: string;
    public get rateKey() {
      return this.getStringAttribute('rate_key');
    }
    public set rateKey(value: string) {
      this._rateKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rateKeyInput() {
      return this._rateKey
    }

    // rate_limit - computed: false, optional: false, required: true
    private _rateLimit: number;
    public get rateLimit() {
      return this.getNumberAttribute('rate_limit');
    }
    public set rateLimit(value: number) {
      this._rateLimit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitInput() {
      return this._rateLimit
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // predicate - computed: false, optional: true, required: false
    private _predicate?: WafregionalRateBasedRulePredicate[];
    public get predicate() {
      return this.interpolationForAttribute('predicate') as any;
    }
    public set predicate(value: WafregionalRateBasedRulePredicate[] ) {
      this._predicate = value;
    }
    public resetPredicate() {
      this._predicate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predicateInput() {
      return this._predicate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        rate_key: cdktf.stringToTerraform(this._rateKey),
        rate_limit: cdktf.numberToTerraform(this._rateLimit),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        predicate: cdktf.listMapper(wafregionalRateBasedRulePredicateToTerraform)(this._predicate),
      };
    }
  }
  export interface WafregionalRegexMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#name WafregionalRegexMatchSet#name}
    */
    readonly name: string;
    /**
    * regex_match_tuple block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_match_tuple WafregionalRegexMatchSet#regex_match_tuple}
    */
    readonly regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
  }
  export interface WafregionalRegexMatchSetRegexMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#data WafregionalRegexMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#type WafregionalRegexMatchSet#type}
    */
    readonly type: string;
  }

  function wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalRegexMatchSetRegexMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#regex_pattern_set_id WafregionalRegexMatchSet#regex_pattern_set_id}
    */
    readonly regexPatternSetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#text_transformation WafregionalRegexMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html#field_to_match WafregionalRegexMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalRegexMatchSetRegexMatchTupleFieldToMatch[];
  }

  function wafregionalRegexMatchSetRegexMatchTupleToTerraform(struct?: WafregionalRegexMatchSetRegexMatchTuple): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      regex_pattern_set_id: cdktf.stringToTerraform(struct!.regexPatternSetId),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: cdktf.listMapper(wafregionalRegexMatchSetRegexMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set}
  */
  export class WafregionalRegexMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_regex_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_match_set.html aws_wafregional_regex_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalRegexMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_regex_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._regexMatchTuple = config.regexMatchTuple;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // regex_match_tuple - computed: false, optional: true, required: false
    private _regexMatchTuple?: WafregionalRegexMatchSetRegexMatchTuple[];
    public get regexMatchTuple() {
      return this.interpolationForAttribute('regex_match_tuple') as any;
    }
    public set regexMatchTuple(value: WafregionalRegexMatchSetRegexMatchTuple[] ) {
      this._regexMatchTuple = value;
    }
    public resetRegexMatchTuple() {
      this._regexMatchTuple = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexMatchTupleInput() {
      return this._regexMatchTuple
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        regex_match_tuple: cdktf.listMapper(wafregionalRegexMatchSetRegexMatchTupleToTerraform)(this._regexMatchTuple),
      };
    }
  }
  export interface WafregionalRegexPatternSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html#name WafregionalRegexPatternSet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html#regex_pattern_strings WafregionalRegexPatternSet#regex_pattern_strings}
    */
    readonly regexPatternStrings?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html aws_wafregional_regex_pattern_set}
  */
  export class WafregionalRegexPatternSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_regex_pattern_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_regex_pattern_set.html aws_wafregional_regex_pattern_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRegexPatternSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalRegexPatternSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_regex_pattern_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
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
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // regex_pattern_strings - computed: false, optional: true, required: false
    private _regexPatternStrings?: string[];
    public get regexPatternStrings() {
      return this.getListAttribute('regex_pattern_strings');
    }
    public set regexPatternStrings(value: string[] ) {
      this._regexPatternStrings = value;
    }
    public resetRegexPatternStrings() {
      this._regexPatternStrings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regexPatternStringsInput() {
      return this._regexPatternStrings
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
  export interface WafregionalRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#metric_name WafregionalRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#name WafregionalRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#tags WafregionalRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#tags_all WafregionalRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * predicate block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#predicate WafregionalRule#predicate}
    */
    readonly predicate?: WafregionalRulePredicate[];
  }
  export interface WafregionalRulePredicate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#data_id WafregionalRule#data_id}
    */
    readonly dataId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#negated WafregionalRule#negated}
    */
    readonly negated: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html#type WafregionalRule#type}
    */
    readonly type: string;
  }

  function wafregionalRulePredicateToTerraform(struct?: WafregionalRulePredicate): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data_id: cdktf.stringToTerraform(struct!.dataId),
      negated: cdktf.booleanToTerraform(struct!.negated),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule}
  */
  export class WafregionalRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule.html aws_wafregional_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._metricName = config.metricName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._predicate = config.predicate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName: string;
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // predicate - computed: false, optional: true, required: false
    private _predicate?: WafregionalRulePredicate[];
    public get predicate() {
      return this.interpolationForAttribute('predicate') as any;
    }
    public set predicate(value: WafregionalRulePredicate[] ) {
      this._predicate = value;
    }
    public resetPredicate() {
      this._predicate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get predicateInput() {
      return this._predicate
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        predicate: cdktf.listMapper(wafregionalRulePredicateToTerraform)(this._predicate),
      };
    }
  }
  export interface WafregionalRuleGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#metric_name WafregionalRuleGroup#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#name WafregionalRuleGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags WafregionalRuleGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#tags_all WafregionalRuleGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * activated_rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#activated_rule WafregionalRuleGroup#activated_rule}
    */
    readonly activatedRule?: WafregionalRuleGroupActivatedRule[];
  }
  export interface WafregionalRuleGroupActivatedRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}
    */
    readonly type: string;
  }

  function wafregionalRuleGroupActivatedRuleActionToTerraform(struct?: WafregionalRuleGroupActivatedRuleAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalRuleGroupActivatedRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#priority WafregionalRuleGroup#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#rule_id WafregionalRuleGroup#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#type WafregionalRuleGroup#type}
    */
    readonly type?: string;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html#action WafregionalRuleGroup#action}
    */
    readonly action: WafregionalRuleGroupActivatedRuleAction[];
  }

  function wafregionalRuleGroupActivatedRuleToTerraform(struct?: WafregionalRuleGroupActivatedRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_id: cdktf.stringToTerraform(struct!.ruleId),
      type: cdktf.stringToTerraform(struct!.type),
      action: cdktf.listMapper(wafregionalRuleGroupActivatedRuleActionToTerraform)(struct!.action),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group}
  */
  export class WafregionalRuleGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_rule_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_rule_group.html aws_wafregional_rule_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalRuleGroupConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalRuleGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_rule_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._metricName = config.metricName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._activatedRule = config.activatedRule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName: string;
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // activated_rule - computed: false, optional: true, required: false
    private _activatedRule?: WafregionalRuleGroupActivatedRule[];
    public get activatedRule() {
      return this.interpolationForAttribute('activated_rule') as any;
    }
    public set activatedRule(value: WafregionalRuleGroupActivatedRule[] ) {
      this._activatedRule = value;
    }
    public resetActivatedRule() {
      this._activatedRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activatedRuleInput() {
      return this._activatedRule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        activated_rule: cdktf.listMapper(wafregionalRuleGroupActivatedRuleToTerraform)(this._activatedRule),
      };
    }
  }
  export interface WafregionalSizeConstraintSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#name WafregionalSizeConstraintSet#name}
    */
    readonly name: string;
    /**
    * size_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size_constraints WafregionalSizeConstraintSet#size_constraints}
    */
    readonly sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
  }
  export interface WafregionalSizeConstraintSetSizeConstraintsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#data WafregionalSizeConstraintSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#type WafregionalSizeConstraintSet#type}
    */
    readonly type: string;
  }

  function wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalSizeConstraintSetSizeConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#comparison_operator WafregionalSizeConstraintSet#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#size WafregionalSizeConstraintSet#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#text_transformation WafregionalSizeConstraintSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html#field_to_match WafregionalSizeConstraintSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalSizeConstraintSetSizeConstraintsFieldToMatch[];
  }

  function wafregionalSizeConstraintSetSizeConstraintsToTerraform(struct?: WafregionalSizeConstraintSetSizeConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
      size: cdktf.numberToTerraform(struct!.size),
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set}
  */
  export class WafregionalSizeConstraintSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_size_constraint_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_size_constraint_set.html aws_wafregional_size_constraint_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalSizeConstraintSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalSizeConstraintSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_size_constraint_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._sizeConstraints = config.sizeConstraints;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // size_constraints - computed: false, optional: true, required: false
    private _sizeConstraints?: WafregionalSizeConstraintSetSizeConstraints[];
    public get sizeConstraints() {
      return this.interpolationForAttribute('size_constraints') as any;
    }
    public set sizeConstraints(value: WafregionalSizeConstraintSetSizeConstraints[] ) {
      this._sizeConstraints = value;
    }
    public resetSizeConstraints() {
      this._sizeConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeConstraintsInput() {
      return this._sizeConstraints
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        size_constraints: cdktf.listMapper(wafregionalSizeConstraintSetSizeConstraintsToTerraform)(this._sizeConstraints),
      };
    }
  }
  export interface WafregionalSqlInjectionMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#name WafregionalSqlInjectionMatchSet#name}
    */
    readonly name: string;
    /**
    * sql_injection_match_tuple block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#sql_injection_match_tuple WafregionalSqlInjectionMatchSet#sql_injection_match_tuple}
    */
    readonly sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
  }
  export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#data WafregionalSqlInjectionMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#type WafregionalSqlInjectionMatchSet#type}
    */
    readonly type: string;
  }

  function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#text_transformation WafregionalSqlInjectionMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html#field_to_match WafregionalSqlInjectionMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatch[];
  }

  function wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform(struct?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set}
  */
  export class WafregionalSqlInjectionMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_sql_injection_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html aws_wafregional_sql_injection_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalSqlInjectionMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalSqlInjectionMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_sql_injection_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._sqlInjectionMatchTuple = config.sqlInjectionMatchTuple;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // sql_injection_match_tuple - computed: false, optional: true, required: false
    private _sqlInjectionMatchTuple?: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[];
    public get sqlInjectionMatchTuple() {
      return this.interpolationForAttribute('sql_injection_match_tuple') as any;
    }
    public set sqlInjectionMatchTuple(value: WafregionalSqlInjectionMatchSetSqlInjectionMatchTuple[] ) {
      this._sqlInjectionMatchTuple = value;
    }
    public resetSqlInjectionMatchTuple() {
      this._sqlInjectionMatchTuple = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInjectionMatchTupleInput() {
      return this._sqlInjectionMatchTuple
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        sql_injection_match_tuple: cdktf.listMapper(wafregionalSqlInjectionMatchSetSqlInjectionMatchTupleToTerraform)(this._sqlInjectionMatchTuple),
      };
    }
  }
  export interface WafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#metric_name WafregionalWebAcl#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#name WafregionalWebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags WafregionalWebAcl#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#tags_all WafregionalWebAcl#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * default_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#default_action WafregionalWebAcl#default_action}
    */
    readonly defaultAction: WafregionalWebAclDefaultAction[];
    /**
    * logging_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#logging_configuration WafregionalWebAcl#logging_configuration}
    */
    readonly loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
    /**
    * rule block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule WafregionalWebAcl#rule}
    */
    readonly rule?: WafregionalWebAclRule[];
  }
  export interface WafregionalWebAclDefaultAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
  }

  function wafregionalWebAclDefaultActionToTerraform(struct?: WafregionalWebAclDefaultAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#data WafregionalWebAcl#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
  }

  function wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalWebAclLoggingConfigurationRedactedFields {
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#field_to_match WafregionalWebAcl#field_to_match}
    */
    readonly fieldToMatch: WafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatch[];
  }

  function wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform(struct?: WafregionalWebAclLoggingConfigurationRedactedFields): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      field_to_match: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }

  export interface WafregionalWebAclLoggingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#log_destination WafregionalWebAcl#log_destination}
    */
    readonly logDestination: string;
    /**
    * redacted_fields block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#redacted_fields WafregionalWebAcl#redacted_fields}
    */
    readonly redactedFields?: WafregionalWebAclLoggingConfigurationRedactedFields[];
  }

  function wafregionalWebAclLoggingConfigurationToTerraform(struct?: WafregionalWebAclLoggingConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      log_destination: cdktf.stringToTerraform(struct!.logDestination),
      redacted_fields: cdktf.listMapper(wafregionalWebAclLoggingConfigurationRedactedFieldsToTerraform)(struct!.redactedFields),
    }
  }

  export interface WafregionalWebAclRuleAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
  }

  function wafregionalWebAclRuleActionToTerraform(struct?: WafregionalWebAclRuleAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalWebAclRuleOverrideAction {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type: string;
  }

  function wafregionalWebAclRuleOverrideActionToTerraform(struct?: WafregionalWebAclRuleOverrideAction): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalWebAclRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#priority WafregionalWebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#rule_id WafregionalWebAcl#rule_id}
    */
    readonly ruleId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#type WafregionalWebAcl#type}
    */
    readonly type?: string;
    /**
    * action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#action WafregionalWebAcl#action}
    */
    readonly action?: WafregionalWebAclRuleAction[];
    /**
    * override_action block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html#override_action WafregionalWebAcl#override_action}
    */
    readonly overrideAction?: WafregionalWebAclRuleOverrideAction[];
  }

  function wafregionalWebAclRuleToTerraform(struct?: WafregionalWebAclRule): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      priority: cdktf.numberToTerraform(struct!.priority),
      rule_id: cdktf.stringToTerraform(struct!.ruleId),
      type: cdktf.stringToTerraform(struct!.type),
      action: cdktf.listMapper(wafregionalWebAclRuleActionToTerraform)(struct!.action),
      override_action: cdktf.listMapper(wafregionalWebAclRuleOverrideActionToTerraform)(struct!.overrideAction),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl}
  */
  export class WafregionalWebAcl extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_web_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl.html aws_wafregional_web_acl} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalWebAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_web_acl',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._metricName = config.metricName;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._defaultAction = config.defaultAction;
      this._loggingConfiguration = config.loggingConfiguration;
      this._rule = config.rule;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName: string;
    public get metricName() {
      return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
      this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
      return this._metricName
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // default_action - computed: false, optional: false, required: true
    private _defaultAction: WafregionalWebAclDefaultAction[];
    public get defaultAction() {
      return this.interpolationForAttribute('default_action') as any;
    }
    public set defaultAction(value: WafregionalWebAclDefaultAction[]) {
      this._defaultAction = value;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultActionInput() {
      return this._defaultAction
    }

    // logging_configuration - computed: false, optional: true, required: false
    private _loggingConfiguration?: WafregionalWebAclLoggingConfiguration[];
    public get loggingConfiguration() {
      return this.interpolationForAttribute('logging_configuration') as any;
    }
    public set loggingConfiguration(value: WafregionalWebAclLoggingConfiguration[] ) {
      this._loggingConfiguration = value;
    }
    public resetLoggingConfiguration() {
      this._loggingConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
      return this._loggingConfiguration
    }

    // rule - computed: false, optional: true, required: false
    private _rule?: WafregionalWebAclRule[];
    public get rule() {
      return this.interpolationForAttribute('rule') as any;
    }
    public set rule(value: WafregionalWebAclRule[] ) {
      this._rule = value;
    }
    public resetRule() {
      this._rule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        metric_name: cdktf.stringToTerraform(this._metricName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        default_action: cdktf.listMapper(wafregionalWebAclDefaultActionToTerraform)(this._defaultAction),
        logging_configuration: cdktf.listMapper(wafregionalWebAclLoggingConfigurationToTerraform)(this._loggingConfiguration),
        rule: cdktf.listMapper(wafregionalWebAclRuleToTerraform)(this._rule),
      };
    }
  }
  export interface WafregionalWebAclAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html#resource_arn WafregionalWebAclAssociation#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html#web_acl_id WafregionalWebAclAssociation#web_acl_id}
    */
    readonly webAclId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html aws_wafregional_web_acl_association}
  */
  export class WafregionalWebAclAssociation extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_web_acl_association";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_web_acl_association.html aws_wafregional_web_acl_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalWebAclAssociationConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalWebAclAssociationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_web_acl_association',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._resourceArn = config.resourceArn;
      this._webAclId = config.webAclId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn: string;
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // web_acl_id - computed: false, optional: false, required: true
    private _webAclId: string;
    public get webAclId() {
      return this.getStringAttribute('web_acl_id');
    }
    public set webAclId(value: string) {
      this._webAclId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get webAclIdInput() {
      return this._webAclId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        web_acl_id: cdktf.stringToTerraform(this._webAclId),
      };
    }
  }
  export interface WafregionalXssMatchSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#name WafregionalXssMatchSet#name}
    */
    readonly name: string;
    /**
    * xss_match_tuple block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#xss_match_tuple WafregionalXssMatchSet#xss_match_tuple}
    */
    readonly xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
  }
  export interface WafregionalXssMatchSetXssMatchTupleFieldToMatch {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#data WafregionalXssMatchSet#data}
    */
    readonly data?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#type WafregionalXssMatchSet#type}
    */
    readonly type: string;
  }

  function wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform(struct?: WafregionalXssMatchSetXssMatchTupleFieldToMatch): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      data: cdktf.stringToTerraform(struct!.data),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface WafregionalXssMatchSetXssMatchTuple {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#text_transformation WafregionalXssMatchSet#text_transformation}
    */
    readonly textTransformation: string;
    /**
    * field_to_match block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html#field_to_match WafregionalXssMatchSet#field_to_match}
    */
    readonly fieldToMatch: WafregionalXssMatchSetXssMatchTupleFieldToMatch[];
  }

  function wafregionalXssMatchSetXssMatchTupleToTerraform(struct?: WafregionalXssMatchSetXssMatchTuple): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      text_transformation: cdktf.stringToTerraform(struct!.textTransformation),
      field_to_match: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleFieldToMatchToTerraform)(struct!.fieldToMatch),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set}
  */
  export class WafregionalXssMatchSet extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_xss_match_set";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafregional_xss_match_set.html aws_wafregional_xss_match_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options WafregionalXssMatchSetConfig
    */
    public constructor(scope: Construct, id: string, config: WafregionalXssMatchSetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_xss_match_set',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._xssMatchTuple = config.xssMatchTuple;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // xss_match_tuple - computed: false, optional: true, required: false
    private _xssMatchTuple?: WafregionalXssMatchSetXssMatchTuple[];
    public get xssMatchTuple() {
      return this.interpolationForAttribute('xss_match_tuple') as any;
    }
    public set xssMatchTuple(value: WafregionalXssMatchSetXssMatchTuple[] ) {
      this._xssMatchTuple = value;
    }
    public resetXssMatchTuple() {
      this._xssMatchTuple = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xssMatchTupleInput() {
      return this._xssMatchTuple
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        xss_match_tuple: cdktf.listMapper(wafregionalXssMatchSetXssMatchTupleToTerraform)(this._xssMatchTuple),
      };
    }
  }
  export interface DataAwsWafregionalIpsetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html#name DataAwsWafregionalIpset#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html aws_wafregional_ipset}
  */
  export class DataAwsWafregionalIpset extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_ipset";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_ipset.html aws_wafregional_ipset} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafregionalIpsetConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafregionalIpsetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_ipset',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafregionalRateBasedRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html#name DataAwsWafregionalRateBasedRule#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule}
  */
  export class DataAwsWafregionalRateBasedRule extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_rate_based_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rate_based_rule.html aws_wafregional_rate_based_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafregionalRateBasedRuleConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafregionalRateBasedRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_rate_based_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafregionalRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rule.html#name DataAwsWafregionalRule#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rule.html aws_wafregional_rule}
  */
  export class DataAwsWafregionalRule extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_rule.html aws_wafregional_rule} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafregionalRuleConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafregionalRuleConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsWafregionalWebAclConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html#name DataAwsWafregionalWebAcl#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html aws_wafregional_web_acl}
  */
  export class DataAwsWafregionalWebAcl extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_wafregional_web_acl";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/wafregional_web_acl.html aws_wafregional_web_acl} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsWafregionalWebAclConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsWafregionalWebAclConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_wafregional_web_acl',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string) {
      this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
}
