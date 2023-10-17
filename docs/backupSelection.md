# `aws_backup_selection`

Refer to the Terraform Registory for docs: [`aws_backup_selection`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection).

# `backupSelection` Submodule <a name="`backupSelection` Submodule" id="@cdktf/aws-cdk.backupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupSelection <a name="BackupSelection" id="@cdktf/aws-cdk.backupSelection.BackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection aws_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelection(scope: Construct, id: string, config: BackupSelectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig">BackupSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.backupSelection.BackupSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig">BackupSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.putSelectionTag">putSelectionTag</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetNotResources">resetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.resetSelectionTag">resetSelectionTag</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.backupSelection.BackupSelection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.backupSelection.BackupSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.backupSelection.BackupSelection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.backupSelection.BackupSelection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.backupSelection.BackupSelection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.backupSelection.BackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.backupSelection.BackupSelection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.backupSelection.BackupSelection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.backupSelection.BackupSelection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.backupSelection.BackupSelection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.backupSelection.BackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putCondition` <a name="putCondition" id="@cdktf/aws-cdk.backupSelection.BackupSelection.putCondition"></a>

```typescript
public putCondition(value: IResolvable | BackupSelectionCondition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelection.putCondition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]

---

##### `putSelectionTag` <a name="putSelectionTag" id="@cdktf/aws-cdk.backupSelection.BackupSelection.putSelectionTag"></a>

```typescript
public putSelectionTag(value: IResolvable | BackupSelectionSelectionTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelection.putSelectionTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotResources` <a name="resetNotResources" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetNotResources"></a>

```typescript
public resetNotResources(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetSelectionTag` <a name="resetSelectionTag" id="@cdktf/aws-cdk.backupSelection.BackupSelection.resetSelectionTag"></a>

```typescript
public resetSelectionTag(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BackupSelection resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isConstruct"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

backupSelection.BackupSelection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformElement"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

backupSelection.BackupSelection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformResource"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

backupSelection.BackupSelection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.backupSelection.BackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

backupSelection.BackupSelection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BackupSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.backupSelection.BackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.condition">condition</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList">BackupSelectionConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.selectionTag">selectionTag</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList">BackupSelectionSelectionTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.conditionInput">conditionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.iamRoleArnInput">iamRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.notResourcesInput">notResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.planIdInput">planIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.selectionTagInput">selectionTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.notResources">notResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.planId">planId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.condition"></a>

```typescript
public readonly condition: BackupSelectionConditionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList">BackupSelectionConditionList</a>

---

##### `selectionTag`<sup>Required</sup> <a name="selectionTag" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.selectionTag"></a>

```typescript
public readonly selectionTag: BackupSelectionSelectionTagList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList">BackupSelectionSelectionTagList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.conditionInput"></a>

```typescript
public readonly conditionInput: IResolvable | BackupSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]

---

##### `iamRoleArnInput`<sup>Optional</sup> <a name="iamRoleArnInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.iamRoleArnInput"></a>

```typescript
public readonly iamRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notResourcesInput`<sup>Optional</sup> <a name="notResourcesInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.notResourcesInput"></a>

```typescript
public readonly notResourcesInput: string[];
```

- *Type:* string[]

---

##### `planIdInput`<sup>Optional</sup> <a name="planIdInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.planIdInput"></a>

```typescript
public readonly planIdInput: string;
```

- *Type:* string

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `selectionTagInput`<sup>Optional</sup> <a name="selectionTagInput" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.selectionTagInput"></a>

```typescript
public readonly selectionTagInput: IResolvable | BackupSelectionSelectionTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `notResources`<sup>Required</sup> <a name="notResources" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.backupSelection.BackupSelection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupSelectionCondition <a name="BackupSelectionCondition" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionCondition: backupSelection.BackupSelectionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringEquals">stringEquals</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]</code> | string_equals block. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringLike">stringLike</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]</code> | string_like block. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringNotEquals">stringNotEquals</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]</code> | string_not_equals block. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringNotLike">stringNotLike</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]</code> | string_not_like block. |

---

##### `stringEquals`<sup>Optional</sup> <a name="stringEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringEquals"></a>

```typescript
public readonly stringEquals: IResolvable | BackupSelectionConditionStringEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]

string_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#string_equals BackupSelection#string_equals}

---

##### `stringLike`<sup>Optional</sup> <a name="stringLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringLike"></a>

```typescript
public readonly stringLike: IResolvable | BackupSelectionConditionStringLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]

string_like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#string_like BackupSelection#string_like}

---

##### `stringNotEquals`<sup>Optional</sup> <a name="stringNotEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: IResolvable | BackupSelectionConditionStringNotEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]

