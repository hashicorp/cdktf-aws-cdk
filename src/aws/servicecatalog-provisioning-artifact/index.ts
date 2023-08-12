// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProvisioningArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#accept_language ServicecatalogProvisioningArtifact#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#active ServicecatalogProvisioningArtifact#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#description ServicecatalogProvisioningArtifact#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#disable_template_validation ServicecatalogProvisioningArtifact#disable_template_validation}
  */
  readonly disableTemplateValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#guidance ServicecatalogProvisioningArtifact#guidance}
  */
  readonly guidance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#id ServicecatalogProvisioningArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#name ServicecatalogProvisioningArtifact#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#product_id ServicecatalogProvisioningArtifact#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#template_physical_id ServicecatalogProvisioningArtifact#template_physical_id}
  */
  readonly templatePhysicalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#template_url ServicecatalogProvisioningArtifact#template_url}
  */
  readonly templateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact#type ServicecatalogProvisioningArtifact#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact}
*/
export class ServicecatalogProvisioningArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_provisioning_artifact";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_provisioning_artifact aws_servicecatalog_provisioning_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProvisioningArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProvisioningArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_provisioning_artifact',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '3.76.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptLanguage = config.acceptLanguage;
    this._active = config.active;
    this._description = config.description;
    this._disableTemplateValidation = config.disableTemplateValidation;
    this._guidance = config.guidance;
    this._id = config.id;
    this._name = config.name;
    this._productId = config.productId;
    this._templatePhysicalId = config.templatePhysicalId;
    this._templateUrl = config.templateUrl;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_template_validation - computed: false, optional: true, required: false
  private _disableTemplateValidation?: boolean | cdktf.IResolvable; 
  public get disableTemplateValidation() {
    return this.getBooleanAttribute('disable_template_validation');
  }
  public set disableTemplateValidation(value: boolean | cdktf.IResolvable) {
    this._disableTemplateValidation = value;
  }
  public resetDisableTemplateValidation() {
    this._disableTemplateValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTemplateValidationInput() {
    return this._disableTemplateValidation;
  }

  // guidance - computed: false, optional: true, required: false
  private _guidance?: string; 
  public get guidance() {
    return this.getStringAttribute('guidance');
  }
  public set guidance(value: string) {
    this._guidance = value;
  }
  public resetGuidance() {
    this._guidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidanceInput() {
    return this._guidance;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // template_physical_id - computed: false, optional: true, required: false
  private _templatePhysicalId?: string; 
  public get templatePhysicalId() {
    return this.getStringAttribute('template_physical_id');
  }
  public set templatePhysicalId(value: string) {
    this._templatePhysicalId = value;
  }
  public resetTemplatePhysicalId() {
    this._templatePhysicalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePhysicalIdInput() {
    return this._templatePhysicalId;
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string; 
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      disable_template_validation: cdktf.booleanToTerraform(this._disableTemplateValidation),
      guidance: cdktf.stringToTerraform(this._guidance),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      product_id: cdktf.stringToTerraform(this._productId),
      template_physical_id: cdktf.stringToTerraform(this._templatePhysicalId),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}
