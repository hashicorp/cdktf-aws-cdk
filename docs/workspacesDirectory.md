# `workspacesDirectory` Submodule <a name="`workspacesDirectory` Submodule" id="@cdktf/aws-cdk.workspacesDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesDirectory <a name="WorkspacesDirectory" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory aws_workspaces_directory}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

new workspacesDirectory.WorkspacesDirectory(scope: Construct, id: string, config: WorkspacesDirectoryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig">WorkspacesDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions">putSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties">putWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties">putWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds">resetIpGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions">resetSelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties">resetWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties">resetWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSelfServicePermissions` <a name="putSelfServicePermissions" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions"></a>

```typescript
public putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putSelfServicePermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `putWorkspaceAccessProperties` <a name="putWorkspaceAccessProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties"></a>

```typescript
public putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceAccessProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `putWorkspaceCreationProperties` <a name="putWorkspaceCreationProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties"></a>

```typescript
public putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.putWorkspaceCreationProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpGroupIds` <a name="resetIpGroupIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetIpGroupIds"></a>

```typescript
public resetIpGroupIds(): void
```

##### `resetSelfServicePermissions` <a name="resetSelfServicePermissions" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetSelfServicePermissions"></a>

```typescript
public resetSelfServicePermissions(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetWorkspaceAccessProperties` <a name="resetWorkspaceAccessProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetWorkspaceAccessProperties"></a>

```typescript
public resetWorkspaceAccessProperties(): void
```

##### `resetWorkspaceCreationProperties` <a name="resetWorkspaceCreationProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.resetWorkspaceCreationProperties"></a>

```typescript
public resetWorkspaceCreationProperties(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isConstruct"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

workspacesDirectory.WorkspacesDirectory.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformElement"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

workspacesDirectory.WorkspacesDirectory.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformResource"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

workspacesDirectory.WorkspacesDirectory.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

workspacesDirectory.WorkspacesDirectory.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspacesDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.customerUserName">customerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryType">directoryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses">dnsIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.iamRoleId">iamRoleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.registrationCode">registrationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions">selfServicePermissions</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId">workspaceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput">ipGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput">selfServicePermissionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput">workspaceAccessPropertiesInput</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput">workspaceCreationPropertiesInput</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `customerUserName`<sup>Required</sup> <a name="customerUserName" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.customerUserName"></a>

```typescript
public readonly customerUserName: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `directoryType`<sup>Required</sup> <a name="directoryType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryType"></a>

```typescript
public readonly directoryType: string;
```

- *Type:* string

---

##### `dnsIpAddresses`<sup>Required</sup> <a name="dnsIpAddresses" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.dnsIpAddresses"></a>

```typescript
public readonly dnsIpAddresses: string[];
```

- *Type:* string[]

---

##### `iamRoleId`<sup>Required</sup> <a name="iamRoleId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.iamRoleId"></a>

```typescript
public readonly iamRoleId: string;
```

- *Type:* string

---

##### `registrationCode`<sup>Required</sup> <a name="registrationCode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.registrationCode"></a>

```typescript
public readonly registrationCode: string;
```

- *Type:* string

---

##### `selfServicePermissions`<sup>Required</sup> <a name="selfServicePermissions" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissions"></a>

```typescript
public readonly selfServicePermissions: WorkspacesDirectorySelfServicePermissionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference">WorkspacesDirectorySelfServicePermissionsOutputReference</a>

---

##### `workspaceAccessProperties`<sup>Required</sup> <a name="workspaceAccessProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference">WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference</a>

---

##### `workspaceCreationProperties`<sup>Required</sup> <a name="workspaceCreationProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference">WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference</a>

---

##### `workspaceSecurityGroupId`<sup>Required</sup> <a name="workspaceSecurityGroupId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceSecurityGroupId"></a>

```typescript
public readonly workspaceSecurityGroupId: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipGroupIdsInput`<sup>Optional</sup> <a name="ipGroupIdsInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.ipGroupIdsInput"></a>

```typescript
public readonly ipGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `selfServicePermissionsInput`<sup>Optional</sup> <a name="selfServicePermissionsInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.selfServicePermissionsInput"></a>

```typescript
public readonly selfServicePermissionsInput: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workspaceAccessPropertiesInput`<sup>Optional</sup> <a name="workspaceAccessPropertiesInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceAccessPropertiesInput"></a>

```typescript
public readonly workspaceAccessPropertiesInput: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---

##### `workspaceCreationPropertiesInput`<sup>Optional</sup> <a name="workspaceCreationPropertiesInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.workspaceCreationPropertiesInput"></a>

```typescript
public readonly workspaceCreationPropertiesInput: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipGroupIds`<sup>Required</sup> <a name="ipGroupIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectory.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesDirectoryConfig <a name="WorkspacesDirectoryConfig" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

const workspacesDirectoryConfig: workspacesDirectory.WorkspacesDirectoryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#id WorkspacesDirectory#id}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds">ipGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions">selfServicePermissions</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | self_service_permissions block. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties">workspaceAccessProperties</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | workspace_access_properties block. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties">workspaceCreationProperties</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | workspace_creation_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#id WorkspacesDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipGroupIds`<sup>Optional</sup> <a name="ipGroupIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.ipGroupIds"></a>

```typescript
public readonly ipGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}.

---

##### `selfServicePermissions`<sup>Optional</sup> <a name="selfServicePermissions" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.selfServicePermissions"></a>

```typescript
public readonly selfServicePermissions: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

self_service_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}.

---

##### `workspaceAccessProperties`<sup>Optional</sup> <a name="workspaceAccessProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceAccessProperties"></a>

```typescript
public readonly workspaceAccessProperties: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

workspace_access_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}

---

##### `workspaceCreationProperties`<sup>Optional</sup> <a name="workspaceCreationProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryConfig.property.workspaceCreationProperties"></a>

```typescript
public readonly workspaceCreationProperties: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

workspace_creation_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}

---

### WorkspacesDirectorySelfServicePermissions <a name="WorkspacesDirectorySelfServicePermissions" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

const workspacesDirectorySelfServicePermissions: workspacesDirectory.WorkspacesDirectorySelfServicePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType">changeComputeType</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace">restartWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode">switchRunningMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}. |

---

##### `changeComputeType`<sup>Optional</sup> <a name="changeComputeType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}.

---

##### `increaseVolumeSize`<sup>Optional</sup> <a name="increaseVolumeSize" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}.

---

##### `rebuildWorkspace`<sup>Optional</sup> <a name="rebuildWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}.

---

##### `restartWorkspace`<sup>Optional</sup> <a name="restartWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}.

---

##### `switchRunningMode`<sup>Optional</sup> <a name="switchRunningMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}.

---

### WorkspacesDirectoryWorkspaceAccessProperties <a name="WorkspacesDirectoryWorkspaceAccessProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

const workspacesDirectoryWorkspaceAccessProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos">deviceTypeChromeos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient">deviceTypeZeroclient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}. |

