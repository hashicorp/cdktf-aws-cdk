# `neptuneClusterSnapshot` Submodule <a name="`neptuneClusterSnapshot` Submodule" id="@cdktf/aws-cdk.neptuneClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptuneClusterSnapshot <a name="NeptuneClusterSnapshot" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot aws_neptune_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

new neptuneClusterSnapshot.NeptuneClusterSnapshot(scope: Construct, id: string, config: NeptuneClusterSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig">NeptuneClusterSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig">NeptuneClusterSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: NeptuneClusterSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NeptuneClusterSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isConstruct"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

neptuneClusterSnapshot.NeptuneClusterSnapshot.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformElement"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformResource"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NeptuneClusterSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptuneClusterSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptuneClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NeptuneClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.allocatedStorage">allocatedStorage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotArn">dbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.engine">engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.engineVersion">engineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.snapshotType">snapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.sourceDbClusterSnapshotArn">sourceDbClusterSnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.storageEncrypted">storageEncrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference">NeptuneClusterSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotIdentifierInput">dbClusterSnapshotIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allocatedStorage`<sup>Required</sup> <a name="allocatedStorage" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.allocatedStorage"></a>

```typescript
public readonly allocatedStorage: number;
```

- *Type:* number

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `dbClusterSnapshotArn`<sup>Required</sup> <a name="dbClusterSnapshotArn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotArn"></a>

```typescript
public readonly dbClusterSnapshotArn: string;
```

- *Type:* string

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.engine"></a>

```typescript
public readonly engine: string;
```

- *Type:* string

---

##### `engineVersion`<sup>Required</sup> <a name="engineVersion" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.engineVersion"></a>

```typescript
public readonly engineVersion: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `snapshotType`<sup>Required</sup> <a name="snapshotType" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.snapshotType"></a>

```typescript
public readonly snapshotType: string;
```

- *Type:* string

---

##### `sourceDbClusterSnapshotArn`<sup>Required</sup> <a name="sourceDbClusterSnapshotArn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.sourceDbClusterSnapshotArn"></a>

```typescript
public readonly sourceDbClusterSnapshotArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storageEncrypted`<sup>Required</sup> <a name="storageEncrypted" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.storageEncrypted"></a>

```typescript
public readonly storageEncrypted: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference">NeptuneClusterSnapshotTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterIdentifierInput"></a>

```typescript
public readonly dbClusterIdentifierInput: string;
```

- *Type:* string

---

##### `dbClusterSnapshotIdentifierInput`<sup>Optional</sup> <a name="dbClusterSnapshotIdentifierInput" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotIdentifierInput"></a>

```typescript
public readonly dbClusterSnapshotIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NeptuneClusterSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.dbClusterSnapshotIdentifier"></a>

```typescript
public readonly dbClusterSnapshotIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptuneClusterSnapshotConfig <a name="NeptuneClusterSnapshotConfig" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.Initializer"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

const neptuneClusterSnapshotConfig: neptuneClusterSnapshot.NeptuneClusterSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#db_cluster_identifier NeptuneClusterSnapshot#db_cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dbClusterSnapshotIdentifier">dbClusterSnapshotIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#db_cluster_snapshot_identifier NeptuneClusterSnapshot#db_cluster_snapshot_identifier}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#id NeptuneClusterSnapshot#id}. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dbClusterIdentifier"></a>

```typescript
public readonly dbClusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#db_cluster_identifier NeptuneClusterSnapshot#db_cluster_identifier}.

---

##### `dbClusterSnapshotIdentifier`<sup>Required</sup> <a name="dbClusterSnapshotIdentifier" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.dbClusterSnapshotIdentifier"></a>

```typescript
public readonly dbClusterSnapshotIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#db_cluster_snapshot_identifier NeptuneClusterSnapshot#db_cluster_snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#id NeptuneClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NeptuneClusterSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#timeouts NeptuneClusterSnapshot#timeouts}

---

### NeptuneClusterSnapshotTimeouts <a name="NeptuneClusterSnapshotTimeouts" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts.Initializer"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

const neptuneClusterSnapshotTimeouts: neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#create NeptuneClusterSnapshot#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/neptune_cluster_snapshot#create NeptuneClusterSnapshot#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### NeptuneClusterSnapshotTimeoutsOutputReference <a name="NeptuneClusterSnapshotTimeoutsOutputReference" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { neptuneClusterSnapshot } from '@cdktf/aws-cdk'

new neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptuneClusterSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.neptuneClusterSnapshot.NeptuneClusterSnapshotTimeouts">NeptuneClusterSnapshotTimeouts</a>

---



