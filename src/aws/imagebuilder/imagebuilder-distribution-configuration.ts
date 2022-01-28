// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Image Builder
*/
export interface ImagebuilderDistributionConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags ImagebuilderDistributionConfiguration#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#tags_all ImagebuilderDistributionConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * distribution block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#distribution ImagebuilderDistributionConfiguration#distribution}
  */
  readonly distribution: ImagebuilderDistributionConfigurationDistribution[];
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_groups ImagebuilderDistributionConfiguration#user_groups}
  */
  readonly userGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#user_ids ImagebuilderDistributionConfiguration#user_ids}
  */
  readonly userIds?: string[];
}

export function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userGroups),
    user_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.userIds),
  }
}

export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._userGroups) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    if (this._userIds) {
      hasAnyValues = true;
      internalValueResult.userIds = this._userIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission | undefined) {
    if (value === undefined) {
      this._userGroups = undefined;
      this._userIds = undefined;
    }
    else {
      this._userGroups = value.userGroups;
      this._userIds = value.userIds;
    }
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return this.getListAttribute('user_ids');
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_tags ImagebuilderDistributionConfiguration#ami_tags}
  */
  readonly amiTags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#kms_key_id ImagebuilderDistributionConfiguration#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#name ImagebuilderDistributionConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#target_account_ids ImagebuilderDistributionConfiguration#target_account_ids}
  */
  readonly targetAccountIds?: string[];
  /**
  * launch_permission block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#launch_permission ImagebuilderDistributionConfiguration#launch_permission}
  */
  readonly launchPermission?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission;
}

export function imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ami_tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.amiTags),
    description: cdktf.stringToTerraform(struct!.description),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    name: cdktf.stringToTerraform(struct!.name),
    target_account_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetAccountIds),
    launch_permission: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionToTerraform(struct!.launchPermission),
  }
}

export class ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._amiTags) {
      hasAnyValues = true;
      internalValueResult.amiTags = this._amiTags;
    }
    if (this._description) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._kmsKeyId) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._name) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._targetAccountIds) {
      hasAnyValues = true;
      internalValueResult.targetAccountIds = this._targetAccountIds;
    }
    if (this._launchPermission) {
      hasAnyValues = true;
      internalValueResult.launchPermission = this._launchPermission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration | undefined) {
    if (value === undefined) {
      this._amiTags = undefined;
      this._description = undefined;
      this._kmsKeyId = undefined;
      this._name = undefined;
      this._targetAccountIds = undefined;
      this._launchPermission.internalValue = undefined;
    }
    else {
      this._amiTags = value.amiTags;
      this._description = value.description;
      this._kmsKeyId = value.kmsKeyId;
      this._name = value.name;
      this._targetAccountIds = value.targetAccountIds;
      this._launchPermission.internalValue = value.launchPermission;
    }
  }

  // ami_tags - computed: false, optional: true, required: false
  private _amiTags?: { [key: string]: string } | cdktf.IResolvable; 
  public get amiTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ami_tags') as any;
  }
  public set amiTags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._amiTags = value;
  }
  public resetAmiTags() {
    this._amiTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amiTagsInput() {
    return this._amiTags;
  }

  // description - computed: false, optional: true, required: false
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

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name - computed: false, optional: true, required: false
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

  // target_account_ids - computed: false, optional: true, required: false
  private _targetAccountIds?: string[]; 
  public get targetAccountIds() {
    return this.getListAttribute('target_account_ids');
  }
  public set targetAccountIds(value: string[]) {
    this._targetAccountIds = value;
  }
  public resetTargetAccountIds() {
    this._targetAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAccountIdsInput() {
    return this._targetAccountIds;
  }

  // launch_permission - computed: false, optional: true, required: false
  private _launchPermission = new ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(this as any, "launch_permission", true);
  public get launchPermission() {
    return this._launchPermission;
  }
  public putLaunchPermission(value: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission) {
    this._launchPermission.internalValue = value;
  }
  public resetLaunchPermission() {
    this._launchPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchPermissionInput() {
    return this._launchPermission.internalValue;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#repository_name ImagebuilderDistributionConfiguration#repository_name}
  */
  readonly repositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#service ImagebuilderDistributionConfiguration#service}
  */
  readonly service: string;
}

export function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._repositoryName) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    if (this._service) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository | undefined) {
    if (value === undefined) {
      this._repositoryName = undefined;
      this._service = undefined;
    }
    else {
      this._repositoryName = value.repositoryName;
      this._service = value.service;
    }
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#container_tags ImagebuilderDistributionConfiguration#container_tags}
  */
  readonly containerTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#description ImagebuilderDistributionConfiguration#description}
  */
  readonly description?: string;
  /**
  * target_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#target_repository ImagebuilderDistributionConfiguration#target_repository}
  */
  readonly targetRepository: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository;
}

export function imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference | ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerTags),
    description: cdktf.stringToTerraform(struct!.description),
    target_repository: imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryToTerraform(struct!.targetRepository),
  }
}

