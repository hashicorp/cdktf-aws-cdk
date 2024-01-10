# `macie2ClassificationJob` Submodule <a name="`macie2ClassificationJob` Submodule" id="@cdktf/aws-cdk.macie2ClassificationJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2ClassificationJob <a name="Macie2ClassificationJob" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job aws_macie2_classification_job}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJob(scope: Construct, id: string, config: Macie2ClassificationJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig">Macie2ClassificationJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition">putS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency">putScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds">resetCustomDataIdentifierIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun">resetInitialRun</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus">resetJobStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency">resetScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3JobDefinition` <a name="putS3JobDefinition" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition"></a>

```typescript
public putS3JobDefinition(value: Macie2ClassificationJobS3JobDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putS3JobDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `putScheduleFrequency` <a name="putScheduleFrequency" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency"></a>

```typescript
public putScheduleFrequency(value: Macie2ClassificationJobScheduleFrequency): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.putScheduleFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `resetCustomDataIdentifierIds` <a name="resetCustomDataIdentifierIds" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetCustomDataIdentifierIds"></a>

```typescript
public resetCustomDataIdentifierIds(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialRun` <a name="resetInitialRun" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetInitialRun"></a>

```typescript
public resetInitialRun(): void
```

##### `resetJobStatus` <a name="resetJobStatus" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetJobStatus"></a>

```typescript
public resetJobStatus(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetScheduleFrequency` <a name="resetScheduleFrequency" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetScheduleFrequency"></a>

```typescript
public resetScheduleFrequency(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Macie2ClassificationJob resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isConstruct"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

macie2ClassificationJob.Macie2ClassificationJob.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Macie2ClassificationJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Macie2ClassificationJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Macie2ClassificationJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Macie2ClassificationJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn">jobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition">s3JobDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency">scheduleFrequency</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails">userPausedDetails</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput">customDataIdentifierIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput">initialRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput">jobStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput">jobTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput">s3JobDefinitionInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput">scheduleFrequencyInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds">customDataIdentifierIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun">initialRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus">jobStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobType">jobType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `jobArn`<sup>Required</sup> <a name="jobArn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobArn"></a>

```typescript
public readonly jobArn: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `s3JobDefinition`<sup>Required</sup> <a name="s3JobDefinition" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinition"></a>

```typescript
public readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference">Macie2ClassificationJobS3JobDefinitionOutputReference</a>

---

##### `scheduleFrequency`<sup>Required</sup> <a name="scheduleFrequency" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: Macie2ClassificationJobScheduleFrequencyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference">Macie2ClassificationJobScheduleFrequencyOutputReference</a>

---

##### `userPausedDetails`<sup>Required</sup> <a name="userPausedDetails" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.userPausedDetails"></a>

```typescript
public readonly userPausedDetails: Macie2ClassificationJobUserPausedDetailsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList">Macie2ClassificationJobUserPausedDetailsList</a>

---

##### `customDataIdentifierIdsInput`<sup>Optional</sup> <a name="customDataIdentifierIdsInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIdsInput"></a>

```typescript
public readonly customDataIdentifierIdsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialRunInput`<sup>Optional</sup> <a name="initialRunInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.initialRunInput"></a>

```typescript
public readonly initialRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobStatusInput`<sup>Optional</sup> <a name="jobStatusInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatusInput"></a>

```typescript
public readonly jobStatusInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `s3JobDefinitionInput`<sup>Optional</sup> <a name="s3JobDefinitionInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.s3JobDefinitionInput"></a>

```typescript
public readonly s3JobDefinitionInput: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `scheduleFrequencyInput`<sup>Optional</sup> <a name="scheduleFrequencyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.scheduleFrequencyInput"></a>

```typescript
public readonly scheduleFrequencyInput: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `customDataIdentifierIds`<sup>Required</sup> <a name="customDataIdentifierIds" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.customDataIdentifierIds"></a>

```typescript
public readonly customDataIdentifierIds: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialRun`<sup>Required</sup> <a name="initialRun" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.initialRun"></a>

```typescript
public readonly initialRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jobStatus`<sup>Required</sup> <a name="jobStatus" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobStatus"></a>

```typescript
public readonly jobStatus: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2ClassificationJobConfig <a name="Macie2ClassificationJobConfig" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobConfig: macie2ClassificationJob.Macie2ClassificationJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType">jobType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#job_type Macie2ClassificationJob#job_type}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition">s3JobDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | s3_job_definition block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds">customDataIdentifierIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#description Macie2ClassificationJob#description}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#id Macie2ClassificationJob#id}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun">initialRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus">jobStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#job_status Macie2ClassificationJob#job_status}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#name Macie2ClassificationJob#name}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency">scheduleFrequency</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | schedule_frequency block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tags Macie2ClassificationJob#tags}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobType"></a>

