# `datasyncLocationFsxLustreFileSystem` Submodule <a name="`datasyncLocationFsxLustreFileSystem` Submodule" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationFsxLustreFileSystem <a name="DatasyncLocationFsxLustreFileSystem" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system aws_datasync_location_fsx_lustre_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

new datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem(scope: Construct, id: string, config: DatasyncLocationFsxLustreFileSystemConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig">DatasyncLocationFsxLustreFileSystemConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig">DatasyncLocationFsxLustreFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory">resetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSubdirectory` <a name="resetSubdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetSubdirectory"></a>

```typescript
public resetSubdirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationFsxLustreFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasyncLocationFsxLustreFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationFsxLustreFileSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationFsxLustreFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationFsxLustreFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput">fsxFilesystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput">securityGroupArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `fsxFilesystemArnInput`<sup>Optional</sup> <a name="fsxFilesystemArnInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArnInput"></a>

```typescript
public readonly fsxFilesystemArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityGroupArnsInput`<sup>Optional</sup> <a name="securityGroupArnsInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArnsInput"></a>

```typescript
public readonly securityGroupArnsInput: string[];
```

- *Type:* string[]

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystem.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationFsxLustreFileSystemConfig <a name="DatasyncLocationFsxLustreFileSystemConfig" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.Initializer"></a>

```typescript
import { datasyncLocationFsxLustreFileSystem } from '@cdktf/aws-cdk'

const datasyncLocationFsxLustreFileSystemConfig: datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn">fsxFilesystemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns">securityGroupArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fsxFilesystemArn`<sup>Required</sup> <a name="fsxFilesystemArn" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.fsxFilesystemArn"></a>

```typescript
public readonly fsxFilesystemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#fsx_filesystem_arn DatasyncLocationFsxLustreFileSystem#fsx_filesystem_arn}.

---

##### `securityGroupArns`<sup>Required</sup> <a name="securityGroupArns" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.securityGroupArns"></a>

```typescript
public readonly securityGroupArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#security_group_arns DatasyncLocationFsxLustreFileSystem#security_group_arns}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#id DatasyncLocationFsxLustreFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `subdirectory`<sup>Optional</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#subdirectory DatasyncLocationFsxLustreFileSystem#subdirectory}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#tags DatasyncLocationFsxLustreFileSystem#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationFsxLustreFileSystem.DatasyncLocationFsxLustreFileSystemConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_fsx_lustre_file_system#tags_all DatasyncLocationFsxLustreFileSystem#tags_all}.

---



