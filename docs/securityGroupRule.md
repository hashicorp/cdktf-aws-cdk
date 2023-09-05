# `aws_security_group_rule`

Refer to the Terraform Registory for docs: [`aws_security_group_rule`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule).

# `securityGroupRule` Submodule <a name="`securityGroupRule` Submodule" id="@cdktf/aws-cdk.securityGroupRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityGroupRule <a name="SecurityGroupRule" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule aws_security_group_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/aws-cdk'

new securityGroupRule.SecurityGroupRule(scope: Construct, id: string, config: SecurityGroupRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig">SecurityGroupRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetCidrBlocks">resetCidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks">resetIpv6CidrBlocks</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetPrefixListIds">resetPrefixListIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetSelfAttribute">resetSelfAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId">resetSourceSecurityGroupId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCidrBlocks` <a name="resetCidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetCidrBlocks"></a>

```typescript
public resetCidrBlocks(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6CidrBlocks` <a name="resetIpv6CidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetIpv6CidrBlocks"></a>

```typescript
public resetIpv6CidrBlocks(): void
```

##### `resetPrefixListIds` <a name="resetPrefixListIds" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetPrefixListIds"></a>

```typescript
public resetPrefixListIds(): void
```

##### `resetSelfAttribute` <a name="resetSelfAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetSelfAttribute"></a>

```typescript
public resetSelfAttribute(): void
```

##### `resetSourceSecurityGroupId` <a name="resetSourceSecurityGroupId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.resetSourceSecurityGroupId"></a>

```typescript
public resetSourceSecurityGroupId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isConstruct"></a>

```typescript
import { securityGroupRule } from '@cdktf/aws-cdk'

securityGroupRule.SecurityGroupRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformElement"></a>

```typescript
import { securityGroupRule } from '@cdktf/aws-cdk'

securityGroupRule.SecurityGroupRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformResource"></a>

```typescript
import { securityGroupRule } from '@cdktf/aws-cdk'

securityGroupRule.SecurityGroupRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput">cidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fromPortInput">fromPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput">ipv6CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput">prefixListIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.selfAttributeInput">selfAttributeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput">sourceSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.toPortInput">toPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fromPort">fromPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.toPort">toPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidrBlocksInput`<sup>Optional</sup> <a name="cidrBlocksInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cidrBlocksInput"></a>

```typescript
public readonly cidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fromPortInput`<sup>Optional</sup> <a name="fromPortInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fromPortInput"></a>

```typescript
public readonly fromPortInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlocksInput`<sup>Optional</sup> <a name="ipv6CidrBlocksInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocksInput"></a>

```typescript
public readonly ipv6CidrBlocksInput: string[];
```

- *Type:* string[]

---

##### `prefixListIdsInput`<sup>Optional</sup> <a name="prefixListIdsInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.prefixListIdsInput"></a>

```typescript
public readonly prefixListIdsInput: string[];
```

- *Type:* string[]

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `selfAttributeInput`<sup>Optional</sup> <a name="selfAttributeInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.selfAttributeInput"></a>

```typescript
public readonly selfAttributeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceSecurityGroupIdInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupIdInput"></a>

```typescript
public readonly sourceSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `toPortInput`<sup>Optional</sup> <a name="toPortInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.toPortInput"></a>

```typescript
public readonly toPortInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `cidrBlocks`<sup>Required</sup> <a name="cidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6CidrBlocks`<sup>Required</sup> <a name="ipv6CidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

---

##### `prefixListIds`<sup>Required</sup> <a name="prefixListIds" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

##### `selfAttribute`<sup>Required</sup> <a name="selfAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceSecurityGroupId`<sup>Required</sup> <a name="sourceSecurityGroupId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityGroupRuleConfig <a name="SecurityGroupRuleConfig" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.Initializer"></a>

```typescript
import { securityGroupRule } from '@cdktf/aws-cdk'

const securityGroupRuleConfig: securityGroupRule.SecurityGroupRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.fromPort">fromPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#from_port SecurityGroupRule#from_port}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#protocol SecurityGroupRule#protocol}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.toPort">toPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#to_port SecurityGroupRule#to_port}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.type">type</a></code> | <code>string</code> | Type of rule, ingress (inbound) or egress (outbound). |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks">cidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#description SecurityGroupRule#description}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#id SecurityGroupRule#id}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks">ipv6CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds">prefixListIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute">selfAttribute</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#self SecurityGroupRule#self}. |
| <code><a href="#@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId">sourceSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fromPort`<sup>Required</sup> <a name="fromPort" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.fromPort"></a>

```typescript
public readonly fromPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#from_port SecurityGroupRule#from_port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#protocol SecurityGroupRule#protocol}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#security_group_id SecurityGroupRule#security_group_id}.

---

##### `toPort`<sup>Required</sup> <a name="toPort" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.toPort"></a>

```typescript
public readonly toPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#to_port SecurityGroupRule#to_port}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of rule, ingress (inbound) or egress (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#type SecurityGroupRule#type}

---

##### `cidrBlocks`<sup>Optional</sup> <a name="cidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.cidrBlocks"></a>

```typescript
public readonly cidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#cidr_blocks SecurityGroupRule#cidr_blocks}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#description SecurityGroupRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#id SecurityGroupRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6CidrBlocks`<sup>Optional</sup> <a name="ipv6CidrBlocks" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.ipv6CidrBlocks"></a>

```typescript
public readonly ipv6CidrBlocks: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#ipv6_cidr_blocks SecurityGroupRule#ipv6_cidr_blocks}.

---

##### `prefixListIds`<sup>Optional</sup> <a name="prefixListIds" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.prefixListIds"></a>

```typescript
public readonly prefixListIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#prefix_list_ids SecurityGroupRule#prefix_list_ids}.

---

##### `selfAttribute`<sup>Optional</sup> <a name="selfAttribute" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.selfAttribute"></a>

```typescript
public readonly selfAttribute: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#self SecurityGroupRule#self}.

---

##### `sourceSecurityGroupId`<sup>Optional</sup> <a name="sourceSecurityGroupId" id="@cdktf/aws-cdk.securityGroupRule.SecurityGroupRuleConfig.property.sourceSecurityGroupId"></a>

```typescript
public readonly sourceSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/security_group_rule#source_security_group_id SecurityGroupRule#source_security_group_id}.

---



