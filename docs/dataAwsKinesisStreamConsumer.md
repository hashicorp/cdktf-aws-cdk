# `dataAwsKinesisStreamConsumer` Submodule <a name="`dataAwsKinesisStreamConsumer` Submodule" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsKinesisStreamConsumer <a name="DataAwsKinesisStreamConsumer" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer aws_kinesis_stream_consumer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

new dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer(scope: Construct, id: string, config: DataAwsKinesisStreamConsumerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig">DataAwsKinesisStreamConsumerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig">DataAwsKinesisStreamConsumerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName">resetName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.resetName"></a>

```typescript
public resetName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsKinesisStreamConsumer resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsKinesisStreamConsumer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsKinesisStreamConsumer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsKinesisStreamConsumer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsKinesisStreamConsumer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsKinesisStreamConsumerConfig <a name="DataAwsKinesisStreamConsumerConfig" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.Initializer"></a>

```typescript
import { dataAwsKinesisStreamConsumer } from '@cdktf/aws-cdk'

const dataAwsKinesisStreamConsumerConfig: dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#stream_arn DataAwsKinesisStreamConsumer#stream_arn}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#arn DataAwsKinesisStreamConsumer#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#id DataAwsKinesisStreamConsumer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsKinesisStreamConsumer.DataAwsKinesisStreamConsumerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/kinesis_stream_consumer#name DataAwsKinesisStreamConsumer#name}.

---



