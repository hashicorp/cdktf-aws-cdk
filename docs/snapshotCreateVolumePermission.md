# `snapshotCreateVolumePermission` Submodule <a name="`snapshotCreateVolumePermission` Submodule" id="@cdktf/aws-cdk.snapshotCreateVolumePermission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnapshotCreateVolumePermission <a name="SnapshotCreateVolumePermission" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission aws_snapshot_create_volume_permission}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

new snapshotCreateVolumePermission.SnapshotCreateVolumePermission(scope: Construct, id: string, config: SnapshotCreateVolumePermissionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig">SnapshotCreateVolumePermissionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig">SnapshotCreateVolumePermissionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SnapshotCreateVolumePermission resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SnapshotCreateVolumePermission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnapshotCreateVolumePermission to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnapshotCreateVolumePermission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SnapshotCreateVolumePermission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermission.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnapshotCreateVolumePermissionConfig <a name="SnapshotCreateVolumePermissionConfig" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.Initializer"></a>

```typescript
import { snapshotCreateVolumePermission } from '@cdktf/aws-cdk'

const snapshotCreateVolumePermissionConfig: snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}. |
| <code><a href="#@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#account_id SnapshotCreateVolumePermission#account_id}.

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#snapshot_id SnapshotCreateVolumePermission#snapshot_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.snapshotCreateVolumePermission.SnapshotCreateVolumePermissionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/snapshot_create_volume_permission#id SnapshotCreateVolumePermission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



