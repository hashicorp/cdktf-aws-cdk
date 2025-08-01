# `fsxOntapVolume` Submodule <a name="`fsxOntapVolume` Submodule" id="@cdktf/aws-cdk.fsxOntapVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxOntapVolume <a name="FsxOntapVolume" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume aws_fsx_ontap_volume}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

new fsxOntapVolume.FsxOntapVolume(scope: Construct, id: string, config: FsxOntapVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig">FsxOntapVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTieringPolicy">putTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle">resetSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy">resetTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTieringPolicy` <a name="putTieringPolicy" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTieringPolicy"></a>

```typescript
public putTieringPolicy(value: FsxOntapVolumeTieringPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTieringPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxOntapVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityStyle` <a name="resetSecurityStyle" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetSecurityStyle"></a>

```typescript
public resetSecurityStyle(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTieringPolicy` <a name="resetTieringPolicy" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTieringPolicy"></a>

```typescript
public resetTieringPolicy(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isConstruct"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

fsxOntapVolume.FsxOntapVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformElement"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

fsxOntapVolume.FsxOntapVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformResource"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

fsxOntapVolume.FsxOntapVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

fsxOntapVolume.FsxOntapVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FsxOntapVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxOntapVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxOntapVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FsxOntapVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType">flexcacheEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType">ontapVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput">junctionPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput">securityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput">sizeInMegabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput">storageEfficiencyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput">storageVirtualMachineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput">tieringPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.junctionPath">junctionPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.securityStyle">securityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `flexcacheEndpointType`<sup>Required</sup> <a name="flexcacheEndpointType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.flexcacheEndpointType"></a>

```typescript
public readonly flexcacheEndpointType: string;
```

- *Type:* string

---

##### `ontapVolumeType`<sup>Required</sup> <a name="ontapVolumeType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.ontapVolumeType"></a>

```typescript
public readonly ontapVolumeType: string;
```

- *Type:* string

---

##### `tieringPolicy`<sup>Required</sup> <a name="tieringPolicy" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: FsxOntapVolumeTieringPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference">FsxOntapVolumeTieringPolicyOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOntapVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference">FsxOntapVolumeTimeoutsOutputReference</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `junctionPathInput`<sup>Optional</sup> <a name="junctionPathInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.junctionPathInput"></a>

```typescript
public readonly junctionPathInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityStyleInput`<sup>Optional</sup> <a name="securityStyleInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.securityStyleInput"></a>

```typescript
public readonly securityStyleInput: string;
```

- *Type:* string

---

##### `sizeInMegabytesInput`<sup>Optional</sup> <a name="sizeInMegabytesInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytesInput"></a>

```typescript
public readonly sizeInMegabytesInput: number;
```

- *Type:* number

---

##### `storageEfficiencyEnabledInput`<sup>Optional</sup> <a name="storageEfficiencyEnabledInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabledInput"></a>

```typescript
public readonly storageEfficiencyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageVirtualMachineIdInput`<sup>Optional</sup> <a name="storageVirtualMachineIdInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineIdInput"></a>

```typescript
public readonly storageVirtualMachineIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tieringPolicyInput`<sup>Optional</sup> <a name="tieringPolicyInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tieringPolicyInput"></a>

```typescript
public readonly tieringPolicyInput: FsxOntapVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FsxOntapVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.junctionPath"></a>

```typescript
public readonly junctionPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityStyle`<sup>Required</sup> <a name="securityStyle" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.sizeInMegabytes"></a>

```typescript
public readonly sizeInMegabytes: number;
```

- *Type:* number

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageEfficiencyEnabled"></a>

```typescript
public readonly storageEfficiencyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxOntapVolumeConfig <a name="FsxOntapVolumeConfig" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

const fsxOntapVolumeConfig: fsxOntapVolume.FsxOntapVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath">junctionPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes">sizeInMegabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled">storageEfficiencyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId">storageVirtualMachineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle">securityStyle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy">tieringPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | tiering_policy block. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `junctionPath`<sup>Required</sup> <a name="junctionPath" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.junctionPath"></a>

```typescript
public readonly junctionPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#junction_path FsxOntapVolume#junction_path}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

##### `sizeInMegabytes`<sup>Required</sup> <a name="sizeInMegabytes" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.sizeInMegabytes"></a>

```typescript
public readonly sizeInMegabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#size_in_megabytes FsxOntapVolume#size_in_megabytes}.

---

##### `storageEfficiencyEnabled`<sup>Required</sup> <a name="storageEfficiencyEnabled" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.storageEfficiencyEnabled"></a>

```typescript
public readonly storageEfficiencyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#storage_efficiency_enabled FsxOntapVolume#storage_efficiency_enabled}.

---

##### `storageVirtualMachineId`<sup>Required</sup> <a name="storageVirtualMachineId" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.storageVirtualMachineId"></a>

```typescript
public readonly storageVirtualMachineId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#storage_virtual_machine_id FsxOntapVolume#storage_virtual_machine_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#id FsxOntapVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityStyle`<sup>Optional</sup> <a name="securityStyle" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.securityStyle"></a>

```typescript
public readonly securityStyle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#security_style FsxOntapVolume#security_style}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#tags FsxOntapVolume#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#tags_all FsxOntapVolume#tags_all}.

---

##### `tieringPolicy`<sup>Optional</sup> <a name="tieringPolicy" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.tieringPolicy"></a>

```typescript
public readonly tieringPolicy: FsxOntapVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

tiering_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#tiering_policy FsxOntapVolume#tiering_policy}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxOntapVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#timeouts FsxOntapVolume#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeConfig.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#volume_type FsxOntapVolume#volume_type}.

---

### FsxOntapVolumeTieringPolicy <a name="FsxOntapVolumeTieringPolicy" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

const fsxOntapVolumeTieringPolicy: fsxOntapVolume.FsxOntapVolumeTieringPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod">coolingPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}. |

---

##### `coolingPeriod`<sup>Optional</sup> <a name="coolingPeriod" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.coolingPeriod"></a>

```typescript
public readonly coolingPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#cooling_period FsxOntapVolume#cooling_period}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#name FsxOntapVolume#name}.

---

### FsxOntapVolumeTimeouts <a name="FsxOntapVolumeTimeouts" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

const fsxOntapVolumeTimeouts: fsxOntapVolume.FsxOntapVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#create FsxOntapVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#delete FsxOntapVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_ontap_volume#update FsxOntapVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxOntapVolumeTieringPolicyOutputReference <a name="FsxOntapVolumeTieringPolicyOutputReference" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

new fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod">resetCoolingPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCoolingPeriod` <a name="resetCoolingPeriod" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetCoolingPeriod"></a>

```typescript
public resetCoolingPeriod(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput">coolingPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod">coolingPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coolingPeriodInput`<sup>Optional</sup> <a name="coolingPeriodInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriodInput"></a>

```typescript
public readonly coolingPeriodInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `coolingPeriod`<sup>Required</sup> <a name="coolingPeriod" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.coolingPeriod"></a>

```typescript
public readonly coolingPeriod: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxOntapVolumeTieringPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTieringPolicy">FsxOntapVolumeTieringPolicy</a>

---


### FsxOntapVolumeTimeoutsOutputReference <a name="FsxOntapVolumeTimeoutsOutputReference" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxOntapVolume } from '@cdktf/aws-cdk'

new fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxOntapVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxOntapVolume.FsxOntapVolumeTimeouts">FsxOntapVolumeTimeouts</a>

---



