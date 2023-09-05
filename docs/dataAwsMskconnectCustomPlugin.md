# `data_aws_mskconnect_custom_plugin`

Refer to the Terraform Registory for docs: [`data_aws_mskconnect_custom_plugin`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin).

# `dataAwsMskconnectCustomPlugin` Submodule <a name="`dataAwsMskconnectCustomPlugin` Submodule" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsMskconnectCustomPlugin <a name="DataAwsMskconnectCustomPlugin" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin aws_mskconnect_custom_plugin}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer"></a>

```typescript
import { dataAwsMskconnectCustomPlugin } from '@cdktf/aws-cdk'

new dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin(scope: Construct, id: string, config: DataAwsMskconnectCustomPluginConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig">DataAwsMskconnectCustomPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct"></a>

```typescript
import { dataAwsMskconnectCustomPlugin } from '@cdktf/aws-cdk'

dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement"></a>

```typescript
import { dataAwsMskconnectCustomPlugin } from '@cdktf/aws-cdk'

dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource"></a>

```typescript
import { dataAwsMskconnectCustomPlugin } from '@cdktf/aws-cdk'

dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision">latestRevision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.latestRevision"></a>

```typescript
public readonly latestRevision: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPlugin.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsMskconnectCustomPluginConfig <a name="DataAwsMskconnectCustomPluginConfig" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.Initializer"></a>

```typescript
import { dataAwsMskconnectCustomPlugin } from '@cdktf/aws-cdk'

const dataAwsMskconnectCustomPluginConfig: dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin#name DataAwsMskconnectCustomPlugin#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsMskconnectCustomPlugin.DataAwsMskconnectCustomPluginConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/mskconnect_custom_plugin#id DataAwsMskconnectCustomPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



