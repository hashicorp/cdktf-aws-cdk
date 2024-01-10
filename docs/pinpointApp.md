# `pinpointApp` Submodule <a name="`pinpointApp` Submodule" id="@cdktf/aws-cdk.pinpointApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApp <a name="PinpointApp" id="@cdktf/aws-cdk.pinpointApp.PinpointApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app aws_pinpoint_app}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

new pinpointApp.PinpointApp(scope: Construct, id: string, config?: PinpointAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig">PinpointAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig">PinpointAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.putCampaignHook">putCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.putLimits">putLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.putQuietTime">putQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetCampaignHook">resetCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetLimits">resetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetQuietTime">resetQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCampaignHook` <a name="putCampaignHook" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putCampaignHook"></a>

```typescript
public putCampaignHook(value: PinpointAppCampaignHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putCampaignHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `putLimits` <a name="putLimits" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putLimits"></a>

```typescript
public putLimits(value: PinpointAppLimits): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `putQuietTime` <a name="putQuietTime" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putQuietTime"></a>

```typescript
public putQuietTime(value: PinpointAppQuietTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.putQuietTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `resetCampaignHook` <a name="resetCampaignHook" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetCampaignHook"></a>

```typescript
public resetCampaignHook(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLimits` <a name="resetLimits" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetLimits"></a>

```typescript
public resetLimits(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetQuietTime` <a name="resetQuietTime" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetQuietTime"></a>

```typescript
public resetQuietTime(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PinpointApp resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isConstruct"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

pinpointApp.PinpointApp.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformElement"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

pinpointApp.PinpointApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformResource"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

pinpointApp.PinpointApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

pinpointApp.PinpointApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PinpointApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PinpointApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.campaignHook">campaignHook</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.limits">limits</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.quietTime">quietTime</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.campaignHookInput">campaignHookInput</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.limitsInput">limitsInput</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.quietTimeInput">quietTimeInput</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `campaignHook`<sup>Required</sup> <a name="campaignHook" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.campaignHook"></a>

```typescript
public readonly campaignHook: PinpointAppCampaignHookOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference">PinpointAppCampaignHookOutputReference</a>

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.limits"></a>

```typescript
public readonly limits: PinpointAppLimitsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference">PinpointAppLimitsOutputReference</a>

---

##### `quietTime`<sup>Required</sup> <a name="quietTime" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.quietTime"></a>

```typescript
public readonly quietTime: PinpointAppQuietTimeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference">PinpointAppQuietTimeOutputReference</a>

---

##### `campaignHookInput`<sup>Optional</sup> <a name="campaignHookInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.campaignHookInput"></a>

```typescript
public readonly campaignHookInput: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitsInput`<sup>Optional</sup> <a name="limitsInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.limitsInput"></a>

```typescript
public readonly limitsInput: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `quietTimeInput`<sup>Optional</sup> <a name="quietTimeInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.quietTimeInput"></a>

```typescript
public readonly quietTimeInput: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.pinpointApp.PinpointApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointAppCampaignHook <a name="PinpointAppCampaignHook" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

const pinpointAppCampaignHook: pinpointApp.PinpointAppCampaignHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName">lambdaFunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#mode PinpointApp#mode}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.webUrl">webUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#web_url PinpointApp#web_url}. |

---

##### `lambdaFunctionName`<sup>Optional</sup> <a name="lambdaFunctionName" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.lambdaFunctionName"></a>

```typescript
public readonly lambdaFunctionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#lambda_function_name PinpointApp#lambda_function_name}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#mode PinpointApp#mode}.

---

##### `webUrl`<sup>Optional</sup> <a name="webUrl" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#web_url PinpointApp#web_url}.

---

### PinpointAppConfig <a name="PinpointAppConfig" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

const pinpointAppConfig: pinpointApp.PinpointAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.campaignHook">campaignHook</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | campaign_hook block. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#id PinpointApp#id}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.limits">limits</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | limits block. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#name PinpointApp#name}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#name_prefix PinpointApp#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.quietTime">quietTime</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | quiet_time block. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#tags PinpointApp#tags}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#tags_all PinpointApp#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `campaignHook`<sup>Optional</sup> <a name="campaignHook" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.campaignHook"></a>

```typescript
public readonly campaignHook: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

campaign_hook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#campaign_hook PinpointApp#campaign_hook}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#id PinpointApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `limits`<sup>Optional</sup> <a name="limits" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.limits"></a>

```typescript
public readonly limits: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#limits PinpointApp#limits}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#name PinpointApp#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#name_prefix PinpointApp#name_prefix}.

---

##### `quietTime`<sup>Optional</sup> <a name="quietTime" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.quietTime"></a>

```typescript
public readonly quietTime: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

quiet_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#quiet_time PinpointApp#quiet_time}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#tags PinpointApp#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.pinpointApp.PinpointAppConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#tags_all PinpointApp#tags_all}.

---

### PinpointAppLimits <a name="PinpointAppLimits" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

const pinpointAppLimits: pinpointApp.PinpointAppLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.daily">daily</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#daily PinpointApp#daily}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.maximumDuration">maximumDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#maximum_duration PinpointApp#maximum_duration}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.messagesPerSecond">messagesPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#messages_per_second PinpointApp#messages_per_second}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.total">total</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#total PinpointApp#total}. |

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.daily"></a>

```typescript
public readonly daily: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#daily PinpointApp#daily}.

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#maximum_duration PinpointApp#maximum_duration}.

---

##### `messagesPerSecond`<sup>Optional</sup> <a name="messagesPerSecond" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.messagesPerSecond"></a>

```typescript
public readonly messagesPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#messages_per_second PinpointApp#messages_per_second}.

---

##### `total`<sup>Optional</sup> <a name="total" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimits.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#total PinpointApp#total}.

---

### PinpointAppQuietTime <a name="PinpointAppQuietTime" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

const pinpointAppQuietTime: pinpointApp.PinpointAppQuietTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime.property.end">end</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#end PinpointApp#end}. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime.property.start">start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#start PinpointApp#start}. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#end PinpointApp#end}.

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/pinpoint_app#start PinpointApp#start}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointAppCampaignHookOutputReference <a name="PinpointAppCampaignHookOutputReference" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

new pinpointApp.PinpointAppCampaignHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName">resetLambdaFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl">resetWebUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaFunctionName` <a name="resetLambdaFunctionName" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetLambdaFunctionName"></a>

```typescript
public resetLambdaFunctionName(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetWebUrl` <a name="resetWebUrl" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.resetWebUrl"></a>

```typescript
public resetWebUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput">lambdaFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput">webUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName">lambdaFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl">webUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaFunctionNameInput`<sup>Optional</sup> <a name="lambdaFunctionNameInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionNameInput"></a>

```typescript
public readonly lambdaFunctionNameInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `webUrlInput`<sup>Optional</sup> <a name="webUrlInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrlInput"></a>

```typescript
public readonly webUrlInput: string;
```

- *Type:* string

---

##### `lambdaFunctionName`<sup>Required</sup> <a name="lambdaFunctionName" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.lambdaFunctionName"></a>

```typescript
public readonly lambdaFunctionName: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `webUrl`<sup>Required</sup> <a name="webUrl" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.webUrl"></a>

```typescript
public readonly webUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppCampaignHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppCampaignHook">PinpointAppCampaignHook</a>

---


### PinpointAppLimitsOutputReference <a name="PinpointAppLimitsOutputReference" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

new pinpointApp.PinpointAppLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond">resetMessagesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetTotal">resetTotal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDaily` <a name="resetDaily" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetDaily"></a>

```typescript
public resetDaily(): void
```

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetMaximumDuration"></a>

```typescript
public resetMaximumDuration(): void
```

##### `resetMessagesPerSecond` <a name="resetMessagesPerSecond" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetMessagesPerSecond"></a>

```typescript
public resetMessagesPerSecond(): void
```

##### `resetTotal` <a name="resetTotal" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.resetTotal"></a>

```typescript
public resetTotal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput">dailyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput">maximumDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput">messagesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput">totalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.daily">daily</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond">messagesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.total">total</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.dailyInput"></a>

```typescript
public readonly dailyInput: number;
```

- *Type:* number

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDurationInput"></a>

```typescript
public readonly maximumDurationInput: number;
```

- *Type:* number

---

##### `messagesPerSecondInput`<sup>Optional</sup> <a name="messagesPerSecondInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecondInput"></a>

```typescript
public readonly messagesPerSecondInput: number;
```

- *Type:* number

---

##### `totalInput`<sup>Optional</sup> <a name="totalInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.totalInput"></a>

```typescript
public readonly totalInput: number;
```

- *Type:* number

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.daily"></a>

```typescript
public readonly daily: number;
```

- *Type:* number

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: number;
```

- *Type:* number

---

##### `messagesPerSecond`<sup>Required</sup> <a name="messagesPerSecond" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.messagesPerSecond"></a>

```typescript
public readonly messagesPerSecond: number;
```

- *Type:* number

---

##### `total`<sup>Required</sup> <a name="total" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.total"></a>

```typescript
public readonly total: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.pinpointApp.PinpointAppLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppLimits;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppLimits">PinpointAppLimits</a>

---


### PinpointAppQuietTimeOutputReference <a name="PinpointAppQuietTimeOutputReference" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer"></a>

```typescript
import { pinpointApp } from '@cdktf/aws-cdk'

new pinpointApp.PinpointAppQuietTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resetEnd"></a>

```typescript
public resetEnd(): void
```

##### `resetStart` <a name="resetStart" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.resetStart"></a>

```typescript
public resetStart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput">endInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput">startInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.endInput"></a>

```typescript
public readonly endInput: string;
```

- *Type:* string

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.startInput"></a>

```typescript
public readonly startInput: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PinpointAppQuietTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.pinpointApp.PinpointAppQuietTime">PinpointAppQuietTime</a>

---



