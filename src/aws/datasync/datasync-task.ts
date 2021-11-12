// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS DataSync
*/
export interface DatasyncTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}
  */
  readonly cloudwatchLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#destination_location_arn DatasyncTask#destination_location_arn}
  */
  readonly destinationLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#name DatasyncTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#source_location_arn DatasyncTask#source_location_arn}
  */
  readonly sourceLocationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags DatasyncTask#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#tags_all DatasyncTask#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * excludes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#excludes DatasyncTask#excludes}
  */
  readonly excludes?: DatasyncTaskExcludes;
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#options DatasyncTask#options}
  */
  readonly options?: DatasyncTaskOptions;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule DatasyncTask#schedule}
  */
  readonly schedule?: DatasyncTaskSchedule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#timeouts DatasyncTask#timeouts}
  */
  readonly timeouts?: DatasyncTaskTimeouts;
}
export interface DatasyncTaskExcludes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#filter_type DatasyncTask#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#value DatasyncTask#value}
  */
  readonly value?: string;
}

export function datasyncTaskExcludesToTerraform(struct?: DatasyncTaskExcludesOutputReference | DatasyncTaskExcludes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DatasyncTaskExcludesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string | undefined; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string | undefined) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType
  }

  // value - computed: false, optional: true, required: false
  private _value?: string | undefined; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface DatasyncTaskOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#atime DatasyncTask#atime}
  */
  readonly atime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#bytes_per_second DatasyncTask#bytes_per_second}
  */
  readonly bytesPerSecond?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#gid DatasyncTask#gid}
  */
  readonly gid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#log_level DatasyncTask#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#mtime DatasyncTask#mtime}
  */
  readonly mtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#overwrite_mode DatasyncTask#overwrite_mode}
  */
  readonly overwriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#posix_permissions DatasyncTask#posix_permissions}
  */
  readonly posixPermissions?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_deleted_files DatasyncTask#preserve_deleted_files}
  */
  readonly preserveDeletedFiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#preserve_devices DatasyncTask#preserve_devices}
  */
  readonly preserveDevices?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#task_queueing DatasyncTask#task_queueing}
  */
  readonly taskQueueing?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#transfer_mode DatasyncTask#transfer_mode}
  */
  readonly transferMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#uid DatasyncTask#uid}
  */
  readonly uid?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#verify_mode DatasyncTask#verify_mode}
  */
  readonly verifyMode?: string;
}

export function datasyncTaskOptionsToTerraform(struct?: DatasyncTaskOptionsOutputReference | DatasyncTaskOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    atime: cdktf.stringToTerraform(struct!.atime),
    bytes_per_second: cdktf.numberToTerraform(struct!.bytesPerSecond),
    gid: cdktf.stringToTerraform(struct!.gid),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    mtime: cdktf.stringToTerraform(struct!.mtime),
    overwrite_mode: cdktf.stringToTerraform(struct!.overwriteMode),
    posix_permissions: cdktf.stringToTerraform(struct!.posixPermissions),
    preserve_deleted_files: cdktf.stringToTerraform(struct!.preserveDeletedFiles),
    preserve_devices: cdktf.stringToTerraform(struct!.preserveDevices),
    task_queueing: cdktf.stringToTerraform(struct!.taskQueueing),
    transfer_mode: cdktf.stringToTerraform(struct!.transferMode),
    uid: cdktf.stringToTerraform(struct!.uid),
    verify_mode: cdktf.stringToTerraform(struct!.verifyMode),
  }
}

