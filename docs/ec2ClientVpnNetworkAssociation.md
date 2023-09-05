# `aws_ec2_client_vpn_network_association`

Refer to the Terraform Registory for docs: [`aws_ec2_client_vpn_network_association`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association).

# `ec2ClientVpnNetworkAssociation` Submodule <a name="`ec2ClientVpnNetworkAssociation` Submodule" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ClientVpnNetworkAssociation <a name="Ec2ClientVpnNetworkAssociation" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association aws_ec2_client_vpn_network_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer"></a>

```typescript
import { ec2ClientVpnNetworkAssociation } from '@cdktf/aws-cdk'

new ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation(scope: Construct, id: string, config: Ec2ClientVpnNetworkAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig">Ec2ClientVpnNetworkAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig">Ec2ClientVpnNetworkAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct"></a>

```typescript
import { ec2ClientVpnNetworkAssociation } from '@cdktf/aws-cdk'

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement"></a>

```typescript
import { ec2ClientVpnNetworkAssociation } from '@cdktf/aws-cdk'

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource"></a>

```typescript
import { ec2ClientVpnNetworkAssociation } from '@cdktf/aws-cdk'

ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId">associationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput">clientVpnEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `associationId`<sup>Required</sup> <a name="associationId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.associationId"></a>

```typescript
public readonly associationId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `clientVpnEndpointIdInput`<sup>Optional</sup> <a name="clientVpnEndpointIdInput" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointIdInput"></a>

```typescript
public readonly clientVpnEndpointIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ClientVpnNetworkAssociationConfig <a name="Ec2ClientVpnNetworkAssociationConfig" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.Initializer"></a>

```typescript
import { ec2ClientVpnNetworkAssociation } from '@cdktf/aws-cdk'

const ec2ClientVpnNetworkAssociationConfig: ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId">clientVpnEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}. |
| <code><a href="#@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#security_groups Ec2ClientVpnNetworkAssociation#security_groups}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientVpnEndpointId`<sup>Required</sup> <a name="clientVpnEndpointId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.clientVpnEndpointId"></a>

```typescript
public readonly clientVpnEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#client_vpn_endpoint_id Ec2ClientVpnNetworkAssociation#client_vpn_endpoint_id}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#subnet_id Ec2ClientVpnNetworkAssociation#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#id Ec2ClientVpnNetworkAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/aws-cdk.ec2ClientVpnNetworkAssociation.Ec2ClientVpnNetworkAssociationConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_client_vpn_network_association#security_groups Ec2ClientVpnNetworkAssociation#security_groups}.

---



