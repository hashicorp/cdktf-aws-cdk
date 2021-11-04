// https://www.terraform.io/docs/providers/aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#access_key AwsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#allowed_account_ids AwsProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#forbidden_account_ids AwsProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * The address of an HTTP proxy to use when accessing the AWS API. Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#http_proxy AwsProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#insecure AwsProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times an AWS API request is
being executed. If the API request still fails, an error is
thrown.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#max_retries AwsProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The profile for API operations. If not set, the default profile
created with `aws configure` will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#profile AwsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
are us-east-1, us-west-2, etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#region AwsProvider#region}
  */
  readonly region: string;
  /**
  * Set this to true to force the request to use path-style addressing,
i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
use virtual hosted bucket addressing when possible
(http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#s3_force_path_style AwsProvider#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The secret key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#secret_key AwsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The path to the shared credentials file. If not set
this defaults to ~/.aws/credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#shared_credentials_file AwsProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_credentials_validation AwsProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}
  */
  readonly skipGetEc2Platforms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: boolean | cdktf.IResolvable;
  /**
  * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_region_validation AwsProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
  /**
  * session token. A session token is only required if you are
using temporary security credentials.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#token AwsProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#alias AwsProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#assume_role AwsProvider#assume_role}
  */
  readonly assumeRole?: AwsProviderAssumeRole;
  /**
  * default_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#default_tags AwsProvider#default_tags}
  */
  readonly defaultTags?: AwsProviderDefaultTags;
  /**
  * endpoints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#endpoints AwsProvider#endpoints}
  */
  readonly endpoints?: AwsProviderEndpoints[];
  /**
  * ignore_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#ignore_tags AwsProvider#ignore_tags}
  */
  readonly ignoreTags?: AwsProviderIgnoreTags;
}
export interface AwsProviderAssumeRole {
  /**
  * Seconds to restrict the assume role session duration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#duration_seconds AwsProvider#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * Unique identifier that might be required for assuming a role in another account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#external_id AwsProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Identifier for the assumed role session.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#transitive_tag_keys AwsProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRoleOutputReference | AwsProviderAssumeRole): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.transitiveTagKeys),
  }
}

export class AwsProviderAssumeRoleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // duration_seconds - computed: false, optional: true, required: false
  private _durationSeconds?: number | undefined; 
  public get durationSeconds() {
    return this._durationSeconds;
  }
  public set durationSeconds(value: number | undefined| undefined) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string | undefined; 
  public get externalId() {
    return this._externalId;
  }
  public set externalId(value: string | undefined| undefined) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string | undefined; 
  public get policy() {
    return this._policy;
  }
  public set policy(value: string | undefined| undefined) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // policy_arns - computed: false, optional: true, required: false
  private _policyArns?: string[] | undefined; 
  public get policyArns() {
    return this._policyArns;
  }
  public set policyArns(value: string[] | undefined| undefined) {
    this._policyArns = value;
  }
  public resetPolicyArns() {
    this._policyArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnsInput() {
    return this._policyArns
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string | undefined; 
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined| undefined) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // session_name - computed: false, optional: true, required: false
  private _sessionName?: string | undefined; 
  public get sessionName() {
    return this._sessionName;
  }
  public set sessionName(value: string | undefined| undefined) {
    this._sessionName = value;
  }
  public resetSessionName() {
    this._sessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNameInput() {
    return this._sessionName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined| undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // transitive_tag_keys - computed: false, optional: true, required: false
  private _transitiveTagKeys?: string[] | undefined; 
  public get transitiveTagKeys() {
    return this._transitiveTagKeys;
  }
  public set transitiveTagKeys(value: string[] | undefined| undefined) {
    this._transitiveTagKeys = value;
  }
  public resetTransitiveTagKeys() {
    this._transitiveTagKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitiveTagKeysInput() {
    return this._transitiveTagKeys
  }
}
export interface AwsProviderDefaultTags {
  /**
  * Resource tags to default across all resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}

function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTagsOutputReference | AwsProviderDefaultTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
  }
}

export class AwsProviderDefaultTagsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined| undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }
}
export interface AwsProviderEndpoints {
}

function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export interface AwsProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#key_prefixes AwsProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws#keys AwsProvider#keys}
  */
  readonly keys?: string[];
}

