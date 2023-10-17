# `data_aws_outposts_outpost_instance_type`

Refer to the Terraform Registory for docs: [`data_aws_outposts_outpost_instance_type`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type).

# `dataAwsOutpostsOutpostInstanceType` Submodule <a name="`dataAwsOutpostsOutpostInstanceType` Submodule" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOutpostsOutpostInstanceType <a name="DataAwsOutpostsOutpostInstanceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type aws_outposts_outpost_instance_type}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

new dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType(scope: Construct, id: string, config: DataAwsOutpostsOutpostInstanceTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig">DataAwsOutpostsOutpostInstanceTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType">resetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes">resetPreferredInstanceTypes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceType` <a name="resetInstanceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetInstanceType"></a>

```typescript
public resetInstanceType(): void
```

##### `resetPreferredInstanceTypes` <a name="resetPreferredInstanceTypes" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.resetPreferredInstanceTypes"></a>

```typescript
public resetPreferredInstanceTypes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOutpostsOutpostInstanceType resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOutpostsOutpostInstanceType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOutpostsOutpostInstanceType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOutpostsOutpostInstanceType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOutpostsOutpostInstanceType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput">preferredInstanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `preferredInstanceTypesInput`<sup>Optional</sup> <a name="preferredInstanceTypesInput" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypesInput"></a>

```typescript
public readonly preferredInstanceTypesInput: string[];
```

- *Type:* string[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `preferredInstanceTypes`<sup>Required</sup> <a name="preferredInstanceTypes" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.preferredInstanceTypes"></a>

```typescript
public readonly preferredInstanceTypes: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOutpostsOutpostInstanceTypeConfig <a name="DataAwsOutpostsOutpostInstanceTypeConfig" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.Initializer"></a>

```typescript
import { dataAwsOutpostsOutpostInstanceType } from '@cdktf/aws-cdk'

const dataAwsOutpostsOutpostInstanceTypeConfig: dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes">preferredInstanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#arn DataAwsOutpostsOutpostInstanceType#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#id DataAwsOutpostsOutpostInstanceType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceType`<sup>Optional</sup> <a name="instanceType" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#instance_type DataAwsOutpostsOutpostInstanceType#instance_type}.

---

##### `preferredInstanceTypes`<sup>Optional</sup> <a name="preferredInstanceTypes" id="@cdktf/aws-cdk.dataAwsOutpostsOutpostInstanceType.DataAwsOutpostsOutpostInstanceTypeConfig.property.preferredInstanceTypes"></a>

```typescript
public readonly preferredInstanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/outposts_outpost_instance_type#preferred_instance_types DataAwsOutpostsOutpostInstanceType#preferred_instance_types}.

---



