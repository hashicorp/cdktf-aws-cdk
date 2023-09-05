# `data_aws_msk_broker_nodes`

Refer to the Terraform Registory for docs: [`data_aws_msk_broker_nodes`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes).

# `dataAwsMskBrokerNodes` Submodule <a name="`dataAwsMskBrokerNodes` Submodule" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskBrokerNodes <a name="DataAwsMskBrokerNodes" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes aws_msk_broker_nodes}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

new dataAwsMskBrokerNodes.DataAwsMskBrokerNodes(scope: Construct, id: string, config: DataAwsMskBrokerNodesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig">DataAwsMskBrokerNodesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig">DataAwsMskBrokerNodesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.nodeInfoList">nodeInfoList</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList">DataAwsMskBrokerNodesNodeInfoListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArnInput">clusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArn">clusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `nodeInfoList`<sup>Required</sup> <a name="nodeInfoList" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.nodeInfoList"></a>

```typescript
public readonly nodeInfoList: DataAwsMskBrokerNodesNodeInfoListStructList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList">DataAwsMskBrokerNodesNodeInfoListStructList</a>

---

##### `clusterArnInput`<sup>Optional</sup> <a name="clusterArnInput" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArnInput"></a>

```typescript
public readonly clusterArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskBrokerNodesConfig <a name="DataAwsMskBrokerNodesConfig" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.Initializer"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

const dataAwsMskBrokerNodesConfig: dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.clusterArn">clusterArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes#id DataAwsMskBrokerNodes#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes#cluster_arn DataAwsMskBrokerNodes#cluster_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_broker_nodes#id DataAwsMskBrokerNodes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsMskBrokerNodesNodeInfoListStruct <a name="DataAwsMskBrokerNodesNodeInfoListStruct" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct.Initializer"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

const dataAwsMskBrokerNodesNodeInfoListStruct: dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsMskBrokerNodesNodeInfoListStructList <a name="DataAwsMskBrokerNodesNodeInfoListStructList" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

new dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get"></a>

```typescript
public get(index: number): DataAwsMskBrokerNodesNodeInfoListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsMskBrokerNodesNodeInfoListStructOutputReference <a name="DataAwsMskBrokerNodesNodeInfoListStructOutputReference" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsMskBrokerNodes } from '@cdktf/aws-cdk'

new dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.attachedEniId">attachedEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.brokerId">brokerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientSubnet">clientSubnet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientVpcIpAddress">clientVpcIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.endpoints">endpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.nodeArn">nodeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct">DataAwsMskBrokerNodesNodeInfoListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attachedEniId`<sup>Required</sup> <a name="attachedEniId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.attachedEniId"></a>

```typescript
public readonly attachedEniId: string;
```

- *Type:* string

---

##### `brokerId`<sup>Required</sup> <a name="brokerId" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.brokerId"></a>

```typescript
public readonly brokerId: number;
```

- *Type:* number

---

##### `clientSubnet`<sup>Required</sup> <a name="clientSubnet" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientSubnet"></a>

```typescript
public readonly clientSubnet: string;
```

- *Type:* string

---

##### `clientVpcIpAddress`<sup>Required</sup> <a name="clientVpcIpAddress" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.clientVpcIpAddress"></a>

```typescript
public readonly clientVpcIpAddress: string;
```

- *Type:* string

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.endpoints"></a>

```typescript
public readonly endpoints: string[];
```

- *Type:* string[]

---

##### `nodeArn`<sup>Required</sup> <a name="nodeArn" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.nodeArn"></a>

```typescript
public readonly nodeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsMskBrokerNodesNodeInfoListStruct;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsMskBrokerNodes.DataAwsMskBrokerNodesNodeInfoListStruct">DataAwsMskBrokerNodesNodeInfoListStruct</a>

---



