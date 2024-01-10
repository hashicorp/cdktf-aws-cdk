# `codebuildWebhook` Submodule <a name="`codebuildWebhook` Submodule" id="@cdktf/aws-cdk.codebuildWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildWebhook <a name="CodebuildWebhook" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook aws_codebuild_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

new codebuildWebhook.CodebuildWebhook(scope: Construct, id: string, config: CodebuildWebhookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig">CodebuildWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig">CodebuildWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.putFilterGroup">putFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetBranchFilter">resetBranchFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetBuildType">resetBuildType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetFilterGroup">resetFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFilterGroup` <a name="putFilterGroup" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.putFilterGroup"></a>

```typescript
public putFilterGroup(value: IResolvable | CodebuildWebhookFilterGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.putFilterGroup.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---

##### `resetBranchFilter` <a name="resetBranchFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetBranchFilter"></a>

```typescript
public resetBranchFilter(): void
```

##### `resetBuildType` <a name="resetBuildType" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetBuildType"></a>

```typescript
public resetBuildType(): void
```

##### `resetFilterGroup` <a name="resetFilterGroup" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetFilterGroup"></a>

```typescript
public resetFilterGroup(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isConstruct"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

codebuildWebhook.CodebuildWebhook.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformElement"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

codebuildWebhook.CodebuildWebhook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformResource"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

codebuildWebhook.CodebuildWebhook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

codebuildWebhook.CodebuildWebhook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodebuildWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.filterGroup">filterGroup</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.payloadUrl">payloadUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.branchFilterInput">branchFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.buildTypeInput">buildTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.filterGroupInput">filterGroupInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.projectNameInput">projectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.branchFilter">branchFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.buildType">buildType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.projectName">projectName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterGroup`<sup>Required</sup> <a name="filterGroup" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.filterGroup"></a>

```typescript
public readonly filterGroup: CodebuildWebhookFilterGroupList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList">CodebuildWebhookFilterGroupList</a>

---

##### `payloadUrl`<sup>Required</sup> <a name="payloadUrl" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.payloadUrl"></a>

```typescript
public readonly payloadUrl: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `branchFilterInput`<sup>Optional</sup> <a name="branchFilterInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.branchFilterInput"></a>

```typescript
public readonly branchFilterInput: string;
```

- *Type:* string

---

##### `buildTypeInput`<sup>Optional</sup> <a name="buildTypeInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.buildTypeInput"></a>

```typescript
public readonly buildTypeInput: string;
```

- *Type:* string

---

##### `filterGroupInput`<sup>Optional</sup> <a name="filterGroupInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.filterGroupInput"></a>

```typescript
public readonly filterGroupInput: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectNameInput`<sup>Optional</sup> <a name="projectNameInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.projectNameInput"></a>

```typescript
public readonly projectNameInput: string;
```

- *Type:* string

---

##### `branchFilter`<sup>Required</sup> <a name="branchFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

---

##### `buildType`<sup>Required</sup> <a name="buildType" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildWebhookConfig <a name="CodebuildWebhookConfig" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

const codebuildWebhookConfig: codebuildWebhook.CodebuildWebhookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.projectName">projectName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter">branchFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.buildType">buildType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup">filterGroup</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | filter_group block. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#id CodebuildWebhook#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectName`<sup>Required</sup> <a name="projectName" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.projectName"></a>

```typescript
public readonly projectName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#project_name CodebuildWebhook#project_name}.

---

##### `branchFilter`<sup>Optional</sup> <a name="branchFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.branchFilter"></a>

```typescript
public readonly branchFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#branch_filter CodebuildWebhook#branch_filter}.

---

##### `buildType`<sup>Optional</sup> <a name="buildType" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.buildType"></a>

```typescript
public readonly buildType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#build_type CodebuildWebhook#build_type}.

---

##### `filterGroup`<sup>Optional</sup> <a name="filterGroup" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.filterGroup"></a>

```typescript
public readonly filterGroup: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

filter_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#filter_group CodebuildWebhook#filter_group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#id CodebuildWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### CodebuildWebhookFilterGroup <a name="CodebuildWebhookFilterGroup" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

const codebuildWebhookFilterGroup: codebuildWebhook.CodebuildWebhookFilterGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup.property.filter"></a>

```typescript
public readonly filter: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#filter CodebuildWebhook#filter}

---

### CodebuildWebhookFilterGroupFilter <a name="CodebuildWebhookFilterGroupFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

const codebuildWebhookFilterGroupFilter: codebuildWebhook.CodebuildWebhookFilterGroupFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern">pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#type CodebuildWebhook#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#pattern CodebuildWebhook#pattern}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#type CodebuildWebhook#type}.

---

##### `excludeMatchedPattern`<sup>Optional</sup> <a name="excludeMatchedPattern" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter.property.excludeMatchedPattern"></a>

```typescript
public readonly excludeMatchedPattern: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_webhook#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildWebhookFilterGroupFilterList <a name="CodebuildWebhookFilterGroupFilterList" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

new codebuildWebhook.CodebuildWebhookFilterGroupFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get"></a>

```typescript
public get(index: number): CodebuildWebhookFilterGroupFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---


### CodebuildWebhookFilterGroupFilterOutputReference <a name="CodebuildWebhookFilterGroupFilterOutputReference" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

new codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern">resetExcludeMatchedPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludeMatchedPattern` <a name="resetExcludeMatchedPattern" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.resetExcludeMatchedPattern"></a>

```typescript
public resetExcludeMatchedPattern(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput">excludeMatchedPatternInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput">patternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern">excludeMatchedPattern</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeMatchedPatternInput`<sup>Optional</sup> <a name="excludeMatchedPatternInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPatternInput"></a>

```typescript
public readonly excludeMatchedPatternInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.patternInput"></a>

```typescript
public readonly patternInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `excludeMatchedPattern`<sup>Required</sup> <a name="excludeMatchedPattern" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.excludeMatchedPattern"></a>

```typescript
public readonly excludeMatchedPattern: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroupFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>

---


### CodebuildWebhookFilterGroupList <a name="CodebuildWebhookFilterGroupList" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

new codebuildWebhook.CodebuildWebhookFilterGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.get"></a>

```typescript
public get(index: number): CodebuildWebhookFilterGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroup[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>[]

---


### CodebuildWebhookFilterGroupOutputReference <a name="CodebuildWebhookFilterGroupOutputReference" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer"></a>

```typescript
import { codebuildWebhook } from '@cdktf/aws-cdk'

new codebuildWebhook.CodebuildWebhookFilterGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter"></a>

```typescript
public putFilter(value: IResolvable | CodebuildWebhookFilterGroupFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filter"></a>

```typescript
public readonly filter: CodebuildWebhookFilterGroupFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilterList">CodebuildWebhookFilterGroupFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | CodebuildWebhookFilterGroupFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupFilter">CodebuildWebhookFilterGroupFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildWebhookFilterGroup;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildWebhook.CodebuildWebhookFilterGroup">CodebuildWebhookFilterGroup</a>

---