string_not_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#string_not_equals BackupSelection#string_not_equals}

---

##### `stringNotLike`<sup>Optional</sup> <a name="stringNotLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionCondition.property.stringNotLike"></a>

```typescript
public readonly stringNotLike: IResolvable | BackupSelectionConditionStringNotLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]

string_not_like block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#string_not_like BackupSelection#string_not_like}

---

### BackupSelectionConditionStringEquals <a name="BackupSelectionConditionStringEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionConditionStringEquals: backupSelection.BackupSelectionConditionStringEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringLike <a name="BackupSelectionConditionStringLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionConditionStringLike: backupSelection.BackupSelectionConditionStringLike = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringNotEquals <a name="BackupSelectionConditionStringNotEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionConditionStringNotEquals: backupSelection.BackupSelectionConditionStringNotEquals = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConditionStringNotLike <a name="BackupSelectionConditionStringNotLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionConditionStringNotLike: backupSelection.BackupSelectionConditionStringNotLike = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}.

---

### BackupSelectionConfig <a name="BackupSelectionConfig" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionConfig: backupSelection.BackupSelectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.iamRoleArn">iamRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#iam_role_arn BackupSelection#iam_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#name BackupSelection#name}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.planId">planId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#plan_id BackupSelection#plan_id}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.condition">condition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]</code> | condition block. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#id BackupSelection#id}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.notResources">notResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#not_resources BackupSelection#not_resources}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#resources BackupSelection#resources}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.selectionTag">selectionTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]</code> | selection_tag block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamRoleArn`<sup>Required</sup> <a name="iamRoleArn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.iamRoleArn"></a>

```typescript
public readonly iamRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#iam_role_arn BackupSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#name BackupSelection#name}.

---

##### `planId`<sup>Required</sup> <a name="planId" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.planId"></a>

```typescript
public readonly planId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#plan_id BackupSelection#plan_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.condition"></a>

```typescript
public readonly condition: IResolvable | BackupSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#condition BackupSelection#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#id BackupSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notResources`<sup>Optional</sup> <a name="notResources" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.notResources"></a>

```typescript
public readonly notResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#not_resources BackupSelection#not_resources}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#resources BackupSelection#resources}.

---

##### `selectionTag`<sup>Optional</sup> <a name="selectionTag" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConfig.property.selectionTag"></a>

```typescript
public readonly selectionTag: IResolvable | BackupSelectionSelectionTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]

selection_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#selection_tag BackupSelection#selection_tag}

---

### BackupSelectionSelectionTag <a name="BackupSelectionSelectionTag" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

const backupSelectionSelectionTag: backupSelection.BackupSelectionSelectionTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#type BackupSelection#type}. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#key BackupSelection#key}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#type BackupSelection#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/backup_selection#value BackupSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupSelectionConditionList <a name="BackupSelectionConditionList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.get"></a>

```typescript
public get(index: number): BackupSelectionConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionCondition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>[]

---


### BackupSelectionConditionOutputReference <a name="BackupSelectionConditionOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringEquals">putStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringLike">putStringLike</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals">putStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike">putStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringEquals">resetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringLike">resetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringNotEquals">resetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringNotLike">resetStringNotLike</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStringEquals` <a name="putStringEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringEquals"></a>

