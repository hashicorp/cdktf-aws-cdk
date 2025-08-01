# `mediaConvertQueue` Submodule <a name="`mediaConvertQueue` Submodule" id="@cdktf/aws-cdk.mediaConvertQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaConvertQueue <a name="MediaConvertQueue" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue aws_media_convert_queue}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

new mediaConvertQueue.MediaConvertQueue(scope: Construct, id: string, config: MediaConvertQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig">MediaConvertQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings">putReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetPricingPlan">resetPricingPlan</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings">resetReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReservationPlanSettings` <a name="putReservationPlanSettings" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings"></a>

```typescript
public putReservationPlanSettings(value: MediaConvertQueueReservationPlanSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.putReservationPlanSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPricingPlan` <a name="resetPricingPlan" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetPricingPlan"></a>

```typescript
public resetPricingPlan(): void
```

##### `resetReservationPlanSettings` <a name="resetReservationPlanSettings" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetReservationPlanSettings"></a>

```typescript
public resetReservationPlanSettings(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaConvertQueue resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isConstruct"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

mediaConvertQueue.MediaConvertQueue.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformElement"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

mediaConvertQueue.MediaConvertQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformResource"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

mediaConvertQueue.MediaConvertQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

mediaConvertQueue.MediaConvertQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MediaConvertQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaConvertQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaConvertQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MediaConvertQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings">reservationPlanSettings</a></code> | <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput">pricingPlanInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput">reservationPlanSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `reservationPlanSettings`<sup>Required</sup> <a name="reservationPlanSettings" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettings"></a>

```typescript
public readonly reservationPlanSettings: MediaConvertQueueReservationPlanSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference">MediaConvertQueueReservationPlanSettingsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pricingPlanInput`<sup>Optional</sup> <a name="pricingPlanInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.pricingPlanInput"></a>

```typescript
public readonly pricingPlanInput: string;
```

- *Type:* string

---

##### `reservationPlanSettingsInput`<sup>Optional</sup> <a name="reservationPlanSettingsInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.reservationPlanSettingsInput"></a>

```typescript
public readonly reservationPlanSettingsInput: MediaConvertQueueReservationPlanSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pricingPlan`<sup>Required</sup> <a name="pricingPlan" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaConvertQueueConfig <a name="MediaConvertQueueConfig" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.Initializer"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

const mediaConvertQueueConfig: mediaConvertQueue.MediaConvertQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#name MediaConvertQueue#name}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#description MediaConvertQueue#description}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#id MediaConvertQueue#id}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan">pricingPlan</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings">reservationPlanSettings</a></code> | <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | reservation_plan_settings block. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#status MediaConvertQueue#status}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#name MediaConvertQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#description MediaConvertQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#id MediaConvertQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pricingPlan`<sup>Optional</sup> <a name="pricingPlan" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.pricingPlan"></a>

```typescript
public readonly pricingPlan: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#pricing_plan MediaConvertQueue#pricing_plan}.

---

##### `reservationPlanSettings`<sup>Optional</sup> <a name="reservationPlanSettings" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.reservationPlanSettings"></a>

```typescript
public readonly reservationPlanSettings: MediaConvertQueueReservationPlanSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

reservation_plan_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#reservation_plan_settings MediaConvertQueue#reservation_plan_settings}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#status MediaConvertQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#tags MediaConvertQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#tags_all MediaConvertQueue#tags_all}.

---

### MediaConvertQueueReservationPlanSettings <a name="MediaConvertQueueReservationPlanSettings" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.Initializer"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

const mediaConvertQueueReservationPlanSettings: mediaConvertQueue.MediaConvertQueueReservationPlanSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment">commitment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType">renewalType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots">reservedSlots</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}. |

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.commitment"></a>

```typescript
public readonly commitment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#commitment MediaConvertQueue#commitment}.

---

##### `renewalType`<sup>Required</sup> <a name="renewalType" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.renewalType"></a>

```typescript
public readonly renewalType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#renewal_type MediaConvertQueue#renewal_type}.

---

##### `reservedSlots`<sup>Required</sup> <a name="reservedSlots" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings.property.reservedSlots"></a>

```typescript
public readonly reservedSlots: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/media_convert_queue#reserved_slots MediaConvertQueue#reserved_slots}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaConvertQueueReservationPlanSettingsOutputReference <a name="MediaConvertQueueReservationPlanSettingsOutputReference" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer"></a>

```typescript
import { mediaConvertQueue } from '@cdktf/aws-cdk'

new mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput">commitmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput">renewalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput">reservedSlotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment">commitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType">renewalType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots">reservedSlots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commitmentInput`<sup>Optional</sup> <a name="commitmentInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitmentInput"></a>

```typescript
public readonly commitmentInput: string;
```

- *Type:* string

---

##### `renewalTypeInput`<sup>Optional</sup> <a name="renewalTypeInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalTypeInput"></a>

```typescript
public readonly renewalTypeInput: string;
```

- *Type:* string

---

##### `reservedSlotsInput`<sup>Optional</sup> <a name="reservedSlotsInput" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlotsInput"></a>

```typescript
public readonly reservedSlotsInput: number;
```

- *Type:* number

---

##### `commitment`<sup>Required</sup> <a name="commitment" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.commitment"></a>

```typescript
public readonly commitment: string;
```

- *Type:* string

---

##### `renewalType`<sup>Required</sup> <a name="renewalType" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.renewalType"></a>

```typescript
public readonly renewalType: string;
```

- *Type:* string

---

##### `reservedSlots`<sup>Required</sup> <a name="reservedSlots" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.reservedSlots"></a>

```typescript
public readonly reservedSlots: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MediaConvertQueueReservationPlanSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.mediaConvertQueue.MediaConvertQueueReservationPlanSettings">MediaConvertQueueReservationPlanSettings</a>

---



