// https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsProviderConfig {
  /**
  * The access key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#access_key AwsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#allowed_account_ids AwsProvider#allowed_account_ids}
  */
  readonly allowedAccountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forbidden_account_ids AwsProvider#forbidden_account_ids}
  */
  readonly forbiddenAccountIds?: string[];
  /**
  * The address of an HTTP proxy to use when accessing the AWS API. Can also be configured using the `HTTP_PROXY` or `HTTPS_PROXY` environment variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#http_proxy AwsProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * Explicitly allow the provider to perform "insecure" SSL requests. If omitted, default value is `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#insecure AwsProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of times an AWS API request is
being executed. If the API request still fails, an error is
thrown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#max_retries AwsProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The profile for API operations. If not set, the default profile
created with `aws configure` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#profile AwsProvider#profile}
  */
  readonly profile?: string;
  /**
  * The region where AWS operations will take place. Examples
are us-east-1, us-west-2, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#region AwsProvider#region}
  */
  readonly region: string;
  /**
  * Set this to true to force the request to use path-style addressing,
i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
use virtual hosted bucket addressing when possible
(http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3_force_path_style AwsProvider#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * The secret key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secret_key AwsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The path to the shared credentials file. If not set
this defaults to ~/.aws/credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shared_credentials_file AwsProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_credentials_validation AwsProvider#skip_credentials_validation}
  */
  readonly skipCredentialsValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_get_ec2_platforms AwsProvider#skip_get_ec2_platforms}
  */
  readonly skipGetEc2Platforms?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_metadata_api_check AwsProvider#skip_metadata_api_check}
  */
  readonly skipMetadataApiCheck?: boolean | cdktf.IResolvable;
  /**
  * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_region_validation AwsProvider#skip_region_validation}
  */
  readonly skipRegionValidation?: boolean | cdktf.IResolvable;
  /**
  * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#skip_requesting_account_id AwsProvider#skip_requesting_account_id}
  */
  readonly skipRequestingAccountId?: boolean | cdktf.IResolvable;
  /**
  * session token. A session token is only required if you are
using temporary security credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#token AwsProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alias AwsProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#assume_role AwsProvider#assume_role}
  */
  readonly assumeRole?: AwsProviderAssumeRole;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#default_tags AwsProvider#default_tags}
  */
  readonly defaultTags?: AwsProviderDefaultTags;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#endpoints AwsProvider#endpoints}
  */
  readonly endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ignore_tags AwsProvider#ignore_tags}
  */
  readonly ignoreTags?: AwsProviderIgnoreTags;
}
export interface AwsProviderAssumeRole {
  /**
  * The duration, in seconds, of the role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#duration_seconds AwsProvider#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * A unique identifier that might be required when you assume a role in another account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#external_id AwsProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * IAM Policy JSON describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy AwsProvider#policy}
  */
  readonly policy?: string;
  /**
  * Amazon Resource Names (ARNs) of IAM Policies describing further restricting permissions for the IAM Role being assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#policy_arns AwsProvider#policy_arns}
  */
  readonly policyArns?: string[];
  /**
  * Amazon Resource Name of an IAM Role to assume prior to making API calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#role_arn AwsProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * An identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#session_name AwsProvider#session_name}
  */
  readonly sessionName?: string;
  /**
  * Assume role session tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Assume role session tag keys to pass to any subsequent sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transitive_tag_keys AwsProvider#transitive_tag_keys}
  */
  readonly transitiveTagKeys?: string[];
}

export function awsProviderAssumeRoleToTerraform(struct?: AwsProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration_seconds: cdktf.numberToTerraform(struct!.durationSeconds),
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    policy_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyArns),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    transitive_tag_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transitiveTagKeys),
  }
}

