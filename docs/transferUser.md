# `transferUser` Submodule <a name="`transferUser` Submodule" id="@cdktf/aws-cdk.transferUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferUser <a name="TransferUser" id="@cdktf/aws-cdk.transferUser.TransferUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user aws_transfer_user}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.transferUser.TransferUser.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

new transferUser.TransferUser(scope: Construct, id: string, config: TransferUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig">TransferUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.transferUser.TransferUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig">TransferUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.putHomeDirectoryMappings">putHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.putPosixProfile">putPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectory">resetHomeDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectoryMappings">resetHomeDirectoryMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectoryType">resetHomeDirectoryType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetPosixProfile">resetPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.transferUser.TransferUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.transferUser.TransferUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.transferUser.TransferUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.transferUser.TransferUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.transferUser.TransferUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.transferUser.TransferUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.transferUser.TransferUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.transferUser.TransferUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.transferUser.TransferUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.transferUser.TransferUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.transferUser.TransferUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.transferUser.TransferUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.transferUser.TransferUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.transferUser.TransferUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.transferUser.TransferUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.transferUser.TransferUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.transferUser.TransferUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.transferUser.TransferUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.transferUser.TransferUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.transferUser.TransferUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHomeDirectoryMappings` <a name="putHomeDirectoryMappings" id="@cdktf/aws-cdk.transferUser.TransferUser.putHomeDirectoryMappings"></a>

```typescript
public putHomeDirectoryMappings(value: IResolvable | TransferUserHomeDirectoryMappings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.transferUser.TransferUser.putHomeDirectoryMappings.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]

---

##### `putPosixProfile` <a name="putPosixProfile" id="@cdktf/aws-cdk.transferUser.TransferUser.putPosixProfile"></a>

```typescript
public putPosixProfile(value: TransferUserPosixProfile): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.transferUser.TransferUser.putPosixProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---

##### `resetHomeDirectory` <a name="resetHomeDirectory" id="@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectory"></a>

```typescript
public resetHomeDirectory(): void
```

##### `resetHomeDirectoryMappings` <a name="resetHomeDirectoryMappings" id="@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectoryMappings"></a>

```typescript
public resetHomeDirectoryMappings(): void
```

##### `resetHomeDirectoryType` <a name="resetHomeDirectoryType" id="@cdktf/aws-cdk.transferUser.TransferUser.resetHomeDirectoryType"></a>

```typescript
public resetHomeDirectoryType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.transferUser.TransferUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicy` <a name="resetPolicy" id="@cdktf/aws-cdk.transferUser.TransferUser.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetPosixProfile` <a name="resetPosixProfile" id="@cdktf/aws-cdk.transferUser.TransferUser.resetPosixProfile"></a>

```typescript
public resetPosixProfile(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.transferUser.TransferUser.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.transferUser.TransferUser.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferUser resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.transferUser.TransferUser.isConstruct"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

transferUser.TransferUser.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.transferUser.TransferUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.transferUser.TransferUser.isTerraformElement"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

transferUser.TransferUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.transferUser.TransferUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.transferUser.TransferUser.isTerraformResource"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

transferUser.TransferUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.transferUser.TransferUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

transferUser.TransferUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.transferUser.TransferUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryMappings">homeDirectoryMappings</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList">TransferUserHomeDirectoryMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.posixProfile">posixProfile</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference">TransferUserPosixProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryInput">homeDirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryMappingsInput">homeDirectoryMappingsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryTypeInput">homeDirectoryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.posixProfileInput">posixProfileInput</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryType">homeDirectoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.userName">userName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.transferUser.TransferUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.transferUser.TransferUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.transferUser.TransferUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.transferUser.TransferUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.transferUser.TransferUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.transferUser.TransferUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.transferUser.TransferUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.transferUser.TransferUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.transferUser.TransferUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.transferUser.TransferUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.transferUser.TransferUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.transferUser.TransferUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.transferUser.TransferUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.transferUser.TransferUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.transferUser.TransferUser.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `homeDirectoryMappings`<sup>Required</sup> <a name="homeDirectoryMappings" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryMappings"></a>

```typescript
public readonly homeDirectoryMappings: TransferUserHomeDirectoryMappingsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList">TransferUserHomeDirectoryMappingsList</a>

---

##### `posixProfile`<sup>Required</sup> <a name="posixProfile" id="@cdktf/aws-cdk.transferUser.TransferUser.property.posixProfile"></a>

```typescript
public readonly posixProfile: TransferUserPosixProfileOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference">TransferUserPosixProfileOutputReference</a>

---

##### `homeDirectoryInput`<sup>Optional</sup> <a name="homeDirectoryInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryInput"></a>

```typescript
public readonly homeDirectoryInput: string;
```

- *Type:* string

---

##### `homeDirectoryMappingsInput`<sup>Optional</sup> <a name="homeDirectoryMappingsInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryMappingsInput"></a>

```typescript
public readonly homeDirectoryMappingsInput: IResolvable | TransferUserHomeDirectoryMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]

---

##### `homeDirectoryTypeInput`<sup>Optional</sup> <a name="homeDirectoryTypeInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryTypeInput"></a>

```typescript
public readonly homeDirectoryTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `posixProfileInput`<sup>Optional</sup> <a name="posixProfileInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.posixProfileInput"></a>

```typescript
public readonly posixProfileInput: TransferUserPosixProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/aws-cdk.transferUser.TransferUser.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `homeDirectory`<sup>Required</sup> <a name="homeDirectory" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

