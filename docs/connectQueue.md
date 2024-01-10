# `connectQueue` Submodule <a name="`connectQueue` Submodule" id="@cdktf/aws-cdk.connectQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectQueue <a name="ConnectQueue" id="@cdktf/aws-cdk.connectQueue.ConnectQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue aws_connect_queue}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

new connectQueue.ConnectQueue(scope: Construct, id: string, config: ConnectQueueConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig">ConnectQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.putOutboundCallerConfig">putOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetMaxContacts">resetMaxContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetOutboundCallerConfig">resetOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetQuickConnectIds">resetQuickConnectIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutboundCallerConfig` <a name="putOutboundCallerConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.putOutboundCallerConfig"></a>

```typescript
public putOutboundCallerConfig(value: ConnectQueueOutboundCallerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.putOutboundCallerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxContacts` <a name="resetMaxContacts" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetMaxContacts"></a>

```typescript
public resetMaxContacts(): void
```

##### `resetOutboundCallerConfig` <a name="resetOutboundCallerConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetOutboundCallerConfig"></a>

```typescript
public resetOutboundCallerConfig(): void
```

##### `resetQuickConnectIds` <a name="resetQuickConnectIds" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetQuickConnectIds"></a>

```typescript
public resetQuickConnectIds(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectQueue resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isConstruct"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

connectQueue.ConnectQueue.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformElement"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

connectQueue.ConnectQueue.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformResource"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

connectQueue.ConnectQueue.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

connectQueue.ConnectQueue.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ConnectQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ConnectQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ConnectQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ConnectQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.queueId">queueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.hoursOfOperationIdInput">hoursOfOperationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.maxContactsInput">maxContactsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.outboundCallerConfigInput">outboundCallerConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.quickConnectIdsInput">quickConnectIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.maxContacts">maxContacts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.quickConnectIds">quickConnectIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `outboundCallerConfig`<sup>Required</sup> <a name="outboundCallerConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: ConnectQueueOutboundCallerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference">ConnectQueueOutboundCallerConfigOutputReference</a>

---

##### `queueId`<sup>Required</sup> <a name="queueId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.queueId"></a>

```typescript
public readonly queueId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hoursOfOperationIdInput`<sup>Optional</sup> <a name="hoursOfOperationIdInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.hoursOfOperationIdInput"></a>

```typescript
public readonly hoursOfOperationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `maxContactsInput`<sup>Optional</sup> <a name="maxContactsInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.maxContactsInput"></a>

```typescript
public readonly maxContactsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outboundCallerConfigInput`<sup>Optional</sup> <a name="outboundCallerConfigInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.outboundCallerConfigInput"></a>

```typescript
public readonly outboundCallerConfigInput: ConnectQueueOutboundCallerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---

##### `quickConnectIdsInput`<sup>Optional</sup> <a name="quickConnectIdsInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.quickConnectIdsInput"></a>

```typescript
public readonly quickConnectIdsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maxContacts`<sup>Required</sup> <a name="maxContacts" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.maxContacts"></a>

```typescript
public readonly maxContacts: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `quickConnectIds`<sup>Required</sup> <a name="quickConnectIds" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.quickConnectIds"></a>

```typescript
public readonly quickConnectIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.connectQueue.ConnectQueue.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectQueueConfig <a name="ConnectQueueConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.Initializer"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

const connectQueueConfig: connectQueue.ConnectQueueConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#instance_id ConnectQueue#instance_id}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#name ConnectQueue#name}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#description ConnectQueue#description}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#id ConnectQueue#id}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.maxContacts">maxContacts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.outboundCallerConfig">outboundCallerConfig</a></code> | <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | outbound_caller_config block. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.quickConnectIds">quickConnectIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#status ConnectQueue#status}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#tags ConnectQueue#tags}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#tags_all ConnectQueue#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#hours_of_operation_id ConnectQueue#hours_of_operation_id}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#instance_id ConnectQueue#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#name ConnectQueue#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#description ConnectQueue#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#id ConnectQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxContacts`<sup>Optional</sup> <a name="maxContacts" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.maxContacts"></a>

```typescript
public readonly maxContacts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#max_contacts ConnectQueue#max_contacts}.

---

##### `outboundCallerConfig`<sup>Optional</sup> <a name="outboundCallerConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.outboundCallerConfig"></a>

```typescript
public readonly outboundCallerConfig: ConnectQueueOutboundCallerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

outbound_caller_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_caller_config ConnectQueue#outbound_caller_config}

---

##### `quickConnectIds`<sup>Optional</sup> <a name="quickConnectIds" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.quickConnectIds"></a>

```typescript
public readonly quickConnectIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#quick_connect_ids ConnectQueue#quick_connect_ids}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#status ConnectQueue#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#tags ConnectQueue#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.connectQueue.ConnectQueueConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#tags_all ConnectQueue#tags_all}.

---

### ConnectQueueOutboundCallerConfig <a name="ConnectQueueOutboundCallerConfig" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.Initializer"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

const connectQueueOutboundCallerConfig: connectQueue.ConnectQueueOutboundCallerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberId">outboundCallerIdNumberId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowId">outboundFlowId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}. |

---

##### `outboundCallerIdName`<sup>Optional</sup> <a name="outboundCallerIdName" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdName"></a>

```typescript
public readonly outboundCallerIdName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_caller_id_name ConnectQueue#outbound_caller_id_name}.

---

##### `outboundCallerIdNumberId`<sup>Optional</sup> <a name="outboundCallerIdNumberId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundCallerIdNumberId"></a>

```typescript
public readonly outboundCallerIdNumberId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_caller_id_number_id ConnectQueue#outbound_caller_id_number_id}.

---

##### `outboundFlowId`<sup>Optional</sup> <a name="outboundFlowId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig.property.outboundFlowId"></a>

```typescript
public readonly outboundFlowId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_queue#outbound_flow_id ConnectQueue#outbound_flow_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectQueueOutboundCallerConfigOutputReference <a name="ConnectQueueOutboundCallerConfigOutputReference" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer"></a>

```typescript
import { connectQueue } from '@cdktf/aws-cdk'

new connectQueue.ConnectQueueOutboundCallerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName">resetOutboundCallerIdName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberId">resetOutboundCallerIdNumberId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowId">resetOutboundFlowId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutboundCallerIdName` <a name="resetOutboundCallerIdName" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdName"></a>

```typescript
public resetOutboundCallerIdName(): void
```

##### `resetOutboundCallerIdNumberId` <a name="resetOutboundCallerIdNumberId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundCallerIdNumberId"></a>

```typescript
public resetOutboundCallerIdNumberId(): void
```

##### `resetOutboundFlowId` <a name="resetOutboundFlowId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.resetOutboundFlowId"></a>

```typescript
public resetOutboundFlowId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput">outboundCallerIdNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberIdInput">outboundCallerIdNumberIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowIdInput">outboundFlowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName">outboundCallerIdName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberId">outboundCallerIdNumberId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowId">outboundFlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outboundCallerIdNameInput`<sup>Optional</sup> <a name="outboundCallerIdNameInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNameInput"></a>

```typescript
public readonly outboundCallerIdNameInput: string;
```

- *Type:* string

---

##### `outboundCallerIdNumberIdInput`<sup>Optional</sup> <a name="outboundCallerIdNumberIdInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberIdInput"></a>

```typescript
public readonly outboundCallerIdNumberIdInput: string;
```

- *Type:* string

---

##### `outboundFlowIdInput`<sup>Optional</sup> <a name="outboundFlowIdInput" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowIdInput"></a>

```typescript
public readonly outboundFlowIdInput: string;
```

- *Type:* string

---

##### `outboundCallerIdName`<sup>Required</sup> <a name="outboundCallerIdName" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdName"></a>

```typescript
public readonly outboundCallerIdName: string;
```

- *Type:* string

---

##### `outboundCallerIdNumberId`<sup>Required</sup> <a name="outboundCallerIdNumberId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundCallerIdNumberId"></a>

```typescript
public readonly outboundCallerIdNumberId: string;
```

- *Type:* string

---

##### `outboundFlowId`<sup>Required</sup> <a name="outboundFlowId" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.outboundFlowId"></a>

```typescript
public readonly outboundFlowId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectQueueOutboundCallerConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectQueue.ConnectQueueOutboundCallerConfig">ConnectQueueOutboundCallerConfig</a>

---



