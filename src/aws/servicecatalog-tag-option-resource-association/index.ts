/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogTagOptionResourceAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#id ServicecatalogTagOptionResourceAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#resource_id ServicecatalogTagOptionResourceAssociation#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association#tag_option_id ServicecatalogTagOptionResourceAssociation#tag_option_id}
  */
  readonly tagOptionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association}
*/
export class ServicecatalogTagOptionResourceAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_servicecatalog_tag_option_resource_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/servicecatalog_tag_option_resource_association aws_servicecatalog_tag_option_resource_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogTagOptionResourceAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogTagOptionResourceAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_tag_option_resource_association',
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
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._tagOptionId = config.tagOptionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // resource_arn - computed: true, optional: false, required: false
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }

  // resource_created_time - computed: true, optional: false, required: false
  public get resourceCreatedTime() {
    return this.getStringAttribute('resource_created_time');
  }

  // resource_description - computed: true, optional: false, required: false
  public get resourceDescription() {
    return this.getStringAttribute('resource_description');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // tag_option_id - computed: false, optional: false, required: true
  private _tagOptionId?: string; 
  public get tagOptionId() {
    return this.getStringAttribute('tag_option_id');
  }
  public set tagOptionId(value: string) {
    this._tagOptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOptionIdInput() {
    return this._tagOptionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      tag_option_id: cdktf.stringToTerraform(this._tagOptionId),
    };
  }
}
