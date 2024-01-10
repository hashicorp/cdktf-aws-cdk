# `fsxDataRepositoryAssociation` Submodule <a name="`fsxDataRepositoryAssociation` Submodule" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxDataRepositoryAssociation <a name="FsxDataRepositoryAssociation" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association aws_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

new fsxDataRepositoryAssociation.FsxDataRepositoryAssociation(scope: Construct, id: string, config: FsxDataRepositoryAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate">resetBatchImportMetaDataOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem">resetDeleteDataInFilesystem</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize">resetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putS3` <a name="putS3" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3"></a>

```typescript
public putS3(value: FsxDataRepositoryAssociationS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: FsxDataRepositoryAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

---

##### `resetBatchImportMetaDataOnCreate` <a name="resetBatchImportMetaDataOnCreate" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate"></a>

```typescript
public resetBatchImportMetaDataOnCreate(): void
```

##### `resetDeleteDataInFilesystem` <a name="resetDeleteDataInFilesystem" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetDeleteDataInFilesystem"></a>

```typescript
public resetDeleteDataInFilesystem(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImportedFileChunkSize` <a name="resetImportedFileChunkSize" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize"></a>

```typescript
public resetImportedFileChunkSize(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FsxDataRepositoryAssociation resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FsxDataRepositoryAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxDataRepositoryAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxDataRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FsxDataRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput">batchImportMetaDataOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput">dataRepositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput">deleteDataInFilesystemInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput">fileSystemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput">importedFileChunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem">deleteDataInFilesystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3"></a>

```typescript
public readonly s3: FsxDataRepositoryAssociationS3OutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: FsxDataRepositoryAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference">FsxDataRepositoryAssociationTimeoutsOutputReference</a>

---

##### `batchImportMetaDataOnCreateInput`<sup>Optional</sup> <a name="batchImportMetaDataOnCreateInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput"></a>

```typescript
public readonly batchImportMetaDataOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataRepositoryPathInput`<sup>Optional</sup> <a name="dataRepositoryPathInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput"></a>

```typescript
public readonly dataRepositoryPathInput: string;
```

- *Type:* string

---

##### `deleteDataInFilesystemInput`<sup>Optional</sup> <a name="deleteDataInFilesystemInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystemInput"></a>

```typescript
public readonly deleteDataInFilesystemInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `fileSystemPathInput`<sup>Optional</sup> <a name="fileSystemPathInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput"></a>

```typescript
public readonly fileSystemPathInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `importedFileChunkSizeInput`<sup>Optional</sup> <a name="importedFileChunkSizeInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput"></a>

```typescript
public readonly importedFileChunkSizeInput: number;
```

- *Type:* number

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input"></a>

```typescript
public readonly s3Input: FsxDataRepositoryAssociationS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FsxDataRepositoryAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

---

##### `batchImportMetaDataOnCreate`<sup>Required</sup> <a name="batchImportMetaDataOnCreate" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```typescript
public readonly batchImportMetaDataOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```typescript
public readonly dataRepositoryPath: string;
```

- *Type:* string

---

##### `deleteDataInFilesystem`<sup>Required</sup> <a name="deleteDataInFilesystem" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.deleteDataInFilesystem"></a>

```typescript
public readonly deleteDataInFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `importedFileChunkSize`<sup>Required</sup> <a name="importedFileChunkSize" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxDataRepositoryAssociationConfig <a name="FsxDataRepositoryAssociationConfig" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

const fsxDataRepositoryAssociationConfig: fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath">dataRepositoryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath">fileSystemPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate">batchImportMetaDataOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem">deleteDataInFilesystem</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize">importedFileChunkSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | s3 block. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataRepositoryPath`<sup>Required</sup> <a name="dataRepositoryPath" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath"></a>

```typescript
public readonly dataRepositoryPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}.

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}.

---

##### `fileSystemPath`<sup>Required</sup> <a name="fileSystemPath" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath"></a>

```typescript
public readonly fileSystemPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}.

---

##### `batchImportMetaDataOnCreate`<sup>Optional</sup> <a name="batchImportMetaDataOnCreate" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate"></a>

```typescript
public readonly batchImportMetaDataOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}.

---

##### `deleteDataInFilesystem`<sup>Optional</sup> <a name="deleteDataInFilesystem" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.deleteDataInFilesystem"></a>

```typescript
public readonly deleteDataInFilesystem: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#delete_data_in_filesystem FsxDataRepositoryAssociation#delete_data_in_filesystem}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#id FsxDataRepositoryAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `importedFileChunkSize`<sup>Optional</sup> <a name="importedFileChunkSize" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize"></a>

```typescript
public readonly importedFileChunkSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3"></a>

```typescript
public readonly s3: FsxDataRepositoryAssociationS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#tags_all FsxDataRepositoryAssociation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FsxDataRepositoryAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#timeouts FsxDataRepositoryAssociation#timeouts}

---

### FsxDataRepositoryAssociationS3 <a name="FsxDataRepositoryAssociationS3" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

const fsxDataRepositoryAssociationS3: fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy">autoExportPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | auto_export_policy block. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy">autoImportPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | auto_import_policy block. |

---

##### `autoExportPolicy`<sup>Optional</sup> <a name="autoExportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy"></a>

```typescript
public readonly autoExportPolicy: FsxDataRepositoryAssociationS3AutoExportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

auto_export_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

##### `autoImportPolicy`<sup>Optional</sup> <a name="autoImportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy"></a>

```typescript
public readonly autoImportPolicy: FsxDataRepositoryAssociationS3AutoImportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

auto_import_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

### FsxDataRepositoryAssociationS3AutoExportPolicy <a name="FsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

const fsxDataRepositoryAssociationS3AutoExportPolicy: fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationS3AutoImportPolicy <a name="FsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

const fsxDataRepositoryAssociationS3AutoImportPolicy: fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events">events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationTimeouts <a name="FsxDataRepositoryAssociationTimeouts" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

const fsxDataRepositoryAssociationTimeouts: fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#create FsxDataRepositoryAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#delete FsxDataRepositoryAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/fsx_data_repository_association#update FsxDataRepositoryAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

new fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvents` <a name="resetEvents" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents"></a>

```typescript
public resetEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxDataRepositoryAssociationS3AutoExportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

new fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents">resetEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvents` <a name="resetEvents" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents"></a>

```typescript
public resetEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxDataRepositoryAssociationS3AutoImportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### FsxDataRepositoryAssociationS3OutputReference <a name="FsxDataRepositoryAssociationS3OutputReference" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

new fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy">putAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy">putAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy">resetAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy">resetAutoImportPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoExportPolicy` <a name="putAutoExportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy"></a>

```typescript
public putAutoExportPolicy(value: FsxDataRepositoryAssociationS3AutoExportPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `putAutoImportPolicy` <a name="putAutoImportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy"></a>

```typescript
public putAutoImportPolicy(value: FsxDataRepositoryAssociationS3AutoImportPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `resetAutoExportPolicy` <a name="resetAutoExportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy"></a>

```typescript
public resetAutoExportPolicy(): void
```

##### `resetAutoImportPolicy` <a name="resetAutoImportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy"></a>

```typescript
public resetAutoImportPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">autoExportPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">autoImportPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput">autoExportPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput">autoImportPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoExportPolicy`<sup>Required</sup> <a name="autoExportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```typescript
public readonly autoExportPolicy: FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `autoImportPolicy`<sup>Required</sup> <a name="autoImportPolicy" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```typescript
public readonly autoImportPolicy: FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `autoExportPolicyInput`<sup>Optional</sup> <a name="autoExportPolicyInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput"></a>

```typescript
public readonly autoExportPolicyInput: FsxDataRepositoryAssociationS3AutoExportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `autoImportPolicyInput`<sup>Optional</sup> <a name="autoImportPolicyInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput"></a>

```typescript
public readonly autoImportPolicyInput: FsxDataRepositoryAssociationS3AutoImportPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FsxDataRepositoryAssociationS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---


### FsxDataRepositoryAssociationTimeoutsOutputReference <a name="FsxDataRepositoryAssociationTimeoutsOutputReference" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { fsxDataRepositoryAssociation } from '@cdktf/aws-cdk'

new fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FsxDataRepositoryAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTimeouts">FsxDataRepositoryAssociationTimeouts</a>

---



