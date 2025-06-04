# `dataAwsWorkspacesWorkspace` Submodule <a name="`dataAwsWorkspacesWorkspace` Submodule" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsWorkspacesWorkspace <a name="DataAwsWorkspacesWorkspace" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace aws_workspaces_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace(scope: Construct, id: string, config?: DataAwsWorkspacesWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig">DataAwsWorkspacesWorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig">DataAwsWorkspacesWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId">resetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDirectoryId` <a name="resetDirectoryId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetDirectoryId"></a>

```typescript
public resetDirectoryId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetUserName"></a>

```typescript
public resetUserName(): void
```

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsWorkspacesWorkspace resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsWorkspacesWorkspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsWorkspacesWorkspace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsWorkspacesWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsWorkspacesWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName">computerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled">rootVolumeEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled">userVolumeEncryptionEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey">volumeEncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties">workspaceProperties</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `computerName`<sup>Required</sup> <a name="computerName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.computerName"></a>

```typescript
public readonly computerName: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `rootVolumeEncryptionEnabled`<sup>Required</sup> <a name="rootVolumeEncryptionEnabled" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.rootVolumeEncryptionEnabled"></a>

```typescript
public readonly rootVolumeEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `userVolumeEncryptionEnabled`<sup>Required</sup> <a name="userVolumeEncryptionEnabled" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userVolumeEncryptionEnabled"></a>

```typescript
public readonly userVolumeEncryptionEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `volumeEncryptionKey`<sup>Required</sup> <a name="volumeEncryptionKey" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.volumeEncryptionKey"></a>

```typescript
public readonly volumeEncryptionKey: string;
```

- *Type:* string

---

##### `workspaceProperties`<sup>Required</sup> <a name="workspaceProperties" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceProperties"></a>

```typescript
public readonly workspaceProperties: DataAwsWorkspacesWorkspaceWorkspacePropertiesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList">DataAwsWorkspacesWorkspaceWorkspacePropertiesList</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsWorkspacesWorkspaceConfig <a name="DataAwsWorkspacesWorkspaceConfig" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

const dataAwsWorkspacesWorkspaceConfig: dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Optional</sup> <a name="directoryId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#directory_id DataAwsWorkspacesWorkspace#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#id DataAwsWorkspacesWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#tags DataAwsWorkspacesWorkspace#tags}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#user_name DataAwsWorkspacesWorkspace#user_name}.

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/workspaces_workspace#workspace_id DataAwsWorkspacesWorkspace#workspace_id}.

---

### DataAwsWorkspacesWorkspaceWorkspaceProperties <a name="DataAwsWorkspacesWorkspaceWorkspaceProperties" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

const dataAwsWorkspacesWorkspaceWorkspaceProperties: dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsWorkspacesWorkspaceWorkspacePropertiesList <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesList" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get"></a>

```typescript
public get(index: number): DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference <a name="DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsWorkspacesWorkspace } from '@cdktf/aws-cdk'

new dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName">computeTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib">rootVolumeSizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode">runningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes">runningModeAutoStopTimeoutInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib">userVolumeSizeGib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeTypeName`<sup>Required</sup> <a name="computeTypeName" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.computeTypeName"></a>

```typescript
public readonly computeTypeName: string;
```

- *Type:* string

---

##### `rootVolumeSizeGib`<sup>Required</sup> <a name="rootVolumeSizeGib" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.rootVolumeSizeGib"></a>

```typescript
public readonly rootVolumeSizeGib: number;
```

- *Type:* number

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

---

##### `runningModeAutoStopTimeoutInMinutes`<sup>Required</sup> <a name="runningModeAutoStopTimeoutInMinutes" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.runningModeAutoStopTimeoutInMinutes"></a>

```typescript
public readonly runningModeAutoStopTimeoutInMinutes: number;
```

- *Type:* number

---

##### `userVolumeSizeGib`<sup>Required</sup> <a name="userVolumeSizeGib" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.userVolumeSizeGib"></a>

```typescript
public readonly userVolumeSizeGib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspacePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsWorkspacesWorkspaceWorkspaceProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsWorkspacesWorkspace.DataAwsWorkspacesWorkspaceWorkspaceProperties">DataAwsWorkspacesWorkspaceWorkspaceProperties</a>

---



