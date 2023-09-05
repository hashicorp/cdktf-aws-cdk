# `data_aws_msk_kafka_version`

Refer to the Terraform Registory for docs: [`data_aws_msk_kafka_version`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version).

# `dataAwsMskKafkaVersion` Submodule <a name="`dataAwsMskKafkaVersion` Submodule" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskKafkaVersion <a name="DataAwsMskKafkaVersion" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version aws_msk_kafka_version}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer"></a>

```typescript
import { dataAwsMskKafkaVersion } from '@cdktf/aws-cdk'

new dataAwsMskKafkaVersion.DataAwsMskKafkaVersion(scope: Construct, id: string, config?: DataAwsMskKafkaVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig">DataAwsMskKafkaVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig">DataAwsMskKafkaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetPreferredVersions">resetPreferredVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreferredVersions` <a name="resetPreferredVersions" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetPreferredVersions"></a>

```typescript
public resetPreferredVersions(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isConstruct"></a>

```typescript
import { dataAwsMskKafkaVersion } from '@cdktf/aws-cdk'

dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformElement"></a>

```typescript
import { dataAwsMskKafkaVersion } from '@cdktf/aws-cdk'

dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsMskKafkaVersion } from '@cdktf/aws-cdk'

dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.preferredVersionsInput">preferredVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.preferredVersions">preferredVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `preferredVersionsInput`<sup>Optional</sup> <a name="preferredVersionsInput" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.preferredVersionsInput"></a>

```typescript
public readonly preferredVersionsInput: string[];
```

- *Type:* string[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preferredVersions`<sup>Required</sup> <a name="preferredVersions" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.preferredVersions"></a>

```typescript
public readonly preferredVersions: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskKafkaVersionConfig <a name="DataAwsMskKafkaVersionConfig" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.Initializer"></a>

```typescript
import { dataAwsMskKafkaVersion } from '@cdktf/aws-cdk'

const dataAwsMskKafkaVersionConfig: dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#id DataAwsMskKafkaVersion#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.preferredVersions">preferredVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#preferred_versions DataAwsMskKafkaVersion#preferred_versions}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#version DataAwsMskKafkaVersion#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#id DataAwsMskKafkaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferredVersions`<sup>Optional</sup> <a name="preferredVersions" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.preferredVersions"></a>

```typescript
public readonly preferredVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#preferred_versions DataAwsMskKafkaVersion#preferred_versions}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.dataAwsMskKafkaVersion.DataAwsMskKafkaVersionConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/msk_kafka_version#version DataAwsMskKafkaVersion#version}.

---