export interface AwsProviderDefaultTags {
  /**
  * Resource tags to default across all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#tags AwsProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function awsProviderDefaultTagsToTerraform(struct?: AwsProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}

export interface AwsProviderEndpoints {
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#accessanalyzer AwsProvider#accessanalyzer}
  */
  readonly accessanalyzer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#account AwsProvider#account}
  */
  readonly account?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acm AwsProvider#acm}
  */
  readonly acm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#acmpca AwsProvider#acmpca}
  */
  readonly acmpca?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#alexaforbusiness AwsProvider#alexaforbusiness}
  */
  readonly alexaforbusiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amp AwsProvider#amp}
  */
  readonly amp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplify AwsProvider#amplify}
  */
  readonly amplify?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#amplifybackend AwsProvider#amplifybackend}
  */
  readonly amplifybackend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigateway AwsProvider#apigateway}
  */
  readonly apigateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apigatewayv2 AwsProvider#apigatewayv2}
  */
  readonly apigatewayv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appautoscaling AwsProvider#appautoscaling}
  */
  readonly appautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appconfig AwsProvider#appconfig}
  */
  readonly appconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appflow AwsProvider#appflow}
  */
  readonly appflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrations AwsProvider#appintegrations}
  */
  readonly appintegrations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appintegrationsservice AwsProvider#appintegrationsservice}
  */
  readonly appintegrationsservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationautoscaling AwsProvider#applicationautoscaling}
  */
  readonly applicationautoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationcostprofiler AwsProvider#applicationcostprofiler}
  */
  readonly applicationcostprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscovery AwsProvider#applicationdiscovery}
  */
  readonly applicationdiscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationdiscoveryservice AwsProvider#applicationdiscoveryservice}
  */
  readonly applicationdiscoveryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#applicationinsights AwsProvider#applicationinsights}
  */
  readonly applicationinsights?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appmesh AwsProvider#appmesh}
  */
  readonly appmesh?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appregistry AwsProvider#appregistry}
  */
  readonly appregistry?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#apprunner AwsProvider#apprunner}
  */
  readonly apprunner?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appstream AwsProvider#appstream}
  */
  readonly appstream?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#appsync AwsProvider#appsync}
  */
  readonly appsync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#athena AwsProvider#athena}
  */
  readonly athena?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#auditmanager AwsProvider#auditmanager}
  */
  readonly auditmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#augmentedairuntime AwsProvider#augmentedairuntime}
  */
  readonly augmentedairuntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscaling AwsProvider#autoscaling}
  */
  readonly autoscaling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#autoscalingplans AwsProvider#autoscalingplans}
  */
  readonly autoscalingplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#backup AwsProvider#backup}
  */
  readonly backup?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#batch AwsProvider#batch}
  */
  readonly batch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#braket AwsProvider#braket}
  */
  readonly braket?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#budgets AwsProvider#budgets}
  */
  readonly budgets?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#chime AwsProvider#chime}
  */
  readonly chime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloud9 AwsProvider#cloud9}
  */
  readonly cloud9?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrol AwsProvider#cloudcontrol}
  */
  readonly cloudcontrol?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudcontrolapi AwsProvider#cloudcontrolapi}
  */
  readonly cloudcontrolapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#clouddirectory AwsProvider#clouddirectory}
  */
  readonly clouddirectory?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudformation AwsProvider#cloudformation}
  */
  readonly cloudformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudfront AwsProvider#cloudfront}
  */
  readonly cloudfront?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsm AwsProvider#cloudhsm}
  */
  readonly cloudhsm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudhsmv2 AwsProvider#cloudhsmv2}
  */
  readonly cloudhsmv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearch AwsProvider#cloudsearch}
  */
  readonly cloudsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudsearchdomain AwsProvider#cloudsearchdomain}
  */
  readonly cloudsearchdomain?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudtrail AwsProvider#cloudtrail}
  */
  readonly cloudtrail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatch AwsProvider#cloudwatch}
  */
  readonly cloudwatch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchevents AwsProvider#cloudwatchevents}
  */
  readonly cloudwatchevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cloudwatchlogs AwsProvider#cloudwatchlogs}
  */
  readonly cloudwatchlogs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeartifact AwsProvider#codeartifact}
  */
  readonly codeartifact?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codebuild AwsProvider#codebuild}
  */
  readonly codebuild?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codecommit AwsProvider#codecommit}
  */
  readonly codecommit?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codedeploy AwsProvider#codedeploy}
  */
  readonly codedeploy?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codeguruprofiler AwsProvider#codeguruprofiler}
  */
  readonly codeguruprofiler?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codegurureviewer AwsProvider#codegurureviewer}
  */
  readonly codegurureviewer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codepipeline AwsProvider#codepipeline}
  */
  readonly codepipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestar AwsProvider#codestar}
  */
  readonly codestar?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarconnections AwsProvider#codestarconnections}
  */
  readonly codestarconnections?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#codestarnotifications AwsProvider#codestarnotifications}
  */
  readonly codestarnotifications?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentity AwsProvider#cognitoidentity}
  */
  readonly cognitoidentity?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidentityprovider AwsProvider#cognitoidentityprovider}
  */
  readonly cognitoidentityprovider?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitoidp AwsProvider#cognitoidp}
  */
  readonly cognitoidp?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cognitosync AwsProvider#cognitosync}
  */
  readonly cognitosync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehend AwsProvider#comprehend}
  */
  readonly comprehend?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#comprehendmedical AwsProvider#comprehendmedical}
  */
  readonly comprehendmedical?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#config AwsProvider#config}
  */
  readonly config?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#configservice AwsProvider#configservice}
  */
  readonly configservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connect AwsProvider#connect}
  */
  readonly connect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectcontactlens AwsProvider#connectcontactlens}
  */
  readonly connectcontactlens?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#connectparticipant AwsProvider#connectparticipant}
  */
  readonly connectparticipant?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costandusagereportservice AwsProvider#costandusagereportservice}
  */
  readonly costandusagereportservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#costexplorer AwsProvider#costexplorer}
  */
  readonly costexplorer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#cur AwsProvider#cur}
  */
  readonly cur?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigration AwsProvider#databasemigration}
  */
  readonly databasemigration?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#databasemigrationservice AwsProvider#databasemigrationservice}
  */
  readonly databasemigrationservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dataexchange AwsProvider#dataexchange}
  */
  readonly dataexchange?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datapipeline AwsProvider#datapipeline}
  */
  readonly datapipeline?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#datasync AwsProvider#datasync}
  */
  readonly datasync?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dax AwsProvider#dax}
  */
  readonly dax?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#detective AwsProvider#detective}
  */
  readonly detective?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devicefarm AwsProvider#devicefarm}
  */
  readonly devicefarm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#devopsguru AwsProvider#devopsguru}
  */
  readonly devopsguru?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#directconnect AwsProvider#directconnect}
  */
  readonly directconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dlm AwsProvider#dlm}
  */
  readonly dlm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dms AwsProvider#dms}
  */
  readonly dms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#docdb AwsProvider#docdb}
  */
  readonly docdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ds AwsProvider#ds}
  */
  readonly ds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodb AwsProvider#dynamodb}
  */
  readonly dynamodb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#dynamodbstreams AwsProvider#dynamodbstreams}
  */
  readonly dynamodbstreams?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2 AwsProvider#ec2}
  */
  readonly ec2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ec2instanceconnect AwsProvider#ec2instanceconnect}
  */
  readonly ec2Instanceconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecr AwsProvider#ecr}
  */
  readonly ecr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecrpublic AwsProvider#ecrpublic}
  */
  readonly ecrpublic?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ecs AwsProvider#ecs}
  */
  readonly ecs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#efs AwsProvider#efs}
  */
  readonly efs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eks AwsProvider#eks}
  */
  readonly eks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticache AwsProvider#elasticache}
  */
  readonly elasticache?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticbeanstalk AwsProvider#elasticbeanstalk}
  */
  readonly elasticbeanstalk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticinference AwsProvider#elasticinference}
  */
  readonly elasticinference?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearch AwsProvider#elasticsearch}
  */
  readonly elasticsearch?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elasticsearchservice AwsProvider#elasticsearchservice}
  */
  readonly elasticsearchservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elastictranscoder AwsProvider#elastictranscoder}
  */
  readonly elastictranscoder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elb AwsProvider#elb}
  */
  readonly elb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#elbv2 AwsProvider#elbv2}
  */
  readonly elbv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emr AwsProvider#emr}
  */
  readonly emr?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#emrcontainers AwsProvider#emrcontainers}
  */
  readonly emrcontainers?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#es AwsProvider#es}
  */
  readonly es?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#eventbridge AwsProvider#eventbridge}
  */
  readonly eventbridge?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#events AwsProvider#events}
  */
  readonly events?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspace AwsProvider#finspace}
  */
  readonly finspace?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#finspacedata AwsProvider#finspacedata}
  */
  readonly finspacedata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#firehose AwsProvider#firehose}
  */
  readonly firehose?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fis AwsProvider#fis}
  */
  readonly fis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fms AwsProvider#fms}
  */
  readonly fms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecast AwsProvider#forecast}
  */
  readonly forecast?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastquery AwsProvider#forecastquery}
  */
  readonly forecastquery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastqueryservice AwsProvider#forecastqueryservice}
  */
  readonly forecastqueryservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#forecastservice AwsProvider#forecastservice}
  */
  readonly forecastservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#frauddetector AwsProvider#frauddetector}
  */
  readonly frauddetector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#fsx AwsProvider#fsx}
  */
  readonly fsx?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gamelift AwsProvider#gamelift}
  */
  readonly gamelift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glacier AwsProvider#glacier}
  */
  readonly glacier?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#globalaccelerator AwsProvider#globalaccelerator}
  */
  readonly globalaccelerator?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#glue AwsProvider#glue}
  */
  readonly glue?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#gluedatabrew AwsProvider#gluedatabrew}
  */
  readonly gluedatabrew?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrass AwsProvider#greengrass}
  */
  readonly greengrass?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#greengrassv2 AwsProvider#greengrassv2}
  */
  readonly greengrassv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#groundstation AwsProvider#groundstation}
  */
  readonly groundstation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#guardduty AwsProvider#guardduty}
  */
  readonly guardduty?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#health AwsProvider#health}
  */
  readonly health?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#healthlake AwsProvider#healthlake}
  */
  readonly healthlake?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#honeycode AwsProvider#honeycode}
  */
  readonly honeycode?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iam AwsProvider#iam}
  */
  readonly iam?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#identitystore AwsProvider#identitystore}
  */
  readonly identitystore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#imagebuilder AwsProvider#imagebuilder}
  */
  readonly imagebuilder?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#inspector AwsProvider#inspector}
  */
  readonly inspector?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot AwsProvider#iot}
  */
  readonly iot?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevices AwsProvider#iot1clickdevices}
  */
  readonly iot1Clickdevices?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickdevicesservice AwsProvider#iot1clickdevicesservice}
  */
  readonly iot1Clickdevicesservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iot1clickprojects AwsProvider#iot1clickprojects}
  */
  readonly iot1Clickprojects?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotanalytics AwsProvider#iotanalytics}
  */
  readonly iotanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdataplane AwsProvider#iotdataplane}
  */
  readonly iotdataplane?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotdeviceadvisor AwsProvider#iotdeviceadvisor}
  */
  readonly iotdeviceadvisor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotevents AwsProvider#iotevents}
  */
  readonly iotevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ioteventsdata AwsProvider#ioteventsdata}
  */
  readonly ioteventsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotfleethub AwsProvider#iotfleethub}
  */
  readonly iotfleethub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotjobsdataplane AwsProvider#iotjobsdataplane}
  */
  readonly iotjobsdataplane?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsecuretunneling AwsProvider#iotsecuretunneling}
  */
  readonly iotsecuretunneling?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotsitewise AwsProvider#iotsitewise}
  */
  readonly iotsitewise?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotthingsgraph AwsProvider#iotthingsgraph}
  */
  readonly iotthingsgraph?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#iotwireless AwsProvider#iotwireless}
  */
  readonly iotwireless?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafka AwsProvider#kafka}
  */
  readonly kafka?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kafkaconnect AwsProvider#kafkaconnect}
  */
  readonly kafkaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kendra AwsProvider#kendra}
  */
  readonly kendra?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesis AwsProvider#kinesis}
  */
  readonly kinesis?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalytics AwsProvider#kinesisanalytics}
  */
  readonly kinesisanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisanalyticsv2 AwsProvider#kinesisanalyticsv2}
  */
  readonly kinesisanalyticsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideo AwsProvider#kinesisvideo}
  */
  readonly kinesisvideo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideoarchivedmedia AwsProvider#kinesisvideoarchivedmedia}
  */
  readonly kinesisvideoarchivedmedia?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideomedia AwsProvider#kinesisvideomedia}
  */
  readonly kinesisvideomedia?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kinesisvideosignalingchannels AwsProvider#kinesisvideosignalingchannels}
  */
  readonly kinesisvideosignalingchannels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#kms AwsProvider#kms}
  */
  readonly kms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lakeformation AwsProvider#lakeformation}
  */
  readonly lakeformation?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lambda AwsProvider#lambda}
  */
  readonly lambda?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuilding AwsProvider#lexmodelbuilding}
  */
  readonly lexmodelbuilding?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelbuildingservice AwsProvider#lexmodelbuildingservice}
  */
  readonly lexmodelbuildingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodels AwsProvider#lexmodels}
  */
  readonly lexmodels?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexmodelsv2 AwsProvider#lexmodelsv2}
  */
  readonly lexmodelsv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntime AwsProvider#lexruntime}
  */
  readonly lexruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimeservice AwsProvider#lexruntimeservice}
  */
  readonly lexruntimeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lexruntimev2 AwsProvider#lexruntimev2}
  */
  readonly lexruntimev2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#licensemanager AwsProvider#licensemanager}
  */
  readonly licensemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lightsail AwsProvider#lightsail}
  */
  readonly lightsail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#location AwsProvider#location}
  */
  readonly location?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutequipment AwsProvider#lookoutequipment}
  */
  readonly lookoutequipment?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutforvision AwsProvider#lookoutforvision}
  */
  readonly lookoutforvision?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#lookoutmetrics AwsProvider#lookoutmetrics}
  */
  readonly lookoutmetrics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#machinelearning AwsProvider#machinelearning}
  */
  readonly machinelearning?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie AwsProvider#macie}
  */
  readonly macie?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#macie2 AwsProvider#macie2}
  */
  readonly macie2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#managedblockchain AwsProvider#managedblockchain}
  */
  readonly managedblockchain?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecatalog AwsProvider#marketplacecatalog}
  */
  readonly marketplacecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacecommerceanalytics AwsProvider#marketplacecommerceanalytics}
  */
  readonly marketplacecommerceanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlement AwsProvider#marketplaceentitlement}
  */
  readonly marketplaceentitlement?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplaceentitlementservice AwsProvider#marketplaceentitlementservice}
  */
  readonly marketplaceentitlementservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#marketplacemetering AwsProvider#marketplacemetering}
  */
  readonly marketplacemetering?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconnect AwsProvider#mediaconnect}
  */
  readonly mediaconnect?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediaconvert AwsProvider#mediaconvert}
  */
  readonly mediaconvert?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#medialive AwsProvider#medialive}
  */
  readonly medialive?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackage AwsProvider#mediapackage}
  */
  readonly mediapackage?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediapackagevod AwsProvider#mediapackagevod}
  */
  readonly mediapackagevod?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastore AwsProvider#mediastore}
  */
  readonly mediastore?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediastoredata AwsProvider#mediastoredata}
  */
  readonly mediastoredata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mediatailor AwsProvider#mediatailor}
  */
  readonly mediatailor?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#memorydb AwsProvider#memorydb}
  */
  readonly memorydb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mgn AwsProvider#mgn}
  */
  readonly mgn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhub AwsProvider#migrationhub}
  */
  readonly migrationhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#migrationhubconfig AwsProvider#migrationhubconfig}
  */
  readonly migrationhubconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobile AwsProvider#mobile}
  */
  readonly mobile?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mobileanalytics AwsProvider#mobileanalytics}
  */
  readonly mobileanalytics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mq AwsProvider#mq}
  */
  readonly mq?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mturk AwsProvider#mturk}
  */
  readonly mturk?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#mwaa AwsProvider#mwaa}
  */
  readonly mwaa?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#neptune AwsProvider#neptune}
  */
  readonly neptune?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkfirewall AwsProvider#networkfirewall}
  */
  readonly networkfirewall?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#networkmanager AwsProvider#networkmanager}
  */
  readonly networkmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#nimblestudio AwsProvider#nimblestudio}
  */
  readonly nimblestudio?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworks AwsProvider#opsworks}
  */
  readonly opsworks?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#opsworkscm AwsProvider#opsworkscm}
  */
  readonly opsworkscm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#organizations AwsProvider#organizations}
  */
  readonly organizations?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#outposts AwsProvider#outposts}
  */
  readonly outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalize AwsProvider#personalize}
  */
  readonly personalize?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeevents AwsProvider#personalizeevents}
  */
  readonly personalizeevents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#personalizeruntime AwsProvider#personalizeruntime}
  */
  readonly personalizeruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pi AwsProvider#pi}
  */
  readonly pi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpoint AwsProvider#pinpoint}
  */
  readonly pinpoint?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointemail AwsProvider#pinpointemail}
  */
  readonly pinpointemail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pinpointsmsvoice AwsProvider#pinpointsmsvoice}
  */
  readonly pinpointsmsvoice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#polly AwsProvider#polly}
  */
  readonly polly?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#pricing AwsProvider#pricing}
  */
  readonly pricing?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheus AwsProvider#prometheus}
  */
  readonly prometheus?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#prometheusservice AwsProvider#prometheusservice}
  */
  readonly prometheusservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#proton AwsProvider#proton}
  */
  readonly proton?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldb AwsProvider#qldb}
  */
  readonly qldb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#qldbsession AwsProvider#qldbsession}
  */
  readonly qldbsession?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#quicksight AwsProvider#quicksight}
  */
  readonly quicksight?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ram AwsProvider#ram}
  */
  readonly ram?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rds AwsProvider#rds}
  */
  readonly rds?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdata AwsProvider#rdsdata}
  */
  readonly rdsdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rdsdataservice AwsProvider#rdsdataservice}
  */
  readonly rdsdataservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshift AwsProvider#redshift}
  */
  readonly redshift?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#redshiftdata AwsProvider#redshiftdata}
  */
  readonly redshiftdata?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#rekognition AwsProvider#rekognition}
  */
  readonly rekognition?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroups AwsProvider#resourcegroups}
  */
  readonly resourcegroups?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstagging AwsProvider#resourcegroupstagging}
  */
  readonly resourcegroupstagging?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#resourcegroupstaggingapi AwsProvider#resourcegroupstaggingapi}
  */
  readonly resourcegroupstaggingapi?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#robomaker AwsProvider#robomaker}
  */
  readonly robomaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53 AwsProvider#route53}
  */
  readonly route53?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53domains AwsProvider#route53domains}
  */
  readonly route53Domains?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoverycontrolconfig AwsProvider#route53recoverycontrolconfig}
  */
  readonly route53Recoverycontrolconfig?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53recoveryreadiness AwsProvider#route53recoveryreadiness}
  */
  readonly route53Recoveryreadiness?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#route53resolver AwsProvider#route53resolver}
  */
  readonly route53Resolver?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3 AwsProvider#s3}
  */
  readonly s3?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3control AwsProvider#s3control}
  */
  readonly s3Control?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#s3outposts AwsProvider#s3outposts}
  */
  readonly s3Outposts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemaker AwsProvider#sagemaker}
  */
  readonly sagemaker?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakeredgemanager AwsProvider#sagemakeredgemanager}
  */
  readonly sagemakeredgemanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerfeaturestoreruntime AwsProvider#sagemakerfeaturestoreruntime}
  */
  readonly sagemakerfeaturestoreruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sagemakerruntime AwsProvider#sagemakerruntime}
  */
  readonly sagemakerruntime?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#savingsplans AwsProvider#savingsplans}
  */
  readonly savingsplans?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#schemas AwsProvider#schemas}
  */
  readonly schemas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sdb AwsProvider#sdb}
  */
  readonly sdb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#secretsmanager AwsProvider#secretsmanager}
  */
  readonly secretsmanager?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#securityhub AwsProvider#securityhub}
  */
  readonly securityhub?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapplicationrepository AwsProvider#serverlessapplicationrepository}
  */
  readonly serverlessapplicationrepository?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessapprepo AwsProvider#serverlessapprepo}
  */
  readonly serverlessapprepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#serverlessrepo AwsProvider#serverlessrepo}
  */
  readonly serverlessrepo?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicecatalog AwsProvider#servicecatalog}
  */
  readonly servicecatalog?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicediscovery AwsProvider#servicediscovery}
  */
  readonly servicediscovery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#servicequotas AwsProvider#servicequotas}
  */
  readonly servicequotas?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ses AwsProvider#ses}
  */
  readonly ses?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sesv2 AwsProvider#sesv2}
  */
  readonly sesv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sfn AwsProvider#sfn}
  */
  readonly sfn?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#shield AwsProvider#shield}
  */
  readonly shield?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#signer AwsProvider#signer}
  */
  readonly signer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#simpledb AwsProvider#simpledb}
  */
  readonly simpledb?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sms AwsProvider#sms}
  */
  readonly sms?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#snowball AwsProvider#snowball}
  */
  readonly snowball?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sns AwsProvider#sns}
  */
  readonly sns?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sqs AwsProvider#sqs}
  */
  readonly sqs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssm AwsProvider#ssm}
  */
  readonly ssm?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmcontacts AwsProvider#ssmcontacts}
  */
  readonly ssmcontacts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssmincidents AwsProvider#ssmincidents}
  */
  readonly ssmincidents?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sso AwsProvider#sso}
  */
  readonly sso?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssoadmin AwsProvider#ssoadmin}
  */
  readonly ssoadmin?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#ssooidc AwsProvider#ssooidc}
  */
  readonly ssooidc?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#stepfunctions AwsProvider#stepfunctions}
  */
  readonly stepfunctions?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#storagegateway AwsProvider#storagegateway}
  */
  readonly storagegateway?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#sts AwsProvider#sts}
  */
  readonly sts?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#support AwsProvider#support}
  */
  readonly support?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#swf AwsProvider#swf}
  */
  readonly swf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#synthetics AwsProvider#synthetics}
  */
  readonly synthetics?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#textract AwsProvider#textract}
  */
  readonly textract?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamquery AwsProvider#timestreamquery}
  */
  readonly timestreamquery?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#timestreamwrite AwsProvider#timestreamwrite}
  */
  readonly timestreamwrite?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribe AwsProvider#transcribe}
  */
  readonly transcribe?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribeservice AwsProvider#transcribeservice}
  */
  readonly transcribeservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreaming AwsProvider#transcribestreaming}
  */
  readonly transcribestreaming?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transcribestreamingservice AwsProvider#transcribestreamingservice}
  */
  readonly transcribestreamingservice?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#transfer AwsProvider#transfer}
  */
  readonly transfer?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#translate AwsProvider#translate}
  */
  readonly translate?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#waf AwsProvider#waf}
  */
  readonly waf?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafregional AwsProvider#wafregional}
  */
  readonly wafregional?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wafv2 AwsProvider#wafv2}
  */
  readonly wafv2?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#wellarchitected AwsProvider#wellarchitected}
  */
  readonly wellarchitected?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workdocs AwsProvider#workdocs}
  */
  readonly workdocs?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#worklink AwsProvider#worklink}
  */
  readonly worklink?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmail AwsProvider#workmail}
  */
  readonly workmail?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workmailmessageflow AwsProvider#workmailmessageflow}
  */
  readonly workmailmessageflow?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#workspaces AwsProvider#workspaces}
  */
  readonly workspaces?: string;
  /**
  * Use this to override the default service endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#xray AwsProvider#xray}
  */
  readonly xray?: string;
}

