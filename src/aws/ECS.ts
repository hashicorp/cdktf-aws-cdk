// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS EC2 Container Service
*/
export namespace ECS {
  export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags_all EcsCapacityProvider#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * auto_scaling_group_provider block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
  }
  export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
  }

  function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      instance_warmup_period: cdktf.numberToTerraform(struct!.instanceWarmupPeriod),
      maximum_scaling_step_size: cdktf.numberToTerraform(struct!.maximumScalingStepSize),
      minimum_scaling_step_size: cdktf.numberToTerraform(struct!.minimumScalingStepSize),
      status: cdktf.stringToTerraform(struct!.status),
      target_capacity: cdktf.numberToTerraform(struct!.targetCapacity),
    }
  }

  export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
    /**
    * managed_scaling block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling[];
  }

  function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProvider): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      auto_scaling_group_arn: cdktf.stringToTerraform(struct!.autoScalingGroupArn),
      managed_termination_protection: cdktf.stringToTerraform(struct!.managedTerminationProtection),
      managed_scaling: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform)(struct!.managedScaling),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}
  */
  export class EcsCapacityProvider extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_capacity_provider";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_capacity_provider',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._autoScalingGroupProvider = config.autoScalingGroupProvider;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
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

    // auto_scaling_group_provider - computed: false, optional: false, required: true
    private _autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
    public get autoScalingGroupProvider() {
      return this.interpolationForAttribute('auto_scaling_group_provider') as any;
    }
    public set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider[]) {
      this._autoScalingGroupProvider = value;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingGroupProviderInput() {
      return this._autoScalingGroupProvider
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        auto_scaling_group_provider: cdktf.listMapper(ecsCapacityProviderAutoScalingGroupProviderToTerraform)(this._autoScalingGroupProvider),
      };
    }
  }
  export interface EcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_providers EcsCluster#capacity_providers}
    */
    readonly capacityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags EcsCluster#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#tags_all EcsCluster#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#configuration EcsCluster#configuration}
    */
    readonly configuration?: EcsClusterConfiguration[];
    /**
    * default_capacity_provider_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#default_capacity_provider_strategy EcsCluster#default_capacity_provider_strategy}
    */
    readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
    /**
    * setting block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#setting EcsCluster#setting}
    */
    readonly setting?: EcsClusterSetting[];
  }
  export interface EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_encryption_enabled EcsCluster#cloud_watch_encryption_enabled}
    */
    readonly cloudWatchEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#cloud_watch_log_group_name EcsCluster#cloud_watch_log_group_name}
    */
    readonly cloudWatchLogGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_encryption_enabled EcsCluster#s3_bucket_encryption_enabled}
    */
    readonly s3BucketEncryptionEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_bucket_name EcsCluster#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#s3_key_prefix EcsCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
  }

  function ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      cloud_watch_encryption_enabled: cdktf.booleanToTerraform(struct!.cloudWatchEncryptionEnabled),
      cloud_watch_log_group_name: cdktf.stringToTerraform(struct!.cloudWatchLogGroupName),
      s3_bucket_encryption_enabled: cdktf.booleanToTerraform(struct!.s3BucketEncryptionEnabled),
      s3_bucket_name: cdktf.stringToTerraform(struct!.s3BucketName),
      s3_key_prefix: cdktf.stringToTerraform(struct!.s3KeyPrefix),
    }
  }

  export interface EcsClusterConfigurationExecuteCommandConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#kms_key_id EcsCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#logging EcsCluster#logging}
    */
    readonly logging?: string;
    /**
    * log_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#log_configuration EcsCluster#log_configuration}
    */
    readonly logConfiguration?: EcsClusterConfigurationExecuteCommandConfigurationLogConfiguration[];
  }

  function ecsClusterConfigurationExecuteCommandConfigurationToTerraform(struct?: EcsClusterConfigurationExecuteCommandConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      logging: cdktf.stringToTerraform(struct!.logging),
      log_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationLogConfigurationToTerraform)(struct!.logConfiguration),
    }
  }

  export interface EcsClusterConfiguration {
    /**
    * execute_command_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#execute_command_configuration EcsCluster#execute_command_configuration}
    */
    readonly executeCommandConfiguration?: EcsClusterConfigurationExecuteCommandConfiguration[];
  }

  function ecsClusterConfigurationToTerraform(struct?: EcsClusterConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      execute_command_configuration: cdktf.listMapper(ecsClusterConfigurationExecuteCommandConfigurationToTerraform)(struct!.executeCommandConfiguration),
    }
  }

  export interface EcsClusterDefaultCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#base EcsCluster#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#capacity_provider EcsCluster#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#weight EcsCluster#weight}
    */
    readonly weight?: number;
  }

  function ecsClusterDefaultCapacityProviderStrategyToTerraform(struct?: EcsClusterDefaultCapacityProviderStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      base: cdktf.numberToTerraform(struct!.base),
      capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface EcsClusterSetting {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#name EcsCluster#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html#value EcsCluster#value}
    */
    readonly value: string;
  }

  function ecsClusterSettingToTerraform(struct?: EcsClusterSetting): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      name: cdktf.stringToTerraform(struct!.name),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster}
  */
  export class EcsCluster extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html aws_ecs_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsClusterConfig
    */
    public constructor(scope: Construct, id: string, config: EcsClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._capacityProviders = config.capacityProviders;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._configuration = config.configuration;
      this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
      this._setting = config.setting;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // capacity_providers - computed: false, optional: true, required: false
    private _capacityProviders?: string[];
    public get capacityProviders() {
      return this.getListAttribute('capacity_providers');
    }
    public set capacityProviders(value: string[] ) {
      this._capacityProviders = value;
    }
    public resetCapacityProviders() {
      this._capacityProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProvidersInput() {
      return this._capacityProviders
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

    // configuration - computed: false, optional: true, required: false
    private _configuration?: EcsClusterConfiguration[];
    public get configuration() {
      return this.interpolationForAttribute('configuration') as any;
    }
    public set configuration(value: EcsClusterConfiguration[] ) {
      this._configuration = value;
    }
    public resetConfiguration() {
      this._configuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
      return this._configuration
    }

    // default_capacity_provider_strategy - computed: false, optional: true, required: false
    private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
    public get defaultCapacityProviderStrategy() {
      return this.interpolationForAttribute('default_capacity_provider_strategy') as any;
    }
    public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] ) {
      this._defaultCapacityProviderStrategy = value;
    }
    public resetDefaultCapacityProviderStrategy() {
      this._defaultCapacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultCapacityProviderStrategyInput() {
      return this._defaultCapacityProviderStrategy
    }

    // setting - computed: false, optional: true, required: false
    private _setting?: EcsClusterSetting[];
    public get setting() {
      return this.interpolationForAttribute('setting') as any;
    }
    public set setting(value: EcsClusterSetting[] ) {
      this._setting = value;
    }
    public resetSetting() {
      this._setting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get settingInput() {
      return this._setting
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        capacity_providers: cdktf.listMapper(cdktf.stringToTerraform)(this._capacityProviders),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        configuration: cdktf.listMapper(ecsClusterConfigurationToTerraform)(this._configuration),
        default_capacity_provider_strategy: cdktf.listMapper(ecsClusterDefaultCapacityProviderStrategyToTerraform)(this._defaultCapacityProviderStrategy),
        setting: cdktf.listMapper(ecsClusterSettingToTerraform)(this._setting),
      };
    }
  }
  export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#cluster EcsService#cluster}
    */
    readonly cluster?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_maximum_percent EcsService#deployment_maximum_percent}
    */
    readonly deploymentMaximumPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
    */
    readonly deploymentMinimumHealthyPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#desired_count EcsService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#force_new_deployment EcsService#force_new_deployment}
    */
    readonly forceNewDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#iam_role EcsService#iam_role}
    */
    readonly iamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#launch_type EcsService#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#name EcsService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#platform_version EcsService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags EcsService#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags_all EcsService#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#task_definition EcsService#task_definition}
    */
    readonly taskDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#wait_for_steady_state EcsService#wait_for_steady_state}
    */
    readonly waitForSteadyState?: boolean | cdktf.IResolvable;
    /**
    * capacity_provider_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    /**
    * deployment_circuit_breaker block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker[];
    /**
    * deployment_controller block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
    */
    readonly deploymentController?: EcsServiceDeploymentController[];
    /**
    * load_balancer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#load_balancer EcsService#load_balancer}
    */
    readonly loadBalancer?: EcsServiceLoadBalancer[];
    /**
    * network_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#network_configuration EcsService#network_configuration}
    */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration[];
    /**
    * ordered_placement_strategy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#ordered_placement_strategy EcsService#ordered_placement_strategy}
    */
    readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
    /**
    * placement_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
    */
    readonly placementConstraints?: EcsServicePlacementConstraints[];
    /**
    * service_registries block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#service_registries EcsService#service_registries}
    */
    readonly serviceRegistries?: EcsServiceServiceRegistries[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#timeouts EcsService#timeouts}
    */
    readonly timeouts?: EcsServiceTimeouts;
  }
  export interface EcsServiceCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#base EcsService#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider EcsService#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#weight EcsService#weight}
    */
    readonly weight?: number;
  }

  function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      base: cdktf.numberToTerraform(struct!.base),
      capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface EcsServiceDeploymentCircuitBreaker {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
  }

  function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreaker): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      enable: cdktf.booleanToTerraform(struct!.enable),
      rollback: cdktf.booleanToTerraform(struct!.rollback),
    }
  }

  export interface EcsServiceDeploymentController {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type?: string;
  }

  function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentController): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsServiceLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#elb_name EcsService#elb_name}
    */
    readonly elbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn?: string;
  }

  function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      container_port: cdktf.numberToTerraform(struct!.containerPort),
      elb_name: cdktf.stringToTerraform(struct!.elbName),
      target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    }
  }

  export interface EcsServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#security_groups EcsService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#subnets EcsService#subnets}
    */
    readonly subnets: string[];
  }

  function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    }
  }

  export interface EcsServiceOrderedPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#field EcsService#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
  }

  function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      field: cdktf.stringToTerraform(struct!.field),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsServicePlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#expression EcsService#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
  }

  function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsServiceServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#port EcsService#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#registry_arn EcsService#registry_arn}
    */
    readonly registryArn: string;
  }

  function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistries): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      container_port: cdktf.numberToTerraform(struct!.containerPort),
      port: cdktf.numberToTerraform(struct!.port),
      registry_arn: cdktf.stringToTerraform(struct!.registryArn),
    }
  }

  export interface EcsServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#delete EcsService#delete}
    */
    readonly delete?: string;
  }

  function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      delete: cdktf.stringToTerraform(struct!.delete),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}
  */
  export class EcsService extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig
    */
    public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cluster = config.cluster;
      this._deploymentMaximumPercent = config.deploymentMaximumPercent;
      this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
      this._desiredCount = config.desiredCount;
      this._enableEcsManagedTags = config.enableEcsManagedTags;
      this._enableExecuteCommand = config.enableExecuteCommand;
      this._forceNewDeployment = config.forceNewDeployment;
      this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
      this._iamRole = config.iamRole;
      this._launchType = config.launchType;
      this._name = config.name;
      this._platformVersion = config.platformVersion;
      this._propagateTags = config.propagateTags;
      this._schedulingStrategy = config.schedulingStrategy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._taskDefinition = config.taskDefinition;
      this._waitForSteadyState = config.waitForSteadyState;
      this._capacityProviderStrategy = config.capacityProviderStrategy;
      this._deploymentCircuitBreaker = config.deploymentCircuitBreaker;
      this._deploymentController = config.deploymentController;
      this._loadBalancer = config.loadBalancer;
      this._networkConfiguration = config.networkConfiguration;
      this._orderedPlacementStrategy = config.orderedPlacementStrategy;
      this._placementConstraints = config.placementConstraints;
      this._serviceRegistries = config.serviceRegistries;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cluster - computed: true, optional: true, required: false
    private _cluster?: string;
    public get cluster() {
      return this.getStringAttribute('cluster');
    }
    public set cluster(value: string) {
      this._cluster = value;
    }
    public resetCluster() {
      this._cluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterInput() {
      return this._cluster
    }

    // deployment_maximum_percent - computed: false, optional: true, required: false
    private _deploymentMaximumPercent?: number;
    public get deploymentMaximumPercent() {
      return this.getNumberAttribute('deployment_maximum_percent');
    }
    public set deploymentMaximumPercent(value: number ) {
      this._deploymentMaximumPercent = value;
    }
    public resetDeploymentMaximumPercent() {
      this._deploymentMaximumPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentMaximumPercentInput() {
      return this._deploymentMaximumPercent
    }

    // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
    private _deploymentMinimumHealthyPercent?: number;
    public get deploymentMinimumHealthyPercent() {
      return this.getNumberAttribute('deployment_minimum_healthy_percent');
    }
    public set deploymentMinimumHealthyPercent(value: number ) {
      this._deploymentMinimumHealthyPercent = value;
    }
    public resetDeploymentMinimumHealthyPercent() {
      this._deploymentMinimumHealthyPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentMinimumHealthyPercentInput() {
      return this._deploymentMinimumHealthyPercent
    }

    // desired_count - computed: false, optional: true, required: false
    private _desiredCount?: number;
    public get desiredCount() {
      return this.getNumberAttribute('desired_count');
    }
    public set desiredCount(value: number ) {
      this._desiredCount = value;
    }
    public resetDesiredCount() {
      this._desiredCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredCountInput() {
      return this._desiredCount
    }

    // enable_ecs_managed_tags - computed: false, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktf.IResolvable;
    public get enableEcsManagedTags() {
      return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    public set enableEcsManagedTags(value: boolean | cdktf.IResolvable ) {
      this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
      this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
      return this._enableEcsManagedTags
    }

    // enable_execute_command - computed: false, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktf.IResolvable;
    public get enableExecuteCommand() {
      return this.getBooleanAttribute('enable_execute_command');
    }
    public set enableExecuteCommand(value: boolean | cdktf.IResolvable ) {
      this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
      this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
      return this._enableExecuteCommand
    }

    // force_new_deployment - computed: false, optional: true, required: false
    private _forceNewDeployment?: boolean | cdktf.IResolvable;
    public get forceNewDeployment() {
      return this.getBooleanAttribute('force_new_deployment');
    }
    public set forceNewDeployment(value: boolean | cdktf.IResolvable ) {
      this._forceNewDeployment = value;
    }
    public resetForceNewDeployment() {
      this._forceNewDeployment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceNewDeploymentInput() {
      return this._forceNewDeployment
    }

    // health_check_grace_period_seconds - computed: false, optional: true, required: false
    private _healthCheckGracePeriodSeconds?: number;
    public get healthCheckGracePeriodSeconds() {
      return this.getNumberAttribute('health_check_grace_period_seconds');
    }
    public set healthCheckGracePeriodSeconds(value: number ) {
      this._healthCheckGracePeriodSeconds = value;
    }
    public resetHealthCheckGracePeriodSeconds() {
      this._healthCheckGracePeriodSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckGracePeriodSecondsInput() {
      return this._healthCheckGracePeriodSeconds
    }

    // iam_role - computed: true, optional: true, required: false
    private _iamRole?: string;
    public get iamRole() {
      return this.getStringAttribute('iam_role');
    }
    public set iamRole(value: string) {
      this._iamRole = value;
    }
    public resetIamRole() {
      this._iamRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleInput() {
      return this._iamRole
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_type - computed: true, optional: true, required: false
    private _launchType?: string;
    public get launchType() {
      return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string) {
      this._launchType = value;
    }
    public resetLaunchType() {
      this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
      return this._launchType
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

    // platform_version - computed: true, optional: true, required: false
    private _platformVersion?: string;
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string) {
      this._platformVersion = value;
    }
    public resetPlatformVersion() {
      this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
      return this._platformVersion
    }

    // propagate_tags - computed: false, optional: true, required: false
    private _propagateTags?: string;
    public get propagateTags() {
      return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string ) {
      this._propagateTags = value;
    }
    public resetPropagateTags() {
      this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
      return this._propagateTags
    }

    // scheduling_strategy - computed: false, optional: true, required: false
    private _schedulingStrategy?: string;
    public get schedulingStrategy() {
      return this.getStringAttribute('scheduling_strategy');
    }
    public set schedulingStrategy(value: string ) {
      this._schedulingStrategy = value;
    }
    public resetSchedulingStrategy() {
      this._schedulingStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schedulingStrategyInput() {
      return this._schedulingStrategy
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

    // task_definition - computed: false, optional: true, required: false
    private _taskDefinition?: string;
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string ) {
      this._taskDefinition = value;
    }
    public resetTaskDefinition() {
      this._taskDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // wait_for_steady_state - computed: false, optional: true, required: false
    private _waitForSteadyState?: boolean | cdktf.IResolvable;
    public get waitForSteadyState() {
      return this.getBooleanAttribute('wait_for_steady_state');
    }
    public set waitForSteadyState(value: boolean | cdktf.IResolvable ) {
      this._waitForSteadyState = value;
    }
    public resetWaitForSteadyState() {
      this._waitForSteadyState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForSteadyStateInput() {
      return this._waitForSteadyState
    }

    // capacity_provider_strategy - computed: false, optional: true, required: false
    private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    public get capacityProviderStrategy() {
      return this.interpolationForAttribute('capacity_provider_strategy') as any;
    }
    public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] ) {
      this._capacityProviderStrategy = value;
    }
    public resetCapacityProviderStrategy() {
      this._capacityProviderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
      return this._capacityProviderStrategy
    }

    // deployment_circuit_breaker - computed: false, optional: true, required: false
    private _deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker[];
    public get deploymentCircuitBreaker() {
      return this.interpolationForAttribute('deployment_circuit_breaker') as any;
    }
    public set deploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker[] ) {
      this._deploymentCircuitBreaker = value;
    }
    public resetDeploymentCircuitBreaker() {
      this._deploymentCircuitBreaker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentCircuitBreakerInput() {
      return this._deploymentCircuitBreaker
    }

    // deployment_controller - computed: false, optional: true, required: false
    private _deploymentController?: EcsServiceDeploymentController[];
    public get deploymentController() {
      return this.interpolationForAttribute('deployment_controller') as any;
    }
    public set deploymentController(value: EcsServiceDeploymentController[] ) {
      this._deploymentController = value;
    }
    public resetDeploymentController() {
      this._deploymentController = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentControllerInput() {
      return this._deploymentController
    }

    // load_balancer - computed: false, optional: true, required: false
    private _loadBalancer?: EcsServiceLoadBalancer[];
    public get loadBalancer() {
      return this.interpolationForAttribute('load_balancer') as any;
    }
    public set loadBalancer(value: EcsServiceLoadBalancer[] ) {
      this._loadBalancer = value;
    }
    public resetLoadBalancer() {
      this._loadBalancer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadBalancerInput() {
      return this._loadBalancer
    }

    // network_configuration - computed: false, optional: true, required: false
    private _networkConfiguration?: EcsServiceNetworkConfiguration[];
    public get networkConfiguration() {
      return this.interpolationForAttribute('network_configuration') as any;
    }
    public set networkConfiguration(value: EcsServiceNetworkConfiguration[] ) {
      this._networkConfiguration = value;
    }
    public resetNetworkConfiguration() {
      this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
      return this._networkConfiguration
    }

    // ordered_placement_strategy - computed: false, optional: true, required: false
    private _orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
    public get orderedPlacementStrategy() {
      return this.interpolationForAttribute('ordered_placement_strategy') as any;
    }
    public set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] ) {
      this._orderedPlacementStrategy = value;
    }
    public resetOrderedPlacementStrategy() {
      this._orderedPlacementStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderedPlacementStrategyInput() {
      return this._orderedPlacementStrategy
    }

    // placement_constraints - computed: false, optional: true, required: false
    private _placementConstraints?: EcsServicePlacementConstraints[];
    public get placementConstraints() {
      return this.interpolationForAttribute('placement_constraints') as any;
    }
    public set placementConstraints(value: EcsServicePlacementConstraints[] ) {
      this._placementConstraints = value;
    }
    public resetPlacementConstraints() {
      this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
      return this._placementConstraints
    }

    // service_registries - computed: false, optional: true, required: false
    private _serviceRegistries?: EcsServiceServiceRegistries[];
    public get serviceRegistries() {
      return this.interpolationForAttribute('service_registries') as any;
    }
    public set serviceRegistries(value: EcsServiceServiceRegistries[] ) {
      this._serviceRegistries = value;
    }
    public resetServiceRegistries() {
      this._serviceRegistries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRegistriesInput() {
      return this._serviceRegistries
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: EcsServiceTimeouts;
    public get timeouts() {
      return this.interpolationForAttribute('timeouts') as any;
    }
    public set timeouts(value: EcsServiceTimeouts ) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster: cdktf.stringToTerraform(this._cluster),
        deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
        deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
        desired_count: cdktf.numberToTerraform(this._desiredCount),
        enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
        enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
        force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
        health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
        iam_role: cdktf.stringToTerraform(this._iamRole),
        launch_type: cdktf.stringToTerraform(this._launchType),
        name: cdktf.stringToTerraform(this._name),
        platform_version: cdktf.stringToTerraform(this._platformVersion),
        propagate_tags: cdktf.stringToTerraform(this._propagateTags),
        scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
        wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
        capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform)(this._capacityProviderStrategy),
        deployment_circuit_breaker: cdktf.listMapper(ecsServiceDeploymentCircuitBreakerToTerraform)(this._deploymentCircuitBreaker),
        deployment_controller: cdktf.listMapper(ecsServiceDeploymentControllerToTerraform)(this._deploymentController),
        load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform)(this._loadBalancer),
        network_configuration: cdktf.listMapper(ecsServiceNetworkConfigurationToTerraform)(this._networkConfiguration),
        ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform)(this._orderedPlacementStrategy),
        placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform)(this._placementConstraints),
        service_registries: cdktf.listMapper(ecsServiceServiceRegistriesToTerraform)(this._serviceRegistries),
        timeouts: ecsServiceTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface EcsTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#key EcsTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#resource_arn EcsTag#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#value EcsTag#value}
    */
    readonly value: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag}
  */
  export class EcsTag extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_tag";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTagConfig
    */
    public constructor(scope: Construct, id: string, config: EcsTagConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_tag',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._key = config.key;
      this._resourceArn = config.resourceArn;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key - computed: false, optional: false, required: true
    private _key: string;
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // resource_arn - computed: false, optional: false, required: true
    private _resourceArn: string;
    public get resourceArn() {
      return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
      this._resourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
      return this._resourceArn
    }

    // value - computed: false, optional: false, required: true
    private _value: string;
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key: cdktf.stringToTerraform(this._key),
        resource_arn: cdktf.stringToTerraform(this._resourceArn),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface EcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_definitions EcsTaskDefinition#container_definitions}
    */
    readonly containerDefinitions: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#cpu EcsTaskDefinition#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#execution_role_arn EcsTaskDefinition#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#family EcsTaskDefinition#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ipc_mode EcsTaskDefinition#ipc_mode}
    */
    readonly ipcMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#memory EcsTaskDefinition#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#network_mode EcsTaskDefinition#network_mode}
    */
    readonly networkMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#pid_mode EcsTaskDefinition#pid_mode}
    */
    readonly pidMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#requires_compatibilities EcsTaskDefinition#requires_compatibilities}
    */
    readonly requiresCompatibilities?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags EcsTaskDefinition#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#tags_all EcsTaskDefinition#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#task_role_arn EcsTaskDefinition#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * ephemeral_storage block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#ephemeral_storage EcsTaskDefinition#ephemeral_storage}
    */
    readonly ephemeralStorage?: EcsTaskDefinitionEphemeralStorage[];
    /**
    * inference_accelerator block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#inference_accelerator EcsTaskDefinition#inference_accelerator}
    */
    readonly inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
    /**
    * placement_constraints block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#placement_constraints EcsTaskDefinition#placement_constraints}
    */
    readonly placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
    /**
    * proxy_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#proxy_configuration EcsTaskDefinition#proxy_configuration}
    */
    readonly proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
    /**
    * volume block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#volume EcsTaskDefinition#volume}
    */
    readonly volume?: EcsTaskDefinitionVolume[];
  }
  export interface EcsTaskDefinitionEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#size_in_gib EcsTaskDefinition#size_in_gib}
    */
    readonly sizeInGib: number;
  }

  function ecsTaskDefinitionEphemeralStorageToTerraform(struct?: EcsTaskDefinitionEphemeralStorage): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      size_in_gib: cdktf.numberToTerraform(struct!.sizeInGib),
    }
  }

  export interface EcsTaskDefinitionInferenceAccelerator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_name EcsTaskDefinition#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#device_type EcsTaskDefinition#device_type}
    */
    readonly deviceType: string;
  }

  function ecsTaskDefinitionInferenceAcceleratorToTerraform(struct?: EcsTaskDefinitionInferenceAccelerator): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      device_name: cdktf.stringToTerraform(struct!.deviceName),
      device_type: cdktf.stringToTerraform(struct!.deviceType),
    }
  }

  export interface EcsTaskDefinitionPlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#expression EcsTaskDefinition#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type: string;
  }

  function ecsTaskDefinitionPlacementConstraintsToTerraform(struct?: EcsTaskDefinitionPlacementConstraints): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsTaskDefinitionProxyConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#container_name EcsTaskDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#properties EcsTaskDefinition#properties}
    */
    readonly properties?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#type EcsTaskDefinition#type}
    */
    readonly type?: string;
  }

  function ecsTaskDefinitionProxyConfigurationToTerraform(struct?: EcsTaskDefinitionProxyConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      container_name: cdktf.stringToTerraform(struct!.containerName),
      properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.properties),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface EcsTaskDefinitionVolumeDockerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#autoprovision EcsTaskDefinition#autoprovision}
    */
    readonly autoprovision?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver EcsTaskDefinition#driver}
    */
    readonly driver?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#driver_opts EcsTaskDefinition#driver_opts}
    */
    readonly driverOpts?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#labels EcsTaskDefinition#labels}
    */
    readonly labels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#scope EcsTaskDefinition#scope}
    */
    readonly scope?: string;
  }

  function ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeDockerVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      autoprovision: cdktf.booleanToTerraform(struct!.autoprovision),
      driver: cdktf.stringToTerraform(struct!.driver),
      driver_opts: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.driverOpts),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
      scope: cdktf.stringToTerraform(struct!.scope),
    }
  }

  export interface EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#access_point_id EcsTaskDefinition#access_point_id}
    */
    readonly accessPointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#iam EcsTaskDefinition#iam}
    */
    readonly iam?: string;
  }

  function ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      access_point_id: cdktf.stringToTerraform(struct!.accessPointId),
      iam: cdktf.stringToTerraform(struct!.iam),
    }
  }

  export interface EcsTaskDefinitionVolumeEfsVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption EcsTaskDefinition#transit_encryption}
    */
    readonly transitEncryption?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#transit_encryption_port EcsTaskDefinition#transit_encryption_port}
    */
    readonly transitEncryptionPort?: number;
    /**
    * authorization_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig?: EcsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfig[];
  }

  function ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeEfsVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
      root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
      transit_encryption: cdktf.stringToTerraform(struct!.transitEncryption),
      transit_encryption_port: cdktf.numberToTerraform(struct!.transitEncryptionPort),
      authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationAuthorizationConfigToTerraform)(struct!.authorizationConfig),
    }
  }

  export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#credentials_parameter EcsTaskDefinition#credentials_parameter}
    */
    readonly credentialsParameter: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#domain EcsTaskDefinition#domain}
    */
    readonly domain: string;
  }

  function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      credentials_parameter: cdktf.stringToTerraform(struct!.credentialsParameter),
      domain: cdktf.stringToTerraform(struct!.domain),
    }
  }

  export interface EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#file_system_id EcsTaskDefinition#file_system_id}
    */
    readonly fileSystemId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#root_directory EcsTaskDefinition#root_directory}
    */
    readonly rootDirectory: string;
    /**
    * authorization_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#authorization_config EcsTaskDefinition#authorization_config}
    */
    readonly authorizationConfig: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfig[];
  }

  function ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform(struct?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
      root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
      authorization_config: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationAuthorizationConfigToTerraform)(struct!.authorizationConfig),
    }
  }

  export interface EcsTaskDefinitionVolume {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#host_path EcsTaskDefinition#host_path}
    */
    readonly hostPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#name EcsTaskDefinition#name}
    */
    readonly name: string;
    /**
    * docker_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#docker_volume_configuration EcsTaskDefinition#docker_volume_configuration}
    */
    readonly dockerVolumeConfiguration?: EcsTaskDefinitionVolumeDockerVolumeConfiguration[];
    /**
    * efs_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#efs_volume_configuration EcsTaskDefinition#efs_volume_configuration}
    */
    readonly efsVolumeConfiguration?: EcsTaskDefinitionVolumeEfsVolumeConfiguration[];
    /**
    * fsx_windows_file_server_volume_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html#fsx_windows_file_server_volume_configuration EcsTaskDefinition#fsx_windows_file_server_volume_configuration}
    */
    readonly fsxWindowsFileServerVolumeConfiguration?: EcsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfiguration[];
  }

  function ecsTaskDefinitionVolumeToTerraform(struct?: EcsTaskDefinitionVolume): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    return {
      host_path: cdktf.stringToTerraform(struct!.hostPath),
      name: cdktf.stringToTerraform(struct!.name),
      docker_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeDockerVolumeConfigurationToTerraform)(struct!.dockerVolumeConfiguration),
      efs_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeEfsVolumeConfigurationToTerraform)(struct!.efsVolumeConfiguration),
      fsx_windows_file_server_volume_configuration: cdktf.listMapper(ecsTaskDefinitionVolumeFsxWindowsFileServerVolumeConfigurationToTerraform)(struct!.fsxWindowsFileServerVolumeConfiguration),
    }
  }


  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition}
  */
  export class EcsTaskDefinition extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_task_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_definition.html aws_ecs_task_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: EcsTaskDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_task_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._containerDefinitions = config.containerDefinitions;
      this._cpu = config.cpu;
      this._executionRoleArn = config.executionRoleArn;
      this._family = config.family;
      this._ipcMode = config.ipcMode;
      this._memory = config.memory;
      this._networkMode = config.networkMode;
      this._pidMode = config.pidMode;
      this._requiresCompatibilities = config.requiresCompatibilities;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._taskRoleArn = config.taskRoleArn;
      this._ephemeralStorage = config.ephemeralStorage;
      this._inferenceAccelerator = config.inferenceAccelerator;
      this._placementConstraints = config.placementConstraints;
      this._proxyConfiguration = config.proxyConfiguration;
      this._volume = config.volume;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // container_definitions - computed: false, optional: false, required: true
    private _containerDefinitions: string;
    public get containerDefinitions() {
      return this.getStringAttribute('container_definitions');
    }
    public set containerDefinitions(value: string) {
      this._containerDefinitions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerDefinitionsInput() {
      return this._containerDefinitions
    }

    // cpu - computed: false, optional: true, required: false
    private _cpu?: string;
    public get cpu() {
      return this.getStringAttribute('cpu');
    }
    public set cpu(value: string ) {
      this._cpu = value;
    }
    public resetCpu() {
      this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
      return this._cpu
    }

    // execution_role_arn - computed: false, optional: true, required: false
    private _executionRoleArn?: string;
    public get executionRoleArn() {
      return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string ) {
      this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
      this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
      return this._executionRoleArn
    }

    // family - computed: false, optional: false, required: true
    private _family: string;
    public get family() {
      return this.getStringAttribute('family');
    }
    public set family(value: string) {
      this._family = value;
    }
    // Temporarily expose input value. Use with caution.
    public get familyInput() {
      return this._family
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ipc_mode - computed: false, optional: true, required: false
    private _ipcMode?: string;
    public get ipcMode() {
      return this.getStringAttribute('ipc_mode');
    }
    public set ipcMode(value: string ) {
      this._ipcMode = value;
    }
    public resetIpcMode() {
      this._ipcMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipcModeInput() {
      return this._ipcMode
    }

    // memory - computed: false, optional: true, required: false
    private _memory?: string;
    public get memory() {
      return this.getStringAttribute('memory');
    }
    public set memory(value: string ) {
      this._memory = value;
    }
    public resetMemory() {
      this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
      return this._memory
    }

    // network_mode - computed: true, optional: true, required: false
    private _networkMode?: string;
    public get networkMode() {
      return this.getStringAttribute('network_mode');
    }
    public set networkMode(value: string) {
      this._networkMode = value;
    }
    public resetNetworkMode() {
      this._networkMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkModeInput() {
      return this._networkMode
    }

    // pid_mode - computed: false, optional: true, required: false
    private _pidMode?: string;
    public get pidMode() {
      return this.getStringAttribute('pid_mode');
    }
    public set pidMode(value: string ) {
      this._pidMode = value;
    }
    public resetPidMode() {
      this._pidMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pidModeInput() {
      return this._pidMode
    }

    // requires_compatibilities - computed: false, optional: true, required: false
    private _requiresCompatibilities?: string[];
    public get requiresCompatibilities() {
      return this.getListAttribute('requires_compatibilities');
    }
    public set requiresCompatibilities(value: string[] ) {
      this._requiresCompatibilities = value;
    }
    public resetRequiresCompatibilities() {
      this._requiresCompatibilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requiresCompatibilitiesInput() {
      return this._requiresCompatibilities
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
      return this.getNumberAttribute('revision');
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

    // task_role_arn - computed: false, optional: true, required: false
    private _taskRoleArn?: string;
    public get taskRoleArn() {
      return this.getStringAttribute('task_role_arn');
    }
    public set taskRoleArn(value: string ) {
      this._taskRoleArn = value;
    }
    public resetTaskRoleArn() {
      this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskRoleArnInput() {
      return this._taskRoleArn
    }

    // ephemeral_storage - computed: false, optional: true, required: false
    private _ephemeralStorage?: EcsTaskDefinitionEphemeralStorage[];
    public get ephemeralStorage() {
      return this.interpolationForAttribute('ephemeral_storage') as any;
    }
    public set ephemeralStorage(value: EcsTaskDefinitionEphemeralStorage[] ) {
      this._ephemeralStorage = value;
    }
    public resetEphemeralStorage() {
      this._ephemeralStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
      return this._ephemeralStorage
    }

    // inference_accelerator - computed: false, optional: true, required: false
    private _inferenceAccelerator?: EcsTaskDefinitionInferenceAccelerator[];
    public get inferenceAccelerator() {
      return this.interpolationForAttribute('inference_accelerator') as any;
    }
    public set inferenceAccelerator(value: EcsTaskDefinitionInferenceAccelerator[] ) {
      this._inferenceAccelerator = value;
    }
    public resetInferenceAccelerator() {
      this._inferenceAccelerator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAcceleratorInput() {
      return this._inferenceAccelerator
    }

    // placement_constraints - computed: false, optional: true, required: false
    private _placementConstraints?: EcsTaskDefinitionPlacementConstraints[];
    public get placementConstraints() {
      return this.interpolationForAttribute('placement_constraints') as any;
    }
    public set placementConstraints(value: EcsTaskDefinitionPlacementConstraints[] ) {
      this._placementConstraints = value;
    }
    public resetPlacementConstraints() {
      this._placementConstraints = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
      return this._placementConstraints
    }

    // proxy_configuration - computed: false, optional: true, required: false
    private _proxyConfiguration?: EcsTaskDefinitionProxyConfiguration[];
    public get proxyConfiguration() {
      return this.interpolationForAttribute('proxy_configuration') as any;
    }
    public set proxyConfiguration(value: EcsTaskDefinitionProxyConfiguration[] ) {
      this._proxyConfiguration = value;
    }
    public resetProxyConfiguration() {
      this._proxyConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyConfigurationInput() {
      return this._proxyConfiguration
    }

    // volume - computed: false, optional: true, required: false
    private _volume?: EcsTaskDefinitionVolume[];
    public get volume() {
      return this.interpolationForAttribute('volume') as any;
    }
    public set volume(value: EcsTaskDefinitionVolume[] ) {
      this._volume = value;
    }
    public resetVolume() {
      this._volume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeInput() {
      return this._volume
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container_definitions: cdktf.stringToTerraform(this._containerDefinitions),
        cpu: cdktf.stringToTerraform(this._cpu),
        execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
        family: cdktf.stringToTerraform(this._family),
        ipc_mode: cdktf.stringToTerraform(this._ipcMode),
        memory: cdktf.stringToTerraform(this._memory),
        network_mode: cdktf.stringToTerraform(this._networkMode),
        pid_mode: cdktf.stringToTerraform(this._pidMode),
        requires_compatibilities: cdktf.listMapper(cdktf.stringToTerraform)(this._requiresCompatibilities),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        task_role_arn: cdktf.stringToTerraform(this._taskRoleArn),
        ephemeral_storage: cdktf.listMapper(ecsTaskDefinitionEphemeralStorageToTerraform)(this._ephemeralStorage),
        inference_accelerator: cdktf.listMapper(ecsTaskDefinitionInferenceAcceleratorToTerraform)(this._inferenceAccelerator),
        placement_constraints: cdktf.listMapper(ecsTaskDefinitionPlacementConstraintsToTerraform)(this._placementConstraints),
        proxy_configuration: cdktf.listMapper(ecsTaskDefinitionProxyConfigurationToTerraform)(this._proxyConfiguration),
        volume: cdktf.listMapper(ecsTaskDefinitionVolumeToTerraform)(this._volume),
      };
    }
  }
  export interface DataAwsEcsClusterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html#cluster_name DataAwsEcsCluster#cluster_name}
    */
    readonly clusterName: string;
  }
  export class DataAwsEcsClusterSetting extends cdktf.ComplexComputedList {

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster}
  */
  export class DataAwsEcsCluster extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_cluster";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_cluster.html aws_ecs_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsClusterConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsClusterConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_cluster',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterName = config.clusterName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_name - computed: false, optional: false, required: true
    private _clusterName: string;
    public get clusterName() {
      return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
      this._clusterName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
      return this._clusterName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pending_tasks_count - computed: true, optional: false, required: false
    public get pendingTasksCount() {
      return this.getNumberAttribute('pending_tasks_count');
    }

    // registered_container_instances_count - computed: true, optional: false, required: false
    public get registeredContainerInstancesCount() {
      return this.getNumberAttribute('registered_container_instances_count');
    }

    // running_tasks_count - computed: true, optional: false, required: false
    public get runningTasksCount() {
      return this.getNumberAttribute('running_tasks_count');
    }

    // setting - computed: true, optional: false, required: false
    public setting(index: string) {
      return new DataAwsEcsClusterSetting(this, 'setting', index);
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_name: cdktf.stringToTerraform(this._clusterName),
      };
    }
  }
  export interface DataAwsEcsContainerDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#container_name DataAwsEcsContainerDefinition#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html#task_definition DataAwsEcsContainerDefinition#task_definition}
    */
    readonly taskDefinition: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition}
  */
  export class DataAwsEcsContainerDefinition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_container_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_container_definition.html aws_ecs_container_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsContainerDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsContainerDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_container_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._containerName = config.containerName;
      this._taskDefinition = config.taskDefinition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // container_name - computed: false, optional: false, required: true
    private _containerName: string;
    public get containerName() {
      return this.getStringAttribute('container_name');
    }
    public set containerName(value: string) {
      this._containerName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get containerNameInput() {
      return this._containerName
    }

    // cpu - computed: true, optional: false, required: false
    public get cpu() {
      return this.getNumberAttribute('cpu');
    }

    // disable_networking - computed: true, optional: false, required: false
    public get disableNetworking() {
      return this.getBooleanAttribute('disable_networking');
    }

    // docker_labels - computed: true, optional: false, required: false
    public dockerLabels(key: string): string {
      return new cdktf.StringMap(this, 'docker_labels').lookup(key);
    }

    // environment - computed: true, optional: false, required: false
    public environment(key: string): string {
      return new cdktf.StringMap(this, 'environment').lookup(key);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // image - computed: true, optional: false, required: false
    public get image() {
      return this.getStringAttribute('image');
    }

    // image_digest - computed: true, optional: false, required: false
    public get imageDigest() {
      return this.getStringAttribute('image_digest');
    }

    // memory - computed: true, optional: false, required: false
    public get memory() {
      return this.getNumberAttribute('memory');
    }

    // memory_reservation - computed: true, optional: false, required: false
    public get memoryReservation() {
      return this.getNumberAttribute('memory_reservation');
    }

    // task_definition - computed: false, optional: false, required: true
    private _taskDefinition: string;
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
      this._taskDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        container_name: cdktf.stringToTerraform(this._containerName),
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
      };
    }
  }
  export interface DataAwsEcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#cluster_arn DataAwsEcsService#cluster_arn}
    */
    readonly clusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html#service_name DataAwsEcsService#service_name}
    */
    readonly serviceName: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service}
  */
  export class DataAwsEcsService extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_service";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_service.html aws_ecs_service} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsServiceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsServiceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_service',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._clusterArn = config.clusterArn;
      this._serviceName = config.serviceName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cluster_arn - computed: false, optional: false, required: true
    private _clusterArn: string;
    public get clusterArn() {
      return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
      this._clusterArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
      return this._clusterArn
    }

    // desired_count - computed: true, optional: false, required: false
    public get desiredCount() {
      return this.getNumberAttribute('desired_count');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // launch_type - computed: true, optional: false, required: false
    public get launchType() {
      return this.getStringAttribute('launch_type');
    }

    // scheduling_strategy - computed: true, optional: false, required: false
    public get schedulingStrategy() {
      return this.getStringAttribute('scheduling_strategy');
    }

    // service_name - computed: false, optional: false, required: true
    private _serviceName: string;
    public get serviceName() {
      return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
      this._serviceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
      return this._serviceName
    }

    // task_definition - computed: true, optional: false, required: false
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cluster_arn: cdktf.stringToTerraform(this._clusterArn),
        service_name: cdktf.stringToTerraform(this._serviceName),
      };
    }
  }
  export interface DataAwsEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html#task_definition DataAwsEcsTaskDefinition#task_definition}
    */
    readonly taskDefinition: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition}
  */
  export class DataAwsEcsTaskDefinition extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_ecs_task_definition";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskDefinitionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsEcsTaskDefinitionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_ecs_task_definition',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._taskDefinition = config.taskDefinition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // family - computed: true, optional: false, required: false
    public get family() {
      return this.getStringAttribute('family');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // network_mode - computed: true, optional: false, required: false
    public get networkMode() {
      return this.getStringAttribute('network_mode');
    }

    // revision - computed: true, optional: false, required: false
    public get revision() {
      return this.getNumberAttribute('revision');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // task_definition - computed: false, optional: false, required: true
    private _taskDefinition: string;
    public get taskDefinition() {
      return this.getStringAttribute('task_definition');
    }
    public set taskDefinition(value: string) {
      this._taskDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionInput() {
      return this._taskDefinition
    }

    // task_role_arn - computed: true, optional: false, required: false
    public get taskRoleArn() {
      return this.getStringAttribute('task_role_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        task_definition: cdktf.stringToTerraform(this._taskDefinition),
      };
    }
  }
}
