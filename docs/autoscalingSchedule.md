# `autoscalingSchedule` Submodule <a name="`autoscalingSchedule` Submodule" id="@cdktf/aws-cdk.autoscalingSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingSchedule <a name="AutoscalingSchedule" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule aws_autoscaling_schedule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

new autoscalingSchedule.AutoscalingSchedule(scope: Construct, id: string, config: AutoscalingScheduleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig">AutoscalingScheduleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig">AutoscalingScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity">resetDesiredCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetMaxSize">resetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetMinSize">resetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetRecurrence">resetRecurrence</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDesiredCapacity` <a name="resetDesiredCapacity" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetDesiredCapacity"></a>

```typescript
public resetDesiredCapacity(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxSize` <a name="resetMaxSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetMaxSize"></a>

```typescript
public resetMaxSize(): void
```

##### `resetMinSize` <a name="resetMinSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetMinSize"></a>

```typescript
public resetMinSize(): void
```

##### `resetRecurrence` <a name="resetRecurrence" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetRecurrence"></a>

```typescript
public resetRecurrence(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.resetTimeZone"></a>

```typescript
public resetTimeZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AutoscalingSchedule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isConstruct"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

autoscalingSchedule.AutoscalingSchedule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformElement"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

autoscalingSchedule.AutoscalingSchedule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformResource"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

autoscalingSchedule.AutoscalingSchedule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

autoscalingSchedule.AutoscalingSchedule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AutoscalingSchedule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AutoscalingSchedule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AutoscalingSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutoscalingSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput">desiredCapacityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput">recurrenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput">scheduledActionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.recurrence">recurrence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName">scheduledActionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupNameInput"></a>

```typescript
public readonly autoscalingGroupNameInput: string;
```

- *Type:* string

---

##### `desiredCapacityInput`<sup>Optional</sup> <a name="desiredCapacityInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacityInput"></a>

```typescript
public readonly desiredCapacityInput: number;
```

- *Type:* number

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `recurrenceInput`<sup>Optional</sup> <a name="recurrenceInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.recurrenceInput"></a>

```typescript
public readonly recurrenceInput: string;
```

- *Type:* string

---

##### `scheduledActionNameInput`<sup>Optional</sup> <a name="scheduledActionNameInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionNameInput"></a>

```typescript
public readonly scheduledActionNameInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

---

##### `desiredCapacity`<sup>Required</sup> <a name="desiredCapacity" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `recurrence`<sup>Required</sup> <a name="recurrence" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.scheduledActionName"></a>

```typescript
public readonly scheduledActionName: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingSchedule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingScheduleConfig <a name="AutoscalingScheduleConfig" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.Initializer"></a>

```typescript
import { autoscalingSchedule } from '@cdktf/aws-cdk'

const autoscalingScheduleConfig: autoscalingSchedule.AutoscalingScheduleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName">scheduledActionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity">desiredCapacity</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence">recurrence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#autoscaling_group_name AutoscalingSchedule#autoscaling_group_name}.

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.scheduledActionName"></a>

```typescript
public readonly scheduledActionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#scheduled_action_name AutoscalingSchedule#scheduled_action_name}.

---

##### `desiredCapacity`<sup>Optional</sup> <a name="desiredCapacity" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.desiredCapacity"></a>

```typescript
public readonly desiredCapacity: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#desired_capacity AutoscalingSchedule#desired_capacity}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#end_time AutoscalingSchedule#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#id AutoscalingSchedule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxSize`<sup>Optional</sup> <a name="maxSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#max_size AutoscalingSchedule#max_size}.

---

##### `minSize`<sup>Optional</sup> <a name="minSize" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#min_size AutoscalingSchedule#min_size}.

---

##### `recurrence`<sup>Optional</sup> <a name="recurrence" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.recurrence"></a>

```typescript
public readonly recurrence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#recurrence AutoscalingSchedule#recurrence}.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#start_time AutoscalingSchedule#start_time}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktf/aws-cdk.autoscalingSchedule.AutoscalingScheduleConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_schedule#time_zone AutoscalingSchedule#time_zone}.

---



