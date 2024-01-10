# `sagemakerDeviceFleet` Submodule <a name="`sagemakerDeviceFleet` Submodule" id="@cdktf/aws-cdk.sagemakerDeviceFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerDeviceFleet <a name="SagemakerDeviceFleet" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet aws_sagemaker_device_fleet}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

new sagemakerDeviceFleet.SagemakerDeviceFleet(scope: Construct, id: string, config: SagemakerDeviceFleetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig">SagemakerDeviceFleetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig">SagemakerDeviceFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias">resetEnableIotRoleAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig"></a>

```typescript
public putOutputConfig(value: SagemakerDeviceFleetOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableIotRoleAlias` <a name="resetEnableIotRoleAlias" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetEnableIotRoleAlias"></a>

```typescript
public resetEnableIotRoleAlias(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerDeviceFleet resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerDeviceFleet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerDeviceFleet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerDeviceFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerDeviceFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias">iotRoleAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput">deviceFleetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput">enableIotRoleAliasInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName">deviceFleetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias">enableIotRoleAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `iotRoleAlias`<sup>Required</sup> <a name="iotRoleAlias" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.iotRoleAlias"></a>

```typescript
public readonly iotRoleAlias: string;
```

- *Type:* string

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerDeviceFleetOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference">SagemakerDeviceFleetOutputConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceFleetNameInput`<sup>Optional</sup> <a name="deviceFleetNameInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetNameInput"></a>

```typescript
public readonly deviceFleetNameInput: string;
```

- *Type:* string

---

##### `enableIotRoleAliasInput`<sup>Optional</sup> <a name="enableIotRoleAliasInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAliasInput"></a>

```typescript
public readonly enableIotRoleAliasInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: SagemakerDeviceFleetOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceFleetName`<sup>Required</sup> <a name="deviceFleetName" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.deviceFleetName"></a>

```typescript
public readonly deviceFleetName: string;
```

- *Type:* string

---

##### `enableIotRoleAlias`<sup>Required</sup> <a name="enableIotRoleAlias" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.enableIotRoleAlias"></a>

```typescript
public readonly enableIotRoleAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerDeviceFleetConfig <a name="SagemakerDeviceFleetConfig" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.Initializer"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

const sagemakerDeviceFleetConfig: sagemakerDeviceFleet.SagemakerDeviceFleetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName">deviceFleetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#description SagemakerDeviceFleet#description}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias">enableIotRoleAlias</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#id SagemakerDeviceFleet#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deviceFleetName`<sup>Required</sup> <a name="deviceFleetName" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.deviceFleetName"></a>

```typescript
public readonly deviceFleetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#device_fleet_name SagemakerDeviceFleet#device_fleet_name}.

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerDeviceFleetOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#output_config SagemakerDeviceFleet#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#role_arn SagemakerDeviceFleet#role_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#description SagemakerDeviceFleet#description}.

---

##### `enableIotRoleAlias`<sup>Optional</sup> <a name="enableIotRoleAlias" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.enableIotRoleAlias"></a>

```typescript
public readonly enableIotRoleAlias: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#enable_iot_role_alias SagemakerDeviceFleet#enable_iot_role_alias}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#id SagemakerDeviceFleet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#tags SagemakerDeviceFleet#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#tags_all SagemakerDeviceFleet#tags_all}.

---

### SagemakerDeviceFleetOutputConfig <a name="SagemakerDeviceFleetOutputConfig" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.Initializer"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

const sagemakerDeviceFleetOutputConfig: sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation">s3OutputLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}. |

---

##### `s3OutputLocation`<sup>Required</sup> <a name="s3OutputLocation" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.s3OutputLocation"></a>

```typescript
public readonly s3OutputLocation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#s3_output_location SagemakerDeviceFleet#s3_output_location}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_device_fleet#kms_key_id SagemakerDeviceFleet#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerDeviceFleetOutputConfigOutputReference <a name="SagemakerDeviceFleetOutputConfigOutputReference" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerDeviceFleet } from '@cdktf/aws-cdk'

new sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput">s3OutputLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation">s3OutputLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3OutputLocationInput`<sup>Optional</sup> <a name="s3OutputLocationInput" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocationInput"></a>

```typescript
public readonly s3OutputLocationInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputLocation`<sup>Required</sup> <a name="s3OutputLocation" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.s3OutputLocation"></a>

```typescript
public readonly s3OutputLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerDeviceFleetOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerDeviceFleet.SagemakerDeviceFleetOutputConfig">SagemakerDeviceFleetOutputConfig</a>

---



