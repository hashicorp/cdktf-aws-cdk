# `ecrReplicationConfiguration` Submodule <a name="`ecrReplicationConfiguration` Submodule" id="@cdktf/aws-cdk.ecrReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrReplicationConfiguration <a name="EcrReplicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration aws_ecr_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfiguration(scope: Construct, id: string, config?: EcrReplicationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig">EcrReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: EcrReplicationConfigurationReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.putReplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcrReplicationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcrReplicationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrReplicationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrReplicationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcrReplicationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: EcrReplicationConfigurationReplicationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference">EcrReplicationConfigurationReplicationConfigurationOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: EcrReplicationConfigurationReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrReplicationConfigurationConfig <a name="EcrReplicationConfigurationConfig" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

const ecrReplicationConfigurationConfig: ecrReplicationConfiguration.EcrReplicationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#id EcrReplicationConfiguration#id}. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration">replicationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | replication_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#id EcrReplicationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replicationConfiguration`<sup>Optional</sup> <a name="replicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationConfig.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: EcrReplicationConfigurationReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

replication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#replication_configuration EcrReplicationConfiguration#replication_configuration}

---

### EcrReplicationConfigurationReplicationConfiguration <a name="EcrReplicationConfigurationReplicationConfiguration" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

const ecrReplicationConfigurationReplicationConfiguration: ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]</code> | rule block. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration.property.rule"></a>

```typescript
public readonly rule: IResolvable | EcrReplicationConfigurationReplicationConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#rule EcrReplicationConfiguration#rule}

---

### EcrReplicationConfigurationReplicationConfigurationRule <a name="EcrReplicationConfigurationReplicationConfigurationRule" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

const ecrReplicationConfigurationReplicationConfigurationRule: ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]</code> | destination block. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter">repositoryFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]</code> | repository_filter block. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.destination"></a>

```typescript
public readonly destination: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#destination EcrReplicationConfiguration#destination}

---

##### `repositoryFilter`<sup>Optional</sup> <a name="repositoryFilter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule.property.repositoryFilter"></a>

```typescript
public readonly repositoryFilter: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]

repository_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#repository_filter EcrReplicationConfiguration#repository_filter}

---

### EcrReplicationConfigurationReplicationConfigurationRuleDestination <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestination" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

const ecrReplicationConfigurationReplicationConfigurationRuleDestination: ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#region EcrReplicationConfiguration#region}. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId">registryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#region EcrReplicationConfiguration#region}.

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#registry_id EcrReplicationConfiguration#registry_id}.

---

### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

const ecrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter: ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType">filterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#filter EcrReplicationConfiguration#filter}.

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ecr_replication_configuration#filter_type EcrReplicationConfiguration#filter_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcrReplicationConfigurationReplicationConfigurationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationOutputReference" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule">putRule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRule` <a name="putRule" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule"></a>

```typescript
public putRule(value: IResolvable | EcrReplicationConfigurationReplicationConfigurationRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.rule"></a>

```typescript
public readonly rule: EcrReplicationConfigurationReplicationConfigurationRuleList;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList">EcrReplicationConfigurationReplicationConfigurationRuleList</a>

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | EcrReplicationConfigurationReplicationConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EcrReplicationConfigurationReplicationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfiguration">EcrReplicationConfigurationReplicationConfiguration</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationList <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationList" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get"></a>

```typescript
public get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput">registryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId">registryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `registryIdInput`<sup>Optional</sup> <a name="registryIdInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryIdInput"></a>

```typescript
public readonly registryIdInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.registryId"></a>

```typescript
public readonly registryId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleList <a name="EcrReplicationConfigurationReplicationConfigurationRuleList" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get"></a>

```typescript
public get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRuleOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleOutputReference" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter">putRepositoryFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter">resetRepositoryFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination"></a>

```typescript
public putDestination(value: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]

---

##### `putRepositoryFilter` <a name="putRepositoryFilter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter"></a>

```typescript
public putRepositoryFilter(value: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.putRepositoryFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]

---

##### `resetRepositoryFilter` <a name="resetRepositoryFilter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.resetRepositoryFilter"></a>

```typescript
public resetRepositoryFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter">repositoryFilter</a></code> | <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput">repositoryFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destination"></a>

```typescript
public readonly destination: EcrReplicationConfigurationReplicationConfigurationRuleDestinationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestinationList">EcrReplicationConfigurationReplicationConfigurationRuleDestinationList</a>

---

##### `repositoryFilter`<sup>Required</sup> <a name="repositoryFilter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilter"></a>

```typescript
public readonly repositoryFilter: EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleDestination">EcrReplicationConfigurationReplicationConfigurationRuleDestination</a>[]

---

##### `repositoryFilterInput`<sup>Optional</sup> <a name="repositoryFilterInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.repositoryFilterInput"></a>

```typescript
public readonly repositoryFilterInput: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRule">EcrReplicationConfigurationReplicationConfigurationRule</a>

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get"></a>

```typescript
public get(index: number): EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>[]

---


### EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference <a name="EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer"></a>

```typescript
import { ecrReplicationConfiguration } from '@cdktf/aws-cdk'

new ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType">filterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterTypeInput"></a>

```typescript
public readonly filterTypeInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.filterType"></a>

```typescript
public readonly filterType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.ecrReplicationConfiguration.EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter">EcrReplicationConfigurationReplicationConfigurationRuleRepositoryFilter</a>

---