export function awsProviderEndpointsToTerraform(struct?: AwsProviderEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accessanalyzer: cdktf.stringToTerraform(struct!.accessanalyzer),
    account: cdktf.stringToTerraform(struct!.account),
    acm: cdktf.stringToTerraform(struct!.acm),
    acmpca: cdktf.stringToTerraform(struct!.acmpca),
    alexaforbusiness: cdktf.stringToTerraform(struct!.alexaforbusiness),
    amp: cdktf.stringToTerraform(struct!.amp),
    amplify: cdktf.stringToTerraform(struct!.amplify),
    amplifybackend: cdktf.stringToTerraform(struct!.amplifybackend),
    apigateway: cdktf.stringToTerraform(struct!.apigateway),
    apigatewayv2: cdktf.stringToTerraform(struct!.apigatewayv2),
    appautoscaling: cdktf.stringToTerraform(struct!.appautoscaling),
    appconfig: cdktf.stringToTerraform(struct!.appconfig),
    appflow: cdktf.stringToTerraform(struct!.appflow),
    appintegrations: cdktf.stringToTerraform(struct!.appintegrations),
    appintegrationsservice: cdktf.stringToTerraform(struct!.appintegrationsservice),
    applicationautoscaling: cdktf.stringToTerraform(struct!.applicationautoscaling),
    applicationcostprofiler: cdktf.stringToTerraform(struct!.applicationcostprofiler),
    applicationdiscovery: cdktf.stringToTerraform(struct!.applicationdiscovery),
    applicationdiscoveryservice: cdktf.stringToTerraform(struct!.applicationdiscoveryservice),
    applicationinsights: cdktf.stringToTerraform(struct!.applicationinsights),
    appmesh: cdktf.stringToTerraform(struct!.appmesh),
    appregistry: cdktf.stringToTerraform(struct!.appregistry),
    apprunner: cdktf.stringToTerraform(struct!.apprunner),
    appstream: cdktf.stringToTerraform(struct!.appstream),
    appsync: cdktf.stringToTerraform(struct!.appsync),
    athena: cdktf.stringToTerraform(struct!.athena),
    auditmanager: cdktf.stringToTerraform(struct!.auditmanager),
    augmentedairuntime: cdktf.stringToTerraform(struct!.augmentedairuntime),
    autoscaling: cdktf.stringToTerraform(struct!.autoscaling),
    autoscalingplans: cdktf.stringToTerraform(struct!.autoscalingplans),
    backup: cdktf.stringToTerraform(struct!.backup),
    batch: cdktf.stringToTerraform(struct!.batch),
    braket: cdktf.stringToTerraform(struct!.braket),
    budgets: cdktf.stringToTerraform(struct!.budgets),
    chime: cdktf.stringToTerraform(struct!.chime),
    cloud9: cdktf.stringToTerraform(struct!.cloud9),
    cloudcontrol: cdktf.stringToTerraform(struct!.cloudcontrol),
    cloudcontrolapi: cdktf.stringToTerraform(struct!.cloudcontrolapi),
    clouddirectory: cdktf.stringToTerraform(struct!.clouddirectory),
    cloudformation: cdktf.stringToTerraform(struct!.cloudformation),
    cloudfront: cdktf.stringToTerraform(struct!.cloudfront),
    cloudhsm: cdktf.stringToTerraform(struct!.cloudhsm),
    cloudhsmv2: cdktf.stringToTerraform(struct!.cloudhsmv2),
    cloudsearch: cdktf.stringToTerraform(struct!.cloudsearch),
    cloudsearchdomain: cdktf.stringToTerraform(struct!.cloudsearchdomain),
    cloudtrail: cdktf.stringToTerraform(struct!.cloudtrail),
    cloudwatch: cdktf.stringToTerraform(struct!.cloudwatch),
    cloudwatchevents: cdktf.stringToTerraform(struct!.cloudwatchevents),
    cloudwatchlogs: cdktf.stringToTerraform(struct!.cloudwatchlogs),
    codeartifact: cdktf.stringToTerraform(struct!.codeartifact),
    codebuild: cdktf.stringToTerraform(struct!.codebuild),
    codecommit: cdktf.stringToTerraform(struct!.codecommit),
    codedeploy: cdktf.stringToTerraform(struct!.codedeploy),
    codeguruprofiler: cdktf.stringToTerraform(struct!.codeguruprofiler),
    codegurureviewer: cdktf.stringToTerraform(struct!.codegurureviewer),
    codepipeline: cdktf.stringToTerraform(struct!.codepipeline),
    codestar: cdktf.stringToTerraform(struct!.codestar),
    codestarconnections: cdktf.stringToTerraform(struct!.codestarconnections),
    codestarnotifications: cdktf.stringToTerraform(struct!.codestarnotifications),
    cognitoidentity: cdktf.stringToTerraform(struct!.cognitoidentity),
    cognitoidentityprovider: cdktf.stringToTerraform(struct!.cognitoidentityprovider),
    cognitoidp: cdktf.stringToTerraform(struct!.cognitoidp),
    cognitosync: cdktf.stringToTerraform(struct!.cognitosync),
    comprehend: cdktf.stringToTerraform(struct!.comprehend),
    comprehendmedical: cdktf.stringToTerraform(struct!.comprehendmedical),
    config: cdktf.stringToTerraform(struct!.config),
    configservice: cdktf.stringToTerraform(struct!.configservice),
    connect: cdktf.stringToTerraform(struct!.connect),
    connectcontactlens: cdktf.stringToTerraform(struct!.connectcontactlens),
    connectparticipant: cdktf.stringToTerraform(struct!.connectparticipant),
    costandusagereportservice: cdktf.stringToTerraform(struct!.costandusagereportservice),
    costexplorer: cdktf.stringToTerraform(struct!.costexplorer),
    cur: cdktf.stringToTerraform(struct!.cur),
    databasemigration: cdktf.stringToTerraform(struct!.databasemigration),
    databasemigrationservice: cdktf.stringToTerraform(struct!.databasemigrationservice),
    dataexchange: cdktf.stringToTerraform(struct!.dataexchange),
    datapipeline: cdktf.stringToTerraform(struct!.datapipeline),
    datasync: cdktf.stringToTerraform(struct!.datasync),
    dax: cdktf.stringToTerraform(struct!.dax),
    detective: cdktf.stringToTerraform(struct!.detective),
    devicefarm: cdktf.stringToTerraform(struct!.devicefarm),
    devopsguru: cdktf.stringToTerraform(struct!.devopsguru),
    directconnect: cdktf.stringToTerraform(struct!.directconnect),
    dlm: cdktf.stringToTerraform(struct!.dlm),
    dms: cdktf.stringToTerraform(struct!.dms),
    docdb: cdktf.stringToTerraform(struct!.docdb),
    ds: cdktf.stringToTerraform(struct!.ds),
    dynamodb: cdktf.stringToTerraform(struct!.dynamodb),
    dynamodbstreams: cdktf.stringToTerraform(struct!.dynamodbstreams),
    ec2: cdktf.stringToTerraform(struct!.ec2),
    ec2instanceconnect: cdktf.stringToTerraform(struct!.ec2Instanceconnect),
    ecr: cdktf.stringToTerraform(struct!.ecr),
    ecrpublic: cdktf.stringToTerraform(struct!.ecrpublic),
    ecs: cdktf.stringToTerraform(struct!.ecs),
    efs: cdktf.stringToTerraform(struct!.efs),
    eks: cdktf.stringToTerraform(struct!.eks),
    elasticache: cdktf.stringToTerraform(struct!.elasticache),
    elasticbeanstalk: cdktf.stringToTerraform(struct!.elasticbeanstalk),
    elasticinference: cdktf.stringToTerraform(struct!.elasticinference),
    elasticsearch: cdktf.stringToTerraform(struct!.elasticsearch),
    elasticsearchservice: cdktf.stringToTerraform(struct!.elasticsearchservice),
    elastictranscoder: cdktf.stringToTerraform(struct!.elastictranscoder),
    elb: cdktf.stringToTerraform(struct!.elb),
    elbv2: cdktf.stringToTerraform(struct!.elbv2),
    emr: cdktf.stringToTerraform(struct!.emr),
    emrcontainers: cdktf.stringToTerraform(struct!.emrcontainers),
    es: cdktf.stringToTerraform(struct!.es),
    eventbridge: cdktf.stringToTerraform(struct!.eventbridge),
    events: cdktf.stringToTerraform(struct!.events),
    finspace: cdktf.stringToTerraform(struct!.finspace),
    finspacedata: cdktf.stringToTerraform(struct!.finspacedata),
    firehose: cdktf.stringToTerraform(struct!.firehose),
    fis: cdktf.stringToTerraform(struct!.fis),
    fms: cdktf.stringToTerraform(struct!.fms),
    forecast: cdktf.stringToTerraform(struct!.forecast),
    forecastquery: cdktf.stringToTerraform(struct!.forecastquery),
    forecastqueryservice: cdktf.stringToTerraform(struct!.forecastqueryservice),
    forecastservice: cdktf.stringToTerraform(struct!.forecastservice),
    frauddetector: cdktf.stringToTerraform(struct!.frauddetector),
    fsx: cdktf.stringToTerraform(struct!.fsx),
    gamelift: cdktf.stringToTerraform(struct!.gamelift),
    glacier: cdktf.stringToTerraform(struct!.glacier),
    globalaccelerator: cdktf.stringToTerraform(struct!.globalaccelerator),
    glue: cdktf.stringToTerraform(struct!.glue),
    gluedatabrew: cdktf.stringToTerraform(struct!.gluedatabrew),
    greengrass: cdktf.stringToTerraform(struct!.greengrass),
    greengrassv2: cdktf.stringToTerraform(struct!.greengrassv2),
    groundstation: cdktf.stringToTerraform(struct!.groundstation),
    guardduty: cdktf.stringToTerraform(struct!.guardduty),
    health: cdktf.stringToTerraform(struct!.health),
    healthlake: cdktf.stringToTerraform(struct!.healthlake),
    honeycode: cdktf.stringToTerraform(struct!.honeycode),
    iam: cdktf.stringToTerraform(struct!.iam),
    identitystore: cdktf.stringToTerraform(struct!.identitystore),
    imagebuilder: cdktf.stringToTerraform(struct!.imagebuilder),
    inspector: cdktf.stringToTerraform(struct!.inspector),
    iot: cdktf.stringToTerraform(struct!.iot),
    iot1clickdevices: cdktf.stringToTerraform(struct!.iot1Clickdevices),
    iot1clickdevicesservice: cdktf.stringToTerraform(struct!.iot1Clickdevicesservice),
    iot1clickprojects: cdktf.stringToTerraform(struct!.iot1Clickprojects),
    iotanalytics: cdktf.stringToTerraform(struct!.iotanalytics),
    iotdataplane: cdktf.stringToTerraform(struct!.iotdataplane),
    iotdeviceadvisor: cdktf.stringToTerraform(struct!.iotdeviceadvisor),
    iotevents: cdktf.stringToTerraform(struct!.iotevents),
    ioteventsdata: cdktf.stringToTerraform(struct!.ioteventsdata),
    iotfleethub: cdktf.stringToTerraform(struct!.iotfleethub),
    iotjobsdataplane: cdktf.stringToTerraform(struct!.iotjobsdataplane),
    iotsecuretunneling: cdktf.stringToTerraform(struct!.iotsecuretunneling),
    iotsitewise: cdktf.stringToTerraform(struct!.iotsitewise),
    iotthingsgraph: cdktf.stringToTerraform(struct!.iotthingsgraph),
    iotwireless: cdktf.stringToTerraform(struct!.iotwireless),
    kafka: cdktf.stringToTerraform(struct!.kafka),
    kafkaconnect: cdktf.stringToTerraform(struct!.kafkaconnect),
    kendra: cdktf.stringToTerraform(struct!.kendra),
    kinesis: cdktf.stringToTerraform(struct!.kinesis),
    kinesisanalytics: cdktf.stringToTerraform(struct!.kinesisanalytics),
    kinesisanalyticsv2: cdktf.stringToTerraform(struct!.kinesisanalyticsv2),
    kinesisvideo: cdktf.stringToTerraform(struct!.kinesisvideo),
    kinesisvideoarchivedmedia: cdktf.stringToTerraform(struct!.kinesisvideoarchivedmedia),
    kinesisvideomedia: cdktf.stringToTerraform(struct!.kinesisvideomedia),
    kinesisvideosignalingchannels: cdktf.stringToTerraform(struct!.kinesisvideosignalingchannels),
    kms: cdktf.stringToTerraform(struct!.kms),
    lakeformation: cdktf.stringToTerraform(struct!.lakeformation),
    lambda: cdktf.stringToTerraform(struct!.lambda),
    lexmodelbuilding: cdktf.stringToTerraform(struct!.lexmodelbuilding),
    lexmodelbuildingservice: cdktf.stringToTerraform(struct!.lexmodelbuildingservice),
    lexmodels: cdktf.stringToTerraform(struct!.lexmodels),
    lexmodelsv2: cdktf.stringToTerraform(struct!.lexmodelsv2),
    lexruntime: cdktf.stringToTerraform(struct!.lexruntime),
    lexruntimeservice: cdktf.stringToTerraform(struct!.lexruntimeservice),
    lexruntimev2: cdktf.stringToTerraform(struct!.lexruntimev2),
    licensemanager: cdktf.stringToTerraform(struct!.licensemanager),
    lightsail: cdktf.stringToTerraform(struct!.lightsail),
    location: cdktf.stringToTerraform(struct!.location),
    lookoutequipment: cdktf.stringToTerraform(struct!.lookoutequipment),
    lookoutforvision: cdktf.stringToTerraform(struct!.lookoutforvision),
    lookoutmetrics: cdktf.stringToTerraform(struct!.lookoutmetrics),
    machinelearning: cdktf.stringToTerraform(struct!.machinelearning),
    macie: cdktf.stringToTerraform(struct!.macie),
    macie2: cdktf.stringToTerraform(struct!.macie2),
    managedblockchain: cdktf.stringToTerraform(struct!.managedblockchain),
    marketplacecatalog: cdktf.stringToTerraform(struct!.marketplacecatalog),
    marketplacecommerceanalytics: cdktf.stringToTerraform(struct!.marketplacecommerceanalytics),
    marketplaceentitlement: cdktf.stringToTerraform(struct!.marketplaceentitlement),
    marketplaceentitlementservice: cdktf.stringToTerraform(struct!.marketplaceentitlementservice),
    marketplacemetering: cdktf.stringToTerraform(struct!.marketplacemetering),
    mediaconnect: cdktf.stringToTerraform(struct!.mediaconnect),
    mediaconvert: cdktf.stringToTerraform(struct!.mediaconvert),
    medialive: cdktf.stringToTerraform(struct!.medialive),
    mediapackage: cdktf.stringToTerraform(struct!.mediapackage),
    mediapackagevod: cdktf.stringToTerraform(struct!.mediapackagevod),
    mediastore: cdktf.stringToTerraform(struct!.mediastore),
    mediastoredata: cdktf.stringToTerraform(struct!.mediastoredata),
    mediatailor: cdktf.stringToTerraform(struct!.mediatailor),
    memorydb: cdktf.stringToTerraform(struct!.memorydb),
    mgn: cdktf.stringToTerraform(struct!.mgn),
    migrationhub: cdktf.stringToTerraform(struct!.migrationhub),
    migrationhubconfig: cdktf.stringToTerraform(struct!.migrationhubconfig),
    mobile: cdktf.stringToTerraform(struct!.mobile),
    mobileanalytics: cdktf.stringToTerraform(struct!.mobileanalytics),
    mq: cdktf.stringToTerraform(struct!.mq),
    mturk: cdktf.stringToTerraform(struct!.mturk),
    mwaa: cdktf.stringToTerraform(struct!.mwaa),
    neptune: cdktf.stringToTerraform(struct!.neptune),
    networkfirewall: cdktf.stringToTerraform(struct!.networkfirewall),
    networkmanager: cdktf.stringToTerraform(struct!.networkmanager),
    nimblestudio: cdktf.stringToTerraform(struct!.nimblestudio),
    opsworks: cdktf.stringToTerraform(struct!.opsworks),
    opsworkscm: cdktf.stringToTerraform(struct!.opsworkscm),
    organizations: cdktf.stringToTerraform(struct!.organizations),
    outposts: cdktf.stringToTerraform(struct!.outposts),
    personalize: cdktf.stringToTerraform(struct!.personalize),
    personalizeevents: cdktf.stringToTerraform(struct!.personalizeevents),
    personalizeruntime: cdktf.stringToTerraform(struct!.personalizeruntime),
    pi: cdktf.stringToTerraform(struct!.pi),
    pinpoint: cdktf.stringToTerraform(struct!.pinpoint),
    pinpointemail: cdktf.stringToTerraform(struct!.pinpointemail),
    pinpointsmsvoice: cdktf.stringToTerraform(struct!.pinpointsmsvoice),
    polly: cdktf.stringToTerraform(struct!.polly),
    pricing: cdktf.stringToTerraform(struct!.pricing),
    prometheus: cdktf.stringToTerraform(struct!.prometheus),
    prometheusservice: cdktf.stringToTerraform(struct!.prometheusservice),
    proton: cdktf.stringToTerraform(struct!.proton),
    qldb: cdktf.stringToTerraform(struct!.qldb),
    qldbsession: cdktf.stringToTerraform(struct!.qldbsession),
    quicksight: cdktf.stringToTerraform(struct!.quicksight),
    ram: cdktf.stringToTerraform(struct!.ram),
    rds: cdktf.stringToTerraform(struct!.rds),
    rdsdata: cdktf.stringToTerraform(struct!.rdsdata),
    rdsdataservice: cdktf.stringToTerraform(struct!.rdsdataservice),
    redshift: cdktf.stringToTerraform(struct!.redshift),
    redshiftdata: cdktf.stringToTerraform(struct!.redshiftdata),
    rekognition: cdktf.stringToTerraform(struct!.rekognition),
    resourcegroups: cdktf.stringToTerraform(struct!.resourcegroups),
    resourcegroupstagging: cdktf.stringToTerraform(struct!.resourcegroupstagging),
    resourcegroupstaggingapi: cdktf.stringToTerraform(struct!.resourcegroupstaggingapi),
    robomaker: cdktf.stringToTerraform(struct!.robomaker),
    route53: cdktf.stringToTerraform(struct!.route53),
    route53domains: cdktf.stringToTerraform(struct!.route53Domains),
    route53recoverycontrolconfig: cdktf.stringToTerraform(struct!.route53Recoverycontrolconfig),
    route53recoveryreadiness: cdktf.stringToTerraform(struct!.route53Recoveryreadiness),
    route53resolver: cdktf.stringToTerraform(struct!.route53Resolver),
    s3: cdktf.stringToTerraform(struct!.s3),
    s3control: cdktf.stringToTerraform(struct!.s3Control),
    s3outposts: cdktf.stringToTerraform(struct!.s3Outposts),
    sagemaker: cdktf.stringToTerraform(struct!.sagemaker),
    sagemakeredgemanager: cdktf.stringToTerraform(struct!.sagemakeredgemanager),
    sagemakerfeaturestoreruntime: cdktf.stringToTerraform(struct!.sagemakerfeaturestoreruntime),
    sagemakerruntime: cdktf.stringToTerraform(struct!.sagemakerruntime),
    savingsplans: cdktf.stringToTerraform(struct!.savingsplans),
    schemas: cdktf.stringToTerraform(struct!.schemas),
    sdb: cdktf.stringToTerraform(struct!.sdb),
    secretsmanager: cdktf.stringToTerraform(struct!.secretsmanager),
    securityhub: cdktf.stringToTerraform(struct!.securityhub),
    serverlessapplicationrepository: cdktf.stringToTerraform(struct!.serverlessapplicationrepository),
    serverlessapprepo: cdktf.stringToTerraform(struct!.serverlessapprepo),
    serverlessrepo: cdktf.stringToTerraform(struct!.serverlessrepo),
    servicecatalog: cdktf.stringToTerraform(struct!.servicecatalog),
    servicediscovery: cdktf.stringToTerraform(struct!.servicediscovery),
    servicequotas: cdktf.stringToTerraform(struct!.servicequotas),
    ses: cdktf.stringToTerraform(struct!.ses),
    sesv2: cdktf.stringToTerraform(struct!.sesv2),
    sfn: cdktf.stringToTerraform(struct!.sfn),
    shield: cdktf.stringToTerraform(struct!.shield),
    signer: cdktf.stringToTerraform(struct!.signer),
    simpledb: cdktf.stringToTerraform(struct!.simpledb),
    sms: cdktf.stringToTerraform(struct!.sms),
    snowball: cdktf.stringToTerraform(struct!.snowball),
    sns: cdktf.stringToTerraform(struct!.sns),
    sqs: cdktf.stringToTerraform(struct!.sqs),
    ssm: cdktf.stringToTerraform(struct!.ssm),
    ssmcontacts: cdktf.stringToTerraform(struct!.ssmcontacts),
    ssmincidents: cdktf.stringToTerraform(struct!.ssmincidents),
    sso: cdktf.stringToTerraform(struct!.sso),
    ssoadmin: cdktf.stringToTerraform(struct!.ssoadmin),
    ssooidc: cdktf.stringToTerraform(struct!.ssooidc),
    stepfunctions: cdktf.stringToTerraform(struct!.stepfunctions),
    storagegateway: cdktf.stringToTerraform(struct!.storagegateway),
    sts: cdktf.stringToTerraform(struct!.sts),
    support: cdktf.stringToTerraform(struct!.support),
    swf: cdktf.stringToTerraform(struct!.swf),
    synthetics: cdktf.stringToTerraform(struct!.synthetics),
    textract: cdktf.stringToTerraform(struct!.textract),
    timestreamquery: cdktf.stringToTerraform(struct!.timestreamquery),
    timestreamwrite: cdktf.stringToTerraform(struct!.timestreamwrite),
    transcribe: cdktf.stringToTerraform(struct!.transcribe),
    transcribeservice: cdktf.stringToTerraform(struct!.transcribeservice),
    transcribestreaming: cdktf.stringToTerraform(struct!.transcribestreaming),
    transcribestreamingservice: cdktf.stringToTerraform(struct!.transcribestreamingservice),
    transfer: cdktf.stringToTerraform(struct!.transfer),
    translate: cdktf.stringToTerraform(struct!.translate),
    waf: cdktf.stringToTerraform(struct!.waf),
    wafregional: cdktf.stringToTerraform(struct!.wafregional),
    wafv2: cdktf.stringToTerraform(struct!.wafv2),
    wellarchitected: cdktf.stringToTerraform(struct!.wellarchitected),
    workdocs: cdktf.stringToTerraform(struct!.workdocs),
    worklink: cdktf.stringToTerraform(struct!.worklink),
    workmail: cdktf.stringToTerraform(struct!.workmail),
    workmailmessageflow: cdktf.stringToTerraform(struct!.workmailmessageflow),
    workspaces: cdktf.stringToTerraform(struct!.workspaces),
    xray: cdktf.stringToTerraform(struct!.xray),
  }
}