```typescript
public readonly jobType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#job_type Macie2ClassificationJob#job_type}.

---

##### `s3JobDefinition`<sup>Required</sup> <a name="s3JobDefinition" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.s3JobDefinition"></a>

```typescript
public readonly s3JobDefinition: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

s3_job_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#s3_job_definition Macie2ClassificationJob#s3_job_definition}

---

##### `customDataIdentifierIds`<sup>Optional</sup> <a name="customDataIdentifierIds" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.customDataIdentifierIds"></a>

```typescript
public readonly customDataIdentifierIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#custom_data_identifier_ids Macie2ClassificationJob#custom_data_identifier_ids}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#description Macie2ClassificationJob#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#id Macie2ClassificationJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialRun`<sup>Optional</sup> <a name="initialRun" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.initialRun"></a>

```typescript
public readonly initialRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#initial_run Macie2ClassificationJob#initial_run}.

---

##### `jobStatus`<sup>Optional</sup> <a name="jobStatus" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.jobStatus"></a>

```typescript
public readonly jobStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#job_status Macie2ClassificationJob#job_status}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#name Macie2ClassificationJob#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#name_prefix Macie2ClassificationJob#name_prefix}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#sampling_percentage Macie2ClassificationJob#sampling_percentage}.

---

##### `scheduleFrequency`<sup>Optional</sup> <a name="scheduleFrequency" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.scheduleFrequency"></a>

```typescript
public readonly scheduleFrequency: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

schedule_frequency block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#schedule_frequency Macie2ClassificationJob#schedule_frequency}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tags Macie2ClassificationJob#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tags_all Macie2ClassificationJob#tags_all}.

---

### Macie2ClassificationJobS3JobDefinition <a name="Macie2ClassificationJobS3JobDefinition" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinition: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions">bucketDefinitions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | bucket_definitions block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping">scoping</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | scoping block. |

---

##### `bucketDefinitions`<sup>Optional</sup> <a name="bucketDefinitions" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.bucketDefinitions"></a>

```typescript
public readonly bucketDefinitions: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

bucket_definitions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#bucket_definitions Macie2ClassificationJob#bucket_definitions}

---

##### `scoping`<sup>Optional</sup> <a name="scoping" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition.property.scoping"></a>

```typescript
public readonly scoping: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

scoping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#scoping Macie2ClassificationJob#scoping}

---

### Macie2ClassificationJobS3JobDefinitionBucketDefinitions <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitions" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionBucketDefinitions: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#account_id Macie2ClassificationJob#account_id}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets">buckets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#buckets Macie2ClassificationJob#buckets}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#account_id Macie2ClassificationJob#account_id}.

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions.property.buckets"></a>

```typescript
public readonly buckets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#buckets Macie2ClassificationJob#buckets}.

---

### Macie2ClassificationJobS3JobDefinitionScoping <a name="Macie2ClassificationJobS3JobDefinitionScoping" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScoping: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes">excludes</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | excludes block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes">includes</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | includes block. |

---

##### `excludes`<sup>Optional</sup> <a name="excludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

excludes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#excludes Macie2ClassificationJob#excludes}

---

##### `includes`<sup>Optional</sup> <a name="includes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

includes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#includes Macie2ClassificationJob#includes}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludes <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingExcludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `simpleScopeTerm`<sup>Optional</sup> <a name="simpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="tagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | tag_values block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludes <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingIncludes: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and">and</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | and block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes.property.and"></a>