function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTagsOutputReference | AwsProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.keys),
  }
}

export class AwsProviderIgnoreTagsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // key_prefixes - computed: false, optional: true, required: false
  private _keyPrefixes?: string[] | undefined; 
  public get keyPrefixes() {
    return this._keyPrefixes;
  }
  public set keyPrefixes(value: string[] | undefined| undefined) {
    this._keyPrefixes = value;
  }
  public resetKeyPrefixes() {
    this._keyPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixesInput() {
    return this._keyPrefixes
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[] | undefined; 
  public get keys() {
    return this._keys;
  }
  public set keys(value: string[] | undefined| undefined) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws aws}
*/
export class AwsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AwsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'aws'
    });
    this._accessKey = config.accessKey;
    this._allowedAccountIds = config.allowedAccountIds;
    this._forbiddenAccountIds = config.forbiddenAccountIds;
    this._httpProxy = config.httpProxy;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._profile = config.profile;
    this._region = config.region;
    this._s3ForcePathStyle = config.s3ForcePathStyle;
    this._secretKey = config.secretKey;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._skipCredentialsValidation = config.skipCredentialsValidation;
    this._skipGetEc2Platforms = config.skipGetEc2Platforms;
    this._skipMetadataApiCheck = config.skipMetadataApiCheck;
    this._skipRegionValidation = config.skipRegionValidation;
    this._skipRequestingAccountId = config.skipRequestingAccountId;
    this._token = config.token;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._defaultTags = config.defaultTags;
    this._endpoints = config.endpoints;
    this._ignoreTags = config.ignoreTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string | undefined; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined| undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[] | undefined; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined| undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[] | undefined; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined| undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string | undefined; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined| undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable | undefined; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number | undefined; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined| undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string | undefined; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined| undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string| undefined) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable | undefined; 
  public get s3ForcePathStyle() {
    return this._s3ForcePathStyle;
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string | undefined; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined| undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string | undefined; 
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined| undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable | undefined; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation
  }

  // skip_get_ec2_platforms - computed: false, optional: true, required: false
  private _skipGetEc2Platforms?: boolean | cdktf.IResolvable | undefined; 
  public get skipGetEc2Platforms() {
    return this._skipGetEc2Platforms;
  }
  public set skipGetEc2Platforms(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipGetEc2Platforms = value;
  }
  public resetSkipGetEc2Platforms() {
    this._skipGetEc2Platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetEc2PlatformsInput() {
    return this._skipGetEc2Platforms
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: boolean | cdktf.IResolvable | undefined; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean | cdktf.IResolvable | undefined; 
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean | cdktf.IResolvable | undefined; 
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined| undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId
  }

  // token - computed: false, optional: true, required: false
  private _token?: string | undefined; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined| undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string | undefined; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined| undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole | undefined; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole | undefined| undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AwsProviderDefaultTags | undefined; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AwsProviderDefaultTags | undefined| undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[] | undefined; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[] | undefined| undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags | undefined; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags | undefined| undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._allowedAccountIds),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._forbiddenAccountIds),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      profile: cdktf.stringToTerraform(this._profile),
      region: cdktf.stringToTerraform(this._region),
      s3_force_path_style: cdktf.booleanToTerraform(this._s3ForcePathStyle),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      skip_credentials_validation: cdktf.booleanToTerraform(this._skipCredentialsValidation),
      skip_get_ec2_platforms: cdktf.booleanToTerraform(this._skipGetEc2Platforms),
      skip_metadata_api_check: cdktf.booleanToTerraform(this._skipMetadataApiCheck),
      skip_region_validation: cdktf.booleanToTerraform(this._skipRegionValidation),
      skip_requesting_account_id: cdktf.booleanToTerraform(this._skipRequestingAccountId),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: awsProviderAssumeRoleToTerraform(this._assumeRole),
      default_tags: awsProviderDefaultTagsToTerraform(this._defaultTags),
      endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform)(this._endpoints),
      ignore_tags: awsProviderIgnoreTagsToTerraform(this._ignoreTags),
    };
  }
}
