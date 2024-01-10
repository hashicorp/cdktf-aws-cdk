# `dataAwsConnectInstance` Submodule <a name="`dataAwsConnectInstance` Submodule" id="@cdktf/aws-cdk.dataAwsConnectInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsConnectInstance <a name="DataAwsConnectInstance" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance aws_connect_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

new dataAwsConnectInstance.DataAwsConnectInstance(scope: Construct, id: string, config?: DataAwsConnectInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig">DataAwsConnectInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig">DataAwsConnectInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetInstanceAlias">resetInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetInstanceId">resetInstanceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceAlias` <a name="resetInstanceAlias" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetInstanceAlias"></a>

```typescript
public resetInstanceAlias(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsConnectInstance resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isConstruct"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

dataAwsConnectInstance.DataAwsConnectInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformElement"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

dataAwsConnectInstance.DataAwsConnectInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformDataSource"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

dataAwsConnectInstance.DataAwsConnectInstance.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsConnectInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsConnectInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsConnectInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsConnectInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.autoResolveBestVoicesEnabled">autoResolveBestVoicesEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.contactFlowLogsEnabled">contactFlowLogsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.contactLensEnabled">contactLensEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.earlyMediaEnabled">earlyMediaEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.identityManagementType">identityManagementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.inboundCallsEnabled">inboundCallsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.outboundCallsEnabled">outboundCallsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceAliasInput">instanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoResolveBestVoicesEnabled`<sup>Required</sup> <a name="autoResolveBestVoicesEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.autoResolveBestVoicesEnabled"></a>

```typescript
public readonly autoResolveBestVoicesEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `contactFlowLogsEnabled`<sup>Required</sup> <a name="contactFlowLogsEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.contactFlowLogsEnabled"></a>

```typescript
public readonly contactFlowLogsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `contactLensEnabled`<sup>Required</sup> <a name="contactLensEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.contactLensEnabled"></a>

```typescript
public readonly contactLensEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `earlyMediaEnabled`<sup>Required</sup> <a name="earlyMediaEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.earlyMediaEnabled"></a>

```typescript
public readonly earlyMediaEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `identityManagementType`<sup>Required</sup> <a name="identityManagementType" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.identityManagementType"></a>

```typescript
public readonly identityManagementType: string;
```

- *Type:* string

---

##### `inboundCallsEnabled`<sup>Required</sup> <a name="inboundCallsEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.inboundCallsEnabled"></a>

```typescript
public readonly inboundCallsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `outboundCallsEnabled`<sup>Required</sup> <a name="outboundCallsEnabled" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.outboundCallsEnabled"></a>

```typescript
public readonly outboundCallsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceAliasInput`<sup>Optional</sup> <a name="instanceAliasInput" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceAliasInput"></a>

```typescript
public readonly instanceAliasInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceAlias`<sup>Required</sup> <a name="instanceAlias" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsConnectInstanceConfig <a name="DataAwsConnectInstanceConfig" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.Initializer"></a>

```typescript
import { dataAwsConnectInstance } from '@cdktf/aws-cdk'

const dataAwsConnectInstanceConfig: dataAwsConnectInstance.DataAwsConnectInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#id DataAwsConnectInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.instanceAlias">instanceAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#instance_alias DataAwsConnectInstance#instance_alias}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#instance_id DataAwsConnectInstance#instance_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#id DataAwsConnectInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceAlias`<sup>Optional</sup> <a name="instanceAlias" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.instanceAlias"></a>

```typescript
public readonly instanceAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#instance_alias DataAwsConnectInstance#instance_alias}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/aws-cdk.dataAwsConnectInstance.DataAwsConnectInstanceConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/connect_instance#instance_id DataAwsConnectInstance#instance_id}.

---



