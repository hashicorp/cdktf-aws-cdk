// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Data Pipeline
*/
export interface DataAwsDatapipelinePipelineDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition.html#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * parameter_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition.html#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}
  */
  readonly parameterValue?: DataAwsDatapipelinePipelineDefinitionParameterValue[];
}
export class DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export class DataAwsDatapipelinePipelineDefinitionParameterObject extends cdktf.ComplexComputedList {

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attribute') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}
export class DataAwsDatapipelinePipelineDefinitionPipelineObjectField extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // ref_value - computed: true, optional: false, required: false
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}
export class DataAwsDatapipelinePipelineDefinitionPipelineObject extends cdktf.ComplexComputedList {

  // field - computed: true, optional: false, required: false
  public get field() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field') as any;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface DataAwsDatapipelinePipelineDefinitionParameterValue {
}

export function dataAwsDatapipelinePipelineDefinitionParameterValueToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition.html aws_datapipeline_pipeline_definition}
*/
export class DataAwsDatapipelinePipelineDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datapipeline_pipeline_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/datapipeline_pipeline_definition.html aws_datapipeline_pipeline_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsDatapipelinePipelineDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsDatapipelinePipelineDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datapipeline_pipeline_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._pipelineId = config.pipelineId;
    this._parameterValue = config.parameterValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parameter_object - computed: true, optional: false, required: false
  public parameterObject(index: string) {
    return new DataAwsDatapipelinePipelineDefinitionParameterObject(this, 'parameter_object', index);
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // pipeline_object - computed: true, optional: false, required: false
  public pipelineObject(index: string) {
    return new DataAwsDatapipelinePipelineDefinitionPipelineObject(this, 'pipeline_object', index);
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: DataAwsDatapipelinePipelineDefinitionParameterValue[]; 
  public get parameterValue() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('parameter_value') as any;
  }
  public set parameterValue(value: DataAwsDatapipelinePipelineDefinitionParameterValue[]) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      parameter_value: cdktf.listMapper(dataAwsDatapipelinePipelineDefinitionParameterValueToTerraform)(this._parameterValue),
    };
  }
}