---

##### `deviceTypeAndroid`<sup>Optional</sup> <a name="deviceTypeAndroid" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}.

---

##### `deviceTypeChromeos`<sup>Optional</sup> <a name="deviceTypeChromeos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeChromeos"></a>

```typescript
public readonly deviceTypeChromeos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}.

---

##### `deviceTypeIos`<sup>Optional</sup> <a name="deviceTypeIos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}.

---

##### `deviceTypeLinux`<sup>Optional</sup> <a name="deviceTypeLinux" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}.

---

##### `deviceTypeOsx`<sup>Optional</sup> <a name="deviceTypeOsx" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}.

---

##### `deviceTypeWeb`<sup>Optional</sup> <a name="deviceTypeWeb" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}.

---

##### `deviceTypeWindows`<sup>Optional</sup> <a name="deviceTypeWindows" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}.

---

##### `deviceTypeZeroclient`<sup>Optional</sup> <a name="deviceTypeZeroclient" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties.property.deviceTypeZeroclient"></a>

```typescript
public readonly deviceTypeZeroclient: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}.

---

### WorkspacesDirectoryWorkspaceCreationProperties <a name="WorkspacesDirectoryWorkspaceCreationProperties" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

const workspacesDirectoryWorkspaceCreationProperties: workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu">defaultOu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}. |