---

##### `homeDirectoryType`<sup>Required</sup> <a name="homeDirectoryType" id="@cdktf/aws-cdk.transferUser.TransferUser.property.homeDirectoryType"></a>

```typescript
public readonly homeDirectoryType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/aws-cdk.transferUser.TransferUser.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.transferUser.TransferUser.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/aws-cdk.transferUser.TransferUser.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.transferUser.TransferUser.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.transferUser.TransferUser.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.transferUser.TransferUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.transferUser.TransferUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferUserConfig <a name="TransferUserConfig" id="@cdktf/aws-cdk.transferUser.TransferUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

const transferUserConfig: transferUser.TransferUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#role TransferUser#role}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.serverId">serverId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#server_id TransferUser#server_id}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#user_name TransferUser#user_name}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectory">homeDirectory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#home_directory TransferUser#home_directory}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectoryMappings">homeDirectoryMappings</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]</code> | home_directory_mappings block. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectoryType">homeDirectoryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#home_directory_type TransferUser#home_directory_type}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#id TransferUser#id}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#policy TransferUser#policy}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.posixProfile">posixProfile</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | posix_profile block. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#tags TransferUser#tags}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#tags_all TransferUser#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#role TransferUser#role}.

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#server_id TransferUser#server_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#user_name TransferUser#user_name}.

---

##### `homeDirectory`<sup>Optional</sup> <a name="homeDirectory" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectory"></a>

```typescript
public readonly homeDirectory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#home_directory TransferUser#home_directory}.

---

##### `homeDirectoryMappings`<sup>Optional</sup> <a name="homeDirectoryMappings" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectoryMappings"></a>

```typescript
public readonly homeDirectoryMappings: IResolvable | TransferUserHomeDirectoryMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]

home_directory_mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#home_directory_mappings TransferUser#home_directory_mappings}

---

##### `homeDirectoryType`<sup>Optional</sup> <a name="homeDirectoryType" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.homeDirectoryType"></a>

```typescript
public readonly homeDirectoryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#home_directory_type TransferUser#home_directory_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#id TransferUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#policy TransferUser#policy}.

---

##### `posixProfile`<sup>Optional</sup> <a name="posixProfile" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.posixProfile"></a>

```typescript
public readonly posixProfile: TransferUserPosixProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

posix_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#posix_profile TransferUser#posix_profile}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#tags TransferUser#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.transferUser.TransferUserConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#tags_all TransferUser#tags_all}.

---

### TransferUserHomeDirectoryMappings <a name="TransferUserHomeDirectoryMappings" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

const transferUserHomeDirectoryMappings: transferUser.TransferUserHomeDirectoryMappings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings.property.entry">entry</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#entry TransferUser#entry}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings.property.target">target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#target TransferUser#target}. |

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#entry TransferUser#entry}.

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#target TransferUser#target}.

---

### TransferUserPosixProfile <a name="TransferUserPosixProfile" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

const transferUserPosixProfile: transferUser.TransferUserPosixProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.gid">gid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#gid TransferUser#gid}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.uid">uid</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#uid TransferUser#uid}. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.secondaryGids">secondaryGids</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#secondary_gids TransferUser#secondary_gids}. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#gid TransferUser#gid}.

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#uid TransferUser#uid}.

---

##### `secondaryGids`<sup>Optional</sup> <a name="secondaryGids" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfile.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/transfer_user#secondary_gids TransferUser#secondary_gids}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferUserHomeDirectoryMappingsList <a name="TransferUserHomeDirectoryMappingsList" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

new transferUser.TransferUserHomeDirectoryMappingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.get"></a>

```typescript
public get(index: number): TransferUserHomeDirectoryMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferUserHomeDirectoryMappings[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>[]

---


### TransferUserHomeDirectoryMappingsOutputReference <a name="TransferUserHomeDirectoryMappingsOutputReference" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

new transferUser.TransferUserHomeDirectoryMappingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entryInput">entryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.targetInput">targetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entry">entry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.target">target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entryInput`<sup>Optional</sup> <a name="entryInput" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entryInput"></a>

```typescript
public readonly entryInput: string;
```

- *Type:* string

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.targetInput"></a>

```typescript
public readonly targetInput: string;
```

- *Type:* string

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.entry"></a>

```typescript
public readonly entry: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferUserHomeDirectoryMappings;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.transferUser.TransferUserHomeDirectoryMappings">TransferUserHomeDirectoryMappings</a>

---


### TransferUserPosixProfileOutputReference <a name="TransferUserPosixProfileOutputReference" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.Initializer"></a>

```typescript
import { transferUser } from '@cdktf/aws-cdk'

new transferUser.TransferUserPosixProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.resetSecondaryGids">resetSecondaryGids</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryGids` <a name="resetSecondaryGids" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.resetSecondaryGids"></a>

```typescript
public resetSecondaryGids(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.gidInput">gidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGidsInput">secondaryGidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.uidInput">uidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: number;
```

- *Type:* number

---

##### `secondaryGidsInput`<sup>Optional</sup> <a name="secondaryGidsInput" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGidsInput"></a>

```typescript
public readonly secondaryGidsInput: number[];
```

- *Type:* number[]

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: number[];
```

- *Type:* number[]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.transferUser.TransferUserPosixProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TransferUserPosixProfile;
```

- *Type:* <a href="#@cdktf/aws-cdk.transferUser.TransferUserPosixProfile">TransferUserPosixProfile</a>

---