export class DatasyncTaskOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // atime - computed: false, optional: true, required: false
  private _atime?: string | undefined; 
  public get atime() {
    return this.getStringAttribute('atime');
  }
  public set atime(value: string | undefined) {
    this._atime = value;
  }
  public resetAtime() {
    this._atime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atimeInput() {
    return this._atime
  }

  // bytes_per_second - computed: false, optional: true, required: false
  private _bytesPerSecond?: number | undefined; 
  public get bytesPerSecond() {
    return this.getNumberAttribute('bytes_per_second');
  }
  public set bytesPerSecond(value: number | undefined) {
    this._bytesPerSecond = value;
  }
  public resetBytesPerSecond() {
    this._bytesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesPerSecondInput() {
    return this._bytesPerSecond
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string | undefined; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string | undefined) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string | undefined; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel
  }

  // mtime - computed: false, optional: true, required: false
  private _mtime?: string | undefined; 
  public get mtime() {
    return this.getStringAttribute('mtime');
  }
  public set mtime(value: string | undefined) {
    this._mtime = value;
  }
  public resetMtime() {
    this._mtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtimeInput() {
    return this._mtime
  }

  // overwrite_mode - computed: false, optional: true, required: false
  private _overwriteMode?: string | undefined; 
  public get overwriteMode() {
    return this.getStringAttribute('overwrite_mode');
  }
  public set overwriteMode(value: string | undefined) {
    this._overwriteMode = value;
  }
  public resetOverwriteMode() {
    this._overwriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteModeInput() {
    return this._overwriteMode
  }

  // posix_permissions - computed: false, optional: true, required: false
  private _posixPermissions?: string | undefined; 
  public get posixPermissions() {
    return this.getStringAttribute('posix_permissions');
  }
  public set posixPermissions(value: string | undefined) {
    this._posixPermissions = value;
  }
  public resetPosixPermissions() {
    this._posixPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixPermissionsInput() {
    return this._posixPermissions
  }

  // preserve_deleted_files - computed: false, optional: true, required: false
  private _preserveDeletedFiles?: string | undefined; 
  public get preserveDeletedFiles() {
    return this.getStringAttribute('preserve_deleted_files');
  }
  public set preserveDeletedFiles(value: string | undefined) {
    this._preserveDeletedFiles = value;
  }
  public resetPreserveDeletedFiles() {
    this._preserveDeletedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDeletedFilesInput() {
    return this._preserveDeletedFiles
  }

  // preserve_devices - computed: false, optional: true, required: false
  private _preserveDevices?: string | undefined; 
  public get preserveDevices() {
    return this.getStringAttribute('preserve_devices');
  }
  public set preserveDevices(value: string | undefined) {
    this._preserveDevices = value;
  }
  public resetPreserveDevices() {
    this._preserveDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDevicesInput() {
    return this._preserveDevices
  }

  // task_queueing - computed: false, optional: true, required: false
  private _taskQueueing?: string | undefined; 
  public get taskQueueing() {
    return this.getStringAttribute('task_queueing');
  }
  public set taskQueueing(value: string | undefined) {
    this._taskQueueing = value;
  }
  public resetTaskQueueing() {
    this._taskQueueing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskQueueingInput() {
    return this._taskQueueing
  }

  // transfer_mode - computed: false, optional: true, required: false
  private _transferMode?: string | undefined; 
  public get transferMode() {
    return this.getStringAttribute('transfer_mode');
  }
  public set transferMode(value: string | undefined) {
    this._transferMode = value;
  }
  public resetTransferMode() {
    this._transferMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferModeInput() {
    return this._transferMode
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string | undefined; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string | undefined) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid
  }

  // verify_mode - computed: false, optional: true, required: false
  private _verifyMode?: string | undefined; 
  public get verifyMode() {
    return this.getStringAttribute('verify_mode');
  }
  public set verifyMode(value: string | undefined) {
    this._verifyMode = value;
  }
  public resetVerifyMode() {
    this._verifyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyModeInput() {
    return this._verifyMode
  }
}
export interface DatasyncTaskSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#schedule_expression DatasyncTask#schedule_expression}
  */
  readonly scheduleExpression: string;
}

export function datasyncTaskScheduleToTerraform(struct?: DatasyncTaskScheduleOutputReference | DatasyncTaskSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
  }
}

export class DatasyncTaskScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression
  }
}
export interface DatasyncTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html#create DatasyncTask#create}
  */
  readonly create?: string;
}

export function datasyncTaskTimeoutsToTerraform(struct?: DatasyncTaskTimeoutsOutputReference | DatasyncTaskTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class DatasyncTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task}
*/
export class DatasyncTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_datasync_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/datasync_task.html aws_datasync_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_task',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cloudwatchLogGroupArn = config.cloudwatchLogGroupArn;
    this._destinationLocationArn = config.destinationLocationArn;
    this._name = config.name;
    this._sourceLocationArn = config.sourceLocationArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._excludes = config.excludes;
    this._options = config.options;
    this._schedule = config.schedule;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_log_group_arn - computed: false, optional: true, required: false
  private _cloudwatchLogGroupArn?: string | undefined; 
  public get cloudwatchLogGroupArn() {
    return this.getStringAttribute('cloudwatch_log_group_arn');
  }
  public set cloudwatchLogGroupArn(value: string | undefined) {
    this._cloudwatchLogGroupArn = value;
  }
  public resetCloudwatchLogGroupArn() {
    this._cloudwatchLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupArnInput() {
    return this._cloudwatchLogGroupArn
  }

  // destination_location_arn - computed: false, optional: false, required: true
  private _destinationLocationArn?: string; 
  public get destinationLocationArn() {
    return this.getStringAttribute('destination_location_arn');
  }
  public set destinationLocationArn(value: string) {
    this._destinationLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLocationArnInput() {
    return this._destinationLocationArn
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
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

  // source_location_arn - computed: false, optional: false, required: true
  private _sourceLocationArn?: string; 
  public get sourceLocationArn() {
    return this.getStringAttribute('source_location_arn');
  }
  public set sourceLocationArn(value: string) {
    this._sourceLocationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationArnInput() {
    return this._sourceLocationArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: DatasyncTaskExcludes | undefined; 
  private __excludesOutput = new DatasyncTaskExcludesOutputReference(this as any, "excludes", true);
  public get excludes() {
    return this.__excludesOutput;
  }
  public putExcludes(value: DatasyncTaskExcludes | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // options - computed: false, optional: true, required: false
  private _options?: DatasyncTaskOptions | undefined; 
  private __optionsOutput = new DatasyncTaskOptionsOutputReference(this as any, "options", true);
  public get options() {
    return this.__optionsOutput;
  }
  public putOptions(value: DatasyncTaskOptions | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: DatasyncTaskSchedule | undefined; 
  private __scheduleOutput = new DatasyncTaskScheduleOutputReference(this as any, "schedule", true);
  public get schedule() {
    return this.__scheduleOutput;
  }
  public putSchedule(value: DatasyncTaskSchedule | undefined) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DatasyncTaskTimeouts | undefined; 
  private __timeoutsOutput = new DatasyncTaskTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DatasyncTaskTimeouts | undefined) {
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
      cloudwatch_log_group_arn: cdktf.stringToTerraform(this._cloudwatchLogGroupArn),
      destination_location_arn: cdktf.stringToTerraform(this._destinationLocationArn),
      name: cdktf.stringToTerraform(this._name),
      source_location_arn: cdktf.stringToTerraform(this._sourceLocationArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      excludes: datasyncTaskExcludesToTerraform(this._excludes),
      options: datasyncTaskOptionsToTerraform(this._options),
      schedule: datasyncTaskScheduleToTerraform(this._schedule),
      timeouts: datasyncTaskTimeoutsToTerraform(this._timeouts),
    };
  }
}
