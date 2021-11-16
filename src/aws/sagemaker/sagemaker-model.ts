// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SageMaker
*/
export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#enable_network_isolation SagemakerModel#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#execution_role_arn SagemakerModel#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#name SagemakerModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags SagemakerModel#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#tags_all SagemakerModel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container SagemakerModel#container}
  */
  readonly container?: SagemakerModelContainer[];
  /**
  * inference_execution_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#inference_execution_config SagemakerModel#inference_execution_config}
  */
  readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig;
  /**
  * primary_container block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#primary_container SagemakerModel#primary_container}
  */
  readonly primaryContainer?: SagemakerModelPrimaryContainer;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#vpc_config SagemakerModel#vpc_config}
  */
  readonly vpcConfig?: SagemakerModelVpcConfig;
}
export interface SagemakerModelContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
}

export function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
  }
}

export class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode
  }
}
export interface SagemakerModelContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelContainerImageConfig;
}

export function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    image_config: sagemakerModelContainerImageConfigToTerraform(struct!.imageConfig),
  }
}

export interface SagemakerModelInferenceExecutionConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode: string;
}

export function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }
}
export interface SagemakerModelPrimaryContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
}

export function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
  }
}

export class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode
  }
}
export interface SagemakerModelPrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image SagemakerModel#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig;
}

export function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    image_config: sagemakerModelPrimaryContainerImageConfigToTerraform(struct!.imageConfig),
  }
}

export class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string | undefined; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string | undefined) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get environment() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string | undefined; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string | undefined) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig?: SagemakerModelPrimaryContainerImageConfig | undefined; 
  private __imageConfigOutput = new SagemakerModelPrimaryContainerImageConfigOutputReference(this as any, "image_config", true);
  public get imageConfig() {
    return this.__imageConfigOutput;
  }
  public putImageConfig(value: SagemakerModelPrimaryContainerImageConfig | undefined) {
    this._imageConfig = value;
  }
  public resetImageConfig() {
    this._imageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig
  }
}
export interface SagemakerModelVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#security_group_ids SagemakerModel#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html#subnets SagemakerModel#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
  }
}

export class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model}
*/
export class SagemakerModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_model";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html aws_sagemaker_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._container = config.container;
    this._inferenceExecutionConfig = config.inferenceExecutionConfig;
    this._primaryContainer = config.primaryContainer;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable | undefined; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation') as any;
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable | undefined) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // container - computed: false, optional: true, required: false
  private _container?: SagemakerModelContainer[] | undefined; 
  public get container() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container') as any;
  }
  public set container(value: SagemakerModelContainer[] | undefined) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container
  }

  // inference_execution_config - computed: false, optional: true, required: false
  private _inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig | undefined; 
  private __inferenceExecutionConfigOutput = new SagemakerModelInferenceExecutionConfigOutputReference(this as any, "inference_execution_config", true);
  public get inferenceExecutionConfig() {
    return this.__inferenceExecutionConfigOutput;
  }
  public putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig | undefined) {
    this._inferenceExecutionConfig = value;
  }
  public resetInferenceExecutionConfig() {
    this._inferenceExecutionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceExecutionConfigInput() {
    return this._inferenceExecutionConfig
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer?: SagemakerModelPrimaryContainer | undefined; 
  private __primaryContainerOutput = new SagemakerModelPrimaryContainerOutputReference(this as any, "primary_container", true);
  public get primaryContainer() {
    return this.__primaryContainerOutput;
  }
  public putPrimaryContainer(value: SagemakerModelPrimaryContainer | undefined) {
    this._primaryContainer = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SagemakerModelVpcConfig | undefined; 
  private __vpcConfigOutput = new SagemakerModelVpcConfigOutputReference(this as any, "vpc_config", true);
  public get vpcConfig() {
    return this.__vpcConfigOutput;
  }
  public putVpcConfig(value: SagemakerModelVpcConfig | undefined) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      container: cdktf.listMapper(sagemakerModelContainerToTerraform)(this._container),
      inference_execution_config: sagemakerModelInferenceExecutionConfigToTerraform(this._inferenceExecutionConfig),
      primary_container: sagemakerModelPrimaryContainerToTerraform(this._primaryContainer),
      vpc_config: sagemakerModelVpcConfigToTerraform(this._vpcConfig),
    };
  }
}
