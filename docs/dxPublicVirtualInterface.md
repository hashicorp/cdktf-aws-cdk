# `aws_dx_public_virtual_interface`

Refer to the Terraform Registory for docs: [`aws_dx_public_virtual_interface`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface).

# `dxPublicVirtualInterface` Submodule <a name="`dxPublicVirtualInterface` Submodule" id="@cdktf/aws-cdk.dxPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DxPublicVirtualInterface <a name="DxPublicVirtualInterface" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface aws_dx_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

new dxPublicVirtualInterface.DxPublicVirtualInterface(scope: Construct, id: string, config: DxPublicVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig">DxPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig">DxPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress">resetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey">resetBgpAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress">resetCustomerAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts"></a>

```typescript
public putTimeouts(value: DxPublicVirtualInterfaceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---

##### `resetAmazonAddress` <a name="resetAmazonAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetAmazonAddress"></a>

```typescript
public resetAmazonAddress(): void
```

##### `resetBgpAuthKey` <a name="resetBgpAuthKey" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetBgpAuthKey"></a>

```typescript
public resetBgpAuthKey(): void
```

##### `resetCustomerAddress` <a name="resetCustomerAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetCustomerAddress"></a>

```typescript
public resetCustomerAddress(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn">amazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice">awsDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput">addressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput">amazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput">bgpAsnInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput">bgpAuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput">connectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput">customerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput">routeFilterPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput">vlanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily">addressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId">connectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress">customerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `amazonSideAsn`<sup>Required</sup> <a name="amazonSideAsn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonSideAsn"></a>

```typescript
public readonly amazonSideAsn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `awsDevice`<sup>Required</sup> <a name="awsDevice" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.awsDevice"></a>

```typescript
public readonly awsDevice: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeouts"></a>

```typescript
public readonly timeouts: DxPublicVirtualInterfaceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference">DxPublicVirtualInterfaceTimeoutsOutputReference</a>

---

##### `addressFamilyInput`<sup>Optional</sup> <a name="addressFamilyInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamilyInput"></a>

```typescript
public readonly addressFamilyInput: string;
```

- *Type:* string

---

##### `amazonAddressInput`<sup>Optional</sup> <a name="amazonAddressInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddressInput"></a>

```typescript
public readonly amazonAddressInput: string;
```

- *Type:* string

---

##### `bgpAsnInput`<sup>Optional</sup> <a name="bgpAsnInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsnInput"></a>

```typescript
public readonly bgpAsnInput: number;
```

- *Type:* number

---

##### `bgpAuthKeyInput`<sup>Optional</sup> <a name="bgpAuthKeyInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKeyInput"></a>

```typescript
public readonly bgpAuthKeyInput: string;
```

- *Type:* string

---

##### `connectionIdInput`<sup>Optional</sup> <a name="connectionIdInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionIdInput"></a>

```typescript
public readonly connectionIdInput: string;
```

- *Type:* string

---

##### `customerAddressInput`<sup>Optional</sup> <a name="customerAddressInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddressInput"></a>

```typescript
public readonly customerAddressInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routeFilterPrefixesInput`<sup>Optional</sup> <a name="routeFilterPrefixesInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```typescript
public readonly routeFilterPrefixesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DxPublicVirtualInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---

##### `vlanInput`<sup>Optional</sup> <a name="vlanInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlanInput"></a>

```typescript
public readonly vlanInput: number;
```

- *Type:* number

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

---

##### `amazonAddress`<sup>Required</sup> <a name="amazonAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

---

##### `bgpAuthKey`<sup>Required</sup> <a name="bgpAuthKey" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

---

##### `customerAddress`<sup>Required</sup> <a name="customerAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DxPublicVirtualInterfaceConfig <a name="DxPublicVirtualInterfaceConfig" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

const dxPublicVirtualInterfaceConfig: dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily">addressFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn">bgpAsn</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId">connectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#name DxPublicVirtualInterface#name}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes">routeFilterPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan">vlan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress">amazonAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey">bgpAuthKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress">customerAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#id DxPublicVirtualInterface#id}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addressFamily`<sup>Required</sup> <a name="addressFamily" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.addressFamily"></a>

```typescript
public readonly addressFamily: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#address_family DxPublicVirtualInterface#address_family}.

---

##### `bgpAsn`<sup>Required</sup> <a name="bgpAsn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAsn"></a>

```typescript
public readonly bgpAsn: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#bgp_asn DxPublicVirtualInterface#bgp_asn}.

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.connectionId"></a>

```typescript
public readonly connectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#connection_id DxPublicVirtualInterface#connection_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#name DxPublicVirtualInterface#name}.

---

##### `routeFilterPrefixes`<sup>Required</sup> <a name="routeFilterPrefixes" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```typescript
public readonly routeFilterPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#route_filter_prefixes DxPublicVirtualInterface#route_filter_prefixes}.

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#vlan DxPublicVirtualInterface#vlan}.

---

##### `amazonAddress`<sup>Optional</sup> <a name="amazonAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.amazonAddress"></a>

```typescript
public readonly amazonAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#amazon_address DxPublicVirtualInterface#amazon_address}.

---

##### `bgpAuthKey`<sup>Optional</sup> <a name="bgpAuthKey" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.bgpAuthKey"></a>

```typescript
public readonly bgpAuthKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#bgp_auth_key DxPublicVirtualInterface#bgp_auth_key}.

---

##### `customerAddress`<sup>Optional</sup> <a name="customerAddress" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.customerAddress"></a>

```typescript
public readonly customerAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#customer_address DxPublicVirtualInterface#customer_address}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#id DxPublicVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#tags DxPublicVirtualInterface#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#tags_all DxPublicVirtualInterface#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DxPublicVirtualInterfaceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#timeouts DxPublicVirtualInterface#timeouts}

---

### DxPublicVirtualInterfaceTimeouts <a name="DxPublicVirtualInterfaceTimeouts" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

const dxPublicVirtualInterfaceTimeouts: dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#create DxPublicVirtualInterface#create}. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#create DxPublicVirtualInterface#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dx_public_virtual_interface#delete DxPublicVirtualInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### DxPublicVirtualInterfaceTimeoutsOutputReference <a name="DxPublicVirtualInterfaceTimeoutsOutputReference" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dxPublicVirtualInterface } from '@cdktf/aws-cdk'

new dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DxPublicVirtualInterfaceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dxPublicVirtualInterface.DxPublicVirtualInterfaceTimeouts">DxPublicVirtualInterfaceTimeouts</a>

---



