// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Elastic Transcoder
*/
export interface ElastictranscoderPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}
  */
  readonly awsKmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#input_bucket ElastictranscoderPipeline#input_bucket}
  */
  readonly inputBucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#name ElastictranscoderPipeline#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#output_bucket ElastictranscoderPipeline#output_bucket}
  */
  readonly outputBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#role ElastictranscoderPipeline#role}
  */
  readonly role: string;
  /**
  * content_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config ElastictranscoderPipeline#content_config}
  */
  readonly contentConfig?: ElastictranscoderPipelineContentConfig;
  /**
  * content_config_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#content_config_permissions ElastictranscoderPipeline#content_config_permissions}
  */
  readonly contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[];
  /**
  * notifications block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#notifications ElastictranscoderPipeline#notifications}
  */
  readonly notifications?: ElastictranscoderPipelineNotifications;
  /**
  * thumbnail_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config ElastictranscoderPipeline#thumbnail_config}
  */
  readonly thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig;
  /**
  * thumbnail_config_permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}
  */
  readonly thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[];
}
export interface ElastictranscoderPipelineContentConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
  */
  readonly storageClass?: string;
}

export function elastictranscoderPipelineContentConfigToTerraform(struct?: ElastictranscoderPipelineContentConfigOutputReference | ElastictranscoderPipelineContentConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export class ElastictranscoderPipelineContentConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string | undefined; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string | undefined) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string | undefined; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }
}
export interface ElastictranscoderPipelineContentConfigPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
  */
  readonly granteeType?: string;
}

export function elastictranscoderPipelineContentConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineContentConfigPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform)(struct!.access),
    grantee: cdktf.stringToTerraform(struct!.grantee),
    grantee_type: cdktf.stringToTerraform(struct!.granteeType),
  }
}

export interface ElastictranscoderPipelineNotifications {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#completed ElastictranscoderPipeline#completed}
  */
  readonly completed?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#error ElastictranscoderPipeline#error}
  */
  readonly error?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#progressing ElastictranscoderPipeline#progressing}
  */
  readonly progressing?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#warning ElastictranscoderPipeline#warning}
  */
  readonly warning?: string;
}

export function elastictranscoderPipelineNotificationsToTerraform(struct?: ElastictranscoderPipelineNotificationsOutputReference | ElastictranscoderPipelineNotifications): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completed: cdktf.stringToTerraform(struct!.completed),
    error: cdktf.stringToTerraform(struct!.error),
    progressing: cdktf.stringToTerraform(struct!.progressing),
    warning: cdktf.stringToTerraform(struct!.warning),
  }
}

export class ElastictranscoderPipelineNotificationsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // completed - computed: false, optional: true, required: false
  private _completed?: string | undefined; 
  public get completed() {
    return this.getStringAttribute('completed');
  }
  public set completed(value: string | undefined) {
    this._completed = value;
  }
  public resetCompleted() {
    this._completed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completedInput() {
    return this._completed
  }

  // error - computed: false, optional: true, required: false
  private _error?: string | undefined; 
  public get error() {
    return this.getStringAttribute('error');
  }
  public set error(value: string | undefined) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error
  }

  // progressing - computed: false, optional: true, required: false
  private _progressing?: string | undefined; 
  public get progressing() {
    return this.getStringAttribute('progressing');
  }
  public set progressing(value: string | undefined) {
    this._progressing = value;
  }
  public resetProgressing() {
    this._progressing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressingInput() {
    return this._progressing
  }

  // warning - computed: false, optional: true, required: false
  private _warning?: string | undefined; 
  public get warning() {
    return this.getStringAttribute('warning');
  }
  public set warning(value: string | undefined) {
    this._warning = value;
  }
  public resetWarning() {
    this._warning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningInput() {
    return this._warning
  }
}
export interface ElastictranscoderPipelineThumbnailConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#bucket ElastictranscoderPipeline#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#storage_class ElastictranscoderPipeline#storage_class}
  */
  readonly storageClass?: string;
}

export function elastictranscoderPipelineThumbnailConfigToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigOutputReference | ElastictranscoderPipelineThumbnailConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}

export class ElastictranscoderPipelineThumbnailConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string | undefined; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string | undefined) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string | undefined; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string | undefined) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass
  }
}
export interface ElastictranscoderPipelineThumbnailConfigPermissions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#access ElastictranscoderPipeline#access}
  */
  readonly access?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee ElastictranscoderPipeline#grantee}
  */
  readonly grantee?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html#grantee_type ElastictranscoderPipeline#grantee_type}
  */
  readonly granteeType?: string;
}

export function elastictranscoderPipelineThumbnailConfigPermissionsToTerraform(struct?: ElastictranscoderPipelineThumbnailConfigPermissions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform)(struct!.access),
    grantee: cdktf.stringToTerraform(struct!.grantee),
    grantee_type: cdktf.stringToTerraform(struct!.granteeType),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline}
