# `aws_datasync_task`

Refer to the Terraform Registory for docs: [`aws_datasync_task`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task).

# `datasyncTask` Submodule <a name="`datasyncTask` Submodule" id="@cdktf/aws-cdk.datasyncTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncTask <a name="DatasyncTask" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task aws_datasync_task}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

new datasyncTask.DatasyncTask(scope: Construct, id: string, config: DatasyncTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig">DatasyncTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn">resetCloudwatchLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExcludes` <a name="putExcludes" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putExcludes"></a>

```typescript
public putExcludes(value: DatasyncTaskExcludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `putOptions` <a name="putOptions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putOptions"></a>

```typescript
public putOptions(value: DatasyncTaskOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putSchedule"></a>

```typescript
public putSchedule(value: DatasyncTaskSchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putTimeouts"></a>

```typescript
public putTimeouts(value: DatasyncTaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

---

##### `resetCloudwatchLogGroupArn` <a name="resetCloudwatchLogGroupArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetCloudwatchLogGroupArn"></a>

```typescript
public resetCloudwatchLogGroupArn(): void
```

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isConstruct"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

datasyncTask.DatasyncTask.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformElement"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

datasyncTask.DatasyncTask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformResource"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

datasyncTask.DatasyncTask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.excludes">excludes</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.options">options</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.schedule">schedule</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput">cloudwatchLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.destinationLocationArnInput">destinationLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.sourceLocationArnInput">sourceLocationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.excludes"></a>

```typescript
public readonly excludes: DatasyncTaskExcludesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference">DatasyncTaskExcludesOutputReference</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference">DatasyncTaskOptionsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference">DatasyncTaskScheduleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.timeouts"></a>

```typescript
public readonly timeouts: DatasyncTaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference">DatasyncTaskTimeoutsOutputReference</a>

---

##### `cloudwatchLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogGroupArnInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogGroupArnInput: string;
```

- *Type:* string

---

##### `destinationLocationArnInput`<sup>Optional</sup> <a name="destinationLocationArnInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.destinationLocationArnInput"></a>

```typescript
public readonly destinationLocationArnInput: string;
```

- *Type:* string

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.excludesInput"></a>

```typescript
public readonly excludesInput: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.optionsInput"></a>

```typescript
public readonly optionsInput: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---

##### `sourceLocationArnInput`<sup>Optional</sup> <a name="sourceLocationArnInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.sourceLocationArnInput"></a>

```typescript
public readonly sourceLocationArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DatasyncTaskTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> | cdktf.IResolvable

---

##### `cloudwatchLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.datasyncTask.DatasyncTask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncTaskConfig <a name="DatasyncTaskConfig" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

const datasyncTaskConfig: datasyncTask.DatasyncTaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn">destinationLocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn">cloudwatchLogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.excludes">excludes</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#id DatasyncTask#id}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#name DatasyncTask#name}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.options">options</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | options block. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags DatasyncTask#tags}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags_all DatasyncTask#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destinationLocationArn`<sup>Required</sup> <a name="destinationLocationArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.destinationLocationArn"></a>

```typescript
public readonly destinationLocationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#destination_location_arn DatasyncTask#destination_location_arn}.

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#source_location_arn DatasyncTask#source_location_arn}.

---

##### `cloudwatchLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogGroupArn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.cloudwatchLogGroupArn"></a>

```typescript
public readonly cloudwatchLogGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#cloudwatch_log_group_arn DatasyncTask#cloudwatch_log_group_arn}.

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.excludes"></a>

```typescript
public readonly excludes: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#excludes DatasyncTask#excludes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#id DatasyncTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#name DatasyncTask#name}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.options"></a>

```typescript
public readonly options: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#options DatasyncTask#options}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.schedule"></a>

```typescript
public readonly schedule: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#schedule DatasyncTask#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags DatasyncTask#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#tags_all DatasyncTask#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatasyncTaskTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#timeouts DatasyncTask#timeouts}

---

### DatasyncTaskExcludes <a name="DatasyncTaskExcludes" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

const datasyncTaskExcludes: datasyncTask.DatasyncTaskExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#value DatasyncTask#value}. |

---

##### `filterType`<sup>Optional</sup> <a name="filterType" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#filter_type DatasyncTask#filter_type}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#value DatasyncTask#value}.

---

### DatasyncTaskOptions <a name="DatasyncTaskOptions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

const datasyncTaskOptions: datasyncTask.DatasyncTaskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.atime">atime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#atime DatasyncTask#atime}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.gid">gid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#gid DatasyncTask#gid}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.logLevel">logLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#log_level DatasyncTask#log_level}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.mtime">mtime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#mtime DatasyncTask#mtime}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.transferMode">transferMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.uid">uid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#uid DatasyncTask#uid}. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.verifyMode">verifyMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}. |

---

##### `atime`<sup>Optional</sup> <a name="atime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#atime DatasyncTask#atime}.

---

##### `bytesPerSecond`<sup>Optional</sup> <a name="bytesPerSecond" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#bytes_per_second DatasyncTask#bytes_per_second}.

---

##### `gid`<sup>Optional</sup> <a name="gid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#gid DatasyncTask#gid}.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#log_level DatasyncTask#log_level}.

---

##### `mtime`<sup>Optional</sup> <a name="mtime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#mtime DatasyncTask#mtime}.

---

##### `overwriteMode`<sup>Optional</sup> <a name="overwriteMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#overwrite_mode DatasyncTask#overwrite_mode}.

---

##### `posixPermissions`<sup>Optional</sup> <a name="posixPermissions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#posix_permissions DatasyncTask#posix_permissions}.

---

##### `preserveDeletedFiles`<sup>Optional</sup> <a name="preserveDeletedFiles" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_deleted_files DatasyncTask#preserve_deleted_files}.

---

##### `preserveDevices`<sup>Optional</sup> <a name="preserveDevices" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#preserve_devices DatasyncTask#preserve_devices}.

---

##### `taskQueueing`<sup>Optional</sup> <a name="taskQueueing" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#task_queueing DatasyncTask#task_queueing}.

---

##### `transferMode`<sup>Optional</sup> <a name="transferMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#transfer_mode DatasyncTask#transfer_mode}.

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#uid DatasyncTask#uid}.

---

##### `verifyMode`<sup>Optional</sup> <a name="verifyMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#verify_mode DatasyncTask#verify_mode}.

---

### DatasyncTaskSchedule <a name="DatasyncTaskSchedule" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

const datasyncTaskSchedule: datasyncTask.DatasyncTaskSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}. |

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#schedule_expression DatasyncTask#schedule_expression}.

---

### DatasyncTaskTimeouts <a name="DatasyncTaskTimeouts" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

const datasyncTaskTimeouts: datasyncTask.DatasyncTaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#create DatasyncTask#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_task#create DatasyncTask#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncTaskExcludesOutputReference <a name="DatasyncTaskExcludesOutputReference" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

new datasyncTask.DatasyncTaskExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType">resetFilterType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilterType` <a name="resetFilterType" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resetFilterType"></a>

```typescript
public resetFilterType(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskExcludes">DatasyncTaskExcludes</a>

---


### DatasyncTaskOptionsOutputReference <a name="DatasyncTaskOptionsOutputReference" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

new datasyncTask.DatasyncTaskOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime">resetAtime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond">resetBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid">resetGid</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime">resetMtime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode">resetOverwriteMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions">resetPosixPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles">resetPreserveDeletedFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices">resetPreserveDevices</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing">resetTaskQueueing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode">resetTransferMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid">resetUid</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode">resetVerifyMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAtime` <a name="resetAtime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetAtime"></a>

```typescript
public resetAtime(): void
```

##### `resetBytesPerSecond` <a name="resetBytesPerSecond" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetBytesPerSecond"></a>

```typescript
public resetBytesPerSecond(): void
```

##### `resetGid` <a name="resetGid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetGid"></a>

```typescript
public resetGid(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMtime` <a name="resetMtime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetMtime"></a>

```typescript
public resetMtime(): void
```

##### `resetOverwriteMode` <a name="resetOverwriteMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetOverwriteMode"></a>

```typescript
public resetOverwriteMode(): void
```

##### `resetPosixPermissions` <a name="resetPosixPermissions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPosixPermissions"></a>

```typescript
public resetPosixPermissions(): void
```

##### `resetPreserveDeletedFiles` <a name="resetPreserveDeletedFiles" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDeletedFiles"></a>

```typescript
public resetPreserveDeletedFiles(): void
```

##### `resetPreserveDevices` <a name="resetPreserveDevices" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetPreserveDevices"></a>

```typescript
public resetPreserveDevices(): void
```

##### `resetTaskQueueing` <a name="resetTaskQueueing" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetTaskQueueing"></a>

```typescript
public resetTaskQueueing(): void
```

##### `resetTransferMode` <a name="resetTransferMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetTransferMode"></a>

```typescript
public resetTransferMode(): void
```

##### `resetUid` <a name="resetUid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```

##### `resetVerifyMode` <a name="resetVerifyMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.resetVerifyMode"></a>

```typescript
public resetVerifyMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput">atimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput">bytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput">gidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput">mtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput">overwriteModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput">posixPermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput">preserveDeletedFilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput">preserveDevicesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput">taskQueueingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput">transferModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput">verifyModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime">atime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond">bytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid">gid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime">mtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode">overwriteMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions">posixPermissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles">preserveDeletedFiles</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices">preserveDevices</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing">taskQueueing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode">transferMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode">verifyMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `atimeInput`<sup>Optional</sup> <a name="atimeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.atimeInput"></a>

```typescript
public readonly atimeInput: string;
```

- *Type:* string

---

##### `bytesPerSecondInput`<sup>Optional</sup> <a name="bytesPerSecondInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecondInput"></a>

```typescript
public readonly bytesPerSecondInput: number;
```

- *Type:* number

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: string;
```

- *Type:* string

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `mtimeInput`<sup>Optional</sup> <a name="mtimeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtimeInput"></a>

```typescript
public readonly mtimeInput: string;
```

- *Type:* string

---

##### `overwriteModeInput`<sup>Optional</sup> <a name="overwriteModeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteModeInput"></a>

```typescript
public readonly overwriteModeInput: string;
```

- *Type:* string

---

##### `posixPermissionsInput`<sup>Optional</sup> <a name="posixPermissionsInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissionsInput"></a>

```typescript
public readonly posixPermissionsInput: string;
```

- *Type:* string

---

##### `preserveDeletedFilesInput`<sup>Optional</sup> <a name="preserveDeletedFilesInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFilesInput"></a>

```typescript
public readonly preserveDeletedFilesInput: string;
```

- *Type:* string

---

##### `preserveDevicesInput`<sup>Optional</sup> <a name="preserveDevicesInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevicesInput"></a>

```typescript
public readonly preserveDevicesInput: string;
```

- *Type:* string

---

##### `taskQueueingInput`<sup>Optional</sup> <a name="taskQueueingInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueingInput"></a>

```typescript
public readonly taskQueueingInput: string;
```

- *Type:* string

---

##### `transferModeInput`<sup>Optional</sup> <a name="transferModeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferModeInput"></a>

```typescript
public readonly transferModeInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `verifyModeInput`<sup>Optional</sup> <a name="verifyModeInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyModeInput"></a>

```typescript
public readonly verifyModeInput: string;
```

- *Type:* string

---

##### `atime`<sup>Required</sup> <a name="atime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.atime"></a>

```typescript
public readonly atime: string;
```

- *Type:* string

---

##### `bytesPerSecond`<sup>Required</sup> <a name="bytesPerSecond" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.bytesPerSecond"></a>

```typescript
public readonly bytesPerSecond: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.gid"></a>

```typescript
public readonly gid: string;
```

- *Type:* string

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `mtime`<sup>Required</sup> <a name="mtime" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.mtime"></a>

```typescript
public readonly mtime: string;
```

- *Type:* string

---

##### `overwriteMode`<sup>Required</sup> <a name="overwriteMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.overwriteMode"></a>

```typescript
public readonly overwriteMode: string;
```

- *Type:* string

---

##### `posixPermissions`<sup>Required</sup> <a name="posixPermissions" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.posixPermissions"></a>

```typescript
public readonly posixPermissions: string;
```

- *Type:* string

---

##### `preserveDeletedFiles`<sup>Required</sup> <a name="preserveDeletedFiles" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDeletedFiles"></a>

```typescript
public readonly preserveDeletedFiles: string;
```

- *Type:* string

---

##### `preserveDevices`<sup>Required</sup> <a name="preserveDevices" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.preserveDevices"></a>

```typescript
public readonly preserveDevices: string;
```

- *Type:* string

---

##### `taskQueueing`<sup>Required</sup> <a name="taskQueueing" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.taskQueueing"></a>

```typescript
public readonly taskQueueing: string;
```

- *Type:* string

---

##### `transferMode`<sup>Required</sup> <a name="transferMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.transferMode"></a>

```typescript
public readonly transferMode: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `verifyMode`<sup>Required</sup> <a name="verifyMode" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.verifyMode"></a>

```typescript
public readonly verifyMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskOptions">DatasyncTaskOptions</a>

---


### DatasyncTaskScheduleOutputReference <a name="DatasyncTaskScheduleOutputReference" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

new datasyncTask.DatasyncTaskScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput">scheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scheduleExpressionInput`<sup>Optional</sup> <a name="scheduleExpressionInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpressionInput"></a>

```typescript
public readonly scheduleExpressionInput: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskSchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskSchedule">DatasyncTaskSchedule</a>

---


### DatasyncTaskTimeoutsOutputReference <a name="DatasyncTaskTimeoutsOutputReference" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { datasyncTask } from '@cdktf/aws-cdk'

new datasyncTask.DatasyncTaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncTaskTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncTask.DatasyncTaskTimeouts">DatasyncTaskTimeouts</a> | cdktf.IResolvable

---



