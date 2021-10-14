// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeBuild
*/
export namespace CodeBuild {
  export interface CodebuildProjectConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#badge_enabled CodebuildProject#badge_enabled}
    */
    readonly badgeEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_timeout CodebuildProject#build_timeout}
    */
    readonly buildTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#concurrent_build_limit CodebuildProject#concurrent_build_limit}
    */
    readonly concurrentBuildLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#description CodebuildProject#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_key CodebuildProject#encryption_key}
    */
    readonly encryptionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#queued_timeout CodebuildProject#queued_timeout}
    */
    readonly queuedTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_version CodebuildProject#source_version}
    */
    readonly sourceVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags CodebuildProject#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#tags_all CodebuildProject#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * artifacts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifacts CodebuildProject#artifacts}
    */
    readonly artifacts: CodebuildProjectArtifacts[];
    /**
    * build_batch_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_batch_config CodebuildProject#build_batch_config}
    */
    readonly buildBatchConfig?: CodebuildProjectBuildBatchConfig[];
    /**
    * cache block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cache CodebuildProject#cache}
    */
    readonly cache?: CodebuildProjectCache[];
    /**
    * environment block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment CodebuildProject#environment}
    */
    readonly environment: CodebuildProjectEnvironment[];
    /**
    * file_system_locations block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#file_system_locations CodebuildProject#file_system_locations}
    */
    readonly fileSystemLocations?: CodebuildProjectFileSystemLocations[];
    /**
    * logs_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#logs_config CodebuildProject#logs_config}
    */
    readonly logsConfig?: CodebuildProjectLogsConfig[];
    /**
    * secondary_artifacts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_artifacts CodebuildProject#secondary_artifacts}
    */
    readonly secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
    /**
    * secondary_sources block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#secondary_sources CodebuildProject#secondary_sources}
    */
    readonly secondarySources?: CodebuildProjectSecondarySources[];
    /**
    * source block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source CodebuildProject#source}
    */
    readonly source: CodebuildProjectSource[];
    /**
    * vpc_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_config CodebuildProject#vpc_config}
    */
    readonly vpcConfig?: CodebuildProjectVpcConfig[];
  }
  export interface CodebuildProjectArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectArtifactsToTerraform(struct?: CodebuildProjectArtifacts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      name: cdktf.stringToTerraform(struct!.name),
      namespace_type: cdktf.stringToTerraform(struct!.namespaceType),
      override_artifact_name: cdktf.booleanToTerraform(struct!.overrideArtifactName),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectBuildBatchConfigRestrictions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_types_allowed CodebuildProject#compute_types_allowed}
    */
    readonly computeTypesAllowed?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}
    */
    readonly maximumBuildsAllowed?: number;
  }

  function codebuildProjectBuildBatchConfigRestrictionsToTerraform(struct?: CodebuildProjectBuildBatchConfigRestrictions): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      compute_types_allowed: cdktf.listMapper(cdktf.stringToTerraform)(struct!.computeTypesAllowed),
      maximum_builds_allowed: cdktf.numberToTerraform(struct!.maximumBuildsAllowed),
    }
  }

  export interface CodebuildProjectBuildBatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#combine_artifacts CodebuildProject#combine_artifacts}
    */
    readonly combineArtifacts?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#service_role CodebuildProject#service_role}
    */
    readonly serviceRole: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#timeout_in_mins CodebuildProject#timeout_in_mins}
    */
    readonly timeoutInMins?: number;
    /**
    * restrictions block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#restrictions CodebuildProject#restrictions}
    */
    readonly restrictions?: CodebuildProjectBuildBatchConfigRestrictions[];
  }

  function codebuildProjectBuildBatchConfigToTerraform(struct?: CodebuildProjectBuildBatchConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      combine_artifacts: cdktf.booleanToTerraform(struct!.combineArtifacts),
      service_role: cdktf.stringToTerraform(struct!.serviceRole),
      timeout_in_mins: cdktf.numberToTerraform(struct!.timeoutInMins),
      restrictions: cdktf.listMapper(codebuildProjectBuildBatchConfigRestrictionsToTerraform)(struct!.restrictions),
    }
  }

  export interface CodebuildProjectCache {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#modes CodebuildProject#modes}
    */
    readonly modes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
  }

  function codebuildProjectCacheToTerraform(struct?: CodebuildProjectCache): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      location: cdktf.stringToTerraform(struct!.location),
      modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectEnvironmentEnvironmentVariable {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#value CodebuildProject#value}
    */
    readonly value: string;
  }

  function codebuildProjectEnvironmentEnvironmentVariableToTerraform(struct?: CodebuildProjectEnvironmentEnvironmentVariable): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CodebuildProjectEnvironmentRegistryCredential {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential CodebuildProject#credential}
    */
    readonly credential: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#credential_provider CodebuildProject#credential_provider}
    */
    readonly credentialProvider: string;
  }

  function codebuildProjectEnvironmentRegistryCredentialToTerraform(struct?: CodebuildProjectEnvironmentRegistryCredential): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      credential: cdktf.stringToTerraform(struct!.credential),
      credential_provider: cdktf.stringToTerraform(struct!.credentialProvider),
    }
  }

  export interface CodebuildProjectEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#certificate CodebuildProject#certificate}
    */
    readonly certificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#compute_type CodebuildProject#compute_type}
    */
    readonly computeType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image CodebuildProject#image}
    */
    readonly image: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}
    */
    readonly imagePullCredentialsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#privileged_mode CodebuildProject#privileged_mode}
    */
    readonly privilegedMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * environment_variable block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#environment_variable CodebuildProject#environment_variable}
    */
    readonly environmentVariable?: CodebuildProjectEnvironmentEnvironmentVariable[];
    /**
    * registry_credential block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#registry_credential CodebuildProject#registry_credential}
    */
    readonly registryCredential?: CodebuildProjectEnvironmentRegistryCredential[];
  }

  function codebuildProjectEnvironmentToTerraform(struct?: CodebuildProjectEnvironment): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      certificate: cdktf.stringToTerraform(struct!.certificate),
      compute_type: cdktf.stringToTerraform(struct!.computeType),
      image: cdktf.stringToTerraform(struct!.image),
      image_pull_credentials_type: cdktf.stringToTerraform(struct!.imagePullCredentialsType),
      privileged_mode: cdktf.booleanToTerraform(struct!.privilegedMode),
      type: cdktf.stringToTerraform(struct!.type),
      environment_variable: cdktf.listMapper(codebuildProjectEnvironmentEnvironmentVariableToTerraform)(struct!.environmentVariable),
      registry_credential: cdktf.listMapper(codebuildProjectEnvironmentRegistryCredentialToTerraform)(struct!.registryCredential),
    }
  }

  export interface CodebuildProjectFileSystemLocations {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#identifier CodebuildProject#identifier}
    */
    readonly identifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_options CodebuildProject#mount_options}
    */
    readonly mountOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#mount_point CodebuildProject#mount_point}
    */
    readonly mountPoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type?: string;
  }

  function codebuildProjectFileSystemLocationsToTerraform(struct?: CodebuildProjectFileSystemLocations): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      identifier: cdktf.stringToTerraform(struct!.identifier),
      location: cdktf.stringToTerraform(struct!.location),
      mount_options: cdktf.stringToTerraform(struct!.mountOptions),
      mount_point: cdktf.stringToTerraform(struct!.mountPoint),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectLogsConfigCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#group_name CodebuildProject#group_name}
    */
    readonly groupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#stream_name CodebuildProject#stream_name}
    */
    readonly streamName?: string;
  }

  function codebuildProjectLogsConfigCloudwatchLogsToTerraform(struct?: CodebuildProjectLogsConfigCloudwatchLogs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      group_name: cdktf.stringToTerraform(struct!.groupName),
      status: cdktf.stringToTerraform(struct!.status),
      stream_name: cdktf.stringToTerraform(struct!.streamName),
    }
  }

  export interface CodebuildProjectLogsConfigS3Logs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#status CodebuildProject#status}
    */
    readonly status?: string;
  }

  function codebuildProjectLogsConfigS3LogsToTerraform(struct?: CodebuildProjectLogsConfigS3Logs): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      status: cdktf.stringToTerraform(struct!.status),
    }
  }

  export interface CodebuildProjectLogsConfig {
    /**
    * cloudwatch_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#cloudwatch_logs CodebuildProject#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CodebuildProjectLogsConfigCloudwatchLogs[];
    /**
    * s3_logs block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#s3_logs CodebuildProject#s3_logs}
    */
    readonly s3Logs?: CodebuildProjectLogsConfigS3Logs[];
  }

  function codebuildProjectLogsConfigToTerraform(struct?: CodebuildProjectLogsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cloudwatch_logs: cdktf.listMapper(codebuildProjectLogsConfigCloudwatchLogsToTerraform)(struct!.cloudwatchLogs),
      s3_logs: cdktf.listMapper(codebuildProjectLogsConfigS3LogsToTerraform)(struct!.s3Logs),
    }
  }

  export interface CodebuildProjectSecondaryArtifacts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#artifact_identifier CodebuildProject#artifact_identifier}
    */
    readonly artifactIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#encryption_disabled CodebuildProject#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#name CodebuildProject#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#namespace_type CodebuildProject#namespace_type}
    */
    readonly namespaceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#override_artifact_name CodebuildProject#override_artifact_name}
    */
    readonly overrideArtifactName?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#packaging CodebuildProject#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#path CodebuildProject#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSecondaryArtifactsToTerraform(struct?: CodebuildProjectSecondaryArtifacts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      artifact_identifier: cdktf.stringToTerraform(struct!.artifactIdentifier),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      location: cdktf.stringToTerraform(struct!.location),
      name: cdktf.stringToTerraform(struct!.name),
      namespace_type: cdktf.stringToTerraform(struct!.namespaceType),
      override_artifact_name: cdktf.booleanToTerraform(struct!.overrideArtifactName),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectSecondarySourcesAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSecondarySourcesAuthToTerraform(struct?: CodebuildProjectSecondarySourcesAuth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource: cdktf.stringToTerraform(struct!.resource),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectSecondarySourcesBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
  }

  function codebuildProjectSecondarySourcesBuildStatusConfigToTerraform(struct?: CodebuildProjectSecondarySourcesBuildStatusConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      context: cdktf.stringToTerraform(struct!.context),
      target_url: cdktf.stringToTerraform(struct!.targetUrl),
    }
  }

  export interface CodebuildProjectSecondarySourcesGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
  }

  function codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSecondarySourcesGitSubmodulesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
    }
  }

  export interface CodebuildProjectSecondarySources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#source_identifier CodebuildProject#source_identifier}
    */
    readonly sourceIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSecondarySourcesAuth[];
    /**
    * build_status_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSecondarySourcesBuildStatusConfig[];
    /**
    * git_submodules_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSecondarySourcesGitSubmodulesConfig[];
  }

  function codebuildProjectSecondarySourcesToTerraform(struct?: CodebuildProjectSecondarySources): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      buildspec: cdktf.stringToTerraform(struct!.buildspec),
      git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
      insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
      location: cdktf.stringToTerraform(struct!.location),
      report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
      source_identifier: cdktf.stringToTerraform(struct!.sourceIdentifier),
      type: cdktf.stringToTerraform(struct!.type),
      auth: cdktf.listMapper(codebuildProjectSecondarySourcesAuthToTerraform)(struct!.auth),
      build_status_config: cdktf.listMapper(codebuildProjectSecondarySourcesBuildStatusConfigToTerraform)(struct!.buildStatusConfig),
      git_submodules_config: cdktf.listMapper(codebuildProjectSecondarySourcesGitSubmodulesConfigToTerraform)(struct!.gitSubmodulesConfig),
    }
  }

  export interface CodebuildProjectSourceAuth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#resource CodebuildProject#resource}
    */
    readonly resource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
  }

  function codebuildProjectSourceAuthToTerraform(struct?: CodebuildProjectSourceAuth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      resource: cdktf.stringToTerraform(struct!.resource),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildProjectSourceBuildStatusConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#context CodebuildProject#context}
    */
    readonly context?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#target_url CodebuildProject#target_url}
    */
    readonly targetUrl?: string;
  }

  function codebuildProjectSourceBuildStatusConfigToTerraform(struct?: CodebuildProjectSourceBuildStatusConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      context: cdktf.stringToTerraform(struct!.context),
      target_url: cdktf.stringToTerraform(struct!.targetUrl),
    }
  }

  export interface CodebuildProjectSourceGitSubmodulesConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#fetch_submodules CodebuildProject#fetch_submodules}
    */
    readonly fetchSubmodules: boolean | cdktf.IResolvable;
  }

  function codebuildProjectSourceGitSubmodulesConfigToTerraform(struct?: CodebuildProjectSourceGitSubmodulesConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      fetch_submodules: cdktf.booleanToTerraform(struct!.fetchSubmodules),
    }
  }

  export interface CodebuildProjectSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#buildspec CodebuildProject#buildspec}
    */
    readonly buildspec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_clone_depth CodebuildProject#git_clone_depth}
    */
    readonly gitCloneDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#insecure_ssl CodebuildProject#insecure_ssl}
    */
    readonly insecureSsl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#location CodebuildProject#location}
    */
    readonly location?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#report_build_status CodebuildProject#report_build_status}
    */
    readonly reportBuildStatus?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#type CodebuildProject#type}
    */
    readonly type: string;
    /**
    * auth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#auth CodebuildProject#auth}
    */
    readonly auth?: CodebuildProjectSourceAuth[];
    /**
    * build_status_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#build_status_config CodebuildProject#build_status_config}
    */
    readonly buildStatusConfig?: CodebuildProjectSourceBuildStatusConfig[];
    /**
    * git_submodules_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#git_submodules_config CodebuildProject#git_submodules_config}
    */
    readonly gitSubmodulesConfig?: CodebuildProjectSourceGitSubmodulesConfig[];
  }

  function codebuildProjectSourceToTerraform(struct?: CodebuildProjectSource): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      buildspec: cdktf.stringToTerraform(struct!.buildspec),
      git_clone_depth: cdktf.numberToTerraform(struct!.gitCloneDepth),
      insecure_ssl: cdktf.booleanToTerraform(struct!.insecureSsl),
      location: cdktf.stringToTerraform(struct!.location),
      report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
      type: cdktf.stringToTerraform(struct!.type),
      auth: cdktf.listMapper(codebuildProjectSourceAuthToTerraform)(struct!.auth),
      build_status_config: cdktf.listMapper(codebuildProjectSourceBuildStatusConfigToTerraform)(struct!.buildStatusConfig),
      git_submodules_config: cdktf.listMapper(codebuildProjectSourceGitSubmodulesConfigToTerraform)(struct!.gitSubmodulesConfig),
    }
  }

  export interface CodebuildProjectVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#security_group_ids CodebuildProject#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#subnets CodebuildProject#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html#vpc_id CodebuildProject#vpc_id}
    */
    readonly vpcId: string;
  }

  function codebuildProjectVpcConfigToTerraform(struct?: CodebuildProjectVpcConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
      vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project}
  */
  export class CodebuildProject extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_project";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_project.html aws_codebuild_project} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildProjectConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildProjectConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_project',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._badgeEnabled = config.badgeEnabled;
      this._buildTimeout = config.buildTimeout;
      this._concurrentBuildLimit = config.concurrentBuildLimit;
      this._description = config.description;
      this._encryptionKey = config.encryptionKey;
      this._name = config.name;
      this._queuedTimeout = config.queuedTimeout;
      this._serviceRole = config.serviceRole;
      this._sourceVersion = config.sourceVersion;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._artifacts = config.artifacts;
      this._buildBatchConfig = config.buildBatchConfig;
      this._cache = config.cache;
      this._environment = config.environment;
      this._fileSystemLocations = config.fileSystemLocations;
      this._logsConfig = config.logsConfig;
      this._secondaryArtifacts = config.secondaryArtifacts;
      this._secondarySources = config.secondarySources;
      this._source = config.source;
      this._vpcConfig = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // badge_enabled - computed: false, optional: true, required: false
    private _badgeEnabled?: boolean | cdktf.IResolvable;
    public get badgeEnabled() {
      return this.getBooleanAttribute('badge_enabled');
    }
    public set badgeEnabled(value: boolean | cdktf.IResolvable ) {
      this._badgeEnabled = value;
    }
    public resetBadgeEnabled() {
      this._badgeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get badgeEnabledInput() {
      return this._badgeEnabled
    }

    // badge_url - computed: true, optional: false, required: false
    public get badgeUrl() {
      return this.getStringAttribute('badge_url');
    }

    // build_timeout - computed: false, optional: true, required: false
    private _buildTimeout?: number;
    public get buildTimeout() {
      return this.getNumberAttribute('build_timeout');
    }
    public set buildTimeout(value: number ) {
      this._buildTimeout = value;
    }
    public resetBuildTimeout() {
      this._buildTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildTimeoutInput() {
      return this._buildTimeout
    }

    // concurrent_build_limit - computed: false, optional: true, required: false
    private _concurrentBuildLimit?: number;
    public get concurrentBuildLimit() {
      return this.getNumberAttribute('concurrent_build_limit');
    }
    public set concurrentBuildLimit(value: number ) {
      this._concurrentBuildLimit = value;
    }
    public resetConcurrentBuildLimit() {
      this._concurrentBuildLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentBuildLimitInput() {
      return this._concurrentBuildLimit
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
      return this._description
    }

    // encryption_key - computed: true, optional: true, required: false
    private _encryptionKey?: string;
    public get encryptionKey() {
      return this.getStringAttribute('encryption_key');
    }
    public set encryptionKey(value: string) {
      this._encryptionKey = value;
    }
    public resetEncryptionKey() {
      this._encryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionKeyInput() {
      return this._encryptionKey
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // queued_timeout - computed: false, optional: true, required: false
    private _queuedTimeout?: number;
    public get queuedTimeout() {
      return this.getNumberAttribute('queued_timeout');
    }
    public set queuedTimeout(value: number ) {
      this._queuedTimeout = value;
    }
    public resetQueuedTimeout() {
      this._queuedTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queuedTimeoutInput() {
      return this._queuedTimeout
    }

    // service_role - computed: false, optional: false, required: true
    private _serviceRole: string;
    public get serviceRole() {
      return this.getStringAttribute('service_role');
    }
    public set serviceRole(value: string) {
      this._serviceRole = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleInput() {
      return this._serviceRole
    }

    // source_version - computed: false, optional: true, required: false
    private _sourceVersion?: string;
    public get sourceVersion() {
      return this.getStringAttribute('source_version');
    }
    public set sourceVersion(value: string ) {
      this._sourceVersion = value;
    }
    public resetSourceVersion() {
      this._sourceVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceVersionInput() {
      return this._sourceVersion
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // artifacts - computed: false, optional: false, required: true
    private _artifacts: CodebuildProjectArtifacts[];
    public get artifacts() {
      return this.interpolationForAttribute('artifacts') as any;
    }
    public set artifacts(value: CodebuildProjectArtifacts[]) {
      this._artifacts = value;
    }
    // Temporarily expose input value. Use with caution.
    public get artifactsInput() {
      return this._artifacts
    }

    // build_batch_config - computed: false, optional: true, required: false
    private _buildBatchConfig?: CodebuildProjectBuildBatchConfig[];
    public get buildBatchConfig() {
      return this.interpolationForAttribute('build_batch_config') as any;
    }
    public set buildBatchConfig(value: CodebuildProjectBuildBatchConfig[] ) {
      this._buildBatchConfig = value;
    }
    public resetBuildBatchConfig() {
      this._buildBatchConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildBatchConfigInput() {
      return this._buildBatchConfig
    }

    // cache - computed: false, optional: true, required: false
    private _cache?: CodebuildProjectCache[];
    public get cache() {
      return this.interpolationForAttribute('cache') as any;
    }
    public set cache(value: CodebuildProjectCache[] ) {
      this._cache = value;
    }
    public resetCache() {
      this._cache = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheInput() {
      return this._cache
    }

    // environment - computed: false, optional: false, required: true
    private _environment: CodebuildProjectEnvironment[];
    public get environment() {
      return this.interpolationForAttribute('environment') as any;
    }
    public set environment(value: CodebuildProjectEnvironment[]) {
      this._environment = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
      return this._environment
    }

    // file_system_locations - computed: false, optional: true, required: false
    private _fileSystemLocations?: CodebuildProjectFileSystemLocations[];
    public get fileSystemLocations() {
      return this.interpolationForAttribute('file_system_locations') as any;
    }
    public set fileSystemLocations(value: CodebuildProjectFileSystemLocations[] ) {
      this._fileSystemLocations = value;
    }
    public resetFileSystemLocations() {
      this._fileSystemLocations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemLocationsInput() {
      return this._fileSystemLocations
    }

    // logs_config - computed: false, optional: true, required: false
    private _logsConfig?: CodebuildProjectLogsConfig[];
    public get logsConfig() {
      return this.interpolationForAttribute('logs_config') as any;
    }
    public set logsConfig(value: CodebuildProjectLogsConfig[] ) {
      this._logsConfig = value;
    }
    public resetLogsConfig() {
      this._logsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsConfigInput() {
      return this._logsConfig
    }

    // secondary_artifacts - computed: false, optional: true, required: false
    private _secondaryArtifacts?: CodebuildProjectSecondaryArtifacts[];
    public get secondaryArtifacts() {
      return this.interpolationForAttribute('secondary_artifacts') as any;
    }
    public set secondaryArtifacts(value: CodebuildProjectSecondaryArtifacts[] ) {
      this._secondaryArtifacts = value;
    }
    public resetSecondaryArtifacts() {
      this._secondaryArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondaryArtifactsInput() {
      return this._secondaryArtifacts
    }

    // secondary_sources - computed: false, optional: true, required: false
    private _secondarySources?: CodebuildProjectSecondarySources[];
    public get secondarySources() {
      return this.interpolationForAttribute('secondary_sources') as any;
    }
    public set secondarySources(value: CodebuildProjectSecondarySources[] ) {
      this._secondarySources = value;
    }
    public resetSecondarySources() {
      this._secondarySources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondarySourcesInput() {
      return this._secondarySources
    }

    // source - computed: false, optional: false, required: true
    private _source: CodebuildProjectSource[];
    public get source() {
      return this.interpolationForAttribute('source') as any;
    }
    public set source(value: CodebuildProjectSource[]) {
      this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
      return this._source
    }

    // vpc_config - computed: false, optional: true, required: false
    private _vpcConfig?: CodebuildProjectVpcConfig[];
    public get vpcConfig() {
      return this.interpolationForAttribute('vpc_config') as any;
    }
    public set vpcConfig(value: CodebuildProjectVpcConfig[] ) {
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
        badge_enabled: cdktf.booleanToTerraform(this._badgeEnabled),
        build_timeout: cdktf.numberToTerraform(this._buildTimeout),
        concurrent_build_limit: cdktf.numberToTerraform(this._concurrentBuildLimit),
        description: cdktf.stringToTerraform(this._description),
        encryption_key: cdktf.stringToTerraform(this._encryptionKey),
        name: cdktf.stringToTerraform(this._name),
        queued_timeout: cdktf.numberToTerraform(this._queuedTimeout),
        service_role: cdktf.stringToTerraform(this._serviceRole),
        source_version: cdktf.stringToTerraform(this._sourceVersion),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        artifacts: cdktf.listMapper(codebuildProjectArtifactsToTerraform)(this._artifacts),
        build_batch_config: cdktf.listMapper(codebuildProjectBuildBatchConfigToTerraform)(this._buildBatchConfig),
        cache: cdktf.listMapper(codebuildProjectCacheToTerraform)(this._cache),
        environment: cdktf.listMapper(codebuildProjectEnvironmentToTerraform)(this._environment),
        file_system_locations: cdktf.listMapper(codebuildProjectFileSystemLocationsToTerraform)(this._fileSystemLocations),
        logs_config: cdktf.listMapper(codebuildProjectLogsConfigToTerraform)(this._logsConfig),
        secondary_artifacts: cdktf.listMapper(codebuildProjectSecondaryArtifactsToTerraform)(this._secondaryArtifacts),
        secondary_sources: cdktf.listMapper(codebuildProjectSecondarySourcesToTerraform)(this._secondarySources),
        source: cdktf.listMapper(codebuildProjectSourceToTerraform)(this._source),
        vpc_config: cdktf.listMapper(codebuildProjectVpcConfigToTerraform)(this._vpcConfig),
      };
    }
  }
  export interface CodebuildReportGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#delete_reports CodebuildReportGroup#delete_reports}
    */
    readonly deleteReports?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#name CodebuildReportGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags CodebuildReportGroup#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#tags_all CodebuildReportGroup#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * export_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#export_config CodebuildReportGroup#export_config}
    */
    readonly exportConfig: CodebuildReportGroupExportConfig[];
  }
  export interface CodebuildReportGroupExportConfigS3Destination {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#bucket CodebuildReportGroup#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_disabled CodebuildReportGroup#encryption_disabled}
    */
    readonly encryptionDisabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#encryption_key CodebuildReportGroup#encryption_key}
    */
    readonly encryptionKey: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#packaging CodebuildReportGroup#packaging}
    */
    readonly packaging?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#path CodebuildReportGroup#path}
    */
    readonly path?: string;
  }

  function codebuildReportGroupExportConfigS3DestinationToTerraform(struct?: CodebuildReportGroupExportConfigS3Destination): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      bucket: cdktf.stringToTerraform(struct!.bucket),
      encryption_disabled: cdktf.booleanToTerraform(struct!.encryptionDisabled),
      encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
      packaging: cdktf.stringToTerraform(struct!.packaging),
      path: cdktf.stringToTerraform(struct!.path),
    }
  }

  export interface CodebuildReportGroupExportConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#type CodebuildReportGroup#type}
    */
    readonly type: string;
    /**
    * s3_destination block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html#s3_destination CodebuildReportGroup#s3_destination}
    */
    readonly s3Destination?: CodebuildReportGroupExportConfigS3Destination[];
  }

  function codebuildReportGroupExportConfigToTerraform(struct?: CodebuildReportGroupExportConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
      s3_destination: cdktf.listMapper(codebuildReportGroupExportConfigS3DestinationToTerraform)(struct!.s3Destination),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group}
  */
  export class CodebuildReportGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_report_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_report_group.html aws_codebuild_report_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildReportGroupConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildReportGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_report_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._deleteReports = config.deleteReports;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._type = config.type;
      this._exportConfig = config.exportConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created - computed: true, optional: false, required: false
    public get created() {
      return this.getStringAttribute('created');
    }

    // delete_reports - computed: false, optional: true, required: false
    private _deleteReports?: boolean | cdktf.IResolvable;
    public get deleteReports() {
      return this.getBooleanAttribute('delete_reports');
    }
    public set deleteReports(value: boolean | cdktf.IResolvable ) {
      this._deleteReports = value;
    }
    public resetDeleteReports() {
      this._deleteReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteReportsInput() {
      return this._deleteReports
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: false, optional: false, required: true
    private _name: string;
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

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable;
    public get tags() {
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
    public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
      return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // type - computed: false, optional: false, required: true
    private _type: string;
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // export_config - computed: false, optional: false, required: true
    private _exportConfig: CodebuildReportGroupExportConfig[];
    public get exportConfig() {
      return this.interpolationForAttribute('export_config') as any;
    }
    public set exportConfig(value: CodebuildReportGroupExportConfig[]) {
      this._exportConfig = value;
    }
    // Temporarily expose input value. Use with caution.
    public get exportConfigInput() {
      return this._exportConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        delete_reports: cdktf.booleanToTerraform(this._deleteReports),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        type: cdktf.stringToTerraform(this._type),
        export_config: cdktf.listMapper(codebuildReportGroupExportConfigToTerraform)(this._exportConfig),
      };
    }
  }
  export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#auth_type CodebuildSourceCredential#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#server_type CodebuildSourceCredential#server_type}
    */
    readonly serverType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#token CodebuildSourceCredential#token}
    */
    readonly token: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html#user_name CodebuildSourceCredential#user_name}
    */
    readonly userName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential}
  */
  export class CodebuildSourceCredential extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_source_credential";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html aws_codebuild_source_credential} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildSourceCredentialConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildSourceCredentialConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_source_credential',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authType = config.authType;
      this._serverType = config.serverType;
      this._token = config.token;
      this._userName = config.userName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // auth_type - computed: false, optional: false, required: true
    private _authType: string;
    public get authType() {
      return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
      this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
      return this._authType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // server_type - computed: false, optional: false, required: true
    private _serverType: string;
    public get serverType() {
      return this.getStringAttribute('server_type');
    }
    public set serverType(value: string) {
      this._serverType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTypeInput() {
      return this._serverType
    }

    // token - computed: false, optional: false, required: true
    private _token: string;
    public get token() {
      return this.getStringAttribute('token');
    }
    public set token(value: string) {
      this._token = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tokenInput() {
      return this._token
    }

    // user_name - computed: false, optional: true, required: false
    private _userName?: string;
    public get userName() {
      return this.getStringAttribute('user_name');
    }
    public set userName(value: string ) {
      this._userName = value;
    }
    public resetUserName() {
      this._userName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userNameInput() {
      return this._userName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        auth_type: cdktf.stringToTerraform(this._authType),
        server_type: cdktf.stringToTerraform(this._serverType),
        token: cdktf.stringToTerraform(this._token),
        user_name: cdktf.stringToTerraform(this._userName),
      };
    }
  }
  export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#branch_filter CodebuildWebhook#branch_filter}
    */
    readonly branchFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#build_type CodebuildWebhook#build_type}
    */
    readonly buildType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#project_name CodebuildWebhook#project_name}
    */
    readonly projectName: string;
    /**
    * filter_group block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter_group CodebuildWebhook#filter_group}
    */
    readonly filterGroup?: CodebuildWebhookFilterGroup[];
  }
  export interface CodebuildWebhookFilterGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
    */
    readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#pattern CodebuildWebhook#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#type CodebuildWebhook#type}
    */
    readonly type: string;
  }

  function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      exclude_matched_pattern: cdktf.booleanToTerraform(struct!.excludeMatchedPattern),
      pattern: cdktf.stringToTerraform(struct!.pattern),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CodebuildWebhookFilterGroup {
    /**
    * filter block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter CodebuildWebhook#filter}
    */
    readonly filter?: CodebuildWebhookFilterGroupFilter[];
  }

  function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      filter: cdktf.listMapper(codebuildWebhookFilterGroupFilterToTerraform)(struct!.filter),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}
  */
  export class CodebuildWebhook extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_codebuild_webhook";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildWebhookConfig
    */
    public constructor(scope: Construct, id: string, config: CodebuildWebhookConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_codebuild_webhook',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._branchFilter = config.branchFilter;
      this._buildType = config.buildType;
      this._projectName = config.projectName;
      this._filterGroup = config.filterGroup;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // branch_filter - computed: false, optional: true, required: false
    private _branchFilter?: string;
    public get branchFilter() {
      return this.getStringAttribute('branch_filter');
    }
    public set branchFilter(value: string ) {
      this._branchFilter = value;
    }
    public resetBranchFilter() {
      this._branchFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchFilterInput() {
      return this._branchFilter
    }

    // build_type - computed: false, optional: true, required: false
    private _buildType?: string;
    public get buildType() {
      return this.getStringAttribute('build_type');
    }
    public set buildType(value: string ) {
      this._buildType = value;
    }
    public resetBuildType() {
      this._buildType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildTypeInput() {
      return this._buildType
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // payload_url - computed: true, optional: false, required: false
    public get payloadUrl() {
      return this.getStringAttribute('payload_url');
    }

    // project_name - computed: false, optional: false, required: true
    private _projectName: string;
    public get projectName() {
      return this.getStringAttribute('project_name');
    }
    public set projectName(value: string) {
      this._projectName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectNameInput() {
      return this._projectName
    }

    // secret - computed: true, optional: false, required: false
    public get secret() {
      return this.getStringAttribute('secret');
    }

    // url - computed: true, optional: false, required: false
    public get url() {
      return this.getStringAttribute('url');
    }

    // filter_group - computed: false, optional: true, required: false
    private _filterGroup?: CodebuildWebhookFilterGroup[];
    public get filterGroup() {
      return this.interpolationForAttribute('filter_group') as any;
    }
    public set filterGroup(value: CodebuildWebhookFilterGroup[] ) {
      this._filterGroup = value;
    }
    public resetFilterGroup() {
      this._filterGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterGroupInput() {
      return this._filterGroup
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        branch_filter: cdktf.stringToTerraform(this._branchFilter),
        build_type: cdktf.stringToTerraform(this._buildType),
        project_name: cdktf.stringToTerraform(this._projectName),
        filter_group: cdktf.listMapper(codebuildWebhookFilterGroupToTerraform)(this._filterGroup),
      };
    }
  }
}