---

##### `customSecurityGroupId`<sup>Optional</sup> <a name="customSecurityGroupId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}.

---

##### `defaultOu`<sup>Optional</sup> <a name="defaultOu" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}.

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}.

---

##### `enableMaintenanceMode`<sup>Optional</sup> <a name="enableMaintenanceMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}.

---

##### `userEnabledAsLocalAdministrator`<sup>Optional</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesDirectorySelfServicePermissionsOutputReference <a name="WorkspacesDirectorySelfServicePermissionsOutputReference" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

new workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType">resetChangeComputeType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize">resetIncreaseVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace">resetRebuildWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace">resetRestartWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode">resetSwitchRunningMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChangeComputeType` <a name="resetChangeComputeType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetChangeComputeType"></a>

```typescript
public resetChangeComputeType(): void
```

##### `resetIncreaseVolumeSize` <a name="resetIncreaseVolumeSize" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetIncreaseVolumeSize"></a>

```typescript
public resetIncreaseVolumeSize(): void
```

##### `resetRebuildWorkspace` <a name="resetRebuildWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRebuildWorkspace"></a>

```typescript
public resetRebuildWorkspace(): void
```

##### `resetRestartWorkspace` <a name="resetRestartWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetRestartWorkspace"></a>

```typescript
public resetRestartWorkspace(): void
```

##### `resetSwitchRunningMode` <a name="resetSwitchRunningMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.resetSwitchRunningMode"></a>

```typescript
public resetSwitchRunningMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput">changeComputeTypeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput">increaseVolumeSizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput">rebuildWorkspaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput">restartWorkspaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput">switchRunningModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType">changeComputeType</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize">increaseVolumeSize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace">rebuildWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace">restartWorkspace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode">switchRunningMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `changeComputeTypeInput`<sup>Optional</sup> <a name="changeComputeTypeInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeTypeInput"></a>

```typescript
public readonly changeComputeTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `increaseVolumeSizeInput`<sup>Optional</sup> <a name="increaseVolumeSizeInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSizeInput"></a>

```typescript
public readonly increaseVolumeSizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rebuildWorkspaceInput`<sup>Optional</sup> <a name="rebuildWorkspaceInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspaceInput"></a>

```typescript
public readonly rebuildWorkspaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartWorkspaceInput`<sup>Optional</sup> <a name="restartWorkspaceInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspaceInput"></a>

```typescript
public readonly restartWorkspaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `switchRunningModeInput`<sup>Optional</sup> <a name="switchRunningModeInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningModeInput"></a>

```typescript
public readonly switchRunningModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `changeComputeType`<sup>Required</sup> <a name="changeComputeType" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.changeComputeType"></a>

```typescript
public readonly changeComputeType: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `increaseVolumeSize`<sup>Required</sup> <a name="increaseVolumeSize" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.increaseVolumeSize"></a>

```typescript
public readonly increaseVolumeSize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `rebuildWorkspace`<sup>Required</sup> <a name="rebuildWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.rebuildWorkspace"></a>

```typescript
public readonly rebuildWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restartWorkspace`<sup>Required</sup> <a name="restartWorkspace" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.restartWorkspace"></a>

```typescript
public readonly restartWorkspace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `switchRunningMode`<sup>Required</sup> <a name="switchRunningMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.switchRunningMode"></a>

```typescript
public readonly switchRunningMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectorySelfServicePermissions;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectorySelfServicePermissions">WorkspacesDirectorySelfServicePermissions</a>

---


### WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

new workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid">resetDeviceTypeAndroid</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos">resetDeviceTypeChromeos</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos">resetDeviceTypeIos</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux">resetDeviceTypeLinux</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx">resetDeviceTypeOsx</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb">resetDeviceTypeWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows">resetDeviceTypeWindows</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient">resetDeviceTypeZeroclient</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceTypeAndroid` <a name="resetDeviceTypeAndroid" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeAndroid"></a>

```typescript
public resetDeviceTypeAndroid(): void
```

##### `resetDeviceTypeChromeos` <a name="resetDeviceTypeChromeos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeChromeos"></a>

```typescript
public resetDeviceTypeChromeos(): void
```

##### `resetDeviceTypeIos` <a name="resetDeviceTypeIos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeIos"></a>

```typescript
public resetDeviceTypeIos(): void
```

##### `resetDeviceTypeLinux` <a name="resetDeviceTypeLinux" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeLinux"></a>

```typescript
public resetDeviceTypeLinux(): void
```

##### `resetDeviceTypeOsx` <a name="resetDeviceTypeOsx" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeOsx"></a>

```typescript
public resetDeviceTypeOsx(): void
```

##### `resetDeviceTypeWeb` <a name="resetDeviceTypeWeb" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWeb"></a>

```typescript
public resetDeviceTypeWeb(): void
```

##### `resetDeviceTypeWindows` <a name="resetDeviceTypeWindows" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeWindows"></a>

```typescript
public resetDeviceTypeWindows(): void
```

##### `resetDeviceTypeZeroclient` <a name="resetDeviceTypeZeroclient" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.resetDeviceTypeZeroclient"></a>

```typescript
public resetDeviceTypeZeroclient(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput">deviceTypeAndroidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput">deviceTypeChromeosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput">deviceTypeIosInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput">deviceTypeLinuxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput">deviceTypeOsxInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput">deviceTypeWebInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput">deviceTypeWindowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput">deviceTypeZeroclientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid">deviceTypeAndroid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos">deviceTypeChromeos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos">deviceTypeIos</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux">deviceTypeLinux</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx">deviceTypeOsx</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb">deviceTypeWeb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows">deviceTypeWindows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient">deviceTypeZeroclient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceTypeAndroidInput`<sup>Optional</sup> <a name="deviceTypeAndroidInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroidInput"></a>

```typescript
public readonly deviceTypeAndroidInput: string;
```

- *Type:* string

---

##### `deviceTypeChromeosInput`<sup>Optional</sup> <a name="deviceTypeChromeosInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeosInput"></a>

```typescript
public readonly deviceTypeChromeosInput: string;
```

- *Type:* string

---

##### `deviceTypeIosInput`<sup>Optional</sup> <a name="deviceTypeIosInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIosInput"></a>

```typescript
public readonly deviceTypeIosInput: string;
```

- *Type:* string

---

##### `deviceTypeLinuxInput`<sup>Optional</sup> <a name="deviceTypeLinuxInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinuxInput"></a>

```typescript
public readonly deviceTypeLinuxInput: string;
```

- *Type:* string

---

##### `deviceTypeOsxInput`<sup>Optional</sup> <a name="deviceTypeOsxInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsxInput"></a>

```typescript
public readonly deviceTypeOsxInput: string;
```

- *Type:* string

---

##### `deviceTypeWebInput`<sup>Optional</sup> <a name="deviceTypeWebInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWebInput"></a>

```typescript
public readonly deviceTypeWebInput: string;
```

- *Type:* string

---

##### `deviceTypeWindowsInput`<sup>Optional</sup> <a name="deviceTypeWindowsInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindowsInput"></a>

```typescript
public readonly deviceTypeWindowsInput: string;
```

- *Type:* string

---

##### `deviceTypeZeroclientInput`<sup>Optional</sup> <a name="deviceTypeZeroclientInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclientInput"></a>

```typescript
public readonly deviceTypeZeroclientInput: string;
```

- *Type:* string

---

##### `deviceTypeAndroid`<sup>Required</sup> <a name="deviceTypeAndroid" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeAndroid"></a>

```typescript
public readonly deviceTypeAndroid: string;
```

- *Type:* string

---

##### `deviceTypeChromeos`<sup>Required</sup> <a name="deviceTypeChromeos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeChromeos"></a>

```typescript
public readonly deviceTypeChromeos: string;
```

- *Type:* string

---

##### `deviceTypeIos`<sup>Required</sup> <a name="deviceTypeIos" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeIos"></a>

```typescript
public readonly deviceTypeIos: string;
```

- *Type:* string

---

##### `deviceTypeLinux`<sup>Required</sup> <a name="deviceTypeLinux" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeLinux"></a>

```typescript
public readonly deviceTypeLinux: string;
```

- *Type:* string

---

##### `deviceTypeOsx`<sup>Required</sup> <a name="deviceTypeOsx" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeOsx"></a>

```typescript
public readonly deviceTypeOsx: string;
```

- *Type:* string

---

##### `deviceTypeWeb`<sup>Required</sup> <a name="deviceTypeWeb" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWeb"></a>

```typescript
public readonly deviceTypeWeb: string;
```

- *Type:* string

---

##### `deviceTypeWindows`<sup>Required</sup> <a name="deviceTypeWindows" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeWindows"></a>

```typescript
public readonly deviceTypeWindows: string;
```

- *Type:* string

---

##### `deviceTypeZeroclient`<sup>Required</sup> <a name="deviceTypeZeroclient" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.deviceTypeZeroclient"></a>

```typescript
public readonly deviceTypeZeroclient: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectoryWorkspaceAccessProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceAccessProperties">WorkspacesDirectoryWorkspaceAccessProperties</a>

---


### WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference <a name="WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer"></a>

```typescript
import { workspacesDirectory } from '@cdktf/aws-cdk'

new workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId">resetCustomSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu">resetDefaultOu</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode">resetEnableMaintenanceMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator">resetUserEnabledAsLocalAdministrator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomSecurityGroupId` <a name="resetCustomSecurityGroupId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetCustomSecurityGroupId"></a>

```typescript
public resetCustomSecurityGroupId(): void
```

##### `resetDefaultOu` <a name="resetDefaultOu" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetDefaultOu"></a>

```typescript
public resetDefaultOu(): void
```

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableInternetAccess"></a>

```typescript
public resetEnableInternetAccess(): void
```

##### `resetEnableMaintenanceMode` <a name="resetEnableMaintenanceMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetEnableMaintenanceMode"></a>

```typescript
public resetEnableMaintenanceMode(): void
```

##### `resetUserEnabledAsLocalAdministrator` <a name="resetUserEnabledAsLocalAdministrator" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.resetUserEnabledAsLocalAdministrator"></a>

```typescript
public resetUserEnabledAsLocalAdministrator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput">customSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput">defaultOuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput">enableMaintenanceModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput">userEnabledAsLocalAdministratorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId">customSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu">defaultOu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode">enableMaintenanceMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator">userEnabledAsLocalAdministrator</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customSecurityGroupIdInput`<sup>Optional</sup> <a name="customSecurityGroupIdInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupIdInput"></a>

```typescript
public readonly customSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `defaultOuInput`<sup>Optional</sup> <a name="defaultOuInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOuInput"></a>

```typescript
public readonly defaultOuInput: string;
```

- *Type:* string

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccessInput"></a>

```typescript
public readonly enableInternetAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMaintenanceModeInput`<sup>Optional</sup> <a name="enableMaintenanceModeInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceModeInput"></a>

```typescript
public readonly enableMaintenanceModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userEnabledAsLocalAdministratorInput`<sup>Optional</sup> <a name="userEnabledAsLocalAdministratorInput" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministratorInput"></a>

```typescript
public readonly userEnabledAsLocalAdministratorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customSecurityGroupId`<sup>Required</sup> <a name="customSecurityGroupId" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.customSecurityGroupId"></a>

```typescript
public readonly customSecurityGroupId: string;
```

- *Type:* string

---

##### `defaultOu`<sup>Required</sup> <a name="defaultOu" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.defaultOu"></a>

```typescript
public readonly defaultOu: string;
```

- *Type:* string

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableInternetAccess"></a>

```typescript
public readonly enableInternetAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableMaintenanceMode`<sup>Required</sup> <a name="enableMaintenanceMode" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.enableMaintenanceMode"></a>

```typescript
public readonly enableMaintenanceMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userEnabledAsLocalAdministrator`<sup>Required</sup> <a name="userEnabledAsLocalAdministrator" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.userEnabledAsLocalAdministrator"></a>

```typescript
public readonly userEnabledAsLocalAdministrator: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesDirectoryWorkspaceCreationProperties;
```

- *Type:* <a href="#@cdktf/aws-cdk.workspacesDirectory.WorkspacesDirectoryWorkspaceCreationProperties">WorkspacesDirectoryWorkspaceCreationProperties</a>

---