export class ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._containerTags) {
      hasAnyValues = true;
      internalValueResult.containerTags = this._containerTags;
    }
    if (this._description) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._targetRepository) {
      hasAnyValues = true;
      internalValueResult.targetRepository = this._targetRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration | undefined) {
    if (value === undefined) {
      this._containerTags = undefined;
      this._description = undefined;
      this._targetRepository.internalValue = undefined;
    }
    else {
      this._containerTags = value.containerTags;
      this._description = value.description;
      this._targetRepository.internalValue = value.targetRepository;
    }
  }

  // container_tags - computed: false, optional: true, required: false
  private _containerTags?: string[]; 
  public get containerTags() {
    return this.getListAttribute('container_tags');
  }
  public set containerTags(value: string[]) {
    this._containerTags = value;
  }
  public resetContainerTags() {
    this._containerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTagsInput() {
    return this._containerTags;
  }

  // description - computed: false, optional: true, required: false
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

  // target_repository - computed: false, optional: false, required: true
  private _targetRepository = new ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(this as any, "target_repository", true);
  public get targetRepository() {
    return this._targetRepository;
  }
  public putTargetRepository(value: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository) {
    this._targetRepository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRepositoryInput() {
    return this._targetRepository.internalValue;
  }
}
export interface ImagebuilderDistributionConfigurationDistribution {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#license_configuration_arns ImagebuilderDistributionConfiguration#license_configuration_arns}
  */
  readonly licenseConfigurationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#region ImagebuilderDistributionConfiguration#region}
  */
  readonly region: string;
  /**
  * ami_distribution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#ami_distribution_configuration ImagebuilderDistributionConfiguration#ami_distribution_configuration}
  */
  readonly amiDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration;
  /**
  * container_distribution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html#container_distribution_configuration ImagebuilderDistributionConfiguration#container_distribution_configuration}
  */
  readonly containerDistributionConfiguration?: ImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration;
}

export function imagebuilderDistributionConfigurationDistributionToTerraform(struct?: ImagebuilderDistributionConfigurationDistribution): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license_configuration_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.licenseConfigurationArns),
    region: cdktf.stringToTerraform(struct!.region),
    ami_distribution_configuration: imagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationToTerraform(struct!.amiDistributionConfiguration),
    container_distribution_configuration: imagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationToTerraform(struct!.containerDistributionConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration}
*/
export class ImagebuilderDistributionConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_imagebuilder_distribution_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/imagebuilder_distribution_configuration.html aws_imagebuilder_distribution_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagebuilderDistributionConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ImagebuilderDistributionConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_imagebuilder_distribution_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._distribution = config.distribution;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // date_updated - computed: true, optional: false, required: false
  public get dateUpdated() {
    return this.getStringAttribute('date_updated');
  }

  // description - computed: false, optional: true, required: false
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
    return this._name;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution?: ImagebuilderDistributionConfigurationDistribution[]; 
  public get distribution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('distribution') as any;
  }
  public set distribution(value: ImagebuilderDistributionConfigurationDistribution[]) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      distribution: cdktf.listMapper(imagebuilderDistributionConfigurationDistributionToTerraform)(this._distribution),
    };
  }
}
