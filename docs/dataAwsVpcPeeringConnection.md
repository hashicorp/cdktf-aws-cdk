# `dataAwsVpcPeeringConnection` Submodule <a name="`dataAwsVpcPeeringConnection` Submodule" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsVpcPeeringConnection <a name="DataAwsVpcPeeringConnection" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection(scope: Construct, id: string, config?: DataAwsVpcPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig">DataAwsVpcPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig">DataAwsVpcPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerCidrBlock">resetPeerCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerOwnerId">resetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerRegion">resetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerVpcId">resetPeerVpcId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsVpcPeeringConnectionFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]

---

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetOwnerId"></a>

```typescript
public resetOwnerId(): void
```

##### `resetPeerCidrBlock` <a name="resetPeerCidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerCidrBlock"></a>

```typescript
public resetPeerCidrBlock(): void
```

##### `resetPeerOwnerId` <a name="resetPeerOwnerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerOwnerId"></a>

```typescript
public resetPeerOwnerId(): void
```

##### `resetPeerRegion` <a name="resetPeerRegion" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerRegion"></a>

```typescript
public resetPeerRegion(): void
```

##### `resetPeerVpcId` <a name="resetPeerVpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetPeerVpcId"></a>

```typescript
public resetPeerVpcId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsVpcPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsVpcPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsVpcPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsVpcPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsVpcPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.accepter">accepter</a></code> | <code>cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockSet">cidrBlockSet</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList">DataAwsVpcPeeringConnectionCidrBlockSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList">DataAwsVpcPeeringConnectionFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockSet">peerCidrBlockSet</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList">DataAwsVpcPeeringConnectionPeerCidrBlockSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.requester">requester</a></code> | <code>cdktf.BooleanMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerIdInput">ownerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockInput">peerCidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerIdInput">peerOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegionInput">peerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlock">peerCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerId">peerOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.accepter"></a>

```typescript
public readonly accepter: BooleanMap;
```

- *Type:* cdktf.BooleanMap

---

##### `cidrBlockSet`<sup>Required</sup> <a name="cidrBlockSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockSet"></a>

```typescript
public readonly cidrBlockSet: DataAwsVpcPeeringConnectionCidrBlockSetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList">DataAwsVpcPeeringConnectionCidrBlockSetList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filter"></a>

```typescript
public readonly filter: DataAwsVpcPeeringConnectionFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList">DataAwsVpcPeeringConnectionFilterList</a>

---

##### `peerCidrBlockSet`<sup>Required</sup> <a name="peerCidrBlockSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockSet"></a>

```typescript
public readonly peerCidrBlockSet: DataAwsVpcPeeringConnectionPeerCidrBlockSetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList">DataAwsVpcPeeringConnectionPeerCidrBlockSetList</a>

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.requester"></a>

```typescript
public readonly requester: BooleanMap;
```

- *Type:* cdktf.BooleanMap

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsVpcPeeringConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerIdInput"></a>

```typescript
public readonly ownerIdInput: string;
```

- *Type:* string

---

##### `peerCidrBlockInput`<sup>Optional</sup> <a name="peerCidrBlockInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlockInput"></a>

```typescript
public readonly peerCidrBlockInput: string;
```

- *Type:* string

---

##### `peerOwnerIdInput`<sup>Optional</sup> <a name="peerOwnerIdInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerIdInput"></a>

```typescript
public readonly peerOwnerIdInput: string;
```

- *Type:* string

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegionInput"></a>

```typescript
public readonly peerRegionInput: string;
```

- *Type:* string

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcIdInput"></a>

```typescript
public readonly peerVpcIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `peerCidrBlock`<sup>Required</sup> <a name="peerCidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerCidrBlock"></a>

```typescript
public readonly peerCidrBlock: string;
```

- *Type:* string

---

##### `peerOwnerId`<sup>Required</sup> <a name="peerOwnerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerOwnerId"></a>

```typescript
public readonly peerOwnerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsVpcPeeringConnectionCidrBlockSet <a name="DataAwsVpcPeeringConnectionCidrBlockSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

