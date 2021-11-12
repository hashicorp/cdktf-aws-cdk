// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Glue
*/
export interface GlueSecurityConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#name GlueSecurityConfiguration#name}
  */
  readonly name: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#encryption_configuration GlueSecurityConfiguration#encryption_configuration}
  */
  readonly encryptionConfiguration: GlueSecurityConfigurationEncryptionConfiguration;
}
export interface GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption_mode GlueSecurityConfiguration#cloudwatch_encryption_mode}
  */
  readonly cloudwatchEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_encryption_mode: cdktf.stringToTerraform(struct!.cloudwatchEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_encryption_mode - computed: false, optional: true, required: false
  private _cloudwatchEncryptionMode?: string | undefined; 
  public get cloudwatchEncryptionMode() {
    return this.getStringAttribute('cloudwatch_encryption_mode');
  }
  public set cloudwatchEncryptionMode(value: string | undefined) {
    this._cloudwatchEncryptionMode = value;
  }
  public resetCloudwatchEncryptionMode() {
    this._cloudwatchEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionModeInput() {
    return this._cloudwatchEncryptionMode
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption_mode GlueSecurityConfiguration#job_bookmarks_encryption_mode}
  */
  readonly jobBookmarksEncryptionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_bookmarks_encryption_mode: cdktf.stringToTerraform(struct!.jobBookmarksEncryptionMode),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // job_bookmarks_encryption_mode - computed: false, optional: true, required: false
  private _jobBookmarksEncryptionMode?: string | undefined; 
  public get jobBookmarksEncryptionMode() {
    return this.getStringAttribute('job_bookmarks_encryption_mode');
  }
  public set jobBookmarksEncryptionMode(value: string | undefined) {
    this._jobBookmarksEncryptionMode = value;
  }
  public resetJobBookmarksEncryptionMode() {
    this._jobBookmarksEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionModeInput() {
    return this._jobBookmarksEncryptionMode
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }
}
export interface GlueSecurityConfigurationEncryptionConfigurationS3Encryption {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#kms_key_arn GlueSecurityConfiguration#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption_mode GlueSecurityConfiguration#s3_encryption_mode}
  */
  readonly s3EncryptionMode?: string;
}

export function glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference | GlueSecurityConfigurationEncryptionConfigurationS3Encryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    s3_encryption_mode: cdktf.stringToTerraform(struct!.s3EncryptionMode),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string | undefined; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
  }

  // s3_encryption_mode - computed: false, optional: true, required: false
  private _s3EncryptionMode?: string | undefined; 
  public get s3EncryptionMode() {
    return this.getStringAttribute('s3_encryption_mode');
  }
  public set s3EncryptionMode(value: string | undefined) {
    this._s3EncryptionMode = value;
  }
  public resetS3EncryptionMode() {
    this._s3EncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionModeInput() {
    return this._s3EncryptionMode
  }
}
export interface GlueSecurityConfigurationEncryptionConfiguration {
  /**
  * cloudwatch_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#cloudwatch_encryption GlueSecurityConfiguration#cloudwatch_encryption}
  */
  readonly cloudwatchEncryption: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption;
  /**
  * job_bookmarks_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#job_bookmarks_encryption GlueSecurityConfiguration#job_bookmarks_encryption}
  */
  readonly jobBookmarksEncryption: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption;
  /**
  * s3_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html#s3_encryption GlueSecurityConfiguration#s3_encryption}
  */
  readonly s3Encryption: GlueSecurityConfigurationEncryptionConfigurationS3Encryption;
}

export function glueSecurityConfigurationEncryptionConfigurationToTerraform(struct?: GlueSecurityConfigurationEncryptionConfigurationOutputReference | GlueSecurityConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_encryption: glueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionToTerraform(struct!.cloudwatchEncryption),
    job_bookmarks_encryption: glueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionToTerraform(struct!.jobBookmarksEncryption),
    s3_encryption: glueSecurityConfigurationEncryptionConfigurationS3EncryptionToTerraform(struct!.s3Encryption),
  }
}

export class GlueSecurityConfigurationEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloudwatch_encryption - computed: false, optional: false, required: true
  private _cloudwatchEncryption?: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption; 
  private __cloudwatchEncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryptionOutputReference(this as any, "cloudwatch_encryption", true);
  public get cloudwatchEncryption() {
    return this.__cloudwatchEncryptionOutput;
  }
  public putCloudwatchEncryption(value: GlueSecurityConfigurationEncryptionConfigurationCloudwatchEncryption) {
    this._cloudwatchEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchEncryptionInput() {
    return this._cloudwatchEncryption
  }

  // job_bookmarks_encryption - computed: false, optional: false, required: true
  private _jobBookmarksEncryption?: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption; 
  private __jobBookmarksEncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryptionOutputReference(this as any, "job_bookmarks_encryption", true);
  public get jobBookmarksEncryption() {
    return this.__jobBookmarksEncryptionOutput;
  }
  public putJobBookmarksEncryption(value: GlueSecurityConfigurationEncryptionConfigurationJobBookmarksEncryption) {
    this._jobBookmarksEncryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jobBookmarksEncryptionInput() {
    return this._jobBookmarksEncryption
  }

  // s3_encryption - computed: false, optional: false, required: true
  private _s3Encryption?: GlueSecurityConfigurationEncryptionConfigurationS3Encryption; 
  private __s3EncryptionOutput = new GlueSecurityConfigurationEncryptionConfigurationS3EncryptionOutputReference(this as any, "s3_encryption", true);
  public get s3Encryption() {
    return this.__s3EncryptionOutput;
  }
  public putS3Encryption(value: GlueSecurityConfigurationEncryptionConfigurationS3Encryption) {
    this._s3Encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EncryptionInput() {
    return this._s3Encryption
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration}
*/
export class GlueSecurityConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_glue_security_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_security_configuration.html aws_glue_security_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlueSecurityConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GlueSecurityConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_security_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._encryptionConfiguration = config.encryptionConfiguration;
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

  // encryption_configuration - computed: false, optional: false, required: true
  private _encryptionConfiguration?: GlueSecurityConfigurationEncryptionConfiguration; 
  private __encryptionConfigurationOutput = new GlueSecurityConfigurationEncryptionConfigurationOutputReference(this as any, "encryption_configuration", true);
  public get encryptionConfiguration() {
    return this.__encryptionConfigurationOutput;
  }
  public putEncryptionConfiguration(value: GlueSecurityConfigurationEncryptionConfiguration) {
    this._encryptionConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      encryption_configuration: glueSecurityConfigurationEncryptionConfigurationToTerraform(this._encryptionConfiguration),
    };
  }
}