```typescript
public putStringEquals(value: IResolvable | BackupSelectionConditionStringEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringEquals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]

---

##### `putStringLike` <a name="putStringLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringLike"></a>

```typescript
public putStringLike(value: IResolvable | BackupSelectionConditionStringLike[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringLike.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]

---

##### `putStringNotEquals` <a name="putStringNotEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals"></a>

```typescript
public putStringNotEquals(value: IResolvable | BackupSelectionConditionStringNotEquals[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]

---

##### `putStringNotLike` <a name="putStringNotLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike"></a>

```typescript
public putStringNotLike(value: IResolvable | BackupSelectionConditionStringNotLike[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]

---

##### `resetStringEquals` <a name="resetStringEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringEquals"></a>

```typescript
public resetStringEquals(): void
```

##### `resetStringLike` <a name="resetStringLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringLike"></a>

```typescript
public resetStringLike(): void
```

##### `resetStringNotEquals` <a name="resetStringNotEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringNotEquals"></a>

```typescript
public resetStringNotEquals(): void
```

##### `resetStringNotLike` <a name="resetStringNotLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.resetStringNotLike"></a>

```typescript
public resetStringNotLike(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringEquals">stringEquals</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList">BackupSelectionConditionStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringLike">stringLike</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList">BackupSelectionConditionStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEquals">stringNotEquals</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList">BackupSelectionConditionStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLike">stringNotLike</a></code> | <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList">BackupSelectionConditionStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringEqualsInput">stringEqualsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringLikeInput">stringLikeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEqualsInput">stringNotEqualsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLikeInput">stringNotLikeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stringEquals`<sup>Required</sup> <a name="stringEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringEquals"></a>

```typescript
public readonly stringEquals: BackupSelectionConditionStringEqualsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList">BackupSelectionConditionStringEqualsList</a>

---

##### `stringLike`<sup>Required</sup> <a name="stringLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringLike"></a>

```typescript
public readonly stringLike: BackupSelectionConditionStringLikeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList">BackupSelectionConditionStringLikeList</a>

---

##### `stringNotEquals`<sup>Required</sup> <a name="stringNotEquals" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEquals"></a>

```typescript
public readonly stringNotEquals: BackupSelectionConditionStringNotEqualsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList">BackupSelectionConditionStringNotEqualsList</a>

---

##### `stringNotLike`<sup>Required</sup> <a name="stringNotLike" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLike"></a>

```typescript
public readonly stringNotLike: BackupSelectionConditionStringNotLikeList;
```

- *Type:* <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList">BackupSelectionConditionStringNotLikeList</a>

---

##### `stringEqualsInput`<sup>Optional</sup> <a name="stringEqualsInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringEqualsInput"></a>

```typescript
public readonly stringEqualsInput: IResolvable | BackupSelectionConditionStringEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]

---

##### `stringLikeInput`<sup>Optional</sup> <a name="stringLikeInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringLikeInput"></a>

```typescript
public readonly stringLikeInput: IResolvable | BackupSelectionConditionStringLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]

---

##### `stringNotEqualsInput`<sup>Optional</sup> <a name="stringNotEqualsInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotEqualsInput"></a>

```typescript
public readonly stringNotEqualsInput: IResolvable | BackupSelectionConditionStringNotEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]

---

##### `stringNotLikeInput`<sup>Optional</sup> <a name="stringNotLikeInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.stringNotLikeInput"></a>

```typescript
public readonly stringNotLikeInput: IResolvable | BackupSelectionConditionStringNotLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionCondition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionCondition">BackupSelectionCondition</a>

---


### BackupSelectionConditionStringEqualsList <a name="BackupSelectionConditionStringEqualsList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.get"></a>

```typescript
public get(index: number): BackupSelectionConditionStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>[]

---


### BackupSelectionConditionStringEqualsOutputReference <a name="BackupSelectionConditionStringEqualsOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringEquals;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringEquals">BackupSelectionConditionStringEquals</a>

---


### BackupSelectionConditionStringLikeList <a name="BackupSelectionConditionStringLikeList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringLikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.get"></a>

```typescript
public get(index: number): BackupSelectionConditionStringLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>[]

---


### BackupSelectionConditionStringLikeOutputReference <a name="BackupSelectionConditionStringLikeOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringLikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringLike;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringLike">BackupSelectionConditionStringLike</a>

---


### BackupSelectionConditionStringNotEqualsList <a name="BackupSelectionConditionStringNotEqualsList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringNotEqualsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.get"></a>

```typescript
public get(index: number): BackupSelectionConditionStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringNotEquals[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>[]

---


### BackupSelectionConditionStringNotEqualsOutputReference <a name="BackupSelectionConditionStringNotEqualsOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringNotEqualsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEqualsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringNotEquals;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotEquals">BackupSelectionConditionStringNotEquals</a>

---


### BackupSelectionConditionStringNotLikeList <a name="BackupSelectionConditionStringNotLikeList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringNotLikeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.get"></a>

```typescript
public get(index: number): BackupSelectionConditionStringNotLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringNotLike[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>[]

---


### BackupSelectionConditionStringNotLikeOutputReference <a name="BackupSelectionConditionStringNotLikeOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionConditionStringNotLikeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLikeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionConditionStringNotLike;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionConditionStringNotLike">BackupSelectionConditionStringNotLike</a>

---


### BackupSelectionSelectionTagList <a name="BackupSelectionSelectionTagList" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionSelectionTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.get"></a>

```typescript
public get(index: number): BackupSelectionSelectionTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionSelectionTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>[]

---


### BackupSelectionSelectionTagOutputReference <a name="BackupSelectionSelectionTagOutputReference" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer"></a>

```typescript
import { backupSelection } from '@cdktf/aws-cdk'

new backupSelection.BackupSelectionSelectionTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BackupSelectionSelectionTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.backupSelection.BackupSelectionSelectionTag">BackupSelectionSelectionTag</a>

---



