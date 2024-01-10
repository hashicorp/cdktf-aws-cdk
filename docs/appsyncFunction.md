# `appsyncFunction` Submodule <a name="`appsyncFunction` Submodule" id="@cdktf/aws-cdk.appsyncFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunction <a name="AppsyncFunction" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function aws_appsync_function}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

new appsyncFunction.AppsyncFunction(scope: Construct, id: string, config: AppsyncFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetFunctionVersion">resetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.putSyncConfig"></a>

```typescript
public putSyncConfig(value: AppsyncFunctionSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionVersion` <a name="resetFunctionVersion" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetFunctionVersion"></a>

```typescript
public resetFunctionVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetMaxBatchSize"></a>

```typescript
public resetMaxBatchSize(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppsyncFunction resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isConstruct"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

appsyncFunction.AppsyncFunction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformElement"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

appsyncFunction.AppsyncFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformResource"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

appsyncFunction.AppsyncFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

appsyncFunction.AppsyncFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppsyncFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppsyncFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppsyncFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppsyncFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionVersionInput">functionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput">requestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput">responseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionVersion">functionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionVersionInput`<sup>Optional</sup> <a name="functionVersionInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionVersionInput"></a>

```typescript
public readonly functionVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput"></a>

```typescript
public readonly maxBatchSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMappingTemplateInput`<sup>Optional</sup> <a name="requestMappingTemplateInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput"></a>

```typescript
public readonly requestMappingTemplateInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateInput`<sup>Optional</sup> <a name="responseMappingTemplateInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput"></a>

```typescript
public readonly responseMappingTemplateInput: string;
```

- *Type:* string

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfig <a name="AppsyncFunctionConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

const appsyncFunctionConfig: appsyncFunction.AppsyncFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.functionVersion">functionVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#name AppsyncFunction#name}.

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#description AppsyncFunction#description}.

---

##### `functionVersion`<sup>Optional</sup> <a name="functionVersion" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#sync_config AppsyncFunction#sync_config}

---

### AppsyncFunctionSyncConfig <a name="AppsyncFunctionSyncConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

const appsyncFunctionSyncConfig: appsyncFunction.AppsyncFunctionSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#conflict_detection AppsyncFunction#conflict_detection}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#conflict_handler AppsyncFunction#conflict_handler}. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

const appsyncFunctionSyncConfigLambdaConflictHandlerConfig: appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

new appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```typescript
public resetLambdaConflictHandlerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```typescript
public readonly lambdaConflictHandlerArnInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionSyncConfigOutputReference <a name="AppsyncFunctionSyncConfigOutputReference" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/aws-cdk'

new appsyncFunction.AppsyncFunctionSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```typescript
public putLambdaConflictHandlerConfig(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection"></a>

```typescript
public resetConflictDetection(): void
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler"></a>

```typescript
public resetConflictHandler(): void
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```typescript
public resetLambdaConflictHandlerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput"></a>

```typescript
public readonly conflictDetectionInput: string;
```

- *Type:* string

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput"></a>

```typescript
public readonly conflictHandlerInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```typescript
public readonly lambdaConflictHandlerConfigInput: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---