```typescript
public readonly and: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#and Macie2ClassificationJob#and}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAnd: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | simple_scope_term block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | tag_scope_term block. |

---

##### `simpleScopeTerm`<sup>Optional</sup> <a name="simpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

simple_scope_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#simple_scope_term Macie2ClassificationJob#simple_scope_term}

---

##### `tagScopeTerm`<sup>Optional</sup> <a name="tagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

tag_scope_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tag_scope_term Macie2ClassificationJob#tag_scope_term}

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#values Macie2ClassificationJob#values}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator">comparator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues">tagValues</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | tag_values block. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}. |

---

##### `comparator`<sup>Optional</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#comparator Macie2ClassificationJob#comparator}.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.tagValues"></a>

```typescript
public readonly tagValues: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

tag_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#tag_values Macie2ClassificationJob#tag_values}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#target Macie2ClassificationJob#target}.

---

### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues: macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#key Macie2ClassificationJob#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#value Macie2ClassificationJob#value}.

---

### Macie2ClassificationJobScheduleFrequency <a name="Macie2ClassificationJobScheduleFrequency" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobScheduleFrequency: macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule">dailySchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule">monthlySchedule</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule">weeklySchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}. |

---

##### `dailySchedule`<sup>Optional</sup> <a name="dailySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#daily_schedule Macie2ClassificationJob#daily_schedule}.

---

##### `monthlySchedule`<sup>Optional</sup> <a name="monthlySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#monthly_schedule Macie2ClassificationJob#monthly_schedule}.

---

##### `weeklySchedule`<sup>Optional</sup> <a name="weeklySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/macie2_classification_job#weekly_schedule Macie2ClassificationJob#weekly_schedule}.

---

### Macie2ClassificationJobUserPausedDetails <a name="Macie2ClassificationJobUserPausedDetails" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

const macie2ClassificationJobUserPausedDetails: macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---


### Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference <a name="Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput">bucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets">buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketsInput`<sup>Optional</sup> <a name="bucketsInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.bucketsInput"></a>

```typescript
public readonly bucketsInput: string[];
```

