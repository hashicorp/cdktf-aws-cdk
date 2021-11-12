// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#name GlueClassifier#name}
  */
  readonly name: string;
  /**
  * csv_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#csv_classifier GlueClassifier#csv_classifier}
  */
  readonly csvClassifier?: GlueClassifierCsvClassifier;
  /**
  * grok_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_classifier GlueClassifier#grok_classifier}
  */
  readonly grokClassifier?: GlueClassifierGrokClassifier;
  /**
  * json_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_classifier GlueClassifier#json_classifier}
  */
  readonly jsonClassifier?: GlueClassifierJsonClassifier;
  /**
  * xml_classifier block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#xml_classifier GlueClassifier#xml_classifier}
  */
  readonly xmlClassifier?: GlueClassifierXmlClassifier;
}
export interface GlueClassifierCsvClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#allow_single_column GlueClassifier#allow_single_column}
  */
  readonly allowSingleColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#contains_header GlueClassifier#contains_header}
  */
  readonly containsHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#delimiter GlueClassifier#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#disable_value_trimming GlueClassifier#disable_value_trimming}
  */
  readonly disableValueTrimming?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#header GlueClassifier#header}
  */
  readonly header?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#quote_symbol GlueClassifier#quote_symbol}
  */
  readonly quoteSymbol?: string;
}

export function glueClassifierCsvClassifierToTerraform(struct?: GlueClassifierCsvClassifierOutputReference | GlueClassifierCsvClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_single_column: cdktf.booleanToTerraform(struct!.allowSingleColumn),
    contains_header: cdktf.stringToTerraform(struct!.containsHeader),
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    disable_value_trimming: cdktf.booleanToTerraform(struct!.disableValueTrimming),
    header: cdktf.listMapper(cdktf.stringToTerraform)(struct!.header),
    quote_symbol: cdktf.stringToTerraform(struct!.quoteSymbol),
  }
}

export class GlueClassifierCsvClassifierOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_single_column - computed: false, optional: true, required: false
  private _allowSingleColumn?: boolean | cdktf.IResolvable | undefined; 
  public get allowSingleColumn() {
    return this.getBooleanAttribute('allow_single_column') as any;
  }
  public set allowSingleColumn(value: boolean | cdktf.IResolvable | undefined) {
    this._allowSingleColumn = value;
  }
  public resetAllowSingleColumn() {
    this._allowSingleColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSingleColumnInput() {
    return this._allowSingleColumn
  }

  // contains_header - computed: false, optional: true, required: false
  private _containsHeader?: string | undefined; 
  public get containsHeader() {
    return this.getStringAttribute('contains_header');
  }
  public set containsHeader(value: string | undefined) {
    this._containsHeader = value;
  }
  public resetContainsHeader() {
    this._containsHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsHeaderInput() {
    return this._containsHeader
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string | undefined; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string | undefined) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter
  }

  // disable_value_trimming - computed: false, optional: true, required: false
  private _disableValueTrimming?: boolean | cdktf.IResolvable | undefined; 
  public get disableValueTrimming() {
    return this.getBooleanAttribute('disable_value_trimming') as any;
  }
  public set disableValueTrimming(value: boolean | cdktf.IResolvable | undefined) {
    this._disableValueTrimming = value;
  }
  public resetDisableValueTrimming() {
    this._disableValueTrimming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableValueTrimmingInput() {
    return this._disableValueTrimming
  }

  // header - computed: false, optional: true, required: false
  private _header?: string[] | undefined; 
  public get header() {
    return this.getListAttribute('header');
  }
  public set header(value: string[] | undefined) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header
  }

  // quote_symbol - computed: false, optional: true, required: false
  private _quoteSymbol?: string | undefined; 
  public get quoteSymbol() {
    return this.getStringAttribute('quote_symbol');
  }
  public set quoteSymbol(value: string | undefined) {
    this._quoteSymbol = value;
  }
  public resetQuoteSymbol() {
    this._quoteSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteSymbolInput() {
    return this._quoteSymbol
  }
}
export interface GlueClassifierGrokClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#custom_patterns GlueClassifier#custom_patterns}
  */
  readonly customPatterns?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#grok_pattern GlueClassifier#grok_pattern}
  */
  readonly grokPattern: string;
}

export function glueClassifierGrokClassifierToTerraform(struct?: GlueClassifierGrokClassifierOutputReference | GlueClassifierGrokClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    custom_patterns: cdktf.stringToTerraform(struct!.customPatterns),
    grok_pattern: cdktf.stringToTerraform(struct!.grokPattern),
  }
}

export class GlueClassifierGrokClassifierOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification
  }

  // custom_patterns - computed: false, optional: true, required: false
  private _customPatterns?: string | undefined; 
  public get customPatterns() {
    return this.getStringAttribute('custom_patterns');
  }
  public set customPatterns(value: string | undefined) {
    this._customPatterns = value;
  }
  public resetCustomPatterns() {
    this._customPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternsInput() {
    return this._customPatterns
  }

  // grok_pattern - computed: false, optional: false, required: true
  private _grokPattern?: string; 
  public get grokPattern() {
    return this.getStringAttribute('grok_pattern');
  }
  public set grokPattern(value: string) {
    this._grokPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grokPatternInput() {
    return this._grokPattern
  }
}
export interface GlueClassifierJsonClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#json_path GlueClassifier#json_path}
  */
  readonly jsonPath: string;
}

export function glueClassifierJsonClassifierToTerraform(struct?: GlueClassifierJsonClassifierOutputReference | GlueClassifierJsonClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
  }
}

export class GlueClassifierJsonClassifierOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // json_path - computed: false, optional: false, required: true
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath
  }
}
export interface GlueClassifierXmlClassifier {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#classification GlueClassifier#classification}
  */
  readonly classification: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html#row_tag GlueClassifier#row_tag}
  */
  readonly rowTag: string;
}

export function glueClassifierXmlClassifierToTerraform(struct?: GlueClassifierXmlClassifierOutputReference | GlueClassifierXmlClassifier): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification: cdktf.stringToTerraform(struct!.classification),
    row_tag: cdktf.stringToTerraform(struct!.rowTag),
  }
}

export class GlueClassifierXmlClassifierOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // classification - computed: false, optional: false, required: true
  private _classification?: string; 
  public get classification() {
    return this.getStringAttribute('classification');
  }
  public set classification(value: string) {
    this._classification = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationInput() {
    return this._classification
  }

  // row_tag - computed: false, optional: false, required: true
  private _rowTag?: string; 
  public get rowTag() {
    return this.getStringAttribute('row_tag');
  }
  public set rowTag(value: string) {
    this._rowTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rowTagInput() {
    return this._rowTag
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier}
*/
export class GlueClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_classifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_classifier.html aws_glue_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: GlueClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_classifier',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._csvClassifier = config.csvClassifier;
    this._grokClassifier = config.grokClassifier;
    this._jsonClassifier = config.jsonClassifier;
    this._xmlClassifier = config.xmlClassifier;
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
    return this._name
  }

  // csv_classifier - computed: false, optional: true, required: false
  private _csvClassifier?: GlueClassifierCsvClassifier | undefined; 
  private __csvClassifierOutput = new GlueClassifierCsvClassifierOutputReference(this as any, "csv_classifier", true);
  public get csvClassifier() {
    return this.__csvClassifierOutput;
  }
  public putCsvClassifier(value: GlueClassifierCsvClassifier | undefined) {
    this._csvClassifier = value;
  }
  public resetCsvClassifier() {
    this._csvClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvClassifierInput() {
    return this._csvClassifier
  }

  // grok_classifier - computed: false, optional: true, required: false
  private _grokClassifier?: GlueClassifierGrokClassifier | undefined; 
  private __grokClassifierOutput = new GlueClassifierGrokClassifierOutputReference(this as any, "grok_classifier", true);
  public get grokClassifier() {
    return this.__grokClassifierOutput;
  }
  public putGrokClassifier(value: GlueClassifierGrokClassifier | undefined) {
    this._grokClassifier = value;
  }
  public resetGrokClassifier() {
    this._grokClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokClassifierInput() {
    return this._grokClassifier
  }

  // json_classifier - computed: false, optional: true, required: false
  private _jsonClassifier?: GlueClassifierJsonClassifier | undefined; 
  private __jsonClassifierOutput = new GlueClassifierJsonClassifierOutputReference(this as any, "json_classifier", true);
  public get jsonClassifier() {
    return this.__jsonClassifierOutput;
  }
  public putJsonClassifier(value: GlueClassifierJsonClassifier | undefined) {
    this._jsonClassifier = value;
  }
  public resetJsonClassifier() {
    this._jsonClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonClassifierInput() {
    return this._jsonClassifier
  }

  // xml_classifier - computed: false, optional: true, required: false
  private _xmlClassifier?: GlueClassifierXmlClassifier | undefined; 
  private __xmlClassifierOutput = new GlueClassifierXmlClassifierOutputReference(this as any, "xml_classifier", true);
  public get xmlClassifier() {
    return this.__xmlClassifierOutput;
  }
  public putXmlClassifier(value: GlueClassifierXmlClassifier | undefined) {
    this._xmlClassifier = value;
  }
  public resetXmlClassifier() {
    this._xmlClassifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlClassifierInput() {
    return this._xmlClassifier
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      csv_classifier: glueClassifierCsvClassifierToTerraform(this._csvClassifier),
      grok_classifier: glueClassifierGrokClassifierToTerraform(this._grokClassifier),
      json_classifier: glueClassifierJsonClassifierToTerraform(this._jsonClassifier),
      xml_classifier: glueClassifierXmlClassifierToTerraform(this._xmlClassifier),
    };
  }
}
