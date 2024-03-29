/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogProductPortfolioAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#accept_language ServicecatalogProductPortfolioAssociation#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#id ServicecatalogProductPortfolioAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#portfolio_id ServicecatalogProductPortfolioAssociation#portfolio_id}
  */
  readonly portfolioId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#product_id ServicecatalogProductPortfolioAssociation#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#source_portfolio_id ServicecatalogProductPortfolioAssociation#source_portfolio_id}
  */
  readonly sourcePortfolioId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association}
*/
export class ServicecatalogProductPortfolioAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_product_portfolio_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicecatalogProductPortfolioAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicecatalogProductPortfolioAssociation to import
  * @param importFromId The id of the existing ServicecatalogProductPortfolioAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicecatalogProductPortfolioAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_servicecatalog_product_portfolio_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_product_portfolio_association aws_servicecatalog_product_portfolio_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProductPortfolioAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProductPortfolioAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_product_portfolio_association',
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
    this._id = config.id;
    this._portfolioId = config.portfolioId;
    this._productId = config.productId;
    this._sourcePortfolioId = config.sourcePortfolioId;
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

  // portfolio_id - computed: false, optional: false, required: true
  private _portfolioId?: string; 
  public get portfolioId() {
    return this.getStringAttribute('portfolio_id');
  }
  public set portfolioId(value: string) {
    this._portfolioId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portfolioIdInput() {
    return this._portfolioId;
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

  // source_portfolio_id - computed: false, optional: true, required: false
  private _sourcePortfolioId?: string; 
  public get sourcePortfolioId() {
    return this.getStringAttribute('source_portfolio_id');
  }
  public set sourcePortfolioId(value: string) {
    this._sourcePortfolioId = value;
  }
  public resetSourcePortfolioId() {
    this._sourcePortfolioId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortfolioIdInput() {
    return this._sourcePortfolioId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      id: cdktf.stringToTerraform(this._id),
      portfolio_id: cdktf.stringToTerraform(this._portfolioId),
      product_id: cdktf.stringToTerraform(this._productId),
      source_portfolio_id: cdktf.stringToTerraform(this._sourcePortfolioId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_language: {
        value: cdktf.stringToHclTerraform(this._acceptLanguage),
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
      portfolio_id: {
        value: cdktf.stringToHclTerraform(this._portfolioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_portfolio_id: {
        value: cdktf.stringToHclTerraform(this._sourcePortfolioId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
