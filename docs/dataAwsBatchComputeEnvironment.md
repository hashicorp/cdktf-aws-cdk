# `dataAwsBatchComputeEnvironment` Submodule <a name="`dataAwsBatchComputeEnvironment` Submodule" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsBatchComputeEnvironment <a name="DataAwsBatchComputeEnvironment" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment aws_batch_compute_environment}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

new dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment(scope: Construct, id: string, config: DataAwsBatchComputeEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig">DataAwsBatchComputeEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig">DataAwsBatchComputeEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsBatchComputeEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsBatchComputeEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsBatchComputeEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsBatchComputeEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsBatchComputeEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.ecsClusterArn">ecsClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.computeEnvironmentNameInput">computeEnvironmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ecsClusterArn`<sup>Required</sup> <a name="ecsClusterArn" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.ecsClusterArn"></a>

```typescript
public readonly ecsClusterArn: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `computeEnvironmentNameInput`<sup>Optional</sup> <a name="computeEnvironmentNameInput" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.computeEnvironmentNameInput"></a>

```typescript
public readonly computeEnvironmentNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsBatchComputeEnvironmentConfig <a name="DataAwsBatchComputeEnvironmentConfig" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.Initializer"></a>

```typescript
import { dataAwsBatchComputeEnvironment } from '@cdktf/aws-cdk'

const dataAwsBatchComputeEnvironmentConfig: dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.computeEnvironmentName">computeEnvironmentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#compute_environment_name DataAwsBatchComputeEnvironment#compute_environment_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#id DataAwsBatchComputeEnvironment#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#tags DataAwsBatchComputeEnvironment#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `computeEnvironmentName`<sup>Required</sup> <a name="computeEnvironmentName" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.computeEnvironmentName"></a>

```typescript
public readonly computeEnvironmentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#compute_environment_name DataAwsBatchComputeEnvironment#compute_environment_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#id DataAwsBatchComputeEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsBatchComputeEnvironment.DataAwsBatchComputeEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/batch_compute_environment#tags DataAwsBatchComputeEnvironment#tags}.

---



