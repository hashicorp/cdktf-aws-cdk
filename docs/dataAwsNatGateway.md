# `dataAwsNatGateway` Submodule <a name="`dataAwsNatGateway` Submodule" id="@cdktf/aws-cdk.dataAwsNatGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsNatGateway <a name="DataAwsNatGateway" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway aws_nat_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

new dataAwsNatGateway.DataAwsNatGateway(scope: Construct, id: string, config?: DataAwsNatGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig">DataAwsNatGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig">DataAwsNatGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsNatGatewayFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetState` <a name="resetState" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsNatGateway resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isConstruct"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

dataAwsNatGateway.DataAwsNatGateway.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformElement"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

dataAwsNatGateway.DataAwsNatGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformDataSource"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

dataAwsNatGateway.DataAwsNatGateway.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsNatGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsNatGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsNatGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsNatGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.allocationId">allocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.connectivityType">connectivityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList">DataAwsNatGatewayFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

---

##### `connectivityType`<sup>Required</sup> <a name="connectivityType" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.connectivityType"></a>

```typescript
public readonly connectivityType: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.filter"></a>

```typescript
public readonly filter: DataAwsNatGatewayFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList">DataAwsNatGatewayFilterList</a>

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsNatGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsNatGatewayConfig <a name="DataAwsNatGatewayConfig" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.Initializer"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

const dataAwsNatGatewayConfig: dataAwsNatGateway.DataAwsNatGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#id DataAwsNatGateway#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#state DataAwsNatGateway#state}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#subnet_id DataAwsNatGateway#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#tags DataAwsNatGateway#tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#vpc_id DataAwsNatGateway#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsNatGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#filter DataAwsNatGateway#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#id DataAwsNatGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#state DataAwsNatGateway#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#subnet_id DataAwsNatGateway#subnet_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#tags DataAwsNatGateway#tags}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#vpc_id DataAwsNatGateway#vpc_id}.

---

### DataAwsNatGatewayFilter <a name="DataAwsNatGatewayFilter" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter.Initializer"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

const dataAwsNatGatewayFilter: dataAwsNatGateway.DataAwsNatGatewayFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#name DataAwsNatGateway#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#values DataAwsNatGateway#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#name DataAwsNatGateway#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/nat_gateway#values DataAwsNatGateway#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsNatGatewayFilterList <a name="DataAwsNatGatewayFilterList" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

new dataAwsNatGateway.DataAwsNatGatewayFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.get"></a>

```typescript
public get(index: number): DataAwsNatGatewayFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsNatGatewayFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>[]

---


### DataAwsNatGatewayFilterOutputReference <a name="DataAwsNatGatewayFilterOutputReference" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsNatGateway } from '@cdktf/aws-cdk'

new dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsNatGatewayFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsNatGateway.DataAwsNatGatewayFilter">DataAwsNatGatewayFilter</a>

---



