# `data_aws_ec2_transit_gateway_vpn_attachment`

Refer to the Terraform Registory for docs: [`data_aws_ec2_transit_gateway_vpn_attachment`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment).

# `dataAwsEc2TransitGatewayVpnAttachment` Submodule <a name="`dataAwsEc2TransitGatewayVpnAttachment` Submodule" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2TransitGatewayVpnAttachment <a name="DataAwsEc2TransitGatewayVpnAttachment" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment aws_ec2_transit_gateway_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayVpnAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig">DataAwsEc2TransitGatewayVpnAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig">DataAwsEc2TransitGatewayVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetVpnConnectionId">resetVpnConnectionId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2TransitGatewayVpnAttachmentFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpnConnectionId` <a name="resetVpnConnectionId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.resetVpnConnectionId"></a>

```typescript
public resetVpnConnectionId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isConstruct"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformElement"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList">DataAwsEc2TransitGatewayVpnAttachmentFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.vpnConnectionIdInput">vpnConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2TransitGatewayVpnAttachmentFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList">DataAwsEc2TransitGatewayVpnAttachmentFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2TransitGatewayVpnAttachmentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpnConnectionIdInput`<sup>Optional</sup> <a name="vpnConnectionIdInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.vpnConnectionIdInput"></a>

```typescript
public readonly vpnConnectionIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpnConnectionId`<sup>Required</sup> <a name="vpnConnectionId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2TransitGatewayVpnAttachmentConfig <a name="DataAwsEc2TransitGatewayVpnAttachmentConfig" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

const dataAwsEc2TransitGatewayVpnAttachmentConfig: dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#id DataAwsEc2TransitGatewayVpnAttachment#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#tags DataAwsEc2TransitGatewayVpnAttachment#tags}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#transit_gateway_id DataAwsEc2TransitGatewayVpnAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.vpnConnectionId">vpnConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#vpn_connection_id DataAwsEc2TransitGatewayVpnAttachment#vpn_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2TransitGatewayVpnAttachmentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#filter DataAwsEc2TransitGatewayVpnAttachment#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#id DataAwsEc2TransitGatewayVpnAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#tags DataAwsEc2TransitGatewayVpnAttachment#tags}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#transit_gateway_id DataAwsEc2TransitGatewayVpnAttachment#transit_gateway_id}.

---

##### `vpnConnectionId`<sup>Optional</sup> <a name="vpnConnectionId" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentConfig.property.vpnConnectionId"></a>

```typescript
public readonly vpnConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#vpn_connection_id DataAwsEc2TransitGatewayVpnAttachment#vpn_connection_id}.

---

### DataAwsEc2TransitGatewayVpnAttachmentFilter <a name="DataAwsEc2TransitGatewayVpnAttachmentFilter" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

const dataAwsEc2TransitGatewayVpnAttachmentFilter: dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#name DataAwsEc2TransitGatewayVpnAttachment#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#values DataAwsEc2TransitGatewayVpnAttachment#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#name DataAwsEc2TransitGatewayVpnAttachment#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_transit_gateway_vpn_attachment#values DataAwsEc2TransitGatewayVpnAttachment#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2TransitGatewayVpnAttachmentFilterList <a name="DataAwsEc2TransitGatewayVpnAttachmentFilterList" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayVpnAttachmentFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>[]

---


### DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference <a name="DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2TransitGatewayVpnAttachment } from '@cdktf/aws-cdk'

new dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2TransitGatewayVpnAttachmentFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2TransitGatewayVpnAttachment.DataAwsEc2TransitGatewayVpnAttachmentFilter">DataAwsEc2TransitGatewayVpnAttachmentFilter</a>

---