export interface AwsProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#key_prefixes AwsProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs#keys AwsProvider#keys}
  */
  readonly keys?: string[];
}

export function awsProviderIgnoreTagsToTerraform(struct?: AwsProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws}
*/
export class AwsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs aws} Resource
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
        providerVersion: '3.76.1',
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
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // allowed_account_ids - computed: false, optional: true, required: false
  private _allowedAccountIds?: string[]; 
  public get allowedAccountIds() {
    return this._allowedAccountIds;
  }
  public set allowedAccountIds(value: string[] | undefined) {
    this._allowedAccountIds = value;
  }
  public resetAllowedAccountIds() {
    this._allowedAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAccountIdsInput() {
    return this._allowedAccountIds;
  }

  // forbidden_account_ids - computed: false, optional: true, required: false
  private _forbiddenAccountIds?: string[]; 
  public get forbiddenAccountIds() {
    return this._forbiddenAccountIds;
  }
  public set forbiddenAccountIds(value: string[] | undefined) {
    this._forbiddenAccountIds = value;
  }
  public resetForbiddenAccountIds() {
    this._forbiddenAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAccountIdsInput() {
    return this._forbiddenAccountIds;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this._s3ForcePathStyle;
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable | undefined) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string; 
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile;
  }

  // skip_credentials_validation - computed: false, optional: true, required: false
  private _skipCredentialsValidation?: boolean | cdktf.IResolvable; 
  public get skipCredentialsValidation() {
    return this._skipCredentialsValidation;
  }
  public set skipCredentialsValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipCredentialsValidation = value;
  }
  public resetSkipCredentialsValidation() {
    this._skipCredentialsValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCredentialsValidationInput() {
    return this._skipCredentialsValidation;
  }

  // skip_get_ec2_platforms - computed: false, optional: true, required: false
  private _skipGetEc2Platforms?: boolean | cdktf.IResolvable; 
  public get skipGetEc2Platforms() {
    return this._skipGetEc2Platforms;
  }
  public set skipGetEc2Platforms(value: boolean | cdktf.IResolvable | undefined) {
    this._skipGetEc2Platforms = value;
  }
  public resetSkipGetEc2Platforms() {
    this._skipGetEc2Platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGetEc2PlatformsInput() {
    return this._skipGetEc2Platforms;
  }

  // skip_metadata_api_check - computed: false, optional: true, required: false
  private _skipMetadataApiCheck?: boolean | cdktf.IResolvable; 
  public get skipMetadataApiCheck() {
    return this._skipMetadataApiCheck;
  }
  public set skipMetadataApiCheck(value: boolean | cdktf.IResolvable | undefined) {
    this._skipMetadataApiCheck = value;
  }
  public resetSkipMetadataApiCheck() {
    this._skipMetadataApiCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMetadataApiCheckInput() {
    return this._skipMetadataApiCheck;
  }

  // skip_region_validation - computed: false, optional: true, required: false
  private _skipRegionValidation?: boolean | cdktf.IResolvable; 
  public get skipRegionValidation() {
    return this._skipRegionValidation;
  }
  public set skipRegionValidation(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRegionValidation = value;
  }
  public resetSkipRegionValidation() {
    this._skipRegionValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegionValidationInput() {
    return this._skipRegionValidation;
  }

  // skip_requesting_account_id - computed: false, optional: true, required: false
  private _skipRequestingAccountId?: boolean | cdktf.IResolvable; 
  public get skipRequestingAccountId() {
    return this._skipRequestingAccountId;
  }
  public set skipRequestingAccountId(value: boolean | cdktf.IResolvable | undefined) {
    this._skipRequestingAccountId = value;
  }
  public resetSkipRequestingAccountId() {
    this._skipRequestingAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRequestingAccountIdInput() {
    return this._skipRequestingAccountId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: AwsProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AwsProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AwsProviderDefaultTags; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AwsProviderDefaultTags | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: AwsProviderEndpoints[] | cdktf.IResolvable; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: AwsProviderEndpoints[] | cdktf.IResolvable | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AwsProviderIgnoreTags; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AwsProviderIgnoreTags | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      allowed_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAccountIds),
      forbidden_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forbiddenAccountIds),
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
      endpoints: cdktf.listMapper(awsProviderEndpointsToTerraform, true)(this._endpoints),
      ignore_tags: awsProviderIgnoreTagsToTerraform(this._ignoreTags),
    };
  }
}
