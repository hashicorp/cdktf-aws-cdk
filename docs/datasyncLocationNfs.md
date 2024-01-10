# `datasyncLocationNfs` Submodule <a name="`datasyncLocationNfs` Submodule" id="@cdktf/aws-cdk.datasyncLocationNfs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationNfs <a name="DatasyncLocationNfs" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs aws_datasync_location_nfs}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

new datasyncLocationNfs.DatasyncLocationNfs(scope: Construct, id: string, config: DatasyncLocationNfsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig">DatasyncLocationNfsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig">DatasyncLocationNfsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions">putMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig">putOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMountOptions` <a name="putMountOptions" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions"></a>

```typescript
public putMountOptions(value: DatasyncLocationNfsMountOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putMountOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `putOnPremConfig` <a name="putOnPremConfig" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig"></a>

```typescript
public putOnPremConfig(value: DatasyncLocationNfsOnPremConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.putOnPremConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatasyncLocationNfs resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isConstruct"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

datasyncLocationNfs.DatasyncLocationNfs.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatasyncLocationNfs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatasyncLocationNfs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatasyncLocationNfs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatasyncLocationNfs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput">mountOptionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput">onPremConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput">serverHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput">subdirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname">serverHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory">subdirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationNfsMountOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference">DatasyncLocationNfsMountOptionsOutputReference</a>

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfig"></a>

```typescript
public readonly onPremConfig: DatasyncLocationNfsOnPremConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference">DatasyncLocationNfsOnPremConfigOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---

##### `onPremConfigInput`<sup>Optional</sup> <a name="onPremConfigInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.onPremConfigInput"></a>

```typescript
public readonly onPremConfigInput: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---

##### `serverHostnameInput`<sup>Optional</sup> <a name="serverHostnameInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostnameInput"></a>

```typescript
public readonly serverHostnameInput: string;
```

- *Type:* string

---

##### `subdirectoryInput`<sup>Optional</sup> <a name="subdirectoryInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectoryInput"></a>

```typescript
public readonly subdirectoryInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfs.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationNfsConfig <a name="DatasyncLocationNfsConfig" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

const datasyncLocationNfsConfig: datasyncLocationNfs.DatasyncLocationNfsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig">onPremConfig</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | on_prem_config block. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname">serverHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory">subdirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#id DatasyncLocationNfs#id}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions">mountOptions</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | mount_options block. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onPremConfig`<sup>Required</sup> <a name="onPremConfig" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.onPremConfig"></a>

```typescript
public readonly onPremConfig: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

on_prem_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#on_prem_config DatasyncLocationNfs#on_prem_config}

---

##### `serverHostname`<sup>Required</sup> <a name="serverHostname" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.serverHostname"></a>

```typescript
public readonly serverHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#server_hostname DatasyncLocationNfs#server_hostname}.

---

##### `subdirectory`<sup>Required</sup> <a name="subdirectory" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.subdirectory"></a>

```typescript
public readonly subdirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#subdirectory DatasyncLocationNfs#subdirectory}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#id DatasyncLocationNfs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.mountOptions"></a>

```typescript
public readonly mountOptions: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

mount_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#mount_options DatasyncLocationNfs#mount_options}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#tags DatasyncLocationNfs#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#tags_all DatasyncLocationNfs#tags_all}.

---

### DatasyncLocationNfsMountOptions <a name="DatasyncLocationNfsMountOptions" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

const datasyncLocationNfsMountOptions: datasyncLocationNfs.DatasyncLocationNfsMountOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#version DatasyncLocationNfs#version}. |

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#version DatasyncLocationNfs#version}.

---

### DatasyncLocationNfsOnPremConfig <a name="DatasyncLocationNfsOnPremConfig" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

const datasyncLocationNfsOnPremConfig: datasyncLocationNfs.DatasyncLocationNfsOnPremConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns">agentArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}. |

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/datasync_location_nfs#agent_arns DatasyncLocationNfs#agent_arns}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationNfsMountOptionsOutputReference <a name="DatasyncLocationNfsMountOptionsOutputReference" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

new datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationNfsMountOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsMountOptions">DatasyncLocationNfsMountOptions</a>

---


### DatasyncLocationNfsOnPremConfigOutputReference <a name="DatasyncLocationNfsOnPremConfigOutputReference" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer"></a>

```typescript
import { datasyncLocationNfs } from '@cdktf/aws-cdk'

new datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput">agentArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns">agentArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentArnsInput`<sup>Optional</sup> <a name="agentArnsInput" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArnsInput"></a>

```typescript
public readonly agentArnsInput: string[];
```

- *Type:* string[]

---

##### `agentArns`<sup>Required</sup> <a name="agentArns" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.agentArns"></a>

```typescript
public readonly agentArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatasyncLocationNfsOnPremConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.datasyncLocationNfs.DatasyncLocationNfsOnPremConfig">DatasyncLocationNfsOnPremConfig</a>

---