const dataAwsVpcPeeringConnectionCidrBlockSet: dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet = { ... }
```


### DataAwsVpcPeeringConnectionConfig <a name="DataAwsVpcPeeringConnectionConfig" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

const dataAwsVpcPeeringConnectionConfig: dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#cidr_block DataAwsVpcPeeringConnection#cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#id DataAwsVpcPeeringConnection#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.ownerId">ownerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#owner_id DataAwsVpcPeeringConnection#owner_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerCidrBlock">peerCidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerOwnerId">peerOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerRegion">peerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_region DataAwsVpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#region DataAwsVpcPeeringConnection#region}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#status DataAwsVpcPeeringConnection#status}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#tags DataAwsVpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#vpc_id DataAwsVpcPeeringConnection#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#cidr_block DataAwsVpcPeeringConnection#cidr_block}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsVpcPeeringConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#filter DataAwsVpcPeeringConnection#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#id DataAwsVpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#owner_id DataAwsVpcPeeringConnection#owner_id}.

---

##### `peerCidrBlock`<sup>Optional</sup> <a name="peerCidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerCidrBlock"></a>

```typescript
public readonly peerCidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_cidr_block DataAwsVpcPeeringConnection#peer_cidr_block}.

---

##### `peerOwnerId`<sup>Optional</sup> <a name="peerOwnerId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerOwnerId"></a>

```typescript
public readonly peerOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_owner_id DataAwsVpcPeeringConnection#peer_owner_id}.

---

##### `peerRegion`<sup>Optional</sup> <a name="peerRegion" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_region DataAwsVpcPeeringConnection#peer_region}.

---

##### `peerVpcId`<sup>Optional</sup> <a name="peerVpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#peer_vpc_id DataAwsVpcPeeringConnection#peer_vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#region DataAwsVpcPeeringConnection#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#status DataAwsVpcPeeringConnection#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#tags DataAwsVpcPeeringConnection#tags}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#vpc_id DataAwsVpcPeeringConnection#vpc_id}.

---

### DataAwsVpcPeeringConnectionFilter <a name="DataAwsVpcPeeringConnectionFilter" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

const dataAwsVpcPeeringConnectionFilter: dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#name DataAwsVpcPeeringConnection#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#values DataAwsVpcPeeringConnection#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#name DataAwsVpcPeeringConnection#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/vpc_peering_connection#values DataAwsVpcPeeringConnection#values}.

---

### DataAwsVpcPeeringConnectionPeerCidrBlockSet <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

const dataAwsVpcPeeringConnectionPeerCidrBlockSet: dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsVpcPeeringConnectionCidrBlockSetList <a name="DataAwsVpcPeeringConnectionCidrBlockSetList" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get"></a>

```typescript
public get(index: number): DataAwsVpcPeeringConnectionCidrBlockSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcPeeringConnectionCidrBlockSetOutputReference <a name="DataAwsVpcPeeringConnectionCidrBlockSetOutputReference" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet">DataAwsVpcPeeringConnectionCidrBlockSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcPeeringConnectionCidrBlockSet;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionCidrBlockSet">DataAwsVpcPeeringConnectionCidrBlockSet</a>

---


### DataAwsVpcPeeringConnectionFilterList <a name="DataAwsVpcPeeringConnectionFilterList" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get"></a>

```typescript
public get(index: number): DataAwsVpcPeeringConnectionFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcPeeringConnectionFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>[]

---


### DataAwsVpcPeeringConnectionFilterOutputReference <a name="DataAwsVpcPeeringConnectionFilterOutputReference" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsVpcPeeringConnectionFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionFilter">DataAwsVpcPeeringConnectionFilter</a>

---


### DataAwsVpcPeeringConnectionPeerCidrBlockSetList <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSetList" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get"></a>

```typescript
public get(index: number): DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference <a name="DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer"></a>

```typescript
import { dataAwsVpcPeeringConnection } from '@cdktf/aws-cdk'

new dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet">DataAwsVpcPeeringConnectionPeerCidrBlockSet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsVpcPeeringConnectionPeerCidrBlockSet;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsVpcPeeringConnection.DataAwsVpcPeeringConnectionPeerCidrBlockSet">DataAwsVpcPeeringConnectionPeerCidrBlockSet</a>

---