- *Type:* string[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.buckets"></a>

```typescript
public readonly buckets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>

---


### Macie2ClassificationJobS3JobDefinitionOutputReference <a name="Macie2ClassificationJobS3JobDefinitionOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions">putBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping">putScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions">resetBucketDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping">resetScoping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBucketDefinitions` <a name="putBucketDefinitions" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions"></a>

```typescript
public putBucketDefinitions(value: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putBucketDefinitions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---

##### `putScoping` <a name="putScoping" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping"></a>

```typescript
public putScoping(value: Macie2ClassificationJobS3JobDefinitionScoping): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.putScoping.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `resetBucketDefinitions` <a name="resetBucketDefinitions" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetBucketDefinitions"></a>

```typescript
public resetBucketDefinitions(): void
```

##### `resetScoping` <a name="resetScoping" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.resetScoping"></a>

```typescript
public resetScoping(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions">bucketDefinitions</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping">scoping</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput">bucketDefinitionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput">scopingInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketDefinitions`<sup>Required</sup> <a name="bucketDefinitions" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitions"></a>

```typescript
public readonly bucketDefinitions: Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList">Macie2ClassificationJobS3JobDefinitionBucketDefinitionsList</a>

---

##### `scoping`<sup>Required</sup> <a name="scoping" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scoping"></a>

```typescript
public readonly scoping: Macie2ClassificationJobS3JobDefinitionScopingOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference">Macie2ClassificationJobS3JobDefinitionScopingOutputReference</a>

---

##### `bucketDefinitionsInput`<sup>Optional</sup> <a name="bucketDefinitionsInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.bucketDefinitionsInput"></a>

```typescript
public readonly bucketDefinitionsInput: IResolvable | Macie2ClassificationJobS3JobDefinitionBucketDefinitions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionBucketDefinitions">Macie2ClassificationJobS3JobDefinitionBucketDefinitions</a>[]

---

##### `scopingInput`<sup>Optional</sup> <a name="scopingInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.scopingInput"></a>

```typescript
public readonly scopingInput: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinition">Macie2ClassificationJobS3JobDefinition</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm">putSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm">putTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm">resetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm">resetTagScopeTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleScopeTerm` <a name="putSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm"></a>

```typescript
public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `putTagScopeTerm` <a name="putTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm"></a>

```typescript
public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `resetSimpleScopeTerm` <a name="resetSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetSimpleScopeTerm"></a>

```typescript
public resetSimpleScopeTerm(): void
```

##### `resetTagScopeTerm` <a name="resetTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.resetTagScopeTerm"></a>

```typescript
public resetTagScopeTerm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput">simpleScopeTermInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput">tagScopeTermInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleScopeTerm`<sup>Required</sup> <a name="simpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference</a>

---

##### `tagScopeTerm`<sup>Required</sup> <a name="tagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference</a>

---

##### `simpleScopeTermInput`<sup>Optional</sup> <a name="simpleScopeTermInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.simpleScopeTermInput"></a>

```typescript
public readonly simpleScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---

##### `tagScopeTermInput`<sup>Optional</sup> <a name="tagScopeTermInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.tagScopeTermInput"></a>

```typescript
public readonly tagScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndTagScopeTermTagValues</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList">Macie2ClassificationJobS3JobDefinitionScopingExcludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd">Macie2ClassificationJobS3JobDefinitionScopingExcludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm">putSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm">putTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm">resetSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm">resetTagScopeTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSimpleScopeTerm` <a name="putSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm"></a>

```typescript
public putSimpleScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putSimpleScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `putTagScopeTerm` <a name="putTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm"></a>

```typescript
public putTagScopeTerm(value: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.putTagScopeTerm.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `resetSimpleScopeTerm` <a name="resetSimpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetSimpleScopeTerm"></a>

```typescript
public resetSimpleScopeTerm(): void
```

##### `resetTagScopeTerm` <a name="resetTagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.resetTagScopeTerm"></a>

```typescript
public resetTagScopeTerm(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm">simpleScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm">tagScopeTerm</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput">simpleScopeTermInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput">tagScopeTermInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `simpleScopeTerm`<sup>Required</sup> <a name="simpleScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTerm"></a>

```typescript
public readonly simpleScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference</a>

---

##### `tagScopeTerm`<sup>Required</sup> <a name="tagScopeTerm" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTerm"></a>

```typescript
public readonly tagScopeTerm: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference</a>

---

##### `simpleScopeTermInput`<sup>Optional</sup> <a name="simpleScopeTermInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.simpleScopeTermInput"></a>

```typescript
public readonly simpleScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---

##### `tagScopeTermInput`<sup>Optional</sup> <a name="tagScopeTermInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.tagScopeTermInput"></a>

```typescript
public readonly tagScopeTermInput: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComparator` <a name="resetComparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues">putTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator">resetComparator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagValues` <a name="putTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues"></a>

```typescript
public putTagValues(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.putTagValues.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---

##### `resetComparator` <a name="resetComparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetComparator"></a>

```typescript
public resetComparator(): void
```

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTagValues"></a>

```typescript
public resetTagValues(): void
```

##### `resetTarget` <a name="resetTarget" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.resetTarget"></a>

```typescript
public resetTarget(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues">tagValues</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput">comparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator">comparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList</a>

---

##### `comparatorInput`<sup>Optional</sup> <a name="comparatorInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparatorInput"></a>

```typescript
public readonly comparatorInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `comparator`<sup>Required</sup> <a name="comparator" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.comparator"></a>

```typescript
public readonly comparator: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>[]

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValuesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValues</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd">resetAnd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and">and</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput">andInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.and"></a>

```typescript
public readonly and: Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList">Macie2ClassificationJobS3JobDefinitionScopingIncludesAndList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd">Macie2ClassificationJobS3JobDefinitionScopingIncludesAnd</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---


### Macie2ClassificationJobS3JobDefinitionScopingOutputReference <a name="Macie2ClassificationJobS3JobDefinitionScopingOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes">putExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes">putIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes">resetExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes">resetIncludes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludes` <a name="putExcludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes"></a>

```typescript
public putExcludes(value: Macie2ClassificationJobS3JobDefinitionScopingExcludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putExcludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `putIncludes` <a name="putIncludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes"></a>

```typescript
public putIncludes(value: Macie2ClassificationJobS3JobDefinitionScopingIncludes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.putIncludes.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `resetExcludes` <a name="resetExcludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetExcludes"></a>

```typescript
public resetExcludes(): void
```

##### `resetIncludes` <a name="resetIncludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.resetIncludes"></a>

```typescript
public resetIncludes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes">excludes</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes">includes</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput">excludesInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput">includesInput</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludes`<sup>Required</sup> <a name="excludes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludes"></a>

```typescript
public readonly excludes: Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingExcludesOutputReference</a>

---

##### `includes`<sup>Required</sup> <a name="includes" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includes"></a>

```typescript
public readonly includes: Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference">Macie2ClassificationJobS3JobDefinitionScopingIncludesOutputReference</a>

---

##### `excludesInput`<sup>Optional</sup> <a name="excludesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.excludesInput"></a>

```typescript
public readonly excludesInput: Macie2ClassificationJobS3JobDefinitionScopingExcludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingExcludes">Macie2ClassificationJobS3JobDefinitionScopingExcludes</a>

---

##### `includesInput`<sup>Optional</sup> <a name="includesInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.includesInput"></a>

```typescript
public readonly includesInput: Macie2ClassificationJobS3JobDefinitionScopingIncludes;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingIncludes">Macie2ClassificationJobS3JobDefinitionScopingIncludes</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScopingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobS3JobDefinitionScoping;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobS3JobDefinitionScoping">Macie2ClassificationJobS3JobDefinitionScoping</a>

---


### Macie2ClassificationJobScheduleFrequencyOutputReference <a name="Macie2ClassificationJobScheduleFrequencyOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule">resetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule">resetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule">resetWeeklySchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDailySchedule` <a name="resetDailySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetDailySchedule"></a>

```typescript
public resetDailySchedule(): void
```

##### `resetMonthlySchedule` <a name="resetMonthlySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetMonthlySchedule"></a>

```typescript
public resetMonthlySchedule(): void
```

##### `resetWeeklySchedule` <a name="resetWeeklySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.resetWeeklySchedule"></a>

```typescript
public resetWeeklySchedule(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput">dailyScheduleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput">monthlyScheduleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput">weeklyScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule">dailySchedule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule">monthlySchedule</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyScheduleInput`<sup>Optional</sup> <a name="dailyScheduleInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailyScheduleInput"></a>

```typescript
public readonly dailyScheduleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlyScheduleInput`<sup>Optional</sup> <a name="monthlyScheduleInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlyScheduleInput"></a>

```typescript
public readonly monthlyScheduleInput: number;
```

- *Type:* number

---

##### `weeklyScheduleInput`<sup>Optional</sup> <a name="weeklyScheduleInput" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklyScheduleInput"></a>

```typescript
public readonly weeklyScheduleInput: string;
```

- *Type:* string

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.dailySchedule"></a>

```typescript
public readonly dailySchedule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `monthlySchedule`<sup>Required</sup> <a name="monthlySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.monthlySchedule"></a>

```typescript
public readonly monthlySchedule: number;
```

- *Type:* number

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.weeklySchedule"></a>

```typescript
public readonly weeklySchedule: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobScheduleFrequency;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobScheduleFrequency">Macie2ClassificationJobScheduleFrequency</a>

---


### Macie2ClassificationJobUserPausedDetailsList <a name="Macie2ClassificationJobUserPausedDetailsList" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get"></a>

```typescript
public get(index: number): Macie2ClassificationJobUserPausedDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Macie2ClassificationJobUserPausedDetailsOutputReference <a name="Macie2ClassificationJobUserPausedDetailsOutputReference" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer"></a>

```typescript
import { macie2ClassificationJob } from '@cdktf/aws-cdk'

new macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt">jobExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn">jobImminentExpirationHealthEventArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt">jobPausedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobExpiresAt`<sup>Required</sup> <a name="jobExpiresAt" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobExpiresAt"></a>

```typescript
public readonly jobExpiresAt: string;
```

- *Type:* string

---

##### `jobImminentExpirationHealthEventArn`<sup>Required</sup> <a name="jobImminentExpirationHealthEventArn" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobImminentExpirationHealthEventArn"></a>

```typescript
public readonly jobImminentExpirationHealthEventArn: string;
```

- *Type:* string

---

##### `jobPausedAt`<sup>Required</sup> <a name="jobPausedAt" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.jobPausedAt"></a>

```typescript
public readonly jobPausedAt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Macie2ClassificationJobUserPausedDetails;
```

- *Type:* <a href="#@cdktf/aws-cdk.macie2ClassificationJob.Macie2ClassificationJobUserPausedDetails">Macie2ClassificationJobUserPausedDetails</a>

---