*/
export class ElastictranscoderPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elastictranscoder_pipeline";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_pipeline.html aws_elastictranscoder_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElastictranscoderPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ElastictranscoderPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elastictranscoder_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._awsKmsKeyArn = config.awsKmsKeyArn;
    this._inputBucket = config.inputBucket;
    this._name = config.name;
    this._outputBucket = config.outputBucket;
    this._role = config.role;
    this._contentConfig = config.contentConfig;
    this._contentConfigPermissions = config.contentConfigPermissions;
    this._notifications = config.notifications;
    this._thumbnailConfig = config.thumbnailConfig;
    this._thumbnailConfigPermissions = config.thumbnailConfigPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_kms_key_arn - computed: false, optional: true, required: false
  private _awsKmsKeyArn?: string | undefined; 
  public get awsKmsKeyArn() {
    return this.getStringAttribute('aws_kms_key_arn');
  }
  public set awsKmsKeyArn(value: string | undefined) {
    this._awsKmsKeyArn = value;
  }
  public resetAwsKmsKeyArn() {
    this._awsKmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKmsKeyArnInput() {
    return this._awsKmsKeyArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // input_bucket - computed: false, optional: false, required: true
  private _inputBucket?: string; 
  public get inputBucket() {
    return this.getStringAttribute('input_bucket');
  }
  public set inputBucket(value: string) {
    this._inputBucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputBucketInput() {
    return this._inputBucket
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

  // output_bucket - computed: true, optional: true, required: false
  private _outputBucket?: string | undefined; 
  public get outputBucket() {
    return this.getStringAttribute('output_bucket');
  }
  public set outputBucket(value: string | undefined) {
    this._outputBucket = value;
  }
  public resetOutputBucket() {
    this._outputBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputBucketInput() {
    return this._outputBucket
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // content_config - computed: false, optional: true, required: false
  private _contentConfig?: ElastictranscoderPipelineContentConfig | undefined; 
  private __contentConfigOutput = new ElastictranscoderPipelineContentConfigOutputReference(this as any, "content_config", true);
  public get contentConfig() {
    return this.__contentConfigOutput;
  }
  public putContentConfig(value: ElastictranscoderPipelineContentConfig | undefined) {
    this._contentConfig = value;
  }
  public resetContentConfig() {
    this._contentConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig
  }

  // content_config_permissions - computed: false, optional: true, required: false
  private _contentConfigPermissions?: ElastictranscoderPipelineContentConfigPermissions[] | undefined; 
  public get contentConfigPermissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('content_config_permissions') as any;
  }
  public set contentConfigPermissions(value: ElastictranscoderPipelineContentConfigPermissions[] | undefined) {
    this._contentConfigPermissions = value;
  }
  public resetContentConfigPermissions() {
    this._contentConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigPermissionsInput() {
    return this._contentConfigPermissions
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: ElastictranscoderPipelineNotifications | undefined; 
  private __notificationsOutput = new ElastictranscoderPipelineNotificationsOutputReference(this as any, "notifications", true);
  public get notifications() {
    return this.__notificationsOutput;
  }
  public putNotifications(value: ElastictranscoderPipelineNotifications | undefined) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications
  }

  // thumbnail_config - computed: false, optional: true, required: false
  private _thumbnailConfig?: ElastictranscoderPipelineThumbnailConfig | undefined; 
  private __thumbnailConfigOutput = new ElastictranscoderPipelineThumbnailConfigOutputReference(this as any, "thumbnail_config", true);
  public get thumbnailConfig() {
    return this.__thumbnailConfigOutput;
  }
  public putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig | undefined) {
    this._thumbnailConfig = value;
  }
  public resetThumbnailConfig() {
    this._thumbnailConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigInput() {
    return this._thumbnailConfig
  }

  // thumbnail_config_permissions - computed: false, optional: true, required: false
  private _thumbnailConfigPermissions?: ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined; 
  public get thumbnailConfigPermissions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('thumbnail_config_permissions') as any;
  }
  public set thumbnailConfigPermissions(value: ElastictranscoderPipelineThumbnailConfigPermissions[] | undefined) {
    this._thumbnailConfigPermissions = value;
  }
  public resetThumbnailConfigPermissions() {
    this._thumbnailConfigPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbnailConfigPermissionsInput() {
    return this._thumbnailConfigPermissions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_kms_key_arn: cdktf.stringToTerraform(this._awsKmsKeyArn),
      input_bucket: cdktf.stringToTerraform(this._inputBucket),
      name: cdktf.stringToTerraform(this._name),
      output_bucket: cdktf.stringToTerraform(this._outputBucket),
      role: cdktf.stringToTerraform(this._role),
      content_config: elastictranscoderPipelineContentConfigToTerraform(this._contentConfig),
      content_config_permissions: cdktf.listMapper(elastictranscoderPipelineContentConfigPermissionsToTerraform)(this._contentConfigPermissions),
      notifications: elastictranscoderPipelineNotificationsToTerraform(this._notifications),
      thumbnail_config: elastictranscoderPipelineThumbnailConfigToTerraform(this._thumbnailConfig),
      thumbnail_config_permissions: cdktf.listMapper(elastictranscoderPipelineThumbnailConfigPermissionsToTerraform)(this._thumbnailConfigPermissions),
    };
  }
}
