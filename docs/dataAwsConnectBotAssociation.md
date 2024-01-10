# `dataAwsConnectBotAssociation` Submodule <a name="`dataAwsConnectBotAssociation` Submodule" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectBotAssociation <a name="DataAwsConnectBotAssociation" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association aws_connect_bot_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

new dataAwsConnectBotAssociation.DataAwsConnectBotAssociation(scope: Construct, id: string, config: DataAwsConnectBotAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig">DataAwsConnectBotAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig">DataAwsConnectBotAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot">putLexBot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putLexBot` <a name="putLexBot" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot"></a>

```typescript
public putLexBot(value: DataAwsConnectBotAssociationLexBot): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.putLexBot.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsConnectBotAssociation resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsConnectBotAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsConnectBotAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsConnectBotAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsConnectBotAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBot">lexBot</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference">DataAwsConnectBotAssociationLexBotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBotInput">lexBotInput</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `lexBot`<sup>Required</sup> <a name="lexBot" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBot"></a>

```typescript
public readonly lexBot: DataAwsConnectBotAssociationLexBotOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference">DataAwsConnectBotAssociationLexBotOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `lexBotInput`<sup>Optional</sup> <a name="lexBotInput" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.lexBotInput"></a>

```typescript
public readonly lexBotInput: DataAwsConnectBotAssociationLexBot;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectBotAssociationConfig <a name="DataAwsConnectBotAssociationConfig" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.Initializer"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

const dataAwsConnectBotAssociationConfig: dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lexBot">lexBot</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | lex_bot block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#id DataAwsConnectBotAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}.

---

##### `lexBot`<sup>Required</sup> <a name="lexBot" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.lexBot"></a>

```typescript
public readonly lexBot: DataAwsConnectBotAssociationLexBot;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

lex_bot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#lex_bot DataAwsConnectBotAssociation#lex_bot}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#id DataAwsConnectBotAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsConnectBotAssociationLexBot <a name="DataAwsConnectBotAssociationLexBot" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.Initializer"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

const dataAwsConnectBotAssociationLexBot: dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#name DataAwsConnectBotAssociation#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.lexRegion">lexRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#name DataAwsConnectBotAssociation#name}.

---

##### `lexRegion`<sup>Optional</sup> <a name="lexRegion" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot.property.lexRegion"></a>

```typescript
public readonly lexRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsConnectBotAssociationLexBotOutputReference <a name="DataAwsConnectBotAssociationLexBotOutputReference" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer"></a>

```typescript
import { dataAwsConnectBotAssociation } from '@cdktf/aws-cdk'

new dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resetLexRegion">resetLexRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLexRegion` <a name="resetLexRegion" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.resetLexRegion"></a>

```typescript
public resetLexRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegionInput">lexRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegion">lexRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lexRegionInput`<sup>Optional</sup> <a name="lexRegionInput" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegionInput"></a>

```typescript
public readonly lexRegionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `lexRegion`<sup>Required</sup> <a name="lexRegion" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.lexRegion"></a>

```typescript
public readonly lexRegion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsConnectBotAssociationLexBot;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectBotAssociation.DataAwsConnectBotAssociationLexBot">DataAwsConnectBotAssociationLexBot</a>

---



